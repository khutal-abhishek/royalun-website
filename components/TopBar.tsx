import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function TopBar() {

  return (

    <div
      className="
        fixed
        top-0
        left-0
        w-full
        z-[60]
        bg-[#0a0a0a]
        border-b
        border-yellow-500/20
        text-gray-300
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-2

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-2

          text-[10px]
          md:text-sm
        "
      >

        {/* Welcome */}
        <p className="text-center">
          Welcome to RoyalSun Aromatic Products
        </p>

        {/* Contact */}
        <div
          className="
            flex
            items-center
            justify-center
            flex-wrap

            gap-3
            md:gap-6
          "
        >

          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-yellow-400" />
            <span>+91 7083412780</span>
          </div>

          <div className="flex items-center gap-1">
            <MdEmail className="text-yellow-400" />
            <span>royalSunindia@gmail.com</span>
          </div>

          <a
            href="https://www.instagram.com/royal.sun007/"
            className="text-yellow-400 text-lg hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/royal.sun007/"
            className="text-yellow-400 text-lg hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

    </div>

  );
}