import React from "react";
import { footerBottomLinks, paymentMethods } from "../../static/static";
import Image from "next/image";

interface FooterLink {
  name: string;
  url: string;
}

interface PaymentMethod {
  name: string;
  img: string;
}

const FooterBottom: React.FC = () => {
  return (
    <div className="bg-white pt-[20px] pb-[10px] md:pt-0 md:pb-0">
      <div className="cus-container mx-auto flex flex-col items-start justify-between gap-[10px] px-2 pt-5 pb-[10px] text-gray-900 md:py-[21px] lg:flex-row lg:items-center lg:gap-0">
        <div className="text-center text-sm text-[#1F1F1F] md:text-left">
          <p className="font-inter text-dark text-[12px] leading-[14.52px] font-normal">
            Copyright © 2024 Babystore. All Rights Reserved
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          {footerBottomLinks.map((link: FooterLink, index: number) => (
            <div key={index}>
              <a
                href={link.url}
                className="font-inter text-dark text-[12px] leading-[14.52px] font-normal text-[#1A1718] underline hover:underline"
              >
                {link.name}
              </a>
              {index < footerBottomLinks.length - 1 && (
                <span className="px-3">•</span>
              )}
            </div>
          ))}
        </div>

        <div className="gap-auto mt-3 flex w-full max-w-[404px] flex-wrap justify-between md:mt-0">
          {paymentMethods.map((method: PaymentMethod, index: number) => (
            <Image
              key={index}
              src={method.img}
              alt={"paymet-cards"}
              className="h-[15px] w-[26px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
