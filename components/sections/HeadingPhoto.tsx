import Image from "next/image";
import {
  h2PhotoForPath,
  h3PhotoForPath,
  mediaUrl,
  photoForPath,
  type SitePhoto,
} from "@/lib/media";

type HeadingPhotoProps = {
  path: string;
  level?: "h1" | "h2" | "h3";
  photo?: SitePhoto;
  className?: string;
  priority?: boolean;
};

export default function HeadingPhoto({
  path,
  level = "h1",
  photo,
  className = "",
  priority,
}: HeadingPhotoProps) {
  const asset =
    photo ??
    (level === "h1" ? photoForPath(path) : level === "h3" ? h3PhotoForPath(path) : h2PhotoForPath(path));
  const isH1 = level === "h1";
  const heightClass = isH1
    ? "h-48 md:h-72 lg:h-80"
    : level === "h2"
      ? "h-36 md:h-48"
      : "h-28 md:h-36";

  return (
    <figure className={`relative w-full overflow-hidden rounded-xl mb-8 ${heightClass} ${className}`.trim()}>
      <Image
        src={mediaUrl(asset.src)}
        alt={asset.alt}
        fill
        className="object-cover"
        sizes={isH1 ? "(max-width: 768px) 100vw, 896px" : "(max-width: 768px) 100vw, 768px"}
        priority={priority ?? isH1}
      />
    </figure>
  );
}
