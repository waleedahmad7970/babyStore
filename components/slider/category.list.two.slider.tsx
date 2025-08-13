"use client";

import React, { useRef, useEffect } from "react";
import SliderHeading from "../header-titles/slider-header";
import CategoryCardTwo from "../category/cards/category-card-two";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useScrollSlider } from "@/hooks/useScrollSlider";
import { useAppSelector } from "@/store/hooks";
import { imageBaseUrl } from "@/config/config";
import { StaticImageData } from "next/image";

interface Category {
  name: string;
  image: StaticImageData;
}

const CategoryTwoListSlider: React.FC = () => {
  const { topCategories = [] } = useAppSelector((state) => state.product);
  const { width } = useWindowDimensions();
  const scrollAmount = width < 768 ? 277 : 407;
  const { scrollRef, scrollBy } = useScrollSlider(scrollAmount);

  // Mouse swipe detection
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    const onMouseDown = (e: MouseEvent) => {
      startX = e.clientX;
    };

    const onMouseUp = (e: MouseEvent) => {
      endX = e.clientX;
      const diff = endX - startX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollBy("left"); // swipe right → go left
        } else {
          scrollBy("right"); // swipe left → go right
        }
      }
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
    };
  }, [scrollBy]);

  return (
    <div className="cus-container relative w-full overflow-hidden !py-5 pl-[10px] md:py-10">
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="no-scrollbar relative flex snap-x snap-mandatory justify-start gap-[10px] overflow-x-auto scroll-smooth md:gap-4"
        >
          {[...topCategories, ...topCategories]?.map(
            (category: Category, index) => (
              <div key={index} className="max-w-[162px] flex-shrink-0">
                <CategoryCardTwo
                  cat_image={`${imageBaseUrl}/assets/favorite_category/${category.image}`}
                  paraClassName="mt-[18px] text-[12px] leading-[14.36px] font-medium text-[#1A1718] md:text-[20px] md:leading-normal"
                  ImgClass="object-contain max-w-[70px] md:max-w-[131px] max-h-[65px] md:max-h-[123px]"
                  className="h-[85px] w-[85px] !rounded-[35px] bg-[#FFF1E9] md:h-[162px] md:w-[162px] md:!rounded-[70px]"
                  {...category}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryTwoListSlider;
