"use client";
import Image from "next/image";
import React, { useState } from "react";
import { orderColorPallte } from "@/static/static";
import {
  angle_down,
  order_customer,
  strong_calendar,
} from "@/public/assets/icons";
import ReactPaginate from "react-paginate";
import { useAppSelector } from "@/store/hooks";
import moment from "moment";
import {
  conformOrderStatusLabels,
  OrderStatusKey,
  statusColorKeyMap,
} from "@/helpers/helper";

type OrderStatus = "In Progress" | "Complete" | "Pending" | "Approved";
type PageClickEvent = {
  selected: number;
};
type Order = {
  orderId: string; // ✅ previously `id`
  orderNo: string; // ✅ previously `code`
  shipTo: string;
  address: string;
  orderDate: string; // ✅ previously `created_at`
  status: OrderStatus;
};

const orders: Order[] = [
  {
    orderId: "6428421100",
    orderNo: "ORD-23145",
    shipTo: "Hamyd Kahn",
    address: "88-F State Life Housing Society, Lahore",
    orderDate: "03/08/2023",
    status: "In Progress",
  },
  {
    orderId: "6428421101",
    orderNo: "ORD-23146",
    shipTo: "Hamza Ali",
    address: "123-A Model Town, Lahore",
    orderDate: "04/08/2023",
    status: "Complete",
  },
  {
    orderId: "6428421102",
    orderNo: "ORD-23147",
    shipTo: "Sara Ahmed",
    address: "10-B Gulberg III, Lahore",
    orderDate: "05/08/2023",
    status: "Pending",
  },
  {
    orderId: "6428421103",
    orderNo: "ORD-23148",
    shipTo: "Ali Raza",
    address: "456-C DHA Phase 5, Lahore",
    orderDate: "06/08/2023",
    status: "Approved",
  },

  {
    orderId: "6428431100",
    orderNo: "ORD-23145",
    shipTo: "Hamyd Kahn",
    address: "88-F State Life Housing Society, Lahore",
    orderDate: "03/08/2023",
    status: "In Progress",
  },
  {
    orderId: "6428422101",
    orderNo: "ORD-23146",
    shipTo: "Hamza Ali",
    address: "123-A Model Town, Lahore",
    orderDate: "04/08/2023",
    status: "Complete",
  },
  {
    orderId: "6421421102",
    orderNo: "ORD-23147",
    shipTo: "Sara Ahmed",
    address: "10-B Gulberg III, Lahore",
    orderDate: "05/08/2023",
    status: "Pending",
  },
  {
    orderId: "6428421103",
    orderNo: "ORD-23148",
    shipTo: "Ali Raza",
    address: "456-C DHA Phase 5, Lahore",
    orderDate: "06/08/2023",
    status: "Approved",
  },
  {
    orderId: "6421421102",
    orderNo: "ORD-23147",
    shipTo: "Sara Ahmed",
    address: "10-B Gulberg III, Lahore",
    orderDate: "05/08/2023",
    status: "Pending",
  },
  {
    orderId: "6428421103",
    orderNo: "ORD-23148",
    shipTo: "Ali Raza",
    address: "456-C DHA Phase 5, Lahore",
    orderDate: "06/08/2023",
    status: "Approved",
  },
];

const RecentOrderTable = () => {
  const { orders } = useAppSelector((state) => state.orders) as {
    orders: any[];
  };

  const itemsPerPage = 12;
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageClick = ({ selected }: PageClickEvent): void => {
    setCurrentPage(selected);
  };
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const oneDayAgo = new Date();
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const threeDaysAgo = moment().subtract(15, "days");

  const lastThreeDaysOrders = orders
    .filter((order) => {
      const orderDate = moment(order?.order?.created_at);
      return orderDate.isValid() && orderDate.isAfter(threeDaysAgo);
    })
    .sort((a, b) => {
      return (
        moment(b?.order?.created_at).valueOf() -
        moment(a?.order?.created_at).valueOf()
      );
    });

  const currentItems = lastThreeDaysOrders.slice(start, end);

  return (
    <div className="min-h-[400px] w-full">
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white text-sm">
          <thead className="">
            <tr>
              <th className="flex min-w-[108px] items-center justify-start gap-2 border-r border-[#F1F1F5] py-[16px] pr-3 pl-0 text-[14px] leading-[14px] font-semibold text-[#473A3F] md:min-w-[153px] md:px-[24px]">
                <div className="h-4 max-w-4 min-w-4 rounded-[4px] border-[1.5px] border-[#B2B6BC] font-semibold" />
                <span>Order ID</span>
              </th>
              <th className="min-w-[139px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F] md:min-w-[175px]">
                Ship No
              </th>
              <th className="min-w-[191px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Project
              </th>
              <th className="min-w-[260px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Address
              </th>
              <th className="min-w-[137px] border-r border-[#F1F1F5] px-4 py-2 text-left text-[14px] leading-[14px] font-semibold text-[#473A3F]">
                Order Date
              </th>
              <th className="min-w-[123px] px-4 py-2 font-medium">
                Order Status
              </th>
              <th className="min-w-[40px] px-4 py-2 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {currentItems?.map(({ order }, index) => {
              const { billing_info = {} } = order || {};
              return (
                <tr
                  key={index}
                  className="cursor-pointer border-t-1 border-[#F1F1F5] transition-colors duration-200 hover:bg-[#F470AB33]/70"
                >
                  <td className="flex min-w-[108px] items-center justify-start gap-2 py-2 pr-3 pl-0 md:min-w-[153px] md:px-[24px]">
                    <div className="h-4 max-w-4 min-w-4 rounded-[4px] border-[1.5px] border-[#B2B6BC]" />
                    <span>{order?.id}</span>
                  </td>
                  <td className="min-w-[139px] px-4 py-2 md:min-w-[175px]">
                    <div className="flex items-center gap-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                      <Image
                        src={order_customer}
                        className="h-6 min-w-6"
                        alt="icon"
                      />
                      <span>{order?.code}</span>
                    </div>
                  </td>
                  <td className="min-w-[191px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                    {billing_info?.email || "User Name"}
                  </td>
                  <td className="min-w-[260px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                    {billing_info?.address_1 || "User Address"}
                  </td>
                  <td className="min-w-[137px] px-4 py-2">
                    <div className="flex items-center gap-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                      <Image
                        src={strong_calendar}
                        className="h-4 max-w-4 min-w-4"
                        alt="icon"
                      />
                      <span className="capitalize">
                        {moment(order?.created_at).fromNow()}
                      </span>
                    </div>
                  </td>
                  <td className="min-w-[123px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                    <div className="flex items-center gap-2">
                      <div
                        style={{
                          backgroundColor:
                            orderColorPallte[
                              statusColorKeyMap[
                                order?.delivery_status as OrderStatusKey
                              ]
                            ],
                        }}
                        className="h-2 w-2 rounded-full"
                      />
                      <span
                        className="font-medium"
                        style={{
                          color:
                            orderColorPallte[
                              statusColorKeyMap[
                                order?.delivery_status as OrderStatusKey
                              ]
                            ],
                        }}
                      >
                        {
                          conformOrderStatusLabels[
                            order?.delivery_status as OrderStatusKey
                          ]
                        }
                      </span>
                    </div>
                  </td>
                  <td className="min-w-[40px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                    ...
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {lastThreeDaysOrders?.length > itemsPerPage && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <Image
              src={angle_down}
              alt="Next"
              className={`-rotate-90 ${
                currentPage >=
                Math.ceil(lastThreeDaysOrders.length / itemsPerPage) - 1
                  ? "opacity-50"
                  : ""
              }`}
            />
          }
          previousLabel={
            <Image
              src={angle_down}
              alt="Previous"
              className={`rotate-90 ${currentPage === 0 ? "opacity-50" : ""}`}
            />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(lastThreeDaysOrders.length / itemsPerPage)}
          forcePage={currentPage}
          containerClassName="flex gap-[5px] justify-center pt-8 pb-4"
          pageClassName="rounded-full h-[30px] w-[30px] flex text-[#1F1F1F80] justify-center items-center border-1 !border-[#1F1F1F80]"
          activeClassName="!bg-[#FF6AAF] border-none text-white"
          previousClassName={`h-[30px] w-[30px] rounded-full flex justify-center items-center border-1 border-[#1F1F1F80] px-0 py-0 ${
            currentPage === 0 ? "pointer-events-none opacity-50" : ""
          }`}
          nextClassName={`h-[30px] w-[30px] rounded-full flex justify-center items-center border-1 border-[#1F1F1F80] px-0 py-0 ${
            currentPage >=
            Math.ceil(lastThreeDaysOrders.length / itemsPerPage) - 1
              ? "pointer-events-none opacity-50"
              : ""
          }`}
          breakClassName="text-[#1F1F1F80]"
        />
      )}
    </div>
  );
};

export default RecentOrderTable;
