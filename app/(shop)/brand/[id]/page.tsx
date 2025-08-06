"use client";

import Image from "next/image";
import React, { JSX, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { globalStateActions } from "@/store/slices/globalStates";
import {
  angle_down,
  burger_menu,
  expendMore,
  funnel,
} from "@/public/assets/icons";
import ReactPaginate from "react-paginate";
import FilterSidebar from "@/components/sidebar/filter-sidebar";
import ProductCardTwo from "@/components/product/cards/product-card-two";
import { notFound, useParams } from "next/navigation";
import categoryServices from "@/services/UI/category.service";
import productServices from "@/services/product.service";
import FullScreenLoader from "@/components/Loader/fullscreen-loader";
import { brandAction } from "@/store/slices/brand.slice";

type PageClickEvent = {
  selected: number;
};

export default function Page(): JSX.Element {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 40;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [categoryPageLoader, setCategoryPageLoader] = useState(false);

  const {
    CBSDetails = {},
    CBSTopFilters = [],
    filteredProducts = [],
    selectTopFilterValue = "",
  } = useAppSelector((state) => state.brands);
  const { name = "", description = "", image = "" } = CBSDetails || {};

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return notFound();
      setCategoryPageLoader(true);
      await productServices.getCategories();
      await categoryServices.getBrandDetails(id);
      await categoryServices.getCategoryPageProducts(
        id,
        "fetch_brand_products",
      );
      setCategoryPageLoader(false);
    };
    fetchData();
  }, [id]);

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredProducts?.slice(start, end);
  // handlers
  const handleFilterOpen = (filter: string) => {
    dispatch(globalStateActions.setFilter(filter));
  };
  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleText = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full">
      {categoryPageLoader && (
        <FullScreenLoader isLoading={categoryPageLoader} />
      )}

      {/* mobile */}
      <div
        className="border-b"
        style={{
          borderColor: "rgba(248, 45, 139, 0.10)",
        }}
      >
        <div className="mb-[10px] flex items-center justify-between px-[10px] py-[10px] md:hidden">
          <div className="flex flex-col">
            <div className="text-[11px] leading-[12.5px] font-semibold text-[#E7448C]">
              Showing
            </div>
            <div className="text-[11px] leading-[12.5px] font-semibold text-[#E7448C]">
              {filteredProducts?.length} results
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-[10px]">
            <div
              onClick={() => handleFilterOpen("sort")}
              style={{
                borderColor: "rgba(248, 45, 139, 0.10)",
              }}
              className={`relative flex cursor-pointer items-center justify-between gap-1 rounded-[8px] border bg-[#FFE7F2] px-[6px] py-[5px]`}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#F82D8B1A]">
                  <Image
                    src={burger_menu}
                    alt="menu"
                    className="h-[16px] w-[16px]"
                  />
                </div>
                <span className="text-[12px] font-normal text-[#000]">
                  Sort
                </span>
              </div>
            </div>
            <div
              onClick={() => handleFilterOpen("filter")}
              style={{
                borderColor: "rgba(248, 45, 139, 0.10)",
              }}
              className={`relative flex cursor-pointer items-center justify-between gap-1 rounded-[8px] border bg-[#FFE7F2] px-[6px] py-[5px]`}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#F82D8B1A]">
                  <Image
                    src={funnel}
                    alt="menu"
                    className="h-[16px] w-[16px]"
                  />
                </div>
                <span className="text-[12px] font-normal text-[#000]">
                  Filters (6)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cus-container mx-auto">
        <div className="flex justify-between gap-4 md:py-10">
          <div className="hidden w-full max-w-[240px] md:block">
            <FilterSidebar />
          </div>

          <div className="w-full max-w-[1104px]">
            <div className="flex w-full justify-start gap-2 py-4 md:gap-[15px] md:py-0">
              <div className="relative h-[80px] max-w-[80px] min-w-[80px] md:h-[150px] md:max-w-[150px] md:min-w-[150px]">
                <Image
                  src={`https://www.babystore.ae/storage/back/assets/brands/${image}`}
                  alt="brand"
                  fill
                  className="h-full w-full"
                />
              </div>
              <div className="w-full">
                <p className="mb-[7px] text-[24px] leading-[25px] font-bold text-[#000] md:text-[32px]">
                  {name || "Brand Name"}
                </p>

                <p
                  className={`mb-0 text-[12px] leading-normal font-normal text-[#000] transition-all md:text-[16px] ${
                    isExpanded ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {description}
                </p>

                <button
                  onClick={toggleText}
                  className="mt-2 text-sm font-medium text-pink-500 hover:underline"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
            {/* desktop filter */}
            <div className="mb-4 hidden flex-row items-center justify-between md:flex">
              <div className="max-w-max text-[16px] leading-[25px] font-medium text-[#E7448C]">
                {filteredProducts?.length} Results found!
              </div>

              <div className="relative inline-block w-full max-w-[300px] text-left">
                <div
                  style={{
                    borderColor: "rgba(248, 45, 139, 0.10)",
                  }}
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={`relative flex cursor-pointer items-center justify-between gap-2 rounded-[10px] border bg-[#FFE7F2] px-5 py-2 transition-all duration-200 ${
                    isOpen ? "rounded-b-none" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-[5px] bg-[#F82D8B1A]">
                      <Image
                        src={burger_menu}
                        alt="menu"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                    <span className="text-[14px] font-normal text-[#333]">
                      Sort by
                    </span>
                    <span className="text-[16px] font-semibold text-[#000]">
                      {selectTopFilterValue?.name
                        ? selectTopFilterValue?.name
                        : "Select"}
                    </span>
                  </div>
                  <Image
                    src={expendMore}
                    alt="arrow"
                    className={`h-[22px] w-[22px] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <div
                    className={`absolute top-full right-[-1px] left-[-1px] z-50 min-w-[260px] origin-top transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"} `}
                  >
                    <div
                      style={{
                        borderColor: "rgba(248, 45, 139, 0.10)",
                      }}
                      className="] rounded-b-[10px] border-x border-b bg-[#FFE7F2] px-5"
                    >
                      <ul className="">
                        {CBSTopFilters?.map(
                          (option: { name: string; count: number }) => (
                            <li
                              key={option?.name}
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(
                                  brandAction.setCBSTopFilterValue(option),
                                );
                                setIsOpen(false);
                              }}
                              className="flex cursor-pointer items-center justify-between rounded-[8px] py-[6px] transition-colors duration-150 hover:bg-[#fdd9e8] hover:px-3"
                            >
                              <span className="text-[15px] text-[#000]">
                                {option?.name}
                              </span>
                              <span className="rounded-full bg-white px-[10px] py-[2px] text-[14px] font-semibold text-[#F82D8B] transition-all duration-150 hover:scale-105">
                                {option?.count}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:flex sm:flex-wrap sm:justify-between md:min-h-[1104px] md:justify-start md:gap-[22px]">
              {currentItems.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="w-full max-w-full cursor-pointer sm:max-w-[175px] lg:max-w-[240px] xl:max-w-[259px]"
                  >
                    <ProductCardTwo product={product} />
                  </div>
                );
              })}
            </div>
            {filteredProducts.length > itemsPerPage && (
              <ReactPaginate
                breakLabel="..."
                nextLabel={
                  <Image
                    src={angle_down}
                    alt="angl"
                    className="-rotate-90 cursor-pointer"
                  />
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                previousLabel={
                  <Image
                    src={angle_down}
                    alt="angl"
                    className="rotate-90 cursor-pointer"
                  />
                }
                containerClassName="flex gap-[5px] justify-center pt-8 pb-4 "
                pageClassName="cursor-pointer cu rounded-full h-[30px] w-[30px] flex text-[#1F1F1F80] justify-center items-center border-1 !border-[#1F1F1F80]"
                activeClassName="cursor-pointer !bg-[#FF6AAF] border-none text-white"
                previousClassName="cursor-pointer h-[30px] w-[30px] rounded-full flex justify-center items-center border-1 border-[#1F1F1F80] px-0 py-0"
                nextClassName=" cursor-pointer h-[30px] w-[30px] rounded-full flex justify-center items-center border-1 border-[#1F1F1F80] px-0 py-0"
                breakClassName="text-[#1F1F1F80]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
