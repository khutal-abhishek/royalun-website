const galleryImages = [
  {
    image: "/images/products.png",
    name: "Royal Rose"
  },
  {
    image: "/images/products.png",
    name: "Kasturi"
  },
  {
    image: "/images/products.png",
    name: "Mogra"
  },
  {
    image: "/images/products.png",
    name: "Kesar Chandan"
  },
  {
    image: "/images/products.png",
    name: "Pineapple"
  },
  {
    image: "/images/products.png",
    name: "Royal Magnet"
  }
];

export default function Gallery() {

  return (
    <section className="relative bg-black py-24 overflow-hidden" id="gallery">

      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-4">
            Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Our Product Collection
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Premium fragrance collection from RoyalSun
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((item, index) => (

            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-yellow-500/10
                group
              "
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-[350px]
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent
              "></div>

              {/* Product Name */}
              <div className="
                absolute
                bottom-6
                left-6
              ">

                <h3 className="
                  text-2xl
                  font-bold
                  text-yellow-400
                  drop-shadow-lg
                ">
                  {item.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}