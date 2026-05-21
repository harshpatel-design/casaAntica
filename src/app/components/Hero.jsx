"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/slider-1-banner-3.jpg",
    "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/slider-1-banner-2.jpg",
    "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/slider-1-banner-1.jpg",
  ];

  return (
    <section className="w-full h-[900px] relative ">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[900px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide})` }}
            >
              <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.6)_100%,transparent_100%)]"></div>
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-white text-center px-5">
                <p className="uppercase tracking-[4px] text-sm mb-5 font-mona">
                  The Year’s Top 10 Designs
                </p>

                <h1 className="font-faculty text-6xl md:text-8xl leading-tight max-w-5xl">
                  Neutral Styles, <br />
                  New Beginnings
                </h1>

                <p className="mt-6 text-lg md:text-xl font-mona">
                  Any item. Any finish. Endless possibilities.
                </p>

                <button className="group cursor-pointer relative overflow-hidden rounded-full border border-white px-10 mt-[48px] py-4 text-white">
                  <span className="absolute left-0 top-full h-[200%] w-[200%] rounded-[40%] bg-white transition-all duration-700 ease-in-out group-hover:top-[-50%] animate-wave"></span>

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black group-hover:font-medium">
                    Shop Now →
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
