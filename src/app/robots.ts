import type { MetadataRoute } from 'next';

/**
 * Always point crawlers at the canonical production host.
 * Do not derive sitemap from request Host (preview/deploy URLs).
 *
 * Citation and assistant bots are allowed explicitly. A matching
 * user-agent group replaces the `*` group, so each bot repeats the
 * same /api and /search exclusions.
 *
 * Tokens checked against Cloudflare's AI crawler reference (Apr 23, 2026)
 * and Anthropic's Claude-SearchBot / Claude-User / ClaudeBot split.
 */
const PRIVATE_PATHS = ['/api/', '/search'];

const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Google-CloudVertexBot',
  'Applebot-Extended',
  'Amazonbot',
  'DuckAssistBot',
  'meta-externalagent',
  'meta-externalfetcher',
  'cohere-ai',
  'CCBot',
  'Bytespider',
  'Diffbot',
  'YouBot',
] as const;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
  ).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: PRIVATE_PATHS,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: PRIVATE_PATHS,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl.replace(/^https?:\/\//, ''),
  };
}
