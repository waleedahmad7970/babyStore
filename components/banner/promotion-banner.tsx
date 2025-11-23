


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
    <div className="relative my-12 md:my-[100px] cus-container rounded-2xl overflow-hidden group">
      <Image
        src={image}
        alt={title}
        className="w-full h-[260px] sm:h-[320px] md:h-full object-cover rounded-2xl z-0"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-[50px] font-bold mb-2 sm:mb-3 tracking-tight drop-shadow-lg transition-all duration-500 md:group-hover:-translate-y-1 md:group-hover:scale-105">
          {title}
        </h2>
        <p className="max-w-sm sm:max-w-md text-sm sm:text-base md:text-lg drop-shadow-md leading-5 sm:leading-6 transition-all duration-500 delay-100 md:group-hover:translate-y-[-4px]">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-4 sm:mt-6 bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-500 hover:bg-[#E7448C] hover:text-white md:hover:scale-110"
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="absolute inset-0 bg-black/20 rounded-2xl z-10" />
    </div>
  );
};

export default DynamicPromotionBanner;
