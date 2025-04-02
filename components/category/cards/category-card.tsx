import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  name: string;
  image: string;
  className?: string;
  paraClassName?: string;
  ImgClass?: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  className = "w-[99px] h-[99px] bg-[#FFF0F5]",
  paraClassName = "mt-[11.22px] text-[12px] leading-[14.36px] font-medium text-[#1A1718] md:text-[16px] md:leading-[19.36px]",
  ImgClass = "object-contain",
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex items-center justify-center rounded-s-[40px] rounded-e-[40px] rounded-t-[40px] rounded-b-[40px] ${className}`}
      >
        <Image src={image} alt={name} className={ImgClass} loading="lazy" />
      </div>
      <p className={`${paraClassName}`}>{name}</p>
    </div>
  );
};

export default CategoryCard;
