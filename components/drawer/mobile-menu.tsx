"use client";

import { X } from "@/public/assets/icons";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import ExpandableCategoryItem from "../category/expandable-catgory-list";
import {
  categoryData,
  categoryIconsOne,
  categoryIconsTwo,
} from "@/static/static";
import { TopBrands } from "../cards/menu-brands";
import { MobSearch } from "../search/mob-search";

interface MobileDrawerProps {
  isOpen: boolean;
  close: any;
}

export default function MobileDrawer({ isOpen, close }: MobileDrawerProps) {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const handleCategoryToggle = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        // onClick={() => close}
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
          <div className="mx-[5px] mt-4 flex flex-wrap justify-start gap-[7px]">
            {categoryIconsOne.map((item, index) => (
              <div
                key={index}
                className="group relative h-[114px] w-full max-w-[86px] cursor-pointer overflow-hidden rounded-[8.795px] text-[#434343] transition-all duration-300 hover:translate-y-2 active:translate-y-1"
              >
                <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-center bg-[#F0F0F0] transition-colors duration-300 group-hover:bg-[#FD71AF] group-active:bg-[#FD71AF]">
                  <p className="font-Inter mb-0 py-[8.8px] text-[10px] leading-[7px] font-normal transition-colors duration-300 group-hover:text-white group-active:text-white">
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
                  <div className="absolute inset-0 flex items-center justify-center rounded-[8.795px] bg-[#fc8cbe] opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-active:opacity-80">
                    <p className="text-[12px] leading-[9px] font-bold text-white underline">
                      VIEW ALL
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
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
          <div className="flex flex-wrap justify-start gap-[7px] px-[5px]">
            {categoryIconsTwo.map((item, index) => (
              <div
                key={index}
                className="group relative h-[114px] w-full max-w-[86px] cursor-pointer overflow-hidden rounded-[8.795px] text-[#434343] transition-all duration-300 hover:translate-y-2 active:translate-y-1"
              >
                <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-center bg-[#F0F0F0] transition-colors duration-300 group-hover:bg-[#FD71AF] group-active:bg-[#FD71AF]">
                  <p className="font-Inter mb-0 py-[8.8px] text-[10px] leading-[7px] font-normal transition-colors duration-300 group-hover:text-white group-active:text-white">
                    {item.name}
                  </p>
                </div>

                <div className="relative h-full w-full">
                  {/* <Image
                    src={item.icon}
                  
                    alt="item"
                    className="z-0 h-full w-full object-cover"
                  /> */}
                  <img
                    src={item.icon.src}
                    alt="item"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-[8.795px] bg-[#fc8cbe] opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-active:opacity-80">
                    <p className="text-[12px] leading-[9px] font-bold text-white underline">
                      VIEW ALL
                    </p>
                  </div>
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={item.icon}
                    width={86}
                    height={114}
                    alt="item"
                    className="z-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-[8.795px] bg-[#fc8cbe] opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-active:opacity-80">
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
