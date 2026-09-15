/**
 * Cloudflare-first media URLs with git-backed public/ files as fallback.
 * Production: set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true and
 * NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH (Images) or NEXT_PUBLIC_MEDIA_CDN
 * (R2 custom domain). Git copies live in /public/images/.
 */

export type SitePhoto = {
  /** Path under public/, used as the git backup and Cloudflare Images ID */
  src: string;
  alt: string;
  width: number;
  height: number;
};

const CF_ENABLED = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true";
const CF_HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH ?? "";
const MEDIA_CDN = (process.env.NEXT_PUBLIC_MEDIA_CDN ?? "").replace(/\/$/, "");

export function mediaUrl(src: string): string {
  const path = src.startsWith("/") ? src.slice(1) : src;
  if (MEDIA_CDN) {
    return `${MEDIA_CDN}/${path}`;
  }
  if (CF_ENABLED && CF_HASH) {
    return `https://imagedelivery.net/${CF_HASH}/${path}/public`;
  }
  return src.startsWith("/") ? src : `/${src}`;
}

export const photos = {
  homeHero: {
    src: "/images/hero/las-vegas-valley-homes.jpg",
    alt: "Las Vegas Valley homes with desert landscaping and mountain views",
    width: 1920,
    height: 1080,
  },
  office: {
    src: "/images/hero/office-lake-mead-blvd.jpg",
    alt: "Berkshire Hathaway HomeServices Nevada Properties office area near 9406 W Lake Mead Blvd, Las Vegas",
    width: 1920,
    height: 1080,
  },
  agent: {
    src: "/images/agent/dr-jan-duffy-headshot.jpg",
    alt: "Dr. Jan Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties",
    width: 1024,
    height: 1365,
  },
  market: {
    src: "/images/hero/las-vegas-market-skyline.jpg",
    alt: "Las Vegas valley skyline at sunrise used for market analysis pages",
    width: 1920,
    height: 1080,
  },
  summerlin: {
    src: "/images/neighborhoods/summerlin-red-rock.jpg",
    alt: "Summerlin homes with Red Rock Canyon sandstone cliffs in the background",
    width: 1920,
    height: 1080,
  },
  henderson: {
    src: "/images/neighborhoods/henderson-parks.jpg",
    alt: "Henderson park, trails, and tile-roof homes with mountain views",
    width: 1920,
    height: 1080,
  },
  greenValley: {
    src: "/images/neighborhoods/green-valley-mature-trees.jpg",
    alt: "Green Valley Henderson street with mature trees and golf-course landscaping",
    width: 1920,
    height: 1080,
  },
  ridges: {
    src: "/images/neighborhoods/the-ridges-estate.jpg",
    alt: "Luxury custom estate with pool and mountain views in The Ridges, Summerlin",
    width: 1920,
    height: 1080,
  },
  centennial: {
    src: "/images/neighborhoods/centennial-hills-mountains.jpg",
    alt: "Centennial Hills northwest Las Vegas homes with mountain backdrop",
    width: 1920,
    height: 1080,
  },
  skyeCanyon: {
    src: "/images/neighborhoods/skye-canyon-trails.jpg",
    alt: "Skye Canyon new construction and desert trail access in northwest Las Vegas",
    width: 1920,
    height: 1080,
  },
  fiftyFive: {
    src: "/images/properties/sun-city-golf-rec.jpg",
    alt: "55-plus golf and recreation campus in the Las Vegas Valley",
    width: 1920,
    height: 1080,
  },
  newConstruction: {
    src: "/images/properties/new-construction-street.jpg",
    alt: "New construction street of two-story Las Vegas homes under a clear sky",
    width: 1920,
    height: 1080,
  },
  buyers: {
    src: "/images/properties/buyers-keys-kitchen.jpg",
    alt: "House keys on a kitchen island in a Las Vegas home with mountain views",
    width: 1920,
    height: 1080,
  },
  sellers: {
    src: "/images/properties/sellers-staged-living.jpg",
    alt: "Staged Las Vegas living room prepared for listing photos",
    width: 1920,
    height: 1080,
  },
} as const satisfies Record<string, SitePhoto>;

export type PhotoKey = keyof typeof photos;

export function photoForPath(path: string): SitePhoto {
  if (path === "/" || path === "") return photos.homeHero;
  if (path.startsWith("/about")) return photos.agent;
  if (path.startsWith("/contact") || path.startsWith("/google-business") || path.startsWith("/security-policy")) {
    return photos.office;
  }
  if (path.startsWith("/market")) return photos.market;
  if (path.startsWith("/55-plus")) return photos.fiftyFive;
  if (path.startsWith("/new-construction")) return photos.newConstruction;
  if (path.startsWith("/luxury") || path.includes("luxury-homes") || path.startsWith("/neighborhoods/the-ridges") || path.startsWith("/neighborhoods/southern-highlands")) {
    return photos.ridges;
  }
  if (path.startsWith("/buyers")) return photos.buyers;
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) return photos.sellers;
  if (path.startsWith("/neighborhoods/summerlin")) return photos.summerlin;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/henderson") || path.startsWith("/neighborhoods/inspirada")) {
    return photos.henderson;
  }
  if (path.startsWith("/neighborhoods/centennial-hills") || path.startsWith("/neighborhoods/north-las-vegas") || path.startsWith("/neighborhoods/mountains-edge")) {
    return photos.centennial;
  }
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.skyeCanyon;
  if (path.startsWith("/neighborhoods")) return photos.summerlin;
  if (path.startsWith("/listings") || path.startsWith("/investment") || path.startsWith("/services") || path.startsWith("/why-berkshire") || path.startsWith("/faq") || path.startsWith("/relocation")) {
    return photos.homeHero;
  }
  return photos.homeHero;
}

export function h2PhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/about") || path.startsWith("/contact") || path.startsWith("/google-business")) {
    return photos.office;
  }
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) return photos.sellers;
  if (path.startsWith("/buyers")) return photos.buyers;
  if (path.startsWith("/55-plus")) return photos.fiftyFive;
  if (path.startsWith("/new-construction")) return photos.newConstruction;
  if (path.startsWith("/market")) return photos.market;
  return photoForPath(path);
}
