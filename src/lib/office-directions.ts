import { SITE_NAP } from '@/lib/site-nap';

export const OFFICE_DESTINATION = SITE_NAP.addressLine;

export const TRAVEL_MODES = [
  { id: 'DRIVING', label: 'Driving', travelMode: 'driving', dirflg: 'd' },
  { id: 'TRANSIT', label: 'Transit', travelMode: 'transit', dirflg: 'r' },
  { id: 'WALKING', label: 'Walking', travelMode: 'walking', dirflg: 'w' },
  { id: 'BICYCLING', label: 'Bicycling', travelMode: 'bicycling', dirflg: 'b' },
] as const;

export type TravelModeId = (typeof TRAVEL_MODES)[number]['id'];

export const VISIT_PRESETS = [
  {
    label: 'Harry Reid International Airport',
    address: 'Harry Reid International Airport, Las Vegas, NV',
  },
  {
    label: 'Craig Ranch Regional Park',
    address: 'Craig Ranch Regional Park, North Las Vegas, NV',
  },
  {
    label: 'Nellis Air Force Base',
    address: 'Nellis Air Force Base, Las Vegas, NV',
  },
] as const;

export function googleMapsDirectionsUrl(
  origin: string,
  mode: TravelModeId
): string {
  const travelMode = TRAVEL_MODES.find((item) => item.id === mode);
  const params = new URLSearchParams({
    api: '1',
    origin,
    destination: OFFICE_DESTINATION,
    travelmode: travelMode?.travelMode ?? 'driving',
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function directionsEmbedUrl(origin: string, mode: TravelModeId): string {
  const travelMode = TRAVEL_MODES.find((item) => item.id === mode);
  const params = new URLSearchParams({
    saddr: origin,
    daddr: OFFICE_DESTINATION,
    dirflg: travelMode?.dirflg ?? 'd',
    output: 'embed',
  });
  return `https://www.google.com/maps?${params.toString()}`;
}

export function addressEmbedUrl(address: string): string {
  const params = new URLSearchParams({
    q: address,
    z: '16',
    output: 'embed',
  });
  return `https://www.google.com/maps?${params.toString()}`;
}

export function travelModeFromId(
  mode: TravelModeId,
  travelMode: typeof google.maps.TravelMode
): google.maps.TravelMode {
  switch (mode) {
    case 'DRIVING':
      return travelMode.DRIVING;
    case 'TRANSIT':
      return travelMode.TRANSIT;
    case 'WALKING':
      return travelMode.WALKING;
    case 'BICYCLING':
      return travelMode.BICYCLING;
    default: {
      const unknown: never = mode;
      return unknown;
    }
  }
}
