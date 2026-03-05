"use client";

import { useState } from "react";
import { Users } from "lucide-react";

type Props = {
id: string;
title: string;
label: string;
entityName: string;
apiRoute: string;
background: string;
formLeft?: boolean;
};

export default function ClaimEntity({
id,
title,
label,
entityName,
apiRoute,
background,
formLeft = false,
}: Props) {

const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

const [form, setForm] = useState({
name: "",
email: "",
entity: "",
motivation: "",
});

const handleSubmit = async () => {

const valid = Object.values(form).every((v) => v.trim());
if (!valid || loading) return;
try {

  setLoading(true);

  await fetch(apiRoute, {
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
    entity: "",
    motivation: "",
  });

} catch (err) {

  console.error(err);
  alert("Something went wrong.");

} finally {

  setLoading(false);

}

};

const formComponent = (

<div className="relative group">

  {/* subtle glow behind card */}
  <div className="absolute inset-0 bg-[#A3B18A]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative bg-white border border-[#A3B18A]/30 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 space-y-4">

    {/* Green pill */}
    <div className="absolute -top-3 left-6 bg-[#2F463A] text-white text-xs px-3 py-1 rounded-full tracking-wide">
      {label}
    </div>

    <h2 className="text-3xl font-serif text-[#344E41]">
      {title}
    </h2>

    <input
      placeholder="Full Name"
      disabled={loading || submitted}
      value={form.name}
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3B18A]/40"
    />

    <input
      placeholder="Email"
      disabled={loading || submitted}
      value={form.email}
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3B18A]/40"
    />

    <input
      placeholder={entityName}
      disabled={loading || submitted}
      value={form.entity}
      onChange={(e) =>
        setForm({ ...form, entity: e.target.value })
      }
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3B18A]/40"
    />

    <textarea
      placeholder={`Tell us about your ${entityName.toLowerCase()}`}
      disabled={loading || submitted}
      value={form.motivation}
      onChange={(e) =>
        setForm({ ...form, motivation: e.target.value })
      }
      rows={4}
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3B18A]/40"
    />

    <button
      onClick={handleSubmit}
      disabled={loading || submitted}
      className="w-full p-3 rounded-lg bg-[#344E41] hover:bg-[#2f4438] text-white font-medium transition"
    >
      {submitted ? "Application received" : `Claim your ${entityName}`}
    </button>

    {submitted && (
      <p className="text-green-700 text-sm">
        Thanks — we will review your request soon.
      </p>
    )}

  </div>

</div>
);

const isDark = background.includes("#344E41");

const contentComponent = (
<div className={isDark ? "text-white" : "text-[#344E41]"}>

  <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
    {entityName}
  </p>

  <h2 className="text-4xl md:text-5xl font-serif mb-6">
    Claim Kinjo for your {entityName.toLowerCase()}
  </h2>

  <p className={`max-w-md mb-8 ${isDark ? "text-white/80" : "text-[#344E41]/80"}`}>
    Kinjo helps local communities connect through trusted neighbourhood
    networks, events and announcements.
  </p>

  <div className="space-y-4">

    <div className="flex gap-3 items-center">
      <Users size={20} />
      <p>Create a dedicated community space</p>
    </div>

    <div className="flex gap-3 items-center">
      <Users size={20} />
      <p>Organise events and meetups</p>
    </div>

    <div className="flex gap-3 items-center">
      <Users size={20} />
      <p>Communicate privately with members</p>
    </div>

    <div className="flex gap-3 items-center">
      <Users size={20} />
      <p>Grow your local network</p>
    </div>

  </div>

</div>


);

return (
<section
id={id}
className={`scroll-mt-24 py-32 px-6 ${background}`}
> <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">


    {formLeft ? (
      <>
        {formComponent}
        {contentComponent}
      </>
    ) : (
      <>
        {contentComponent}
        {formComponent}
      </>
    )}

  </div>
</section>
);
}
