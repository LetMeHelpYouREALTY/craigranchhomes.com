import { z } from 'zod';

import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

export const CONTACT_FORM_NAME = 'Contact Form';

export const FUB_CONTACT_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at 702-820-5408.`;

const contactLeadSchema = z
  .object({
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    email: z.string().trim().optional(),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(1, 'Message is required'),
    sourceUrl: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    const hasEmail = Boolean(data.email && z.string().email().safeParse(data.email).success);
    const hasPhone = Boolean(data.phone && data.phone.replace(/\D/g, '').length >= 10);

    if (!hasEmail && !hasPhone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Email or phone is required',
        path: ['email'],
      });
    }
  });

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;

export function parseContactLead(
  raw: Record<string, unknown>
): z.SafeParseReturnType<ContactLeadInput, ContactLeadInput> {
  return contactLeadSchema.safeParse({
    firstName: typeof raw.firstName === 'string' ? raw.firstName : '',
    lastName: typeof raw.lastName === 'string' ? raw.lastName : '',
    email: typeof raw.email === 'string' ? raw.email : undefined,
    phone: typeof raw.phone === 'string' ? raw.phone : undefined,
    message: typeof raw.message === 'string' ? raw.message : '',
    sourceUrl: typeof raw.sourceUrl === 'string' ? raw.sourceUrl : undefined,
  });
}

export function buildContactFubPayload(data: ContactLeadInput, sourceUrl: string) {
  const summaryParts = [
    data.message,
    data.phone ? `Phone: ${data.phone}` : null,
  ].filter(Boolean);

  return {
    type: 'General Inquiry' as const,
    message: summaryParts.join('\n\n'),
    description: `${CONTACT_FORM_NAME} — ${sourceUrl}`,
    sourceUrl,
    person: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      tags: ['craigranchhomes.com', CONTACT_FORM_NAME],
    },
  };
}

export function defaultContactSourceUrl(fallbackPath = '/contact'): string {
  return `${SITE_URL}${fallbackPath}`;
}

export { SITE_NAP };
