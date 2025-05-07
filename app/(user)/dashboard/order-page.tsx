import Button from "@/components/button/button";
import OrderTable from "@/components/tables/order-table";
import { arrow_down } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";
const OrdersStatus = [
  "Unpaid",
  "Out for delivery",
  "Shipped",
  "Returned",
  "Delivered",
];
export default function DashboardOrderPage() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="mb-4 hidden w-full flex-row justify-start py-2 md:flex">
          {OrdersStatus?.map((item, index) => {
            return (
              <p
                key={index}
                className="border-r-1 border-[#F1F1F5] px-2 text-[14px] leading-[25px] font-normal text-[#473A3F]"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex items-center justify-start md:hidden">
          <div className="flex items-center justify-start gap-3 md:hidden">
            <p className="min-w-[120px] text-[18px] leading-[25px] font-normal text-[#473A3F]">
              Recent orders
            </p>
            <Image src={arrow_down} className="h-4 min-w-4" alt="s" />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            text={"Show all"}
            className="rounded-[8px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
          />
          <Button
            text={"Remove"}
            className="rounded-[8px] bg-[#FD71AF] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
          />
        </div>
      </div>
      <OrderTable />
    </div>
  );
}
