export default function Problem() {
  const items = [
    {
      title: "Social Media Groups",
      text: "Anyone can join. Spam, strangers, and noise drown out real community."
    },
    {
      title: "Marketplace Apps",
      text: "You end up meeting people from across the city with zero context."
    },
    {
      title: "Chat Groups",
      text: "Unstructured. 200 unread messages. No history. No trust."
    },
    {
      title: "Online Classifieds",
      text: "No accountability. No community layer."
    }
  ];

  return (
    <section className="py-24 bg-[#1A2B22] text-white px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
          The Problem
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-12">
          Every option is broken.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-[#A3B18A]/20 p-6 rounded-md bg-white/5"
            >
              <h3 className="text-sm uppercase tracking-wide text-[#A3B18A] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}