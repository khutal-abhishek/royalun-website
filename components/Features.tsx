import {
  FaLeaf,
  FaAward,
  FaWind,
  FaRecycle
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "100% Natural",
    desc: "Made with natural ingredients"
  },
  {
    icon: <FaWind />,
    title: "Long Lasting",
    desc: "Long-lasting soothing aroma"
  },
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "Best quality product guarantee"
  },
  {
    icon: <FaRecycle />,
    title: "Eco Friendly",
    desc: "Safe for environment"
  }
];

export default function Features() {
  return (
    <section className="bg-[#0b0b0b] border-y border-yellow-500/10 py-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, index) => (

          <div
            key={index}
            className="bg-black/60 border border-yellow-500/10 rounded-2xl p-6 hover:border-yellow-400 transition duration-300"
          >

            <div className="text-yellow-400 text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-2 text-white">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}