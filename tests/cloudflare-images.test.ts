import { afterEach, describe, expect, it } from "vitest";
import {
  AGENT_HEADSHOT_SRC,
  agentIconMetadata,
  agentIconUrl,
  agentAvatarUrl,
  agentLogoUrl,
  cloudflareImagesConfig,
  deliveryUrl,
  serializeImageTransform,
  transformImageUrl,
} from "@/lib/cloudflare-images";

const ORIGINAL_ENABLED = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
const ORIGINAL_HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
const ORIGINAL_CDN = process.env.NEXT_PUBLIC_MEDIA_CDN;

afterEach(() => {
  if (ORIGINAL_ENABLED === undefined) {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
  } else {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = ORIGINAL_ENABLED;
  }
  if (ORIGINAL_HASH === undefined) {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
  } else {
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = ORIGINAL_HASH;
  }
  if (ORIGINAL_CDN === undefined) {
    delete process.env.NEXT_PUBLIC_MEDIA_CDN;
  } else {
    process.env.NEXT_PUBLIC_MEDIA_CDN = ORIGINAL_CDN;
  }
});

describe("Cloudflare Images transforms", () => {
  it("serializes flexible-variant options per Cloudflare Images docs", () => {
    expect(
      serializeImageTransform({
        width: 48,
        height: 48,
        fit: "cover",
        gravity: "face",
        zoom: 0.35,
        format: "auto",
      }),
    ).toBe(
      "width=48,height=48,fit=cover,gravity=face,format=auto,zoom=0.35",
    );
  });

  it("builds imagedelivery.net URLs with a face-crop for favicons", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = "true";
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = "testhash";
    delete process.env.NEXT_PUBLIC_MEDIA_CDN;

    expect(cloudflareImagesConfig()).toEqual({
      enabled: true,
      hash: "testhash",
      mediaCdn: "",
    });

    const url = transformImageUrl(AGENT_HEADSHOT_SRC, {
      width: 180,
      height: 180,
      fit: "cover",
      gravity: "face",
      format: "auto",
    });
    expect(url).toBe(
      "https://imagedelivery.net/testhash/images/agent/dr-jan-duffy-headshot.jpg/width=180,height=180,fit=cover,gravity=face,format=auto",
    );
    expect(agentIconUrl(32)).toContain("gravity=face");
    expect(agentIconUrl(32)).toContain("fit=cover");
    expect(agentIconUrl(32)).toContain("width=32,height=32");
    expect(agentAvatarUrl(80)).toContain("width=80,height=80");
    expect(agentAvatarUrl(80)).toContain("gravity=face");
    expect(deliveryUrl(AGENT_HEADSHOT_SRC)).toBe(
      "https://imagedelivery.net/testhash/images/agent/dr-jan-duffy-headshot.jpg/public",
    );
    expect(agentLogoUrl("https://www.craigranchhomes.com")).toContain(
      "imagedelivery.net/testhash",
    );
    const icons = agentIconMetadata();
    expect(icons.icon).toHaveLength(3);
    expect(icons.apple[0]?.sizes).toBe("180x180");
  });

  it("falls back to Next.js file-convention icons without Cloudflare", () => {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
    delete process.env.NEXT_PUBLIC_MEDIA_CDN;

    expect(agentIconUrl(16)).toBe("/favicon.ico");
    expect(agentIconUrl(180)).toBe("/apple-icon.png");
    expect(agentIconUrl(192)).toBe("/icon.png");
    expect(agentAvatarUrl(80)).toBe(AGENT_HEADSHOT_SRC);
    expect(transformImageUrl(AGENT_HEADSHOT_SRC, { width: 48 })).toBe(
      AGENT_HEADSHOT_SRC,
    );
    expect(agentLogoUrl("https://www.craigranchhomes.com")).toBe(
      "https://www.craigranchhomes.com/icon.png",
    );
    expect(agentIconMetadata().icon[0]?.url).toBe("/favicon.ico");
  });
});
