import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  SITE_URL,
  nap,
  ctaPhone,
  smsPhone,
  officePhone,
  businessHours,
  hoursSummary,
  foundingDate,
  gbpCategory,
  gbpDescription,
  serviceArea,
  geo,
} from "@/lib/contact";
import { generateLocalBusinessSchema, businessInfo } from "@/lib/gbp-schema";

const BANNED = [
  "9406",
  "(702) 222-1964",
  "702-222-1964",
  "+17022221964",
  "(702) 500-1942",
  "702-500-1942",
  "+17025001942",
  "Suite 100",
  "homes@heyberkshire.com",
  "https://heyberkshire.com",
  "Sunday by appointment",
];

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".git" || entry === ".next") continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (/\.(ts|tsx)$/.test(entry)) acc.push(full);
  }
  return acc;
}

describe("Craig Ranch Homes GBP NAP", () => {
  it("matches the Google Business Profile listing", () => {
    expect(nap.name).toBe("Craig Ranch Homes");
    expect(nap.street).toBe("851 W Lone Mountain Rd, Suite 103");
    expect(nap.city).toBe("North Las Vegas");
    expect(nap.state).toBe("NV");
    expect(nap.zip).toBe("89032");
    expect(nap.fullAddress).toBe(
      "851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032",
    );
    expect(ctaPhone.display).toBe("(702) 820-5408");
    expect(ctaPhone.tel).toBe("+17028205408");
    expect(smsPhone.href).toBe("sms:+17028205408");
    expect(officePhone.display).toBe("(702) 820-5408");
    expect(SITE_URL).toBe("https://www.craigranchhomes.com");
    expect(foundingDate).toBe("2007-09");
    expect(gbpCategory).toBe("Real Estate Agent");
    expect(serviceArea.zip).toBe("89031");
    expect(serviceArea.label).toBe("North Las Vegas, NV 89031");
    expect(hoursSummary).toContain("Sun closed");
    expect(businessHours.find((row) => row.day === "Sunday")?.label).toBe("Closed");
    expect(businessHours.find((row) => row.day === "Saturday")?.opens).toBe("10:00");
    expect(geo.latitude).toBeCloseTo(36.2469871, 5);
    expect(gbpDescription).toContain("Craig Ranch Regional Park");
    expect(gbpDescription).toContain("Nellis AFB PCS");
  });

  it("emits LocalBusiness schema with GBP NAP", () => {
    const schema = generateLocalBusinessSchema();
    expect(schema.name).toBe("Craig Ranch Homes");
    expect(schema.telephone).toBe("+17028205408");
    expect(schema.address.streetAddress).toBe("851 W Lone Mountain Rd, Suite 103");
    expect(schema.address.addressLocality).toBe("North Las Vegas");
    expect(schema.address.postalCode).toBe("89032");
    expect(schema.foundingDate).toBe("2007-09");
    expect(schema.openingHours).toEqual(["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"]);
    expect(schema.openingHoursSpecification).toHaveLength(6);
    expect(businessInfo.hours.sunday).toBe("Closed");
  });

  it("does not leave the old HeyBerkshire NAP in runtime code", () => {
    const files = [
      ...walk(join(process.cwd(), "app")),
      ...walk(join(process.cwd(), "components")),
      ...walk(join(process.cwd(), "lib")),
    ];
    const hits: string[] = [];
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      for (const needle of BANNED) {
        if (text.includes(needle)) {
          hits.push(`${file}: ${needle}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
