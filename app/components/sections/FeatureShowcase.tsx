"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Store, Bell, Megaphone } from "lucide-react";

const cards = [
{
title: "Neighbourhood Marketplace",
desc: "Buy and sell safely with people who actually live in your community.",
image: "/mock-1.png",
icon: Store,
},
{
title: "Community Noticeboard",
desc: "Structured updates, events and announcements in one organised space.",
image: "/mock-2.png",
icon: Megaphone,
},
{
title: "Safety & Local Alerts",
desc: "Receive trusted real-time alerts from neighbours and moderators.",
image: "/mock-3.png",
icon: Bell,
},
];

export default function FeatureShowcase() {
const [index, setIndex] = useState(0);
const [mouse, setMouse] = useState({ x: 0, y: 0 });

const next = () => {
setIndex((prev) => (prev + 1) % cards.length);
};

const prev = () => {
setIndex((prev) => (prev - 1 + cards.length) % cards.length);
};

useEffect(() => {
const interval = setInterval(next, 4500);
return () => clearInterval(interval);
}, []);

useEffect(() => {
const handleMouseMove = (e: MouseEvent) => {
const x = (e.clientX / window.innerWidth - 0.5) * 20;
const y = (e.clientY / window.innerHeight - 0.5) * 20;
setMouse({ x, y });
};


window.addEventListener("mousemove", handleMouseMove);

return () => window.removeEventListener("mousemove", handleMouseMove);


}, []);

return ( <section className="relative py-32 bg-white overflow-hidden">


  {/* ambient particles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-2 h-2 bg-[#A3B18A]/40 rounded-full top-20 left-[15%] animate-pulse"></div>
    <div className="absolute w-3 h-3 bg-[#A3B18A]/30 rounded-full top-[40%] left-[75%] animate-pulse"></div>
    <div className="absolute w-2 h-2 bg-[#A3B18A]/40 rounded-full top-[65%] left-[25%] animate-pulse"></div>
    <div className="absolute w-3 h-3 bg-[#A3B18A]/30 rounded-full top-[30%] left-[50%] animate-pulse"></div>
    <div className="absolute w-2 h-2 bg-[#A3B18A]/40 rounded-full top-[70%] left-[80%] animate-pulse"></div>
  </div>

  {/* background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#A3B18A]/10 blur-3xl rounded-full"></div>

  <div className="max-w-6xl mx-auto px-6 text-center mb-20">

    <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-6">
      Designed for real communities
    </h2>

    <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
      Kinjo replaces chaotic chat groups with structured tools built
      specifically for neighbourhood life.
    </p>

  </div>

  {/* carousel */}
  <div className="relative h-[460px] flex items-center justify-center">

    {cards.map((card, i) => {
      const offset = (i - index + cards.length) % cards.length;

      let position = "";

      if (offset === 0)
        position = "z-30 scale-100 translate-x-0 rotate-0";
      else if (offset === 1)
        position = "z-20 scale-90 translate-x-60 rotate-6 opacity-60";
      else
        position = "z-10 scale-90 -translate-x-60 -rotate-6 opacity-60";

      const Icon = card.icon;

      return (
        <div
          key={i}
          className={`absolute transition-all duration-700 ease-in-out ${position}`}
          style={{
            transform: `translate(${mouse.x * (offset === 0 ? 1 : 0.6)}px, ${
              mouse.y * (offset === 0 ? 1 : 0.6)
            }px)`,
          }}
        >
          <div className="flex flex-col items-center">

            {/* title */}
            <div className="flex items-center gap-2 mb-6">

              <div className="w-9 h-9 rounded-full bg-[#344E41] text-white flex items-center justify-center shadow-md">
                <Icon size={16} />
              </div>

              <h3 className="text-xl font-semibold text-[#344E41]">
                {card.title}
              </h3>

            </div>

            {/* phone */}
            <div className="relative w-[240px] h-[470px] bg-black rounded-[38px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-[9px]">

              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-white">

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* glass highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none"></div>

                {/* reflection sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute -left-[120%] top-0 w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 animate-[shine_6s_linear_infinite]"></div>
                </div>

              </div>

              {/* notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full"></div>

            </div>

            <p className="text-[#6B7280] text-center max-w-xs mt-6 leading-relaxed">
              {card.desc}
            </p>

          </div>
        </div>
      );
    })}

  </div>

  {/* navigation */}
  <div className="flex justify-center gap-6 mt-20">

    <button
      onClick={prev}
      className="px-6 py-2 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
    >
      ←
    </button>

    <button
      onClick={next}
      className="px-6 py-2 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
    >
      →
    </button>

  </div>

  {/* animation style */}
  <style jsx>{`
    @keyframes shine {
      0% {
        transform: translateX(0) rotate(12deg);
      }
      100% {
        transform: translateX(500%) rotate(12deg);
      }
    }
  `}</style>

</section>


);
}
