import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  headingStillSrc,
  uniqueInteriorHeadingStill,
} from "@/lib/heading-stills";
import { h2PhotoForPath, h3PhotoForPath, photoForPath } from "@/lib/media";
import { uniqueInteriors } from "@/lib/unique-interiors";

describe("heading photos", () => {
  const paths = Object.keys(uniqueInteriors);

  it("keeps H1, H2, and H3 stills distinct on every interior path", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const h1 = photoForPath(path).src;
      const h2 = h2PhotoForPath(path).src;
      const h3 = h3PhotoForPath(path).src;
      if (h1 === h2 || h1 === h3 || h2 === h3) {
        collisions.push(`${path}: H1=${h1} H2=${h2} H3=${h3}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("maps UniqueInterior H2/H3 to dedicated heading stills from that page's copy", () => {
    for (const path of paths) {
      expect(h2PhotoForPath(path).src).toBe(headingStillSrc(path, "h2"));
      expect(h3PhotoForPath(path).src).toBe(headingStillSrc(path, "h3"));
      expect(h2PhotoForPath(path).alt).toContain(uniqueInteriors[path].h2);
      expect(h3PhotoForPath(path).alt).toContain(uniqueInteriors[path].h3);
      expect(uniqueInteriorHeadingStill(path, "h2")?.src).toBe(
        headingStillSrc(path, "h2")
      );
    }
  });

  it("ships a git-backup jpg for every UniqueInterior H2 and H3 still", () => {
    const missing: string[] = [];
    for (const path of paths) {
      for (const level of ["h2", "h3"] as const) {
        const src = headingStillSrc(path, level);
        const file = join(process.cwd(), "public", src.replace(/^\//, ""));
        if (!existsSync(file)) missing.push(src);
      }
    }
    expect(missing).toEqual([]);
  });
});
