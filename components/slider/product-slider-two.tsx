"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rocket, ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../cards/product-card";
import {
  specialItems2,
  specialItems3,
  specialItems4,
  specialItems5,
  specialItems6,
} from "@/public/assets/support";

const products = [
  {
    id: 1,
    image: specialItems2,
    title: "Baby Bag Soft panda",
    price: 50,
    discount: 10,
    rating: 5,
  },
  {
    id: 2,
    image: specialItems3,
    title: "Cute Green Snail Toy",
    price: 80,
    discount: 10,
    rating: 5,
  },
  {
    id: 3,
    image: specialItems4,
    title: "Playmat For Little One",
    price: 70,
    discount: 10,
    rating: 5,
  },
  {
    id: 4,
    image: specialItems5,
    title: "Baby Green Soft Turtle",
    price: 50,
    discount: 10,
    rating: 5,
  },
  {
    id: 5,
    image: specialItems6,
    title: "New Kids Toy Horse",
    price: 50,
    discount: 10,
    rating: 4,
  },
];

const ProductsSliderTwo: React.FC<{ title?: string; subtitle?: string }> = ({
  title = "Best Sellers",
  subtitle = "Enjoy the all best products",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="group relative bg-white py-10">
      <div className="cus-container">
        {/* ✅ Centered Section Heading */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[2px] w-full bg-[#E7448A]/60"></span>
            <h3 className="min-w-[200px] text-[28px] leading-[28px] font-light text-gray-900">
              {title}
            </h3>
            <span className="h-[2px] w-full bg-[#E7448A]/60"></span>
          </div>
          {subtitle && (
            <span className="mt-3 block text-base leading-[16px] text-gray-500 italic">
              {subtitle}
            </span>
          )}
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden pb-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            breakpoints={{
              639: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            className="!overflow-visible"
          >
            {products.map((item: any) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  image={item.image}
                  discount={item.discount}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="prev-btn absolute top-1/2 left-4 z-10 -translate-x-10 -translate-y-1/2 cursor-pointer rounded-[8px] bg-white px-3 py-9 opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#E7448A] hover:text-white">
            <ArrowLeft size={20} />
          </button>

          <button className="next-btn absolute top-1/2 right-4 z-10 translate-x-10 -translate-y-1/2 cursor-pointer rounded-[8px] bg-white px-3 py-9 opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#E7448A] hover:text-white">
            <ArrowRight size={20} />
          </button>

          {/* ✅ Custom Dots */}
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-[#E7448A]"
                    : "w-3 bg-[#E7448A]/40 hover:bg-[#E7448A]/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSliderTwo;
