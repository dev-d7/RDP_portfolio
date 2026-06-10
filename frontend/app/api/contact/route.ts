import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function buildHtml(
  name: string,
  email: string,
  company: string,
  message: string,
  id: string,
  receivedAt: string,
): string {
  const companyRow = company
    ? `<tr>
        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:120px;vertical-align:top">Company</td>
        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#1e293b;font-size:13px;font-weight:600">${company}</td>
       </tr>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Project Inquiry — RDP Studio</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a8a 0%,#1e40af 100%);border-radius:16px 16px 0 0;padding:36px 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:10px;width:36px;height:36px;line-height:36px;text-align:center;font-weight:800;color:#fff;font-size:16px;vertical-align:middle;">R</div>
                  <span style="font-weight:700;font-size:18px;color:#fff;vertical-align:middle;margin-left:10px;">RDP Studio</span>
                </td>
                <td align="right">
                  <span style="background:rgba(255,255,255,0.15);color:#fff;font-size:11px;font-weight:700;padding:5px 12px;border-radius:999px;letter-spacing:0.08em;">NEW INQUIRY</span>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:24px;">
                  <div style="font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;line-height:1.2;">
                    🚀 New project inquiry
                  </div>
                  <div style="font-size:14px;color:rgba(255,255,255,0.75);margin-top:6px;">
                    Someone wants to work with you. Reply within 24 hours.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">

            <!-- Contact details -->
            <div style="font-size:11px;font-weight:700;color:#94a3b8;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;">Contact Details</div>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:120px;vertical-align:top">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#1e293b;font-size:13px;font-weight:700">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:120px;vertical-align:top">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:13px;">
                  <a href="mailto:${email}" style="color:#1e40af;font-weight:600;text-decoration:none;">${email}</a>
                </td>
              </tr>
              ${companyRow}
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:13px;width:120px;vertical-align:top">Received</td>
                <td style="padding:10px 0;color:#1e293b;font-size:13px;">${receivedAt}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top:28px;">
              <div style="font-size:11px;font-weight:700;color:#94a3b8;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:12px;">Their Message</div>
              <div style="background:#f8fafc;border-left:4px solid #1e40af;border-radius:0 10px 10px 0;padding:18px 20px;color:#1e293b;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</div>
            </div>

            <!-- CTA button -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}?subject=Re%3A%20Your%20inquiry%20to%20RDP%20Studio&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AThanks%20for%20reaching%20out%20to%20RDP%20Studio!%0A%0A"
                 style="display:inline-block;background:#1e40af;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:999px;text-decoration:none;letter-spacing:0.01em;">
                Reply to ${name} →
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid #e2e8f0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="color:#94a3b8;font-size:12px;">
                  Lead ID: <span style="font-family:monospace;color:#64748b;">${id}</span>
                </td>
                <td align="right" style="color:#94a3b8;font-size:12px;">
                  RDP Studio · devansh@nexttoppers.com
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;
}

function buildText(
  name: string,
  email: string,
  company: string,
  message: string,
  id: string,
  receivedAt: string,
): string {
  return `New project inquiry — RDP Studio
=====================================

Name:     ${name}
Email:    ${email}${company ? `\nCompany:  ${company}` : ''}
Received: ${receivedAt}

Message:
--------
${message}

---
Lead ID: ${id}
Reply: ${email}
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const company = String(body.company ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: 'Please fill in your name, email and a short message.' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const receivedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }) + ' IST';

    // Send email via Gmail SMTP
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      // Env vars not set — still return success so the form works
      console.warn('[contact] EMAIL_USER / EMAIL_PASS not set — skipping email send');
    } else {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: emailUser, pass: emailPass },
      });

      const companyLabel = company ? ` · ${company}` : '';

      await transporter.sendMail({
        from: `"RDP Studio" <${emailUser}>`,
        to: 'devansddd77@gmail.com',
        replyTo: `"${name}" <${email}>`,
        subject: `🚀 New inquiry from ${name}${companyLabel} — RDP Studio`,
        html: buildHtml(name, email, company, message, id, receivedAt),
        text: buildText(name, email, company, message, id, receivedAt),
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks — we'll be in touch within one business day.",
      id,
      receivedAt: new Date().toISOString(),
    });
  } catch (err: unknown) {
    console.error('[contact] error:', err);
    return NextResponse.json(
      { ok: false, message: 'Something went wrong. Please email us directly.' },
      { status: 500 },
    );
  }
}
