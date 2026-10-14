'use client';

import GoogleMap from '@/components/sections/google-map';
import { useIsMobile, useInView } from '@/hooks';
import { waitForRealScoutElement } from '@/lib/realscout-script';
import { useEffect, useRef, useState } from 'react';

type RealScoutOfficeWidgetProps = {
  agentEncodedId?: string;
  showMap?: boolean;
  listingsPerPage?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

/**
 * Mount RealScout into an empty host node that React never manages as children.
 * Clearing React-owned DOM with innerHTML caused removeChild crashes.
 */
function RealScoutOfficeWidgetContent({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  showMap = true,
  listingsPerPage = '12',
  priceMin,
  priceMax,
  className = '',
}: RealScoutOfficeWidgetProps) {
  const isMobile = useIsMobile();
  const { ref: setInViewRef, isInView } = useInView({
    // Keep preload modest so lab TBT isn't hit by RealScout below the fold.
    rootMargin: '120px',
    threshold: 0,
  });
  const hostRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    'idle'
  );

  useEffect(() => {
    if (!isInView || startedRef.current) {
      return;
    }
    startedRef.current = true;
    let cancelled = false;
    setStatus('loading');

    const mount = async () => {
      const defined = await waitForRealScoutElement('realscout-office-listings');
      if (cancelled || !hostRef.current) {
        return;
      }

      if (!defined) {
        setStatus('error');
        return;
      }

      hostRef.current.replaceChildren();

      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', agentEncodedId);
      widget.setAttribute('sort-order', 'STATUS_AND_SIGNIFICANT_CHANGE');
      widget.setAttribute('listing-status', 'For Sale');
      widget.setAttribute('property-types', 'SFR,MF,TC');
      if (priceMin) {
        widget.setAttribute('price-min', priceMin);
      }
      if (priceMax) {
        widget.setAttribute('price-max', priceMax);
      }
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', showMap ? 'true' : 'false');
      widget.setAttribute('map-height', '400px');
      widget.setAttribute('listings-per-page', listingsPerPage);
      widget.setAttribute('show-pagination', 'true');

      hostRef.current.appendChild(widget);
      if (!cancelled) {
        setStatus('ready');
      }
    };

    void mount().catch(() => {
      if (!cancelled) {
        setStatus('error');
      }
    });

    return () => {
      cancelled = true;
    };
  }, [
    isInView,
    isMobile,
    agentEncodedId,
    showMap,
    listingsPerPage,
    priceMin,
    priceMax,
  ]);

  return (
    <div
      ref={setInViewRef}
      className={`real-estate-office-widget-container min-h-[400px] ${className}`}
    >
      {showMap ? (
        <GoogleMap
          address='Craig Ranch, North Las Vegas, NV 89031'
          zoom={13}
          height='400px'
          title='Map of Craig Ranch, North Las Vegas'
          className='mb-6'
        />
      ) : null}
      {status !== 'ready' ? (
        <div className='text-center py-8'>
          {status === 'error' ? (
            <p className='text-gray-700 text-sm'>
              Listings are temporarily unavailable. Call{' '}
              <a className='underline text-[#0A2540]' href='tel:7028205408'>
                (702) 820-5408
              </a>{' '}
              or{' '}
              <a
                className='underline text-[#0A2540]'
                href='http://drjanduffy.realscout.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                browse on RealScout
              </a>
              .
            </p>
          ) : (
            <>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E6BB8] mx-auto mb-4' />
              <p className='text-gray-600 text-sm'>Loading office listings...</p>
            </>
          )}
        </div>
      ) : null}
      <div ref={hostRef} />
    </div>
  );
}

export default function RealScoutOfficeWidget(props: RealScoutOfficeWidgetProps) {
  return <RealScoutOfficeWidgetContent {...props} />;
}
