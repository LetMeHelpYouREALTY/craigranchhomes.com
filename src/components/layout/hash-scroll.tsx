'use client';

import { useEffect } from 'react';
import { scheduleScrollToId } from '@/lib/scroll-into-view';

function hashId(): string {
  return window.location.hash.replace(/^#/, '');
}

/** Keep hash targets in view after the office listings band finishes loading. */
export default function HashScroll() {
  useEffect(() => {
    let cancel = scheduleScrollToId(hashId());
    const onHashChange = () => {
      cancel();
      cancel = scheduleScrollToId(hashId());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => {
      cancel();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return null;
}
