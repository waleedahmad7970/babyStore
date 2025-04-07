import React from "react";
import Image from "next/image";
import { featuresData } from "../../static/static";

interface Feature {
  id: number;
  icon: string;
  text: string;
}

export default function DeliveryService() {
  return (
    <div className="w-full bg-[#1D4983] md:bg-[#1D4983]">
      <div className="cus-container flex w-full items-center justify-center py-[10px] text-white md:gap-10 md:py-0">
        {featuresData.map((feature: Feature, index: number) => (
          <div
            key={feature.id}
            className={`flex flex-col items-center gap-[5px] p-[10px] md:flex-row md:justify-center md:px-[60px] md:py-5 ${
              // index <= 0 ? "md:max-w-[312px]" : "md:max-w-[307px]"
              ""
            } md:gap-[18px]`}
          >
            <Image
              src={feature.icon}
              alt={`Feature Icon ${feature.id}`}
              className="h-7 w-7 md:h-10 md:w-10"
            />
            <p className="font-inter mb-0 text-[14px] leading-[17px] font-medium md:text-[20px] md:leading-[24.2px] md:font-semibold">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
