export default function Features() {
  const features = [
    { title: "Invite-Only Access", text: "Every member is verified by a moderator of the community." },
    { title: "Suburb Scoped", text: "Your content never leaks into another community." },
    { title: "Trust Score", text: "Built from real reviews and transaction history." },
    { title: "Neighbourhood Alerts", text: "Safety updates and real-time notices." },
    { title: "Community Noticeboard", text: "Structured. Searchable. Permanent." },
    { title: "Home Business Pages", text: "Support and discover local entrepreneurs." }
  ];

  return (
    <section
      id="features"
      className="scroll-mt-24 py-24 bg-[#F0F4EC] border-t border-[#A3B18A]/20 px-6"
>
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
          What You Get
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-12">
          Built for real communities.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-[#A3B18A]/30 p-6 rounded-md hover:shadow-md transition"
            >
              <h3 className="font-serif text-lg text-[#344E41] mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600">
                {f.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}