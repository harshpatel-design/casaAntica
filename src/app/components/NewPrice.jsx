"use client";

import Image from "next/image";
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
    <section className="py-[60px] lg:py-[120px] bg-[#f5f5f3]">
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] lg:gap-[90px] items-center">
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
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="lg:col-span-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="uppercase tracking-[2px] text-[#BA4B40] text-[14px] sm:text-[16px] font-semibold mb-[16px] text-center lg:text-left"
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
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="text-[32px] sm:text-[40px] 3xl:text-[48px] leading-[1.2] text-[#000000] font-faculty mb-[18px] font-medium text-center lg:text-left"
            >
              Furniture to love now & forever
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[15px] sm:text-[16px] 3xl:text-[18px] text-[#555555] pb-[16px] lg:pb-[24px] font-medium leading-[1.8] text-center lg:text-left"
            >
              Discover furniture that’s designed to be cherished, evolving with
              your life and style, making every moment at home even more
              special.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-full h-px bg-[#E1E1E1] my-[20px] lg:my-[24px] origin-left"
            />

            <div className="lg:mt-0 mt-[20px] space-y-0 lg:block grid grid-cols-12 items-center lg:space-y-[24px]">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-start gap-[16px] col-span-6 lg:col-span-12 w-full sm:gap-[20px]"
              >
                <TbTruckDelivery className="text-[34px] sm:text-[42px]" />

                <div>
                  <h3 className="text-[20px] sm:text-[24px] text-[#000000] font-medium mb-[6px]">
                    Free Shipping
                  </h3>

                  <p className="text-[#555555] w-full text-[15px] sm:text-[18px]">
                    Enjoy free shipping on all orders
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-[16px] col-span-6 lg:col-span-12 w-full sm:gap-[20px] "
              >
                <RiSecurePaymentLine className="text-[32px] sm:text-[38px]" />

                <div>
                  <h3 className="text-[20px] sm:text-[24px] text-[#000000] font-medium mb-[6px]">
                    Affordable Prices
                  </h3>

                  <p className="text-[#555555] text-[15px] sm:text-[18px]">
                    We offer competitive prices
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 120, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer relative overflow-hidden lg:w-fit w-full rounded-full border border-[#BA4B40] px-6 sm:px-10 mt-[36px] lg:mt-[48px] py-3 sm:py-4 text-[#BA4B40]"
            >
              <span className="absolute left-0 top-full h-[200%] w-[200%] rounded-[40%] bg-[#BA4B40] transition-all duration-700 ease-in-out group-hover:top-[-50%]"></span>

              <span className="relative z-10 transition-colors font-medium duration-500 group-hover:text-white ">
                View Collection →
              </span>
            </motion.button>
          </motion.div>

          <div className="relative lg:col-span-8 w-[75%] lg:w-full m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-[20px] lg:gap-[30px]">
              {images.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 300,
                    scale: 0.9,
                    filter: "blur(30px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative h-[500px] sm:h-[700px] rounded-[20px] lg:rounded-[30px] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover h-full"
                    
                  />
                </motion.div>
              ))}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[190px] lg:h-[190px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 hidden lg:block"
                >
                  <Image
                    src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/h1-new.png"
                    alt="Badge"
                    fill
                    className="object-contain"
                  />  
                </motion.div>

                <div className="absolute inset-0 items-center justify-center text-center hidden lg:flex">
                  <p className="text-white text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.2] font-semibold">
                    New <br /> Pieces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPrice;
