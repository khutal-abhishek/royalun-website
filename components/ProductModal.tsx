"use client";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    desc: string;
  } | null;
}

export default function ProductModal({
  open,
  onClose,
  product,
}: ProductModalProps) {

  if (!open || !product) return null;

  return (

    <div className="
      fixed
      inset-0
      z-[100]
      bg-black/80
      flex
      items-center
      justify-center
      p-6
    ">

      {/* Modal Box */}
      <div className="
        relative
        bg-[#111]
        border
        border-yellow-500/20
        rounded-3xl
        overflow-hidden
        max-w-2xl
        w-full
      ">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-white
            text-4xl
            z-20
            hover:text-yellow-400
            transition
          "
        >
          ×
        </button>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-[350px]
            object-cover
          "
        />

        {/* Content */}
        <div className="p-8">

          <h2 className="
            text-4xl
            font-bold
            text-yellow-400
            mb-6
          ">
            {product.name}
          </h2>

          <p className="
            text-gray-300
            text-lg
            leading-8
          ">
            {product.desc}
          </p>

          <a
            href="https://wa.me/917083412780"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-8
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
              transition
            "
          >
            Order on WhatsApp
          </a>

        </div>

      </div>

    </div>

  );
}