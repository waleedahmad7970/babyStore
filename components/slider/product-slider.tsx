"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import ProductCard from "../product/cards/product-card";
import { StaticImageData } from "next/image";

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
const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    className: "product-slider",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden px-[10px]">
      {/* <SliderHeading onPrev={previous} onNext={next} /> */}
      <div className="relative mx-auto min-h-[410px] max-w-[1360px]">
        <div className="absolute left-0 w-[100vw]">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
