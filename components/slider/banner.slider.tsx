"use client";

import Image, { StaticImageData } from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
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
        effect="fade"
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
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
            <div className="relative block aspect-[375/375] w-full sm:hidden">
              <Image
                src={slide.mobileImg}
                alt={slide.alt}
                className="h-full w-full object-fill"
                priority
                // sizes="100vw"
                // fill
              />
            </div>

            {/* Desktop Image (hidden on mobile) */}
            {/* <div className="relative hidden h-[466px] w-full md:block"> */}
            {/* <div className="relative hidden aspect-[1440/466] w-full sm:block">
              <Image
                src={slide.desktopImg}
                alt={slide.alt}
                className="h-full w-full"
                // fill
                priority
                // sizes="100vw"
              />
            </div> */}
            <div className="relative hidden aspect-[1440/466]] w-full sm:block">
              <Image
                src={slide.desktopImg}
                alt={slide.alt}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev absolute top-1/2 left-[60px] z-10 ml-4 hidden -translate-y-1/2 transform text-white after:hidden sm:block">
        <button className="flex h-[40px] w-[80px] min-w-[40px] items-center justify-center rounded-full bg-[#F470AB] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90">
          <Image
            src={slider_left_arrow}
            alt="Previous"
            width={24}
            height={24}
          />
        </button>
      </div>

      <div className="swiper-button-next absolute top-1/2 right-[60px] z-10 mr-4 hidden -translate-y-1/2 transform text-white after:hidden sm:block">
        <button className="flex h-[40px] w-[80px] min-w-[40px] items-center justify-center rounded-full bg-[#F470AB] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90">
          <Image src={slider_right_arrow} alt="Next" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
