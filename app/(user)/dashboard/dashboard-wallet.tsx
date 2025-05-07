import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import OrderTableThree from "@/components/tables/order-table-three";
import { add } from "@/public/assets/dashboard";
import Image from "next/image";
import React from "react";

export default function DashboardWallet() {
  return (
    <div className="w-full pt-4">
      <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex w-full items-center justify-center rounded-[16px] bg-[#FD71AF] px-[80px] py-[46px] md:min-h-[200px]">
          <div className="flex flex-col gap-2">
            <p className="mb-0 text-center text-[24px] leading-[150%] font-semibold text-white">
              Total amount
            </p>
            <p className="mb-0 text-center text-[16px] leading-[150%] font-medium text-white">
              AED 998.00
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-2 rounded-[16px] bg-[#75CE98] px-[40px] py-[46px] md:min-h-[200px] md:px-[80px]">
          <p className="mb-0 text-[24px] leading-[150%] font-semibold text-white">
            Total amount
          </p>
          <div className="flex justify-start gap-2">
            <InputField
              value=""
              placeholder="Type amount"
              className="w-full max-w-[306px] rounded-[7px] bg-[#FAFAFA] px-4 py-[14px] text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
            />
            <div className="rounded-[8px] bg-white p-4">
              <Image src={add} className="h-5 w-5" alt="a" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 flex w-full items-center justify-between pt-8">
        <p className="mb-0 text-[24px] leading-normal font-bold text-[#473A3F] md:text-[32px]">
          Purchased items
        </p>
        <Button
          text={"Remove"}
          className="rounded-[8px] bg-[#FF4545] px-6 py-2 text-[18px] leading-[25px] font-normal text-[#fff]"
        />
      </div>
      <OrderTableThree />
    </div>
  );
}
