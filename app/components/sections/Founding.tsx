"use client";
import { useState } from "react";

export default function Founding() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    suburb: "",
  });

  function handleSubmit() {
    const valid = Object.values(form).every(v => v.trim());
    if (!valid) return;
    setSubmitted(true);
  }

  return (
    <section className="py-28 bg-[#F0F4EC] px-6">
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
            Become a founding member and help shape the first trusted neighbourhood platform in your area.
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
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Email"
            disabled={submitted}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Suburb"
            disabled={submitted}
            value={form.suburb}
            onChange={(e) => setForm({ ...form, suburb: e.target.value })}
            className="w-full border p-3 rounded"
          />

          <button
            onClick={handleSubmit}
            className={`w-full p-3 rounded text-white transition ${
              submitted
                ? "bg-[#A3B18A] text-[#344E41]"
                : "bg-[#344E41]"
            }`}
          >
            {submitted ? "Application received" : "Apply as Founding Member"}
          </button>

        </div>

      </div>
    </section>
  );
}
