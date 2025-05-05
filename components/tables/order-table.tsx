import { order_customer, strong_calendar } from "@/public/assets/icons";
import { orderColorPallte } from "@/static/static";
import Image from "next/image";
import React from "react";

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
];

// Map status to color palette key
const statusColorKeyMap: Record<OrderStatus, keyof typeof orderColorPallte> = {
  "In Progress": "purple",
  Complete: "green",
  Pending: "yellow",
  Approved: "blue",
};

const OrderTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto bg-white text-sm">
        <thead className="">
          <tr>
            <th className="flex min-w-[153px] items-center justify-start gap-2 border-r border-[#F1F1F5] px-[24px] py-[16px] text-[14px] leading-[14px] font-medium text-[#473A3F]">
              <div className="h-4 max-w-4 min-w-4 rounded-[4px] border-[1.5px] border-[#F1F1F5]" />
              <span>Order ID</span>
            </th>
            <th className="min-w-[175px] border-r border-[#F1F1F5] px-4 py-2 text-[14px] leading-[14px] font-medium text-[#473A3F]">
              Ship No
            </th>
            <th className="min-w-[191px] border-r border-[#F1F1F5] px-4 py-2 text-[14px] leading-[14px] font-medium text-[#473A3F]">
              Project
            </th>
            <th className="min-w-[260px] border-r border-[#F1F1F5] px-4 py-2 text-[14px] leading-[14px] font-medium text-[#473A3F]">
              Address
            </th>
            <th className="min-w-[137px] border-r border-[#F1F1F5] px-4 py-2 text-[14px] leading-[14px] font-medium text-[#473A3F]">
              Order Date
            </th>
            <th className="min-w-[123px] px-4 py-2 font-semibold">
              Order Status
            </th>
            <th className="min-w-[40px] px-4 py-2 font-semibold"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-600">
          {orders.map((order, index) => (
            <tr
              key={index}
              className="cursor-pointer border-t-1 border-[#F1F1F5] transition-colors duration-200 hover:bg-[#F470AB33]/70"
            >
              <td className="flex min-w-[153px] items-center justify-start gap-2 px-[24px] py-2">
                <div className="h-4 max-w-4 min-w-4 rounded-[4px] border-[1.5px] border-[#F1F1F5]" />
                <span>{order.orderId}</span>
              </td>
              <td className="min-w-[175px] px-4 py-2">
                <div className="flex items-center gap-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                  <Image
                    src={order_customer}
                    className="h-6 min-w-6"
                    alt="icon"
                  />
                  <span>{order.orderNo}</span>
                </div>
              </td>
              <td className="min-w-[191px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                {order.shipTo}
              </td>
              <td className="min-w-[260px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                {order.address}
              </td>
              <td className="min-w-[137px] px-4 py-2">
                <div className="flex items-center gap-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                  <Image
                    src={strong_calendar}
                    className="h-4 max-w-4 min-w-4"
                    alt="icon"
                  />
                  <span>{order.orderDate}</span>
                </div>
              </td>
              <td className="min-w-[123px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      backgroundColor:
                        orderColorPallte[statusColorKeyMap[order.status]],
                    }}
                    className="h-2 w-2 rounded-full"
                  />
                  <span
                    style={{
                      color: orderColorPallte[statusColorKeyMap[order.status]],
                    }}
                  >
                    {" "}
                    {order.status}
                  </span>
                </div>
              </td>
              <td className="min-w-[40px] px-4 py-2 text-[12px] leading-[18px] font-normal text-[#473A3F]">
                ...
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
