/**
 * Single source of truth for NAP, phones, hours, maps, and social.
 * Must match the Craig Ranch Homes Google Business Profile exactly.
 * Dedicated tracking / GBP line: (702) 820-5408 (call + SMS).
 */

export const SITE_URL = "https://www.craigranchhomes.com";

export const gbpCategory = "Real Estate Agent";

export const gbpDescription =
  "Craig Ranch Homes is the hyperlocal real estate practice of Dr. Jan Duffy, REALTOR®, focused on buying and selling in Craig Ranch, North Las Vegas (ZIP 89031). We help clients compare listings by price, square footage, HOA, and proximity to Craig Ranch Regional Park and area trails, then guide offers, negotiations, and closing with clear timelines. Services include buyer representation, listing strategy, home valuations, new construction, relocation support, and Nellis AFB PCS moves.";

export const foundingDate = "2007-09";

export const ctaPhone = {
  display: "(702) 820-5408",
  displayShort: "702-820-5408",
  tel: "+17028205408",
  href: "tel:+17028205408",
} as const;

/** GBP lists SMS as the primary contact method on the same tracking number. */
export const smsPhone = {
  display: "(702) 820-5408",
  displayShort: "702-820-5408",
  tel: "+17028205408",
  href: "sms:+17028205408",
} as const;

/** Same number as CTA — this GBP listing has one public phone. */
export const officePhone = {
  display: "(702) 820-5408",
  displayShort: "702-820-5408",
  tel: "+17028205408",
  href: "tel:+17028205408",
} as const;

export const nap = {
  name: "Craig Ranch Homes",
  shortName: "Dr. Jan Duffy",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  email: "DrDuffy@CraigRanchHomes.com",
  emailHref: "mailto:DrDuffy@CraigRanchHomes.com",
  street: "851 W Lone Mountain Rd, Suite 103",
  city: "North Las Vegas",
  state: "NV",
  zip: "89032",
  fullAddress: "851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032",
} as const;

export const serviceArea = {
  city: "North Las Vegas",
  state: "NV",
  zip: "89031",
  label: "North Las Vegas, NV 89031",
  neighborhood: "Craig Ranch",
} as const;

export const geo = {
  /** Nominatim/OSM pin for 851 W Lone Mountain Rd, North Las Vegas (2026-09-16) */
  latitude: 36.2469871,
  longitude: -115.1554618,
} as const;

export const businessHours = [
  { day: "Monday", opens: "09:00", closes: "18:00", label: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", opens: "09:00", closes: "18:00", label: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", opens: "09:00", closes: "18:00", label: "9:00 AM – 6:00 PM" },
  { day: "Thursday", opens: "09:00", closes: "18:00", label: "9:00 AM – 6:00 PM" },
  { day: "Friday", opens: "09:00", closes: "18:00", label: "9:00 AM – 6:00 PM" },
  { day: "Saturday", opens: "10:00", closes: "16:00", label: "10:00 AM – 4:00 PM" },
  { day: "Sunday", opens: null, closes: null, label: "Closed" },
] as const;

export const hoursSummary = "Mon–Fri 9am–6pm · Sat 10am–4pm · Sun closed";

const mapsQuery = "851+W+Lone+Mountain+Rd+Suite+103+North+Las+Vegas+NV+89032";

export const maps = {
  embedSrc: `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=851+W+Lone+Mountain+Rd+Suite+103,+North+Las+Vegas,+NV+89032",
  placeUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
} as const;

export const googleReviewsUrl =
  "https://www.google.com/search?q=Craig+Ranch+Homes+North+Las+Vegas+reviews";

export const socialProfiles = {
  facebook: "https://www.facebook.com/drjanduffy",
  instagram: "https://www.instagram.com/drjanduffy",
  linkedin: "https://www.linkedin.com/in/drjanduffy",
  youtube: "https://www.youtube.com/@drjanduffy",
} as const;

export const realscout = {
  agentEncodedId: "QWdlbnQtMjI1MDUw",
  searchUrl: "https://drjanduffy.realscout.com/",
  scriptSrc: "https://em.realscout.com/widgets/realscout-web-components.esm.js",
} as const;

export const calendly = {
  showingUrl: "https://calendly.com/drjanduffy/showing",
} as const;
