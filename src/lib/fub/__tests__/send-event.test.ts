import { sendFollowUpBossEvent } from '@/lib/fub/send-event';

const originalFetch = global.fetch;

describe('sendFollowUpBossEvent', () => {
  const envKey = process.env.FOLLOW_UP_BOSS_API_KEY;

  afterEach(() => {
    global.fetch = originalFetch;
    process.env.FOLLOW_UP_BOSS_API_KEY = envKey;
    jest.restoreAllMocks();
  });

  it('returns 503 when API key is missing', async () => {
    delete process.env.FOLLOW_UP_BOSS_API_KEY;

    const result = await sendFollowUpBossEvent({
      type: 'General Inquiry',
      message: 'Test message',
      description: 'Contact Form — /contact',
      sourceUrl: 'https://www.craigranchhomes.com/contact',
      person: {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        tags: ['craigranchhomes.com', 'Contact Form'],
      },
    });

    expect(result).toEqual({ ok: false, status: 503, reason: 'config' });
  });

  it('sends Authorization and event payload when configured', async () => {
    process.env.FOLLOW_UP_BOSS_API_KEY = 'test-api-key';

    const fetchMock = jest.fn().mockResolvedValue({
      status: 201,
      ok: true,
    });
    global.fetch = fetchMock as typeof fetch;

    const result = await sendFollowUpBossEvent({
      type: 'General Inquiry',
      message: 'Hello',
      description: 'Contact Form — /contact',
      sourceUrl: 'https://www.craigranchhomes.com/contact',
      person: {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        phone: '7025550100',
        tags: ['craigranchhomes.com', 'Contact Form'],
      },
    });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://api.followupboss.com/v1/events');
    expect(options.method).toBe('POST');

    const headers = options.headers as Record<string, string>;
    expect(headers.Authorization).toBe(
      `Basic ${Buffer.from('test-api-key:').toString('base64')}`
    );
    expect(headers['X-System']).toBe('craigranchhomes.com');

    const parsedBody = JSON.parse(options.body as string);
    expect(parsedBody.type).toBe('General Inquiry');
    expect(parsedBody.person.firstName).toBe('Jane');
    expect(parsedBody.person.emails).toEqual([{ value: 'jane@example.com' }]);
    expect(parsedBody.person.phones).toEqual([{ value: '7025550100' }]);
  });

  it('returns 502 when Follow Up Boss rejects the event', async () => {
    process.env.FOLLOW_UP_BOSS_API_KEY = 'test-api-key';

    global.fetch = jest.fn().mockResolvedValue({
      status: 422,
      ok: false,
    }) as typeof fetch;

    const result = await sendFollowUpBossEvent({
      type: 'General Inquiry',
      message: 'Hello',
      description: 'Contact Form',
      sourceUrl: 'https://www.craigranchhomes.com/contact',
      person: {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        tags: ['craigranchhomes.com', 'Contact Form'],
      },
    });

    expect(result).toEqual({ ok: false, status: 502, reason: 'upstream' });
  });
});
