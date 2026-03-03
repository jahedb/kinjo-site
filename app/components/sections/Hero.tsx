export default function Hero() {
  return (
    <section className="pt-24 min-h-[60vh] flex items-center justify-center bg-[#F0F4EC] px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-6 leading-tight">
          Your suburb. <br />
          <span className="italic text-[#A3B18A]">
            Not the internet.
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Private. Invite-only. Built for real neighbours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#founding"
            className="px-6 py-3 rounded bg-[#344E41] text-white hover:opacity-90 transition"
          >
            Become a Founding Member
          </a>

          <a
            href="#waitlist"
            className="px-6 py-3 rounded border border-[#344E41] text-[#344E41] hover:bg-[#344E41] hover:text-white transition"
          >
            Join the Waitlist
          </a>
        </div>

      </div>
    </section>
  );
}