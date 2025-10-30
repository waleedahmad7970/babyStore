"use client";

import DynamicPromotionBanner from "@/components/banner/promotion-banner";
import FeatureCardsTwo from "@/components/cards/feature-card-two";
import TopCategoriesSection from "@/components/category/top-categories";
import HeroVideo from "@/components/hero/hero-video";
import InitialRequest from "@/components/InitalRequest/initial-request";
import FeaturedCollection from "@/components/offers-designs/feature-collection";
import DealOfTheDay from "@/components/offers-designs/today-special";
import BestChoiceProductsSection from "@/components/sections/best-choice-products-section";
import BannerSliderTwo from "@/components/slider/banner.slider.two";
import BlogSliderTwo from "@/components/slider/blogs-slider-two";
import ReviewSliderTwo from "@/components/slider/review-slider-two";
import RotatingTextSlider from "@/components/slider/rotating-text-slider";
import SalesSlider from "@/components/slider/sales.slider";
import TopCategorySlider from "@/components/slider/top-category.slider";
import { bestQualityBanner } from "@/public/assets/support";

export default function Home() {
  return (
    <div>
      {/* <CategoryList /> */}
      <TopCategoriesSection />
      <div className="w-full">
        <BannerSliderTwo />
      </div>
      <FeatureCardsTwo />
      <div className="cus-container flex w-full items-center justify-between gap-[50px] overflow-hidden bg-white pt-[0px] pb-[100px]">
        <div className="flex max-w-[300px] flex-col justify-start">
          <h1 className="text-[26px] font-light text-[#E7448C] uppercase underline">
            Categories
          </h1>
          <p className="py-3 text-[55px] leading-[44px] font-normal text-[#E7448C]">
            Browsing Our Top Categories
          </p>
          <p className="text-[18px] leading-[23px] font-normal text-[#A8A8A8]">
            Browse our top categories with top nation and internation brands and
            find what you are looking for
          </p>
        </div>
        <TopCategorySlider />
      </div>
      <DealOfTheDay />
      <DynamicPromotionBanner
        image={bestQualityBanner}
        title="Best Quality, Best Comfort"
        description="Discover our premium collection of soft toys and comfort essentials made with love."
        buttonText="Shop Now"
        onButtonClick={() => alert("Button Clicked!")}
      />
      <RotatingTextSlider />
      <FeaturedCollection />
      <SalesSlider />
      <BestChoiceProductsSection />
      <HeroVideo />
      <SalesSlider title="Winter Collection Sale" />
      <RotatingTextSlider />
      <BlogSliderTwo />
      <ReviewSliderTwo />
    </div>
  );
}
