"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email || !suburb || loading) return;

    setLoading(true);
    setErrorMsg("");

    try {

      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, suburb }]);

      if (error) {

        // duplicate email
        if (error.code === "23505") {
          setErrorMsg("This email is already on the waitlist.");
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }

        setLoading(false);
        return;
      }

      // send confirmation email
      await fetch("/api/send-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, suburb }),
      });

      // suburb growth leaderboard
      await fetch("/api/join-suburb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          suburb: suburb.toLowerCase().trim(),
        }),
      });

      setSuccess(true);
      setEmail("");
      setSuburb("");

    } catch (err) {

      console.error(err);
      setErrorMsg("Submission failed. Please try again.");

    }

    setLoading(false);
  };

  return (
    <section
      id="waitlist"
      className="scroll-mt-24 py-28 bg-[#1A2B22] text-white px-6 text-center"
    >
      <div className="max-w-xl mx-auto">

        <h2 className="text-4xl font-serif mb-6">
          Bring Kinjo to your community.
        </h2>

        <p className="text-gray-300 mb-10">
          Join the waitlist and be notified when your space launches.
        </p>

        <div className="space-y-4">

          <input
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            placeholder="Your suburb"
            className="w-full p-3 rounded bg-[#F0F4EC] text-[#344E41] placeholder:text-[#6B7280] border border-[#A3B18A]/40 focus:outline-none focus:ring-2 focus:ring-[#A3B18A]"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full p-3 rounded bg-[#F0F4EC] text-[#344E41] placeholder:text-[#6B7280] border border-[#A3B18A]/40 focus:outline-none focus:ring-2 focus:ring-[#A3B18A]"
          />

          <button
            onClick={handleSubmit}
            disabled={success || loading}
            className={`px-6 py-3 rounded-full transition ${
              success
                ? "bg-[#A3B18A] text-white cursor-not-allowed"
                : "bg-[#344E41] text-white hover:bg-[#2c4036]"
            }`}
          >
            {loading
              ? "Submitting..."
              : success
              ? "Joined ✓"
              : "Request Access"}
          </button>

          {errorMsg && (
            <p className="text-red-300 text-sm mt-2">
              {errorMsg}
            </p>
          )}

        </div>

      </div>
    </section>
  );
}