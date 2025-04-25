"use client";

import { bag, home, menu2, profile, Search } from "@/public/assets/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { globalStateActions } from "@/store/slices/globalStates";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type TabType = {
  id: string;
  icon: React.ReactNode;
  label: string;
  link: string;
};

type TabType2 = {
  name: string;
  options: string[];
};

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [activeCategory, setActiveCategory] = useState("Color");

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { isFilter = "" } = useAppSelector((state) => state.globalStates);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilter]);

  const tabs: TabType[] = [
    {
      id: "Categories",
      icon: <Image src={menu2} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Categories",
      link: "/category",
    },
    {
      id: "Home",
      icon: <Image src={home} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Home",
      link: "/",
    },
    {
      id: "Search",
      icon: <Image src={Search} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Search",
      link: "/brand",
    },
    {
      id: "Bag",
      icon: <Image src={bag} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Bag",
      link: "/product",
    },
    {
      id: "Profile",
      icon: <Image src={profile} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Profile",
      link: "/profile",
    },
  ];

  const sortOptions = [
    { label: "Recommended", count: 120 },
    { label: "Best Seller", count: 42 },
    { label: "New Arrivals", count: 7 },
    { label: "Discount", count: 5 },
    { label: "Price : low to high", count: 32 },
    { label: "Price : high to low", count: 32 },
  ];

  const filterCategories: TabType2[] = [
    {
      name: "Color",
      options: ["Red", "Green", "Pink", "Yellow", "Purple"],
    },
    { name: "Gender", options: ["Men", "Women", "Unisex"] },
    { name: "Type", options: ["T-Shirt", "Jeans", "Shoes"] },
    { name: "Size", options: ["S", "M", "L", "XL"] },
    { name: "Brands", options: ["Nike", "Adidas", "Puma"] },
    { name: "Price", options: ["$0 - $50", "$50 - $100", "$100+"] },
    { name: "Others", options: ["New Arrival", "Sale"] },
  ];

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleTabClick = (tabId: string, link?: string) => {
    setActiveTab(tabId);
    if (link) router.push(link);
  };

  const handleFilterOpen = (filter: string) => {
    dispatch(globalStateActions.setFilter(filter));
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 block border-t border-gray-100 bg-white sm:hidden">
      {isFilter ? (
        <div
          style={{ boxShadow: "0px -14px 40px 0px rgba(0, 0, 0, 0.20)" }}
          className="absolute right-0 bottom-[64px] left-0 flex flex-col items-center justify-start gap-5 rounded-tl-[16px] rounded-tr-[16px] bg-[#FCFCFC] px-[10px] py-6"
        >
          <div className="h-[6px] w-full max-w-[42px] rounded-[12px] bg-[#00000066]" />
          <p className="text-[17px] leading-[24px] font-semibold text-[#000]">
            Sort By
          </p>
          {isFilter === "sort" ? (
            <div className="flex w-full flex-col justify-start border-t border-[#E5E5E5]">
              {sortOptions.map((option, index) => (
                <div
                  key={index}
                  className="border-b border-[#E5E5E5] py-2 text-[15px] leading-[20px] font-normal text-[#000]"
                >
                  {option.label}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex w-full justify-between gap-2 overflow-hidden rounded-[4px]">
              {/* Sidebar */}
              <div className="w-full max-w-[110px] overflow-hidden rounded-[4px] bg-[#F82D8B14]">
                {filterCategories.map((category) => (
                  <div
                    key={category.name}
                    className={`cursor-pointer px-3 py-[6.25px] text-[11px] font-normal ${
                      activeCategory === category.name
                        ? "bg-[#F82D8B33] font-semibold text-[#1F1F1F]"
                        : ""
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>

              {/* Filter Options */}
              <div className="flex w-full flex-row flex-wrap gap-2">
                {filterCategories
                  .find((cat) => cat.name === activeCategory)
                  ?.options.map((option) => (
                    <button
                      key={option}
                      className={`font-Inter max-h-max rounded-[4px] p-[6px] text-[11px] font-normal ${
                        selectedOptions.includes(option)
                          ? "bg-[#F82D8B14] font-medium text-[#F82D8B]"
                          : "bg-[#0000000A] text-[#000]"
                      }`}
                      onClick={() => toggleOption(option)}
                    >
                      {option}
                    </button>
                  ))}
              </div>
            </div>
          )}

          <button
            onClick={() => {
              handleFilterOpen("");
            }}
            style={{ background: "rgba(248, 45, 139, 0.60)" }}
            className="flex h-[58px] w-full items-center justify-center rounded-[999px] text-[17px] leading-[24px] font-semibold text-white"
          >
            Apply
          </button>
        </div>
      ) : (
        <>
          {["/category", "/brand"].includes(pathname) && (
            <div className="absolute right-0 bottom-[88px] left-0 mx-auto flex max-w-[95px] items-center justify-around rounded-[10px] bg-[#FD71AF] px-[10px] py-[5px] text-white">
              <span
                onClick={() => handleFilterOpen("sort")}
                className="text-[12px] font-semibold text-white"
              >
                Sort
              </span>
              <div className="h-[8px] w-[1px] bg-white" />
              <span
                onClick={() => handleFilterOpen("filter")}
                className="text-[12px] font-semibold text-white"
              >
                Filters
              </span>
            </div>
          )}
        </>
      )}
      {/* Bottom Tabs */}
      <div className="flex items-center justify-around px-5 py-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.link)}
            className={`flex h-full w-full flex-col items-center justify-center transition-all duration-300 ${
              activeTab === tab.id ? "text-[#F82D8B]" : "text-gray-500"
            }`}
            aria-label={tab.label}
          >
            <div
              className={`transition-transform duration-300 ${
                activeTab === tab.id ? "scale-110" : "scale-100"
              }`}
            >
              {tab.icon}
            </div>
            <span
              className={`mt-1 text-[10px] leading-[160%] font-normal ${
                activeTab === tab.id ? "text-[#51545A]" : "text-[#C7CFDA]"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
