import React from "react";
import CategoryCard from "./category-card";
import { categoriesL2 } from "@/static/static";

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
      <div className="no-scrollbar flex w-full gap-2 overflow-x-auto md:gap-[9px]">
        {categoriesL2.map((category: Category, index) => (
          <div key={index} className="flex-shrink-0">
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
