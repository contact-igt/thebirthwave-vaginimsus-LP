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
  phone: string;
  email: string;
  helpOption: string;
  message: string;
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

  const payload = {
    source_key: SOURCE_KEY,
    client_key: 'birthwave',
    lead_id: leadId,
    external_submission_id: leadId,
    name: values.name,
    phone: values.phone,
    email: values.email,
    service: values.helpOption,
    message: values.message,
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
      // Exact Google Sheet Column Headers (matching the Vaginismus sheet:
      // Timestamp, Name, Phone, What do you need help with?, Email, Message, Source, UTM Source, UTM Medium, UTM Campaign, GCLID, FBCLID)
      'Timestamp': nowIst,
      'Name': values.name,
      'Phone': values.phone,
      'What do you need help with?': values.helpOption,
      'Email': values.email,
      'Message': values.message,
      'Source': tracking.source || 'Vaginismus Landing Page',
      'UTM Source': tracking.utm_source,
      'UTM Medium': tracking.utm_medium,
      'UTM Campaign': tracking.utm_campaign,
      'GCLID': tracking.gclid,
      'FBCLID': tracking.fbclid,
      'Consultation Focus': values.helpOption,
      'Consent': values.consent ? 'Yes' : 'No',
      'Service': values.helpOption,

      // Flexible fallbacks for various script parsers
      timestamp: nowIst,
      created_at: isoString,
      submitted_at: nowIst,
      help_option: values.helpOption,
      helpOption: values.helpOption,
      consultation_focus: values.helpOption,
      consultationFocus: values.helpOption,
      service: values.helpOption,
      serviceCode: 'vaginismus',
      source_key: SOURCE_KEY,
      ...tracking,
    };

    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(sheetPayload),
    };

    const sheetResponse = await fetch(SHEET_URL, postOptions);
    if (!sheetResponse.ok) {
      console.warn('[Birthwave Intake] Sheet fallback returned status:', sheetResponse.status);
    }

    return { success: true, fallbackUsed: true };
  }

  return { success: true, fallbackUsed: false };
}
