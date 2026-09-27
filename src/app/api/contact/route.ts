import { NextResponse } from 'next/server';

import {
  buildContactFubPayload,
  defaultContactSourceUrl,
  parseContactLead,
} from '@/lib/fub/contact-lead';
import { sendFollowUpBossEvent } from '@/lib/fub/send-event';

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const validationResult = parseContactLead(body);

  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        details: validationResult.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const referer = request.headers.get('referer');
  const validatedData = validationResult.data;
  const sourceUrl =
    validatedData.sourceUrl?.trim() ||
    referer?.trim() ||
    defaultContactSourceUrl();

  const fubResult = await sendFollowUpBossEvent(
    buildContactFubPayload(validatedData, sourceUrl)
  );

  if (!fubResult.ok) {
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: fubResult.status }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
