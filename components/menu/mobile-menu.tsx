"use client";

import { usePreventBodyScroll } from "@/hooks/preventBodyScroll";
import { useClickOutside } from "@/hooks/useClickOutside";
import { bag, home, menu2, profile, Search } from "@/public/assets/icons";
import Icons from "@/public/assets/svg-component";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { brandAction } from "@/store/slices/brand.slice";
import { categoriesAction } from "@/store/slices/categories.slice";
import { globalStateActions } from "@/store/slices/globalStates";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type TabType = {
  id: string;
  icon: any;
  label: string;
  link: string;
};

type TabType2 = {
  name: string;
  options: string[];
};

type FilterOption = {
  name?: string;
  value?: string;
  count?: number;
};

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<string>("Home");
  const [activeCategory, setActiveCategory] = useState("Color");
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectMobSort, setSelectMobSort] = useState<FilterOption | null>(null);
  const { isFilter = "", isSearchBarOpen } = useAppSelector(
    (state) => state.globalStates,
  );

  const {
    selectedFilters = [],
    CBSPageFiltersMob = [],
    CBSTopFilters = [],
    selectTopFilterValue = "",
  } = useAppSelector((state) => state.brands);

  const { cartProducts = [] } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const menuRef = useRef(null);

  useEffect(() => {
    setSelectedOptions(selectedFilters);
  }, [selectedFilters]);

  useClickOutside(menuRef, () => {
    dispatch(globalStateActions.setFilter(""));
  });
  usePreventBodyScroll(isFilter);

  const tabs: TabType[] = [
    {
      id: "Categories",
      icon: Icons.CategoryIcon,
      label: "Categories",
      link: "/category",
    },
    {
      id: "Home",
      icon: Icons.HomeIcon,
      label: "Home",
      link: "/",
    },
    {
      id: "Search",
      icon: Icons.SearchIcon,
      label: "Search",
      link: "/search",
    },
    {
      id: "Bag",
      icon: Icons.CartIcon,

      label: "Bag",
      link: "/cart",
    },
    {
      id: "Profile",
      icon: Icons.ProfileIcon,
      label: "Profile",
      link: "/dashboard",
    },
  ];

  const toggleOption = (option: any) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };
  const handleApplyFilter = () => {
    dispatch(brandAction.setToggleSelectedFilterByArray(selectedOptions));
    dispatch(globalStateActions.setFilter(""));
  };
  const handleTabClick = (tabId: string, link?: string) => {
    setActiveTab(tabId);
    if (isSearchBarOpen) {
      return dispatch(globalStateActions.setSearchBarOpen(false));
    }
    if (link === "/category") {
      return dispatch(globalStateActions.setMobileMenu(true));
    }
    if (link === "/search") {
      return dispatch(globalStateActions.setSearchBarOpen(true));
    }
    if (link) router.push(link);
  };

  const handleFilterOpen = (filter: string) => {
    dispatch(globalStateActions.setFilter(filter));
  };

  const handleSelectSortFilter = (option: any) => {
    if (option.value === selectMobSort?.value) setSelectMobSort({});
    else setSelectMobSort(option);
  };
  const handleApplySortFilter = () => {
    dispatch(brandAction.setCBSTopFilterValue(selectMobSort));
    dispatch(globalStateActions.setFilter(""));
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 block border-t border-gray-100 bg-white sm:hidden">
      {isFilter ? (
        <div
          ref={menuRef}
          style={{
            boxShadow: "0px -14px 40px 0px rgba(0, 0, 0, 0.20)",
            transform: `translateY(${dragDistance}px)`,
            transition:
              dragStartY === null ? "transform 0.3s ease-out" : "none",
          }}
          onTouchStart={(e) => setDragStartY(e.touches[0].clientY)}
          onTouchMove={(e) => {
            if (dragStartY !== null) {
              const deltaY = e.touches[0].clientY - dragStartY;
              if (deltaY > 0) setDragDistance(deltaY); // only allow downward drag
            }
          }}
          onTouchEnd={() => {
            if (dragDistance > 100) {
              // Smoothly animate to full screen height
              setDragDistance(window.innerHeight); // slide it down fully
              setTimeout(() => {
                dispatch(globalStateActions.setFilter("")); // then close
                setDragDistance(0); // reset for next time
              }, 300); // match your transition duration
            } else {
              // Not enough swipe — bounce back
              setDragDistance(0);
            }
            setDragStartY(null);
          }}
          className="absolute right-0 bottom-[64px] left-0 flex flex-col items-center justify-start gap-5 rounded-tl-[16px] rounded-tr-[16px] bg-[#FCFCFC] px-[10px] py-6"
        >
          <div className="h-[6px] w-full max-w-[42px] rounded-[12px] bg-[#00000066]" />
          <p className="text-[17px] leading-[24px] font-semibold text-[#000]">
            Sort By
          </p>
          {isFilter === "sort" ? (
            <div
              className={`flex w-full flex-col justify-start border-t border-[#E5E5E5] ${selectTopFilterValue?.value ? "bg-[rgba(248, 45, 139, 0.1)]" : ""}`}
            >
              {CBSTopFilters?.map((option: FilterOption, index: number) => (
                <div
                  onClick={() => handleSelectSortFilter(option)}
                  key={index}
                  className={`border-b border-[#E5E5E5] py-2 text-[15px] leading-[20px] font-normal ${selectMobSort?.value === option?.value || selectTopFilterValue?.value === option?.value ? "text-[#E7448C]" : "text-[#000]"} `}
                >
                  {option?.name}
                </div>
              ))}
              <div className="mt-14 w-full px-[5px] sm:px-0">
                <button
                  onClick={() => handleApplySortFilter()}
                  style={{ background: "rgba(248, 45, 139, 0.60)" }}
                  className="flex h-[58px] w-full items-center justify-center rounded-[999px] text-[17px] leading-[24px] font-semibold text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-col">
              <div className="flex min-h-[205px] w-full justify-between gap-2 overflow-hidden rounded-[4px]">
                {/* Sidebar */}
                <div className="w-full max-w-[110px] overflow-hidden rounded-[4px] bg-[#F82D8B14]">
                  {CBSPageFiltersMob?.map((category: any, index: number) => (
                    <div
                      key={index}
                      className={`cursor-pointer px-3 py-[6.25px] text-[11px] font-normal ${
                        activeCategory === category?.name
                          ? "bg-[#F82D8B33] font-semibold text-[#1F1F1F]"
                          : ""
                      }`}
                      onClick={() => setActiveCategory(category?.name)}
                    >
                      {category?.name}
                    </div>
                  ))}
                </div>

                {/* Filter Options */}
                <div className="flex max-h-[300px] w-full flex-row flex-wrap gap-2 overflow-y-auto">
                  {CBSPageFiltersMob?.find(
                    (cat: any) => cat?.name === activeCategory,
                  )?.options.map((option: any, index: number) => (
                    <button
                      key={option?.label || option}
                      className={`font-Inter max-h-max rounded-[4px] p-[6px] text-[11px] font-normal ${
                        // selectedFilters?.includes(option?.value || option) ||
                        selectedOptions?.includes(option?.value || option)
                          ? "bg-[#F82D8B14] font-medium text-[#F82D8B]"
                          : "bg-[#0000000A] text-[#000]"
                      }`}
                      onClick={() => toggleOption(option?.value || option)}
                    >
                      {option?.label || option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-14 w-full px-[5px] sm:px-0">
                <button
                  onClick={() => handleApplyFilter()}
                  style={{ background: "rgba(248, 45, 139, 0.60)" }}
                  className="flex h-[58px] w-full items-center justify-center rounded-[999px] text-[17px] leading-[24px] font-semibold text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {(pathname.startsWith("/category") ||
            pathname.startsWith("/brand")) && (
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
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.link)}
              className={`flex h-full w-full flex-col items-center justify-center transition-all duration-300 ${
                activeTab === tab.id ? "text-[#F82D8B]" : "text-gray-500"
              }`}
              aria-label={tab.label}
            >
              <div
                className={`relative transition-transform duration-300 ${
                  activeTab === tab.id ? "scale-110" : "scale-100"
                }`}
              >
                {tab?.id === "Bag" && (
                  <div className="absolute top-[-3px] right-[-3px] flex h-[12px] w-[12px] items-center justify-center rounded-full bg-red-500 text-[5px] text-white">
                    <p className="mb-0 pt-[1px] pl-[0.5px] text-[5px]">
                      {cartProducts?.length > 0 ? cartProducts?.length : 0}
                    </p>
                  </div>
                )}
                <Icon color={activeTab === tab.id ? "#51545A" : "#C7CFDA"} />
              </div>
              <span
                className={`mt-1 text-[10px] leading-[160%] font-normal ${
                  activeTab === tab.id ? "text-[#51545A]" : "text-[#C7CFDA]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
