import { ShieldCheck, Users, Lock, MapPin } from "lucide-react";

export default function Security() {

const items = [
{
icon: ShieldCheck,
title: "Verified Members",
text: "Communities are built around real people. Kinjo prioritises trusted identity and neighbourhood verification."
},
{
icon: Users,
title: "Community Moderation",
text: "Local moderators help keep discussions respectful, useful and safe for everyone."
},
{
icon: Lock,
title: "Privacy First",
text: "Your data belongs to your community. Content stays scoped to the neighbourhoods and groups you join."
},
{
icon: MapPin,
title: "Local Trust Networks",
text: "Kinjo strengthens real-world connections by organising digital communities around real places."
}
];

return ( <section className="py-20 bg-[#F0F4EC] border-t border-[#A3B18A]/20">


  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center max-w-2xl mx-auto mb-14">

      <h2 className="text-3xl md:text-4xl font-serif text-[#344E41] mb-4">
        Built for trusted communities
      </h2>

      <p className="text-[#6B7280]">
        Kinjo is designed to strengthen real neighbourhood relationships
        while protecting privacy and community safety.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {items.map((item, i) => {

        const Icon = item.icon;

        return (

          <div
            key={i}
            className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="w-10 h-10 rounded-lg bg-[#A3B18A]/20 flex items-center justify-center mb-4 text-[#344E41]">

              <Icon size={18} />

            </div>

            <h3 className="text-sm font-semibold text-[#344E41] mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-[#6B7280] leading-relaxed">
              {item.text}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>


);
}
