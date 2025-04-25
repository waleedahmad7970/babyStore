import Banner from "@/components/banners/banner";
import CategoryList from "@/components/category/category-list";
import BannerSlider from "@/components/slider/banner.slider";
import CategoryListTwo from "@/components/category/cards/category-list-two";
import CategorySection from "@/components/category/category-sections/category-section";
import CategorySectionTwo from "@/components/category/category-sections/category-section-two";
import DiscountStripsBanner from "@/components/banners/discount-strips";

import {
  babySection,
  bannerData,
  clearanceSection,
  dualCateSection,
  dualSectionBannersBoyGirls,
  firstDaySection,
  schoolSection,
  summerSection,
  travelSection,
} from "@/static/static";
import {
  baby_care_banner,
  clearance_banner,
  clearance_banner_mob,
  diapers_banner_mob,
  first_day_banner,
  firstday_banner_mob,
  mummy_banner,
  mummy_banner_mob,
  summer_banner_mob,
  travel_banner,
  travel_banner_mob,
} from "@/public/assets/banner";

import { summer_banner } from "@/public/assets/icons";
import { school_banner, school_banner_mob } from "@/public/assets/sections";

export default function Home() {
  return (
    <div>
      <CategoryList />

      <DiscountStripsBanner />
      <BannerSlider slides={bannerData} />

      {/* cate twp */}
      <CategoryListTwo />
      {/* section school */}
      <CategorySection
        bannerImage={school_banner}
        bannerImageMob={school_banner_mob}
        categoryImages={schoolSection}
      />
      {/* section traverl */}
      <CategorySection
        bannerImage={travel_banner}
        bannerImageMob={travel_banner_mob}
        categoryImages={travelSection}
      />
      <CategorySection
        bannerImageMob={summer_banner_mob}
        bannerImage={summer_banner}
        categoryImages={summerSection}
        className="gap-[10px] md:gap-[14px]"
        ImgClass="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover"
      />

      <div className="mb-10 w-full py-0 sm:mb-0 md:pb-[60px]">
        <Banner Img={mummy_banner} mobImg={mummy_banner_mob} />
        {/* <Banner
          Img={mummy_banner_mob}
          className={"block min-h-[236px] w-full object-cover sm:hidden"}
        /> */}
      </div>

      <CategorySection
        bannerImageMob={clearance_banner_mob}
        bannerImage={clearance_banner}
        categoryImages={clearanceSection}
        ImgClass="w-[162px] h-[225px] lg:w-[324px] lg:h-[421px] object-cover"
      />
      <CategorySection
        bannerImageMob={firstday_banner_mob}
        bannerImage={first_day_banner}
        categoryImages={firstDaySection}
      />
      <CategorySection
        bannerImageMob={diapers_banner_mob}
        bannerImage={baby_care_banner}
        categoryImages={babySection}
      />
      <CategorySectionTwo
        showPrices={true}
        categoryImages={dualCateSection}
        bannerImages={dualSectionBannersBoyGirls}
        ImgClass="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover"
      />
    </div>
  );
}
