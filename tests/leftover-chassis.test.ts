import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const pages: { file: string; needles: string[]; banned: string[] }[] = [
  {
    file: "app/55-plus-communities/sun-city-anthem/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/sun-city-anthem" />',
    ],
    banned: [
      "Henderson's Premier 55+ Community",
      "Safest Large City",
      "Property Crime",
      "Sun City lifestyle",
      ">About Sun City Anthem<",
    ],
  },
  {
    file: "app/55-plus-communities/page.tsx",
    needles: ['<LeftoverBand path="/55-plus-communities" />'],
    banned: [
      ">Why Active Adults Choose Las Vegas<",
      "like-minded",
      "peace of mind",
      "Summerlin lifestyle",
    ],
  },
  {
    file: "app/buyers/luxury-homes-las-vegas/page.tsx",
    needles: ['<LeftoverBand path="/buyers/luxury-homes-las-vegas" />'],
    banned: [">Premier Luxury Communities<", "Celebrity neighborhood"],
  },
  {
    file: "app/luxury-homes/page.tsx",
    needles: ['<LeftoverBand path="/luxury-homes" />'],
    banned: [
      ">Luxury Home Marketing Services<",
      ">Luxury Buyer & Seller Services<",
    ],
  },
  {
    file: "app/listings/page.tsx",
    needles: ['<LeftoverBand path="/listings" />'],
    banned: [
      ">Las Vegas Neighborhoods & Communities<",
      "unique lifestyle",
    ],
  },
  {
    file: "app/why-berkshire-hathaway/page.tsx",
    needles: ['<LeftoverBand path="/why-berkshire-hathaway" />'],
    banned: [">Your Local BHHS Expert in Las Vegas<"],
  },
  {
    file: "app/services/page.tsx",
    needles: [
      '<LeftoverBand path="/services" />',
      '<LeftoverBand path="/services" slot={1} />',
    ],
    banned: [
      ">Core Real Estate Services<",
      ">Specialized Real Estate Services<",
    ],
  },
  {
    file: "app/new-construction/page.tsx",
    needles: ['<LeftoverBand path="/new-construction" />'],
    banned: ["Premier locations"],
  },
  {
    file: "app/google-business/page.tsx",
    needles: ['<LeftoverBand path="/google-business" />'],
    banned: [">Real Estate Services<", ">Service Areas<"],
  },
];

describe("leftover chassis replacements", () => {
  it("replaces leftover slogan H2 interiors", () => {
    for (const page of pages) {
      const src = readFileSync(join(process.cwd(), page.file), "utf8");
      for (const needle of page.needles) {
        expect(src).toContain(needle);
      }
      for (const banned of page.banned) {
        expect(src).not.toContain(banned);
      }
    }
  });
});
