'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { searchCategory } from '@/lib/amenity-places-search';
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from '@/lib/google-maps-loader';
import { cn } from '@/lib/utils';
import {
  AMENITY_CATEGORIES,
  CRAIG_RANCH_MAP_CENTER,
  CURATED_CRAIG_RANCH_AMENITIES,
  curatedAmenitiesForCategory,
  embedMapFallbackUrl,
  googleMapsDirectionsUrl,
  type AmenityCategoryId,
  type CuratedAmenity,
} from '@/lib/craig-ranch-amenity-config';
import { MapPin, Navigation } from 'lucide-react';

const MAP_MIN_HEIGHT = 420;

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

type AmenityMapProps = {
  className?: string;
  compact?: boolean;
  showStaticList?: boolean;
};

function getMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return key?.trim() ? key.trim() : undefined;
}

function curatedToMapResults(items: readonly CuratedAmenity[]): MapPlaceResult[] {
  return items
    .filter(
      item =>
        item.latitude != null &&
        item.longitude != null &&
        (item.latitude !== CRAIG_RANCH_MAP_CENTER.latitude ||
          item.longitude !== CRAIG_RANCH_MAP_CENTER.longitude)
    )
    .map(item => ({
      id: item.id,
      name: item.name,
      address: item.address,
      lat: item.latitude!,
      lng: item.longitude!,
    }));
}

function buildInfoWindowContent(
  doc: Document,
  name: string,
  address: string
): HTMLElement {
  const wrap = doc.createElement('div');
  wrap.style.maxWidth = '260px';
  wrap.style.padding = '4px 0';

  const title = doc.createElement('strong');
  title.textContent = name;
  wrap.appendChild(title);

  if (address) {
    const addr = doc.createElement('p');
    addr.style.margin = '6px 0 0';
    addr.style.fontSize = '13px';
    addr.style.color = '#444';
    addr.textContent = address;
    wrap.appendChild(addr);
  }

  const link = doc.createElement('a');
  link.href = googleMapsDirectionsUrl(address || name);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.fontSize = '13px';
  link.textContent = 'Directions';
  wrap.appendChild(link);

  return wrap;
}

export default function AmenityMap({
  className = '',
  compact = false,
  showStaticList = true,
}: AmenityMapProps) {
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>('restaurants');
  const [useInteractive, setUseInteractive] = useState(false);
  const [forceFallback, setForceFallback] = useState(() => !getMapsApiKey());
  const [mapBootstrapping, setMapBootstrapping] = useState(() =>
    Boolean(getMapsApiKey())
  );
  const [placesLoading, setPlacesLoading] = useState(false);
  const [dynamicPlaces, setDynamicPlaces] = useState<MapPlaceResult[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const mapInitializedRef = useRef(false);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const { ref: inViewRef, isInView } = useInView({
    rootMargin: '200px 0px',
    threshold: 0.05,
  });

  const mapHeight = compact ? 360 : MAP_MIN_HEIGHT;
  const apiKey = getMapsApiKey();

  const setWrapperRef = useCallback(
    (node: HTMLDivElement | null) => {
      wrapperRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  const enterFallbackMode = useCallback(() => {
    setForceFallback(true);
    setUseInteractive(false);
    setMapBootstrapping(false);
    setDynamicPlaces([]);
    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    mapRef.current = null;
    mapInitializedRef.current = false;
    if (mapContainerRef.current) {
      mapContainerRef.current.replaceChildren();
    }
  }, []);

  const staticForCategory = useMemo(
    () => curatedAmenitiesForCategory(activeCategory),
    [activeCategory]
  );

  const listItems = useMemo((): MapPlaceResult[] => {
    if (useInteractive && dynamicPlaces.length > 0) {
      return dynamicPlaces;
    }
    const curated =
      staticForCategory.length > 0
        ? staticForCategory
        : CURATED_CRAIG_RANCH_AMENITIES.slice(0, 6);
    return curated.map(item => ({
      id: item.id,
      name: item.name,
      address: item.address,
      lat: item.latitude ?? CRAIG_RANCH_MAP_CENTER.latitude,
      lng: item.longitude ?? CRAIG_RANCH_MAP_CENTER.longitude,
    }));
  }, [useInteractive, dynamicPlaces, staticForCategory]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
  }, []);

  const renderMarkers = useCallback(
    (places: MapPlaceResult[]) => {
      if (!mapRef.current || !window.google?.maps) return;
      clearMarkers();
      const infoWindow =
        infoWindowRef.current ?? new window.google.maps.InfoWindow();
      infoWindowRef.current = infoWindow;

      const center = {
        lat: CRAIG_RANCH_MAP_CENTER.latitude,
        lng: CRAIG_RANCH_MAP_CENTER.longitude,
      };

      communityMarkerRef.current = new window.google.maps.Marker({
        map: mapRef.current,
        position: center,
        title: CRAIG_RANCH_MAP_CENTER.label,
        label: {
          text: 'CR',
          color: '#ffffff',
          fontWeight: '700',
        },
        zIndex: 999,
      });

      communityMarkerRef.current.addListener('click', () => {
        infoWindow.setContent(
          buildInfoWindowContent(
            document,
            CRAIG_RANCH_MAP_CENTER.label,
            CRAIG_RANCH_MAP_CENTER.anchorAddress
          )
        );
        infoWindow.open({
          anchor: communityMarkerRef.current,
          map: mapRef.current,
        });
      });

      places.forEach(place => {
        const marker = new window.google.maps.Marker({
          map: mapRef.current!,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          infoWindow.setContent(
            buildInfoWindowContent(document, place.name, place.address)
          );
          infoWindow.open({ anchor: marker, map: mapRef.current! });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers]
  );

  const showCuratedOnMap = useCallback(
    (categoryId: AmenityCategoryId) => {
      const curated = curatedToMapResults(
        curatedAmenitiesForCategory(categoryId)
      );
      if (curated.length > 0) {
        setDynamicPlaces(curated);
        renderMarkers(curated);
      } else {
        setDynamicPlaces([]);
        renderMarkers([]);
      }
    },
    [renderMarkers]
  );

  const fetchNearbyPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find(c => c.id === categoryId);
      if (!category || !mapRef.current || forceFallback) return;

      setPlacesLoading(true);
      try {
        const mapped = await searchCategory(categoryId, category.primaryTypes);
        if (mapped.length > 0) {
          setDynamicPlaces(mapped);
          renderMarkers(mapped);
        } else {
          showCuratedOnMap(categoryId);
        }
      } catch {
        showCuratedOnMap(categoryId);
      } finally {
        setPlacesLoading(false);
      }
    },
    [forceFallback, renderMarkers, showCuratedOnMap]
  );

  const initInteractiveMap = useCallback(async () => {
    if (mapInitializedRef.current || forceFallback) return;
    if (mapsAuthFailed) {
      enterFallbackMode();
      return;
    }
    const key = getMapsApiKey();
    if (!key) {
      enterFallbackMode();
      return;
    }

    try {
      await loadGoogleMaps(key);
      if (mapsAuthFailed) {
        enterFallbackMode();
        return;
      }
      const mapsLib = (await google.maps.importLibrary(
        'maps'
      )) as google.maps.MapsLibrary;
      if (!mapContainerRef.current) return;

      const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
      mapRef.current = new mapsLib.Map(mapContainerRef.current, {
        center: {
          lat: CRAIG_RANCH_MAP_CENTER.latitude,
          lng: CRAIG_RANCH_MAP_CENTER.longitude,
        },
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        ...(mapId ? { mapId } : {}),
      });

      mapInitializedRef.current = true;
      setUseInteractive(true);
      setMapBootstrapping(false);
    } catch {
      enterFallbackMode();
    }
  }, [enterFallbackMode, forceFallback]);

  useEffect(() => {
    const onAuthFailure = () => enterFallbackMode();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    if (mapsAuthFailed) enterFallbackMode();
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallbackMode]);

  useEffect(() => {
    if (!isInView || forceFallback) return;
    if (!apiKey) {
      enterFallbackMode();
      return;
    }
    void initInteractiveMap();
  }, [isInView, apiKey, forceFallback, initInteractiveMap, enterFallbackMode]);

  useEffect(() => {
    if (!useInteractive || !mapRef.current || forceFallback) return;
    void fetchNearbyPlaces(activeCategory);
  }, [activeCategory, useInteractive, forceFallback, fetchNearbyPlaces]);

  useEffect(() => {
    return () => {
      clearMarkers();
      mapRef.current = null;
    };
  }, [clearMarkers]);

  const showFallbackEmbed = forceFallback || !apiKey;
  const showInteractiveMap = useInteractive && !showFallbackEmbed;

  return (
    <div className={cn('w-full', className)}>
      <div
        role='tablist'
        aria-label='Filter nearby amenities by category'
        className='flex flex-wrap gap-2 mb-4'
      >
        {AMENITY_CATEGORIES.map(cat => {
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
        ref={setWrapperRef}
        id='craig-ranch-amenity-map-panel'
        role='tabpanel'
        aria-label={`Map showing ${AMENITY_CATEGORIES.find(c => c.id === activeCategory)?.label ?? 'amenities'} near Craig Ranch`}
        className='w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100'
        style={{ minHeight: mapHeight, height: mapHeight }}
      >
        {showFallbackEmbed ? (
          <iframe
            src={embedMapFallbackUrl()}
            title='Map of Craig Ranch, North Las Vegas'
            className='absolute inset-0 w-full h-full border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        ) : (
          <>
            <div
              ref={mapContainerRef}
              className={cn(
                'w-full h-full',
                !showInteractiveMap && 'invisible absolute inset-0'
              )}
              aria-label='Interactive Google Map of amenities near Craig Ranch'
            />
            {mapBootstrapping && (
              <div
                className='absolute inset-0 flex items-center justify-center text-sm text-gray-600 bg-gray-50'
                aria-live='polite'
              >
                Loading map…
              </div>
            )}
          </>
        )}
        {!isInView && apiKey && mapBootstrapping && !showFallbackEmbed && (
          <div className='absolute inset-0 flex items-center justify-center text-sm text-gray-600 bg-gray-50/80'>
            Map loads as you scroll…
          </div>
        )}
        {placesLoading && showInteractiveMap && (
          <div
            className='absolute top-3 right-3 rounded-md bg-white/90 px-3 py-1 text-xs text-gray-700 shadow'
            aria-live='polite'
          >
            Updating places…
          </div>
        )}
      </div>

      {showStaticList && (
        <ul
          className='mt-6 grid gap-3 sm:grid-cols-2'
          aria-label='Curated amenities near Craig Ranch'
        >
          {listItems.map(place => (
            <li
              key={place.id}
              className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'
            >
              <p className='font-semibold text-[#0A2540]'>{place.name}</p>
              {place.address && (
                <p className='text-sm text-gray-600 mt-1 flex items-start gap-1.5'>
                  <MapPin className='h-4 w-4 shrink-0 mt-0.5' aria-hidden />
                  <span>{place.address}</span>
                </p>
              )}
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
      )}
    </div>
  );
}
