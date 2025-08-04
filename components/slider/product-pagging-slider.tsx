import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Pagination } from "swiper/modules";
import { productData } from "@/static/static";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
interface ProductPagingSliderProps {
  sliderImages: string[];
}

const ProductPagingSlider: React.FC<ProductPagingSliderProps> = ({
  sliderImages = [],
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="slider-container">
      <div className="overflow-hidden rounded-[10px] border border-[#00000033]">
        <Swiper
          spaceBetween={10}
          modules={[Pagination, Thumbs]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
        >
          {sliderImages?.map((img: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative h-[375px] md:h-[839px]">
                  <Image
                    src={`https://www.babystore.ae/storage/${img}`}
                    alt={`Image ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
        className="mt-4 hidden justify-start md:flex"
      >
        {sliderImages?.map((img: string, index: number) => (
          <SwiperSlide
            key={index}
            className="h-[124px] min-h-[92px] max-w-[124px] overflow-hidden rounded-[8px] border border-[#00000033] sm:max-h-[124px] sm:min-h-[124px]"
          >
            {/* <div className=""> */}
            <Image
              src={`https://www.babystore.ae/storage/${img}`}
              alt={`Thumbnail ${index}`}
              fill
              className="h-full w-full cursor-pointer object-cover"
            />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductPagingSlider;
