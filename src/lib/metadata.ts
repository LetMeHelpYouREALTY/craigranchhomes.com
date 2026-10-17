import type { Metadata } from 'next';
import {
  SITE_AGENT_PHOTO_URL,
  SITE_LOGO_URL,
  SITE_NAP,
  SITE_URL,
} from '@/lib/site-nap';

const siteUrl = SITE_URL;

const businessAddress = {
  streetAddress: '851 W Lone Mountain Rd, Suite 103',
  addressLocality: 'North Las Vegas',
  addressRegion: 'NV',
  postalCode: '89032',
  addressCountry: 'US',
} as const;

const businessGeo = {
  latitude: SITE_NAP.latitude,
  longitude: SITE_NAP.longitude,
} as const;

const businessName = 'Craig Ranch Homes';
const businessPhone = '+1-702-820-5408';
const businessEmail = 'DrDuffy@CraigRanchHomes.com';

export const CRAIG_RANCH_FAQS = [
  {
    question: 'What amenities does Craig Ranch offer?',
    answer:
      "Craig Ranch is a master-planned community in North Las Vegas, winner of 'Best Planned Community' in 2020. Homes typically range from about 1,519 to 2,638 sq ft. Residents have access to 170-acre Craig Ranch Regional Park, 5 miles of trails, nearby shopping and dining, and schools including Eva G. Simmons Elementary, Clifford O. Pete Findlay Middle School, and Mojave High School. The park hosts over 40 events per year.",
  },
  {
    question: 'What is the average price range for homes in Craig Ranch?',
    answer:
      'In the August 2026 snapshot, Craig Ranch prices ranged from $370,000 to $1.8 million. Average value was $427,967, about $242 per square foot, and the median sale price was $415,000. Ask for a current comp before you price an offer.',
  },
  {
    question: 'How long do properties typically stay on the market?',
    answer:
      'In the August 2026 snapshot, Craig Ranch homes averaged 46 days on market, compared with a national average of 53 days in that same snapshot. Live comps, inventory, and park proximity still decide the pace for a specific address.',
  },
  {
    question: 'What types of properties are available?',
    answer:
      'We offer a diverse selection including single-family homes, luxury estates, and new construction properties. Each category features different amenities and price points to suit various buyer needs and preferences.',
  },
  {
    question: 'Do you help with financing and mortgage options?',
    answer:
      'Yes, we work with trusted mortgage partners to help you find the best financing options. We can connect you with lenders who specialize in luxury home financing and offer competitive rates.',
  },
  {
    question: 'Can I schedule a property tour?',
    answer:
      'Absolutely! You can schedule a tour through our website or by contacting us directly. We offer both in-person and virtual tours to accommodate your preferences and schedule.',
  },
] as const;

const siteConfig = {
  name: businessName,
  url: siteUrl,
  description:
    'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Find your dream home with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada specializing in Craig Ranch properties.',
  ogImage: '/54-DJI_20250707171528_0828_D.jpg',
  twitterHandle: '@craigranchvegas',
  locale: 'en_US',
  type: 'website',
};

/**
 * Generate comprehensive metadata for pages
 */
export function generateMetadata({
  title,
  description,
  keywords,
  path = '/',
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;
  const fullImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${siteConfig.url}${ogImage}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'North Las Vegas, Las Vegas',
      'geo.position': `${businessGeo.latitude};${businessGeo.longitude}`,
      ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
    },
  };
}

/**
 * Generate LocalBusiness schema for contact pages
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: businessName,
    description:
      'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Expert real estate agent specializing in Craig Ranch homes and properties.',
    url: siteUrl,
    telephone: businessPhone,
    email: businessEmail,
    image: `${siteUrl}/54-DJI_20250707171528_0828_D.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: SITE_LOGO_URL,
      width: 512,
      height: 512,
    },
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...businessGeo,
    },
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+Suite+103+North+Las+Vegas+NV+89032',
    areaServed: [
      { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    employee: {
      '@id': `${siteUrl}#person`,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
      },
      {
        '@type': 'ContactPoint',
        email: businessEmail,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
  };
}

/** Dr. Jan Duffy as a person entity, distinct from the office and the website. */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: SITE_NAP.agentName,
    jobTitle: 'REALTOR®',
    url: `${siteUrl}/craig-ranch-realtor`,
    telephone: businessPhone,
    email: businessEmail,
    image: SITE_AGENT_PHOTO_URL,
    identifier: SITE_NAP.license,
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
  };
}

/**
 * Generate Organization schema for Google Knowledge Panel
 * This is required for Google to display your logo and business information in search results
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: businessName,
    legalName: businessName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: SITE_LOGO_URL,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/54-DJI_20250707171528_0828_D.jpg`,
    description:
      'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Expert real estate agent specializing in Craig Ranch homes and properties.',
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: businessEmail,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      SITE_NAP.facebookUrl,
      'https://www.instagram.com/drjanduffy',
      'https://www.youtube.com/@DrDuffy',
      'https://twitter.com/drjanduffy',
      'https://www.linkedin.com/in/lvrmembers',
      'https://www.tiktok.com/@dr.janduffy',
      'https://www.pinterest.com/bhhsluxury',
    ],
    employee: {
      '@id': `${siteUrl}#person`,
    },
  };
}

/**
 * Generate RealEstateAgent schema
 */
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}#realestateagent`,
    name: 'Dr. Jan Duffy',
    description:
      'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Craig Ranch, Las Vegas, North Las Vegas, and Henderson',
    jobTitle: 'REALTOR®',
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: SITE_LOGO_URL,
      width: 512,
      height: 512,
    },
    image: SITE_AGENT_PHOTO_URL,
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    ],
    telephone: businessPhone,
    email: businessEmail,
    serviceArea: {
      '@type': 'Place',
      name: 'Craig Ranch',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'North Las Vegas',
        addressRegion: 'NV',
        postalCode: '89031',
        addressCountry: 'US',
      },
    },
    knowsAbout: [
      'Craig Ranch real estate',
      'North Las Vegas 89031 homes',
      'Nellis AFB relocation',
      'Craig Ranch Regional Park neighborhoods',
      'Century Communities floor plans',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: `Nevada Real Estate License ${SITE_NAP.license}`,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    identifier: SITE_NAP.license,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        email: businessEmail,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
      },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    sameAs: [
      SITE_NAP.facebookUrl,
      'https://www.instagram.com/drjanduffy',
      'https://www.youtube.com/@DrDuffy',
      'https://twitter.com/drjanduffy',
      'https://www.linkedin.com/in/lvrmembers',
      'https://www.tiktok.com/@dr.janduffy',
      'https://www.pinterest.com/bhhsluxury',
    ],
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate CollectionPage schema for listings pages
 */
export function generateCollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      name,
      description,
    },
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(breadcrumb && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };
}

export function generateFAQPageSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebSite schema with site name for Google Search
 * This is required for Google to display your site name in search results
 * Must be placed on the homepage only
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: 'Craig Ranch Homes',
    alternateName: [
      'CraigRanchHomes.com',
      'craigranchhomes.com',
      'Craig Ranch Homes by Dr. Jan Duffy',
    ],
    url: siteUrl,
    description:
      'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Find your dream home with Dr. Jan Duffy, REALTOR® specializing in Craig Ranch properties.',
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    about: {
      '@id': `${siteUrl}#realestateagent`,
    },
  };
}

/**
 * SpeakableSpecification for answer engines / voice surfaces.
 */
export function generateSpeakableSchema({
  url,
  name,
  cssSelector = ['h1', '#aeo-direct-answer', '#craig-ranch-faqs'],
}: {
  url: string;
  name: string;
  cssSelector?: ReadonlyArray<string>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#speakable`,
    url,
    name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [...cssSelector],
    },
  };
}

/**
 * HowTo schema for process queries (buy, sell, relocate, valuation).
 */
export function generateHowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: ReadonlyArray<{ name: string; text: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Generate Blog schema for blog/insights pages
 */
export function generateBlogSchema({
  name,
  description,
  url,
  author,
  publisher,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  author?: string;
  publisher?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name,
    description,
    url,
    ...(dateModified ? { dateModified } : {}),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
    ...(publisher && {
      publisher: {
        '@type': 'Organization',
        name: publisher,
      },
    }),
  };
}

/**
 * Generate Dataset schema for market data pages
 */
export function generateDatasetSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url,
    license: `${siteUrl}`,
    creator: {
      '@type': 'Organization',
      name: businessName,
    },
  };
}

