// Google Business Profile Schema Data
// Must match the Craig Ranch Homes GBP listing exactly.

import {
  SITE_URL,
  nap,
  ctaPhone,
  geo,
  maps,
  socialProfiles,
  businessHours,
  gbpDescription,
  foundingDate,
  serviceArea,
} from "./contact";

export const businessInfo = {
  name: nap.name,
  address: {
    streetAddress: nap.street,
    addressLocality: nap.city,
    addressRegion: nap.state,
    postalCode: nap.zip,
    addressCountry: "US",
  },
  phone: {
    display: ctaPhone.display,
    tel: ctaPhone.tel,
  },
  email: nap.email,
  url: SITE_URL,
  license: nap.license,
  priceRange: "$$",
  foundingDate,
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "Closed",
  },
  geo: {
    latitude: geo.latitude,
    longitude: geo.longitude,
  },
  serviceAreas: [
    serviceArea.label,
    "Craig Ranch, North Las Vegas, NV",
    "North Las Vegas, NV",
  ],
  categories: {
    primary: "Real Estate Agent",
    secondary: ["Real Estate Agency", "Real Estate Consultant"],
  },
  services: [
    { name: "Buyer Representation", description: "Offer strategy, inspections, and closing timelines in Craig Ranch, ZIP 89031" },
    { name: "Listing Strategy", description: "Price, square footage, HOA, and park-proximity comps for Craig Ranch sellers" },
    { name: "Home Valuations", description: "Address-level ranges using local sales and active competition" },
    { name: "New Construction", description: "Builder registration and floor-plan comparison in Craig Ranch" },
    { name: "Relocation Support", description: "Inbound tours sequenced from the Lone Mountain office" },
    { name: "Nellis AFB PCS Moves", description: "PCS timelines and commute minutes to Nellis Air Force Base" },
  ],
  attributes: {
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
    ],
    serviceOptions: ["Online appointments", "Onsite services"],
    planning: ["Appointment required", "Accepts new clients"],
    amenities: ["Free parking"],
  },
  socialProfiles: [
    socialProfiles.facebook,
    socialProfiles.instagram,
    socialProfiles.linkedin,
    socialProfiles.youtube,
  ],
  languages: ["English"],
  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],
};

export { gbpDescription };

export const gbpFAQs = [
  {
    question: "What areas does Craig Ranch Homes serve?",
    answer: `Craig Ranch Homes focuses on Craig Ranch, North Las Vegas (ZIP 89031). Office: ${nap.fullAddress}. Call or text ${ctaPhone.display}.`,
  },
  {
    question: "What is the office phone and text number?",
    answer: `Call or text ${ctaPhone.display}. Google Business lists this as the primary phone and SMS number for Craig Ranch Homes.`,
  },
  {
    question: "Where is the Craig Ranch Homes office?",
    answer: `${nap.fullAddress}. Get directions from the contact page. Hours: Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–4:00 PM, Sunday closed.`,
  },
  {
    question: "What are Craig Ranch Homes office hours?",
    answer: "Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–4:00 PM, Sunday closed. Call or text (702) 820-5408 to schedule a showing.",
  },
  {
    question: "Does Dr. Jan Duffy help with Nellis AFB PCS moves?",
    answer: `Yes. Services include Nellis AFB PCS moves, buyer representation, listing strategy, home valuations, new construction, and relocation support. Call or text ${ctaPhone.display}.`,
  },
  {
    question: "How do you compare Craig Ranch listings?",
    answer: "We compare listings by price, square footage, HOA, and proximity to Craig Ranch Regional Park and area trails, then guide offers, negotiations, and closing with clear timelines.",
  },
  {
    question: "When did Craig Ranch Homes open?",
    answer: "The Google Business Profile opening date is September 2007. Dr. Jan Duffy, REALTOR®, license S.0197614.LLC, with Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    question: "How do I schedule a consultation?",
    answer: `Call or text ${ctaPhone.display}, or email ${nap.email}. Office visits at ${nap.fullAddress}. Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–4:00 PM, Sunday closed.`,
  },
];

export function generateLocalBusinessSchema() {
  const openingHoursSpecification = businessHours
    .filter((row) => row.opens && row.closes)
    .map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.day,
      opens: row.opens,
      closes: row.closes,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: nap.name,
    alternateName: ["Dr. Jan Duffy", "Dr. Jan Duffy REALTOR®", nap.brokerage],
    image: [
      `${SITE_URL}/images/dr-jan-duffy.jpg`,
    ],
    logo: `${SITE_URL}/images/dr-jan-duffy.jpg`,
    url: SITE_URL,
    telephone: ctaPhone.tel,
    email: nap.email,
    description: gbpDescription,
    priceRange: businessInfo.priceRange,
    foundingDate,
    hasMap: maps.placeUrl,
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    knowsAbout: [
      "Craig Ranch real estate",
      "North Las Vegas 89031 homes",
      "Craig Ranch Regional Park",
      "Nellis AFB PCS moves",
      "New construction North Las Vegas",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.state,
      postalCode: nap.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification,
    areaServed: [
      {
        "@type": "Place",
        name: "Craig Ranch",
      },
      {
        "@type": "PostalAddress",
        addressLocality: serviceArea.city,
        addressRegion: serviceArea.state,
        postalCode: serviceArea.zip,
        addressCountry: "US",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: nap.brokerage,
    },
    sameAs: [...businessInfo.socialProfiles, maps.placeUrl],
  };
}

export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
