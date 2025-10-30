
"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { slider_bg_1, slider_bg_2 } from "@/public/assets/banner";
import { imageBaseUrl } from "@/config/config";
import { useState } from "react";
import Button from "../button/button";

export default function BannerSliderTwo() {
  const sliderImages = [
    {
      heading: "Trending Now",
      title: "Kid's Fashion New Bundle Set",
      description: "Your little one will love creating their own tricky styles.",
      image: slider_bg_1,
      link: "/shop",
      id: 1,
    },
    {
      heading: "Limited Edition",
      title: "Discounted Kid's Clothing Set",
      description: "Full of love and ready to give enormous hugs.",
      image: slider_bg_2,
      link: "/shop",
      id: 2,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        loop
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <a href={slide.link} rel="noopener noreferrer">
              <div className="relative aspect-[1440/500] w-full">
                <Image
                  src={
                    typeof slide.image === "string"
                      ? `${imageBaseUrl}/assets/sliders/${slide.image}`
                      : slide.image
                  }
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay + Text */}
                <div className="relative w-full h-full cus-container flex flex-col items-start justify-center">
                  <div
                    className={`text-white transition-all duration-700 ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h4 className="text-sm sm:text-[66px] leading-[55px] font-light uppercase tracking-[-5.52px] text-[#E7448C]">
                      {slide.heading}
                    </h4>
                    <h2 className="mt-2 text-2xl sm:text-[60px] leading-[54px] font-bold max-w-[340px]">
                      {slide.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm sm:text-base text-pink-300">
                      {slide.description}
                    </p>
                    <Button
                      className="my-[10px] bg-[#E7448C] hover:bg-[#000] text-white rounded-4xl px-20 py-3 text-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-bold cursor-pointer"
                      text={"Shop Now"}
                    />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Tailwind Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#E7448C] w-6"
                : "bg-[#E7448C]/70 hover:bg-[#E7448C]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
