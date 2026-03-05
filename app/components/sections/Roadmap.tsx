"use client";

import { useRef } from "react";
import {
Calendar,
MessageCircle,
ShieldAlert,
HeartHandshake
} from "lucide-react";

const milestones = [
{
phase: "Phase 1",
title: "Event Creation",
desc: "Create neighbourhood and club events with RSVPs, reminders and community calendars.",
icon: Calendar
},
{
phase: "Phase 2",
title: "Direct Messaging",
desc: "Secure messaging between verified neighbours, moderators and trusted groups.",
icon: MessageCircle
},
{
phase: "Phase 3",
title: "SOS Feature",
desc: "Emergency alerts sent instantly to nearby trusted residents during critical situations.",
icon: ShieldAlert
},
{
phase: "Phase 4",
title: "Fundraisers & Appeals",
desc: "Raise support for neighbours, causes and local community projects.",
icon: HeartHandshake
},
];

export default function Roadmap() {

const slider = useRef<HTMLDivElement>(null);

const scroll = (dir: "left" | "right") => {
if (!slider.current) return;

slider.current.scrollBy({
  left: dir === "left" ? -420 : 420,
  behavior: "smooth",
});

};

return (

<section className="py-32 bg-[#F4F7F2] overflow-hidden">

  {/* header */}
  <div className="max-w-6xl mx-auto px-6 text-center mb-24">

    <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
      Product Vision
    </p>

    <h2 className="text-5xl md:text-6xl font-serif text-[#344E41] mb-6">
      The future of local communities
    </h2>

    <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
      Kinjo is evolving into the trusted digital infrastructure for
      neighbourhoods, clubs and organisations — combining safety,
      communication and local commerce into a single platform.
    </p>

  </div>

  <div className="relative max-w-6xl mx-auto">

    {/* timeline */}
    <div className="absolute top-28 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A3B18A] to-transparent"></div>

    {/* milestones */}
    <div
      ref={slider}
      className="flex gap-10 overflow-x-auto px-6 pb-10 scroll-smooth no-scrollbar"
    >

      {milestones.map((m, i) => {

        const Icon = m.icon;

        return (

          <div key={i} className="relative min-w-[360px] group">

            {/* timeline node */}
            <div className="absolute -top-6 left-10 w-4 h-4 rounded-full bg-[#344E41] shadow-lg ring-4 ring-[#F4F7F2]"></div>

            {/* card */}
            <div className="relative bg-white border border-[#E5E7EB] rounded-3xl p-10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#A3B18A]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>

              {/* icon */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#A3B18A]/15 text-[#344E41]">

                <Icon size={22} strokeWidth={2} />

              </div>

              {/* phase badge */}
              <div className="text-xs uppercase tracking-wider text-[#A3B18A] mb-4">
                {m.phase}
              </div>

              {/* title */}
              <h3 className="text-2xl font-semibold text-[#344E41] mb-4">
                {m.title}
              </h3>

              {/* description */}
              <p className="text-[#6B7280] leading-relaxed">
                {m.desc}
              </p>

            </div>

          </div>

        );
      })}

    </div>

    {/* navigation */}
    <div className="flex justify-center gap-6 mt-16">

      <button
        onClick={() => scroll("left")}
        className="w-12 h-12 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="w-12 h-12 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
      >
        →
      </button>

    </div>

  </div>

</section>

);
}