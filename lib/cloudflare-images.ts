/**
 * Cloudflare Images (hosted) delivery for this site.
 *
 * Per Cloudflare Images docs (hosted images, updated Apr 2026):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>
 *
 * Account hash is public (it is the delivery hostname). Account ID is
 * server-only, used by scripts/sync-images-to-cloudflare.sh to upload.
 * Custom IDs keep the git path under public/ so the same file is the backup.
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 */

/** Dashboard Account hash — Image Delivery URL host segment. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH =
  process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH || "byE6BTe9lNqo21V57n4aPQ";

/** Default named variant created for every hosted image. */
export const CLOUDFLARE_IMAGES_VARIANT = "public";

export const CLOUDFLARE_IMAGES_DELIVERY_ORIGIN = `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}`;

/**
 * Git path under public/ becomes the Cloudflare custom image ID.
 * `/images/hero/foo.jpg` → `images/hero/foo.jpg`
 * `%` in custom IDs must be encoded as `%25` in delivery URLs.
 */
export function cloudflareImageId(src: string): string {
  const path = src.startsWith("/") ? src.slice(1) : src;
  return path.replace(/%/g, "%25");
}

export function isCloudflareDeliveryUrl(src: string): boolean {
  return src.startsWith("https://imagedelivery.net/");
}

/**
 * Hosted Images are on in production once the account hash is known.
 * Local/test keep git copies unless NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true.
 * Set the flag to "false" to force git copies in production.
 */
export function isCloudflareImagesEnabled(): boolean {
  const flag = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
  if (flag === "false") return false;
  if (flag === "true") return true;
  return process.env.NODE_ENV === "production" && Boolean(CLOUDFLARE_IMAGES_ACCOUNT_HASH);
}

/**
 * Hosted delivery URL. Use named variant `public` unless flexible variants
 * are enabled (`w=400,quality=85` path segment, not query params).
 */
export function cloudflareDeliveryUrl(
  src: string,
  variant: string = CLOUDFLARE_IMAGES_VARIANT
): string {
  if (isCloudflareDeliveryUrl(src)) return src;
  return `${CLOUDFLARE_IMAGES_DELIVERY_ORIGIN}/${cloudflareImageId(src)}/${variant}`;
}

/** Map Next.js loader width to a hosted flexible-variant segment. */
export function cloudflareFlexibleVariant(width: number, quality?: number): string {
  const parts = [`w=${width}`];
  if (quality !== undefined) parts.push(`quality=${quality}`);
  return parts.join(",");
}
