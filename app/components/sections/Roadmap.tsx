"use client";

import { useRef } from "react";

const milestones = [
  {
    phase: "Phase 1",
    title: "Event Creation",
    desc: "Create neighbourhood and club events with RSVPs and reminders.",
  },
  {
    phase: "Phase 2",
    title: "Direct Messaging",
    desc: "Secure messaging between verified neighbours and moderators.",
  },
  {
    phase: "Phase 3",
    title: "SOS Feature",
    desc: "Emergency alerts sent instantly to nearby trusted residents.",
  },
  {
    phase: "Phase 4",
    title: "Fundraisers & Appeals",
    desc: "Raise support for neighbours, causes and community projects.",
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

      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl font-light text-[#344E41] mb-4">
          Product roadmap
        </h2>

        <p className="text-[#6B7280] max-w-xl mx-auto">
          Kinjo is evolving into the trusted digital infrastructure
          for neighbourhoods, clubs, and local communities.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* timeline */}
        <div className="absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A3B18A] to-transparent"></div>

        {/* slider */}
        <div
          ref={slider}
          className="flex gap-12 overflow-x-auto px-6 pb-10 scroll-smooth no-scrollbar"
        >
          {milestones.map((m, i) => (
            <div key={i} className="relative min-w-[360px]">

              {/* timeline node */}
              <div className="absolute -top-6 left-8 w-4 h-4 rounded-full bg-[#344E41] shadow-md"></div>

              <div className="bg-white border border-[#E5E7EB] rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

                <div className="text-xs uppercase tracking-wider text-[#A3B18A] mb-4">
                  {m.phase}
                </div>

                <h3 className="text-2xl font-medium text-[#344E41] mb-4">
                  {m.title}
                </h3>

                <p className="text-[#6B7280] leading-relaxed">
                  {m.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* navigation */}
        <div className="flex justify-center gap-6 mt-12">

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