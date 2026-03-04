"use client";

import { useEffect, useState } from "react";
import { Trophy, Users, MapPin } from "lucide-react";

export default function SuburbLeaderboard() {

  const [suburbs, setSuburbs] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/suburb-leaderboard");
      const data = await res.json();
      setSuburbs(data);
    }

    load();
  }, []);

  return (
    <section className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-serif text-[#344E41] mb-4">
            Suburbs Launching on Kinjo
          </h2>

          <p className="text-gray-600">
            Invite neighbours to unlock your suburb.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {suburbs.map((s: any, i) => (

            <div
              key={s.suburb}
              className="border border-[#A3B18A]/30 rounded-lg p-6 bg-[#F0F4EC]"
            >

              <div className="flex items-center gap-2 mb-3 text-[#344E41]">

                {i === 0 ? (
                  <Trophy size={20} />
                ) : (
                  <MapPin size={20} />
                )}

                <span className="font-semibold capitalize">
                  {s.suburb}
                </span>

              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">

                <Users size={16} />

                {s.count} neighbours joined

              </div>

              <div className="w-full h-2 bg-gray-200 rounded">

                <div
                  className="h-2 bg-[#344E41] rounded"
                  style={{
                    width: `${(s.count / 20) * 100}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}