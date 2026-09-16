import Image, { type ImageProps } from "next/image";
import { isCloudflareDeliveryUrl, mediaUrl } from "@/lib/media";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * next/image wrapper that points production src at Cloudflare hosted Images.
 * Hosted delivery already transcodes AVIF/WebP, so skip Vercel’s optimizer
 * for imagedelivery.net URLs to avoid a double hop.
 */
export default function SiteImage({ src, alt, unoptimized, ...props }: SiteImageProps) {
  const url = mediaUrl(src);
  return (
    <Image
      src={url}
      alt={alt}
      unoptimized={unoptimized ?? isCloudflareDeliveryUrl(url)}
      {...props}
    />
  );
}
