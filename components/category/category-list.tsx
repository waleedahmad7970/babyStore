"use client";
import React, { useEffect, useRef, useState } from "react";
import CategoryCard from "./cards/category-card";

import { menu1, menu2 } from "@/public/assets/banner";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
} from "@/public/assets/brands";
import { MegaMenuPanel } from "./components/MegaMenuPanel";
import { useAppSelector } from "@/store/hooks";
import { imageBaseUrl } from "@/config/config";
import productServices from "@/services/product.service";
import { useParams } from "next/navigation";
import { fallBackImage } from "@/public/assets/products";

export const menuImages = [menu1, menu2];
export const menuBrands = [brand1, brand2, brand3, brand4, brand5, brand6];

export default function CategoryList() {
  const { categories = [] } = useAppSelector((state) => state.product);
  const params = useParams();
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [previousId, setPreviousId] = useState<number | null>(null);
  const [animationDirection, setAnimationDirection] = useState<string>("");
  const handleHover = (id: number) => {
    if (id !== hoveredId) {
      if (hoveredId !== null) {
        const direction = id > hoveredId ? "slide-left" : "slide-right";
        setAnimationDirection(direction);
      }
      setPreviousId(hoveredId);
      setHoveredId(id);
    }
  };

  return (
    <div className="group relative mb-0 hidden w-full px-4 md:block md:px-0 md:pb-6">
      {/* hover effect */}
      {/* {hoveredId !== null && (
        <div
          onMouseEnter={() => {
            setHoveredId(null);
            setAnimationDirection("");
          }}
          className="fixed inset-0 z-30 bg-black/50 transition duration-300"
        ></div>
      )} */}
      <div className="cus-container no-scrollbar group relative z-30 mx-auto flex justify-between overflow-x-auto">
        {(categories as any[]).map((category, catIndex) => {
          const categoryImage = category?.cat_image
            ? `${imageBaseUrl}/assets/menu_category/${category?.cat_image}`
            : fallBackImage;
          return (
            <div
              key={catIndex}
              className={`relative ${catIndex === categories?.length - 1 ? "" : "pr-[14px]"}`}
              onMouseEnter={() => {
                if (hoverTimer.current) clearTimeout(hoverTimer.current);
                handleHover(catIndex);
              }}
              onMouseLeave={() => {
                hoverTimer.current = setTimeout(() => {
                  setHoveredId(null);
                  setAnimationDirection("");
                }, 300);
              }}
            >
              <CategoryCard
                image={category?.image}
                paraClassName={`${hoveredId === catIndex ? "text-[#F82D8B99]" : "text-[#1A1718]"}`}
                {...category}
                ImgClass="!object-contain w-[82px] h-[82px]"
                hoveredId={hoveredId}
                categoryId={catIndex}
                // cat_image={ `${imageBaseUrl}/assets/menu_category/${category?.cat_image}`}
                cat_image={categoryImage}
                // slug={category?.slug}
                slug={`category/${category?.id}`}
                slugId={category?.id}
              />
            </div>
          );
        })}
      </div>
      <div className="relative">
        <div
          onMouseEnter={() =>
            hoverTimer.current && clearTimeout(hoverTimer.current)
          }
          style={{
            boxShadow: "-14px 14px 33px 0px rgba(0, 0, 0, 0.09)",
          }}
          className="animate-scale-in absolute top-[-8px] right-0 left-0 z-40 mx-auto mt-2 hidden w-full max-w-[1390px] origin-top scale-200 transform overflow-hidden rounded-[8px] bg-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:block group-hover:scale-100 group-hover:opacity-100"
        >
          {hoveredId != null && (
            <div
              key={hoveredId}
              className={`top-[20px] right-0 left-0 z-30 mx-auto hidden bg-white px-[41px] py-6 md:block ${animationDirection}`}
            >
              <MegaMenuPanel hoveredId={hoveredId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
