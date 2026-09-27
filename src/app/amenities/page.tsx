import PageLayout from '@/components/layout/page-layout';
import Script from 'next/script';
import Link from 'next/link';
import AmenityMapLazy from '@/components/sections/amenity-map-lazy';
import AeoFaqSection from '@/components/sections/aeo-faq-section';
import HyperlocalNapCta from '@/components/sections/hyperlocal-nap-cta';
import HyperlocalRelatedLinks from '@/components/sections/hyperlocal-related-links';
import RealtorServicesGrid from '@/components/sections/realtor-services-grid';
import {
  AMENITIES_PAGE_FAQS,
  CRAIG_RANCH_MAP_CENTER,
  generateCraigRanchCommunityPlaceSchema,
  generateFeaturedAmenitiesItemListSchema,
} from '@/lib/craig-ranch-amenity-config';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateSpeakableSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

export const revalidate = 604800;

export const metadata = genMetadata({
  title: 'Nearby Amenities in Craig Ranch, North Las Vegas | Craig Ranch Homes',
  description:
    'Interactive map of restaurants, groceries, parks, schools, and hospitals near Craig Ranch, North Las Vegas 89031. Hyperlocal guide from Dr. Jan Duffy, REALTOR®. Call (702) 820-5408.',
  keywords:
    'Craig Ranch amenities, restaurants near Craig Ranch, grocery stores North Las Vegas 89031, Craig Ranch Regional Park, schools near Craig Ranch, hospitals North Las Vegas',
  path: '/amenities',
});

const baseUrl = SITE_URL;

export default function AmenitiesPage() {
  const agentAreaExtension = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${baseUrl}#realestateagent`,
    areaServed: {
      '@type': 'Place',
      name: SITE_NAP.communityName,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CRAIG_RANCH_MAP_CENTER.latitude,
        longitude: CRAIG_RANCH_MAP_CENTER.longitude,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_NAP.city,
        addressRegion: SITE_NAP.region,
        postalCode: SITE_NAP.communityZip,
        addressCountry: 'US',
      },
    },
  };

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Nearby Amenities in Craig Ranch, North Las Vegas
          </h1>
          <p
            id='aeo-direct-answer'
            className='text-xl text-gray-200 max-w-3xl'
          >
            Craig Ranch sits in North Las Vegas ZIP 89031 with Craig Ranch
            Regional Park, West Craig Road dining, and everyday shopping at
            Simmons Shopping Center and North Mesa Plaza—all within a short drive
            of most addresses in the master plan.
          </p>
        </div>
      </div>

      <section className='py-16 bg-white' aria-labelledby='amenity-map-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2
            id='amenity-map-heading'
            className='text-2xl font-bold text-[#0A2540] mb-6 text-center'
          >
            Interactive map: life near {SITE_NAP.communityName}
          </h2>
          <AmenityMapLazy compact={false} showStaticList />
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]' aria-labelledby='dining-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none'>
          <h2 id='dining-heading' className='text-3xl font-bold text-[#0A2540]'>
            Dining near Craig Ranch
          </h2>
          <p className='text-gray-700'>
            West Craig Road has become a restaurant corridor for North Las
            Vegas—locals often call it Restaurant Row. Named spots frequently
            mentioned in community guides include{' '}
            <strong>Lumberjack Restaurant</strong>, <strong>El Nopal</strong>,{' '}
            <strong>Cupbop</strong>, and <strong>Pinkbox Doughnuts</strong> along
            West Craig Road. <strong>Cannery Casino &amp; Hotel</strong> on East
            Craig Road adds additional dining without driving to the Strip.
          </p>

          <h2
            id='parks-heading'
            className='text-3xl font-bold text-[#0A2540] mt-12'
          >
            Parks &amp; recreation
          </h2>
          <p className='text-gray-700'>
            <strong>Craig Ranch Regional Park</strong> (628 W Craig Rd) anchors
            outdoor life with sports fields, trails, and large community events.
            Inside the master plan, residents also use smaller neighborhood parks
            and about five miles of connecting trails referenced in Craig Ranch
            marketing materials.
          </p>

          <h2
            id='golf-heading'
            className='text-3xl font-bold text-[#0A2540] mt-12'
          >
            Golf
          </h2>
          <p className='text-gray-700'>
            Craig Ranch itself is not a golf-course community; golfers typically
            head to northwest valley courses such as{' '}
            <strong>Aliante Golf Club</strong> or <strong>Badlands Golf
            Club</strong> (approximate drive times vary with traffic). Use the
            map&apos;s Golf filter to see current course options near North Las
            Vegas.
          </p>

          <h2
            id='healthcare-heading'
            className='text-3xl font-bold text-[#0A2540] mt-12'
          >
            Healthcare
          </h2>
          <p className='text-gray-700'>
            <strong>North Vista Hospital</strong> on East Lake Mead Boulevard
            serves acute-care needs in North Las Vegas.{' '}
            <strong>Centennial Hills Hospital Medical Center</strong> on North
            Durango Drive covers the northwest valley. Veterans often use the{' '}
            <strong>VA Southern Nevada Healthcare System</strong> campus on North
            Pecos Road. Always confirm in-network providers with your plan.
          </p>

          <h2
            id='shopping-heading'
            className='text-3xl font-bold text-[#0A2540] mt-12'
          >
            Shopping &amp; groceries
          </h2>
          <p className='text-gray-700'>
            <strong>Simmons Shopping Center</strong> (4430 Simmons St) combines
            Albertsons, Walmart Neighborhood Market, and local restaurants.{' '}
            <strong>North Mesa Plaza</strong> (2424 E Craig Rd) adds another
            Walmart and everyday retail cluster minutes from Craig Ranch homes.
          </p>

          <h2
            id='schools-heading'
            className='text-3xl font-bold text-[#0A2540] mt-12'
          >
            Schools
          </h2>
          <p className='text-gray-700'>
            Clark County School District campuses commonly tied to Craig Ranch
            addresses include <strong>Eva G. Simmons Elementary</strong> (5600
            Simmons St), <strong>Clifford O. Pete Findlay Middle School</strong>{' '}
            (333 W Brooks Ave), and <strong>Mojave High School</strong> (5302
            Goldfield St). Verify assignment on any listing before you write an
            offer—see our{' '}
            <Link href='/craig-ranch-schools' className='text-[#3A8DDE] hover:underline'>
              Craig Ranch schools overview
            </Link>
            .
          </p>

          <h2
            id='commute-heading'
            className='text-3xl font-bold text-[#0A2540] mt-12'
          >
            Commute &amp; regional access (approximate)
          </h2>
          <ul className='text-gray-700 list-disc pl-6 space-y-2'>
            <li>
              <strong>Las Vegas Strip:</strong> about 11 miles south via I-15 or
              US-95 depending on your route.
            </li>
            <li>
              <strong>Harry Reid International Airport:</strong> about 15 miles
              south via I-15.
            </li>
            <li>
              <strong>Downtown Summerlin / Summerlin:</strong> roughly 20+ miles
              west across the valley; US-95 and the 215 Beltway are common
              routes.
            </li>
            <li>
              <strong>Nellis Air Force Base:</strong> northeast of Craig Ranch;
              gate-to-gate times vary by housing location and traffic.
            </li>
            <li>
              <strong>Downtown Las Vegas:</strong> about 12–14 miles south via
              I-15 or local arterials.
            </li>
          </ul>
        </div>
      </section>

      <AeoFaqSection
        id='craig-ranch-amenities-faqs'
        title='Craig Ranch amenities FAQs'
        subtitle='Quick answers for buyers comparing North Las Vegas neighborhoods.'
        faqs={AMENITIES_PAGE_FAQS}
      />

      <RealtorServicesGrid
        title='Buy or sell with a Craig Ranch specialist'
        subtitle='Dr. Jan Duffy guides you from amenity tours to closing in North Las Vegas 89031.'
      />
      <HyperlocalRelatedLinks excludeHref='/amenities' />
      <HyperlocalNapCta
        heading='Questions about living in Craig Ranch?'
        supporting={`Call ${SITE_NAP.phoneDisplay} for hyperlocal buyer and seller guidance—parks, schools, and commute included.`}
      />

      <Script
        id='amenities-page-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Nearby Amenities in Craig Ranch, North Las Vegas',
              description:
                'Interactive amenity map and hyperlocal guide to dining, parks, healthcare, shopping, and schools near Craig Ranch, North Las Vegas 89031.',
              url: `${baseUrl}/amenities`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Nearby Amenities', url: `${baseUrl}/amenities` },
              ],
            }),
            generateFAQPageSchema(AMENITIES_PAGE_FAQS),
            generateFeaturedAmenitiesItemListSchema(),
            generateCraigRanchCommunityPlaceSchema(),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Nearby Amenities', url: `${baseUrl}/amenities` },
            ]),
            agentAreaExtension,
            generateSpeakableSchema({
              url: `${baseUrl}/amenities`,
              name: 'Nearby Amenities in Craig Ranch, North Las Vegas',
              cssSelector: ['h1', '#aeo-direct-answer', '#craig-ranch-amenities-faqs'],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
