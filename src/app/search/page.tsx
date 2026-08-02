import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import AeoAnswerBlock from '@/components/sections/aeo-answer-block';
import AeoFaqSection from '@/components/sections/aeo-faq-section';
import HyperlocalNapCta from '@/components/sections/hyperlocal-nap-cta';
import HyperlocalRelatedLinks from '@/components/sections/hyperlocal-related-links';
import RealtorServicesGrid from '@/components/sections/realtor-services-grid';
import { SEARCH_PAGE_FAQS } from '@/lib/hyperlocal-faqs';
import {
  generateMetadata as genMetadata,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from '@/lib/metadata';
import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

export const metadata: Metadata = {
  ...genMetadata({
    title: 'Search Craig Ranch Homes | Craig Ranch Homes',
    description:
      'Search Craig Ranch homes in North Las Vegas 89031. Browse listings, market data, and realtor services with Dr. Jan Duffy. Call (702) 820-5408.',
    keywords:
      'Craig Ranch search, Craig Ranch homes search, Craig Ranch real estate search, North Las Vegas homes',
    path: '/search',
  }),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export const dynamic = 'force-dynamic';

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = (await searchParams) ?? {};
  const query = (params.q ?? '').trim();

  return (
    <PageLayout>
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#0A2540] mb-4'>
            Search Craig Ranch Homes
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            {query
              ? `You searched for "${query}". Use the Craig Ranch guides below for listings, schools, and realtor services in North Las Vegas.`
              : 'Use the Craig Ranch guides below for listings, schools, and realtor services in North Las Vegas ZIP 89031.'}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/homes'>Browse Craig Ranch Homes for Sale</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/buy-craig-ranch-homes'>Buyer Representation</Link>
            </Button>
            <Button asChild variant='outline'>
              <a href={SITE_NAP.phoneHref}>Call {SITE_NAP.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>

      <AeoAnswerBlock
        question='Where should I search for Craig Ranch real estate?'
        answer='Start on the Craig Ranch homes page for current listings, then use the buyer guide for offer strategy and the 89031 ZIP guide for community context. Dr. Jan Duffy can run a custom MLS search—call (702) 820-5408.'
        bullets={[
          'Listings: /homes',
          'Buyers: /buy-craig-ranch-homes',
          'ZIP guide: /craig-ranch-89031-real-estate',
        ]}
      />

      <RealtorServicesGrid />
      <AeoFaqSection faqs={SEARCH_PAGE_FAQS} />
      <HyperlocalRelatedLinks />
      <HyperlocalNapCta />

      <Script
        id='search-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Search Craig Ranch Homes',
              description:
                'Search Craig Ranch homes and explore real estate listings, market data, and neighborhood information in Craig Ranch, North Las Vegas, Nevada.',
              url: `${SITE_URL}/search`,
              breadcrumb: [
                { name: 'Home', url: SITE_URL },
                { name: 'Search', url: `${SITE_URL}/search` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Search', url: `${SITE_URL}/search` },
            ]),
            generateFAQPageSchema(SEARCH_PAGE_FAQS),
          ]),
        }}
      />
    </PageLayout>
  );
}
