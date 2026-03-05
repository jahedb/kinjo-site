"use client";

import { useState } from "react";
import { Users } from "lucide-react";

export default function ClaimClub() {
const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

const [form, setForm] = useState({
name: "",
email: "",
club: "",
motivation: "",
});

const handleSubmit = async () => {
const valid = Object.values(form).every((v) => v.trim());
if (!valid || loading) return;


try {
  setLoading(true);

  await fetch("/api/claim-club", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  setSubmitted(true);

  setForm({
    name: "",
    email: "",
    club: "",
    motivation: "",
  });
} catch (err) {
  console.error(err);
  alert("Something went wrong.");
} finally {
  setLoading(false);
}

};

return (
    <section id="" className="scroll-mt-24 py-32 bg-[#344E41] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
    {/* FORM LEFT */}
    <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
      <p className="text-xs uppercase tracking-widest text-[#A3B18A]">
        Club Founder
      </p>
      <h2 className="text-3xl font-serif text-[#344E41]">
        Claim your Club
      </h2>
      <input
        placeholder="Full Name"
        disabled={loading || submitted}
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full border p-3 rounded-lg"
      />

      <input
        placeholder="Email"
        disabled={loading || submitted}
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full border p-3 rounded-lg"
      />

      <input
        placeholder="Club Name"
        disabled={loading || submitted}
        value={form.club}
        onChange={(e) =>
          setForm({ ...form, club: e.target.value })
        }
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        placeholder="Tell us about your club"
        disabled={loading || submitted}
        value={form.motivation}
        onChange={(e) =>
          setForm({ ...form, motivation: e.target.value })
        }
        rows={4}
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={handleSubmit}
        disabled={loading || submitted}
        className="w-full bg-[#344E41] hover:bg-[#2f4438] text-white p-3 rounded-lg"
      >
        {submitted ? "Application received" : "Claim your Club"}
      </button>

      {submitted && (
        <p className="text-green-700 text-sm">
          Thanks — we will review your request soon.
        </p>
      )}

    </div>

    {/* CONTENT RIGHT */}
    <div className="text-white">

      <p className="text-xs uppercase tracking-widest text-[#A3B18A] mb-4">
        Local Clubs
      </p>

      <h2 className="text-4xl font-serif mb-6">
        Bring your club onto Kinjo
      </h2>

      <p className="max-w-md text-white/80 mb-8">
        Running clubs, sports teams, hobby groups and social clubs can use
        Kinjo to organise events, communicate with members and grow their
        local community.
      </p>

      <div className="space-y-4">

        <div className="flex gap-3 items-center">
          <Users size={20} />
          <span>Create a dedicated club space</span>
        </div>

        <div className="flex gap-3 items-center">
          <Users size={20} />
          <span>Organise events and meetups</span>
        </div>

        <div className="flex gap-3 items-center">
          <Users size={20} />
          <span>Communicate privately with members</span>
        </div>

        <div className="flex gap-3 items-center">
          <Users size={20} />
          <span>Grow your community</span>
        </div>

      </div>

      </div>

    </div>
  </section>
  );
}

