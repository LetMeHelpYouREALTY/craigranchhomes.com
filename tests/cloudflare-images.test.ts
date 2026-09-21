import { describe, expect, it } from "vitest";
import {
  CLOUDFLARE_IMAGES_ACCOUNT_HASH,
  CLOUDFLARE_IMAGES_CUSTOM_HOST_DEFAULT,
  CLOUDFLARE_IMAGES_DELIVERY_ORIGIN,
  cloudflareCustomDomainPath,
  cloudflareDeliveryUrl,
  cloudflareFlexibleVariant,
  cloudflareImageId,
  isCloudflareDeliveryUrl,
} from "@/lib/cloudflare-images";
import cloudflareImageLoader from "@/lib/cloudflare-image-loader";
import { mediaUrl } from "@/lib/media";

describe("Cloudflare hosted Images", () => {
  it("uses the dashboard account hash in the delivery origin", () => {
    expect(CLOUDFLARE_IMAGES_ACCOUNT_HASH).toBe("byE6BTe9lNqo21V57n4aPQ");
    expect(CLOUDFLARE_IMAGES_DELIVERY_ORIGIN).toBe(
      "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ"
    );
  });

  it("maps git public paths to custom image IDs", () => {
    expect(cloudflareImageId("/images/hero/las-vegas-valley-homes.jpg")).toBe(
      "images/hero/las-vegas-valley-homes.jpg"
    );
    expect(cloudflareImageId("images/neighborhoods/aliante-desert-hills.jpg")).toBe(
      "images/neighborhoods/aliante-desert-hills.jpg"
    );
  });

  it("builds imagedelivery.net URLs with the public variant", () => {
    expect(
      cloudflareDeliveryUrl("/images/neighborhoods/aliante-desert-hills.jpg")
    ).toBe(
      "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/images/neighborhoods/aliante-desert-hills.jpg/public"
    );
  });

  it("encodes percent signs in custom IDs for delivery URLs", () => {
    expect(cloudflareImageId("/images/hero/100%.jpg")).toBe("images/hero/100%25.jpg");
  });

  it("uses flexible-variant path segments, not query strings", () => {
    expect(cloudflareFlexibleVariant(800, 85)).toBe("w=800,quality=85");
    expect(
      cloudflareDeliveryUrl("/images/hero/office-lake-mead-blvd.jpg", "w=800,quality=85")
    ).toBe(
      "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/images/hero/office-lake-mead-blvd.jpg/w=800,quality=85"
    );
  });

  it("detects hosted delivery URLs", () => {
    expect(
      isCloudflareDeliveryUrl(
        "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/images/hero/foo.jpg/public"
      )
    ).toBe(true);
    expect(
      isCloudflareDeliveryUrl(
        "https://images.craigranchhomes.com/cdn-cgi/imagedelivery/byE6BTe9lNqo21V57n4aPQ/images/hero/foo.jpg/public"
      )
    ).toBe(true);
    expect(isCloudflareDeliveryUrl("/images/hero/foo.jpg")).toBe(false);
  });

  it("keeps git copies in test/dev unless Images is explicitly enabled", () => {
    expect(mediaUrl("/images/hero/las-vegas-valley-homes.jpg")).toBe(
      "/images/hero/las-vegas-valley-homes.jpg"
    );
  });

  it("passes hosted delivery URLs through the Next.js loader unchanged", () => {
    const src =
      "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/images/hero/foo.jpg/public";
    expect(cloudflareImageLoader({ src, width: 800 })).toBe(src);
  });

  it("does not append query strings to local src when Images is off", () => {
    expect(
      cloudflareImageLoader({ src: "/images/hero/foo.jpg", width: 800, quality: 85 })
    ).toBe("/images/hero/foo.jpg");
  });

  it("serves hosted Images from a custom proxied hostname", () => {
    expect(CLOUDFLARE_IMAGES_CUSTOM_HOST_DEFAULT).toBe("images.craigranchhomes.com");
    expect(
      cloudflareCustomDomainPath("/images/hero/las-vegas-valley-homes.jpg")
    ).toBe(
      "/cdn-cgi/imagedelivery/byE6BTe9lNqo21V57n4aPQ/images/hero/las-vegas-valley-homes.jpg/public"
    );
    expect(
      cloudflareDeliveryUrl(
        "/images/hero/las-vegas-valley-homes.jpg",
        "public",
        "images.craigranchhomes.com"
      )
    ).toBe(
      "https://images.craigranchhomes.com/cdn-cgi/imagedelivery/byE6BTe9lNqo21V57n4aPQ/images/hero/las-vegas-valley-homes.jpg/public"
    );
  });
});
