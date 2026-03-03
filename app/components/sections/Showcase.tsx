"use client";

export default function Showcase() {
  const slides = [
    {
      title: "Neighbourhood Marketplace",
      desc: "Buy and sell safely within your suburb.",
      image: "/mock-1.png",
    },
    {
      title: "Community Noticeboard",
      desc: "Structured updates, not chaotic chat groups.",
      image: "/mock-2.png",
    },
    {
      title: "Neighbourhood Alerts",
      desc: "Real-time safety notifications.",
      image: "/mock-3.png",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#A3B18A]/20">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4 text-center">
          Product Preview
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] text-center mb-16">
          See Kinjo in action.
        </h2>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">

          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-[85%] md:min-w-[60%] lg:min-w-[45%] snap-center bg-[#F0F4EC] border border-[#A3B18A]/30 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#344E41] mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {slide.desc}
                </p>

                <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}