import React from "react";
import Image from "next/image";
import OrderTable from "@/components/tables/order-table";
import {
  Cashback_Points,
  walletArrowDown,
  walletArrowLeft,
  walletCheck,
} from "@/public/assets/dashboard";
import Button from "@/components/button/button";
import OrderTableTwo from "@/components/tables/order-table-two";
import OrderTableThree from "@/components/tables/order-table-three";
const cashback = [
  { label: "Cashback Points", icon: Cashback_Points, cash: "00" },
  { label: "Total Cashback", icon: walletCheck, cash: "00" },
  { label: "Pending Cashback", icon: walletArrowDown, cash: "00" },
  { label: "Transfer to Wallet", icon: walletArrowLeft, cash: "00" },
];
export default function CashbackPage() {
  return (
    <div className="w-full pt-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2">
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
                  className="h-[32px] min-w-[32px]"
                />
                <p className="mb-0 text-[18px] leading-[150%] font-normal text-[#473A3F]">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-6 flex w-full items-center justify-between pt-8">
        <p className="mb-0 text-[24px] leading-normal font-bold text-[#473A3F] md:text-[32px]">
          Purchased items
        </p>
        <Button
          text={"Remove"}
          className="rounded-[8px] bg-[#FF4545] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
        />
      </div>
      <OrderTableTwo />
    </div>
  );
}
