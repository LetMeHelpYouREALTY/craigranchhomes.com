import {
  AMENITY_SEARCH_RADIUS_METERS,
  CRAIG_RANCH_MAP_CENTER,
  type AmenityCategoryId,
} from '@/lib/craig-ranch-amenity-config';

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

export function searchCategory(
  categoryId: AmenityCategoryId,
  types: readonly string[]
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place, SearchNearbyRankPreference } =
        (await google.maps.importLibrary(
          'places'
        )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: [
          'displayName',
          'location',
          'formattedAddress',
          'googleMapsURI',
          'id',
        ],
        locationRestriction: {
          center: {
            lat: CRAIG_RANCH_MAP_CENTER.latitude,
            lng: CRAIG_RANCH_MAP_CENTER.longitude,
          },
          radius: AMENITY_SEARCH_RADIUS_METERS,
        },
        includedPrimaryTypes: [...types],
        maxResultCount: 10,
        rankPreference: SearchNearbyRankPreference.POPULARITY,
      });

      const mapped: NearbyPlaceResult[] = [];
      for (const place of places ?? []) {
        const loc = place.location;
        if (!loc) continue;
        const json = loc.toJSON?.() ?? {
          lat: loc.lat(),
          lng: loc.lng(),
        };
        mapped.push({
          id: place.id ?? String(mapped.length),
          name: place.displayName ?? 'Place',
          address: place.formattedAddress ?? '',
          lat: json.lat,
          lng: json.lng,
          mapsUri: place.googleMapsURI ?? undefined,
        });
      }
      return mapped;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
