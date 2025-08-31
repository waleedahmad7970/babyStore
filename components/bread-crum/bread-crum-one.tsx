"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { right_angle } from "@/public/assets/icons";
import { useAppSelector } from "@/store/hooks";
import {
  clothingSections,
  diaperingSections,
  foodingSections,
  maternitySections,
  nursingSections,
  outdoorSections,
  partySections,
  schoolEssentialsSections,
  sections2,
  skincareSections,
  toySections,
} from "@/static/static";
const BreadcrumbTwo = () => {
  const pathname = usePathname();
  const { productDetails = {} as any, categories = [] } = useAppSelector(
    (state) => state.product,
  );

  const segments = pathname.split("/").filter(Boolean);

  const menuStaticSections = [
    ...clothingSections,
    ...diaperingSections,
    ...foodingSections,
    ...maternitySections,
    ...nursingSections,
    ...outdoorSections,
    ...partySections,
    ...schoolEssentialsSections,
    ...sections2,
    ...skincareSections,
    ...toySections,
  ];

  // Build breadcrumb array
  const paths = segments
    ?.map((segment, index) => {
      // Skip numeric IDs (but handle category/product IDs)
      if (!isNaN(Number(segment))) {
        // category ID
        if (segments[index - 1] === "category") {
          const categoryId = Number(segment);
          const category = categories?.find(
            (c: any) => c?.id === categoryId,
          ) as any;
          return {
            name: category?.name || "Category",
            link: `/category/${categoryId}`,
          };
        }

        // product ID
        if (segments[index - 1] === "product") {
          return {
            name: productDetails?.name || "Product",
            link: `/product/${productDetails?.id || segment}`,
          };
        }
        if (segments[index - 1] === "sub-category") {
          const subCategoryId = Number(segment);
          const subCategory = menuStaticSections?.find(
            (c) => c.id === subCategoryId,
          );
          return {
            name: subCategory?.title || "Sub category",
            link: `/sub-category/${subCategoryId}`,
          };
        }
        if (segments[index - 1] === "sub-sub-category") {
          const subsubCategoryId = Number(segment);
          const subsubCategoryAllItems = menuStaticSections?.flatMap(
            (section) => section.items || [],
          );

          const subsubCategory = subsubCategoryAllItems?.find(
            (c) => c?.id === subsubCategoryId,
          );
          return {
            name: subsubCategory?.name || "Sub Sub category",
            link: `/sub-sub-category/${subsubCategoryId}`,
          };
        }

        return null; // other numeric IDs (skip)
      }

      // Normal non-ID segments
      // let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      // let link = "/" + segments.slice(0, index + 1).join("/");

      // return { name, link };
    })
    .filter(Boolean);

  return (
    <div className="mt-3 bg-[#FFF0F5] md:mt-0">
      <nav className="cus-container scrollbar-hide mx-auto my-1 flex min-h-[36px] items-center gap-5 overflow-x-auto px-4 text-sm whitespace-nowrap text-gray-500 md:min-h-[48px] md:px-0">
        {/* Home */}
        <div className="font-Inter flex items-center gap-[20px] text-[10px] leading-3 font-normal">
          <Link className="hover:text-[#E7448C]" href={"/"}>
            Home
          </Link>
          <Image src={right_angle} alt=">" className="!h-2 !w-1" />
        </div>

        {/* Dynamic paths */}
        {paths.map((path: any, index) => (
          <div
            key={index}
            className="font-Inter flex items-center gap-[20px] text-[10px] leading-3 font-normal"
          >
            <Link href={path.link} className="hover:text-[#E7448C]">
              {path.name}
            </Link>
            {index < paths.length - 1 && (
              <Image src={right_angle} alt=">" className="!h-2 !w-1" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BreadcrumbTwo;
