'use client';

import { useIsMobile, useInView } from '@/hooks';
import { ensureRealScoutScript } from '@/lib/realscout-script';
import { useEffect, useRef, useState } from 'react';

type RealScoutOfficeWidgetProps = {
  agentEncodedId?: string;
  showMap?: boolean;
  listingsPerPage?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

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
    rootMargin: '200px',
    threshold: 0,
  });
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const combinedRef = (node: HTMLDivElement | null) => {
    widgetRef.current = node;
    setInViewRef(node);
  };

  useEffect(() => {
    if (!isInView || isInitialized || !widgetRef.current) {
      return;
    }

    let cancelled = false;

    const initWidget = async () => {
      try {
        await ensureRealScoutScript();
      } catch {
        return;
      }

      if (cancelled || !widgetRef.current) {
        return;
      }

      const mount = () => {
        if (
          cancelled ||
          !widgetRef.current ||
          typeof customElements === 'undefined' ||
          !customElements.get('realscout-office-listings')
        ) {
          return false;
        }

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

        widgetRef.current.innerHTML = '';
        widgetRef.current.appendChild(widget);
        setIsInitialized(true);
        return true;
      };

      if (mount()) {
        return;
      }

      const checkInterval = window.setInterval(() => {
        if (mount()) {
          window.clearInterval(checkInterval);
        }
      }, 100);

      window.setTimeout(() => window.clearInterval(checkInterval), 8000);
    };

    void initWidget();

    return () => {
      cancelled = true;
    };
  }, [
    isInView,
    isInitialized,
    isMobile,
    agentEncodedId,
    showMap,
    listingsPerPage,
    priceMin,
    priceMax,
  ]);

  return (
    <div
      ref={combinedRef}
      className={`real-estate-office-widget-container min-h-[400px] ${className}`}
    >
      {!isInitialized ? (
        <div className='text-center py-8'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4' />
          <p className='text-gray-600 text-sm'>Loading office listings...</p>
        </div>
      ) : null}
    </div>
  );
}

export default function RealScoutOfficeWidget(props: RealScoutOfficeWidgetProps) {
  return <RealScoutOfficeWidgetContent {...props} />;
}
