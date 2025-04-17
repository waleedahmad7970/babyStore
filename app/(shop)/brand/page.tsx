"use client";

import ProductCard from "@/components/product/cards/product-card";
import FilterSidebar from "@/components/sidebar/filter-sidebar";
import { KidKraft } from "@/public/assets/brands";
import { angle_down, grid, sort } from "@/public/assets/icons";
import { productsLIST1 } from "@/static/static";
import Image from "next/image";
import React, { JSX, useState } from "react";
import ReactPaginate from "react-paginate";

type PageClickEvent = {
  selected: number;
};

export default function Page(): JSX.Element {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
  };

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = productsLIST1.slice(start, end);

  return (
    <div className="cus-container mx-auto w-full">
      <div className="flex justify-between gap-4 py-10">
        <div className="hidden w-full max-w-[240px] md:block">
          <FilterSidebar />
        </div>
        <div className="w-full max-w-[1104px]">
          <div className="flex w-full justify-start gap-[15px]">
            <div className="h-[150px] min-w-[150px] bg-[##F7F7F7]">
              <Image src={KidKraft} alt="brand" className="l" />
            </div>
            <div className="w-full">
              <p className="mb-[7px] text-[32px] leading-[25px] font-bold text-[#000]">
                KinderKraft
              </p>
              <p className="mb-0 max-w-[804px] text-[16px] leading-[25px] font-normal text-[#000]">
                Kinderkraft is all about creating positive experiences for baby
                and parents. The first magic incomprehensible words uttered, the
                first babysteps made without falling….. KinderKraft wants to be
                there!{" "}
              </p>
            </div>
          </div>
          <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="text-[16px] leading-[25px] font-medium text-[#E7448C]">
              {productsLIST1.length} Results!
            </div>
            <div className="flex items-center justify-between gap-[11px]">
              <div className="flex items-center justify-between gap-[6.43px] rounded-[21px] bg-[#FFF0F5] px-[15px] py-[8.5px]">
                <Image src={grid} alt="grid" />
                <p className="mb-0 text-[15px] leading-[9.6px] font-medium text-[#A0A0A0]">
                  Show
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="mb-0 text-[15px] leading-[9.6px] font-medium text-[#A0A0A0]">
                    Price: High to Low
                  </p>
                  <Image src={angle_down} alt="sort" className="h-2 min-w-1" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-[6.43px] rounded-[21px] bg-[#FFF0F5] px-[15px] py-[8.5px]">
                <Image src={sort} alt="sort icon" />
                <p className="mb-0 text-[15px] leading-[9.6px] font-medium text-[#A0A0A0]">
                  Show
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="mb-0 text-[15px] leading-[9.6px] font-medium text-[#A0A0A0]">
                    12
                  </p>
                  <Image
                    height={11}
                    src={angle_down}
                    alt="arrow"
                    className="h-2 min-w-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-h-[1104px] flex-wrap justify-between sm:gap-[22px] md:justify-start">
            {currentItems.map((product) => {
              return (
                <div
                  key={product.id}
                  className="w-full max-w-[230px] cursor-pointer max-[430px]:max-w-1/2 md:max-w-[259px]"
                >
                  <ProductCard product={product} />
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
  );
}
