import { supabase } from "@/lib/supabase";

export async function GET() {

const { data } = await supabase
.from("space_claims")
.select("space_name, space_type, created_at")
.order("created_at", { ascending: false })
.limit(5);

if (!data) {
return Response.json([]);
}

const activity = data.map((row) => {

if (row.space_type === "suburb") {
  return `${row.space_name} suburb claimed`;
}

if (row.space_type === "club") {
  return `${row.space_name} club requested`;
}

if (row.space_type === "organisation") {
  return `${row.space_name} organisation joined`;
}

return `${row.space_name} joined`;
});

return Response.json(activity);
}
