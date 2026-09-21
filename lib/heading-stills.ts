/**
 * Per-path UniqueInterior H2/H3 stills. Filenames live under
 * public/images/headings/ so leftover/quote/process bands can keep the
 * shared /images/hero and /images/neighborhoods pool without colliding.
 *
 * 55+ campus pages use a shortened slug (55-plus-{campus}) so filenames
 * stay shorter than 55-plus-communities-{campus}.
 */

import { uniqueInteriors } from "./unique-interiors";

export type HeadingStill = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function headingStillSlug(path: string): string {
  if (path === "/" || path === "") return "home";
  const trimmed = path.replace(/^\//, "").replace(/\/$/, "");
  if (trimmed.startsWith("55-plus-communities/")) {
    return `55-plus-${trimmed.slice("55-plus-communities/".length)}`;
  }
  return trimmed.replace(/\//g, "-");
}

export function headingStillSrc(path: string, level: "h2" | "h3"): string {
  return `/images/headings/${headingStillSlug(path)}-${level}.jpg`;
}

function interiorKey(path: string): string {
  if (path === "" || path === "/") return "/";
  return path.replace(/\/$/, "") || "/";
}

/** Dedicated UniqueInterior still, or undefined when the path has no interior copy. */
export function uniqueInteriorHeadingStill(
  path: string,
  level: "h2" | "h3"
): HeadingStill | undefined {
  const key = interiorKey(path);
  const copy = uniqueInteriors[key];
  if (!copy) return undefined;
  const heading = level === "h2" ? copy.h2 : copy.h3;
  return {
    src: headingStillSrc(key, level),
    alt: `${heading} — Craig Ranch Homes, 851 W Lone Mountain Rd, Suite 103, North Las Vegas`,
    width: 1920,
    height: 1080,
  };
}
