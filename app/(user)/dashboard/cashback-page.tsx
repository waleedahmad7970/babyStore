import React from "react";
import Image from "next/image";
import {
  Cashback_Points,
  walletArrowDown,
  walletArrowLeft,
} from "@/public/assets/dashboard";
import OrderTableTwo from "@/components/tables/order-table-two";
import { useAppSelector } from "@/store/hooks";

const CashStatCard = ({ cash, label, icon }: any) => {
  return (
    <div className="flex w-full flex-col items-center gap-[14px] rounded-[8px] bg-[#FAFAFA] px-[16px] py-5">
      <p className="mb-0 text-[48px] font-bold text-[#473A3F]">{cash}</p>
      <div className="flex items-center justify-start gap-2">
        <Image src={icon} alt={label} className="h-[32px] min-w-[32px]" />
        <p className="mb-0 text-[18px] leading-[150%] font-normal text-[#473A3F]">
          {label}
        </p>
      </div>
    </div>
  );
};

export default function CashbackPage() {
  const { userCashback = {} } = useAppSelector((state) => state.user) as any;
  const { summary = {} } = userCashback || {};
  return (
    <div className="w-full pt-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2">
        <CashStatCard
          cash={summary?.total?.toFixed(2)}
          icon={Cashback_Points}
          label={"Total Cashback"}
        />
        <CashStatCard
          cash={summary?.successful?.toFixed(2)}
          icon={Cashback_Points}
          label={"Successful Cashback"}
        />
        <CashStatCard
          cash={summary?.pending?.toFixed(2)}
          icon={walletArrowDown}
          label={"Pending Cashback"}
        />
        <CashStatCard
          cash={summary?.cancelled?.toFixed(2)}
          icon={walletArrowLeft}
          label={"Cancel Cashback"}
        />
      </div>
      <div className="mb-6 flex w-full items-center justify-between pt-8">
        <p className="mb-0 text-[24px] leading-normal font-bold text-[#473A3F] md:text-[32px]">
          Purchased items
        </p>
      </div>
      <OrderTableTwo />
    </div>
  );
}
