"use client";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!email.includes("@") || !suburb.trim()) return;
    setSubmitted(true);
    setEmail("");
    setSuburb("");
  }

  return (
    <section className="py-28 bg-[#1A2B22] text-white px-6 text-center">
      <div className="max-w-xl mx-auto">

        <h2 className="text-4xl font-serif mb-6">
          Bring Kinjo to your street.
        </h2>

        <p className="text-gray-300 mb-10">
          Join the waitlist and be notified when your suburb launches.
        </p>

        <div className="space-y-4">

          <input
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            placeholder="Your suburb"
            className="w-full p-3 rounded 
                       bg-[#F0F4EC] 
                       text-[#344E41] 
                       placeholder:text-[#6B7280]
                       border border-[#A3B18A]/40
                       focus:outline-none 
                       focus:ring-2 
                       focus:ring-[#A3B18A]"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full p-3 rounded 
                       bg-[#F0F4EC] 
                       text-[#344E41] 
                       placeholder:text-[#6B7280]
                       border border-[#A3B18A]/40
                       focus:outline-none 
                       focus:ring-2 
                       focus:ring-[#A3B18A]"
          />

          <button
            onClick={handleSubmit}
            className={`w-full p-3 rounded font-medium transition ${
              submitted
                ? "bg-[#A3B18A] text-[#344E41]"
                : "bg-[#A3B18A] text-[#344E41] hover:opacity-90"
            }`}
          >
            {submitted ? "You're on the list" : "Request Access"}
          </button>

        </div>

      </div>
    </section>
  );
}
