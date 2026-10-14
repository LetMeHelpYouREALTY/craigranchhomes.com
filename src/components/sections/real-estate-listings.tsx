'use client';

import GoogleMap from '@/components/sections/google-map';
import { useIsMobile } from '@/hooks';
import { waitForRealScoutElement } from '@/lib/realscout-script';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function RealEstateListings() {
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
      widget.setAttribute('price-min', '600000');
      widget.setAttribute('price-max', '1200000');
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', 'true');
      widget.setAttribute('map-height', '400px');
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
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Available Craig Ranch Properties
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover the latest luxury homes available in Craig Ranch
          </p>
        </div>

        <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg'>
          <div className='mb-6'>
            <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
              Current Craig Ranch Listings
            </h3>
            <p className='text-gray-600'>
              Browse our curated selection of premium properties in the $600K -
              $1.2M range
            </p>
          </div>

          <GoogleMap
            address='Craig Ranch, North Las Vegas, NV 89031'
            zoom={13}
            height='420px'
            title='Map of Craig Ranch homes in North Las Vegas'
            className='mb-8'
          />

          <div className='real-estate-listings-container min-h-[400px]'>
            {!ready ? (
              <div className='text-center py-8'>
                {error ? (
                  <p className='text-gray-700 text-sm'>
                    Listings are temporarily unavailable.{' '}
                    <Link href='/contact' className='underline text-[#0A2540]'>
                      Contact us
                    </Link>
                    .
                  </p>
                ) : (
                  <>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E6BB8] mx-auto mb-4' />
                    <p className='text-gray-600 text-sm'>
                      Loading luxury properties in Craig Ranch...
                    </p>
                  </>
                )}
              </div>
            ) : null}
            <div ref={hostRef} />
          </div>
        </div>

        <div className='mt-12 grid md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='bg-[#1E6BB8] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl' aria-hidden='true'>
                🏠
              </span>
            </div>
            <h3 className='text-lg font-semibold text-[#0A2540] mb-2'>
              Premium Properties
            </h3>
            <p className='text-gray-600'>
              Hand-selected luxury homes with exceptional quality and amenities
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-[#0B7A5A] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl' aria-hidden='true'>
                📍
              </span>
            </div>
            <h3 className='text-lg font-semibold text-[#0A2540] mb-2'>
              Prime Location
            </h3>
            <p className='text-gray-600'>
              Properties across Craig Ranch subdivisions and price points
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-[#0A2540] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl' aria-hidden='true'>
                💎
              </span>
            </div>
            <h3 className='text-lg font-semibold text-[#0A2540] mb-2'>
              Luxury Features
            </h3>
            <p className='text-gray-600'>
              High-end finishes, modern amenities, and exceptional craftsmanship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
