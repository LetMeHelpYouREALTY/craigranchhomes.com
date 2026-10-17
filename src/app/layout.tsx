import type { Metadata } from 'next';
import { Source_Sans_3, Open_Sans } from 'next/font/google';
import DeferredAnalytics from '@/components/analytics/deferred-analytics';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generatePersonSchema,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
} from '@/lib/metadata';
import { SITE_NAP } from '@/lib/site-nap';
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
    'geo.position': `${SITE_NAP.latitude};${SITE_NAP.longitude}`,
    ICBM: `${SITE_NAP.latitude}, ${SITE_NAP.longitude}`,
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

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRealEstateAgentSchema()),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
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
