import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getCanonicalBaseUrl } from "@/lib/domain-config";

export default function robots(): MetadataRoute.Robots {
  // Mirror the domain the request came in on so every site in the network points
  // Google Search Console at its own sitemap instead of a different property's.
  const hostname = headers().get("host") || "";
  const baseUrl = getCanonicalBaseUrl(hostname);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/monitoring/"],
      },
      {
        // Google's AI training/SGE crawler - explicitly allowed for AI Overviews visibility.
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/Image/", "/_next/image"],
      },
      {
        userAgent: "AhrefsBot",
        crawlDelay: 10,
      },
      {
        userAgent: "SemrushBot",
        crawlDelay: 10,
      },
      {
        userAgent: "Bingbot",
        crawlDelay: 5,
      },
      // Block known AI scraping bots that don't drive search visibility.
      {
        userAgent: ["GPTBot", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
