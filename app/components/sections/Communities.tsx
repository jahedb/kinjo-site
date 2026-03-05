import { Users, Building2, Network } from "lucide-react";

export default function Communities() {

const communities = [
{
title: "Clubs",
text: "Sports clubs, running groups, cycling teams, book clubs and hobby communities can create their own private Kinjo spaces.",
icon: Users
},
{
title: "Organisations",
text: "Schools, charities, religious groups and community organisations can communicate securely with their members.",
icon: Building2
},
{
title: "Multiple Communities",
text: "Your suburb remains your anchor, but you can belong to multiple clubs and organisations — each with the same trusted Kinjo tools.",
icon: Network
}
];

return ( <section className="py-28 bg-[#F4F7F2]">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center max-w-2xl mx-auto mb-16">

      <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-4">
        More than just your suburb
      </h2>

      <p className="text-[#6B7280] text-lg leading-relaxed">
        Kinjo is built around where you live, but your life extends beyond
        your street. Join trusted clubs and organisations while staying
        rooted in your neighbourhood.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {communities.map((c, i) => {
        const Icon = c.icon;

        return (
          <div
            key={i}
            className="group bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#A3B18A]"
          >

            {/* Icon */}
            <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#A3B18A]/15 text-[#344E41] group-hover:bg-[#A3B18A]/25 transition">

              <Icon size={22} strokeWidth={2} />

            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#344E41] mb-3">

              {c.title}

            </h3>

            {/* Description */}
            <p className="text-[#6B7280] leading-relaxed">

              {c.text}

            </p>

          </div>
        );
      })}

    </div>

  </div>

</section>

);
}
