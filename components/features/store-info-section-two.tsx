"use client";

import React, { useState } from "react";
import { storeInfoServices } from "@/static/static";
import { Plus, Minus } from "lucide-react"; // ✅ Import Plus & Minus icons

interface StoreInfo {
  title: string;
  describtion: string;
}

export default function StoreInfoSectionTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="cus-container mx-auto sm:block py-15">
      <div className="space-y-4">
        {storeInfoServices.map((section: StoreInfo, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white border-b border-gray-300 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-6 py-7 text-left"
              >
                <h3 className="text-[20px] font-semibold text-[#1A1718]">
                  {section.title}
                </h3>

                {/* ✅ Change icon based on state */}
                {isOpen ? (
                  <Minus className="h-5 w-5 text-[#E7448A] transition-all duration-300" />
                ) : (
                  <Plus className="h-5 w-5 text-[#E7448A] transition-all duration-300" />
                )}
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-[500px] opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="font-Inter text-[18px] leading-[26px] font-light text-[#1A1718] whitespace-pre-line">
                  {section.describtion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
