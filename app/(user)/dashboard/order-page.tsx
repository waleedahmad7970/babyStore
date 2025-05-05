import Button from "@/components/button/button";
import OrderTable from "@/components/tables/order-table";
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
        <div className="mb-4 flex w-full flex-row justify-start py-2">
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
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            text={"Show all"}
            className="rounded-[8px] bg-[#61B582] px-6 py-2 text-[18px] leading-[25px] font-normal text-[#fff]"
          />
          <Button
            text={"Remove"}
            className="rounded-[8px] bg-[#FF4545] px-6 py-2 text-[18px] leading-[25px] font-normal text-[#fff]"
          />
        </div>
      </div>
      <OrderTable />
    </div>
  );
}
