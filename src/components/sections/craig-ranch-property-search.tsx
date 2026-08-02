'use client';

import { useIsMobile } from '@/hooks';
import { ensureRealScoutScript } from '@/lib/realscout-script';
import { useEffect, useRef } from 'react';

export default function CraigRanchPropertySearch() {
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
      if (!customElements.get('realscout-property-search')) return;

      const widget = document.createElement('realscout-property-search');
      widget.setAttribute('office-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', 'true');
      widget.setAttribute('map-height', '500px');
      widget.setAttribute('listings-per-page', '12');
      widget.setAttribute('show-pagination', 'true');

      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(widget);
    };

    void initWidget();
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  return (
    <div
      ref={widgetRef}
      className='real-estate-search-container min-h-[500px] flex items-center justify-center'
    >
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4' />
        <p className='text-gray-600 text-sm'>Loading property search...</p>
      </div>
    </div>
  );
}
