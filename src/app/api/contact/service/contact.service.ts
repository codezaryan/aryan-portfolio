import nodemailer from "nodemailer";

interface Email {
  email: string;
  name?: string;
  subject?: string;
  message?: string;
}

export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // SECURITY: Move credentials to environment variables
    const emailUser = process.env.SMTP_USER || "aryanpatel7987@gmail.com";
    const emailPass = process.env.SMTP_PASS || "yomyuykppzjjzgge";

    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  }

  async sendEmail(input: Email): Promise<nodemailer.SentMessageInfo> {
    const email: Required<Email> = {
      email: input.email,
      name: input.name ?? "Anonymous",
      subject: input.subject ?? "New Contact Form Submission",
      message: input.message ?? "",
    };

    const mailOptions = {
      from: `"Portfolio Contact Form" <aryanpatel7987@gmail.com>`,
      to: "aryanpatel7987@gmail.com",
      subject: `📬 Portfolio Contact: ${email.subject}`,
      text: this.getPlainTextTemplate(email),
      html: this.getHtmlTemplate(email),
      replyTo: `"${email.name}" <${email.email}>`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("📨 Email sent successfully");
      console.log("Message ID:", info.messageId);
      return info;
    } catch (error) {
      console.error("❌ Failed to send email from user:", email.email);
      console.error(error);
      throw error;
    }
  }

  private getPlainTextTemplate(email: Required<Email>): string {
    return `
NEW CONTACT FORM SUBMISSION
============================

From: ${email.name}
Email: ${email.email}
Subject: ${email.subject}

Message:
${email.message}

---
Received: ${new Date().toLocaleString('en-US', { 
  dateStyle: 'full', 
  timeStyle: 'short' 
})}
    `.trim();
  }

  private getHtmlTemplate(email: Required<Email>): string {
    const escapedMessage = this.escapeHtml(email.message);
    const formattedMessage = escapedMessage.replace(/\n/g, '<br>');
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; text-align: center;">
                📬 New Contact Form Submission
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Contact Info Card -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #495057; font-size: 14px;">👤 Name:</strong>
                          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px;">${this.escapeHtml(email.name)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #495057; font-size: 14px;">✉️ Email:</strong>
                          <p style="margin: 5px 0 0 0;">
                            <a href="mailto:${email.email}" style="color: #667eea; text-decoration: none; font-size: 16px;">${this.escapeHtml(email.email)}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #495057; font-size: 14px;">📋 Subject:</strong>
                          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px;">${this.escapeHtml(email.subject)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 15px 0; color: #212529; font-size: 18px; font-weight: 600;">💬 Message:</h2>
                <div style="padding: 20px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #28a745;">
                  <p style="margin: 0; color: #495057; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formattedMessage}</p>
                </div>
              </div>

              <!-- Quick Actions -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email.email}?subject=Re: ${encodeURIComponent(email.subject)}" 
                       style="display: inline-block; padding: 12px 30px; background-color: #667eea; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                      Reply to ${this.escapeHtml(email.name)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #6c757d; font-size: 12px; text-align: center;">
                Received on ${new Date().toLocaleString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 12px; text-align: center;">
                This message was sent from your portfolio website contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
  }

  private escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}