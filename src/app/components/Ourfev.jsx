"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  RefreshCcw,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

import "swiper/css";
import "swiper/css/grid";

function Ourfev() {
  const products = [
    {
      id: 1,
      title: "Enormous Silk Gloves",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/24_4-300x389.jpg",
      price: "$69.99",
      oldPrice: "$90.00",
      reviews: 5,
      delivery: "Deliver in 2 Days",
      colors: ["#d8c8b3", "#0f766e", "#1e3a8a"],
      more: "+2 more",
      sale: true,
    },
    {
      id: 2,
      title: "Mediocre Linen Hat",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-8-1.jpg",
      price: "$562.50",
      oldPrice: "",
      reviews: 5,
      delivery: "Deliver in 2 Days",
      colors: [],
      more: "",
      sale: false,
    },
    {
      id: 3,
      title: "Heavy Duty Granite",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-5-1.jpg",
      price: "$178.30",
      oldPrice: "",
      reviews: 5,
      delivery: "Deliver in 2 Days",
      colors: [],
      more: "",
      sale: false,
    },
    {
      id: 4,
      title: "Akemi Rattan Chair",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-1-1.jpg",
      price: "$1341 - $88919",
      oldPrice: "",
      reviews: 5,
      delivery: "Deliver in 2 Days",
      colors: ["#5b3a2e", "#0f766e", "#999"],
      more: "",
      sale: false,
    },
    {
      id: 5,
      title: "Luxury Wooden Table",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-2-1.jpg",
      price: "$450.00",
      oldPrice: "$520.00",
      reviews: 4,
      delivery: "Deliver in 3 Days",
      colors: ["#654321", "#222"],
      more: "+1 more",
      sale: true,
    },
    {
      id: 6,
      title: "Modern Sofa Chair",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-3-1.jpg",
      price: "$999.00",
      oldPrice: "",
      reviews: 5,
      delivery: "Deliver in 5 Days",
      colors: ["#444", "#ccc"],
      more: "",
      sale: false,
    },
    {
      id: 7,
      title: "Premium Cotton Towels",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-4-1.jpg",
      price: "$79.00",
      oldPrice: "$100.00",
      reviews: 5,
      delivery: "Deliver in 1 Day",
      colors: ["#eee", "#c4b5fd"],
      more: "",
      sale: true,
    },
    {
      id: 8,
      title: "Minimal Ceramic Pot",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/product-6-1.jpg",
      price: "$120.00",
      oldPrice: "",
      reviews: 4,
      delivery: "Deliver in 4 Days",
      colors: ["#d6d3d1", "#78716c"],
      more: "",
      sale: false,
    },
  ];
  return (
    <section className="py-[60px] lg:py-[120px] bg-white">
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 mb-[46px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] font-faculty font-medium ">
              Our Sale Favorite
            </h2>
          </div>
          <ul className="flex items-center  gap-[24px]">
            <li>
              <Link
                href="/"
                className="pb-[8px] font-bold text-[16px] font-sans relative block active-link text-[#BA4B40]"
              >
                All Products
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="pb-[8px] font-bold text-[16px] font-sans text-[#555555] relative block transition-all duration-300 group-hover:text-[#BA4B40] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#BA4B40] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                New Arrivals
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="pb-[8px] font-bold text-[16px] font-sans text-[#555555] relative block transition-all duration-300 group-hover:text-[#BA4B40] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#BA4B40] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Sale Items
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="pb-[8px] font-bold text-[16px] font-sans text-[#555555] relative block transition-all duration-300 group-hover:text-[#BA4B40] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#BA4B40] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Best Sellers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Grid]}
          spaceBetween={24}
          loop={true}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group">
                <div className="relative bg-[#F5F5F5] rounded-[20px] overflow-hidden p-[20px] h-[400px] flex items-center justify-center">
                  {product.sale && (
                    <span className="absolute flex items-center justify-center top-[20px] left-0 bg-[#c74d3f] text-white text-[12px] font-semibold px-[10px] py-[4px] rounded-br-[20px] rounded-tr-[20px] z-10">
                      SALE
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover cursor-pointer bg-red-500"
                    width={4000}
                    height={3000}
                  />
                  <div className="absolute right-[20px] top-[24px] w-[180px] flex flex-col items-end gap-[12px] opacity-0 translate-x-[20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                    <div className="relative group/tooltip">
                      <span className="absolute right-[55px] top-1/2 -translate-y-1/2 bg-black text-white text-[13px] font-medium px-[14px] py-[8px] rounded-[4px] whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:right-[65px] transition-all duration-500">
                        Browse wishlist
                        <span className="absolute top-1/2 right-[-5px] -translate-y-1/2 w-[10px] h-[10px] bg-black rotate-45"></span>
                      </span>

                      <button className="cursor-pointer w-[52px] h-[52px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#BA4B40] hover:text-white transition-all duration-500">
                        <Heart size={20} strokeWidth={1.8} />
                      </button>
                    </div>

                    <div className="relative group/tooltip">
                      <span className="absolute right-[55px] top-1/2 -translate-y-1/2 bg-black text-white text-[13px] font-medium px-[14px] py-[8px] rounded-[4px] whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:right-[65px] transition-all duration-500">
                        Quick View
                        <span className="absolute top-1/2 right-[-5px] -translate-y-1/2 w-[10px] h-[10px] bg-black rotate-45"></span>
                      </span>

                      <button className="cursor-pointer w-[52px] h-[52px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#BA4B40] hover:text-white transition-all duration-500">
                        <Eye size={20} strokeWidth={1.8} />
                      </button>
                    </div>
                    <div className="relative group/tooltip">
                      <span className="absolute right-[55px] top-1/2 -translate-y-1/2 bg-black text-white text-[13px] font-medium px-[14px] py-[8px] rounded-[4px] whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:right-[65px] transition-all duration-500">
                        Compare
                        <span className="absolute top-1/2 right-[-5px] -translate-y-1/2 w-[10px] h-[10px] bg-black rotate-45"></span>
                      </span>
                      <button className="cursor-pointer w-[52px] h-[52px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#BA4B40] hover:text-white transition-all duration-500">
                        <RefreshCcw size={20} strokeWidth={1.8} />
                      </button>
                    </div>
                    <button className="cursor-pointer w-[52px] hover:w-[150px] overflow-hidden flex items-center justify-start px-[16px] gap-[12px] h-[52px] rounded-full bg-white shadow-md hover:bg-[#BA4B40] hover:text-white transition-all duration-500 group/button">
                      <span className="whitespace-nowrap hidden max-w-0 group-hover/button:block group-hover/button:max-w-[130px] transition-all duration-500 text-[14px] font-medium order-1">
                        Select Options
                      </span>

                      <ShoppingCart
                        size={20}
                        strokeWidth={1.8}
                        className="shrink-0 order-2"
                      />
                    </button>
                  </div>
                  {product.colors.length > 0 && (
                    <div className="absolute bottom-[20px] w-max left-[50%] translate-x-[-50%] flex items-center gap-[10px] bg-white rounded-full px-[16px] py-[10px]">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="w-[18px] h-[18px] rounded-full cursor-pointer"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}

                      {product.more && (
                        <span className="text-[14px] cursor-pointer">
                          {product.more}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-[18px]">
                  <div className="flex items-center gap-[4px] text-[#f5a623] text-[14px]">
                    <Star size={18} fill="#f5a623" color="#f5a623" />
                    <Star size={18} fill="#f5a623" color="#f5a623" />
                    <Star size={18} fill="#f5a623" color="#f5a623" />
                    <Star size={18} fill="#f5a623" color="#f5a623" />
                    <Star size={18} fill="#f5a623" color="#f5a623" />
                    <span className="text-[#999999] text-[16px] font-medium">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <h3 className="text-[18px] font-medium leading-[20px] text-black mt-[8px] line-clamp-1 hover:text-[#c74d3f] transition-colors duration-200 cursor-pointer">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-[10px] mt-[8px]">
                    <span className="text-[#c74d3f] text-[24px] font-semibold">
                      {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-[#999999] mt-[6px] line-through text-[18px]">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-[#999999] mt-[8px] text-[16px] flex items-center gap-[4px]">
                    <Truck size={18} /> {product.delivery}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Ourfev;
