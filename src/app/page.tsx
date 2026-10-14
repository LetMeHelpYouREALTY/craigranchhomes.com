import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import GoogleMap from '@/components/sections/google-map';
import AeoAnswerBlock from '@/components/sections/aeo-answer-block';
import AeoFaqSection from '@/components/sections/aeo-faq-section';
import PropertyCategoriesSkeleton from '@/components/skeletons/property-categories-skeleton';
import CommunitiesSkeleton from '@/components/skeletons/communities-skeleton';
import BlogPostsSkeleton from '@/components/skeletons/blog-posts-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, MapPin, TrendingUp } from 'lucide-react';
import NearbyAmenitiesSection from '@/components/sections/nearby-amenities-section';
import {
  generateMetadata as genMetadata,
  CRAIG_RANCH_FAQS,
  generateFAQPageSchema,
  generateSpeakableSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { MARKET_SNAPSHOT } from '@/lib/market-snapshot';
import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

const baseUrl = SITE_URL;

// Dynamically import heavy components with loading states
const DynamicHomeEvaluation = dynamic(
  () => import('@/components/sections/home-evaluation'),
  {
    loading: () => (
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='h-10 w-64 bg-gray-200 animate-pulse rounded mx-auto mb-4'></div>
            <div className='h-6 w-96 bg-gray-200 animate-pulse rounded mx-auto'></div>
          </div>
          <div className='max-w-2xl mx-auto'>
            <div className='h-96 bg-gray-100 animate-pulse rounded-xl'></div>
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

const DynamicPropertyCategories = dynamic(
  () => import('@/components/sections/property-categories'),
  {
    loading: () => <PropertyCategoriesSkeleton />,
    ssr: true,
  }
);

const DynamicFeaturedCommunities = dynamic(
  () => import('@/components/sections/featured-communities'),
  {
    loading: () => <CommunitiesSkeleton />,
    ssr: true,
  }
);

const DynamicBlogPosts = dynamic(
  () => import('@/components/sections/blog-posts'),
  {
    loading: () => <BlogPostsSkeleton />,
    ssr: true,
  }
);

// Incremental Static Regeneration - revalidate every hour for fresh market data
export const revalidate = 3600; // 1 hour

export const metadata = genMetadata({
  title: 'Craig Ranch Homes | Dr. Jan Duffy REALTOR®',
  description:
    'Find homes in Craig Ranch, North Las Vegas. Browse listings, explore the neighborhood, and review park, trail, and floor-plan details with Dr. Jan Duffy.',
  keywords:
    'Craig Ranch, Las Vegas real estate, luxury homes, Las Vegas homes for sale, North Las Vegas, Nevada real estate, Craig Ranch community, luxury properties, real estate agent Las Vegas, Dr. Jan Duffy, Berkshire Hathaway',
  path: '/',
});

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <article>
        <AeoAnswerBlock
          question='What is Craig Ranch real estate in North Las Vegas?'
          answer='Craig Ranch is a master-planned community in North Las Vegas ZIP 89031 with a 170-acre regional park, about 5 miles of trails, and homes commonly ranging from 1,519–2,638 sq ft. Dr. Jan Duffy, REALTOR® (Nevada license S.0197614.LLC), helps buyers and sellers compare listings, price with local comps, and close with clear timelines.'
          bullets={[
            'Price bands recently from about $370K to $1.8M depending on size and upgrades',
            `Office: ${SITE_NAP.addressLine} · ${SITE_NAP.phoneDisplay} · ${SITE_NAP.hoursLine}`,
            'Confirm school assignment (e.g., Eva G. Simmons, Findlay Middle, Mojave High) per address',
          ]}
        />

        {/* Quick Links Section */}
        <section className='py-12 bg-white border-b'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-6'>
              <Link href='/homes' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 text-[#0A2540] hover:bg-[#F7F9FC] hover:text-[#0A2540]'
                >
                  <HomeIcon className='h-8 w-8 text-[#3A8DDE]' />
                  <span className='text-lg font-semibold text-[#0A2540]'>
                    Browse Homes
                  </span>
                  <span className='text-sm text-gray-700'>
                    View all available properties
                  </span>
                </Button>
              </Link>
              <Link href='/neighborhood' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 text-[#0A2540] hover:bg-[#F7F9FC] hover:text-[#0A2540]'
                >
                  <MapPin className='h-8 w-8 text-[#0B7A5A]' />
                  <span className='text-lg font-semibold text-[#0A2540]'>
                    Explore Craig Ranch
                  </span>
                  <span className='text-sm text-gray-700'>
                    Learn about the neighborhood
                  </span>
                </Button>
              </Link>
              <Link href='/craig-ranch-realtor' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 text-[#0A2540] hover:bg-[#F7F9FC] hover:text-[#0A2540]'
                >
                  <TrendingUp className='h-8 w-8 text-[#0A2540]' />
                  <span className='text-lg font-semibold text-[#0A2540]'>
                    Craig Ranch REALTOR®
                  </span>
                  <span className='text-sm text-gray-700'>
                    Work with Dr. Jan Duffy locally
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
                Craig Ranch and the office
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                The neighborhood in North Las Vegas, and the office at Suite
                103 on Lone Mountain Road.
              </p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
                  Craig Ranch, North Las Vegas
                </h3>
                <GoogleMap
                  address='Craig Ranch, North Las Vegas, NV 89031'
                  zoom={13}
                  height='380px'
                  title='Map of Craig Ranch, North Las Vegas'
                />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
                  Office at Suite 103
                </h3>
                <GoogleMap
                  address={SITE_NAP.addressLine}
                  zoom={15}
                  height='380px'
                  title='Craig Ranch Homes office on Lone Mountain Road'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Market Data Preview - Moved up to show market strength early */}
        <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Craig Ranch Market Overview
            </h2>
            <p className='text-xl text-gray-200 mb-8 max-w-3xl mx-auto'>
              {MARKET_SNAPSHOT.asOfLabel}. These figures are not a live Craig
              Ranch CMA. Call (702) 820-5408 for current comps.
            </p>
            <div className='grid md:grid-cols-4 gap-6 mb-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>
                  {MARKET_SNAPSHOT.averageValueShort}
                </div>
                <div className='text-gray-300 text-sm'>Average Value</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>
                  {MARKET_SNAPSHOT.daysOnMarket}
                </div>
                <div className='text-gray-300 text-sm'>Days on Market</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>
                  {MARKET_SNAPSHOT.homesForSale}
                </div>
                <div className='text-gray-300 text-sm'>Homes For Sale</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>
                  {MARKET_SNAPSHOT.priceChange}
                </div>
                <div className='text-gray-300 text-sm'>Price Growth</div>
              </div>
            </div>
            <Button
              asChild
              className='bg-[#0B7A5A] hover:bg-[#096B4E] text-white'
            >
              <Link href='/market-data'>
                View Full Market Report <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </section>

        <Suspense fallback={<PropertyCategoriesSkeleton />}>
          <DynamicPropertyCategories />
        </Suspense>
        <Suspense fallback={<CommunitiesSkeleton />}>
          <DynamicFeaturedCommunities />
        </Suspense>

        <NearbyAmenitiesSection title={`Life Near ${SITE_NAP.communityName}`} />

        <DynamicHomeEvaluation />
        <Suspense fallback={<BlogPostsSkeleton />}>
          <DynamicBlogPosts />
        </Suspense>
        
        {/* Strategic Internal Links for Sitelinks Optimization */}
        <section className='py-12 bg-gray-50 border-t border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav aria-label='Site navigation' className='text-center'>
              <h2 className='sr-only'>Site Navigation</h2>
              <ul className='flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm'>
                <li>
                  <Link
                    href='/homes'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link
                    href='/neighborhood'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Neighborhood Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href='/market-data'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Market Data
                  </Link>
                </li>
                <li>
                  <Link
                    href='/market-insights'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Market Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href='/home-valuation-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Home Valuation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/buy-craig-ranch-homes'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Buy in Craig Ranch
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sell-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Sell Your Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/craig-ranch-89031-real-estate'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    89031 Real Estate
                  </Link>
                </li>
                <li>
                  <Link
                    href='/new-construction-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    New Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href='/craig-ranch-schools'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Schools
                  </Link>
                </li>
                <li>
                  <Link
                    href='/amenities'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Nearby Amenities
                  </Link>
                </li>
                <li>
                  <Link
                    href='/nellis-afb-relocation-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Nellis AFB Relocation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/craig-ranch-hoa'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    HOA Information
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        
        <AeoFaqSection
          title='Craig Ranch real estate FAQs'
          subtitle='Direct answers for buyers and sellers researching Craig Ranch, North Las Vegas.'
          faqs={CRAIG_RANCH_FAQS}
        />
      </article>

      {/* Page-level schema only — entity schemas live in root layout */}
      <Script
        id='homepage-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Craig Ranch Homes | Dr. Jan Duffy REALTOR®',
              description:
                'Find homes in Craig Ranch, North Las Vegas. Browse listings, explore the neighborhood, and review park, trail, and floor-plan details with Dr. Jan Duffy.',
              url: baseUrl,
              breadcrumb: [{ name: 'Home', url: baseUrl }],
            }),
            generateFAQPageSchema(CRAIG_RANCH_FAQS),
            generateSpeakableSchema({
              url: baseUrl,
              name: 'Craig Ranch Homes | Dr. Jan Duffy REALTOR®',
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
