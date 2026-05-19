const products = [
  {
    name: "Rose",
    image: "/images/products.png",
    desc: "Premium rose fragrance with long-lasting aroma"
  },
  {
    name: "Kasturi",
    image: "/images/products.png",
    desc: "Traditional kasturi fragrance for divine freshness"
  },
  {
    name: "Mogra",
    image: "/images/products.png",
    desc: "Refreshing mogra aroma crafted naturally"
  },
  {
    name: "Kesar Chandan",
    image: "/images/products.png",
    desc: "Luxury kesar chandan fragrance collection"
  }
];

export default function Products() {

  return (
    <section className="relative bg-[#050505] py-24 overflow-hidden" id="products">

      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-4">
            Our Collection
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Premium Agarbatti Products
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Explore our luxury aromatic collection crafted with
            premium natural ingredients.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="
                group
                bg-black/60
                border
                border-yellow-500/10
                rounded-3xl
                overflow-hidden
                hover:border-yellow-400
                transition
                duration-500
                hover:-translate-y-2
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[300px]
                    object-contain
                    bg-black
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {product.name}
                </h3>

                <p className="text-gray-400 leading-7">
                  {product.desc}
                </p>

                <a
                  href="https://wa.me/917083412780"
                  target="_blank"
                  className="
                    mt-6
                    inline-block
                    bg-yellow-500
                    hover:bg-yellow-400
                    text-black
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    transition
                  "
                >
                  Order Now
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}