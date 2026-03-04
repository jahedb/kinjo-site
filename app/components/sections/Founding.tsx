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

  return (
    <section id="founding" className="scroll-mt-24 py-28 bg-[#F0F4EC] px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN */}
        <div>

          <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
            Founding Member
          </p>

          <h2 className="text-4xl font-serif text-[#344E41] mb-6">
            Claim Kinjo for your suburb
          </h2>

          <p className="text-sm text-[#344E41] mb-6">
            Only one founding member is selected per suburb.
          </p>

          {claimedCount !== null && (
            <div className="grid grid-cols-2 gap-4 mb-6">

              {/* Suburbs Claimed */}
              <div className="bg-white border border-[#D4E2C8] rounded-xl p-4 shadow-sm flex items-center gap-3">
                <MapPin className="text-[#344E41]" size={22} />
                <div>
                  <p className="text-xs text-gray-500">Suburbs Claimed</p>
                  <p className="text-lg font-semibold text-[#344E41]">
                    {displayCount}+
                  </p>
                </div>
              </div>

              {/* Founding Members */}
              <div className="bg-white border border-[#D4E2C8] rounded-xl p-4 shadow-sm flex items-center gap-3">
                <Users className="text-[#344E41]" size={22} />
                <div>
                  <p className="text-xs text-gray-500">Founding Members</p>
                  <p className="text-lg font-semibold text-[#344E41]">
                    {displayCount}+
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* RIGHT COLUMN — FORM */}
        <div className="bg-white border border-[#A3B18A]/30 p-8 rounded-lg shadow-sm space-y-4">

          <input
            placeholder="Full Name"
            disabled={loading || submitted}
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            placeholder="Email"
            disabled={loading || submitted}
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            placeholder="Suburb"
            disabled={loading || submitted}
            value={form.suburb}
            onChange={(e) =>
              setForm({ ...form, suburb: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded"
          />

          <textarea
            placeholder="Why do you want to launch Kinjo in your suburb?"
            disabled={loading || submitted}
            value={form.motivation}
            onChange={(e) =>
              setForm({ ...form, motivation: e.target.value })
            }
            rows={4}
            className="w-full border border-gray-300 p-3 rounded"
          />

          <button
            onClick={handleSubmit}
            disabled={loading || submitted}
            className={`w-full p-3 rounded text-white transition ${
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
              ? "Sending..."
              : "Apply as Founding Member"}
          </button>

          {submitted && (
            <p className="text-green-700 text-sm">
              Thanks — we’ll review your application and contact you soon.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}