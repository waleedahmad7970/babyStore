"use client";

import ProductCard from "@/components/product/cards/product-card";
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
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
  };

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = productsLIST1.slice(start, end);

  return (
    <div className="w-full">
      <div className="flex justify-between gap-4">
        <div className="w-full max-w-[240px]">240px</div>
        <div className="w-full max-w-[1104px]">
          <div className="flex items-center justify-between">
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
                  <Image src={angle_down} alt="sort" className="h-2 w-1" />
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
                    className="h-2 w-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentItems.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(items.length / itemsPerPage)}
            previousLabel="< Prev"
            containerClassName="flex gap-2 justify-center mt-4"
            pageClassName="px-3 py-1 rounded bg-gray-200"
            activeClassName="bg-blue-500 text-white"
            previousClassName="px-3 py-1 bg-gray-300 rounded"
            nextClassName="px-3 py-1 bg-gray-300 rounded"
            breakClassName="px-2"
          />
        </div>
      </div>
    </div>
  );
}
