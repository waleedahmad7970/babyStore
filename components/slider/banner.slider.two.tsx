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
      description:
        "Your little one will love creating their own tricky styles.",
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
              <div className="relative aspect-[1440/500] w-full max-sm:aspect-[290/220]">
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

                {/* TEXT AREA */}
                <div className="cus-container relative flex h-full w-full flex-col items-start justify-center px-4 sm:px-0">
                  <div
                    className={`text-white transition-all duration-700 ${
                      activeIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {/* Heading */}
                    <h4 className="font-poppins text-[clamp(2rem,3vw,5rem)] font-light tracking-tight text-[#E7448C] uppercase">
                      {slide.heading}
                    </h4>

                    {/* Title */}
                    <h2 className="mt-2 max-w-[clamp(13rem,40vw,26rem)] text-[clamp(1.5rem,3vw,4rem)] leading-tight font-bold">
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 max-w-[clamp(18rem,50vw,32rem)] text-[clamp(1rem,1.3vw,1.4rem)] text-pink-300">
                      {slide.description}
                    </p>

                    {/* Button */}
                    <Button
                      className="mt-2 cursor-pointer rounded-4xl bg-[#E7448C] px-[clamp(1rem,4vw,4rem)] py-[clamp(0.6rem,2vw,1rem)] text-[clamp(0.9rem,2vw,1.2rem)] font-bold text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#000] md:mt-5"
                      text={"Shop Now"}
                    />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-6 sm:gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
              activeIndex === index
                ? "w-6 bg-[#E7448C] sm:w-9"
                : "bg-[#E7448C]/70 hover:bg-[#E7448C]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
