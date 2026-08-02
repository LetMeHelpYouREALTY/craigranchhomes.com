'use client';

import { useIsMobile } from '@/hooks';
import { ensureRealScoutScript } from '@/lib/realscout-script';
import { useEffect, useRef } from 'react';

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
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const initWidget = async () => {
      try {
        await ensureRealScoutScript();
      } catch {
        return;
      }
      if (cancelled || !widgetRef.current) return;
      if (!customElements.get('realscout-office-listings')) return;

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

      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(widget);
    };

    void initWidget();
    return () => {
      cancelled = true;
    };
  }, [isMobile, priceMin, priceMax, showMap, listingsPerPage]);

  return (
    <div
      ref={widgetRef}
      className='real-estate-listings-container min-h-[400px] flex items-center justify-center'
    >
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4' />
        <p className='text-gray-600 text-sm'>Loading Craig Ranch properties...</p>
      </div>
    </div>
  );
}
