"use client";
import { StaticImageData } from "next/image";
import { useScrollSlider } from "@/hooks/useScrollSlider";
import SliderHeading from "../header-titles/slider-header";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ProductCard from "../product/cards/product-card";
interface Product {
  id: number;
  name?: string;
  image: StaticImageData | string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  title: string | undefined;
  reviews?: any;
}
interface ProductSliderProps {
  products: Product[];
  title?: string;
}

export default function ProductSwiperSlider({
  products,
  title,
}: ProductSliderProps) {
  const { width } = useWindowDimensions();
  const { scrollRef, scrollBy } = useScrollSlider();
  let left = (width - 1360) / 2 - 10;
  if (left < 0) left = 0;

  return (
    <div className="relative w-full overflow-hidden py-5 pl-[10px] md:py-10">
      <div className="relative mx-auto w-full max-w-[1360px] pr-[10px]">
        <SliderHeading
          title={title}
          onPrev={() => scrollBy("left")}
          onNext={() => scrollBy("right")}
        />
      </div>
      <div
        // ref={scrollRef}
        // style={{ paddingLeft: `${left}px` }}
        // className="relative min-h-[310px] w-full max-w-[100dvw] md:min-h-[410px]"
        className="relative mx-auto min-h-[310px] w-full max-w-[1360px] md:min-h-[410px]"
      >
        <div
          ref={scrollRef}
          //  style={{ marginLeft: `${left}px` }}
          className="no-scrollbar relative min-h-[310px] overflow-x-auto md:min-h-[410px]"
        >
          <div className="flex justify-start gap-5">
            {products?.map((product, index) => {
              return <ProductCard key={index} product={product as any} />;

              // <ProductCardTwo key={product.id} product={product as any} />;
            })}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
