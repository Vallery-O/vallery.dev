import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color: #00d4ff; margin-bottom: 0.5rem;">New portfolio message</h2>
          <p style="color: #888; font-size: 0.85rem; margin-bottom: 2rem;">Sent via your portfolio contact form</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #eee; color: #666; width: 80px;">Name</td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #eee; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #eee; color: #666;">Email</td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #00d4ff;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="margin-top: 1.5rem;">
            <p style="color: #666; margin-bottom: 0.5rem; font-size: 0.85rem;">Message</p>
            <div style="background: #f5f5f5; border-radius: 8px; padding: 1rem; line-height: 1.7;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>

          <p style="margin-top: 2rem; font-size: 0.75rem; color: #aaa;">
            Hit reply to respond directly to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}