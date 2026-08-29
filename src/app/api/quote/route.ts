import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // 1. Setup the base email payload
    const payload: any = {
      from: 'Pelican Website <website@pelicanchem.com>', 
      to: process.env.RECEIVER_EMAIL as string,
      subject: `New Quote Request from ${name} - ${company}`,
      html: `
        <h2>New Quote Request via Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <br/>
        <h3>Message/Requirements:</h3>
        <p>${message}</p>
      `,
    };

    // 2. Only add the "replyTo" function if they actually typed an email
    if (email && email.trim() !== "") {
      payload.replyTo = email;
    }

    // 3. Send the email
    const data = await resend.emails.send(payload);

    return NextResponse.json({ message: "Quote sent successfully", data }, { status: 200 });

  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}