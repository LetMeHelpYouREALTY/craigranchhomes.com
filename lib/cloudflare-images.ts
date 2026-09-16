/**
 * Cloudflare Images delivery and on-the-fly transforms.
 *
 * Per Cloudflare Images docs (hosted images + flexible variants, 2026):
 *   https://imagedelivery.net/{account_hash}/{image_id}/{variant-or-options}
 *
 * Options are comma-separated (e.g. w=48,h=48,fit=cover,gravity=face).
 * Git copies in /public remain the backup when env is unset.
 *
 * @see https://developers.cloudflare.com/images/optimization/features/
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/enable-flexible-variants/
 */

export const AGENT_HEADSHOT_SRC = "/images/agent/dr-jan-duffy-headshot.jpg";

export type ImageFit =
  | "scale-down"
  | "contain"
  | "cover"
  | "crop"
  | "aspect-crop"
  | "pad"
  | "squeeze"
  | "scale-up";

export type ImageGravity =
  | "auto"
  | "face"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "center";

export type ImageFormat = "auto" | "avif" | "webp" | "jpeg" | "baseline-jpeg";

export type ImageTransform = {
  width: number;
  height?: number;
  fit?: ImageFit;
  gravity?: ImageGravity;
  format?: ImageFormat;
  quality?: number;
  /** 0–1, how tightly to crop toward a detected face when gravity=face */
  zoom?: number;
};

export type CloudflareImagesConfig = {
  enabled: boolean;
  hash: string;
  mediaCdn: string;
};

export function cloudflareImagesConfig(): CloudflareImagesConfig {
  return {
    enabled: process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true",
    hash: process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH ?? "",
    mediaCdn: (process.env.NEXT_PUBLIC_MEDIA_CDN ?? "").replace(/\/$/, ""),
  };
}

export function normalizeImageSrc(src: string): string {
  return src.startsWith("/") ? src.slice(1) : src;
}

export function serializeImageTransform(transform: ImageTransform): string {
  const parts: string[] = [`width=${transform.width}`];
  if (transform.height !== undefined) parts.push(`height=${transform.height}`);
  if (transform.fit) parts.push(`fit=${transform.fit}`);
  if (transform.gravity) parts.push(`gravity=${transform.gravity}`);
  if (transform.format) parts.push(`format=${transform.format}`);
  if (transform.quality !== undefined) parts.push(`quality=${transform.quality}`);
  if (transform.zoom !== undefined) parts.push(`zoom=${transform.zoom}`);
  return parts.join(",");
}

function hostedImageUrl(path: string, variantOrOptions: string): string {
  const { enabled, hash } = cloudflareImagesConfig();
  if (!enabled || !hash) return "";
  return `https://imagedelivery.net/${hash}/${path}/${variantOrOptions}`;
}

/**
 * Named variant (`public`) or flexible-variant options for a git-backed public/ path.
 * Custom IDs match the path under public/ (e.g. images/agent/dr-jan-duffy-headshot.jpg).
 */
export function deliveryUrl(src: string, variantOrOptions = "public"): string {
  const path = normalizeImageSrc(src);
  const { mediaCdn } = cloudflareImagesConfig();
  if (mediaCdn) {
    return `${mediaCdn}/${path}`;
  }
  const hosted = hostedImageUrl(path, variantOrOptions);
  if (hosted) return hosted;
  return src.startsWith("/") ? src : `/${src}`;
}

export function transformImageUrl(src: string, transform: ImageTransform): string {
  const path = normalizeImageSrc(src);
  const { mediaCdn } = cloudflareImagesConfig();
  const hosted = hostedImageUrl(path, serializeImageTransform(transform));
  if (hosted) return hosted;
  if (mediaCdn) {
    return `${mediaCdn}/${path}`;
  }
  return src.startsWith("/") ? src : `/${src}`;
}

const FACE_CROP: Omit<ImageTransform, "width" | "height"> = {
  fit: "cover",
  gravity: "face",
  zoom: 0.35,
  format: "auto",
};

function localAgentIconFallback(size: number): string {
  if (size <= 32) return "/favicon.ico";
  if (size <= 180) return "/apple-icon.png";
  return "/icon.png";
}

/** Square, face-cropped agent photo. Cloudflare Images when configured; git fallback otherwise. */
export function agentIconUrl(size: number): string {
  const { enabled, hash } = cloudflareImagesConfig();
  if (enabled && hash) {
    return transformImageUrl(AGENT_HEADSHOT_SRC, {
      ...FACE_CROP,
      width: size,
      height: size,
    });
  }
  return localAgentIconFallback(size);
}

/**
 * Navbar / in-page avatar. Uses a Cloudflare Images face-crop when configured;
 * otherwise the git-backed headshot (CSS object-cover crops it). Do not point
 * next/image at app/icon.png — that file is a metadata route, not a public asset.
 */
export function agentAvatarUrl(size: number): string {
  const { enabled, hash } = cloudflareImagesConfig();
  if (enabled && hash) {
    return transformImageUrl(AGENT_HEADSHOT_SRC, {
      ...FACE_CROP,
      width: size,
      height: size,
    });
  }
  return AGENT_HEADSHOT_SRC;
}

export function agentLogoUrl(siteUrl: string): string {
  const icon = agentIconUrl(192);
  if (icon.startsWith("http://") || icon.startsWith("https://")) return icon;
  return `${siteUrl.replace(/\/$/, "")}${icon}`;
}

export function agentIconMetadata(): {
  icon: Array<{ url: string; sizes?: string; type?: string }>;
  apple: Array<{ url: string; sizes: string; type?: string }>;
} {
  const { enabled, hash } = cloudflareImagesConfig();
  if (enabled && hash) {
    return {
      icon: [
        { url: agentIconUrl(16), sizes: "16x16" },
        { url: agentIconUrl(32), sizes: "32x32" },
        { url: agentIconUrl(192), sizes: "192x192" },
      ],
      apple: [{ url: agentIconUrl(180), sizes: "180x180" }],
    };
  }
  return {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  };
}
