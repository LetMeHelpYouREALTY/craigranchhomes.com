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

export default function sitemap(): MetadataRoute.Sitemap {
  // Bump when NAP or major page set changes so crawlers re-fetch.
  const lastModified = new Date('2026-08-02T00:00:00.000Z');

  return SITEMAP_ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}

// Revalidate once per day (safe for a mostly-static marketing site).
export const revalidate = 86400;
