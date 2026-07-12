import { MetadataRoute } from "next";

const BASE_URL = "https://heyberkshire.com";

/**
 * robots.txt — single source of truth for crawler policy.
 *
 * IMPORTANT: Do not add a `public/robots.txt` file alongside this route.
 * Next.js serves static files from `public/` in preference to this
 * metadata route, which previously caused a stale `public/robots.txt`
 * (blocking GPTBot / CCBot / anthropic-ai / Claude-Web) to silently win
 * over this file in production — the opposite of the GEO/AEO goal of
 * being discoverable and citable by AI answer engines.
 *
 * 2026 GEO/AEO guidance: explicitly allow the major AI answer-engine and
 * assistant crawlers (ChatGPT/OpenAI, Perplexity, Anthropic/Claude,
 * Google AI Overviews, Applebot for Apple Intelligence, Meta AI, Common
 * Crawl which many LLMs train/ground on) so this business can be cited
 * in AI-generated answers, in addition to standard search engines.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/monitoring/"],
      },
      // Slow down aggressive SEO-tool crawlers without blocking them.
      { userAgent: "AhrefsBot", allow: "/", crawlDelay: 10 },
      { userAgent: "SemrushBot", allow: "/", crawlDelay: 10 },
      { userAgent: "Bingbot", allow: "/", crawlDelay: 5 },
      // Google AI Overviews / SGE.
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot-Image", allow: ["/images/", "/Image/", "/_next/image"] },
      // OpenAI / ChatGPT.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic / Claude.
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      // Perplexity.
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Apple Intelligence / Siri.
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Meta AI.
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      // Common Crawl (widely used to ground/train LLMs).
      { userAgent: "CCBot", allow: "/" },
      // Social share unfurling bots.
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "Pinterestbot", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
