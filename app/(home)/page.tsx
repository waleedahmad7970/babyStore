"use client";

import DiscountStripsBanner from "@/components/banners/discount-strips";
import CategoryList from "@/components/category/category-list";
import InitialRequest from "@/components/InitalRequest/initial-request";
import BannerSlider from "@/components/slider/banner.slider";
import BannerSliderMob from "@/components/slider/banner.slider-mob";
import CategoryTwoListSlider from "@/components/slider/category.list.two.slider";
import HomeSections from "@/components/UI/home";
import HomePage from "@/components/UI/Home-page";

// import HomeSections from "@/components/UI/home";
// import dynamic from "next/dynamic";

// // Lazy load components
// const HomePage = dynamic(() => import("@/components/UI/Home-page"), {
//   ssr: false,
// });
// const CategoryList = dynamic(
//   () => import("@/components/category/category-list"),
//   { ssr: false },
// );
// const BannerSlider = dynamic(
//   () => import("@/components/slider/banner.slider"),
//   { ssr: false },
// );
// const InitialRequest = dynamic(
//   () => import("@/components/InitalRequest/initial-request"),
//   { ssr: false },
// );

// const CategoryListTwo = dynamic(
//   () => import("@/components/category/cards/category-list-two"),
//   { ssr: false },
// );
// const BannerSliderMob = dynamic(
//   () => import("@/components/slider/banner.slider-mob"),
//   { ssr: false },
// );
// const DiscountStripsBanner = dynamic(
//   () => import("@/components/banners/discount-strips"),
//   { ssr: false },
// );
// const CategoryTwoListSlider = dynamic(
//   () => import("@/components/slider/category.list.two.slider"),
//   { ssr: false },
// );

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
