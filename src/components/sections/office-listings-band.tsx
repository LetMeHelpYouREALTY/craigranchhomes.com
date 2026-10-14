import { Suspense } from 'react';
import RealScoutOfficeWidget from '@/components/sections/realscout-office-widget';
import ClientErrorBoundary from '@/components/shared/client-error-boundary';
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';

/**
 * Office RealScout inventory. PageLayout renders this immediately after the hero
 * on every page. The cards are valley-wide office inventory, not a Craig Ranch filter.
 */
export default function OfficeListingsBand() {
  return (
    <section
      id='office-listings'
      className='py-16 bg-white'
      aria-labelledby='office-listings-heading'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2
            id='office-listings-heading'
            className='text-3xl font-bold text-[#0A2540] mb-4'
          >
            Office listings from Dr. Jan Duffy
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            These cards are the office inventory across Las Vegas and Henderson.
            They are not a Craig Ranch-only search. Call (702) 820-5408 for
            homes in Craig Ranch, ZIP 89031.
          </p>
        </div>
        <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg border border-gray-200'>
          <ClientErrorBoundary>
            <Suspense fallback={<ListingsSkeleton />}>
              <RealScoutOfficeWidget
                agentEncodedId='QWdlbnQtMjI1MDUw'
                showMap={false}
                listingsPerPage='12'
              />
            </Suspense>
          </ClientErrorBoundary>
        </div>
      </div>
    </section>
  );
}
