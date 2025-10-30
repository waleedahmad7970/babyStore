"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface DynamicPromotionBannerProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const DynamicPromotionBanner: React.FC<DynamicPromotionBannerProps> = ({
  image,
  title,
  description,
  buttonText = "Shop Now",
  onButtonClick,
}) => {
  return (
    <div className="relative my-[100px] cus-container rounded-[2rem] overflow-hidden group">
      {/* ✅ Background Image */}
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
      />

      {/* ✅ Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-[50px] font-bold mb-3 tracking-tight drop-shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
          {title}
        </h2>
        <p className="max-w-xl text-base md:text-lg drop-shadow-md leading-6 transition-all duration-500 delay-100 group-hover:translate-y-[-4px]">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-500 hover:bg-[#E7448C] hover:text-white hover:scale-x-200"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-[2rem]" />
    </div>
  );
};

export default DynamicPromotionBanner;
