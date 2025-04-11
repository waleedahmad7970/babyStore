import React, { useState } from "react";
import Image from "next/image";
import { arrow_down } from "@/public/assets/icons";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col justify-start gap-2">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            className={`flex w-full flex-col justify-start ${openIndex === index ? "rounded-[18px]" : "rounded-[50px]"} bg-[#F6F6F6] py-[6px] pl-4 text-left`}
            onClick={() => toggleAccordion(index)}
          >
            <div className={`flex w-full items-center justify-start`}>
              <div className="flex w-full items-center justify-between">
                <span className="text-[14px] leading-[20px] font-medium text-[#1F1F1F]">
                  {item.title}
                </span>
                <div className="flex h-5 w-7 items-center justify-center">
                  <Image
                    src={arrow_down}
                    alt="arrow_down"
                    className="h-3 w-[6px]"
                  />
                </div>
              </div>
            </div>
            {openIndex === index && (
              <div className="font-inter w-full max-w-[320px] bg-[#F6F6F6] py-[10px] pb-2 pl-[18px] text-[12px] font-normal">
                {item.content}
              </div>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
