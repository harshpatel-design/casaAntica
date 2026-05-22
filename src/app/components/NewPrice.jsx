"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

function NewPrice() {
  const images = [
    {
      id: 1,
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-modern02.jpg",
      alt: "Chair",
    },

    {
      id: 2,
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/04/h1-modern01.png",
      alt: "Dining",
    },
  ];
  return (
    <section className="py-[120px] bg-[#f5f5f3]">
      <div className="max-w-[1290px] mx-auto">
        <div className="grid grid-cols-12 gap-[90px] items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: false }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="col-span-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="uppercase tracking-[2px] text-[#BA4B40] text-[16px] font-semibold mb-[20px]"
            >
              MODERN & ELEGANT
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="3xl:text-[48px] text-[38px] leading-[1.2] text-[#000000] font-faculty mb-[18px] font-medium max-w-[620px]"
            >
              Furniture to love now & forever
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="3xl:text-[18px] text-[16px] text-[#555555] 3xl:pb-[24px] pb-[16px] font-medium leading-[1.8] max-w-[620px]"
            >
              Discover furniture that’s designed to be cherished, evolving with
              your life and style, making every moment at home even more
              special.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-full h-px bg-[#E1E1E1] 3xl:my-[24px] my-[20px] origin-left"
            />

            <div className="3xl:space-y-[24px] space-y-[20px]">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-start gap-[20px]"
              >
                <TbTruckDelivery className="text-[42px] font-light" />
                <div>
                  <h3 className="3xl:text-[24px] text-[20px] text-[#000000] font-medium mb-[6px]">
                    Free Shipping
                  </h3>

                  <p className="text-[#555555] 3xl:text-[18px] text-[16px]">
                    Enjoy free shipping on all orders
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="flex items-start  gap-[20px]"
              >
                <RiSecurePaymentLine className="text-[38px] font-light" />

                <div>
                  <h3 className="3xl:text-[24px] text-[20px] text-[#000000] font-medium mb-[6px]">
                    Affordable Prices
                  </h3>

                  <p className="text-[#555555] 3xl:text-[18px] text-[16px]">
                    We offer competitive prices
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 120, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer relative overflow-hidden rounded-full border border-[#BA4B40] px-10 mt-[48px] py-4 text-[#BA4B40]"
            >
              <span className="absolute left-0 top-full h-[200%] w-[200%] rounded-[40%] bg-[#BA4B40] transition-all duration-700 ease-in-out group-hover:top-[-50%]"></span>

              <span className="relative z-10 transition-colors font-medium duration-500 group-hover:text-white">
                View Collection →
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative col-span-8 h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-2 h-full gap-[30px] col-span-6"
            >
              {images.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 120,
                    scale: 0.9,
                    filter: "blur(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.2,
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative h-full rounded-[30px] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover h-full w-full"
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-[190px] h-[190px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/h1-new.png"
                    alt="Badge"
                    fill
                    className="object-contain"
                  />
                  <motion.img
                    src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/h1-new.png"
                    alt="Badge"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 120,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </motion.div>

                <div className="absolute flex items-center justify-center inset-2 animate-spin-slow">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="
                          M 100,100
                          m -66,0
                          a 66,66 0 1,1 132,0
                          a 66,66 0 1,1 -132,0
                        "
                      />
                    </defs>

                    <text
                      fill="#F3D7D1"
                      fontSize="11"
                      fontWeight="600"
                      letterSpacing="4"
                    >
                      <textPath
                        href="#circlePath"
                        className="text-[#FFFFFF80] text-[14px]"
                      >
                        THE SPRING COLLECTION • INTRODUCING •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <p className="text-white text-[24px] leading-[1.2] font-semibold">
                    New <br /> Pieces
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewPrice;
