const REALSCOUT_SCRIPT_ID = 'realscout-script';
const REALSCOUT_SCRIPT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js';

function isRealScoutDefined(): boolean {
  return (
    typeof customElements !== 'undefined' &&
    Boolean(
      customElements.get('realscout-office-listings') ||
        customElements.get('realscout-property-search')
    )
  );
}

/**
 * Ensure the RealScout web-components script is present.
 * Safe to call from multiple widgets — injects at most once.
 */
export function ensureRealScoutScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (isRealScoutDefined()) {
    return Promise.resolve();
  }

  const existing = document.getElementById(
    REALSCOUT_SCRIPT_ID
  ) as HTMLScriptElement | null;

  if (existing) {
    return new Promise((resolve) => {
      if (isRealScoutDefined()) {
        resolve();
        return;
      }

      const finish = () => resolve();
      existing.addEventListener('load', finish, { once: true });
      existing.addEventListener('error', finish, { once: true });

      const started = Date.now();
      const timer = window.setInterval(() => {
        if (isRealScoutDefined() || Date.now() - started > 10000) {
          window.clearInterval(timer);
          finish();
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

export async function waitForRealScoutElement(
  tagName: 'realscout-office-listings' | 'realscout-property-search',
  timeoutMs = 10000
): Promise<boolean> {
  await ensureRealScoutScript();

  if (typeof customElements === 'undefined') {
    return false;
  }

  if (customElements.get(tagName)) {
    return true;
  }

  try {
    await Promise.race([
      customElements.whenDefined(tagName),
      new Promise((_, reject) => {
        window.setTimeout(() => reject(new Error('timeout')), timeoutMs);
      }),
    ]);
    return true;
  } catch {
    return Boolean(customElements.get(tagName));
  }
}
