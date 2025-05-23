"use client";

import { StaticImageData } from "next/image";
import { useAppSelector } from "@/store/hooks";
import CategoryCardTwo from "./category-card-two";
import { imageBaseUrl } from "@/config/config";

interface Category {
  name: string;
  image: StaticImageData;
}

export default function CategoryListTwo() {
  const { topCategories = [] } = useAppSelector((state) => state.product);

  return (
    <div className="cus-container flex w-full flex-col justify-start gap-4 !py-5 md:!pt-[70px] md:pb-[20px]">
      <div className="text-center text-[18px] font-medium text-[#1A1718] md:text-[24px]">
        Top Categories
      </div>
      <div className="no-scrollbar flex w-full justify-center gap-2 overflow-x-auto md:gap-[9px]">
        {topCategories.map((category: Category, index) => (
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
      </div>
    </div>
  );
}
