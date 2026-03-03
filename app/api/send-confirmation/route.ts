import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, suburb } = await req.json();

    await resend.emails.send({
      from: "Kinjo <onboarding@resend.dev>",
      to: email,
      subject: "You're on the Kinjo waitlist",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Welcome to Kinjo</h2>
          <p>Thanks for joining the private beta for <strong>${suburb}</strong>.</p>
          <p>We'll be in touch soon.</p>
          <br/>
          <p>— The Kinjo Team</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}