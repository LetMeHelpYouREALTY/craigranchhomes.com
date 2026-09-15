#!/usr/bin/env bash
# Upload git-backed images in public/images to Cloudflare Images (primary CDN).
# Requires: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID
# Optional: wrangler r2 object put for R2 custom-domain backup.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$ROOT/public/images"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" || -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo "CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID are not set."
  echo "Git copies in public/images remain the live source on Vercel until Cloudflare is connected."
  exit 0
fi

API="https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1"
count=0
while IFS= read -r -d '' file; do
  id="${file#"$IMG_DIR/"}"
  echo "Uploading $id"
  curl -sS -X POST "$API" \
    -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
    -F "file=@${file}" \
    -F "id=${id}" \
    -F "requireSignedURLs=false" >/dev/null
  count=$((count + 1))
done < <(find "$IMG_DIR" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \) -print0)

echo "Uploaded $count files to Cloudflare Images. Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true and NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH on Vercel."
