"use client";
import React, { useState } from "react";
import Image from "next/image";
import { arrow_down } from "@/public/assets/icons";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        className={`flex w-full flex-col justify-start ${
          open ? "rounded-[18px]" : "rounded-[18px]"
        } bg-[#F6F6F6] py-[6px] pl-4 text-left transition-all duration-300`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex w-full items-center justify-between">
          <span className="text-[14px] leading-[20px] font-medium text-[#1F1F1F]">
            {title}
          </span>
          <div className="flex h-5 w-7 items-center justify-center">
            <Image
              src={arrow_down}
              alt="arrow_down"
              className={`h-3 w-[6px] transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`overflow-hidden pr-4 pl-[18px] text-[12px] font-normal transition-all duration-300 ${
            open
              ? "max-h-[1000px] py-[10px] opacity-100"
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="pb-2">{children}</div>
        </div>
      </button>
    </div>
  );
};

export default AccordionSection;
