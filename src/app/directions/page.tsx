import type { Metadata } from 'next';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import SkipLink from '@/components/layout/skip-link';
import VisitPlanner from '@/components/maps/visit-planner';
import AeoAnswerBlock from '@/components/sections/aeo-answer-block';
import AeoFaqSection from '@/components/sections/aeo-faq-section';
import Breadcrumbs from '@/components/sections/breadcrumbs';
import HyperlocalNapCta from '@/components/sections/hyperlocal-nap-cta';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateSpeakableSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

export const revalidate = 604800;

export const metadata: Metadata = genMetadata({
  title: 'Directions to the Craig Ranch Homes Office | Dr. Jan Duffy',
  description:
    'Plan a visit to Dr. Jan Duffy at 851 W Lone Mountain Rd, Suite 103, North Las Vegas. The map shows driving, transit, walking, and bicycling routes. Open daily 8:00 AM–8:00 PM. Call (702) 820-5408.',
  keywords:
    'directions Craig Ranch Homes, 851 W Lone Mountain Rd Suite 103, North Las Vegas realtor office, Dr. Jan Duffy directions',
  path: '/directions',
});

const DIRECTIONS_FAQS = [
  {
    question: 'Where is the Craig Ranch Homes office?',
    answer: `${SITE_NAP.addressLine}. ${SITE_NAP.hoursLine}. Call ${SITE_NAP.phoneDisplay} before you leave if you need suite entry details.`,
  },
  {
    question: 'How do I get driving directions to Suite 103?',
    answer:
      'Enter your starting address in the planner on this page, choose Driving, and open the Google Maps link for turn-by-turn navigation to 851 W Lone Mountain Rd, Suite 103.',
  },
  {
    question: 'Is the office open on weekends?',
    answer: `${SITE_NAP.hoursLine}. Appointments are available seven days a week—call ${SITE_NAP.phoneDisplay} to confirm timing.`,
  },
] as const;

type DirectionsPageProps = {
  searchParams?: Promise<{ from?: string }>;
};

export default async function DirectionsPage({
  searchParams,
}: DirectionsPageProps) {
  const params = (await searchParams) ?? {};
  const from = (params.from ?? '').trim();
  const pageUrl = `${SITE_URL}/directions`;

  return (
    <PageLayout>
      <div>
        <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Contact', href: '/contact' },
                { name: 'Directions', href: '/directions' },
              ]}
              tone='light'
              className='mb-4'
            />
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Directions to the Craig Ranch Homes office
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl'>
              {SITE_NAP.addressLine}. {SITE_NAP.hoursLine}. Call{' '}
              {SITE_NAP.phoneDisplay}.
            </p>
            <SkipLink href='#visit-planner'>Skip to the route planner</SkipLink>
          </div>
        </div>

        <AeoAnswerBlock
          question='How do I get to Dr. Jan Duffy’s Craig Ranch Homes office?'
          answer={`${SITE_NAP.addressLine}. ${SITE_NAP.hoursLine}. Enter a starting address below, then choose driving, transit, walking, or bicycling—the map shows the current estimated time to Suite 103.`}
          bullets={[
            `Office phone: ${SITE_NAP.phoneDisplay}`,
            'Suite 103 at 851 W Lone Mountain Rd, North Las Vegas, NV 89032',
            'Open Google Maps from the planner for turn-by-turn navigation',
          ]}
        />
      </div>

      <section
        id='visit-planner'
        className='scroll-mt-24 min-h-[calc(100svh-6rem)] py-16 bg-white'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <VisitPlanner initialOrigin={from} />
        </div>
      </section>

      <AeoFaqSection title='Directions FAQs' faqs={DIRECTIONS_FAQS} />
      <HyperlocalNapCta
        heading='Need help finding Suite 103?'
        supporting={`${SITE_NAP.addressLine}. ${SITE_NAP.hoursLine}.`}
      />

      <Script
        id='directions-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Directions to the Craig Ranch Homes office',
              description: `Plan a visit to ${SITE_NAP.addressLine}. ${SITE_NAP.hoursLine}.`,
              url: pageUrl,
              breadcrumb: [
                { name: 'Home', url: SITE_URL },
                { name: 'Contact', url: `${SITE_URL}/contact` },
                { name: 'Directions', url: pageUrl },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Contact', url: `${SITE_URL}/contact` },
              { name: 'Directions', url: pageUrl },
            ]),
            generateFAQPageSchema(DIRECTIONS_FAQS),
            generateSpeakableSchema({
              url: pageUrl,
              name: 'Directions to the Craig Ranch Homes office',
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
