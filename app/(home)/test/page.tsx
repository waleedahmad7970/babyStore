"use client";

import DynamicPromotionBanner from "@/components/banner/promotion-banner";
import FeatureCardsTwo from "@/components/cards/feature-card-two";
import TopCategoriesSection from "@/components/category/top-categories";
import MobileNav from "@/components/header/mobile-nav";
import HeroVideo from "@/components/hero/hero-video";
import InitialRequest from "@/components/InitalRequest/initial-request";
import TopMenu from "@/components/menu/top-desktop-menu";
import FeaturedCollection from "@/components/offers-designs/feature-collection";
import DealOfTheDay from "@/components/offers-designs/today-special";
import BestChoiceProductsSection from "@/components/sections/best-choice-products-section";
import BannerSliderTwo from "@/components/slider/banner.slider.two";
import BlogSliderTwo from "@/components/slider/blogs-slider-two";
import ProductsSliderTwo from "@/components/slider/product-slider-two";
import ReviewSliderTwo from "@/components/slider/review-slider-two";
import RotatingTextSlider from "@/components/slider/rotating-text-slider";
import SalesSlider from "@/components/slider/sales.slider";
import TopCategorySlider from "@/components/slider/top-category.slider";
import { Banner9 } from "@/public/assets/banners";
import { bestQualityBanner } from "@/public/assets/support";

export default function Home() {
  return (
    <div className="relative">
      <MobileNav />
      <TopMenu />
      {/* <CategoryList /> */}
      <BannerSliderTwo />
      <FeatureCardsTwo />
      <TopCategoriesSection />
      <div className="cus-container hidden w-full flex-col items-center justify-between gap-[50px] overflow-hidden bg-white pt-[0px] pb-[50px] md:flex md:flex-row">
        <div className="flex max-w-[300px] flex-col justify-start">
          <h1 className="text-[26px] font-light text-[#E7448C] uppercase underline">
            TOP Selling
          </h1>
          <p className="py-3 text-[55px] leading-[44px] font-normal text-[#E7448C]">
            Hot Categories Right Now
          </p>
          <p className="text-[18px] leading-[23px] font-normal text-[#A8A8A8]">
            Browse our top categories with top nation and internation brands and
            find what you are looking for
          </p>
        </div>
        <TopCategorySlider />
      </div>
      <ProductsSliderTwo
        title="New Arrivals"
        subtitle="Discover the latest products"
      />
      <ProductsSliderTwo
        title="Best Sellers"
        subtitle="Enjoy the all best products"
      />
      <DealOfTheDay />
      <BestChoiceProductsSection />

      <DynamicPromotionBanner
        image={bestQualityBanner}
        title="Best Quality, Best Comfort"
        description="Discover our premium collection of soft toys and comfort essentials made with love."
        buttonText="Shop Now"
        onButtonClick={() => alert("Button Clicked!")}
      />
      <DynamicPromotionBanner
        image={Banner9}
        title="Best Quality, Best Comfort"
        description="Discover our premium collection of soft toys and comfort essentials made with love."
        buttonText="Shop Now"
        onButtonClick={() => alert("Button Clicked!")}
      />
      <RotatingTextSlider />
      <FeaturedCollection />
      <SalesSlider />
      <HeroVideo />
      <SalesSlider title="Winter Collection Sale" />
      <RotatingTextSlider />

      <BlogSliderTwo />

      <ReviewSliderTwo />
    </div>
  );
}
