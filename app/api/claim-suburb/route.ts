import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
try {


const body = await req.json();

const {
  name,
  email,
  suburb,
  entity,
  motivation,
  space_type
} = body;

// Support both suburb form and entity forms
const spaceName = suburb || entity;

if (!name || !email || !spaceName) {
  return Response.json(
    { error: "Missing required fields" },
    { status: 400 }
  );
}

const { error } = await supabase
  .from("space_claims")
  .insert([
    {
      space_name: spaceName.toLowerCase(),
      space_type: space_type || "suburb",
      claimer_name: name,
      claimer_email: email,
      motivation,
    },
  ]);

if (error) {

  if (error.code === "23505") {
    return Response.json(
      { error: "Space already claimed" },
      { status: 409 }
    );
  }

  console.error(error);

  return Response.json(
    { error: "Insert failed" },
    { status: 400 }
  );
}

return Response.json({ success: true });


} catch (err) {


console.error(err);

return Response.json(
  { error: "Server error" },
  { status: 500 }
);


}
}
