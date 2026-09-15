import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const villages = [
  "summerlin",
  "the-ridges",
  "southern-highlands",
  "skye-canyon",
  "centennial-hills",
  "green-valley",
  "henderson",
  "inspirada",
  "north-las-vegas",
  "mountains-edge",
];

describe("village chassis replacements", () => {
  it("removes copy-paste Community Highlights and Parks H3s", () => {
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      expect(src).not.toContain(">Community Highlights<");
      expect(src).not.toContain(">Parks & Recreation<");
      expect(src).toContain(`<CommunityHighlights path="/neighborhoods/${slug}" />`);
    }
  });

  it("replaces city-name market H2 chassis with listing counts", () => {
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      expect(src).not.toMatch(/Real Estate Market \| January 2026/);
      expect(src).not.toMatch(/Luxury Market \| January 2026/);
      expect(src).toContain('data-market-snapshot=');
    }
  });

  it("keeps market snapshot H2s unique across village files", () => {
    const headings: string[] = [];
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      const match = src.match(
        /data-market-snapshot="[^"]+"[\s\S]*?<h2[^>]*>\s*([^<]+)/
      );
      expect(match).toBeTruthy();
      headings.push(match![1].trim());
    }
    expect(new Set(headings).size).toBe(headings.length);
  });
});
