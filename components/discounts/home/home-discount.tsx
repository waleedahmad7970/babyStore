import Button from "@/components/button/button";
import { useCountdown } from "@/hooks/discountCounter";
import { logo_light } from "@/public/assets/brands";
import Image from "next/image";
import React from "react";

export default function HomeDiscountCountDown() {
  const { days, hours, minutes, seconds } = useCountdown("2025-08-10T00:00:00");

  return (
    <div className="mx-auto my-10 w-full max-w-[1360px] rounded-[8px] bg-[#E7448C] px-3 py-5 shadow-2xs">
      <div className="flex w-full items-center justify-between rounded-2xl">
        <div className="flex items-center justify-start">
          <Image src={logo_light} alt="logo" className="wo-[140px] h-[50px]" />
          <div className="mb-0tracking-tighter leading-[16px] text-sky-50">
            <span className="text-[40px] font-bold">
              <span className="text-[60px] leading-[40px]">50%</span> OFF
            </span>
            <div>
              <span className="text-[24px] leading-[26px] font-bold tracking-[-2px] text-[#1D4983]">
                {" "}
                Flat Sale
              </span>
              <span className="text-[24px] leading-[26px] tracking-[-2px]">
                {" "}
                4 Days to Go!
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="animate-pulseBox relative min-w-[80px] rounded-[8px] bg-white p-3 text-center text-[40px] font-bold uppercase">
            <p className="absolute right-0 bottom-0 left-0 mb-0 text-[12px] font-bold text-[#1D4983]">
              Days
            </p>
            {days}
          </div>
          <div className="animate-pulseBox relative min-w-[80px] rounded-[8px] bg-white p-3 text-center text-[40px] font-bold uppercase">
            <p className="absolute right-0 bottom-0 left-0 mb-0 text-[12px] font-bold text-[#1D4983]">
              Hours
            </p>
            {hours}
          </div>
          <div className="animate-pulseBox relative min-w-[80px] rounded-[8px] bg-white p-3 text-center text-[40px] font-bold uppercase">
            <p className="absolute right-0 bottom-0 left-0 mb-0 text-[12px] font-bold text-[#1D4983]">
              Minutes
            </p>
            {minutes}
          </div>
          <div className="animate-pulseBox relative min-w-[80px] rounded-[8px] bg-white p-3 text-center text-[40px] font-bold uppercase">
            <p className="absolute right-0 bottom-0 left-0 mb-0 text-[12px] font-bold text-[#1D4983]">
              Seconds
            </p>
            {seconds}
          </div>
        </div>
        <div className="relative">
          <Button
            size={30}
            type={"submit"}
            text={"Get Now!"}
            className="animate-pulseText mt-2 mr-2 w-full max-w-max cursor-pointer rounded-full bg-white px-7 py-3 text-[20px] font-semibold text-[#E7448C] shadow-md transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
