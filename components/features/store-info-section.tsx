import { storeInfoServices } from "@/static/static";
import React from "react";

interface StoreInfo {
  title: string;
  describtion: string;
}
export default function StoreInfoSection() {
  return (
    <div className="cus-container mx-auto hidden py-10 sm:block">
      <div>
        {storeInfoServices.map((section: StoreInfo, index: number) => (
          <div key={index} className="mb-6">
            <h3 className="text-[20px] leading-[24.5px] font-semibold text-[#1A1718]">
              {section.title}
            </h3>
            <p className="font-Inter text-[20px] leading-[22px] font-light whitespace-pre-line text-[#1A1718]">
              {section.describtion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
