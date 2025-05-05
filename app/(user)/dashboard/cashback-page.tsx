import React from "react";
import Image from "next/image";
import OrderTable from "@/components/tables/order-table";
const cashback = [
  { label: "Cashback Points", icon: "", cash: "00" },
  { label: "Total Cashback", icon: "", cash: "00" },
  { label: "Pending Cashback", icon: "", cash: "00" },
  { label: "Transfer to Wallet", icon: "", cash: "00" },
];
export default function CashbackPage() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2">
        {cashback.map((item, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-[14px] rounded-[8px] bg-[#FAFAFA] px-[26px] py-5"
            >
              <p className="mb-0 text-[48px] font-bold text-[#473A3F]">
                {item.cash}
              </p>
              <div className="flex items-center justify-start gap-2">
                <Image
                  src={item.icon}
                  alt=""
                  className="h-[32px] min-w-[32px] p-2"
                />
                <p className="mb-0 text-[18px] leading-[150%] font-normal text-[#473A3F]">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <OrderTable />
    </div>
  );
}
