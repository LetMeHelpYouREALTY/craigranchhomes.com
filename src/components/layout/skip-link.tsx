'use client';

import { useEffect, useRef } from 'react';
import { scheduleScrollToId } from '@/lib/scroll-into-view';

type SkipLinkProps = {
  href: string;
  children: string;
};

export default function SkipLink({ href, children }: SkipLinkProps) {
  const cancelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => cancelRef.current?.();
  }, []);

  return (
    <a
      href={href}
      className='inline-block mt-6 font-semibold text-white underline underline-offset-4'
      onClick={(event) => {
        const id = href.replace(/^#/, '');
        if (!document.getElementById(id)) return;
        event.preventDefault();
        window.history.pushState(null, '', href);
        cancelRef.current?.();
        cancelRef.current = scheduleScrollToId(id);
      }}
    >
      {children}
    </a>
  );
}
