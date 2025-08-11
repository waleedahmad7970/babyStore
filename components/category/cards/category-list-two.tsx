"use client";

import { StaticImageData } from "next/image";
import { useAppSelector } from "@/store/hooks";
import CategoryCardTwo from "./category-card-two";
import { imageBaseUrl } from "@/config/config";
import Slider from "react-slick";

interface Category {
  name: string;
  image: StaticImageData;
}

export default function CategoryListTwo() {
  const { topCategories = [] } = useAppSelector((state) => state.product);
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    slidesToScroll: 1, // ← one at a time
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true, // optional
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          centerPadding: "40px",
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="cus-container flex w-full flex-col justify-start gap-4 overflow-hidden !py-5 md:!pt-[70px] md:pb-[20px]">
      <div className="text-center text-[18px] font-medium text-[#1A1718] md:text-[24px]">
        Top Categories
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {topCategories?.map((category: Category, index) => (
            <div key={index} className="max-w-[162px] flex-shrink-0">
              <CategoryCardTwo
                cat_image={`${imageBaseUrl}/assets/favorite_category/${category.image}`}
                paraClassName="mt-[18px] text-[12px] leading-[14.36px] font-medium text-[#1A1718] md:text-[20px] md:leading-normal"
                ImgClass="object-contain max-w-[70px] md:max-w-[131px] max-h-[65px] md:max-h-[123px]"
                className="h-[85px] w-[85px] !rounded-[35px] bg-[#FFF1E9] md:h-[162px] md:w-[162px] md:!rounded-[70px]"
                {...category}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
