'use client';

import GoogleMap from '@/components/sections/google-map';
import { useIsMobile } from '@/hooks';
import { waitForRealScoutElement } from '@/lib/realscout-script';
import { useEffect, useRef, useState } from 'react';

type CraigRanchListingsProps = {
  priceMin?: string;
  priceMax?: string;
  showMap?: boolean;
  listingsPerPage?: string;
};

export default function CraigRanchListings({
  priceMin = '400000',
  priceMax = '500000',
  showMap = true,
  listingsPerPage = '12',
}: CraigRanchListingsProps) {
  const isMobile = useIsMobile();
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const mount = async () => {
      const defined = await waitForRealScoutElement('realscout-office-listings');
      if (cancelled || !hostRef.current) return;
      if (!defined) {
        setError(true);
        return;
      }

      hostRef.current.replaceChildren();
      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('sort-order', 'STATUS_AND_SIGNIFICANT_CHANGE');
      widget.setAttribute('listing-status', 'For Sale');
      widget.setAttribute('property-types', 'SFR,MF,TC');
      widget.setAttribute('price-min', priceMin);
      widget.setAttribute('price-max', priceMax);
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', showMap ? 'true' : 'false');
      widget.setAttribute('map-height', '400px');
      widget.setAttribute('listings-per-page', listingsPerPage);
      widget.setAttribute('show-pagination', 'true');
      hostRef.current.appendChild(widget);
      if (!cancelled) setReady(true);
    };

    void mount().catch(() => {
      if (!cancelled) setError(true);
    });

    return () => {
      cancelled = true;
    };
  }, [isMobile, priceMin, priceMax, showMap, listingsPerPage]);

  return (
    <div className='real-estate-listings-container min-h-[400px]'>
      {showMap ? (
        <GoogleMap
          address='Craig Ranch, North Las Vegas, NV 89031'
          zoom={13}
          height='400px'
          title='Map of Craig Ranch, North Las Vegas'
          className='mb-6'
        />
      ) : null}
      {!ready ? (
        <div className='text-center py-8'>
          {error ? (
            <p className='text-gray-700 text-sm'>
              Unable to load Craig Ranch listings right now.
            </p>
          ) : (
            <>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E6BB8] mx-auto mb-4' />
              <p className='text-gray-600 text-sm'>
                Loading Craig Ranch properties...
              </p>
            </>
          )}
        </div>
      ) : null}
      <div ref={hostRef} />
    </div>
  );
}
