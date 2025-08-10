import React from "react";
import Image from "next/image";
import {
  kwik,
  mini_whatsapp,
  price_match,
  tabby,
  twoX,
} from "@/public/assets/icons";

interface InstallationCardProps {
  text?: string;
  selected: boolean;
  onClick?: () => void;
}

const CashbackCard = () => (
  <div className="mb-[6px] flex w-full items-center rounded-full bg-[#FFF0F5] px-[28px] py-[10px] md:px-5">
    <Image
      src={twoX}
      alt="Kwik"
      className="mr-[15px] h-[30px] w-[58px] md:mr-7"
    />
    <div className="h-[30px]">
      <p className="text-[11px] leading-[14.52px] font-extrabold text-[#00AE42] md:text-[12px]">
        Earn AED 5.50
      </p>
      <p className="text-[11px] leading-[14.52px] font-normal text-[#1F1F1F] md:text-[12px]">
        Earn 2 Points for Every Dirham Spent
      </p>
    </div>
  </div>
);

const DeliveryCard = () => (
  <div className="flex w-full items-center rounded-full bg-[#F6F6F6] px-[17px] py-[9px] md:px-5">
    <Image src={kwik} alt="Kwik" className="mr-[18px] h-6 w-[65px] md:mr-7" />
    <div className="leading-[14.52px] tracking-tight">
      <span className="font-inter text-[12px] font-medium text-[#00AE42]">
        Deliver to{" "}
      </span>
      <span className="text-[12px] leading-[14px] font-light underline">
        Abu Dhabi Media Co, Abu Dhabi
      </span>
      <span className="font-inter text-[12px] font-medium text-[#00AE42]">
        {" "}
        by
      </span>
      <span className="text-[12px] leading-[14px] font-semibold">
        {" "}
        Tomorrow, January 27{" "}
      </span>
      <span className="text-[12px] leading-[14px] font-light">
        When you order before 12 PM.
      </span>
    </div>
  </div>
);

const PriceMatchCard = () => (
  <div className="flex w-full items-center justify-start gap-[6px] rounded-full bg-[#F6F6F6] px-5 py-[10px] md:gap-4">
    <Image src={price_match} alt="Tabby" className="h-[21px] w-[75px]" />
    <div className="flex flex-col justify-start gap-[3px] md:flex-row md:items-center md:gap-4">
      <div className="text-[11px] leading-[13.31px] text-[#1F1F1F] md:text-[12px] md:leading-[14.52px]">
        <span className="font-normal">
          Find a better price? Well beat it by{" "}
        </span>
        <span className="text-[11px] font-semibold md:text-[12px]">10%</span>
      </div>
      <div className="flex items-center justify-start gap-1">
        <p className="mb-0 text-[6px] leading-[13.31px] font-semibold text-[#1F1F1F] uppercase">
          Connect on
        </p>
        <Image src={mini_whatsapp} alt="Tabby" className="h-[10px] w-[10px]" />
      </div>
    </div>
  </div>
);

const TabbyCard = () => (
  <div className="flex w-full items-center gap-[32px] rounded-full bg-[#F6F6F6] px-5 py-[14.5px] md:gap-[42px]">
    <Image src={tabby} alt="Tabby" className="h-[21px] w-[48px]" />
    <div className="text-[11px] text-[#1F1F1F] md:text-[12px]">
      <p className="font-normal">
        Split in 4 payments. No interest.{" "}
        <span className="font-semibold">No late fees.</span>
      </p>
    </div>
  </div>
);

const DiscountCard = ({
  text = "CALL US TO RECEIVE YOUR PERSONALIZED DISCOUNT CODES",
}) => (
  <div className="hidden w-full items-center justify-center rounded-full bg-[#DAF0DC] px-5 py-[18px] md:block md:justify-start">
    <p className="text-[12px] leading-[14px] font-semibold text-[#464646] uppercase">
      {text}
    </p>
  </div>
);
const InstallationCard: React.FC<InstallationCardProps> = ({
  text = "Installation Card -",
  selected,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`flex w-full cursor-pointer items-center justify-center rounded-full border-t-1 border-r-1 border-b-2 border-l-1 border-[#DAF0DC] ${selected ? "bg-[#DAF0DC]" : "bg-[#DAF0DC]/20"} px-5 py-[18px] hover:bg-[#DAF0DC] md:justify-start`}
  >
    <p className="text-[12px] leading-[14px] font-semibold text-[#464646] uppercase">
      {text}
    </p>
  </div>
);

export {
  CashbackCard,
  DeliveryCard,
  PriceMatchCard,
  TabbyCard,
  DiscountCard,
  InstallationCard,
};
