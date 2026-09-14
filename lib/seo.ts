import type { Metadata } from "next";
import { SITE_URL, nap } from "./contact";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  openGraph,
  twitter,
  robots,
  ...rest
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
} & Omit<Metadata, "title" | "description" | "keywords" | "alternates">): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: nap.brokerage,
      images: [{ url: absoluteUrl("/Image/hero_bg_1.jpg"), alt: title }],
      ...openGraph,
      title: openGraph && "title" in openGraph && openGraph.title ? openGraph.title : title,
      description:
        openGraph && "description" in openGraph && openGraph.description
          ? openGraph.description
          : description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      images: [absoluteUrl("/Image/hero_bg_1.jpg")],
      ...twitter,
      title: title,
      description,
    },
    ...rest,
  };
}
