"use client";

import Image from "next/image";
import { useState } from "react";
import ExpandableCategoryItem from "../category/expandable-catgory-list";
import {
  categoryData,
  categoryIconsOne,
  categoryIconsTwo,
} from "@/static/static";
import { TopBrands } from "../cards/menu-brands";
import { MobSearch } from "../search/mob-search";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  close: any;
}

export default function MobileDrawer({ isOpen, close }: MobileDrawerProps) {
  const router = useRouter();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selectedIconIndexOne, setSelectedIconIndexOne] = useState<
    number | null
  >(null);
  const [selectedIconIndexTwo, setSelectedIconIndexTwo] = useState<
    number | null
  >(null);

  const handleCategoryToggle = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[100] h-full w-full transform bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Content */}
        <div className="block h-full w-full overflow-y-auto pb-10">
          <MobSearch closeButton={close} />

          {/* Top Category Icons */}
          <div className="mx-[5px] mt-4 flex flex-wrap justify-start gap-[7px]">
            {categoryIconsOne.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedIconIndexOne(
                    selectedIconIndexOne === index ? null : index,
                  );
                }}
                className={`relative h-[114px] w-full max-w-[86px] cursor-pointer overflow-hidden rounded-[8.795px] text-[#434343] transition-all duration-300 ${
                  selectedIconIndexOne === index ? "translate-y-2" : ""
                }`}
              >
                <div
                  className={`absolute top-0 right-0 left-0 z-10 flex items-center justify-center transition-colors duration-300 ${
                    selectedIconIndexOne === index
                      ? "bg-[#FD71AF]"
                      : "bg-[#F0F0F0]"
                  }`}
                >
                  <p
                    className={`font-Inter mb-0 py-[8.8px] text-[10px] leading-[7px] font-normal transition-colors duration-300 ${
                      selectedIconIndexOne === index
                        ? "text-white"
                        : "text-[#434343]"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-[8.795px]">
                  <Image
                    src={item.icon}
                    quality={100}
                    width={86}
                    height={114}
                    alt="item"
                    className="z-0 h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-[8.795px] bg-[#fc8cbe] transition-opacity duration-300 ${
                      selectedIconIndexOne === index
                        ? "opacity-80"
                        : "opacity-0"
                    }`}
                  >
                    <p
                      onClick={() => {
                        router.push("/category");
                        close();
                      }}
                      className="text-[12px] leading-[9px] font-bold text-white underline"
                    >
                      VIEW ALL
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expandable Categories */}
          <div>
            <div
              style={{
                boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="mx-[5px] my-[14px] flex flex-col gap-[10px] rounded-[8px] bg-white px-5 py-[15px]"
            >
              {categoryData.map((cat, idx) => (
                <ExpandableCategoryItem
                  key={idx}
                  title={cat.title}
                  icon={cat.icon}
                  isOpen={openCategory === idx}
                  onToggle={() => handleCategoryToggle(idx)}
                >
                  {cat.subcategories.map((sub, i) => (
                    <p key={i} className="text-[12px] font-bold text-[#434343]">
                      {sub}
                    </p>
                  ))}
                </ExpandableCategoryItem>
              ))}
              <TopBrands />
            </div>
          </div>

          {/* Bottom Category Icons */}
          <div className="flex flex-wrap justify-start gap-[7px] px-[5px]">
            {categoryIconsTwo.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedIconIndexTwo(
                    selectedIconIndexTwo === index ? null : index,
                  )
                }
                className={`relative h-[114px] w-full max-w-[86px] cursor-pointer overflow-hidden rounded-[8.795px] text-[#434343] transition-all duration-300 ${
                  selectedIconIndexTwo === index ? "translate-y-2" : ""
                }`}
              >
                <div
                  className={`absolute top-0 right-0 left-0 z-10 flex items-center justify-center transition-colors duration-300 ${
                    selectedIconIndexTwo === index
                      ? "bg-[#FD71AF]"
                      : "bg-[#F0F0F0]"
                  }`}
                >
                  <p
                    className={`font-Inter mb-0 py-[8.8px] text-[10px] leading-[7px] font-normal transition-colors duration-300 ${
                      selectedIconIndexTwo === index
                        ? "text-white"
                        : "text-[#434343]"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-[8.795px]">
                  <Image
                    src={item.icon}
                    width={86}
                    height={114}
                    alt="item"
                    className="z-0 h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-[8.795px] bg-[#fc8cbe] transition-opacity duration-300 ${
                      selectedIconIndexTwo === index
                        ? "opacity-80"
                        : "opacity-0"
                    }`}
                  >
                    <p className="text-[12px] leading-[9px] font-bold text-white underline">
                      VIEW ALL
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
