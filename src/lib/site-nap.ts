/**
 * Canonical NAP + CTA helpers for Craig Ranch hyperlocal pages.
 * Must match Google Business Profile exactly.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

export const SITE_NAP = {
  name: 'Craig Ranch Homes',
  phoneDisplay: '(702) 820-5408',
  phoneHref: 'tel:7028205408',
  phoneE164: '+1-702-820-5408',
  email: 'DrDuffy@CraigRanchHomes.com',
  addressLine: '851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032',
  streetAddress: '851 W Lone Mountain Rd, Suite 103',
  city: 'North Las Vegas',
  region: 'NV',
  postalCode: '89032',
  communityZip: '89031',
  communityName: 'Craig Ranch',
  latitude: 36.2469871,
  longitude: -115.1554618,
  facebookUrl: 'https://www.facebook.com/CraigRanchHomes',
  hoursLine: 'Open daily 8:00 AM–8:00 PM',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+Suite+103+North+Las+Vegas+NV+89032',
  directionsPath: '/directions',
  findAddressPath: '/find-address#address-lookup',
  reviewsHref: 'https://share.google/b7iar6aMhBb9ayPkF',
  agentName: 'Dr. Jan Duffy',
  brokerage: 'Berkshire Hathaway HomeServices Nevada',
  license: 'S.0197614.LLC',
} as const;

/** Canonical brand mark for schema, favicon, and header (512×512 PNG). */
export const SITE_LOGO_PATH = '/logo.png' as const;
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO_PATH}`;
export const SITE_AGENT_PHOTO_PATH = '/images/dr-jan-duffy-headshot.jpg' as const;
export const SITE_AGENT_PHOTO_URL = `${SITE_URL}${SITE_AGENT_PHOTO_PATH}`;

/** Directions links land on the planner, below the office listings band. */
export function directionsHref(from?: string): string {
  const origin = from?.trim();
  const query = origin ? `?from=${encodeURIComponent(origin)}` : '';
  return `${SITE_NAP.directionsPath}${query}#visit-planner`;
}

export type HyperlocalLink = {
  href: string;
  label: string;
  description: string;
};

/** Primary realtor-service landings for GEO/AEO internal linking */
export const HYPERLOCAL_SERVICE_LINKS: ReadonlyArray<HyperlocalLink> = [
  {
    href: '/buy-craig-ranch-homes',
    label: 'Buy a Craig Ranch Home',
    description:
      'Buyer representation for listings in Craig Ranch, North Las Vegas 89031.',
  },
  {
    href: '/sell-craig-ranch',
    label: 'Sell Your Craig Ranch Home',
    description:
      'Listing strategy, pricing, and marketing for Craig Ranch sellers.',
  },
  {
    href: '/home-valuation-craig-ranch',
    label: 'Craig Ranch Home Valuation',
    description:
      'Get a data-backed price range using local comps and current demand.',
  },
  {
    href: '/craig-ranch-realtor',
    label: 'Craig Ranch REALTOR®',
    description:
      'Work with Dr. Jan Duffy for hyperlocal Craig Ranch guidance.',
  },
  {
    href: '/first-time-home-buyers-craig-ranch-89031',
    label: 'First-Time Buyers in 89031',
    description:
      'Step-by-step buying help for first-time buyers near Craig Ranch.',
  },
  {
    href: '/luxury-homes-craig-ranch-north-las-vegas',
    label: 'Luxury Craig Ranch Homes',
    description:
      'Larger floor plans, upgrades, and higher price-band listings.',
  },
  {
    href: '/craig-ranch-investment-properties',
    label: 'Craig Ranch Investments',
    description:
      'Rental and resale analysis for North Las Vegas investors.',
  },
  {
    href: '/relocate-to-craig-ranch-north-las-vegas',
    label: 'Relocate to Craig Ranch',
    description:
      'Out-of-area buyer support with virtual tours and remote closings.',
  },
  {
    href: '/nellis-afb-relocation-craig-ranch',
    label: 'Nellis AFB Relocation',
    description:
      'Military PCS timelines and Craig Ranch housing options near Nellis.',
  },
  {
    href: '/craig-ranch-89031-real-estate',
    label: '89031 Real Estate Guide',
    description:
      'ZIP-focused Craig Ranch market context for North Las Vegas 89031.',
  },
  {
    href: '/homes-near-eva-g-simmons-elementary',
    label: 'Homes Near Eva G. Simmons',
    description:
      'Listings and buyer guidance near Eva G. Simmons Elementary.',
  },
  {
    href: '/homes-near-findlay-middle-school',
    label: 'Homes Near Findlay Middle',
    description:
      'Homes near Clifford O. Pete Findlay Middle School.',
  },
  {
    href: '/homes-near-mojave-high-school',
    label: 'Homes Near Mojave High',
    description: 'Buyer help for homes near Mojave High School.',
  },
  {
    href: '/craig-ranch-schools',
    label: 'Craig Ranch Schools Overview',
    description:
      'Named schools serving Craig Ranch with commute and listing tips.',
  },
  {
    href: '/craig-ranch-market-report',
    label: 'Craig Ranch Market Report',
    description:
      'Prices, days on market, and inventory for Craig Ranch buyers/sellers.',
  },
  {
    href: '/new-construction-craig-ranch',
    label: 'New Construction Craig Ranch',
    description:
      'Builder inventory and lot options in and near Craig Ranch.',
  },
  {
    href: '/amenities#amenity-map',
    label: 'Nearby Amenities',
    description:
      'Interactive map of dining, groceries, parks, schools, and healthcare near Craig Ranch.',
  },
  {
    href: '/directions#visit-planner',
    label: 'Directions to the Office',
    description:
      'Travel times to Suite 103 by car, transit, walking, and bicycle.',
  },
  {
    href: '/find-address#address-lookup',
    label: 'Enter an Address',
    description:
      'Confirm a Las Vegas address before you request directions or send a note.',
  },
] as const;
