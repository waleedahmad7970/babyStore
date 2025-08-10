"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface CategoryCardPropsTwo {
  name: string;
  image: string | StaticImageData;
  className?: string;
  paraClassName?: string;
  ImgClass?: string;
  hoveredId?: number | null;
  categoryId?: number;
  cat_image?: string | any;
  url?: any;
}
const CategoryCardTwo: React.FC<CategoryCardPropsTwo> = ({
  cat_image,
  name,
  // image,
  className = "w-[99px] h-[99px] bg-[#FFF0F5]",
  paraClassName = "mt-[11.22px] text-[12px] leading-[14.36px] font-medium text-[#1A1718] md:text-[16px] md:leading-[19.36px]",
  ImgClass = "object-contain",
  // hoveredId,
  // categoryId,
  url,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex cursor-pointer items-center justify-center rounded-s-[40px] rounded-e-[40px] rounded-t-[40px] rounded-b-[40px] ${className}`}
      >
        {/* {hoveredId !== null && hoveredId !== categoryId && (
          <div className="absolute z-0 h-[99px] w-[99px] rounded-s-[40px] rounded-e-[40px] rounded-t-[40px] rounded-b-[40px] bg-black/50 transition duration-300" />
        )} */}
        <Image
          onClick={() => url && router.push(url)}
          height={99}
          width={99}
          src={cat_image}
          alt={name || "slug"}
          className={ImgClass}
          loading="lazy"
        />
      </div>
      <p className={`${paraClassName}`}>{name || "Category name"}</p>
    </div>
  );
};

export default CategoryCardTwo;
