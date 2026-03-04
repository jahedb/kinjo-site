import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, suburb, motivation } = body;

    const { error } = await supabase
      .from("suburb_claims")
      .insert([
        {
          suburb: suburb.toLowerCase(),
          claimer_name: name,
          claimer_email: email,
          motivation,
        },
      ]);

    if (error) {
      if (error.code === "23505") {
        return Response.json(
          { error: "Suburb already claimed" },
          { status: 409 }
        );
      }

      console.error(error);
      return Response.json({ error: "Insert failed" }, { status: 400 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}