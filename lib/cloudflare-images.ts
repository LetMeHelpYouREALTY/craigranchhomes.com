/**
 * Cloudflare Images (hosted) delivery for this site.
 *
 * Default (works after upload, no extra DNS):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>
 *
 * Custom hostname on the same Cloudflare account (Images docs, Apr 2026):
 *   https://<CUSTOM_HOST>/cdn-cgi/imagedelivery/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * Orange-cloud only the images host. Keep www.craigranchhomes.com DNS-only
 * (gray cloud) so Vercel SSL is not proxied.
 *
 * Account hash is public (it is the delivery hostname). Account ID is
 * server-only, used by scripts/sync-images-to-cloudflare.sh to upload.
 * Custom IDs keep the git path under public/ so the same file is the backup.
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-from-custom-domains/
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 */

/** Dashboard Account hash — Image Delivery URL host segment. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH =
  process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH || "byE6BTe9lNqo21V57n4aPQ";

/** Default named variant created for every hosted image. */
export const CLOUDFLARE_IMAGES_VARIANT = "public";

/** Intended branded host. Enable with NEXT_PUBLIC_CLOUDFLARE_IMAGES_CUSTOM_HOST. */
export const CLOUDFLARE_IMAGES_CUSTOM_HOST_DEFAULT = "images.craigranchhomes.com";

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

/** Hostname only, no scheme. Empty string keeps imagedelivery.net. */
export function cloudflareImagesCustomHost(): string {
  const raw = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_CUSTOM_HOST ?? "";
  return raw.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function isCloudflareDeliveryUrl(src: string): boolean {
  return (
    src.startsWith("https://imagedelivery.net/") ||
    src.includes("/cdn-cgi/imagedelivery/")
  );
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
 * Path under a custom (proxied) hostname.
 * `/cdn-cgi/imagedelivery/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>`
 */
export function cloudflareCustomDomainPath(
  src: string,
  variant: string = CLOUDFLARE_IMAGES_VARIANT
): string {
  return `/cdn-cgi/imagedelivery/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}/${cloudflareImageId(src)}/${variant}`;
}

/**
 * Hosted delivery URL. Custom host uses /cdn-cgi/imagedelivery/ on that
 * zone; otherwise imagedelivery.net. Named variant `public` unless flexible
 * variants are enabled (`w=400,quality=85` path segment, not query params).
 */
export function cloudflareDeliveryUrl(
  src: string,
  variant: string = CLOUDFLARE_IMAGES_VARIANT,
  customHost: string = cloudflareImagesCustomHost()
): string {
  if (isCloudflareDeliveryUrl(src)) return src;
  if (customHost) {
    return `https://${customHost}${cloudflareCustomDomainPath(src, variant)}`;
  }
  return `${CLOUDFLARE_IMAGES_DELIVERY_ORIGIN}/${cloudflareImageId(src)}/${variant}`;
}

/** Map Next.js loader width to a hosted flexible-variant segment. */
export function cloudflareFlexibleVariant(width: number, quality?: number): string {
  const parts = [`w=${width}`];
  if (quality !== undefined) parts.push(`quality=${quality}`);
  return parts.join(",");
}
