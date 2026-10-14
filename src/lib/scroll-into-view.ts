const HASH_SCROLL_RETRY_MS = [600, 2000];
const LAYOUT_WATCH_MS = 5000;

export function scrollElementIntoView(element: HTMLElement | null): void {
  if (!element || typeof window === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({
    behavior: reduce ? 'instant' : 'smooth',
    block: 'nearest',
  });
}

function scrollMargin(target: HTMLElement): number {
  return Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
}

/** Instant jump. CSS `scroll-behavior: smooth` would otherwise restart on every retry. */
export function scrollToElementId(id: string): void {
  if (!id || typeof document === 'undefined') return;
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - scrollMargin(target);
  window.scrollTo({ top, behavior: 'instant' });
}

/**
 * Land a hash target under the sticky nav, then again after the office
 * listings widget finishes growing. Wheel and touch cancel the correction
 * so a person can scroll back to the listings.
 */
export function scheduleScrollToId(id: string): () => void {
  if (!id || typeof window === 'undefined') return () => undefined;
  scrollToElementId(id);
  const timers = HASH_SCROLL_RETRY_MS.map((delay) =>
    window.setTimeout(() => scrollToElementId(id), delay)
  );

  let observer: ResizeObserver | undefined;
  const band = document.getElementById('office-listings');
  if (band && typeof ResizeObserver !== 'undefined') {
    observer = new ResizeObserver(() => {
      const target = document.getElementById(id);
      if (!target) return;
      // A route map owns the scroll once it is on the page.
      if (target.querySelector('iframe')) return;
      const top = target.getBoundingClientRect().top;
      if (top > scrollMargin(target) + 80) scrollToElementId(id);
    });
    observer.observe(band);
  }

  const stopTimer = window.setTimeout(() => observer?.disconnect(), LAYOUT_WATCH_MS);
  const stopOnIntent = () => observer?.disconnect();
  window.addEventListener('wheel', stopOnIntent, { passive: true, once: true });
  window.addEventListener('touchmove', stopOnIntent, { passive: true, once: true });

  return () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    window.clearTimeout(stopTimer);
    observer?.disconnect();
    window.removeEventListener('wheel', stopOnIntent);
    window.removeEventListener('touchmove', stopOnIntent);
  };
}
