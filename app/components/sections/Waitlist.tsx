"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !suburb || loading) return;

    setLoading(true);

    try {
      // insert into waitlist
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, suburb }]);

      if (error) {
        console.error("Supabase insert error:", error);
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

      // record suburb growth
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
      console.error("Submission failed:", err);
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