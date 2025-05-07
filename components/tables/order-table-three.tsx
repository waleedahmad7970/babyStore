"use client";
import Image from "next/image";
import React, { useState } from "react";
import { orderColorPallte } from "@/static/static";
import { angle_down, strong_calendar } from "@/public/assets/icons";
import ReactPaginate from "react-paginate";
type OrderStatus = "In Progress" | "Complete" | "Pending" | "Approved";

type Order = {
  orderId: string;
  orderNo: string;
  shipTo: string;
  address: string;
  orderDate: string;
  status: OrderStatus;
};

const orders: Order[] = [
  {
    orderId: "6428421100",
    orderNo: "ORD-23145",
    shipTo: "Hamyd Kahn",
    address: "88-F State Life Housing Society, Lahore",
    orderDate: "123 Points",
    status: "In Progress",
  },
  {
    orderId: "6428421101",
    orderNo: "ORD-23146",
    shipTo: "Hamza Ali",
    address: "123-A Model Town, Lahore",
    orderDate: "123 Points",
    status: "Complete",
  },
  {
    orderId: "6428421102",
    orderNo: "ORD-23147",
    shipTo: "Sara Ahmed",
    address: "10-B Gulberg III, Lahore",
    orderDate: "123 Points",
    status: "Pending",
  },
  {
    orderId: "6428421103",
    orderNo: "ORD-23148",
    shipTo: "Ali Raza",
    address: "456-C DHA Phase 5, Lahore",
    orderDate: "123 Points",
    status: "Approved",
  },
];

// Map status to color palette key
const statusColorKeyMap: Record<OrderStatus, keyof typeof orderColorPallte> = {
  "In Progress": "purple",
  Complete: "green",
  Pending: "yellow",
  Approved: "blue",
};
type PageClickEvent = {
  selected: number;
};
const OrderTableThree = () => {
  const itemsPerPage = 4;
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
  };
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = orders.slice(start, end);
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white text-sm">
          <thead className="">
            <tr>
              <th className="flex min-w-[117px] items-center justify-start gap-2 border-r border-[#F1F1F5] py-[16px] pr-3 pl-0 text-[14px] leading-[14px] font-semibold text-[#473A3F] md:px-[24px]">
                <div className="h-4 max-w-4 min-w-4 rounded-[4px] border-[1.5px] border-[#B2B6BC] font-semibold" />
                <span>Order ID</span>
              </th>
              <th className="min-w-[121px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Order date
              </th>
              <th className="min-w-[350px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Purchased item
              </th>
              <th className="min-w-[149px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Product Cost
              </th>
              <th className="min-w-[149px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Points earned
              </th>
              <th className="min-w-[154px] px-4 py-2 font-semibold text-[#473A3F]">
                Payment method
              </th>
              <th className="min-w-[40px] px-4 py-2 font-semibold text-[#473A3F]"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {currentItems?.map((order, index) => (
              <tr
                key={index}
                className="cursor-pointer border-t-1 border-[#F1F1F5] transition-colors duration-200 hover:bg-[#F470AB33]/70"
              >
                <td className="flex min-w-[117px] items-center justify-start gap-2 py-2 pr-3 pl-0 md:px-[24px]">
                  <div className="h-4 max-w-4 min-w-4 rounded-[4px] border-[1.5px] border-[#B2B6BC]" />
                  <span>{order.orderId}</span>
                </td>
                <td className="min-w-[121px] px-1 py-2 md:px-4">
                  <div className="flex items-center gap-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                    <Image
                      src={strong_calendar}
                      className="h-4 max-w-4 min-w-4"
                      alt="icon"
                    />
                    <span>A minute ago</span>
                  </div>
                </td>
                <td className="min-w-[350px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                  Hape & SkipHop Baby Activity Center Adventure
                </td>
                <td className="min-w-[149px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                  AED 293.00
                </td>
                <td className="min-w-[149px] px-4 py-2">
                  <span>{order.orderDate}</span>
                </td>
                <td className="min-w-[154px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                  Debit Card (1834)
                </td>
                <td className="min-w-[40px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                  ...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Image src={angle_down} alt="angl" className="-rotate-90" />}
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
  );
};

export default OrderTableThree;
