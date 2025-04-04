"use client";

import Image, { StaticImageData } from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Slide {
  id: number;
  desktopImg: string | StaticImageData;
  mobileImg: string | StaticImageData;
  alt: string;
}

export default function BannerSlider({ slides }: { slides: Slide[] }) {
  return (
    <div className="w-full">
      <Swiper autoplay={{ delay: 3000 }} modules={[Autoplay]} slidesPerView={1}>
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Mobile Image (hidden on desktop) */}
            <div className="relative h-[375px] w-full md:hidden">
              <Image
                src={slide.mobileImg}
                alt={slide.alt}
                className="h-full w-full"
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
                className="h-full w-full"
                fill
                priority
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
