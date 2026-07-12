import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig, getCanonicalBaseUrl } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SchemaScript from "@/components/SchemaScript";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  // Self-referencing base URL so relative canonical/OG paths resolve to whichever
  // domain in the network actually served the request (heyberkshire.com or a
  // neighborhood-specific site) rather than always resolving to one host.
  const baseUrl = getCanonicalBaseUrl(domain);

  return {
    metadataBase: new URL(baseUrl),
    title: `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      url: baseUrl,
      siteName:
        "Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // Add this in Vercel/host env vars once the property is added in Google Search
    // Console (Settings > Ownership verification > HTML tag > copy just the content value).
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Site-wide LocalBusiness/RealEstateAgent + WebSite structured data, rendered on every
  // page so Google Search Console and Rich Results can resolve the business entity
  // consistently across the whole domain network (NAP always matches the GBP profile).
  const siteSchema = combineSchemas(
    generateRealEstateAgentSchema(),
    generateWebSiteSchema(),
  );

  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <SchemaScript schema={siteSchema} id="site-schema" />
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
