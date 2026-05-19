"use client";

import { useEffect } from "react";
import AOS from "aos";

import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import About from "@/components/About";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (

    <div className="bg-black text-white overflow-hidden">

      {/* Fixed Header */}
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="
          relative
          min-h-screen
          overflow-hidden

          pt-[180px]
          md:pt-[130px]
        "
      >

        {/* Background Image */}
        <div className="absolute inset-0">

          <img
            src="/images/products.png"
            alt="Products"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2

              w-[140%]
              sm:w-[120%]
              md:w-[85%]
              lg:w-[75%]
              xl:w-[68%]

              object-contain
              opacity-40
            "
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>

          {/* Golden Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.10),transparent_55%)]"></div>

        </div>

        {/* Hero Content */}
        <div className="relative z-10">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="max-w-2xl">

              <p className="text-3xl md:text-5xl text-gray-200 mb-6">
                Experience The
              </p>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight">

                <span className="block text-yellow-400">
                  Royal
                </span>

                <span className="block text-yellow-400">
                  Fragrance
                </span>

              </h1>

              <p className="mt-8 text-gray-300 text-lg md:text-2xl leading-9 md:leading-10 max-w-xl">
                Premium quality agarbatti made with natural ingredients
                for a divine and refreshing experience.
              </p>

              <a
                href="#products"
                className="
                  inline-block
                  mt-10
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  px-8
                  md:px-10
                  py-4
                  md:py-5
                  rounded-xl
                  text-lg
                  md:text-xl
                  font-bold
                  transition
                  shadow-[0_0_40px_rgba(255,196,0,0.25)]
                "
              >
                Explore Products
              </a>

            </div>

          </div>

        </div>

      </section>

      <Features />
      <About />
      <Products />
      <Gallery />
      <Footer />
      <WhatsAppButton />

    </div>

  );
}