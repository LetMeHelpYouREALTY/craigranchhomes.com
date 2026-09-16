# Image Assets Guide

## Folder Structure

```
images/
├── hero/           # Homepage hero backgrounds
├── agent/          # Dr. Jan Duffy photos
├── properties/     # Listing photos
├── neighborhoods/  # Area/community photos
├── testimonials/   # Client headshots
└── logos/          # Brand assets
```

## Recommended Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080+ | WebP, JPG | 16:9 ratio, compress <200KB |
| agent/ | 400x400+ | WebP, JPG | Square, professional headshot |
| properties/ | 1200x800+ | WebP, JPG | Landscape, MLS-quality |
| neighborhoods/ | 1200x800+ | WebP, JPG | Scenic community shots |
| testimonials/ | 200x200 | WebP, JPG | Square, optional |
| logos/ | Various | PNG, SVG | Transparent background |

## Naming Conventions

- Use lowercase with hyphens: `summerlin-aerial.webp`
- Be descriptive: `dr-jan-duffy-headshot.jpg`
- Include size if multiple: `hero-desktop.webp`, `hero-mobile.webp`

## Image Optimization

Before uploading, optimize images:

1. **Online tools**: [Squoosh](https://squoosh.app), [TinyPNG](https://tinypng.com)
2. **CLI**: `npx @squoosh/cli --webp '{"quality":80}' image.jpg`
3. **Target**: <200KB for hero, <100KB for thumbnails

## Cloudflare hosted Images (primary) + Git (backup)

Production serves these files from Cloudflare Images using the git path as the custom ID:

`https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/images/hero/las-vegas-valley-homes.jpg/public`

1. `pnpm cloudflare:sync-images` (needs `CLOUDFLARE_API_TOKEN`; account ID defaults to this Images account)
2. Optional Vercel env: `NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH=byE6BTe9lNqo21V57n4aPQ`
   Production enables hosted Images automatically. Set `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false` to force git copies.

Until images are uploaded, set `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false` so Next.js / Vercel serves the git copies from `/public/images/`.

`lib/media.ts` and `HeadingPhoto` map each route’s H1/H2/H3 to a heading-appropriate photo. Cloudflare Images is primary in production; git copies in this folder are the backup.

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/las-vegas-skyline.webp"
  alt="Las Vegas skyline at sunset"
  width={1920}
  height={1080}
  priority // for above-fold images
/>
```

## Notes

- Next.js auto-optimizes images via `next/image`
- WebP preferred for web (30% smaller than JPEG)
- Always include descriptive alt text for SEO/accessibility
