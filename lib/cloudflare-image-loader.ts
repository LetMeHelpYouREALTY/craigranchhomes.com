/**
 * Next.js custom loader for Cloudflare Images.
 *
 * Hosted images (this site): https://imagedelivery.net/{hash}/{id}/{variant}
 * Do not append ?width=&format= query strings — that is not the hosted API.
 * Flexible variants use a comma-separated path segment: /w=400,quality=85
 *
 * Zone transformations (/cdn-cgi/image/...) need Cloudflare proxying the
 * origin. This site ships on Vercel with DNS-only Cloudflare, so hosted
 * Images is the delivery path.
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/enable-flexible-variants/
 */
import type { ImageLoaderProps } from "next/image";
import {
  CLOUDFLARE_IMAGES_ACCOUNT_HASH,
  cloudflareDeliveryUrl,
  cloudflareFlexibleVariant,
  isCloudflareDeliveryUrl,
  isCloudflareImagesEnabled,
} from "./cloudflare-images";

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (isCloudflareDeliveryUrl(src)) {
    return src;
  }

  if (isCloudflareImagesEnabled() && CLOUDFLARE_IMAGES_ACCOUNT_HASH) {
    const flexible = process.env.NEXT_PUBLIC_CLOUDFLARE_FLEXIBLE_VARIANTS === "true";
    const variant = flexible
      ? cloudflareFlexibleVariant(width, quality)
      : "public";
    return cloudflareDeliveryUrl(src, variant);
  }

  return src;
}
