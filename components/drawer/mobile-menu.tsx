"use client";

import Image from "next/image";
import { useState } from "react";
import ExpandableCategoryItem from "../category/expandable-catgory-list";
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
import { TopBrands } from "../cards/menu-brands";
import { MobSearch } from "../search/mob-search";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { imageBaseUrl } from "@/config/config";
import { toast } from "react-toastify";
import { fallBackImage } from "@/public/assets/products";

interface MobileDrawerProps {
  isOpen: boolean;
  close: any;
}
interface MenuConfigItem {
  data: {
    title: string;
    id: number;
    items: { id: number | null; name: string; image: string | null }[];
    image?: string;
  }[];
  showImages?: boolean;
  showBrands?: boolean;
}

const menuConfig: Record<number, MenuConfigItem> = {
  0: { data: foodingSections, showImages: true, showBrands: true },
  1: { data: skincareSections },
  2: { data: nursingSections },
  3: { data: diaperingSections },
  4: { data: sections2 },
  5: { data: toySections },
  6: { data: outdoorSections },
  7: { data: schoolEssentialsSections },
  8: { data: maternitySections },
  9: { data: [] },
  10: { data: partySections },
  11: { data: clothingSections },
};

export default function MobileDrawer({ isOpen, close }: MobileDrawerProps) {
  const router = useRouter();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selectedIconIndexOne, setSelectedIconIndexOne] = useState<
    number | null
  >(null);
  const { categories = [] } = useAppSelector((state) => state.product);
  const handleCategoryToggle = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  function chunkArray(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const chunkedCategories = chunkArray(categories, 4);
  const data =
    selectedIconIndexOne !== null && menuConfig[selectedIconIndexOne]?.data
      ? menuConfig[selectedIconIndexOne].data
      : [];
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[100] h-full w-full transform bg-white shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="block h-full w-full overflow-y-auto pb-10">
          <MobSearch closeButton={close} />
          {chunkedCategories.map((row, rowIndex) => {
            const startIndex = rowIndex * 4;
            const endIndex = startIndex + row.length;
            const isSelectedInThisChunk =
              selectedIconIndexOne !== null &&
              selectedIconIndexOne >= startIndex &&
              selectedIconIndexOne < endIndex;

            return (
              <div key={rowIndex} className="flex flex-col gap-5">
                <div className="mx-[5px] mt-4 grid grid-cols-4 gap-[7px]">
                  {row?.map((item: any, index: number) => {
                    const actualIndex = startIndex + index;
                    const categoryImage = item?.cat_image
                      ? `${imageBaseUrl}/assets/menu_category/${item?.cat_image}`
                      : fallBackImage;
                    return (
                      <div
                        key={actualIndex}
                        onClick={() => {
                          setSelectedIconIndexOne(
                            selectedIconIndexOne === actualIndex
                              ? null
                              : actualIndex,
                          );
                        }}
                        className={`relative h-[114px] w-full max-w-[86px] cursor-pointer overflow-hidden rounded-[8.795px] text-[#434343] transition-all duration-300 ${
                          selectedIconIndexOne === actualIndex
                            ? "translate-y-2"
                            : ""
                        }`}
                      >
                        <div
                          className={`absolute top-0 right-0 left-0 z-10 flex items-center justify-center transition-colors duration-300 ${
                            selectedIconIndexOne === actualIndex
                              ? "bg-[#FD71AF]"
                              : "bg-[#F0F0F0]"
                          }`}
                        >
                          <p
                            className={`font-Inter mb-0 py-[8.8px] text-[10px] leading-[7px] font-normal transition-colors duration-300 ${
                              selectedIconIndexOne === actualIndex
                                ? "text-white"
                                : "text-[#434343]"
                            }`}
                          >
                            {item?.name}
                          </p>
                        </div>

                        <div className="relative h-full w-full overflow-hidden rounded-[8.795px]">
                          <div className="h-[25px] w-full" />
                          <Image
                            // src={`${imageBaseUrl}/assets/menu_category/${item?.cat_image}`}
                            src={categoryImage}
                            quality={100}
                            width={86}
                            height={90}
                            alt="item"
                            className="z-0 h-[90px] w-full object-contain"
                          />
                          <div
                            className={`absolute inset-0 flex items-center justify-center rounded-[8.795px] bg-[#fc8cbe] transition-opacity duration-300 ${
                              selectedIconIndexOne === actualIndex
                                ? "opacity-80"
                                : "opacity-0"
                            }`}
                          >
                            <p
                              onClick={() => {
                                if (selectedIconIndexOne === actualIndex) {
                                  if (item?.id) {
                                    router.push(`/category/${item?.id}`);
                                    close();
                                  } else {
                                    toast.error(`${item?.id} not found`);
                                  }
                                }
                              }}
                              className="absolute text-[12px] leading-[9px] font-bold text-white underline"
                            >
                              VIEW ALL
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {isSelectedInThisChunk && (
                  <div
                    style={{
                      boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.20)",
                    }}
                    className="mx-[5px] my-[14px] flex flex-col gap-[10px] rounded-[8px] bg-white px-5 py-[15px]"
                  >
                    {data?.map((cat: any, idx: number) => {
                      return (
                        <ExpandableCategoryItem
                          key={idx}
                          title={cat?.title}
                          icon={
                            `https://www.babystore.ae/storage/back/assets/subcategory/${cat?.image}` ||
                            "/default-icon.png"
                          }
                          isOpen={openCategory === idx}
                          onToggle={() => handleCategoryToggle(idx)}
                          parentId={cat?.id}
                        >
                          {(cat?.items || [])?.map((item: any) => (
                            <p
                              key={item?.id}
                              data-id={item?.id}
                              className="text-[12px] font-bold text-[#434343]"
                            >
                              {item?.name}
                            </p>
                          ))}
                        </ExpandableCategoryItem>
                      );
                    })}
                    <TopBrands />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
