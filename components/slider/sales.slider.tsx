"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star, Rocket, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  specialItems1,
  specialItems2,
  specialItems3,
  specialItems4,
  specialItems5,
  specialItems6,
} from "@/public/assets/support";
import ProductCard from "../cards/product-card";

const products = [
  {
    id: 1,
    image: specialItems2,
    title: "Baby Bag Soft panda",
    price: 50,
    rating: 5,
  },
  {
    id: 2,
    image: specialItems3,
    title: "Cute Green Snail Toy",
    price: 80,
    rating: 5,
  },
  {
    id: 3,
    image: specialItems4,
    title: "Playmat For Little One",
    price: 70,
    rating: 5,
  },
  {
    id: 4,
    image: specialItems5,
    title: "Baby Green Soft Turtle",
    price: 50,
    rating: 5,
  },
  {
    id: 5,
    image: specialItems6,
    title: "New Kids Toy Horse",
    price: 50,
    rating: 4,
  },
];

const SalesSlider: React.FC = ({ title = "Flash Sale" }:any) => {
  return (
    <section className="group relative bg-white py-16">
      <div className="cus-container">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="text-[#E7448A]" size={28} />
            <h2 className="text-[28px] font-medium text-gray-900">
             {title}
            </h2>
            <div className="flex gap-2">
              {["-57", "-19", "-56", "-33"].map((num, i) => (
                <span
                  key={i}
                  className="rounded-md bg-[#E7448A] px-3 py-1 text-sm font-semibold text-white"
                >
                  {num}
                </span>
              ))}
            </div>
          </div>

          <button className="rounded-full bg-black px-6 py-2 font-medium text-white transition-all hover:bg-[#E7448A]">
            Explore All
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{
              delay: 2500000000000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="!overflow-visible"
          >
            {products.map((item: any) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-btn absolute top-1/2 left-4 z-10 -translate-x-10 -translate-y-1/2 cursor-pointer rounded-[8px] bg-white px-3 py-9 opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#E7448A] hover:text-white">
            <ArrowLeft size={20} />
          </button>

          <button className="next-btn absolute top-1/2 right-4 z-10 translate-x-10 -translate-y-1/2 cursor-pointer rounded-[8px] bg-white px-3 py-9 opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#E7448A] hover:text-white">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalesSlider;
