/**
 * Per-path heading stills. Filenames live under public/images/headings/ so
 * leftover/quote/process bands can keep the shared /images/hero and
 * /images/neighborhoods pool without colliding.
 *
 * 55+ campus pages use a shortened slug (55-plus-{campus}) so filenames
 * stay shorter than 55-plus-communities-{campus}.
 */

import { uniqueInteriors } from "./unique-interiors";

export type HeadingLevel = "h1" | "h2" | "h3";

export type HeadingStill = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Visible H1 copy used to generate each path's H1 still. */
export const pageH1s: Record<string, string> = {
  "/": "Craig Ranch Homes for Sale",
  "/about": "Meet Your Berkshire Hathaway HomeServices Agent",
  "/contact": "Contact Craig Ranch Homes",
  "/google-business": "Craig Ranch Homes",
  "/faq": "Frequently Asked Questions",
  "/services": "Las Vegas Real Estate Services",
  "/security-policy": "Security Policy",
  "/listings": "Las Vegas Homes for Sale",
  "/home-valuation": "What's Your Las Vegas Home Worth?",
  "/new-construction":
    "Berkshire Hathaway HomeServices New Construction Las Vegas",
  "/buyers": "Buy Your Las Vegas Home with Confidence",
  "/buyers/first-time-buyers": "Your First Home in Las Vegas Starts Here",
  "/buyers/california-relocator":
    "Relocating from California? Welcome Home to Las Vegas",
  "/buyers/luxury-homes-las-vegas": "Private Luxury Home Search in Las Vegas",
  "/sellers": "Sell Your Las Vegas Home for Top Dollar",
  "/sellers/move-up": "Ready for Your Next Chapter?",
  "/sellers/downsizing": "Simplify. Downsize. Enjoy.",
  "/sellers/relocation": "New Opportunity? We Handle Your Sale.",
  "/sellers/divorce-probate": "Difficult Situations, Expert Guidance",
  "/relocation": "Relocating to Las Vegas?",
  "/investment-properties": "Las Vegas Investment Properties",
  "/luxury-homes": "List or Buy Las Vegas Luxury Homes With BHHS",
  "/why-berkshire-hathaway": "Why Choose Berkshire Hathaway HomeServices?",
  "/market-insights": "Las Vegas Market Insights",
  "/market-update": "Berkshire Hathaway HomeServices Las Vegas Market Update",
  "/market-report": "Las Vegas Real Estate Market Report",
  "/neighborhoods": "Las Vegas & Henderson Neighborhoods",
  "/neighborhoods/summerlin": "Berkshire Hathaway HomeServices Summerlin",
  "/neighborhoods/the-ridges": "Berkshire Hathaway HomeServices The Ridges",
  "/neighborhoods/southern-highlands":
    "Berkshire Hathaway HomeServices Southern Highlands",
  "/neighborhoods/skye-canyon": "Berkshire Hathaway HomeServices Skye Canyon",
  "/neighborhoods/centennial-hills":
    "Berkshire Hathaway HomeServices Centennial Hills",
  "/neighborhoods/green-valley": "Berkshire Hathaway HomeServices Green Valley",
  "/neighborhoods/inspirada": "Berkshire Hathaway HomeServices Inspirada",
  "/neighborhoods/henderson": "Berkshire Hathaway HomeServices Henderson",
  "/neighborhoods/mountains-edge":
    "Berkshire Hathaway HomeServices Mountains Edge",
  "/neighborhoods/north-las-vegas":
    "Berkshire Hathaway HomeServices North Las Vegas",
  "/55-plus-communities": "Find Your Perfect 55+ Community in Las Vegas",
  "/55-plus-communities/sun-city-summerlin": "Sun City Summerlin",
  "/55-plus-communities/sun-city-anthem": "Sun City Anthem",
  "/55-plus-communities/trilogy-summerlin": "Trilogy at Summerlin",
  "/55-plus-communities/heritage-stonebridge": "Heritage at Stonebridge",
  "/55-plus-communities/solera-anthem": "Solera at Anthem",
  "/55-plus-communities/sun-city-aliante": "Sun City Aliante",
  "/55-plus-communities/del-webb-lake-las-vegas": "Del Webb at Lake Las Vegas",
};

export function headingStillSlug(path: string): string {
  if (path === "/" || path === "") return "home";
  const trimmed = path.replace(/^\//, "").replace(/\/$/, "");
  if (trimmed.startsWith("55-plus-communities/")) {
    return `55-plus-${trimmed.slice("55-plus-communities/".length)}`;
  }
  return trimmed.replace(/\//g, "-");
}

export function headingStillSrc(path: string, level: HeadingLevel): string {
  return `/images/headings/${headingStillSlug(path)}-${level}.jpg`;
}

function interiorKey(path: string): string {
  if (path === "" || path === "/") return "/";
  return path.replace(/\/$/, "") || "/";
}

/** Dedicated heading still, or undefined when the path has no matching copy. */
export function uniqueInteriorHeadingStill(
  path: string,
  level: HeadingLevel,
): HeadingStill | undefined {
  const key = interiorKey(path);
  const heading =
    level === "h1"
      ? pageH1s[key]
      : uniqueInteriors[key]?.[level === "h2" ? "h2" : "h3"];
  if (!heading) return undefined;
  return {
    src: headingStillSrc(key, level),
    alt: `${heading} — Craig Ranch Homes, 851 W Lone Mountain Rd, Suite 103, North Las Vegas`,
    width: 1920,
    height: 1080,
  };
}
