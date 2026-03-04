"use client";

"use client";

import { useState, useEffect } from "react";

export default function Founding() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [claimedCount, setClaimedCount] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    suburb: "",
    motivation: "",
  });

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch("/api/suburb-count");
      const data = await res.json();
      setClaimedCount(data.count);
    }

    fetchCount();
  }, []);  

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

      const data = await res.json();

      if (res.status === 409) {
        alert("This suburb has already been claimed. You can still join the waitlist.");
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

        {/* Copy */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
            Founding Member
          </p>

          <h2 className="text-4xl font-serif text-[#344E41] mb-6">
            Claim Kinjo for your suburb
          </h2>

          <p className="text-sm text-[#344E41] mb-4">
            Only one founding member is selected per suburb.
          </p>

          {claimedCount !== null && (
          <p className="text-xs text-[#A3B18A] mb-4">
          ⚡ {claimedCount} suburbs already claimed
          </p>
      )}

          <p className="text-gray-600 mb-4">
            Become a founding member and help shape the first trusted
            neighbourhood platform in your area.
          </p>

          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Early access</li>
            <li>• Influence community rules</li>
            <li>• Priority verification badge</li>
          </ul>
        </div>

        {/* Form */}
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
            placeholder="Why do you want to launch Kinjo in your suburb? (e.g. Our neighbourhood relies on messy WhatsApp groups and I’d like to help build a trusted local network.)"
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