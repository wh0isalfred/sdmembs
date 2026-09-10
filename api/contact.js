// POST /api/contact
//
// Vercel serverless function (Node runtime). Validates and forwards contact
// form submissions to CONTACT_TO_EMAIL via Resend. Requires RESEND_API_KEY,
// CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL to be set as Vercel environment
// variables (see .env.example) — this function fails safely with a clear
// error if they're missing, rather than silently doing nothing.
//
// KNOWN LIMITATION — rate limiting: this function does not implement rate
// limiting. A real rate limiter needs a durable store (Redis/Upstash, or
// Vercel's own edge-config-based rate limiting) shared across serverless
// invocations — an in-memory counter here would reset on every cold start
// and give a false sense of protection. If abuse becomes a real problem,
// add Vercel's rate-limiting middleware or an Upstash-backed limiter; don't
// paper over this with a fake in-memory counter.
//
// KNOWN LIMITATION — request body size: Vercel's platform already enforces
// a request body size limit before this function ever runs (4.5MB on most
// plans as of this writing) — that's a platform-level backstop, not
// something this function needs to reimplement. The field-level max-length
// checks below are a separate, tighter layer of validation on top of that.

const MAX_LENGTHS = {
  name: 100,
  organization: 150,
  phone: 30,
  email: 200,
  service: 100,
  message: 3000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value, maxLen) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    // Do not leak which specific variable is missing to the client.
    console.error("contact API misconfigured: missing one or more required env vars");
    return res.status(500).json({
      ok: false,
      error: "The contact form isn't fully configured yet. Please email or call us directly instead.",
    });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid request body." });
    }
  }
  if (!body || typeof body !== "object") {
    return res.status(400).json({ ok: false, error: "Invalid request body." });
  }

  // Honeypot: a field real visitors never see or fill. Bots that
  // autofill every input will populate it; reject silently-but-honestly
  // (200 OK so the bot doesn't learn anything useful, but we don't send
  // the email).
  if (clean(body.company_website, 200) !== "") {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, MAX_LENGTHS.name);
  const organization = clean(body.organization, MAX_LENGTHS.organization);
  const phone = clean(body.phone, MAX_LENGTHS.phone);
  const email = clean(body.email, MAX_LENGTHS.email);
  const service = clean(body.service, MAX_LENGTHS.service);
  const message = clean(body.message, MAX_LENGTHS.message);

  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!service) errors.service = "Please select a service.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, error: "Please check the highlighted fields.", fields: errors });
  }

  const subject = `Security enquiry: ${service} — ${name}`;
  const textBody = [
    `Name: ${name}`,
    `Organization: ${organization || "—"}`,
    `Phone: ${phone || "—"}`,
    `Email: ${email}`,
    `Service needed: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization || "—")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service needed:</strong> ${escapeHtml(service)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      // Don't log the message body/contents — just enough to debug delivery
      // failures without persisting what the enquiry actually said.
      console.error("Resend API error:", resendRes.status);
      return res.status(502).json({
        ok: false,
        error: "We couldn't send your message right now. Please email or call us directly instead.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact API network error:", err.message);
    return res.status(502).json({
      ok: false,
      error: "We couldn't send your message right now. Please email or call us directly instead.",
    });
  }
}
