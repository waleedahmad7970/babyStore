"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import CategoryCard from "./cards/category-card";

import { categories } from "../../static/static";
import { menu1, menu2 } from "@/public/assets/banner";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
} from "@/public/assets/brands";
const sections: any[] = [
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
];
const menuImages = [menu1, menu2];
const menuBrands = [brand1, brand2, brand3, brand4, brand5, brand6];

export default function CategoryList() {
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [previousId, setPreviousId] = useState<number | null>(null);
  const [animationDirection, setAnimationDirection] = useState<string>("");

  // ds
  const [hoveredInitail, setHoveredInitail] = useState<boolean | null>(null);

  const handleHover = (id: number) => {
    if (id !== hoveredId) {
      if (hoveredId !== null) {
        // Determine direction before updating state
        const direction = id > hoveredId ? "slide-left" : "slide-right";
        setAnimationDirection(direction);
      }
      setPreviousId(hoveredId);
      setHoveredId(id);
    }
  };
  console.log("hoveredInitail", hoveredInitail);
  return (
    <div
      onMouseEnter={() => setHoveredInitail(true)}
      className="group relative mb-0 hidden w-full px-4 md:block md:px-0 md:pb-6"
    >
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
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative"
            onMouseEnter={() => {
              if (hoverTimer.current) clearTimeout(hoverTimer.current);
              handleHover(category.id);
            }}
            onMouseLeave={() => {
              hoverTimer.current = setTimeout(() => {
                setHoveredId(null);
                setAnimationDirection("");
              }, 300);
            }}
          >
            <CategoryCard
              paraClassName={`${hoveredId === category.id ? "text-[#F82D8B99]" : "text-[#1A1718]"}`}
              {...category}
              ImgClass="w-[82px] h-[82px]"
              // hoveredId={hoveredId}
              categoryId={category.id}
            />
          </div>
        ))}
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
          {hoveredId && (
            <div
              key={hoveredId}
              className={`hiddenbg-white top-[20px] right-0 left-0 z-30 mx-auto px-[41px] py-6 md:block ${animationDirection}`}
            >
              <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                <div className="grid grid-cols-3 gap-[36.88px]">
                  {[0, 1, 2].map((colIndex) => (
                    <div
                      key={colIndex}
                      className="flex w-full max-w-[232.81px] flex-col gap-6"
                    >
                      {sections
                        .slice(colIndex * 3, colIndex * 3 + 3)
                        .map((section, i) => (
                          <div key={i} className="w-[232px] max-w-[232px]">
                            <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                              {section.title}
                            </h2>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {section.items.map((item: any, idx: number) => (
                                <li
                                  className="mb-0 border-b-1 border-[#F5F5F5] text-[12px] leading-[24px] font-[274px] text-[#1F1F1F]"
                                  key={idx}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>

                <div className="flex w-full justify-between gap-[26.51px] lg:max-w-[483px]">
                  <div className="flex flex-col gap-[12.35px]">
                    {menuImages.map((menu, index) => {
                      return <Image src={menu} alt="im" key={index} />;
                    })}
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="mb-0 text-[14px] leading-[24px] font-bold text-[#1F1F1F]">
                      TOP BRANDS
                    </p>
                    {menuBrands?.map((brand, index) => (
                      <Image src={brand} alt="im" key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
