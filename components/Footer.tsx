import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-[#050505] border-t border-yellow-500/10 pt-20 pb-10" id="contact">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Logo */}
        <div>

          <img
            src="/images/logo.png"
            alt="RoyalSun"
            className="h-16 mb-6"
          />

          <p className="text-gray-400 leading-8">
            Premium aromatic products crafted with natural ingredients
            for long-lasting fragrance and positivity.
          </p>

        </div>

        {/* Links */}
        <div>

          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>

            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>

            <a href="#products" className="hover:text-yellow-400">
              Products
            </a>

            <a href="#gallery" className="hover:text-yellow-400">
              Gallery
            </a>

            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            Contact Us
          </h3>

          <div className="text-gray-300 space-y-4">

            <p>+91 7083412780</p>

            <p>royalSunindia@gmail.com</p>

            <p>Pune, Maharashtra</p>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">

            <a
              href="https://www.instagram.com/royal.sun007/"
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                p-3
                rounded-full
                transition
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/royal.sun007/"
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                p-3
                rounded-full
                transition
              "
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/917083412780"
              target="_blank"
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                p-3
                rounded-full
                transition
              "
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-yellow-500/10 mt-16 pt-8 text-center text-gray-500 text-sm">

        © 2026 RoyalSun Aromatic Products. All rights reserved.

      </div>

    </footer>
  );
}