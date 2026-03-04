import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, suburb, motivation } = body;

    const { error } = await supabase
      .from("founding_members")
      .insert([{ name, email, suburb, motivation }]);

    if (error) {
      console.error(error);
      return Response.json({ error: "Insert failed" }, { status: 400 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}