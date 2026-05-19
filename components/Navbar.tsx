"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Our Products", to: "products" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact Us", to: "contact" },
  ];

  return (

    <nav
      className="
        fixed
        top-[58px]
        md:top-[36px]
        left-0
        w-full
        z-[9999]
        bg-black/95
        backdrop-blur-lg
        border-b
        border-yellow-500/20
        text-white
      "
    >

      {/* Navbar Container */}
      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          md:px-6

          py-2
          md:py-3

          flex
          justify-between
          items-center
        "
      >

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="RoyalSun"
          className="h-10 md:h-14 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-lg font-medium">

          {navLinks.map((item, index) => (

            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-yellow-400"
              className="
                cursor-pointer
                hover:text-yellow-400
                transition
                duration-300
              "
            >
              {item.name}
            </Link>

          ))}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Enquire Button */}
          <a
            href="https://wa.me/917083412780"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black

              px-4
              md:px-6

              py-2
              md:py-3

              rounded-lg

              text-sm
              md:text-base

              font-semibold
              transition

              shadow-[0_0_25px_rgba(255,196,0,0.25)]
            "
          >
            Enquire Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              text-4xl
              text-yellow-400
              transition
            "
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden

          fixed
          top-[115px]
          left-0

          w-full

          z-[9999]

          bg-[#0a0a0a]
          border-b
          border-yellow-500/20

          transition-all
          duration-500

          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        <div className="flex flex-col items-center gap-8 py-12 text-xl font-semibold">

          {navLinks.map((item, index) => (

            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-yellow-400"
              onClick={() => setMenuOpen(false)}
              className="
                cursor-pointer
                text-white
                hover:text-yellow-400
                transition
                duration-300
              "
            >
              {item.name}
            </Link>

          ))}

        </div>

      </div>

    </nav>

  );
}