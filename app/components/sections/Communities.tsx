export default function Communities() {
  return (
    <section className="py-28 bg-[#F4F7F2]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-light text-[#344E41] mb-4">
            More than just your suburb
          </h2>

          <p className="text-[#6B7280] text-lg">
            Kinjo is built around where you live, but your life extends beyond
            your street. Join trusted clubs and organisations while staying
            rooted in your neighbourhood.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
            <h3 className="text-xl font-medium text-[#344E41] mb-3">
              Clubs
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Sports clubs, running groups, cycling teams, book clubs, and
              hobby communities can create their own private Kinjo spaces.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
            <h3 className="text-xl font-medium text-[#344E41] mb-3">
              Organisations
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Schools, charities, religious groups, and community organisations
              can communicate securely with their members.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
            <h3 className="text-xl font-medium text-[#344E41] mb-3">
              Multiple Communities
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Your suburb remains your anchor, but you can belong to multiple
              clubs and organisations — each with the same trusted Kinjo tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}