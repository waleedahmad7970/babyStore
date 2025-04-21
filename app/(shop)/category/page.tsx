"use client";

import ProductCardTwo from "@/components/product/cards/product-card-two";
import FilterSidebar from "@/components/sidebar/filter-sidebar";
import {
  angle_down,
  burger_menu,
  expendMore,
  funnel,
} from "@/public/assets/icons";
import { productsLIST1 } from "@/static/static";
import Image from "next/image";
import React, { JSX, useState } from "react";
import ReactPaginate from "react-paginate";

type PageClickEvent = {
  selected: number;
};
const sortOptions = [
  { label: "Recommended", count: 120 },
  { label: "Best Seller", count: 42 },
  { label: "New Arrivals", count: 7 },
  { label: "Discount", count: 5 },
  { label: "Price low to high", count: 32 },
  { label: "Price high to low", count: 32 },
];
export default function Page(): JSX.Element {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
  };

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = productsLIST1.slice(start, end);

  return (
    <div className="w-full">
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
              {productsLIST1.length} results
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-[10px]">
            <div
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
        <div className="flex justify-between gap-4 py-10">
          <div className="hidden w-full max-w-[240px] md:block">
            <FilterSidebar />
          </div>

          <div className="w-full max-w-[1104px]">
            {/* desktop filter */}
            <div className="mb-4 hidden flex-row items-center justify-between md:flex">
              <div className="max-w-max text-[16px] leading-[25px] font-medium text-[#E7448C]">
                {productsLIST1.length} Results!
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
                      {selected.label}
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
                        {sortOptions.map((option) => (
                          <li
                            key={option.label}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(option);
                              setIsOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between rounded-[8px] py-[6px] transition-colors duration-150 hover:bg-[#fdd9e8]"
                          >
                            <span className="text-[15px] text-[#000]">
                              {option.label}
                            </span>
                            <span className="rounded-full bg-white px-[10px] py-[2px] text-[14px] font-semibold text-[#F82D8B] transition-all duration-150 hover:scale-105">
                              {option.count}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-1 sm:gap-[22px] md:min-h-[1104px] md:justify-start">
              {currentItems.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="w-full max-w-[175px] cursor-pointer lg:max-w-[240px] xl:max-w-[259px]"
                  >
                    <ProductCardTwo product={product} />
                  </div>
                );
              })}
            </div>

            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <Image src={angle_down} alt="angl" className="-rotate-90" />
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={Math.ceil(items.length / itemsPerPage)}
              previousLabel={
                <Image src={angle_down} alt="angl" className="rotate-90" />
              }
              containerClassName="flex gap-[5px] justify-center pt-8 pb-4"
              pageClassName=" rounded-full h-[30px] w-[30px] flex text-[#1F1F1F80] justify-center items-center border-1 !border-[#1F1F1F80]"
              activeClassName="!bg-[#FF6AAF] border-none  text-white"
              previousClassName="h-[30px] w-[30px]  rounded-full flex justify-center items-center border-1 border-[#1F1F1F80] px-0 py-0 "
              nextClassName="h-[30px] w-[30px] rounded-full flex justify-center items-center border-1 border-[#1F1F1F80] px-0 py-0 "
              breakClassName="text-[#1F1F1F80]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
