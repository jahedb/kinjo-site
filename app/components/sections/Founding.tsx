"use client";

import { useState, useEffect } from "react";
import { MapPin, Users } from "lucide-react";

export default function Founding() {
const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [claimedCount, setClaimedCount] = useState<number | null>(null);
const [displayCount, setDisplayCount] = useState(0);

const [form, setForm] = useState({
name: "",
email: "",
suburb: "",
motivation: "",
});

// Fetch claimed suburb count
useEffect(() => {
async function fetchCount() {
const res = await fetch("/api/suburb-count");
const data = await res.json();
setClaimedCount(data.count);
}

fetchCount();
}, []);

// Animate number count
useEffect(() => {
if (claimedCount === null) return;
let start = 0;
const duration = 800;
const increment = claimedCount / (duration / 16);

const timer = setInterval(() => {
  start += increment;

  if (start >= claimedCount) {
    setDisplayCount(claimedCount);
    clearInterval(timer);
  } else {
    setDisplayCount(Math.floor(start));
  }
}, 16);

return () => clearInterval(timer);

}, [claimedCount]);

const handleSubmit = async () => {
const valid = Object.values(form).every((v) => v.trim());
if (!valid || loading) return;

try {
  setLoading(true);

  const res = await fetch("/api/claim-suburb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (res.status === 409) {
    alert(
      "This suburb has already been claimed. You can still join the waitlist."
    );
    return;
  }

  setSubmitted(true);

  setForm({
    name: "",
    email: "",
    suburb: "",
    motivation: "",
  });
} catch (err) {
  console.error(err);
  alert("Something went wrong.");
} finally {
  setLoading(false);
}


};

return ( <section id="founding" className="scroll-mt-24 py-32 bg-[#F0F4EC] px-6"> <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

    {/* LEFT COLUMN */}
    <div>

      <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
        Founding Member
      </p>

      <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-6 leading-tight">
        Claim Kinjo for your suburb
      </h2>

      <p className="text-base text-[#344E41] mb-8 max-w-md">
        One founding member is selected per suburb to help launch Kinjo and
        establish a trusted local community.
      </p>

      {claimedCount !== null && (
        <div className="grid grid-cols-2 gap-5 mb-10">

          {/* Suburbs Claimed */}
          <div className="bg-white border border-[#D4E2C8] rounded-xl p-5 shadow-sm flex items-center gap-4">
            <MapPin className="text-[#344E41]" size={26} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Suburbs Claimed
              </p>
              <p className="text-2xl font-semibold text-[#344E41]">
                {displayCount}+
              </p>
            </div>
          </div>

          {/* Founding Members */}
          <div className="bg-white border border-[#D4E2C8] rounded-xl p-5 shadow-sm flex items-center gap-4">
            <Users className="text-[#344E41]" size={26} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Founding Members
              </p>
              <p className="text-2xl font-semibold text-[#344E41]">
                {displayCount}+
              </p>
            </div>
          </div>

        </div>
      )}

      {/* COPY */}
      <div className="space-y-5 text-sm text-[#344E41] leading-relaxed max-w-lg">

        <p>
          Founding Members help bring Kinjo to their neighbourhood. You'll
          be the first verified resident in your suburb and help shape the
          foundation of a trusted local network.
        </p>

        <p>
          Instead of fragmented WhatsApp groups and anonymous marketplaces,
          Kinjo provides a structured, private space where neighbours can
          connect, share updates, recommend services, and support each
          other.
        </p>

        <div className="pt-4">

          <p className="font-semibold text-[#344E41] mb-3">
            Founding members receive:
          </p>

          <ul className="space-y-3">

            <li className="flex gap-3">
              <span className="text-[#A3B18A] font-bold">✓</span>
              Founding member badge in your suburb
            </li>

            <li className="flex gap-3">
              <span className="text-[#A3B18A] font-bold">✓</span>
              Early access to all Kinjo features
            </li>

            <li className="flex gap-3">
              <span className="text-[#A3B18A] font-bold">✓</span>
              Influence over community guidelines
            </li>

            <li className="flex gap-3">
              <span className="text-[#A3B18A] font-bold">✓</span>
              Ability to invite the first neighbours
            </li>

            <li className="flex gap-3">
              <span className="text-[#A3B18A] font-bold">✓</span>
              Recognition as the founding community leader
            </li>

          </ul>

        </div>

      </div>

    </div>


    {/* RIGHT COLUMN — FORM */}
    <div className="relative bg-white border border-[#A3B18A]/30 p-8 rounded-xl shadow-sm space-y-4 md:sticky md:top-28">

      {/* Ribbon */}
      <div className="absolute -top-3 left-6 bg-[#344E41] text-white text-xs px-3 py-1 rounded-full tracking-wide">
        Founder Application
      </div>

      <input
        placeholder="Full Name"
        disabled={loading || submitted}
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <input
        placeholder="Email"
        disabled={loading || submitted}
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <input
        placeholder="Suburb"
        disabled={loading || submitted}
        value={form.suburb}
        onChange={(e) =>
          setForm({ ...form, suburb: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <textarea
        placeholder="Why do you want to launch Kinjo in your suburb?"
        disabled={loading || submitted}
        value={form.motivation}
        onChange={(e) =>
          setForm({ ...form, motivation: e.target.value })
        }
        rows={4}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <button
        onClick={handleSubmit}
        disabled={loading || submitted}
        className={`w-full p-3 rounded-lg text-white transition font-medium ${
          submitted
            ? "bg-[#A3B18A] text-[#344E41]"
            : loading
            ? "bg-gray-400"
            : "bg-[#344E41] hover:bg-[#2f4438]"
        }`}
      >
        {submitted
          ? "Application received"
          : loading
          ? "Submitting..."
          : "Apply as Founding Member"}
      </button>

      {submitted && (
        <p className="text-green-700 text-sm">
          Thanks — we'll review your application and contact you soon.
        </p>
      )}

    </div>

  </div>
</section>

);
}
