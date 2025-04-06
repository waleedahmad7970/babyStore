"use client";
import { useRef } from "react";
import { StaticImageData } from "next/image";
import ProductCard from "../product/cards/product-card";
import SliderHeading from "../header-titles/slider-header";
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
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-auto min-h-[410px] max-w-[1360px]">
      <SliderHeading
        onPrev={() => scrollBy("left")}
        onNext={() => scrollBy("right")}
      />
      <div className="relative left-0 w-[100vw] px-[10px]">
        <div
          ref={scrollRef}
          className="no-scrollbar mx-auto flex w-full justify-between gap-3 overflow-x-auto"
        >
          <div className="flex max-w-[240px] justify-start gap-5">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
