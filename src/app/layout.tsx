import type { Metadata } from 'next';
import { Source_Sans_3, Open_Sans } from 'next/font/google';
import DeferredAnalytics from '@/components/analytics/deferred-analytics';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from '@/lib/metadata';
import {
  SITE_AGENT_PHOTO_URL,
  SITE_LOGO_URL,
} from '@/lib/site-nap';
import './globals.css';

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  process.env.GOOGLE_SITE_VERIFICATION;

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-MPLYNTN4V7';
const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function isNonPlaceholderId(value: string | undefined): value is string {
  if (!value) return false;
  const normalized = value.trim();
  if (!normalized) return false;
  if (normalized.includes('XXXX')) return false;
  if (normalized.includes('YOUR_')) return false;
  return true;
}

function isValidGtmId(value: string | undefined): value is string {
  if (!isNonPlaceholderId(value)) return false;
  return /^GTM-[A-Z0-9]+$/i.test(value);
}

function isValidGaId(value: string | undefined): value is string {
  if (!isNonPlaceholderId(value)) return false;
  // GA4 measurement ID format (most common): G-XXXXXXXXXX
  return /^G-[A-Z0-9]+$/i.test(value);
}

function isValidFacebookPixelId(value: string | undefined): value is string {
  if (!isNonPlaceholderId(value)) return false;
  // Pixel IDs are numeric.
  return /^\d{8,20}$/.test(value.trim());
}

// Ensure these assets exist in /public to avoid 404s for crawlers.
const ogImageUrl = `${siteUrl}/54-DJI_20250707171528_0828_D.jpg`;
const logoUrl = SITE_LOGO_URL;
const agentPhotoUrl = SITE_AGENT_PHOTO_URL;

// Optimize fonts with next/font
const sourceSansPro = Source_Sans_3({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-pro',
});

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Craig Ranch Homes | Dr. Jan Duffy',
    template: '%s | Craig Ranch Homes',
  },
  description:
    'Craig Ranch homes in North Las Vegas: master-planned community with regional park, trails, and floor plans. Work with Dr. Jan Duffy, REALTOR®.',
  keywords:
    'Craig Ranch, Las Vegas homes, luxury real estate, Nevada homes, Las Vegas real estate, Craig Ranch community, luxury homes Las Vegas, Craig Ranch properties, Las Vegas luxury real estate, Craig Ranch homes for sale, Las Vegas real estate agent, Craig Ranch neighborhood, luxury properties Las Vegas, Craig Ranch real estate market, Las Vegas home values',
  authors: [
    { name: 'Dr. Jan Duffy', url: `${siteUrl}/craig-ranch-realtor` },
  ],
  creator: 'Dr. Jan Duffy',
  publisher: 'Craig Ranch Homes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Craig Ranch Homes | Dr. Jan Duffy',
    description:
      'Craig Ranch homes in North Las Vegas: master-planned community with regional park, trails, and floor plans. Work with Dr. Jan Duffy, REALTOR®.',
    url: siteUrl,
    siteName: 'Craig Ranch Homes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/54-DJI_20250707171528_0828_D.jpg',
        width: 1200,
        height: 630,
        alt: 'Craig Ranch Homes — Dr. Jan Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craig Ranch Homes | Dr. Jan Duffy',
    description:
      'Craig Ranch homes in North Las Vegas: master-planned community with regional park, trails, and floor plans. Work with Dr. Jan Duffy, REALTOR®.',
    images: ['/54-DJI_20250707171528_0828_D.jpg'],
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
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  category: 'Real Estate',
  classification: 'Luxury Real Estate',
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'North Las Vegas, Las Vegas',
    'geo.position': '36.2465;-115.1475',
    ICBM: '36.2465, -115.1475',
    'DC.title': 'Craig Ranch Homes',
    'DC.creator': 'Craig Ranch Homes',
    'DC.subject': 'Luxury Real Estate, Las Vegas, Craig Ranch',
    'DC.description': 'Luxury homes in Craig Ranch, Las Vegas',
    'DC.publisher': 'Craig Ranch Homes',
    'DC.contributor': 'Craig Ranch Homes',
    'DC.date': '2026',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': siteUrl,
    'DC.language': 'en',
    'DC.coverage': 'Las Vegas, Nevada',
    'DC.rights': 'Copyright 2007-2026 Craig Ranch Homes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${sourceSansPro.variable} ${openSans.variable}`}>
      <head>
        {/* Favicon / brand mark — square PNG + multi-size ICO for Google Search & GBP */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon-32x32.png' type='image/png' sizes='32x32' />
        <link rel='icon' href='/favicon-16x16.png' type='image/png' sizes='16x16' />
        <link rel='icon' href='/logo.png' type='image/png' sizes='512x512' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        {/* Preconnect to critical third-party origins for faster resource loading */}
        {/* LCP hero: preload responsive WebP with high priority */}
        <link
          rel='preload'
          as='image'
          href='/hero-craig-ranch-828.webp'
          type='image/webp'
          imageSrcSet='/hero-craig-ranch-480.webp 480w, /hero-craig-ranch-828.webp 828w, /hero-craig-ranch-mobile.webp 1200w, /hero-craig-ranch.webp 1920w'
          imageSizes='100vw'
          fetchPriority='high'
        />
        {/* Defer third-party discovery so LCP hero wins the network */}
        <link rel='dns-prefetch' href='https://em.realscout.com' />
        <link rel='dns-prefetch' href='https://cdn.realscout.com' />
        <link rel='dns-prefetch' href='https://www.realscout.com' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        <link rel='dns-prefetch' href='https://www.google-analytics.com' />
        <link rel='dns-prefetch' href='https://embed.homebotapp.com' />
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
        <link rel='dns-prefetch' href='https://fonts.gstatic.com' />

        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>

        {/* Structured Data for Real Estate Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              '@id': `${siteUrl}#realestateagent`,
              name: 'Dr. Jan Duffy',
              description:
                'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Craig Ranch, Las Vegas, North Las Vegas, and Henderson',
              jobTitle: 'REALTOR®',
              worksFor: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              url: siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: logoUrl,
                width: 512,
                height: 512,
              },
              image: agentPhotoUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '851 W Lone Mountain Rd, Suite 103',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89032',
                addressCountry: 'US',
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
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-702-820-5408',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              memberOf: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              sameAs: [
                'https://www.facebook.com/DrJanDuffyRealtorCentennialHills',
                'https://www.instagram.com/drjanduffy',
                'https://www.youtube.com/@DrDuffy',
                'https://twitter.com/drjanduffy',
                'https://www.linkedin.com/in/lvrmembers',
                'https://www.tiktok.com/@dr.janduffy',
                'https://www.pinterest.com/bhhsluxury',
              ],
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${siteUrl}#localbusiness`,
              name: 'Craig Ranch Homes',
              description:
                'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Expert real estate agent specializing in Craig Ranch homes and properties.',
              url: siteUrl,
              telephone: '+1-702-820-5408',
              email: 'DrDuffy@CraigRanchHomes.com',
              image: ogImageUrl,
              logo: {
                '@type': 'ImageObject',
                url: logoUrl,
                width: 512,
                height: 512,
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '851 W Lone Mountain Rd, Suite 103',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89032',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.2465,
                longitude: -115.1475,
              },
              hasMap:
                'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+Suite+103+North+Las+Vegas+NV+89032',
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
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-820-5408',
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
                  email: 'DrDuffy@CraigRanchHomes.com',
                  contactType: 'customer service',
                  areaServed: 'US',
                  availableLanguage: ['English'],
                },
              ],
            }),
          }}
        />

        {/* Structured Data for Organization - Required for Google Knowledge Panel */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />

        {/* Structured Data for Website - Site Name for Google Search */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className='antialiased'>
        {/* Google Tag Manager (noscript) */}
        {isValidGtmId(gtmId) ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(
                gtmId
              )}`}
              height='0'
              width='0'
              className='hidden'
            />
          </noscript>
        ) : null}

        {/* Analytics after interaction / delayed fallback — keeps lab TBT low */}
        <DeferredAnalytics
          gaMeasurementId={
            isValidGaId(gaMeasurementId) ? gaMeasurementId : undefined
          }
          gtmId={isValidGtmId(gtmId) ? gtmId : undefined}
          facebookPixelId={
            isValidFacebookPixelId(facebookPixelId)
              ? facebookPixelId
              : undefined
          }
        />
        {/* RealScout loads on-demand when a widget scrolls into view */}
        {children}
      </body>
    </html>
  );
}
