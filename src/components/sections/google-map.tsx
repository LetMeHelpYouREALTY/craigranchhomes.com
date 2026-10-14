'use client';

import { SITE_NAP } from '@/lib/site-nap';
import { useState } from 'react';

type GoogleMapProps = {
  address?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  height?: string;
  className?: string;
  title?: string;
};

export default function GoogleMap({
  address = SITE_NAP.addressLine,
  latitude = 36.2469871,
  longitude = -115.1554618,
  zoom = 14,
  height = '400px',
  className = '',
  title = 'Craig Ranch Homes office',
}: GoogleMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const query = address.trim() ? address : `${latitude},${longitude}`;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;

  return (
    <div className={`w-full relative ${className}`}>
      <div
        className='w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100'
        style={{ height }}
      >
        {!mapLoaded && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
            <div className='text-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
              <p className='text-gray-500 text-sm'>Loading map...</p>
            </div>
          </div>
        )}
        <iframe
          src={mapUrl}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title={title}
          onLoad={() => setMapLoaded(true)}
          className='relative z-10 w-full h-full'
        />
      </div>
    </div>
  );
}

