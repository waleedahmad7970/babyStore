"use client";
import CategoryCard from "./category-card";
import { categoriesL2 } from "@/static/static";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

interface Category {
  name: string;
  image: string;
}

export default function CategoryListTwo() {
  return (
    <div className="cus-container flex w-full flex-col justify-start gap-4 !py-5 md:!pt-[70px] md:pb-[20px]">
      <div className="text-center text-[18px] font-medium text-[#1A1718] md:text-[24px]">
        Top Categories
      </div>
      {/* Scrollable container */}

      {/* <Swiper
        spaceBetween={8}
        slidesPerView="auto"
        loop={true}
        grabCursor={true}
        allowTouchMove={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: false, // 👈 key to pausing instantly
        }}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        {[...categoriesL2, ...categoriesL2].map((category: Category, index) => (
          <SwiperSlide key={index} style={{ width: "162px" }}>
            <CategoryCard
              paraClassName="mt-[18px] text-[12px] leading-[14.36px] font-medium text-[#1A1718] md:text-[20px] md:leading-normal"
              ImgClass="object-contain max-w-[70px] md:max-w-[131px] max-h-[65px] md:max-h-[123px]"
              className="h-[85px] w-[85px] !rounded-[35px] bg-[#FFF1E9] md:h-[162px] md:w-[162px] md:!rounded-[70px]"
              {...category}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <div className="no-scrollbar flex w-full gap-2 overflow-x-auto md:gap-[9px]">
        {categoriesL2.map((category: Category, index) => (
          <div key={index} className="max-w-[162px] flex-shrink-0">
            <CategoryCard
              paraClassName="mt-[18px] text-[12px] leading-[14.36px] font-medium text-[#1A1718] md:text-[20px] md:leading-normal"
              ImgClass="object-contain max-w-[70px] md:max-w-[131px] max-h-[65px] md:max-h-[123px]"
              className="h-[85px] w-[85px] !rounded-[35px] bg-[#FFF1E9] md:h-[162px] md:w-[162px] md:!rounded-[70px]"
              {...category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
