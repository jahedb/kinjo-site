"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Community Marketplace",
    desc: "Buy and sell safely within your community.",
    image: "/mock-1.png",
  },
  {
    title: "Community Noticeboard",
    desc: "Structured updates, not chaotic chat groups.",
    image: "/mock-2.png",
  },
  {
    title: "Community Alerts",
    desc: "Real-time safety notifications.",
    image: "/mock-3.png",
  },
];

export default function FeatureShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-semibold text-[#344E41] mb-4">
          Built for real communities
        </h2>
        <p className="text-[#6B7280] max-w-xl mx-auto">
          Structured. Private. Invite-only.
        </p>
      </div>

      <div className="relative h-[420px] flex items-center justify-center">
        {cards.map((card, i) => {
          const offset = (i - index + cards.length) % cards.length;

          let position = "";
          if (offset === 0) position = "z-30 scale-100 translate-x-0 rotate-0";
          else if (offset === 1)
            position =
              "z-20 scale-90 translate-x-64 rotate-6 opacity-70";
          else
            position =
              "z-10 scale-90 -translate-x-64 -rotate-6 opacity-70";

          return (
            <div
              key={i}
              className={`absolute w-[340px] md:w-[420px] transition-all duration-700 ease-in-out ${position}`}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#D4E2C8]">
                <h3 className="text-2xl font-semibold text-[#344E41] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#6B7280] mb-6">{card.desc}</p>

                <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={prev}
          className="px-5 py-2 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="px-5 py-2 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
        >
          →
        </button>
      </div>
    </section>
  );
}