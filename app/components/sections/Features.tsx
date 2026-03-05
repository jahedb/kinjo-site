import {
UserCheck,
ShieldCheck,
Star,
Bell,
ClipboardList,
Store
} from "lucide-react";

export default function Features() {

const features = [
{
title: "Invite-Only Access",
text: "Every member is verified by a moderator of the community.",
icon: UserCheck
},
{
title: "Community Scoped",
text: "Your content never leaks into another community.",
icon: ShieldCheck
},
{
title: "Trust Score",
text: "Built from real reviews and transaction history.",
icon: Star
},
{
title: "Neighbourhood Alerts",
text: "Safety updates and real-time notices.",
icon: Bell
},
{
title: "Community Noticeboard",
text: "Structured. Searchable. Permanent.",
icon: ClipboardList
},
{
title: "Home Business Pages",
text: "Support and discover local entrepreneurs.",
icon: Store
}
];

return ( <section
   id="features"
   className="scroll-mt-24 py-24 bg-[#F0F4EC] border-t border-[#A3B18A]/20 px-6"
 > <div className="max-w-6xl mx-auto">
    <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
      What You Get
    </p>

    <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-12">
      Built for real communities.
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {features.map((f, i) => {
        const Icon = f.icon;

        return (
          <div
            key={i}
            className="group bg-white border border-[#A3B18A]/30 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#A3B18A]"
          >

            {/* Icon */}
            <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#A3B18A]/15 text-[#344E41] group-hover:bg-[#A3B18A]/25 transition">
              <Icon size={20} strokeWidth={2} />
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg text-[#344E41] mb-2">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {f.text}
            </p>

          </div>
        );
      })}

    </div>

  </div>
</section>

);
}
