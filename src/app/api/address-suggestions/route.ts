import { NextResponse } from 'next/server';
import { searchAddresses, type AddressScope } from '@/lib/address-search';

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 40;
const buckets = new Map<string, { resetAt: number; count: number }>();

function scopeFrom(value: string | null): AddressScope {
  return value === 'place' ? 'place' : 'address';
}

function callerAllowed(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    return new URL(origin).host === (request.headers.get('host') ?? '');
  } catch {
    return false;
  }
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || 'local';
}

function tooMany(key: string): boolean {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || now > current.resetAt) {
    buckets.set(key, { resetAt: now + WINDOW_MS, count: 1 });
    if (buckets.size > 500) {
      for (const [id, bucket] of buckets) {
        if (now > bucket.resetAt) buckets.delete(id);
      }
    }
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export async function GET(request: Request) {
  if (!callerAllowed(request)) {
    return NextResponse.json({ suggestions: [] }, { status: 403 });
  }

  const url = new URL(request.url);
  const q = url.searchParams.get('q')?.trim() ?? '';
  if (q.length < 3 || q.length > 120 || /[\u0000-\u001F<>]/.test(q)) {
    return NextResponse.json({ suggestions: [] });
  }
  if (tooMany(clientKey(request))) {
    return NextResponse.json({ suggestions: [], unavailable: true }, { status: 429 });
  }

  try {
    const suggestions = await searchAddresses(q, scopeFrom(url.searchParams.get('scope')));
    return NextResponse.json(
      { suggestions },
      { headers: { 'Cache-Control': 'public, max-age=3600' } }
    );
  } catch {
    return NextResponse.json(
      { suggestions: [], unavailable: true },
      { status: 503 }
    );
  }
}
