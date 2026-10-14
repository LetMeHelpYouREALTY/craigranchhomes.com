import type { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import SkipLink from '@/components/layout/skip-link';
import AddressFinder from '@/components/maps/address-finder';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata: Metadata = genMetadata({
  title: 'Enter a Las Vegas Address | Craig Ranch Homes',
  description:
    'Type a street address and confirm the match before you request directions to the Craig Ranch Homes office or send a note to Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'Las Vegas address lookup, North Las Vegas address, Craig Ranch address, directions to 851 W Lone Mountain Rd',
  path: '/find-address',
});

export default function FindAddressPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Enter an address
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Start typing a street address. Choose the matching suggestion so
            the visit planner and your message use the same place.
          </p>
          <SkipLink href='#address-lookup'>Skip to the address form</SkipLink>
        </div>
      </div>

      <section id='address-lookup' className='scroll-mt-24 min-h-[calc(100svh-6rem)] py-16 bg-white'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <AddressFinder />
        </div>
      </section>
    </PageLayout>
  );
}
