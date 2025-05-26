import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Slide } from "../types/types";
import { imageBaseUrl } from "@/config/config";
import { useAppSelector } from "@/store/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider_left_arrow, slider_right_arrow } from "@/public/assets/icons";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function BannerSliderMob() {
  const { mobSliderImages = [] } = useAppSelector((state) => state.product);

  return (
    <div className="relative block w-full sm:hidden">
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
        {mobSliderImages?.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <a href={slide.link} rel="noopener noreferrer">
              <div className="relative aspect-[375/375] w-full">
                <Image
                  src={
                    typeof slide.mobile_image === "string"
                      ? `${imageBaseUrl}/assets/sliders/${slide.mobile_image}`
                      : slide.mobile_image
                  }
                  alt={slide.alt || "banner-image-mob"}
                  className="h-full w-full object-fill"
                  priority
                  sizes="100vw"
                  fill
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows - visible only on sm+ */}
      <div className="swiper-button-prev absolute top-1/2 left-[60px] z-10 ml-4 hidden -translate-y-1/2 transform text-white after:hidden sm:block">
        <button className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-[#F470AB] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90">
          <Image
            src={slider_left_arrow}
            alt="Previous"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="swiper-button-next absolute top-1/2 right-[60px] z-10 mr-4 hidden -translate-y-1/2 transform text-white after:hidden sm:block">
        <button className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-[#F470AB] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90">
          <Image src={slider_right_arrow} alt="Next" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
