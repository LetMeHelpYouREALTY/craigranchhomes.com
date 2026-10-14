import { NextResponse } from 'next/server';
import { searchAddresses, type AddressScope } from '@/lib/address-search';

function scopeFrom(value: string | null): AddressScope {
  return value === 'place' ? 'place' : 'address';
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q')?.trim() ?? '';
  if (q.length < 3 || q.length > 120 || /[\u0000-\u001F<>]/.test(q)) {
    return NextResponse.json({ suggestions: [] });
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
