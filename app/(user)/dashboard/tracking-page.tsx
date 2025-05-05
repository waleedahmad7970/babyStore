import InputField from "@/components/fields/input-field";
import {
  OrderDetails,
  OrderDetailsTotal,
} from "@/components/order/order-detail";
import {
  call_icon_white,
  checkout_1,
  checkout_2,
  checkout_3,
} from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string | StaticImageData;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Lindale Outdoor Wooden Swing And Slide Playset...",
    price: 20081.25,
    quantity: 3,
    image: checkout_1,
  },
  {
    id: 2,
    name: "Fox 2 Complete Black/Black...",
    price: 4287.94,
    quantity: 1,
    image: checkout_2,
  },
  {
    id: 3,
    name: "Evenflo-EveryStage LX All-In-One Car Seat...",
    price: 1420.25,
    quantity: 7,
    image: checkout_3,
  },
];
export default function DashboardTrackingPage() {
  return (
    <div className="w-full">
      <div className="w-full sm:max-w-[420px]">
        <h1 className="text-[32px] leading-normal font-bold text-[#473A3F]">
          Order Tracking
        </h1>
        <p className="mb-6 text-[18px] leading-[25px] font-normal text-[#473A3F]">
          Track your order status!
        </p>
        <InputField
          value=""
          placeholder="Order Code"
          className="mb-4 w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <InputField
          value=""
          placeholder="Email Address"
          className="mb-8 w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <button className="mt-3 w-full rounded-[5.3px] bg-[#61B582] py-3 text-[18px] leading-[19.031px] font-medium text-white transition hover:bg-green-700">
          Track Order
        </button>
      </div>
      <div className="flex w-full flex-col justify-between gap-[28px] pt-[80px] xl:flex-row">
        <div className="w-full xl:max-w-[70%]">
          <OrderDetails />
          <div className="mt-[54px] hidden items-center justify-between rounded-[8px] bg-[#FFD8EB] px-8 py-6 md:flex">
            <div className="">
              <h2 className="mb-0 text-[16px] leading-[22px] font-medium text-[#473A3F]">
                Have been trouble on your package?{" "}
              </h2>
              <h2 className="mb-0 text-[14px] leading-[20px] font-medium tracking-[-0.7px] text-[#473A3F]/50">
                You can call us. We can help solve your problem{" "}
              </h2>
            </div>
            <div className="flex items-center justify-between gap-1 rounded-[4px] bg-[#FD71AF] px-[30px] py-[10px] text-white">
              <Image src={call_icon_white} className="h-5 min-w-5" alt="phon" />
              <p className="mb-0 text-[16px] leading-[22px] font-medium text-[#FFF]">
                Call Us
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:max-w-[30%]">
          {" "}
          <h2 className="mb-2 text-[24px] leading-[24px] font-medium text-[#473A3F]">
            Order Details
          </h2>
          <div className="flex w-full flex-col gap-2">
            {initialCart.map((item) => (
              <div
                key={item.id}
                className="relative flex h-[115px] justify-between gap-2 rounded-[7.6px] bg-[#FAFAFA] px-[5.4px] py-[5.4px] md:justify-start"
              >
                <Image
                  src={item?.image}
                  alt={"cart-item"}
                  height={104}
                  width={104}
                  className="min-w-[104px] rounded-[5.67px] object-contain"
                />
                <div className="flex h-full w-full flex-col justify-between">
                  <p className="line-clamp-2 w-[95%] text-[13px] leading-[17.2px] font-medium text-[#1F1F1F]">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-[9.673px] leading-[9.673px] font-light text-[#1F1F1F]">
                        AED
                      </p>
                      <p className="text-[14.882px] leading-[12.649px] font-semibold text-[#1F1F1F]">
                        {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <OrderDetailsTotal />
        </div>
      </div>
      <div className="mt-[54px] flex flex-col items-center justify-between gap-4 rounded-[8px] bg-[#FFD8EB] px-4 py-6 md:hidden">
        <div className="text-center">
          <h2 className="mb-0 text-[16px] leading-[22px] font-medium text-[#473A3F]">
            Have been trouble on your package?{" "}
          </h2>
          <h2 className="mb-0 text-[14px] leading-[20px] font-medium text-[#473A3F]/50">
            You can call us. We can help solve your problem{" "}
          </h2>
        </div>
        <div className="flex items-center justify-between gap-1 rounded-[4px] bg-[#FD71AF] px-[30px] py-[10px] text-white">
          <Image src={call_icon_white} className="h-5 min-w-5" alt="phon" />
          <p className="mb-0 text-[16px] leading-[22px] font-medium text-[#FFF]">
            Call Us
          </p>
        </div>
      </div>
    </div>
  );
}
