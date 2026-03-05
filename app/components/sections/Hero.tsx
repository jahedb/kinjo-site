"use client";

import { Users, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
return ( <section className="relative bg-[#F0F4EC] pt-40 pb-32 overflow-hidden">


  {/* subtle background gradients */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#A3B18A]/20 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center relative">

    {/* LEFT */}
    <div>

      {/* Trust pill */}
      <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] px-4 py-2 rounded-full text-sm text-[#344E41] mb-8 shadow-sm">

        <ShieldCheck size={16} />

        Invite-only neighbourhood communities

      </div>

      <h1 className="text-4xl md:text-[3.4rem] font-light tracking-tight text-[#344E41] leading-[1.1] mb-6">

        The private network  
        for real communities.

      </h1>

      <p className="text-lg text-[#6B7280] mb-6 max-w-xl leading-relaxed">

        Kinjo connects verified neighbours, clubs and organisations in
        trusted local networks — making it easy to share updates,
        buy and sell safely, organise events and support your community.

      </p>

      <p className="text-lg text-[#6B7280] mb-10 max-w-xl">

        No ads. No algorithms. No chaotic group chats.

      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 items-center mb-10">

        <a
          href="#waitlist"
          className="px-7 py-3 rounded-full bg-[#344E41] text-white hover:bg-[#2c4036] transition shadow-sm"
        >
          Request Access
        </a>

        <a
          href="#features"
          className="px-7 py-3 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
        >
          Explore Features
        </a>

      </div>

      {/* social proof */}
      <div className="flex items-center gap-6 text-sm text-[#6B7280]">

        <div className="flex items-center gap-2">

          <Users size={16} />

          Growing neighbourhood waitlist

        </div>

        <div className="flex items-center gap-2">

          <MapPin size={16} />

          Launching suburb-by-suburb

        </div>

      </div>

    </div>

    {/* RIGHT VISUAL */}
    <div className="relative flex justify-center">

      {/* background glow */}
      <div className="absolute w-[460px] h-[460px] bg-[#A3B18A] rounded-full blur-3xl opacity-25"></div>

      {/* floating UI */}
      <div className="relative flex flex-col gap-5">

        {/* main card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-[380px] border border-[#E5E7EB]">

          <div className="text-sm text-[#6B7280] mb-6">
            Kinjo · Newlands
          </div>

          <div className="bg-[#F7F9F6] rounded-xl p-5 mb-4">

            <h3 className="text-[#344E41] font-semibold mb-2">
              Street Clean-Up This Saturday
            </h3>

            <p className="text-sm text-[#6B7280]">
              Join neighbours at 9AM at the park entrance.
            </p>

          </div>

          <div className="bg-[#F7F9F6] rounded-xl p-5">

            <h3 className="text-[#344E41] font-semibold mb-2">
              Bicycle for Sale · R1,200
            </h3>

            <p className="text-sm text-[#6B7280]">
              Posted 2 hours ago by Sarah
            </p>

          </div>

        </div>

        {/* floating alert card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 w-[260px] border border-[#E5E7EB] ml-20">

          <p className="text-xs text-[#6B7280] mb-1">
            Safety Alert
          </p>

          <p className="text-sm text-[#344E41] font-medium">
            Power outage reported on Main Road
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


);
}
