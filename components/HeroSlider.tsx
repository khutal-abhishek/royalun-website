"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  "/images/products.png",
  "/images/products.png",
  "/images/products.png",
];

export default function HeroSlider() {

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-full"
    >

      {slides.map((slide, index) => (

        <SwiperSlide key={index}>

          <img
            src={slide}
            alt="slide"
            className="w-full h-full object-cover"
          />

        </SwiperSlide>

      ))}

    </Swiper>
  );
}