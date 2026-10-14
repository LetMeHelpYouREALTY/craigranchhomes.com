'use client';

import { useEffect, useRef, useState } from 'react';
import AddressAutocomplete from '@/components/maps/address-autocomplete';
import { Button } from '@/components/ui/button';
import {
  OFFICE_DESTINATION,
  TRAVEL_MODES,
  VISIT_PRESETS,
  directionsEmbedUrl,
  googleMapsDirectionsUrl,
  type TravelModeId,
} from '@/lib/office-directions';
import { SITE_NAP } from '@/lib/site-nap';

type VisitPlannerProps = {
  initialOrigin?: string;
};

export default function VisitPlanner({ initialOrigin = '' }: VisitPlannerProps) {
  const [origin, setOrigin] = useState(initialOrigin);
  const draftOrigin = useRef(initialOrigin);
  const [activeOrigin, setActiveOrigin] = useState(initialOrigin.trim());
  const [mode, setMode] = useState<TravelModeId>('DRIVING');
  const [message, setMessage] = useState(
    initialOrigin.trim()
      ? 'Google Maps shows the estimated time and distance on the map. Choose a travel mode to update the route.'
      : ''
  );

  useEffect(() => {
    setOrigin(initialOrigin);
    draftOrigin.current = initialOrigin;
    const next = initialOrigin.trim();
    if (next) {
      setActiveOrigin(next);
      setMessage(
        'Google Maps shows the estimated time and distance on the map. Choose a travel mode to update the route.'
      );
    }
  }, [initialOrigin]);

  function showRoute(nextOrigin = draftOrigin.current) {
    const start = nextOrigin.trim();
    if (!start) {
      setMessage('Enter a starting address.');
      return;
    }
    draftOrigin.current = start;
    setOrigin(start);
    setActiveOrigin(start);
    setMessage(
      'Google Maps shows the estimated time and distance on the map. Choose a travel mode to update the route.'
    );
  }

  return (
    <div className='space-y-6'>
      <AddressAutocomplete
        id='visit-origin'
        name='origin'
        label='Starting address'
        placeholder='Airport, hotel, or street address'
        initialValue={origin}
        onPlace={(place) => {
          draftOrigin.current = place.address;
          if (place.lat !== undefined && place.lng !== undefined) {
            showRoute(place.address);
          }
        }}
      />
      <div className='flex flex-wrap gap-2'>
        {VISIT_PRESETS.map((preset) => (
          <Button
            key={preset.label}
            type='button'
            variant='outline'
            onClick={() => showRoute(preset.address)}
          >
            {preset.label}
          </Button>
        ))}
      </div>
      <Button
        type='button'
        className='bg-[#0A2540] hover:bg-[#16375C] text-white'
        onClick={() => showRoute()}
      >
        Show this route
      </Button>
      {message ? (
        <p className='text-sm text-gray-600' aria-live='polite'>
          {message}
        </p>
      ) : null}

      {activeOrigin ? (
        <div
          role='tablist'
          aria-label='Travel mode to the office'
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'
        >
          {TRAVEL_MODES.map((item) => {
            const selected = mode === item.id;
            return (
              <button
                key={item.id}
                type='button'
                role='tab'
                aria-selected={selected}
                className={`rounded-lg border p-4 text-left ${
                  selected
                    ? 'border-[#0A2540] bg-[#0A2540] text-white'
                    : 'border-gray-200 bg-white text-[#0A2540]'
                }`}
                onClick={() => setMode(item.id)}
              >
                <span className='block text-sm font-semibold'>{item.label}</span>
                <span className={`block mt-1 text-sm ${selected ? 'text-blue-100' : 'text-gray-600'}`}>
                  {selected ? 'Shown on the map' : 'Show this route'}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      {activeOrigin ? (
        <iframe
          title={`Directions to ${SITE_NAP.name}`}
          src={directionsEmbedUrl(activeOrigin, mode)}
          className='h-[420px] w-full rounded-lg border border-gray-200'
          loading='eager'
          referrerPolicy='no-referrer-when-downgrade'
        />
      ) : (
        <p className='text-sm text-gray-600'>
          Destination: {OFFICE_DESTINATION}. {SITE_NAP.hoursLine}.
        </p>
      )}

      {activeOrigin ? (
        <ul className='flex flex-wrap gap-x-4 gap-y-2 text-sm'>
          {TRAVEL_MODES.map((item) => (
            <li key={item.id}>
              <a
                className='text-[#3A8DDE] hover:underline font-medium'
                href={googleMapsDirectionsUrl(activeOrigin, item.id)}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.label} in Google Maps
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
