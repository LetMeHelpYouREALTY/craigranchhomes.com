const REALSCOUT_SCRIPT_ID = 'realscout-script';
const REALSCOUT_SCRIPT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js';

/**
 * Lazily inject the RealScout web-components script once.
 * Call from widget components when they approach the viewport.
 */
export function ensureRealScoutScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (
    typeof customElements !== 'undefined' &&
    (customElements.get('realscout-office-listings') ||
      customElements.get('realscout-property-search'))
  ) {
    return Promise.resolve();
  }

  const existing = document.getElementById(
    REALSCOUT_SCRIPT_ID
  ) as HTMLScriptElement | null;

  if (existing) {
    return new Promise((resolve) => {
      const done = () => resolve();
      if (
        customElements.get('realscout-office-listings') ||
        customElements.get('realscout-property-search')
      ) {
        done();
        return;
      }
      existing.addEventListener('load', done, { once: true });
      const started = Date.now();
      const timer = window.setInterval(() => {
        if (
          customElements.get('realscout-office-listings') ||
          customElements.get('realscout-property-search') ||
          Date.now() - started > 8000
        ) {
          window.clearInterval(timer);
          done();
        }
      }, 100);
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = REALSCOUT_SCRIPT_ID;
    script.src = REALSCOUT_SCRIPT_SRC;
    script.type = 'module';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load RealScout script'));
    document.body.appendChild(script);
  });
}
