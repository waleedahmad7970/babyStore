"use client";
import { FreeMode } from "swiper/modules";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../product/cards/product-card";
interface Product {
  id: number;
  title: string;
  image: StaticImageData | string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
}
interface ProductSliderProps {
  products: Product[];
}

export default function ProductSwiperSlider({ products }: ProductSliderProps) {
  return (
    <div className="relative w-full overflow-hidden px-[10px]">
      {/* <SliderHeading onPrev={previous} onNext={next} /> */}
      <div className="relative mx-auto min-h-[410px] max-w-[1360px]">
        <div className="relative left-0 w-[100vw]">
          <Swiper
            slidesPerView="auto"
            // freeMode={{
            //   enabled: true,
            //   momentum: true,
            //   momentumBounce: true,
            //   momentumRatio: 0.5,
            //   momentumVelocityRatio: 0.5,
            // }}
            speed={500}
            spaceBetween={20}
            modules={[FreeMode]}
            className="product-swiper"
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id} className="!w-[240px]">
                <ProductCard key={product.id} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
