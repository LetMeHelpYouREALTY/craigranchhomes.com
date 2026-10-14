'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
  /** When set, suggestions are limited to street addresses. */
  includedPrimaryTypes?: readonly string[];
  onPlace?: (place: SelectedAddress) => void;
};

type Suggestion = {
  label: string;
  lat: number;
  lng: number;
};

export const ADDRESS_TYPES = ['street_address', 'premise', 'subpremise', 'route'] as const;

function isSuggestionList(value: unknown): value is Suggestion[] {
  if (!Array.isArray(value)) return false;
  return value.every((item) => {
    if (!item || typeof item !== 'object') return false;
    const suggestion = item as Suggestion;
    return (
      typeof suggestion.label === 'string' &&
      typeof suggestion.lat === 'number' &&
      typeof suggestion.lng === 'number'
    );
  });
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
  const requestRef = useRef(0);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const query = value.trim();
    if (query.length < 3 || query === initialValue.trim()) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const requestId = requestRef.current + 1;
    requestRef.current = requestId;
    const scope = includedPrimaryTypes && includedPrimaryTypes.length > 0 ? 'address' : 'place';
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          const params = new URLSearchParams({ q: query, scope });
          const response = await fetch(`/api/address-suggestions?${params.toString()}`, {
            signal: controller.signal,
          });
          const body: unknown = await response.json();
          if (requestRef.current !== requestId) return;
          const results =
            body && typeof body === 'object' && isSuggestionList((body as { suggestions?: unknown }).suggestions)
              ? (body as { suggestions: Suggestion[] }).suggestions
              : [];
          if (!response.ok) {
            setSuggestions([]);
            setOpen(false);
            setStatus(
              'Address suggestions are unavailable. You can still type the full address.'
            );
            return;
          }
          setSuggestions(results);
          setOpen(results.length > 0);
          setActiveIndex(results.length > 0 ? 0 : -1);
          setStatus(
            results.length > 0
              ? `${results.length} address suggestions`
              : 'No matching addresses'
          );
        } catch (error) {
          if (error instanceof DOMException && error.name === 'AbortError') return;
          if (requestRef.current !== requestId) return;
          setSuggestions([]);
          setOpen(false);
          setStatus(
            'Address suggestions are unavailable. You can still type the full address.'
          );
        }
      })();
    }, 400);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [includedPrimaryTypes, initialValue, value]);

  function choose(suggestion: Suggestion) {
    setValue(suggestion.label);
    setOpen(false);
    setSuggestions([]);
    setStatus(suggestion.label);
    onPlace?.({
      address: suggestion.label,
      lat: suggestion.lat,
      lng: suggestion.lng,
    });
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
            if (suggestion) choose(suggestion);
          } else if (event.key === 'Escape') {
            setOpen(false);
          }
        }}
      />
      <input type='hidden' name={name} value={value} readOnly />
      <p className='text-xs text-gray-500'>
        Suggestions by OpenStreetMap contributors.
      </p>
      <p className='sr-only' aria-live='polite'>
        {status}
      </p>
      {open && suggestions.length > 0 ? (
        <ul
          id={listId}
          role='listbox'
          className='absolute z-20 top-full left-0 mt-1 max-h-64 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg'
        >
          {suggestions.map((suggestion, index) => (
            <li key={`${suggestion.label}-${suggestion.lat}`} role='presentation'>
              <button
                type='button'
                role='option'
                aria-selected={index === activeIndex}
                className={`block w-full px-3 py-2 text-left text-sm text-[#0A2540] ${
                  index === activeIndex ? 'bg-[#F7F9FC]' : 'bg-white'
                }`}
                onMouseDown={(event) => {
                  event.preventDefault();
                  choose(suggestion);
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
