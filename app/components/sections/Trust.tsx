export default function Trust() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 py-24 bg-white border-t border-[#A3B18A]/20 px-6"
>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-xs tracking-widest uppercase text-[#A3B18A] mb-4">
            Trust is the product
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#344E41] mb-6">
            Know who you’re dealing with.
          </h2>

          <p className="text-gray-600 mb-4">
            Every member has a trust score built from peer reviews and real transaction history.
          </p>

          <p className="text-gray-600">
            No anonymous sellers. No hidden reputations. Just verified neighbours.
          </p>
        </div>

        <div className="bg-[#F0F4EC] border border-[#A3B18A]/30 p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-lg font-medium text-[#344E41]">
                Sarah M.
              </div>
              <div className="text-sm text-gray-500">
                Claremont
              </div>
            </div>

            <div className="bg-[#344E41] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-serif">
              9.2
            </div>
          </div>

          <div className="text-sm text-gray-600">
            “Great buyer. On time and easy to deal with.”
          </div>

          <div className="text-sm text-gray-600 mt-2">
            “Highly recommended neighbour.”
          </div>
        </div>

      </div>
    </section>
  );
}