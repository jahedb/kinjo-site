import { supabase } from "@/lib/supabase";

export async function GET() {
  const { count, error } = await supabase
    .from("suburb_claims")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error(error);
    return Response.json({ count: 0 });
  }

  return Response.json({ count });
}