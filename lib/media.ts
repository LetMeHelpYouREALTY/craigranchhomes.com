/**
 * Cloudflare-first media URLs with git-backed public/ files as fallback.
 * Production: set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true and
 * NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH (Images) or NEXT_PUBLIC_MEDIA_CDN
 * (R2 custom domain). Git copies live in /public/images/.
 *
 * Per Cloudflare Images docs (hosted images, 2026): delivery URL is
 * https://imagedelivery.net/{account_hash}/{image_id}/{variant}.
 * Custom IDs preserve the git path so the same file is the backup.
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
  officeExterior: {
    src: "/images/hero/west-las-vegas-office-exterior.jpg",
    alt: "West Las Vegas office building near W Lake Mead Blvd with visitor parking and mountain backdrop",
    width: 1920,
    height: 1080,
  },
  consultation: {
    src: "/images/hero/consultation-office.jpg",
    alt: "Real estate consultation office with mountain views in Las Vegas",
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
  summerlinTrail: {
    src: "/images/neighborhoods/red-rock-hiking-trail.jpg",
    alt: "Red Rock Canyon trailhead and sandstone cliffs near Summerlin, Las Vegas",
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
  inspirada: {
    src: "/images/neighborhoods/inspirada-central-park.jpg",
    alt: "Inspirada Henderson central park, walking paths, and surrounding homes",
    width: 1920,
    height: 1080,
  },
  southernHighlands: {
    src: "/images/neighborhoods/southern-highlands-golf.jpg",
    alt: "Southern Highlands Las Vegas golf fairway, clubhouse, and ridge-top homes",
    width: 1920,
    height: 1080,
  },
  mountainsEdge: {
    src: "/images/neighborhoods/mountains-edge-trails.jpg",
    alt: "Mountains Edge southwest Las Vegas desert trailhead and tile-roof homes",
    width: 1920,
    height: 1080,
  },
  aliante: {
    src: "/images/neighborhoods/aliante-desert-hills.jpg",
    alt: "Aliante North Las Vegas homes and recreation campus with desert hills",
    width: 1920,
    height: 1080,
  },
  lakeLasVegas: {
    src: "/images/neighborhoods/lake-las-vegas-shore.jpg",
    alt: "Lake Las Vegas shoreline, golf, and homes in Henderson, Nevada",
    width: 1920,
    height: 1080,
  },
  fiftyFive: {
    src: "/images/properties/sun-city-golf-rec.jpg",
    alt: "55-plus golf and recreation campus in the Las Vegas Valley",
    width: 1920,
    height: 1080,
  },
  fiftyFiveClubhouse: {
    src: "/images/properties/trilogy-clubhouse-pool.jpg",
    alt: "Resort-style clubhouse pool terrace at a Las Vegas 55-plus community",
    width: 1920,
    height: 1080,
  },
  fiftyFiveFitness: {
    src: "/images/properties/amenity-fitness-clubhouse.jpg",
    alt: "Fitness clubhouse and indoor recreation at a Las Vegas 55-plus community",
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
  luxuryPool: {
    src: "/images/properties/luxury-pool-terrace.jpg",
    alt: "Luxury Las Vegas estate infinity pool and terrace overlooking the valley",
    width: 1920,
    height: 1080,
  },
  investment: {
    src: "/images/properties/downtown-las-vegas-investment.jpg",
    alt: "Downtown Las Vegas mid-rise rentals and commercial strip at golden hour",
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
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) return photos.lakeLasVegas;
  if (path.startsWith("/55-plus-communities/sun-city-aliante")) return photos.aliante;
  if (path.startsWith("/55-plus-communities/trilogy-summerlin")) return photos.fiftyFiveClubhouse;
  if (path.startsWith("/55-plus")) return photos.fiftyFive;
  if (path.startsWith("/new-construction")) return photos.newConstruction;
  if (
    path.startsWith("/luxury") ||
    path.includes("luxury-homes") ||
    path.startsWith("/neighborhoods/the-ridges")
  ) {
    return photos.ridges;
  }
  if (path.startsWith("/neighborhoods/southern-highlands")) return photos.southernHighlands;
  if (path.startsWith("/buyers")) return photos.buyers;
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) return photos.sellers;
  if (path.startsWith("/investment")) return photos.investment;
  if (path.startsWith("/neighborhoods/summerlin")) return photos.summerlin;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.inspirada;
  if (path.startsWith("/neighborhoods/henderson")) return photos.henderson;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.centennial;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.aliante;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.mountainsEdge;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.skyeCanyon;
  if (path.startsWith("/faq") || path.startsWith("/services") || path.startsWith("/why-berkshire")) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods")) return photos.summerlin;
  if (path.startsWith("/listings") || path.startsWith("/relocation")) {
    return photos.homeHero;
  }
  return photos.homeHero;
}

/** H2 photos stay distinct from H1 so market/stats bands are not a duplicate hero. */
export function h2PhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/about")) return photos.office;
  if (path.startsWith("/contact") || path.startsWith("/google-business") || path.startsWith("/security-policy")) {
    return photos.officeExterior;
  }
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) return photos.consultation;
  if (path.startsWith("/buyers")) return photos.homeHero;
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) return photos.fiftyFiveClubhouse;
  if (path.startsWith("/55-plus")) return photos.fiftyFiveFitness;
  if (path.startsWith("/new-construction")) return photos.skyeCanyon;
  if (path.startsWith("/market") || path.startsWith("/neighborhoods")) return photos.market;
  if (path.startsWith("/investment")) return photos.market;
  if (path.startsWith("/luxury") || path.includes("luxury-homes")) return photos.luxuryPool;
  if (path.startsWith("/faq") || path.startsWith("/services") || path.startsWith("/why-berkshire")) {
    return photos.office;
  }
  if (path.startsWith("/relocation")) return photos.market;
  return photos.market;
}

/** H3 photos match amenities, trails, golf, or office details under the heading. */
export function h3PhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.summerlinTrail;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.inspirada;
  if (path.startsWith("/neighborhoods/henderson")) return photos.henderson;
  if (path.startsWith("/neighborhoods/the-ridges") || path.startsWith("/luxury") || path.includes("luxury-homes")) {
    return photos.luxuryPool;
  }
  if (path.startsWith("/neighborhoods/southern-highlands")) return photos.southernHighlands;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.mountainsEdge;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.centennial;
  if (path.startsWith("/neighborhoods/north-las-vegas") || path.startsWith("/55-plus-communities/sun-city-aliante")) {
    return photos.aliante;
  }
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.skyeCanyon;
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) return photos.lakeLasVegas;
  if (path.startsWith("/55-plus-communities/trilogy-summerlin")) return photos.fiftyFiveClubhouse;
  if (path.startsWith("/55-plus")) return photos.fiftyFiveFitness;
  if (path.startsWith("/investment")) return photos.investment;
  if (path.startsWith("/google-business") || path.startsWith("/contact") || path.startsWith("/about")) {
    return photos.officeExterior;
  }
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) return photos.sellers;
  if (path.startsWith("/buyers")) return photos.buyers;
  if (path.startsWith("/new-construction")) return photos.newConstruction;
  if (path.startsWith("/faq") || path.startsWith("/services") || path.startsWith("/why-berkshire")) {
    return photos.consultation;
  }
  return photos.consultation;
}
