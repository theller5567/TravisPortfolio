/// <reference types="node" />
/**
 * Netlify serverless function: send contact form via SendGrid.
 * Expects POST body: { name, email, message }
 * Env: SENDGRID_API_KEY (required), SENDGRID_FROM_EMAIL (optional)
 */
export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@nerdycoder.com";

  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server configuration error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, message } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ error: "Name, email, and message are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: "travis@nerdycoder.com", name: "Travis Heller" }],
        subject: `Portfolio contact from ${name.trim()}`,
      },
    ],
    from: { email: fromEmail, name: "Portfolio Contact Form" },
    reply_to: { email: email.trim(), name: name.trim() },
    content: [
      {
        type: "text/plain",
        value: [`From: ${name.trim()} <${email.trim()}>`, "", message.trim()].join("\n"),
      },
    ],
  };

  try {
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/send-contact-email",
};
