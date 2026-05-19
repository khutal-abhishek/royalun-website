export default function About() {
  return (
    <section className="relative bg-black py-24 overflow-hidden" id="about">

      {/* Glow */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div>

          <img
            src="/images/products.png"
            alt="RoyalSun Products"
            className="rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(255,196,0,0.15)]"
          />

        </div>

        {/* Right Content */}
        <div>

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            RoyalSun Aromatic Products
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-9">
            RoyalSun Aromatic Products is dedicated to bringing you premium quality agarbatti crafted with natural ingredients.
          </p>

          <p className="mt-6 text-gray-400 text-lg leading-9">
            Our mission is to spread positivity, freshness, peace and divine fragrance into every home.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold transition shadow-[0_0_30px_rgba(255,196,0,0.2)]">
            Read More
          </button>

        </div>

      </div>

    </section>
  );
}