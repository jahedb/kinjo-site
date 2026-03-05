"use client";

import { useEffect, useState } from "react";
import {
Users,
ShieldCheck,
MapPin,
Bell,
AlertTriangle,
Shield,
} from "lucide-react";

/* ---------------------- APP SCREENS ---------------------- */

const screens = [
{
title:"Posts",
content:(

<div className="space-y-4 animate-fade-in">

<div className="flex items-center justify-between">
<p className="text-sm font-semibold text-[#344E41]">
Community Posts
</p>
<span className="text-xs text-gray-400">
2 new
</span>
</div>

<div className="bg-[#F7F9F6] rounded-xl p-3 shadow-sm">
<p className="text-sm font-medium text-[#344E41]">
Street clean-up this Saturday
</p>
<p className="text-xs text-gray-500">
Meet at the park entrance • 9AM
</p>
</div>

<div className="bg-[#F7F9F6] rounded-xl p-3 shadow-sm">
<p className="text-sm font-medium text-[#344E41]">
Neighbourhood braai
</p>
<p className="text-xs text-gray-500">
RSVP open • 14 neighbours attending
</p>
</div>

</div>
)
},

{
title:"Listings",
content:(

<div className="space-y-4 animate-fade-in">

<p className="text-sm font-semibold text-[#344E41]">
Marketplace
</p>

<div className="bg-[#F7F9F6] rounded-xl p-3 flex justify-between items-center">

<div>
<p className="text-sm font-medium text-[#344E41]">
Mountain Bike
</p>
<p className="text-xs text-gray-500">
Posted by Sarah
</p>
</div>

<p className="text-sm font-semibold text-[#344E41]">
R1,200
</p>

</div>

<div className="bg-[#F7F9F6] rounded-xl p-3 flex justify-between items-center">

<div>
<p className="text-sm font-medium text-[#344E41]">
Garden Service
</p>
<p className="text-xs text-gray-500">
Local home business
</p>
</div>

<span className="text-xs text-[#A3B18A] font-medium">
Recommended
</span>

</div>

</div>
)
},

{
title:"Announcements",
content:(

<div className="space-y-4 animate-fade-in">

<p className="text-sm font-semibold text-[#344E41]">
Noticeboard
</p>

<div className="bg-[#F7F9F6] rounded-xl p-4 shadow-sm">

<p className="text-sm font-medium text-[#344E41]">
Water maintenance
</p>

<p className="text-xs text-gray-500">
Scheduled outage tomorrow 10:00 – 12:00
</p>

</div>

<div className="bg-[#F7F9F6] rounded-xl p-4 shadow-sm">

<p className="text-sm font-medium text-[#344E41]">
School sports day
</p>

<p className="text-xs text-gray-500">
Saturday at Newlands field
</p>

</div>

</div>
)
},

{
title:"Alerts",
content:(

<div className="space-y-4 animate-fade-in">

<p className="text-sm font-semibold text-[#344E41]">
Safety Alerts
</p>

<div className="bg-[#FDECEC] rounded-xl p-3 flex gap-3 items-center animate-pulse">

<AlertTriangle size={18} className="text-red-600"/>

<div>

<p className="text-sm font-medium text-[#344E41]">
Suspicious activity reported
</p>

<p className="text-xs text-gray-500">
Oak Street • 10 minutes ago
</p>

</div>

</div>

<div className="bg-[#F7F9F6] rounded-xl p-3">

<p className="text-sm text-[#344E41]">
Power outage reported
</p>

<p className="text-xs text-gray-500">
Main Road • Eskom notice
</p>

</div>

</div>
)
},

{
title:"Emergency",
content:(

<div className="space-y-3 animate-fade-in">

<p className="text-sm font-semibold text-[#344E41]">
Emergency Contacts
</p>

<div className="bg-[#F7F9F6] rounded-xl p-3 flex justify-between">
<p className="text-sm text-[#344E41]">
Security
</p>
<span className="text-xs text-gray-400">
Call
</span>
</div>

<div className="bg-[#F7F9F6] rounded-xl p-3 flex justify-between">
<p className="text-sm text-[#344E41]">
Neighbourhood Watch
</p>
<span className="text-xs text-gray-400">
Call
</span>
</div>

<div className="bg-[#F7F9F6] rounded-xl p-3 flex justify-between">
<p className="text-sm text-[#344E41]">
Medical
</p>
<span className="text-xs text-gray-400">
Call
</span>
</div>

</div>
)
},

{
title:"Lost & Found",
content:(

<div className="space-y-4 animate-fade-in">

<p className="text-sm font-semibold text-[#344E41]">
Lost & Found
</p>

<div className="bg-[#F7F9F6] rounded-xl p-3">

<p className="text-sm font-medium text-[#344E41]">
Lost Cat
</p>

<p className="text-xs text-gray-500">
Seen near Main Road yesterday
</p>

</div>

<div className="bg-[#F7F9F6] rounded-xl p-3">

<p className="text-sm font-medium text-[#344E41]">
Found Keys
</p>

<p className="text-xs text-gray-500">
Blue keyring near park
</p>

</div>

</div>
)
},

{
title:"Secure",
content:(

<div className="flex flex-col items-center justify-center text-center gap-3 py-8 animate-fade-in">

<div className="w-10 h-10 rounded-full bg-[#F0F4EC] flex items-center justify-center">
<Shield size={20} className="text-[#344E41]"/>
</div>

<p className="text-sm font-medium text-[#344E41]">
Verified members only
</p>

<p className="text-xs text-gray-500 max-w-[160px]">
Every member is approved by your community moderator.
</p>

</div>
)
}

];

/* ---------------------- HERO COMPONENT ---------------------- */

export default function Hero(){

const [index,setIndex] = useState(0);
const [activity,setActivity] = useState<string[]>([]);
const [noteIndex,setNoteIndex] = useState(0);

/* rotate feature screens */

useEffect(()=>{
const interval=setInterval(()=>{
setIndex((i)=>(i+1)%screens.length);
},3500);
return()=>clearInterval(interval);
},[]);

/* load live activity */

useEffect(()=>{

async function load(){

try{

const res=await fetch("/api/activity");
const data=await res.json();

if(data?.length){
setActivity(data);
}

}catch(e){
console.error(e);
}

}

load();

},[]);

/* rotate notifications */

useEffect(()=>{

if(activity.length===0) return;

const i=setInterval(()=>{
setNoteIndex((n)=>(n+1)%activity.length);
},3000);

return()=>clearInterval(i);

},[activity]);

/* phone tilt */

const [tilt,setTilt]=useState({x:0,y:0});

const handleMove=(e:any)=>{

const rect=e.currentTarget.getBoundingClientRect();

const x=(e.clientY-rect.top)/rect.height-.5;
const y=(e.clientX-rect.left)/rect.width-.5;

setTilt({
x:x*12,
y:y*12
});

};

return(

<section className="relative bg-[#F0F4EC] pt-40 pb-32 overflow-hidden">

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[600px] bg-[#A3B18A]/20 blur-3xl rounded-full"></div>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

{/* LEFT CONTENT */}

<div>

<div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] px-4 py-2 rounded-full text-sm text-[#344E41] mb-8 shadow-sm">
<ShieldCheck size={16}/>
Invite-only neighbourhood communities
</div>

<h1 className="text-4xl md:text-[3.6rem] font-light tracking-tight text-[#344E41] leading-[1.05] mb-6">
The private network  
for real communities.
</h1>

<p className="text-lg text-[#6B7280] mb-8 max-w-xl leading-relaxed">
Kinjo connects verified neighbours, clubs and organisations in
trusted local networks — making it easy to share updates,
buy and sell safely, organise events and support your community.
</p>

<div className="flex gap-4 mb-10">

<a
href="#waitlist"
className="px-7 py-3 rounded-full bg-[#344E41] text-white hover:bg-[#2c4036] transition shadow-sm"

>

Request Access </a>

<a
href="#features"
className="px-7 py-3 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"

>

Explore Features </a>

</div>

<div className="flex items-center gap-6 text-sm text-[#6B7280]">

<div className="flex items-center gap-2">
<Users size={16}/>
Growing neighbourhood waitlist
</div>

<div className="flex items-center gap-2">
<MapPin size={16}/>
Launching suburb-by-suburb
</div>

</div>

</div>

{/* RIGHT PHONE */}

<div
className="relative flex justify-center"
onMouseMove={handleMove}
onMouseLeave={()=>setTilt({x:0,y:0})}
>

<div className="absolute w-[520px] h-[520px] bg-[#A3B18A] rounded-full blur-3xl opacity-25"></div>

<div
className="relative w-[300px] h-[620px] rounded-[46px] bg-[#0B0B0B] shadow-[0_40px_90px_rgba(0,0,0,0.35)] transition-transform duration-300"
style={{transform:`rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}
>

<div className="absolute inset-[6px] rounded-[40px] bg-black overflow-hidden">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-full flex items-center justify-center z-20">
<div className="w-[40px] h-[4px] bg-gray-800 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

<div className="absolute inset-0 bg-white pt-12 px-4 pb-4">

<div className="flex items-center justify-between mb-4 text-xs text-gray-500">
<span>Kinjo • Newlands</span>
<span className="text-[#A3B18A] font-medium">Verified</span>
</div>

<div className="transition-all duration-500">
{screens[index].content}
</div>

</div>

</div>

</div>

{/* LIVE ACTIVITY BUBBLE */}

{activity.length > 0 && (

<div className="hidden md:flex absolute -right-44 top-28 w-[180px] bg-white rounded-xl shadow-lg border border-[#E5E7EB] px-3 py-2 text-xs gap-2 items-start animate-fade-in">

<Bell size={14} className="mt-[2px] flex-shrink-0"/>

<p className="leading-snug text-[#344E41] break-words">
{activity[noteIndex]}
</p>
<div className="absolute left-[-6px] top-4 w-3 h-3 bg-white border-l border-b border-[#E5E7EB] rotate-45"></div>
</div>

)}

</div>

</div>

</section>
);
}
