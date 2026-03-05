"use client";

import { useEffect, useState } from "react";
import { Trophy, Users, MapPin, Rocket, TrendingUp } from "lucide-react";

export default function SuburbLeaderboard() {

const [suburbs, setSuburbs] = useState<any[]>([]);
const [tickerIndex, setTickerIndex] = useState(0);

const LAUNCH_THRESHOLD = 20;

useEffect(() => {
async function load() {
const res = await fetch("/api/suburb-leaderboard");
const data = await res.json();
setSuburbs(data);
}

load();

}, []);

const tickerMessages = suburbs.map((s) => {
const remaining = LAUNCH_THRESHOLD - s.count;

if (s.count >= LAUNCH_THRESHOLD) {
  return `${s.suburb} community unlocked`;
}

if (remaining <= 3) {
  return `${s.suburb} is ${remaining} neighbour${remaining === 1 ? "" : "s"} away from launch`;
}

return `${s.count} neighbours joined ${s.suburb}`;

});

useEffect(() => {
if (!tickerMessages.length) return;

const interval = setInterval(() => {
  setTickerIndex((i) => (i + 1) % tickerMessages.length);
}, 3500);

return () => clearInterval(interval);

}, [tickerMessages.length]);

return ( <section className="py-32 bg-[#344E41] text-white overflow-hidden">

  <div className="max-w-6xl mx-auto px-6">

    {/* header */}
    <div className="text-center mb-12">

      <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
        Early Communities
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-6">
        Suburbs launching on Kinjo
      </h2>

      <p className="text-white/70 max-w-xl mx-auto mb-8">
        When a suburb reaches <span className="text-[#A3B18A] font-semibold">20 neighbours</span>,
        Kinjo unlocks and the community launches.
      </p>

      {/* live ticker */}
      {tickerMessages.length > 0 && (
        <div className="inline-flex items-center gap-2 bg-[#3F5A4E] border border-white/10 px-4 py-2 rounded-full text-sm text-[#A3B18A]">

          <TrendingUp size={16} />

          <span className="transition-all duration-500">
            {tickerMessages[tickerIndex]}
          </span>

        </div>
      )}

    </div>

    {/* leaderboard */}
    <div className="grid md:grid-cols-3 gap-6">

      {suburbs.map((s: any, i) => {

        const progress = Math.min((s.count / LAUNCH_THRESHOLD) * 100, 100);
        const launched = s.count >= LAUNCH_THRESHOLD;

        return (

          <div
            key={s.suburb}
            className="relative group bg-[#3F5A4E] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-[#A3B18A]/10 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>

            {/* suburb name */}
            <div className="flex items-center justify-between mb-4">

              <div className="flex items-center gap-2">

                {i === 0 ? (
                  <Trophy size={20} className="text-[#A3B18A]" />
                ) : (
                  <MapPin size={20} className="text-[#A3B18A]" />
                )}

                <span className="font-semibold capitalize text-lg">
                  {s.suburb}
                </span>

              </div>

              {launched ? (
                <span className="flex items-center gap-1 text-xs bg-[#A3B18A] text-[#344E41] px-2 py-1 rounded-full">
                  <Rocket size={12} />
                  Launching
                </span>
              ) : (
                i === 0 && (
                  <span className="text-xs bg-[#A3B18A] text-[#344E41] px-2 py-1 rounded-full">
                    Leading
                  </span>
                )
              )}

            </div>

            {/* join count */}
            <div className="flex items-center justify-between text-sm text-white/70 mb-4">

              <div className="flex items-center gap-2">
                <Users size={16} />
                {s.count} neighbours
              </div>

              <div className="text-[#A3B18A] font-medium">
                {Math.min(s.count, LAUNCH_THRESHOLD)} / {LAUNCH_THRESHOLD}
              </div>

            </div>

            {/* progress bar */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

              <div
                className={`h-2 rounded-full transition-all duration-700 ${
                  launched ? "bg-green-400" : "bg-[#A3B18A]"
                }`}
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            {/* launch message */}
            {launched && (
              <p className="mt-4 text-green-300 text-sm">
                ✔ Kinjo launching in this suburb
              </p>
            )}

          </div>

        );

      })}

    </div>

  </div>

</section>

);
}
