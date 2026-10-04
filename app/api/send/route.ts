import * as React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, country, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Build Vault <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "jaldise86@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${firstName} ${lastName || ""}`.trim(),
      react: React.createElement(ContactEmailTemplate, { firstName, lastName, email, country, message }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to send email.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
