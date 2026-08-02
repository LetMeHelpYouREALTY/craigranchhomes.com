import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
  ).replace(/\/$/, '');

  const paths: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
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
    { path: '/neighborhood', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/neighborhoods', changeFrequency: 'weekly', priority: 0.9 },
    {
      path: '/craig-ranch-89031-real-estate',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    { path: '/community', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/market-data', changeFrequency: 'daily', priority: 0.8 },
    { path: '/market-insights', changeFrequency: 'daily', priority: 0.8 },
    {
      path: '/craig-ranch-market-report',
      changeFrequency: 'daily',
      priority: 0.8,
    },
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
    {
      path: '/new-construction-craig-ranch',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    // /search stays noindex; omit from sitemap for cleaner GSC coverage
  ];

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${baseUrl}${path}` : baseUrl,
    changeFrequency,
    priority,
  }));
}

// Revalidate once per day (safe for a mostly-static marketing site).
export const revalidate = 86400;
