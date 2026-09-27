/**
 * Craig Ranch (North Las Vegas 89031) amenity map center + curated places.
 * Scoped to craigranchhomes.com — not shared template defaults for other communities.
 *
 * Map center: Craig Ranch Regional Park main entrance area (628 W Craig Rd),
 * aligned with community schema coordinates used elsewhere on this site (36.2831, -115.1331).
 */

import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

export const CRAIG_RANCH_MAP_CENTER = {
  latitude: 36.2831,
  longitude: -115.1331,
  label: 'Craig Ranch',
  addressLine: 'Craig Ranch, North Las Vegas, NV 89031',
  /** Documented anchor: Craig Ranch Regional Park */
  anchorName: 'Craig Ranch Regional Park',
  anchorAddress: '628 W Craig Rd, North Las Vegas, NV 89032',
} as const;

export const AMENITY_SEARCH_RADIUS_METERS = 8000;

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) includedPrimaryTypes for searchNearby */
  primaryTypes: readonly string[];
};

/** Family master-planned community — schools included, not de-emphasized */
export const AMENITY_CATEGORIES: readonly AmenityCategory[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
  },
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy', 'drugstore'],
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
  },
] as const;

export type CuratedAmenity = {
  id: string;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  category: AmenityCategoryId;
  schemaType:
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'GroceryStore'
    | 'Park'
    | 'GolfCourse'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'School'
    | 'ExerciseGym'
    | 'Place';
  note?: string;
};

/** Verified names + street addresses for fallback list and ItemList schema */
export const CURATED_CRAIG_RANCH_AMENITIES: readonly CuratedAmenity[] = [
  {
    id: 'craig-ranch-regional-park',
    name: 'Craig Ranch Regional Park',
    address: '628 W Craig Rd, North Las Vegas, NV 89032',
    latitude: 36.2415,
    longitude: -115.1589,
    category: 'parks',
    schemaType: 'Park',
    note: '170-acre regional park with trails, sports fields, and community events.',
  },
  {
    id: 'north-mesa-plaza',
    name: 'North Mesa Plaza',
    address: '2424 E Craig Rd, North Las Vegas, NV 89030',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    note: 'Retail center with Walmart and other everyday shopping.',
  },
  {
    id: 'simmons-shopping',
    name: 'Simmons Shopping Center',
    address: '4430 Simmons St, North Las Vegas, NV 89031',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    note: 'Albertsons, Walmart Neighborhood Market, and local dining.',
  },
  {
    id: 'eva-g-simmons',
    name: 'Eva G. Simmons Elementary School',
    address: '5600 Simmons St, North Las Vegas, NV 89031',
    latitude: 36.2579,
    longitude: -115.1215,
    category: 'schools',
    schemaType: 'School',
  },
  {
    id: 'findlay-middle',
    name: 'Clifford O. Pete Findlay Middle School',
    address: '333 W Brooks Ave, North Las Vegas, NV 89030',
    category: 'schools',
    schemaType: 'School',
  },
  {
    id: 'mojave-high',
    name: 'Mojave High School',
    address: '5302 Goldfield St, North Las Vegas, NV 89031',
    category: 'schools',
    schemaType: 'School',
  },
  {
    id: 'cannery-casino',
    name: 'Cannery Casino & Hotel',
    address: '2121 E Craig Rd, North Las Vegas, NV 89030',
    category: 'restaurants',
    schemaType: 'Restaurant',
    note: 'Dining and entertainment north of the Strip.',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    id: 'north-vista-hospital',
    name: 'North Vista Hospital',
    address: '1409 E Lake Mead Blvd, North Las Vegas, NV 89030',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    id: 'va-southern-nevada',
    name: 'VA Southern Nevada Healthcare System (North Las Vegas)',
    address: '6900 N Pecos Rd, North Las Vegas, NV 89086',
    category: 'healthcare',
    schemaType: 'Hospital',
    note: 'Referenced in local Craig Ranch area guides for nearby medical access.',
  },
] as const;

export const AMENITIES_PAGE_FAQS: ReadonlyArray<{
  question: string;
  answer: string;
}> = [
  {
    question: 'What grocery stores are near Craig Ranch?',
    answer:
      'Simmons Shopping Center on Simmons Street and North Mesa Plaza on East Craig Road both offer major grocery options within a short drive of Craig Ranch addresses in North Las Vegas 89031.',
  },
  {
    question: 'How far is Craig Ranch from the Las Vegas Strip?',
    answer:
      'Craig Ranch in North Las Vegas is roughly 11 miles from the central Las Vegas Strip via I-15 or US-95, depending on your starting block and traffic (approximate drive time).',
  },
  {
    question: 'Are there hospitals near Craig Ranch?',
    answer:
      'North Vista Hospital on East Lake Mead Boulevard and Centennial Hills Hospital on North Durango Drive serve the North Las Vegas and northwest valley; the VA Southern Nevada campus on North Pecos Road is also commonly used by veterans in the area.',
  },
  {
    question: 'What parks are in Craig Ranch?',
    answer:
      'Craig Ranch Regional Park is the headline amenity—a 170-acre Clark County park on West Craig Road with trails, sports fields, and year-round events, plus smaller community parks woven through the master plan.',
  },
  {
    question: 'Which schools serve Craig Ranch?',
    answer:
      'Many Craig Ranch addresses are associated with Eva G. Simmons Elementary, Clifford O. Pete Findlay Middle School, and Mojave High School in the Clark County School District—always confirm assignment for a specific MLS listing.',
  },
  {
    question: 'How far is Craig Ranch from Harry Reid International Airport?',
    answer:
      'Harry Reid International Airport is approximately 15 miles south of Craig Ranch via I-15, though rush-hour traffic can add time (approximate).',
  },
  {
    question: 'Where do residents shop and dine near Craig Ranch?',
    answer:
      'West Craig Road has grown into a restaurant corridor, while Simmons Shopping Center and North Mesa Plaza cover groceries and everyday retail minutes from Craig Ranch homes.',
  },
  {
    question: 'Is Craig Ranch close to Nellis Air Force Base?',
    answer:
      'Nellis Air Force Base sits northeast of Craig Ranch; many military buyers use Craig Ranch for newer homes and park access with a manageable commute to base gates (approximate drive time varies by gate and traffic).',
  },
];

export function curatedAmenitiesForCategory(
  categoryId: AmenityCategoryId
): readonly CuratedAmenity[] {
  return CURATED_CRAIG_RANCH_AMENITIES.filter(a => a.category === categoryId);
}

export function googleMapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function googleMapsPlaceUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function embedMapFallbackUrl(): string {
  const { latitude, longitude } = CRAIG_RANCH_MAP_CENTER;
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;
}

export function generateCraigRanchCommunityPlaceSchema() {
  const { latitude, longitude, label, addressLine } = CRAIG_RANCH_MAP_CENTER;
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}/amenities#craig-ranch-place`,
    name: label,
    description:
      'Master-planned Craig Ranch community in North Las Vegas, Nevada ZIP 89031.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_NAP.city,
      addressRegion: SITE_NAP.region,
      postalCode: SITE_NAP.communityZip,
      addressCountry: 'US',
      streetAddress: addressLine,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
  };
}

export function generateFeaturedAmenitiesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured places near ${SITE_NAP.communityName}`,
    itemListElement: CURATED_CRAIG_RANCH_AMENITIES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.address.split(',')[0]?.trim() ?? place.address,
          addressLocality: SITE_NAP.city,
          addressRegion: SITE_NAP.region,
          addressCountry: 'US',
        },
      },
    })),
  };
}
