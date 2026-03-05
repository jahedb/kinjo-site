"use client";

export default function Hero() {
  return (
    <section className="relative bg-[#F0F4EC] pt-36 pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-[3.25rem] font-light tracking-tight text-[#344E41] leading-[1.1] mb-8">
            A private space for your community.
          </h1>

          <p className="text-lg text-[#6B7280] mb-6 max-w-xl">
            Kinjo is an invite-only community app that connects verified
            members within the same community.
          </p>

          <p className="text-lg text-[#6B7280] mb-10 max-w-xl">
            Buy and sell safely. Share structured updates. Receive real-time
            safety alerts. Support local home businesses — without ads or
            chaotic group chats.
          </p>

          <div className="flex gap-4">
            <a
              href="#waitlist"
              className="px-6 py-3 rounded-full bg-[#344E41] text-white hover:bg-[#2c4036] transition"
            >
              Request Access
            </a>

            <a
              href="#features"
              className="px-6 py-3 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">
          
          {/* Soft background glow */}
          <div className="absolute w-[420px] h-[420px] bg-[#A3B18A] rounded-full blur-3xl opacity-25"></div>

          {/* Main floating card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[380px] border border-[#E5E7EB]">
            
            <div className="text-sm text-[#6B7280] mb-6">
              Kinjo · Newlands
            </div>

            <div className="bg-[#F7F9F6] rounded-xl p-5 mb-4">
              <h3 className="text-[#344E41] font-semibold mb-2">
                Street Clean-Up This Saturday
              </h3>
              <p className="text-sm text-[#6B7280]">
                Join us at 9AM at the park entrance.
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
        </div>
      </div>
    </section>
  );
}