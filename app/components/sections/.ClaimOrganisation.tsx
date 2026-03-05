"use client";

import { useState } from "react";
import { Users } from "lucide-react";

export default function ClaimOrganisation() {

const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

const [form, setForm] = useState({
name: "",
email: "",
organisation: "",
motivation: "",
});

const handleSubmit = async () => {

const valid = Object.values(form).every((v) => v.trim());
if (!valid || loading) return;

try {

setLoading(true);

const res = await fetch("/api/claim-organisation", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});

if (!res.ok) {
alert("Something went wrong.");
return;
}

setSubmitted(true);

setForm({
name: "",
email: "",
organisation: "",
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

<section id="claim-organisation" className="scroll-mt-24 py-32 bg-[#F0F4EC] px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

{/* LEFT CONTENT */}

<div>

<p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
Local Organisations
</p>

<h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-6">
Claim your Organisation
</h2>

<p className="text-[#344E41] max-w-md mb-8">
Neighbourhood watches, charities, residents associations and community
groups can use Kinjo to connect with their local communities.
</p>

<div className="space-y-4 text-[#344E41]">

<div className="flex gap-3">
<Users size={20} />
<p>Reach residents in your area</p>
</div>

<div className="flex gap-3">
<Users size={20} />
<p>Share announcements and updates</p>
</div>

<div className="flex gap-3">
<Users size={20} />
<p>Coordinate community initiatives</p>
</div>

<div className="flex gap-3">
<Users size={20} />
<p>Build stronger neighbourhood connections</p>
</div>

</div>

</div>

{/* RIGHT FORM */}

<div className="bg-white border border-[#A3B18A]/30 p-8 rounded-xl shadow-sm space-y-4">

<div className="text-xs tracking-widest uppercase text-[#A3B18A] mb-2">
Organisation Leader
</div>

<input
placeholder="Full Name"
disabled={loading || submitted}
value={form.name}
onC
