'use client';

import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AMENITY_CATEGORIES,
  embedCategorySearchUrl,
  googleMapsDirectionsUrl,
  googleMapsPlaceUrl,
  curatedAmenitiesForCategory,
  type AmenityCategoryId,
} from '@/lib/craig-ranch-amenity-config';

const MAP_MIN_HEIGHT = 420;

type AmenityMapProps = {
  className?: string;
  compact?: boolean;
  showStaticList?: boolean;
};

export default function AmenityMap({
  className = '',
  compact = false,
  showStaticList = true,
}: AmenityMapProps) {
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>('restaurants');
  const category =
    AMENITY_CATEGORIES.find((item) => item.id === activeCategory) ??
    AMENITY_CATEGORIES[0];
  const places = curatedAmenitiesForCategory(activeCategory);
  const mapHeight = compact ? 360 : MAP_MIN_HEIGHT;

  return (
    <div className={cn('w-full', className)}>
      <div
        role='tablist'
        aria-label='Filter nearby amenities by category'
        className='flex flex-wrap gap-2 mb-4'
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type='button'
              role='tab'
              aria-selected={selected}
              aria-controls='craig-ranch-amenity-map-panel'
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors border',
                selected
                  ? 'bg-[#0A2540] text-white border-[#0A2540]'
                  : 'bg-white text-[#0A2540] border-gray-200 hover:border-[#3A8DDE]'
              )}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id='craig-ranch-amenity-map-panel'
        role='tabpanel'
        aria-label={`Map showing ${category.label} near Craig Ranch`}
        className='w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100'
        style={{ minHeight: mapHeight, height: mapHeight }}
      >
        <iframe
          key={category.id}
          src={embedCategorySearchUrl(category.id)}
          title={`Google Maps search for ${category.mapQuery} near Craig Ranch`}
          className='absolute inset-0 w-full h-full border-0'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          allowFullScreen
        />
      </div>
      <p className='mt-3 text-sm text-gray-600'>
        The map searches Google Maps for {category.label.toLowerCase()} near
        Craig Ranch.{' '}
        <a
          href={googleMapsPlaceUrl(category.searchQuery)}
          className='text-[#3A8DDE] hover:underline font-medium'
          target='_blank'
          rel='noopener noreferrer'
        >
          Open this search in Google Maps
        </a>
        .
      </p>

      {showStaticList && places.length > 0 ? (
        <ul
          className='mt-6 grid gap-3 sm:grid-cols-2'
          aria-label={`${category.label} near Craig Ranch`}
        >
          {places.map((place) => (
            <li
              key={place.id}
              className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'
            >
              <p className='font-semibold text-[#0A2540]'>{place.name}</p>
              {place.address ? (
                <p className='text-sm text-gray-600 mt-1 flex items-start gap-1.5'>
                  <MapPin className='h-4 w-4 shrink-0 mt-0.5' aria-hidden />
                  <span>{place.address}</span>
                </p>
              ) : null}
              {place.note ? (
                <p className='text-sm text-gray-600 mt-2'>{place.note}</p>
              ) : null}
              <a
                href={googleMapsDirectionsUrl(place.address || place.name)}
                className='inline-flex items-center gap-1 text-sm text-[#3A8DDE] hover:underline mt-2 font-medium'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Navigation className='h-3.5 w-3.5' aria-hidden />
                Directions
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
