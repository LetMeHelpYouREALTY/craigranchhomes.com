#!/usr/bin/env bash
# Upload git-backed images in public/images to Cloudflare hosted Images.
# Custom IDs match git paths under public/ so mediaUrl() can reuse them:
#   /images/hero/foo.jpg → id images/hero/foo.jpg
#   https://imagedelivery.net/{hash}/images/hero/foo.jpg/public
#
# Requires: CLOUDFLARE_API_TOKEN
# Optional: CLOUDFLARE_ACCOUNT_ID, NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH
#
# Per Cloudflare Images docs:
#   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
#   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$ROOT/public"
IMG_DIR="$PUBLIC_DIR/images"
ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-2cc579c1ec9e426ed585e933ebf4753b}"
ACCOUNT_HASH="${NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH:-byE6BTe9lNqo21V57n4aPQ}"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "CLOUDFLARE_API_TOKEN is not set. Skipping upload."
  echo "Git copies in public/images remain the local/dev source."
  echo "Production delivery: https://imagedelivery.net/${ACCOUNT_HASH}/<image_id>/public"
  exit 0
fi

API="https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1"
uploaded=0
skipped=0
failed=0
while IFS= read -r -d '' file; do
  id="${file#"$PUBLIC_DIR/"}"
  echo "Uploading $id"
  response="$(curl -sS -X POST "$API" \
    -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
    -F "file=@${file}" \
    -F "id=${id}" \
    -F "requireSignedURLs=false")"
  if [[ "$response" == *'"success":true'* || "$response" == *'"success": true'* ]]; then
    uploaded=$((uploaded + 1))
  elif [[ "$response" == *"Duplicate"* || "$response" == *"already exists"* ]]; then
    echo "  already exists, skipping"
    skipped=$((skipped + 1))
  else
    echo "  failed: $response"
    failed=$((failed + 1))
  fi
done < <(find "$IMG_DIR" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' -o -name '*.gif' \) -print0)

echo "Uploaded $uploaded, skipped $skipped, failed $failed."
echo "Delivery: https://imagedelivery.net/${ACCOUNT_HASH}/<image_id>/public"
if [[ "$failed" -gt 0 ]]; then
  exit 1
fi
