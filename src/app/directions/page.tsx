import type { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import SkipLink from '@/components/layout/skip-link';
import VisitPlanner from '@/components/maps/visit-planner';
import { generateMetadata as genMetadata } from '@/lib/metadata';
import { SITE_NAP } from '@/lib/site-nap';

export const revalidate = 604800;

export const metadata: Metadata = genMetadata({
  title: 'Directions to the Craig Ranch Homes Office | Dr. Jan Duffy',
  description:
    'Plan a visit to Dr. Jan Duffy at 851 W Lone Mountain Rd, Suite 103, North Las Vegas. The map shows driving, transit, walking, and bicycling routes. Open daily 8:00 AM–8:00 PM. Call (702) 820-5408.',
  keywords:
    'directions Craig Ranch Homes, 851 W Lone Mountain Rd Suite 103, North Las Vegas realtor office, Dr. Jan Duffy directions',
  path: '/directions',
});

type DirectionsPageProps = {
  searchParams?: Promise<{ from?: string }>;
};

export default async function DirectionsPage({
  searchParams,
}: DirectionsPageProps) {
  const params = (await searchParams) ?? {};
  const from = (params.from ?? '').trim();

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Directions to the Craig Ranch Homes office
          </h1>
          <p id='aeo-direct-answer' className='text-xl text-gray-200 max-w-3xl'>
            {SITE_NAP.addressLine}. {SITE_NAP.hoursLine}. Enter a starting
            address, then choose driving, transit, walking, or bicycling. The
            map shows the current estimated time to Suite 103.
          </p>
          <SkipLink href='#visit-planner'>Skip to the route planner</SkipLink>
        </div>
      </div>

      <section id='visit-planner' className='scroll-mt-24 min-h-[calc(100svh-6rem)] py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <VisitPlanner initialOrigin={from} />
        </div>
      </section>
    </PageLayout>
  );
}
