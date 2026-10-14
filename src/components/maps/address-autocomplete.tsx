'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { googleMapsApiKey, loadGoogleMaps } from '@/lib/google-maps-loader';
import { SITE_NAP } from '@/lib/site-nap';

export type SelectedAddress = {
  address: string;
  lat?: number;
  lng?: number;
};

type AddressAutocompleteProps = {
  id: string;
  name?: string;
  label: string;
  placeholder?: string;
  initialValue?: string;
  includedPrimaryTypes?: readonly string[];
  onPlace?: (place: SelectedAddress) => void;
};

type Suggestion = {
  label: string;
  prediction: google.maps.places.PlacePrediction;
};

export const ADDRESS_TYPES = ['street_address', 'premise', 'subpremise', 'route'] as const;

function predictionLabel(prediction: google.maps.places.PlacePrediction): string {
  const formatted = prediction.text as { text?: string } | null;
  if (formatted?.text) return formatted.text;
  return prediction.placeId;
}

export default function AddressAutocomplete({
  id,
  name = 'propertyAddress',
  label,
  placeholder = 'Start typing a street address',
  initialValue = '',
  includedPrimaryTypes,
  onPlace,
}: AddressAutocompleteProps) {
  const listId = useId();
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [status, setStatus] = useState('');
  const sessionRef = useRef<google.maps.places.AutocompleteSessionToken | null>(
    null
  );
  const requestRef = useRef(0);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const apiKey = googleMapsApiKey();
    const query = value.trim();
    if (!apiKey || query.length < 3) {
      setSuggestions([]);
      return;
    }

    const requestId = requestRef.current + 1;
    requestRef.current = requestId;
    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          await loadGoogleMaps(apiKey);
          const { AutocompleteSuggestion, AutocompleteSessionToken } =
            (await google.maps.importLibrary(
              'places'
            )) as google.maps.PlacesLibrary;
          if (!sessionRef.current) {
            sessionRef.current = new AutocompleteSessionToken();
          }
          const { suggestions: results } =
            await AutocompleteSuggestion.fetchAutocompleteSuggestions({
              input: query,
              includedRegionCodes: ['us'],
              ...(includedPrimaryTypes && includedPrimaryTypes.length > 0
                ? { includedPrimaryTypes: [...includedPrimaryTypes] }
                : {}),
              sessionToken: sessionRef.current,
              locationBias: {
                center: {
                  lat: SITE_NAP.latitude,
                  lng: SITE_NAP.longitude,
                },
                radius: 40000,
              },
            });
          if (requestRef.current !== requestId) return;
          const next = results.flatMap((item) => {
            if (!item.placePrediction) return [];
            return [
              {
                label: predictionLabel(item.placePrediction),
                prediction: item.placePrediction,
              },
            ];
          });
          setSuggestions(next);
          setOpen(next.length > 0);
          setActiveIndex(next.length > 0 ? 0 : -1);
          setStatus(
            next.length > 0
              ? `${next.length} address suggestions`
              : 'No matching addresses'
          );
        } catch {
          if (requestRef.current !== requestId) return;
          setSuggestions([]);
          setStatus(
            'Address suggestions are unavailable. You can still type the full address.'
          );
        }
      })();
    }, 250);

    return () => window.clearTimeout(timer);
  }, [includedPrimaryTypes, value]);

  async function choose(suggestion: Suggestion) {
    setValue(suggestion.label);
    setOpen(false);
    setSuggestions([]);
    const selected: SelectedAddress = { address: suggestion.label };
    try {
      const place = suggestion.prediction.toPlace();
      await place.fetchFields({
        fields: ['formattedAddress', 'location', 'displayName'],
      });
      const loc = place.location;
      const json = loc?.toJSON?.() ?? (loc
        ? { lat: loc.lat(), lng: loc.lng() }
        : undefined);
      selected.address = place.formattedAddress || suggestion.label;
      if (json) {
        selected.lat = json.lat;
        selected.lng = json.lng;
      }
      setValue(selected.address);
    } catch {
      // The typed suggestion is still a usable address string.
    }
    sessionRef.current = null;
    onPlace?.(selected);
  }

  return (
    <div className='space-y-2 relative'>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        role='combobox'
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete='list'
        autoComplete='off'
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          const next = event.target.value;
          setValue(next);
          onPlace?.({ address: next });
        }}
        onKeyDown={(event) => {
          if (!open || suggestions.length === 0) return;
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveIndex((index) => (index + 1) % suggestions.length);
          } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveIndex((index) =>
              index <= 0 ? suggestions.length - 1 : index - 1
            );
          } else if (event.key === 'Enter' && activeIndex >= 0) {
            event.preventDefault();
            const suggestion = suggestions[activeIndex];
            if (suggestion) void choose(suggestion);
          } else if (event.key === 'Escape') {
            setOpen(false);
          }
        }}
      />
      <input type='hidden' name={name} value={value} readOnly />
      <p className='sr-only' aria-live='polite'>
        {status}
      </p>
      {open && suggestions.length > 0 ? (
        <ul
          id={listId}
          role='listbox'
          className='absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg'
        >
          {suggestions.map((suggestion, index) => (
            <li key={suggestion.prediction.placeId} role='presentation'>
              <button
                type='button'
                role='option'
                aria-selected={index === activeIndex}
                className={`block w-full px-3 py-2 text-left text-sm text-[#0A2540] ${
                  index === activeIndex ? 'bg-[#F7F9FC]' : 'bg-white'
                }`}
                onMouseDown={(event) => {
                  event.preventDefault();
                  void choose(suggestion);
                }}
              >
                {suggestion.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
