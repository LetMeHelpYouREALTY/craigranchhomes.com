'use client';

import GoogleMap from '@/components/sections/google-map';
import { useIsMobile } from '@/hooks';
import { waitForRealScoutElement } from '@/lib/realscout-script';
import { useEffect, useRef, useState } from 'react';

export default function CraigRanchPropertySearch() {
  const isMobile = useIsMobile();
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const mount = async () => {
      const defined = await waitForRealScoutElement('realscout-property-search');
      if (cancelled || !hostRef.current) return;
      if (!defined) {
        setError(true);
        return;
      }

      hostRef.current.replaceChildren();
      const widget = document.createElement('realscout-property-search');
      widget.setAttribute('office-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', 'true');
      widget.setAttribute('map-height', '500px');
      widget.setAttribute('listings-per-page', '12');
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
  }, [isMobile]);

  return (
    <div className='real-estate-search-container min-h-[500px]'>
      <GoogleMap
        address='Craig Ranch, North Las Vegas, NV 89031'
        zoom={13}
        height='420px'
        title='Map of Craig Ranch, North Las Vegas'
        className='mb-6'
      />
      {!ready ? (
        <div className='text-center py-8'>
          {error ? (
            <p className='text-gray-700 text-sm'>
              Property search is temporarily unavailable.
            </p>
          ) : (
            <>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E6BB8] mx-auto mb-4' />
              <p className='text-gray-600 text-sm'>Loading property search...</p>
            </>
          )}
        </div>
      ) : null}
      <div ref={hostRef} />
    </div>
  );
}
