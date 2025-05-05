"use client";
import { arrow_down, copyClipboard, pink_arrow } from "@/public/assets/icons";
import Image from "next/image";
import { FC, useState } from "react";

interface TrackingStep {
  label: string;
  dateTime: string;
  completed: string;
}

const trackingSteps: TrackingStep[] = [
  {
    label: "Order received",
    dateTime: "16 Jul 2020 - 08:00 PM",
    completed: "completed",
  },
  {
    label: "Processing",
    dateTime: "16 Jul 2020 - 08:00 PM",
    completed: "completed",
  },
  {
    label: "Checking for quality assurance",
    dateTime: "16 Jul 2020 - 08:00 PM",
    completed: "completed",
  },
  {
    label: "Out for delivery",
    dateTime: "16 Jul 2020 - 08:00 PM",
    completed: "",
  },
  {
    label: "Delivered",
    dateTime: "16 Jul 2020 - 08:00 PM",
    completed: "not completed",
  },
  { label: "Review", dateTime: "", completed: "not completed" },
];
const orderInfo = [
  { label: "Expected arrival", value: "Mon 07-Aug-2023" },
  { label: "Ordered at", value: "04:08 PM" },
  { label: "Order day", value: "03/08/2023" },
  { label: "Status", value: "In delivery" },
  { label: "Payment Method", value: "Cash on delivery (COD)" },
  { label: "Payment Status", value: "Pending" },
];

const customerInfo = [
  { label: "Full Name", value: "Hamyd Kahn" },
  { label: "Phone", value: "+923249487463" },
  { label: "Address", value: "88-F State Life Housing Society" },
  { label: "City", value: "Lahore" },
  { label: "State", value: "Punjab" },
  { label: "Country", value: "PK" },
];
const subTotal = [
  { label: "Sub Total", value: "20,203.43" },
  { label: "Tax", value: "20,203.3" },
  { label: "Order Total", value: "205,203,12.35" },
];

export const OrderDetails: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-6 font-sans text-white">
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <div className="lg:min-w-[310px]">
          <h2 className="mb-2 text-[24px] leading-[24px] font-medium text-[#473A3F]">
            Order information
          </h2>
          <div className="space-y-1 text-sm text-gray-300">
            {orderInfo.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="font-Inter text-[16px] leading-[24px] font-medium text-[#473A3F]">
                  {item.label}
                </span>
                <span className="font-Inter text-[14px] leading-[24px] font-normal text-[#747B86]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:min-w-[310px]">
          <h2 className="mb-2 text-[24px] leading-[24px] font-medium text-[#473A3F]">
            Customer information
          </h2>
          <div className="space-y-1 text-sm text-gray-300">
            {customerInfo.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="font-Inter text-[16px] leading-[24px] font-medium text-[#473A3F]">
                  {item.label}
                </span>
                <span className="font-Inter text-[14px] leading-[24px] font-normal text-[#747B86]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-max self-start rounded-[8px] bg-[#F8F8F8] p-4">
        <p className="mb-1 text-[20px] leading-[24px] font-bold text-[#473A3F]">
          Order ID
        </p>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[20px] leading-[24px] font-normal text-[#473A3F]">
            6428421100
          </p>
          <Image src={copyClipboard} alt="copy" className="h-6 min-w-6" />
        </div>
      </div>
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3 className="py-4 text-[24px] leading-[24px] font-medium text-[#161D25]">
            Tracking details
          </h3>
          <Image
            src={arrow_down}
            alt="Toggle"
            className={`h-6 w-6 transform transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />{" "}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            open
              ? "max-h-[1000px] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0"
          } space-y-3`}
        >
          {trackingSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-[8px] ${index % 2 !== 0 ? "bg-[#F8F8F8]" : "bg-[#FFF]"} p-4 text-black`}
            >
              <div className="flex items-center gap-5">
                <div
                  className={`h-6 min-w-6 rounded-full border-2 ${
                    step.completed === "completed"
                      ? "border-[#61B582] bg-[#61B582]"
                      : step.completed === "not completed"
                        ? "border-[#61B582]"
                        : "border-[#E7E7E7]"
                  }`}
                />
                <span className="text-[14px] leading-[24px] font-normal text-[#473A3F]">
                  {step.label}
                </span>
              </div>
              <span className="text-[14px] leading-[24px] font-normal text-[#747B86]">
                {step.dateTime || "Write a review"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const OrderDetailsTotal: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-4 space-y-6">
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3 className="text-[14px] leading-[24px] font-medium text-[#FD71AF]">
            Show all products
          </h3>
          <Image
            src={pink_arrow}
            alt="Toggle"
            className={`h-6 w-6 transform transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />{" "}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            open
              ? "max-h-[1000px] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0"
          } space-y-3`}
        >
          <div className="space-y-1">
            {subTotal.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="font-Inter text-[16px] leading-[24px] font-normal text-[#A0A0A0]">
                  {item.label}
                </span>
                <span className="font-Inter text-[14px] leading-[24px] font-normal text-[#473A3F]">
                  <span className="mt-[-7px] mr-[-3px] text-[10px] leading-normal font-normal text-[#473A3F]">
                    AED
                  </span>{" "}
                  {item.value}
                  <span className="text-[#473A3F]l align-top text-[10px] leading-normal font-normal">
                    .00
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
