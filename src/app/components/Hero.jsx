"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/slider-1-banner-3.jpg",
      subtitle: "The Year’s Top 10 Designs",
      title: "Neutral Styles,\nNew Beginnings",
      desc: "Any item. Any finish. Endless possibilities.",
    },

    {
      id: 2,
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/slider-1-banner-2.jpg",
      subtitle: "Luxury Interior Collection",
      title: "Modern Living,\nBetter Spaces",
      desc: "Create your dream room with premium furniture.",
    },

    {
      id: 3,
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/slider-1-banner-1.jpg",
      subtitle: "Exclusive Furniture Trends",
      title: "Minimal Design,\nMaximum Comfort",
      desc: "Elegant products crafted for modern homes.",
    },
  ];

  return (
    <section className="w-full max-h-[900px] h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full overflow-hidden">
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-10000 ease-linear ${
                  activeIndex === index ? "scale-100" : "scale-115"
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              <div className="absolute inset-0 bg-black/60 z-1" />

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-10 flex flex-col mt-0 min-[1400px]:mt-[120px] items-center justify-center text-center text-white px-5"
              >
                <motion.p
                  initial={{ opacity: 0, y: -150, scale: 0.0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                  className="uppercase tracking-[3px] font-normal text-sm mb-5 font-mona"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                  className="font-faculty text-7xl 3xl:text-8xl leading-tight whitespace-pre-line"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40, scale: 0.0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                  className="mt-6 text-lg md:text-xl font-mona"
                >
                  {slide.desc}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 150, scale: 0.0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                  className="group cursor-pointer relative overflow-hidden rounded-full border border-white px-10 mt-[48px] py-4 text-white"
                >
                  <span className="absolute left-0 top-full h-[200%] w-[200%] rounded-[40%] bg-white transition-all duration-700 ease-in-out group-hover:top-[-50%]"></span>

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Shop Now →
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
