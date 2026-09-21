/**
 * Cloudflare Images loader for Next.js (Cloudflare Pages builds).
 *
 * Hosted Images flexible-variant path, per Cloudflare Images docs (2026):
 *   https://imagedelivery.net/{account_hash}/{image_id}/width=W,quality=Q,format=auto
 *
 * This file is referenced by next.config.cloudflare.js. The Vercel
 * next.config.js uses the default optimizer plus imagedelivery.net URLs
 * from lib/cloudflare-images.ts.
 */

import type { ImageLoaderProps } from "next/image";
import { cloudflareImagesConfig, transformImageUrl } from "./cloudflare-images";

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const { enabled, hash } = cloudflareImagesConfig();

  if (enabled && hash) {
    return transformImageUrl(src, {
      width,
      quality: quality || 85,
      format: "auto",
    });
  }

  const params = new URLSearchParams({
    w: width.toString(),
    q: (quality || 85).toString(),
    f: "auto",
  });

  return `${src}?${params.toString()}`;
}
