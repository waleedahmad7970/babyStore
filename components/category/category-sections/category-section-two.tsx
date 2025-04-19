import Image, { StaticImageData } from "next/image";
import React from "react";
import { productsLIST1, toy_section } from "@/static/static";
import UnderPricerBanner from "@/components/banners/under-price";
import ProductSwiperSlider from "@/components/slider/product.swiper";

interface CategorSectiondProps {
  ImgClass?: string;
  className?: string;
  showPrices?: boolean;
  bannerImages?:  string[] | StaticImageData[];
  categoryImages:  string[] | StaticImageData[];
}

const CategorySection: React.FC<CategorSectiondProps> = ({
  className = "",
  ImgClass = "w-[172px] h-[201px] md:w-auto md:h-auto lg:w-[324px] lg:h-[379px] object-cover",
  showPrices = false,
  bannerImages = [],
  categoryImages = [],
}) => {
  return (
    <div className="relative mb-5 flex flex-col items-center gap-5 pb-5 text-center sm:mb-0 md:pb-[60px]">
      {/* Banner Section */}
      <UnderPricerBanner data={toy_section} />
      {showPrices && (
        <div className="cus-container flex w-full justify-between gap-0 rounded-[8px]">
          {bannerImages?.map((banner, index) => (
            <div
              key={index}
              className={
                bannerImages.length === 1
                  ? "w-full"
                  : "w-full max-w-[680px] md:w-1/2"
              }
            >
              <Image
                src={banner}
                width={1000}
                height={425}
                className="w-full object-cover md:rounded-md lg:h-[425px]"
                alt={`banner-${index}`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Product Images Section */}
      <div
        className={`cus-container flex flex-wrap justify-center gap-[10px] md:justify-between md:gap-[5px] ${className} `}
      >
        {categoryImages.map((item, index) => (
          <Image
            key={index}
            className={ImgClass}
            src={item}
            alt={`product-${index}`}
          />
        ))}
      </div>

      <ProductSwiperSlider products={productsLIST1} />
    </div>
  );
};

export default CategorySection;
