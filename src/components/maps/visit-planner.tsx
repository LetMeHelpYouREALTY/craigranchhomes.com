'use client';

import { useEffect, useRef, useState } from 'react';
import AddressAutocomplete from '@/components/maps/address-autocomplete';
import { Button } from '@/components/ui/button';
import {
  googleMapsApiKey,
  loadGoogleMaps,
  mapsAuthFailed,
} from '@/lib/google-maps-loader';
import {
  OFFICE_DESTINATION,
  TRAVEL_MODES,
  VISIT_PRESETS,
  directionsEmbedUrl,
  googleMapsDirectionsUrl,
  travelModeFromId,
  type TravelModeId,
} from '@/lib/office-directions';
import { SITE_NAP } from '@/lib/site-nap';

type RouteSummary = {
  mode: TravelModeId;
  duration: string;
  distance: string;
  state: 'ok' | 'none';
};

type VisitPlannerProps = {
  initialOrigin?: string;
};

function legText(
  value: { text?: string } | string | null | undefined
): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value.text ?? '';
}

export default function VisitPlanner({ initialOrigin = '' }: VisitPlannerProps) {
  const [origin, setOrigin] = useState(initialOrigin);
  const [originPoint, setOriginPoint] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const [mode, setMode] = useState<TravelModeId>('DRIVING');
  const [summaries, setSummaries] = useState<RouteSummary[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'fallback'>(
    'idle'
  );
  const [message, setMessage] = useState('');
  const mapNode = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const rendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const routesRef = useRef(new Map<TravelModeId, google.maps.DirectionsResult>());

  useEffect(() => {
    setOrigin(initialOrigin);
  }, [initialOrigin]);

  function showRoute(nextMode: TravelModeId) {
    const result = routesRef.current.get(nextMode);
    if (result && rendererRef.current) {
      rendererRef.current.setDirections(result);
    }
    setMode(nextMode);
  }

  async function planVisit(
    nextOrigin = origin,
    point: { lat: number; lng: number } | undefined = originPoint
  ) {
    const start = nextOrigin.trim();
    if (!start) {
      setMessage('Enter a starting address.');
      return;
    }
    setOrigin(start);
    setOriginPoint(point);
    const apiKey = googleMapsApiKey();
    if (!apiKey || mapsAuthFailed) {
      setStatus('fallback');
      setSummaries([]);
      setMessage(
        'Open a travel mode in Google Maps for the current estimated time.'
      );
      return;
    }

    setStatus('loading');
    setMessage('');
    try {
      await loadGoogleMaps(apiKey);
      const { DirectionsService, DirectionsRenderer, TravelMode } =
        (await google.maps.importLibrary('routes')) as google.maps.RoutesLibrary;
      const { Map } = (await google.maps.importLibrary(
        'maps'
      )) as google.maps.MapsLibrary;
      if (!mapNode.current) return;
      if (!mapRef.current) {
        mapRef.current = new Map(mapNode.current, {
          center: { lat: SITE_NAP.latitude, lng: SITE_NAP.longitude },
          zoom: 12,
          mapTypeControl: false,
          streetViewControl: false,
        });
      }
      if (!rendererRef.current) {
        rendererRef.current = new DirectionsRenderer();
        rendererRef.current.setMap(mapRef.current);
      }

      const service = new DirectionsService();
      const destination = {
        lat: SITE_NAP.latitude,
        lng: SITE_NAP.longitude,
      };
      const originRequest = point ?? start;
      const nextSummaries: RouteSummary[] = [];
      routesRef.current.clear();

      for (const item of TRAVEL_MODES) {
        try {
          const result = await service.route({
            origin: originRequest,
            destination,
            travelMode: travelModeFromId(item.id, TravelMode),
            region: 'us',
          });
          const leg = result.routes[0]?.legs[0];
          const duration = legText(leg?.duration);
          const distance = legText(leg?.distance);
          if (!duration) {
            nextSummaries.push({ mode: item.id, duration: '', distance: '', state: 'none' });
            continue;
          }
          routesRef.current.set(item.id, result);
          nextSummaries.push({
            mode: item.id,
            duration,
            distance,
            state: 'ok',
          });
        } catch {
          nextSummaries.push({
            mode: item.id,
            duration: '',
            distance: '',
            state: 'none',
          });
        }
      }

      setSummaries(nextSummaries);
      const preferred =
        nextSummaries.find((item) => item.mode === mode && item.state === 'ok') ??
        nextSummaries.find((item) => item.state === 'ok');
      if (preferred) {
        showRoute(preferred.mode);
        setStatus('ready');
        setMessage('Times come from Google Maps and change with traffic.');
      } else {
        setStatus('fallback');
        setMessage(
          'Google Maps did not return a route. Use a travel mode link for the estimated time.'
        );
      }
    } catch {
      setStatus('fallback');
      setSummaries([]);
      setMessage(
        'Open a travel mode in Google Maps for the current estimated time.'
      );
    }
  }

  const showEmbed = status === 'fallback' && origin.trim().length > 0;

  return (
    <div className='space-y-6'>
      <AddressAutocomplete
        id='visit-origin'
        name='origin'
        label='Starting address'
        placeholder='Airport, hotel, or street address'
        initialValue={origin}
        onPlace={(place) => {
          setOrigin(place.address);
          setOriginPoint(
            place.lat !== undefined && place.lng !== undefined
              ? { lat: place.lat, lng: place.lng }
              : undefined
          );
        }}
      />
      <div className='flex flex-wrap gap-2'>
        {VISIT_PRESETS.map((preset) => (
          <Button
            key={preset.label}
            type='button'
            variant='outline'
            onClick={() => {
              void planVisit(preset.address, undefined);
            }}
          >
            {preset.label}
          </Button>
        ))}
      </div>
      <Button
        type='button'
        className='bg-[#0A2540] hover:bg-[#16375C] text-white'
        onClick={() => void planVisit()}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Checking travel times…' : 'Show travel times'}
      </Button>
      {message ? (
        <p className='text-sm text-gray-600' aria-live='polite'>
          {message}
        </p>
      ) : null}

      {summaries.length > 0 ? (
        <div
          role='tablist'
          aria-label='Travel time to the office'
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'
        >
          {TRAVEL_MODES.map((item) => {
            const summary = summaries.find((entry) => entry.mode === item.id);
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
                onClick={() => showRoute(item.id)}
              >
                <span className='block text-sm font-semibold'>{item.label}</span>
                <span className='block mt-1 text-lg font-bold'>
                  {summary?.state === 'ok' ? summary.duration : 'No route'}
                </span>
                {summary?.state === 'ok' && summary.distance ? (
                  <span className={`block text-sm ${selected ? 'text-blue-100' : 'text-gray-600'}`}>
                    {summary.distance}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className='relative overflow-hidden rounded-lg border border-gray-200 bg-gray-100 min-h-[420px]'>
        <div ref={mapNode} className='h-[420px] w-full' />
        {showEmbed ? (
          <iframe
            title={`Directions to ${SITE_NAP.name}`}
            src={directionsEmbedUrl(origin.trim(), mode)}
            className='absolute inset-0 h-full w-full border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        ) : null}
      </div>

      {origin.trim() ? (
        <ul className='flex flex-wrap gap-x-4 gap-y-2 text-sm'>
          {TRAVEL_MODES.map((item) => (
            <li key={item.id}>
              <a
                className='text-[#3A8DDE] hover:underline font-medium'
                href={googleMapsDirectionsUrl(origin.trim(), item.id)}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.label} in Google Maps
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-sm text-gray-600'>
          Destination: {OFFICE_DESTINATION}. {SITE_NAP.hoursLine}.
        </p>
      )}
    </div>
  );
}
