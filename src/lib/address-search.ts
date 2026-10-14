/**
 * Address suggestions via the public Nominatim search API.
 * Usage policy: at most one request per second, a identifying User-Agent,
 * cached responses, and visible OpenStreetMap attribution in the UI.
 * https://operations.osmfoundation.org/policies/nominatim/
 */

export type AddressScope = 'address' | 'place';

export type AddressSuggestion = {
  label: string;
  lat: number;
  lng: number;
};

type NominatimAddress = {
  house_number?: string;
  road?: string;
  city?: string;
  town?: string;
  village?: string;
  hamlet?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
};

type NominatimItem = {
  lat: string;
  lon: string;
  name?: string;
  display_name: string;
  category?: string;
  addresstype?: string;
  address?: NominatimAddress;
};

const VIEWBOX = '-115.55,36.50,-114.70,35.90';
const USER_AGENT = 'CraigRanchHomes/1.0 (https://www.craigranchhomes.com)';
const CACHE_LIMIT = 200;

const cache = new Map<string, AddressSuggestion[]>();
let queue: Promise<void> = Promise.resolve();
let lastRequestAt = 0;

const STATE_ABBR: Record<string, string> = {
  Nevada: 'NV',
};

function pace(): Promise<void> {
  const run = queue.then(async () => {
    const wait = 1100 - (Date.now() - lastRequestAt);
    if (wait > 0) {
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
    lastRequestAt = Date.now();
  });
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

export function nominatimQuery(input: string, scope: AddressScope): string {
  const trimmed = input.trim().replace(/\s+/g, ' ');
  if (scope === 'place') return trimmed;
  if (/vegas|nevada|\bnv\b|henderson|summerlin|paradise/i.test(trimmed)) {
    return trimmed;
  }
  return `${trimmed}, North Las Vegas, NV`;
}

function isPoiName(item: NominatimItem): boolean {
  const name = item.name?.trim();
  if (!name) return false;
  const road = item.address?.road;
  const house = item.address?.house_number;
  if (road && name === road) return false;
  if (house && name === house) return false;
  if (house && road && name === `${house} ${road}`) return false;
  return true;
}

function isNominatimItem(value: unknown): value is NominatimItem {
  if (!value || typeof value !== 'object') return false;
  const item = value as NominatimItem;
  return typeof item.lat === 'string' && typeof item.lon === 'string' && typeof item.display_name === 'string';
}

function inNevada(item: NominatimItem): boolean {
  const state = item.address?.state;
  return !state || state === 'Nevada';
}

function isHouse(item: NominatimItem): boolean {
  return Boolean(item.address?.house_number && item.address.road);
}

function isRoad(item: NominatimItem): boolean {
  return item.category === 'highway' || item.addresstype === 'road';
}

function isBroadArea(item: NominatimItem): boolean {
  return (
    item.category === 'boundary' ||
    item.addresstype === 'suburb' ||
    item.addresstype === 'city' ||
    item.addresstype === 'town' ||
    item.addresstype === 'county' ||
    item.addresstype === 'state' ||
    item.addresstype === 'postcode'
  );
}

export function formatNominatimLabel(item: NominatimItem, scope: AddressScope): string {
  const address = item.address;
  const streetLine = address?.road
    ? [address.house_number, address.road].filter(Boolean).join(' ')
    : '';
  const city =
    address?.city || address?.town || address?.village || address?.hamlet || address?.suburb || '';
  const region = address?.state ? (STATE_ABBR[address.state] ?? address.state) : '';
  const regionLine = [region, address?.postcode].filter(Boolean).join(' ');
  const fallback = item.display_name.split(',')[0]?.trim() ?? item.display_name;
  if (scope === 'place' && isPoiName(item)) {
    return [item.name, streetLine, city, regionLine].filter((part) => part && part.length > 0).join(', ');
  }
  const line1 = streetLine || address?.house_number || (isPoiName(item) ? item.name : '') || fallback;
  return [line1, city, regionLine].filter((part) => part.length > 0).join(', ');
}

function toSuggestion(item: NominatimItem, scope: AddressScope): AddressSuggestion | null {
  const lat = Number(item.lat);
  const lng = Number(item.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { label: formatNominatimLabel(item, scope), lat, lng };
}

export function chooseSuggestions(
  items: readonly NominatimItem[],
  scope: AddressScope
): AddressSuggestion[] {
  const nevada = items.filter(inNevada);
  let pool = nevada;
  if (scope === 'address') {
    const houses = nevada.filter(isHouse);
    pool = houses.length > 0 ? houses : nevada.filter((item) => isHouse(item) || isRoad(item));
  } else {
    const specific = nevada.filter((item) => !isBroadArea(item));
    pool = specific.length > 0 ? specific : nevada;
  }

  const ranked = [...pool].sort((a, b) => {
    const score = (item: NominatimItem) => {
      if (isHouse(item)) return 0;
      if (
        item.category === 'aeroway' ||
        item.category === 'leisure' ||
        item.category === 'amenity' ||
        item.category === 'tourism'
      ) {
        return 1;
      }
      if (isRoad(item)) return 2;
      if (isBroadArea(item)) return 4;
      return 3;
    };
    return score(a) - score(b);
  });

  const suggestions: AddressSuggestion[] = [];
  const seen = new Set<string>();
  for (const item of ranked) {
    const suggestion = toSuggestion(item, scope);
    if (!suggestion) continue;
    const key = suggestion.label.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    suggestions.push(suggestion);
    if (suggestions.length === 6) break;
  }
  return suggestions;
}

async function fetchNominatim(query: string, scope: AddressScope): Promise<AddressSuggestion[]> {
  const params = new URLSearchParams({
    q: query,
    format: 'jsonv2',
    addressdetails: '1',
    limit: '8',
    countrycodes: 'us',
    viewbox: VIEWBOX,
    bounded: '0',
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
      'User-Agent': USER_AGENT,
    },
    signal: AbortSignal.timeout(6000),
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('nominatim');
  }
  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('nominatim');
  }
  return chooseSuggestions(data.filter(isNominatimItem), scope);
}

export async function searchAddresses(
  input: string,
  scope: AddressScope
): Promise<AddressSuggestion[]> {
  const query = nominatimQuery(input, scope);
  const key = `${scope}:${query.toLowerCase()}`;
  const cached = cache.get(key);
  if (cached) return cached;

  await pace();
  const suggestions = await fetchNominatim(query, scope);
  cache.set(key, suggestions);
  if (cache.size > CACHE_LIMIT) {
    const oldest = cache.keys().next().value;
    if (oldest) cache.delete(oldest);
  }
  return suggestions;
}
