import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data, error } = await supabase
    .from("suburb_growth")
    .select("suburb");

  if (error) {
    console.error(error);
    return Response.json([]);
  }

  const counts: Record<string, number> = {};

  data.forEach((row) => {
    counts[row.suburb] = (counts[row.suburb] || 0) + 1;
  });

  const leaderboard = Object.entries(counts)
    .map(([suburb, count]) => ({ suburb, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  return Response.json(leaderboard);
}