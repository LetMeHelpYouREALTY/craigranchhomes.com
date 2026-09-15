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
    needles: [
      '<LeftoverBand path="/google-business" />',
      '<LeftoverBand path="/google-business" slot={1} />',
    ],
    banned: [">Real Estate Services<", ">Service Areas<"],
  },
  {
    file: "app/55-plus-communities/del-webb-lake-las-vegas/page.tsx",
    needles: ["1,800+ homes, pickleball, and a 320-acre lake"],
    banned: [
      "lifestyle programming",
      "lifestyle activities",
      ">About Del Webb at Lake Las Vegas<",
      "The Lake Las Vegas Experience",
    ],
  },
  {
    file: "app/55-plus-communities/sun-city-aliante/page.tsx",
    needles: ["Aliante is a North"],
    banned: ["same lifestyle"],
  },
  {
    file: "app/about/page.tsx",
    needles: ["commute minutes from Suite 100"],
    banned: ["lifestyle offerings", "Areas Served by BHHS Nevada Properties"],
  },
  {
    file: "app/buyers/california-relocator/page.tsx",
    needles: ["Keep the California paycheck"],
    banned: ["Remote Work, Vegas Lifestyle"],
  },
  {
    file: "app/neighborhoods/henderson/page.tsx",
    needles: ["drive time from Suite 100"],
    banned: ["every lifestyle and budget"],
  },
  {
    file: "app/neighborhoods/inspirada/page.tsx",
    needles: ["2,000-acre Henderson campus"],
    banned: ["feel like a vacation", "engaged lifestyle"],
  },
  {
    file: "app/neighborhoods/mountains-edge/page.tsx",
    needles: ["compared by square footage"],
    banned: ["comparable lifestyle"],
  },
  {
    file: "app/neighborhoods/green-valley/page.tsx",
    needles: ["tree canopy age"],
    banned: ["lifestyle offerings"],
  },
  {
    file: "app/sellers/page.tsx",
    needles: [
      '<LeftoverBand path="/sellers" />',
      '<LeftoverBand path="/sellers" slot={1} />',
      '<LeftoverBand path="/sellers" slot={2} />',
    ],
    banned: [
      ">The Berkshire Hathaway HomeServices Selling Advantage<",
      ">The Home Selling Process<",
      ">Specialized Services for Every Seller<",
    ],
  },
  {
    file: "app/sellers/downsizing/page.tsx",
    needles: ['<LeftoverBand path="/sellers/downsizing" />'],
    banned: [
      ">Extract Your Equity, Enjoy Your Life<",
      "maximize their lifestyle",
      ">Top 55+ Communities for Las Vegas Downsizers<",
    ],
  },
  {
    file: "app/sellers/move-up/page.tsx",
    needles: ['<LeftoverBand path="/sellers/move-up" />'],
    banned: [">Your Equity Position is Stronger Than You Think<"],
  },
  {
    file: "app/sellers/relocation/page.tsx",
    needles: ['<LeftoverBand path="/sellers/relocation" />'],
    banned: [">Berkshire Hathaway HomeServices Network<"],
  },
  {
    file: "app/sellers/divorce-probate/page.tsx",
    needles: ['<LeftoverBand path="/sellers/divorce-probate" />'],
    banned: [">Situations We Help Navigate<"],
  },
  {
    file: "app/relocation/page.tsx",
    needles: [
      "one ZIP per inbound afternoon",
      '<LeftoverBand path="/relocation" />',
    ],
    banned: [
      "unique lifestyle",
      "Popular Relocation Destinations",
      ">Why People Are Moving to Las Vegas<",
    ],
  },
  {
    file: "app/market-report/page.tsx",
    needles: ['<LeftoverBand path="/market-report" />'],
    banned: [">Market Data by Area<"],
  },
  {
    file: "app/investment-properties/page.tsx",
    needles: ['<LeftoverBand path="/investment-properties" />'],
    banned: [">Why Invest in Las Vegas?<"],
  },
  {
    file: "app/home-valuation/page.tsx",
    needles: ['<LeftoverBand path="/home-valuation" />'],
    banned: [
      ">Why Online Home Value Estimates Often Miss the Mark<",
    ],
  },
  {
    file: "app/buyers/first-time-buyers/page.tsx",
    needles: [
      '<LeftoverBand path="/buyers/first-time-buyers" />',
      '<LeftoverBand path="/buyers/first-time-buyers" slot={1} />',
    ],
    banned: [
      ">First-Time Buyer Financing Options<",
      ">Best Neighborhoods for First-Time Buyers<",
      "new schools",
    ],
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
