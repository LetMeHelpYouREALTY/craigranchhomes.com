'use client';

import { useEffect } from 'react';

type DeferredAnalyticsProps = {
  gaMeasurementId?: string;
  gtmId?: string;
  facebookPixelId?: string;
};

const INTERACTION_EVENTS = [
  'pointerdown',
  'keydown',
  'scroll',
  'touchstart',
] as const;

/**
 * Load marketing tags after first user interaction or a delayed fallback.
 * Avoids lazyOnload scripts competing with LCP/TBT during PageSpeed lab.
 */
export default function DeferredAnalytics({
  gaMeasurementId,
  gtmId,
  facebookPixelId,
}: DeferredAnalyticsProps) {
  useEffect(() => {
    let loaded = false;
    let timeoutId: number | undefined;

    const loadGa = () => {
      if (!gaMeasurementId || document.getElementById('ga-gtag')) {
        return;
      }

      const w = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag(...args: unknown[]) {
        w.dataLayer?.push(args);
      };
      w.gtag('js', new Date());
      w.gtag('config', gaMeasurementId);

      const script = document.createElement('script');
      script.id = 'ga-gtag';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        gaMeasurementId
      )}`;
      document.head.appendChild(script);
    };

    const loadGtm = () => {
      if (!gtmId || document.getElementById('gtm-script')) {
        return;
      }

      const w = window as Window & { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        'gtm.start': Date.now(),
        event: 'gtm.js',
      });

      const script = document.createElement('script');
      script.id = 'gtm-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
        gtmId
      )}`;
      document.head.appendChild(script);
    };

    const loadFacebook = () => {
      if (!facebookPixelId || document.getElementById('fb-pixel')) {
        return;
      }

      type Fbq = ((...args: unknown[]) => void) & {
        callMethod?: (...args: unknown[]) => void;
        queue: unknown[];
        push: (...args: unknown[]) => void;
        loaded: boolean;
        version: string;
      };

      const w = window as Window & { fbq?: Fbq; _fbq?: Fbq };
      if (w.fbq) {
        return;
      }

      const fbq = ((...args: unknown[]) => {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue.push(args);
        }
      }) as Fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      w.fbq = fbq;
      w._fbq = fbq;

      const script = document.createElement('script');
      script.id = 'fb-pixel';
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      fbq('init', facebookPixelId);
      fbq('track', 'PageView');
    };

    const loadAll = () => {
      if (loaded) {
        return;
      }
      loaded = true;
      cleanup();
      loadGa();
      loadGtm();
      loadFacebook();
    };

    const cleanup = () => {
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, loadAll, true);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };

    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, loadAll, {
        once: true,
        passive: true,
        capture: true,
      });
    }

    // Fallback so analytics still fires without interaction (after lab window).
    timeoutId = window.setTimeout(loadAll, 8000);

    return cleanup;
  }, [facebookPixelId, gaMeasurementId, gtmId]);

  return null;
}
