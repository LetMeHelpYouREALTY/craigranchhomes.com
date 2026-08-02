'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks';

const HOMEBOT_SCRIPT_ID = 'homebot-widget-script';
const HOMEBOT_SCRIPT_SRC = 'https://embed.homebotapp.com/lgw/v1/widget.js';
const HOMEBOT_API_KEY =
  '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43';

declare global {
  interface Window {
    __hb_namespace?: string;
    Homebot?: (selector: string, apiKey: string) => void;
  }
}

function ensureHomebotNamespace() {
  if (typeof window === 'undefined' || window.__hb_namespace) {
    return;
  }

  const w = window as Window & {
    Homebot?: ((...args: unknown[]) => void) & { q?: unknown[] };
  };
  w.__hb_namespace = 'Homebot';
  w.Homebot =
    w.Homebot ||
    function (...args: unknown[]) {
      const fn = w.Homebot as ((...a: unknown[]) => void) & { q?: unknown[] };
      fn.q = fn.q || [];
      fn.q.push(args);
    };
}

function loadHomebotScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  const existing = document.getElementById(
    HOMEBOT_SCRIPT_ID
  ) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve) => {
      if (window.Homebot) {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => resolve(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = HOMEBOT_SCRIPT_ID;
    script.src = HOMEBOT_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Homebot script'));
    document.body.appendChild(script);
  });
}

export default function HomeEvaluationSection() {
  const { ref: setInViewRef, isInView } = useInView({
    rootMargin: '200px',
    threshold: 0,
  });
  const startedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ensureHomebotNamespace();
  }, []);

  useEffect(() => {
    if (!isInView || startedRef.current) {
      return;
    }
    startedRef.current = true;

    let cancelled = false;

    const init = async () => {
      try {
        await loadHomebotScript();
        if (cancelled) {
          return;
        }

        let retryCount = 0;
        const maxRetries = 10;

        const initWidget = () => {
          const container = document.getElementById('homebot_homeowner');
          if (!container) {
            setIsLoading(false);
            return;
          }

          if (typeof window.Homebot === 'function') {
            try {
              container.style.display = 'block';
              window.Homebot('#homebot_homeowner', HOMEBOT_API_KEY);
              window.setTimeout(() => {
                if (!cancelled) {
                  setIsLoading(false);
                }
              }, 500);
            } catch {
              setIsLoading(false);
            }
            return;
          }

          retryCount += 1;
          if (retryCount < maxRetries) {
            window.setTimeout(initWidget, 300);
          } else {
            setIsLoading(false);
          }
        };

        window.setTimeout(initWidget, 200);
      } catch {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void init();
    return () => {
      cancelled = true;
    };
  }, [isInView]);

  return (
    <section ref={setInViewRef} className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Get Your Craig Ranch Home&apos;s Value
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover what your Craig Ranch property is worth with our advanced
            evaluation tools
          </p>
        </div>

        <div className='max-w-2xl mx-auto'>
          <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg'>
            {isLoading && (
              <div className='space-y-4 animate-pulse'>
                <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto'></div>
                <div className='h-4 bg-gray-200 rounded w-1/2 mx-auto'></div>
                <div className='h-64 bg-gray-200 rounded mt-6'></div>
                <div className='h-12 bg-gray-200 rounded w-1/3 mx-auto'></div>
              </div>
            )}
            <div
              id='homebot_homeowner'
              style={{
                display: isLoading ? 'none' : 'block',
                minHeight: '400px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
