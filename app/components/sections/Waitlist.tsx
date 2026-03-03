"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  

  const handleSubmit = async () => {
  if (!email || !suburb) return;

  const { error } = await supabase
    .from("waitlist")
    .insert([{ email, suburb }]);

  if (!error) {
    setSuccess(true);
    setEmail("");
    setSuburb("");
  } else {
    console.error("Supabase error:", error);
    alert(error?.message);
    
  }
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
                       focus:outline-none 
                       focus:ring-2 
                       focus:ring-[#A3B18A]"
          />

          <button
  onClick={handleSubmit}
  disabled={success}
  className={`px-6 py-3 rounded-full transition ${
    success
      ? "bg-[#A3B18A] text-white cursor-not-allowed"
      : "bg-[#344E41] text-white hover:bg-[#2c4036]"
  }`}
>
  {success ? "Joined" : "Request Access"}
</button>

        </div>

      </div>
    </section>
  );
}
