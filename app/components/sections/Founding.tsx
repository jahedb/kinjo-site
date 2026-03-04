"use client";

import { useState } from "react";

export default function Founding() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    suburb: "",
  });

  const handleSubmit = async () => {
    const valid = Object.values(form).every((v) => v.trim());
    if (!valid || loading || submitted) return;

    try {
      setLoading(true);

      const res = await fetch("/api/founding-member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="founding"
      className="scroll-mt-24 py-28 bg-[#F0F4EC] px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Copy Side */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
            Founding Member
          </p>

          <h2 className="text-4xl font-serif text-[#344E41] mb-6">
            Launch Kinjo in your suburb.
          </h2>

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

        {/* Form Side */}
        <div className="bg-white border border-[#A3B18A]/30 p-8 rounded-lg shadow-sm space-y-4">

          <input
            placeholder="Full Name"
            disabled={submitted}
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            placeholder="Email"
            disabled={submitted}
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            placeholder="Suburb"
            disabled={submitted}
            value={form.suburb}
            onChange={(e) =>
              setForm({ ...form, suburb: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded"
          />

          <button
            onClick={handleSubmit}
            disabled={loading || submitted}
            className={`w-full p-3 rounded text-white transition ${
              submitted
                ? "bg-[#A3B18A] text-[#344E41] cursor-default"
                : loading
                ? "bg-gray-400 cursor-wait"
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
            <p className="text-sm text-green-700 mt-2">
              Thank you. We'll review your request and contact you soon.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}