'use server';

import { headers } from 'next/headers';

import {
  buildContactFubPayload,
  defaultContactSourceUrl,
  FUB_CONTACT_ERROR_MESSAGE,
  parseContactLead,
} from '@/lib/fub/contact-lead';
import { sendFollowUpBossEvent } from '@/lib/fub/send-event';

export type ContactFormResult =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

/**
 * Server action to handle contact form submissions via Follow Up Boss.
 */
export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResult> {
  try {
    const headerList = await headers();
    const referer = headerList.get('referer');

    const rawData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      propertyAddress: formData.get('propertyAddress'),
      sourceUrl: formData.get('sourceUrl'),
    };

    const validationResult = parseContactLead(rawData);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });

      return {
        success: false,
        error: 'Please correct the errors in the form',
        fieldErrors,
      };
    }

    const validatedData = validationResult.data;
    const sourceUrl =
      validatedData.sourceUrl?.trim() ||
      referer?.trim() ||
      defaultContactSourceUrl();

    const fubResult = await sendFollowUpBossEvent(
      buildContactFubPayload(validatedData, sourceUrl)
    );

    if (!fubResult.ok) {
      return {
        success: false,
        error: FUB_CONTACT_ERROR_MESSAGE,
      };
    }

    return {
      success: true,
      message:
        'Thank you for your message! Dr. Jan Duffy will get back to you soon.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: FUB_CONTACT_ERROR_MESSAGE,
    };
  }
}
