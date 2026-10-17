import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-nap';

/**
 * Canonical sitemap for GSC / AI crawlers.
 * Keep in sync with indexable App Router page routes.
 * /search is noindex — omit it.
 * Uses MetadataRoute.Sitemap url fields (not loc).
 */
type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]['changeFrequency']
  >;
  priority: number;
};

const SITEMAP_ENTRIES: readonly SitemapEntry[] = [
  // Core conversion
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/homes', changeFrequency: 'daily', priority: 0.9 },
  { path: '/buy-craig-ranch-homes', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/sell-craig-ranch', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/craig-ranch-realtor', changeFrequency: 'weekly', priority: 0.9 },
  {
    path: '/home-valuation-craig-ranch',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  { path: '/contact', changeFrequency: 'weekly', priority: 0.85 },

  // Area / community
  { path: '/neighborhood', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/neighborhoods', changeFrequency: 'weekly', priority: 0.9 },
  {
    path: '/craig-ranch-89031-real-estate',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  { path: '/community', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/amenities', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/directions', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/find-address', changeFrequency: 'monthly', priority: 0.7 },

  // Market
  { path: '/market-data', changeFrequency: 'daily', priority: 0.8 },
  { path: '/market-insights', changeFrequency: 'daily', priority: 0.8 },
  {
    path: '/craig-ranch-market-report',
    changeFrequency: 'daily',
    priority: 0.8,
  },

  // Buyer / investor / relocate intents
  {
    path: '/first-time-home-buyers-craig-ranch-89031',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/luxury-homes-craig-ranch-north-las-vegas',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/craig-ranch-investment-properties',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/relocate-to-craig-ranch-north-las-vegas',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/nellis-afb-relocation-craig-ranch',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/new-construction-craig-ranch',
    changeFrequency: 'weekly',
    priority: 0.75,
  },

  // School / amenity landings
  {
    path: '/homes-near-eva-g-simmons-elementary',
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    path: '/homes-near-findlay-middle-school',
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    path: '/homes-near-mojave-high-school',
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  { path: '/craig-ranch-schools', changeFrequency: 'monthly', priority: 0.7 },
  {
    path: '/craig-ranch-regional-park',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  { path: '/craig-ranch-hoa', changeFrequency: 'monthly', priority: 0.7 },
] as const;

/**
 * Last content change for each indexable URL. Do not stamp every URL with
 * one date. Update a path when its visible copy or answer block changes.
 * Dates come from the page's git history, plus 2026-10-17 where this pass
 * moved the direct answer above the office listings.
 */
const LAST_MODIFIED: Record<string, string> = {
  '': '2026-10-17',
  '/homes': '2026-10-17',
  '/buy-craig-ranch-homes': '2026-10-17',
  '/sell-craig-ranch': '2026-10-17',
  '/craig-ranch-realtor': '2026-10-17',
  '/home-valuation-craig-ranch': '2026-10-17',
  '/contact': '2026-10-17',
  '/neighborhood': '2026-10-17',
  '/neighborhoods': '2026-10-17',
  '/craig-ranch-89031-real-estate': '2026-10-17',
  '/community': '2026-10-17',
  '/amenities': '2026-10-14',
  '/directions': '2026-10-17',
  '/find-address': '2026-10-17',
  '/market-data': '2026-10-17',
  '/market-insights': '2026-10-17',
  '/craig-ranch-market-report': '2026-10-17',
  '/first-time-home-buyers-craig-ranch-89031': '2026-10-17',
  '/luxury-homes-craig-ranch-north-las-vegas': '2026-10-17',
  '/craig-ranch-investment-properties': '2026-10-17',
  '/relocate-to-craig-ranch-north-las-vegas': '2026-10-17',
  '/nellis-afb-relocation-craig-ranch': '2026-10-17',
  '/new-construction-craig-ranch': '2026-10-17',
  '/homes-near-eva-g-simmons-elementary': '2026-10-17',
  '/homes-near-findlay-middle-school': '2026-10-17',
  '/homes-near-mojave-high-school': '2026-10-17',
  '/craig-ranch-schools': '2026-10-17',
  '/craig-ranch-regional-park': '2026-10-17',
  '/craig-ranch-hoa': '2026-10-17',
};

function lastModifiedFor(path: string): Date {
  const value = LAST_MODIFIED[path];
  if (!value) {
    throw new Error(`Missing sitemap lastmod for ${path || '/'}`);
  }
  return new Date(`${value}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: lastModifiedFor(path),
    changeFrequency,
    priority,
  }));
}

// Revalidate once per day (safe for a mostly-static marketing site).
export const revalidate = 86400;
