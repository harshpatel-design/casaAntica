"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    title: "Bath Room",
    products: "4 products",
    image:
      "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-cate1.jpg",
  },

  {
    id: 2,
    title: "Bath Room",
    products: "4 products",
    image:
      "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-cate2.jpg",
  },

  {
    id: 3,
    title: "Bedroom",
    products: "6 products",
    image:
      "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-cate3.jpg",
  },

  {
    id: 4,
    title: "Decor Home",
    products: "5 products",
    image:
      "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-cate4.jpg",
  },

  {
    id: 5,
    title: "Living Room",
    products: "8 products",
    image:
      "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-cate1.jpg",
  },
];

function Categoty() {
  return (
    <section className="relative py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/h1-background01.jpg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 max-w-[1320px] mx-auto px-5">
        <div className="flex flex-col sm:flex-row md:items-start items-center sm:items-center justify-between mb-[30px] sm:mb-[40px] gap-4">
          <motion.h2
            initial={{
              opacity: 0,
              y: -100,
              scale: 1,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white text-[28px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-faculty leading-[1.1] text-"
          >
            Shopping by category
          </motion.h2>

          <div className="flex md:items-end gap-[8px] sm:gap-[12px] items-center ">
            <button className="category-prev w-[80px] sm:w-[60px] md:w-[71px] transition-colors duration-500 h-[35px] sm:h-[38px] md:h-[41px] rounded-full bg-transparent backdrop-blur-sm border border-white/50 text-white text-[14px] sm:text-[16px] md:text-[20px] flex items-center justify-center cursor-pointer hover:bg-[#BA4B40] hover:border-none hover:scale-105">
              <FaArrowLeft />
            </button>

            <button className="category-next w-[80px] sm:w-[60px] md:w-[71px] transition-colors duration-500 h-[35px] sm:h-[38px] md:h-[41px] rounded-full border border-white/50 text-white text-[14px] sm:text-[16px] md:text-[20px] flex items-center backdrop-blur-sm justify-center cursor-pointer hover:bg-[#BA4B40] hover:border-none hover:scale-105">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          speed={800}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 0,
                  x: -40,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.1,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-[20px] sm:p-[25px] md:p-[30px] text-center group cursor-pointer"
              >
                <div className="relative w-[280px] h-[280px] md:w-[280px]  md:h-[280px] lg:w-[240px] lg:h-[240px] mx-auto rounded-full overflow-hidden mb-[20px] sm:mb-[25px] md:mb-[30px] group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500">
                    <div className="absolute group/mm scale-0 group-hover:scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#BA4B40] flex items-center justify-center h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] rounded-full transition-all duration-500 hover:bg-black">
                      <FaArrowRight className="text-white text-lg sm:text-xl md:text-2xl -rotate-45 transition-all duration-500 group-hover/mm:rotate-0" />
                    </div>
                  </div>
                </div>
                <h3 className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.2] font-faculty font-medium text-black mb-[5px]">
                  {item.title}
                </h3>

                <p className="text-[#8B8B8B] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">{item.products}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Categoty;
