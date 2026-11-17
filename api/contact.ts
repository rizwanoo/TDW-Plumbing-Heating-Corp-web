import type {IncomingMessage, ServerResponse} from 'http';

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  town?: unknown;
  service?: unknown;
  urgency?: unknown;
  message?: unknown;
}

const ALLOWED_TOWNS = new Set([
  'Athol',
  'New Salem',
  'Orange',
  'Templeton',
  'Petersham',
  'Amherst',
  'Hubbardston',
  'Barre',
  'Hadley',
  'Gardner',
  'Other Massachusetts Community',
]);

function sendJson(res: ServerResponse, statusCode: number, data: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

async function readJsonBody(req: IncomingMessage & {body?: unknown}): Promise<ContactPayload | null> {
  if (req.body && typeof req.body === 'object') {
    return req.body as ContactPayload;
  }
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  if (chunks.length === 0) {
    return null;
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8')) as ContactPayload;
  } catch {
    return null;
  }
}

export default async function handler(
  req: IncomingMessage & {body?: unknown},
  res: ServerResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    sendJson(res, 405, {error: 'Method not allowed.'});
    return;
  }

  const body = await readJsonBody(req);
  if (!body || typeof body !== 'object') {
    sendJson(res, 400, {error: 'Invalid request payload.'});
    return;
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const town = typeof body.town === 'string' ? body.town.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const urgency = body.urgency === 'urgent' ? 'urgent' : 'standard';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2 || name.length > 100) {
    fieldErrors.name = 'Please enter your full name (2–100 characters).';
  }
  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    fieldErrors.phone = 'Please enter a valid 10-digit phone number.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    fieldErrors.email = 'Please enter a valid email address.';
  }
  if (!ALLOWED_TOWNS.has(town)) {
    fieldErrors.town = 'Please select your Massachusetts town.';
  }
  if (service.length < 2 || service.length > 120) {
    fieldErrors.service = 'Please select the service you need.';
  }
  if (message.length < 10 || message.length > 2000) {
    fieldErrors.message = 'Please describe your plumbing or heating need (10–2000 characters).';
  }

  if (Object.keys(fieldErrors).length > 0) {
    sendJson(res, 422, {
      error: 'Please review the highlighted fields below.',
      fieldErrors,
    });
    return;
  }

  const referenceId = `TDW-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  sendJson(res, 201, {
    success: true,
    referenceId,
    message: 'Service request received. For immediate dispatch, call (978) 709-1487.',
    inquiry: {
      id: referenceId,
      name,
      town,
      service,
      urgency,
      submittedAt: new Date().toISOString(),
    },
  });
}
