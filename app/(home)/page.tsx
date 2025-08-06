"use client";
import HomePage from "@/components/UI/Home-page";
import CategoryList from "@/components/category/category-list";
import BannerSlider from "@/components/slider/banner.slider";
import InitialRequest from "@/components/InitalRequest/initial-request";
import CategoryListTwo from "@/components/category/cards/category-list-two";
import BannerSliderMob from "@/components/slider/banner.slider-mob";
import DiscountStripsBanner from "@/components/banners/discount-strips";

export default function Home() {
  return (
    <div>
      <InitialRequest />
      <CategoryList />
      <DiscountStripsBanner />
      {/* <HomeDiscountCountDown /> */}
      <BannerSlider />
      <BannerSliderMob />
      <CategoryListTwo />
      {/* <MyComponent /> */}
      <HomePage />
    </div>
  );
}
