import { describe, expect, it } from "vitest";
import { expertQuotes } from "@/lib/expert-quotes";
import { leftoverBands } from "@/lib/leftover-bands";
import {
  h2PhotoForPath,
  h3PhotoForPath,
  leftoverPhotoForPath,
  occupiedHeadingStills,
  photoForPath,
  processPhotoForPath,
  quotePhotoForPath,
} from "@/lib/media";
import { processSteps } from "@/lib/process-steps";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "safest",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "mccarran",
  "hidden gems",
  "white-glove",
  "white glove",
  "it's a lifestyle",
  "trusted brand",
  "premier",
  "like-minded",
  "peace of mind",
  "property crime",
];

describe("leftoverBands", () => {
  const entries = Object.entries(leftoverBands).flatMap(([path, slots]) =>
    slots.map((copy, slot) => ({ path, slot, copy }))
  );

  it("covers leftover slogan H2 chassis paths", () => {
    expect(Object.keys(leftoverBands).sort()).toEqual([
      "/55-plus-communities",
      "/55-plus-communities/sun-city-anthem",
      "/buyers/luxury-homes-las-vegas",
      "/google-business",
      "/listings",
      "/luxury-homes",
      "/new-construction",
      "/services",
      "/why-berkshire-hathaway",
    ]);
    expect(leftoverBands["/services"]).toHaveLength(2);
  });

  it("keeps every leftover H2 unique", () => {
    const headings = entries.map((entry) => entry.copy.h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H2s distinct from UniqueInterior, quotes, and process headings", () => {
    for (const { path, copy } of entries) {
      expect(copy.h2).not.toBe(uniqueInteriors[path].h2);
      expect(copy.h2).not.toBe(uniqueInteriors[path].h3);
      expect(copy.h2).not.toBe(expertQuotes[path].h2);
      if (processSteps[path]) {
        for (const step of processSteps[path]) {
          expect(copy.h2).not.toBe(step.h2);
        }
      }
    }
  });

  it("avoids Fair Housing proxies and slogan chassis", () => {
    const blob = JSON.stringify(leftoverBands).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps leftover stills distinct from other heading stills on that path", () => {
    const collisions: string[] = [];
    for (const { path, slot } of entries) {
      const leftover = leftoverPhotoForPath(path, slot).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        quotePhotoForPath(path).src,
      ];
      if (processSteps[path]) {
        for (let i = 0; i < processSteps[path].length; i += 1) {
          used.push(processPhotoForPath(path, i).src);
        }
      }
      for (let other = 0; other < slot; other += 1) {
        used.push(leftoverPhotoForPath(path, other).src);
      }
      if (used.includes(leftover)) {
        collisions.push(`${path}#${slot}: ${leftover}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("registers leftover stills in occupiedHeadingStills so quotes skip them", () => {
    for (const { path, slot } of entries) {
      expect(
        occupiedHeadingStills(path).has(leftoverPhotoForPath(path, slot).src)
      ).toBe(true);
      expect(quotePhotoForPath(path).src).not.toBe(
        leftoverPhotoForPath(path, slot).src
      );
    }
  });
});
