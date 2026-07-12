import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SchemaScript from "@/components/SchemaScript";
import {
  generateOrganizationSchema,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const DEFAULT_OG_IMAGE = {
  url: "/Image/hero_bg_1.jpg",
  width: 2028,
  height: 1421,
  alt: "Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties",
};

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  const canonicalHost = config.domain !== "default" ? config.domain : "heyberkshire.com";
  const canonicalUrl = `https://${canonicalHost}`;
  const title = `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`;

  return {
    metadataBase: new URL(canonicalUrl),
    // NOTE: intentionally a plain string (not a { template } object) — every
    // subpage already sets its own full, brand-inclusive title. A template
    // here would double up the brand suffix on all 45+ subpages.
    title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "Dr. Jan Duffy" }],
    creator: "Dr. Jan Duffy",
    publisher: "Berkshire Hathaway HomeServices Nevada Properties",
    // Self-referencing canonical for the homepage on whichever domain served the request.
    // Subpages set their own absolute canonical (see per-page metadata) so satellite
    // domains don't create duplicate-content copies of shared subpages.
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    verification: {
      // Populate via GOOGLE_SITE_VERIFICATION env when available in Search Console.
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e40af",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Site-wide entity graph: one canonical Organization/RealEstateAgent + WebSite
  // referenced (via @id) by every page's own schema, instead of every page
  // re-declaring a conflicting duplicate entity.
  const siteWideSchema = combineSchemas(
    generateOrganizationSchema(),
    generateRealEstateAgentSchema(),
    generateWebSiteSchema()
  );

  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <SchemaScript schema={siteWideSchema} id="sitewide-schema" />
        {/* RealScout web components — required for every <realscout-*> widget
            embedded across the site (search bar, office listings, etc.).
            Loaded once, globally, per RealScout + project integration rules. */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
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
