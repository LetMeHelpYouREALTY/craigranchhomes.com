import { FUB_EVENTS_URL, FUB_SITE_SOURCE } from '@/lib/fub/constants';

export type FollowUpBossPerson = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  tags: string[];
};

export type FollowUpBossEventInput = {
  type: string;
  message: string;
  description: string;
  sourceUrl: string;
  person: FollowUpBossPerson;
};

function getAuthorizationHeader(apiKey: string): string {
  const token = Buffer.from(`${apiKey}:`).toString('base64');
  return `Basic ${token}`;
}

/**
 * Sends a lead event to Follow Up Boss. Returns HTTP-style status for route handlers.
 */
export async function sendFollowUpBossEvent(
  input: FollowUpBossEventInput
): Promise<{ ok: true } | { ok: false; status: number; reason: 'config' | 'upstream' }> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;

  if (!apiKey) {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not configured; cannot send Follow Up Boss event.'
    );
    return { ok: false, status: 503, reason: 'config' };
  }

  const body = {
    source: FUB_SITE_SOURCE,
    system: FUB_SITE_SOURCE,
    type: input.type,
    message: input.message,
    description: input.description,
    sourceUrl: input.sourceUrl,
    person: {
      firstName: input.person.firstName,
      lastName: input.person.lastName,
      emails: input.person.email ? [{ value: input.person.email }] : [],
      phones: input.person.phone ? [{ value: input.person.phone }] : [],
      tags: input.person.tags,
    },
  };

  try {
    const response = await fetch(FUB_EVENTS_URL, {
      method: 'POST',
      headers: {
        Authorization: getAuthorizationHeader(apiKey),
        'Content-Type': 'application/json',
        'X-System': FUB_SITE_SOURCE,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    console.error(
      `Follow Up Boss event rejected with status ${response.status} for type ${input.type}`
    );
    return { ok: false, status: 502, reason: 'upstream' };
  } catch (error) {
    console.error('Follow Up Boss request failed:', error);
    return { ok: false, status: 502, reason: 'upstream' };
  }
}
