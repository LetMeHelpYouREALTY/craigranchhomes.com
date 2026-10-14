'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AddressAutocomplete, {
  ADDRESS_TYPES,
  type SelectedAddress,
} from '@/components/maps/address-autocomplete';
import { addressEmbedUrl } from '@/lib/office-directions';
import { scrollElementIntoView } from '@/lib/scroll-into-view';
import { directionsHref } from '@/lib/site-nap';
import { Button } from '@/components/ui/button';

export default function AddressFinder() {
  const [typed, setTyped] = useState('');
  const [confirmed, setConfirmed] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
  const address = confirmed.trim();

  useEffect(() => {
    if (!address) return;
    scrollElementIntoView(mapRef.current);
  }, [address]);

  function confirmTyped() {
    const next = typed.trim();
    if (!next) return;
    setConfirmed(next);
  }

  function onPlace(place: SelectedAddress) {
    setTyped(place.address);
    if (place.lat !== undefined && place.lng !== undefined) {
      setConfirmed(place.address);
      return;
    }
    if (confirmed && place.address.trim() !== confirmed) {
      setConfirmed('');
    }
  }

  return (
    <div className='space-y-6'>
      <AddressAutocomplete
        id='property-address'
        name='propertyAddress'
        label='Property or starting address'
        includedPrimaryTypes={ADDRESS_TYPES}
        onPlace={onPlace}
      />
      <p className='text-sm text-gray-600'>
        Suggestions cover U.S. addresses and favor North Las Vegas. Confirm the
        result before you use it for a showing or a mailing.
      </p>
      <Button
        type='button'
        className='bg-[#0A2540] hover:bg-[#16375C] text-white'
        onClick={confirmTyped}
        disabled={typed.trim().length === 0}
      >
        Show this address
      </Button>
      {address ? (
        <div ref={mapRef} className='space-y-4'>
          <p className='text-lg font-semibold text-[#0A2540]'>
            Confirmed address: {address}
          </p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Link
              href={directionsHref(address)}
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
            loading='eager'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      ) : null}
    </div>
  );
}
