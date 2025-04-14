import React from "react";
import Image, { StaticImageData } from "next/image";
import { productsLIST1 } from "@/static/static";
import { happyTummyBanner } from "@/public/assets/banner";
import ProductSwiperSlider from "@/components/slider/product.swiper";

interface CategorSectiondProps {
  ImgClass?: string;
  className?: string;
  bannerImage?: string | StaticImageData;
  categoryImages: string[];
  bannerImageMob?: string;
}
const CategorySection: React.FC<CategorSectiondProps> = ({
  bannerImageMob = "",
  bannerImage = happyTummyBanner,
  className = " gap-[10px] md:gap-[21px]",
  categoryImages = [],
  ImgClass = "w-[172px] h-[201px]  lg:w-[324px] lg:h-[379px] object-cover",
}) => {
  return (
    <div className="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      {/* <Image
        src={bannerImage}
        width={100}
        height={100}
        className="cus-container hidden h-[236px] w-full object-cover sm:block md:h-full"
        alt="banner"
      /> */}
      <div className="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <Image
          src={bannerImage}
          alt="Banner"
          className="cus-container h-full w-full object-cover"
        />
      </div>
      {/* <Image
        src={bannerImageMob}
        className="cus-container block h-[236px] w-full object-cover sm:hidden md:h-full"
        alt="banner"
      /> */}
      <div className="cus-container relative block aspect-[640/236] w-full rounded-[8px] sm:hidden">
        <Image
          src={bannerImageMob}
          alt="Mobile Banner"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className={`cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between ${className}`}
      >
        {categoryImages.map((item: any, index: number) => (
          <Image key={index} className={ImgClass} src={item} alt={"product"} />
        ))}
      </div>

      <ProductSwiperSlider products={productsLIST1} />
    </div>
  );
};

export default CategorySection;
