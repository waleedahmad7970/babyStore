"use client";

import DynamicPromotionBanner from "@/components/banner/promotion-banner";
import DiscountStripsBanner from "@/components/banners/discount-strips";
import FeatureCardsTwo from "@/components/cards/feature-card-two";
import CategoryList from "@/components/category/category-list";
import TopCategoriesSection from "@/components/category/top-categories";
import HeroVideo from "@/components/hero/hero-video";
import InitialRequest from "@/components/InitalRequest/initial-request";
import FeaturedCollection from "@/components/offers-designs/feature-collection";
import DealOfTheDay from "@/components/offers-designs/today-special";
import BestChoiceProductsSection from "@/components/sections/best-choice-products-section";
import BannerSlider from "@/components/slider/banner.slider";
import BannerSliderMob from "@/components/slider/banner.slider-mob";
import BannerSliderTwo from "@/components/slider/banner.slider.two";
import BlogSliderTwo from "@/components/slider/blogs-slider-two";
import CategoryTwoListSlider from "@/components/slider/category.list.two.slider";
import RotatingTextSlider from "@/components/slider/rotating-text-slider";
import SalesSlider from "@/components/slider/sales.slider";
import TopCategorySlider from "@/components/slider/top-category.slider";
import HomeSections from "@/components/UI/home";
import HomePage from "@/components/UI/Home-page";
import { bestQualityBanner, bestQualityBanner2 } from "@/public/assets/support";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <InitialRequest />
      <CategoryList />
      <DiscountStripsBanner />
      <BannerSlider />
      <BannerSliderMob />
      {/* <CategoryListTwo /> */}
      <CategoryTwoListSlider />
      {/* <HomePage /> */}
      <HomeSections />
    </div>
  );
}
