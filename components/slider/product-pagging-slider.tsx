import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import { productData } from "@/static/static";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const ProductPagingSlider: React.FC = () => {
  const { images = [] } = productData;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="slider-container">
      <div className="overflow-hidden rounded-[10px] border border-[#00000033]">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[375px] md:h-[839px]">
                <Image
                  src={img}
                  alt={`Image ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
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
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="h-[124px] max-w-[124px] overflow-hidden rounded-[8px] border border-[#00000033]"
          >
            {/* <div className=""> */}
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
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
