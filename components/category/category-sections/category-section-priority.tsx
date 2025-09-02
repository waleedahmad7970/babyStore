import React from "react";
import Image, { StaticImageData } from "next/image";
import { happyTummyBanner } from "@/public/assets/banner";
import ProductSwiperSlider from "@/components/slider/product.swiper";

interface CategorSectiondProps {
  ImgClass?: any;
  className?: any;
  bannerImage?: any | string | StaticImageData;
  bannerImageMob?: any | string | StaticImageData;
  categoryImages?: any | (string | StaticImageData)[];
  positions: {
    desktop: any[];
    mobile: any[];
  };
  isMobile?: any;
  products?: any[];
  productsTitle?: string;
  section_type?: any;
  mobile_banner?: any;
  underPrice_banners?: any;
  kids_banner?: any;
}

const CategorySectionPriority: React.FC<CategorSectiondProps> = ({
  bannerImageMob = "",
  bannerImage = happyTummyBanner,
  className = "gap-[10px] md:gap-[21px]",
  categoryImages = [],
  ImgClass = "w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover",
  positions,
  isMobile = false,
  products = [],
  mobile_banner = "",
  productsTitle,
  section_type = "section_1",
  underPrice_banners = [],
  kids_banner = [],
}) => {
  // typebased sections
  const sectionTypeBaseBanners: Record<string, React.ReactNode> = {
    section_1: (
      <>
        {/* Desktop Banner */}
        <div className="relative hidden aspect-[1148/199] w-full rounded-[8px] sm:block">
          <Image
            src={bannerImage}
            alt="Banner"
            width={1148}
            height={199}
            className="cus-container h-full w-full object-cover"
            priority
          />
        </div>
        {/* Mobile Banner */}
        <div className="cus-container relative block aspect-[410/275] w-full rounded-[8px] sm:hidden">
          <Image
            src={mobile_banner || bannerImage}
            alt="Mobile Banner"
            fill
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </>
    ),
    section_2: (
      <>
        {/* Desktop Banner */}
        <div className="relative hidden aspect-[1148/199] w-full rounded-[8px] sm:block">
          <Image
            src={bannerImage}
            alt="Banner"
            width={1148}
            height={199}
            className="cus-container h-full w-full object-cover"
            priority
          />
        </div>
        {/* Mobile Banner */}
        <div className="cus-container relative block aspect-[410/275] w-full rounded-[8px] sm:hidden">
          <Image
            src={mobile_banner || bannerImage}
            alt="Mobile Banner"
            fill
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </>
    ),
    section_3: (
      <>
        {/* Desktop Banner */}
        <div className="relative hidden aspect-[1148/199] w-full rounded-[8px] sm:block">
          <Image
            src={bannerImage}
            alt="Banner"
            width={1148}
            height={199}
            className="cus-container h-full w-full object-cover"
            priority
          />
        </div>
        {/* Mobile Banner */}
        <div className="cus-container relative block aspect-[410/275] w-full rounded-[8px] sm:hidden">
          <Image
            src={mobile_banner || bannerImage}
            alt="Mobile Banner"
            fill
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </>
    ),
  };

  // sub banners
  const sectionTypeBaseSubBanners: Record<string, React.ReactNode> = {
    section_1: (
      <>
        <div
          className={`mb-5 flex flex-wrap justify-center md:mb-0 md:justify-center ${className}`}
        >
          {categoryImages.map((item: any, index: number) => (
            <Image
              key={index}
              className={
                "h-[230px] w-[48%] object-cover md:object-contain lg:h-[379px] lg:w-[324px]"
              }
              src={item}
              height={300}
              width={300}
              alt="product"
            />
          ))}
        </div>
      </>
    ),
    section_2: (
      <>
        <div
          className={`mb-5 flex flex-wrap justify-center gap-[10px] md:mb-0 md:justify-center md:gap-[14px]`}
        >
          {categoryImages.map((item: any, index: number) => (
            <Image
              key={index}
              className={
                "h-[230px] w-[48%] object-cover sm:w-[162px] md:object-contain lg:h-[282px] lg:w-[215px]"
              }
              src={item}
              height={300}
              width={300}
              alt="product"
            />
          ))}
        </div>
      </>
    ),
    section_3: (
      <>
        <div
          className={`mb-5 flex flex-wrap justify-center gap-[10px] md:mb-0 md:justify-center md:gap-[14px]`}
        >
          {categoryImages.map((item: any, index: number) => (
            <Image
              key={index}
              className={
                "h-[230px] w-[48%] object-cover sm:w-[162px] md:object-contain lg:h-[252px] lg:w-[215px]"
              }
              src={item}
              height={300}
              width={300}
              alt="product"
            />
          ))}
        </div>
      </>
    ),
  };

  const sectionTypeBaseunderPriceBanners: Record<string, React.ReactNode> = {
    section_3: (
      <div className="flex w-full flex-col justify-between gap-[10px] md:flex-row md:gap-6">
        {underPrice_banners.map((price: any, index: number) => (
          <div key={index} className="w-full">
            <Image
              className="h-auto w-full md:max-w-[431px]"
              src={price}
              alt={`under price ${index}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    ),
  };

  const sectionTypeBaseKidsBanners: Record<string, React.ReactNode> = {
    section_3: (
      <div className="cus-container flex w-full justify-between gap-0 rounded-[8px]">
        {kids_banner?.map((price: any, index: number) => (
          <div key={index} className="w-full max-w-[680px] md:w-1/2">
            <Image
              className="w-full object-cover md:rounded-md lg:h-[425px]"
              src={price}
              alt={`under price ${index}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    ),
  };
  const order = positions.desktop;

  const renderSection = (section: string) => {
    switch (section) {
      case "main_banner":
        return <>{sectionTypeBaseBanners[section_type]}</>;
      case "products":
        return (
          <ProductSwiperSlider title={productsTitle} products={products} />
        );
      case "sub_banner":
        return <>{sectionTypeBaseSubBanners[section_type]}</>;

      case "under_price_banners":
        return <>{sectionTypeBaseunderPriceBanners[section_type]}</>;

      case "kids_banner":
        return <>{sectionTypeBaseKidsBanners[section_type]}</>;
      default:
        return null;
    }
  };

  return (
    <div className="cus-container relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      {order.map((section) => (
        <React.Fragment key={section}>{renderSection(section)}</React.Fragment>
      ))}
    </div>
  );
};

export default CategorySectionPriority;
