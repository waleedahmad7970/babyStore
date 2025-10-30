"use client";

import React from "react";
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
import { reviews } from "@/static/static";
import ReviewCard from "../cards/product-review-card";

const products = [
  {
    id: 1,
    image: specialItems2,
    title: "Baby Bag Soft Panda",
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

const ReviewSliderTwo: React.FC<{ title?: string }> = ({
  title = "Top Rated",
}) => {
  return (
    <section className="group relative bg-white py-0">
      <div className="cus-container">
        {/* Header */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] font-medium text-gray-900">
          Customers Say About Us

            </h2>
          </div>

          
        </div>

        {/* Swiper Slider */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="!overflow-visible"
          >
            {reviews.map((review: any) => (
              <SwiperSlide key={review.id}>
                <ReviewCard key={review.id} review={review} />
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
        </div>
      </div>
    </section>
  );
};

export default ReviewSliderTwo;
