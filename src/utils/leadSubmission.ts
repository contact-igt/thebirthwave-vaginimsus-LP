const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbwzfF1_XyxxkS8Ow30PYNKNeYeA2HZgUc-k8LV8JrAZi2ouTtulLRqb6PKTEGO7XrZaCA/exec';
const SOURCE_KEY = 'birthwave_vaginismus';

const getBackendUrl = (): string => {
  const custom = (import.meta as any)?.env?.VITE_BACKEND_URL;
  if (custom && typeof custom === 'string' && custom.trim()) {
    const trimmed = custom.trim().replace(/\/+$/, '');
    return trimmed.endsWith('/birthwave-public/leads')
      ? trimmed
      : `${trimmed}/api/v1/birthwave-public/leads`;
  }

  const isLocal =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1');

  const base = isLocal
    ? 'http://localhost:8000/api/v1'
    : 'https://invictusleadbackend-production.up.railway.app/api/v1';

  return `${base}/birthwave-public/leads`;
};

export type FormValues = {
  name: string;
  phone?: string;
  email?: string;
  contactInfo?: string;
  consultationFormat?: string;
  preferredDateTime?: string;
  preferredContactMethod?: string;
  helpOption?: string;
  message?: string;
  consent: boolean;
};

const newSubmissionId = () =>
  typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const attribution = () => {
  if (typeof window === 'undefined') {
    return {
      source: '',
      campaign: '',
      creative: '',
      channel: 'Form',
      landing_page: '',
      referrer: '',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      gclid: '',
      fbclid: '',
    };
  }
  const query = new URLSearchParams(window.location.search);
  return {
    source: query.get('source') || window.location.hostname,
    campaign: query.get('campaign') || '',
    creative: query.get('creative') || '',
    channel: 'Form',
    landing_page: window.location.href,
    referrer: document.referrer,
    utm_source: query.get('utm_source') || '',
    utm_medium: query.get('utm_medium') || '',
    utm_campaign: query.get('utm_campaign') || '',
    utm_content: query.get('utm_content') || '',
    utm_term: query.get('utm_term') || '',
    gclid: query.get('gclid') || '',
    fbclid: query.get('fbclid') || '',
  };
};

export async function submitLead(values: FormValues): Promise<{ success: boolean; fallbackUsed?: boolean }> {
  const leadId = newSubmissionId();
  const tracking = attribution();
  const backendUrl = getBackendUrl();

  // Deduce phone and email from contactInfo if provided
  let phone = values.phone || '';
  let email = values.email || '';
  if (values.contactInfo) {
    if (values.contactInfo.includes('@')) {
      email = email || values.contactInfo;
    } else {
      phone = phone || values.contactInfo;
    }
  }

  const format = values.consultationFormat || values.helpOption || 'In person at The BirthWave, Chennai';
  const contactMethod = values.preferredContactMethod || 'WhatsApp message';
  const dateTime = values.preferredDateTime ? ` | Preferred Date & Time: ${values.preferredDateTime}` : '';
  const service = `${format}${dateTime} (Method: ${contactMethod})`;

  const compiledMessage = [
    values.message ? `Message: ${values.message}` : '',
    values.consultationFormat ? `Format: ${values.consultationFormat}` : '',
    values.preferredDateTime ? `Preferred Date & Time: ${values.preferredDateTime}` : '',
    values.preferredContactMethod ? `Preferred Contact Method: ${values.preferredContactMethod}` : '',
    values.contactInfo ? `Contact Info: ${values.contactInfo}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const payload = {
    source_key: SOURCE_KEY,
    client_key: 'birthwave',
    lead_id: leadId,
    external_submission_id: leadId,
    name: values.name,
    phone: phone || values.contactInfo || '',
    email: email || (values.contactInfo?.includes('@') ? values.contactInfo : ''),
    service: service,
    message: compiledMessage || values.message || '',
    consent: values.consent,
    attribution: tracking,
  };

  // Primary Flow: DB Save via Backend API -> then server automatically mirrors to Google Sheet
  let apiSucceeded = false;
  try {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Key': 'birthwave',
        'Idempotency-Key': leadId,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      apiSucceeded = true;
      return { success: true, fallbackUsed: false };
    }
    console.warn(`[Birthwave Intake] Backend API returned status ${response.status}. Initiating direct Sheet fallback.`);
  } catch (err) {
    console.warn('[Birthwave Intake] Backend API unreachable. Initiating direct Sheet fallback.', err);
  }

  // Fallback Flow: If Backend API failed or is unreachable, POST directly to Google Apps Script Sheet Webhook
  if (!apiSucceeded) {
    const nowIst = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const isoString = new Date().toISOString();

    const sheetPayload = {
      ...payload,
      'Timestamp': nowIst,
      'Name': values.name,
      'Phone': phone || values.contactInfo || '',
      'What do you need help with?': service,
      'Email': email || '',
      'Message': compiledMessage || values.message || '',
      'Source': tracking.source || 'Vaginismus Landing Page',
      'UTM Source': tracking.utm_source,
      'UTM Medium': tracking.utm_medium,
      'UTM Campaign': tracking.utm_campaign,
      'GCLID': tracking.gclid,
      'FBCLID': tracking.fbclid,
      'Consultation Focus': service,
      'Consent': values.consent ? 'Yes' : 'No',
      'Service': service,
      'Consultation Format': values.consultationFormat || '',
      'Preferred Date & Time': values.preferredDateTime || '',
      'Preferred Contact Method': values.preferredContactMethod || '',
      timestamp: nowIst,
      created_at: isoString,
      submitted_at: nowIst,
    };

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetPayload),
      });

      return { success: true, fallbackUsed: true };
    } catch (sheetError) {
      console.error('[Birthwave Intake] Both Backend API and Sheet webhook fallback failed.', sheetError);
      throw new Error(
        'Unable to send enquiry. Please check your internet connection or reach out to us directly on WhatsApp.'
      );
    }
  }

  return { success: true };
}
