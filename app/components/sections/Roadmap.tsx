"use client";

const milestones = [
  {
    title: "Event Creation",
    desc: "Create neighbourhood and club events with RSVPs and reminders.",
  },
  {
    title: "Direct Messaging",
    desc: "Secure private messaging between verified members.",
  },
  {
    title: "SOS Feature",
    desc: "Instant emergency alerts to nearby neighbours and moderators.",
  },
  {
    title: "Fundraisers & Appeals",
    desc: "Community-driven support for neighbours and local causes.",
  },
];

export default function Roadmap() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <h2 className="text-4xl font-light text-[#344E41] mb-4">
          Product roadmap
        </h2>

        <p className="text-[#6B7280] text-lg max-w-xl">
          Kinjo is evolving into the trusted digital infrastructure for
          neighbourhoods, clubs, and local communities.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-8 px-6 pb-4 min-w-max">

          {milestones.map((item, i) => (
            <div
              key={i}
              className="w-[300px] flex-shrink-0 bg-[#F4F7F2] border border-[#D4E2C8] rounded-2xl p-8 shadow-sm"
            >
              <div className="text-sm uppercase tracking-wider text-[#A3B18A] mb-3">
                Milestone {i + 1}
              </div>

              <h3 className="text-xl text-[#344E41] font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-[#6B7280] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}