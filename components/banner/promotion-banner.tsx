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
    <div className="cus-container group relative my-12 overflow-hidden rounded-2xl md:my-[100px]">
      <Image
        src={image}
        alt={title}
        className="z-0 h-[260px] w-full rounded-2xl object-cover transition-all duration-500 hover:scale-125 sm:h-[320px] md:h-full"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h2 className="mb-2 text-2xl font-bold tracking-tight drop-shadow-lg transition-all duration-500 sm:mb-3 sm:text-3xl md:text-[50px] md:group-hover:-translate-y-1 md:group-hover:scale-105">
          {title}
        </h2>
        <p className="max-w-sm text-sm leading-5 drop-shadow-md transition-all delay-100 duration-500 sm:max-w-md sm:text-base sm:leading-6 md:text-lg md:group-hover:translate-y-[-4px]">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-4 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-500 hover:bg-[#E7448C] hover:text-white sm:mt-6 sm:px-6 sm:py-3 sm:text-base md:hover:scale-110"
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="absolute inset-0 z-10 rounded-2xl bg-black/20" />
    </div>
  );
};

export default DynamicPromotionBanner;
