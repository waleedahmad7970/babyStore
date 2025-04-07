"use client";

import Image, { StaticImageData } from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slider_left_arrow, slider_right_arrow } from "@/public/assets/icons";

interface Slide {
  id: number;
  desktopImg: string | StaticImageData;
  mobileImg: string | StaticImageData;
  alt: string;
}

export default function BannerSlider({ slides }: { slides: Slide[] }) {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={500}
        className="w-full"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Mobile Image (hidden on desktop) */}
            <div className="relative h-[375px] w-full md:hidden">
              <Image
                src={slide.mobileImg}
                alt={slide.alt}
                className="h-full w-full object-cover"
                priority
                sizes="100vw"
                fill
              />
            </div>

            {/* Desktop Image (hidden on mobile) */}
            <div className="relative hidden h-[466px] w-full md:block">
              <Image
                src={slide.desktopImg}
                alt={slide.alt}
                className="h-full w-full object-cover"
                fill
                priority
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev absolute top-1/2 left-[60px] z-10 ml-4 hidden -translate-y-1/2 transform text-white after:hidden md:block">
        <button className="flex h-[60px] w-[80px] min-w-[60px] items-center justify-center rounded-full bg-[#F470AB] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90">
          <Image
            src={slider_left_arrow}
            alt="Previous"
            width={40}
            height={40}
          />
        </button>
      </div>

      <div className="swiper-button-next absolute top-1/2 right-[60px] z-10 mr-4 hidden -translate-y-1/2 transform text-white after:hidden md:block">
        <button className="flex h-[60px] w-[80px] min-w-[60px] items-center justify-center rounded-full bg-[#F470AB] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90">
          <Image src={slider_right_arrow} alt="Next" width={40} height={40} />
        </button>
      </div>
    </div>
  );
}
