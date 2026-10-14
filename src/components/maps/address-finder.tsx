'use client';

import { useState } from 'react';
import Link from 'next/link';
import AddressAutocomplete, {
  ADDRESS_TYPES,
  type SelectedAddress,
} from '@/components/maps/address-autocomplete';
import { addressEmbedUrl } from '@/lib/office-directions';
import { SITE_NAP } from '@/lib/site-nap';

export default function AddressFinder() {
  const [place, setPlace] = useState<SelectedAddress | null>(null);
  const address = place?.address.trim() ?? '';

  return (
    <div className='space-y-6'>
      <AddressAutocomplete
        id='property-address'
        name='propertyAddress'
        label='Property or starting address'
        includedPrimaryTypes={ADDRESS_TYPES}
        onPlace={setPlace}
      />
      <p className='text-sm text-gray-600'>
        Suggestions are biased toward North Las Vegas and limited to U.S.
        addresses. Confirm the result before you use it for a showing or a
        mailing.
      </p>
      {address ? (
        <div className='space-y-4'>
          <p className='text-lg font-semibold text-[#0A2540]'>
            Confirmed address: {address}
          </p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Link
              href={`${SITE_NAP.directionsPath}?from=${encodeURIComponent(address)}`}
              className='inline-flex items-center justify-center rounded-md bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16375C]'
            >
              Plan your visit from this address
            </Link>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-[#0A2540] hover:bg-gray-50'
            >
              Open this address in Google Maps
            </a>
          </div>
          <iframe
            title={`Map of ${address}`}
            src={addressEmbedUrl(address)}
            className='h-[420px] w-full rounded-lg border border-gray-200'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      ) : null}
    </div>
  );
}
