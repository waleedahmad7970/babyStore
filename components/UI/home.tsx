import React from "react";
import CategorySectionPriority from "../category/category-sections/category-section-priority";
import { useAppSelector } from "@/store/hooks";

export default function HomeSections() {
  const { homeSections = [] } = useAppSelector((state) => state.home);

  return (
    <div>
      {homeSections.map((section: any, index: number) => {
        return (
          <CategorySectionPriority
            key={index}
            section_type={section?.section_type}
            bannerImage={section?.desktop_banner}
            categoryImages={section?.sub_banners}
            mobile_banner={section?.mobile_banner}
            underPrice_banners={section?.underPrice_banners}
            products={section.products}
            kids_banner={section?.kids_banner || []}
            productsTitle={section.productsTitle}
            positions={{
              desktop: section?.positions.desktop,
              mobile: section?.positions.mobile,
            }}
          />
        );
      })}
    </div>
  );
}
