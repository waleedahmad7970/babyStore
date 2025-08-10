"use client";

import WishlistCard from "@/components/product/cards/wishlist-card";
import { angle_down, arrow_down } from "@/public/assets/icons";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
type PageClickEvent = {
  selected: number;
};
export default function DashboardWishlist() {
  const { wishList = [] } = useAppSelector((state) => state.user);
  const itemsPerPage = 10;
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
  };
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = wishList?.slice(start, end);
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center justify-start gap-3 md:hidden">
          <p className="min-w-[120px] text-[18px] leading-[25px] font-normal text-[#473A3F]">
            Recent orders
          </p>
          <Image src={arrow_down} className="h-4 min-w-4" alt="s" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:flex sm:flex-wrap sm:justify-between md:justify-start md:gap-5">
        {currentItems.map((product: any) => {
          return (
            <div
              key={product.id}
              className="w-full max-w-full cursor-pointer sm:max-w-[175px] lg:max-w-[212px]"
            >
              {/* <ProductCard product={product}/> */}
              <WishlistCard product={product} />
            </div>
          );
        })}
      </div>
      {wishList?.length > itemsPerPage && (
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
      )}
    </div>
  );
}
