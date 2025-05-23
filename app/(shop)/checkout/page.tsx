"use client";
import React, { useState } from "react";
import CartPanel from "@/components/cart/cart-panel";
import FeatureCards from "@/components/cards/feature-card";
import InputField from "@/components/fields/input-field";
import { free_delivery } from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Needed for the flags!
import { useAppSelector } from "@/store/hooks";

const paymentData = [
  { methodName: "PayPal" },
  { methodName: "Credit/ Debit Card" },
  { methodName: "Apple Pay" },
  { methodName: "Cash on Delivery" },
];
export default function Page() {
  const [phone, setPhone] = useState("");
  const { cartProducts = [] } = useAppSelector((state) => state.cart);

  return (
    <div className="mx-auto w-full max-w-[1360px] px-[10px] py-10 lg:px-0">
      <p className="mb-[44px] text-[40px] leading-normal font-semibold text-[#000]">
        Checkout
      </p>
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-2">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-w-max text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Billing Information{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              1
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <InputField
                value=""
                placeholder="First Name"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
              />
              <InputField
                value=""
                placeholder="Last Name"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
              />
            </div>
            <InputField
              value=""
              placeholder="Email address"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />
            <div className="flex flex-col items-center justify-between gap-2 outline-none md:flex-row">
              <InputField
                value=""
                placeholder="Country"
                className="max-w-[228px] rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />
              <InputField
                value=""
                placeholder="City"
                className="max-w-[228px] rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />
            </div>
            <InputField
              value=""
              placeholder="Address1 "
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />
            <InputField
              value=""
              placeholder="Address1 "
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />
            <div className="flex flex-col items-center justify-between gap-2 outline-none md:flex-row">
              <PhoneInput
                country={"ae"} // You can set the default country
                value={phone}
                specialLabel=""
                onChange={setPhone}
                inputClass="!ps-10 !w-full !rounded-[7px] !bg-[#FAFAFA] !border-none !px-4 !py-3 !h-[48px] !text-[14px] !leading-[24px] !text-[#ADADAD] border-none focus:!outline-none "
                containerClass="!w-full !bg-[#FAFAFA] !border-none !rounded-[7px]"
                buttonClass="!bg-[#FAFAFA] !border-none !rounded-[7px]"
              />
              <InputField
                value=""
                placeholder="City"
                className="max-w-[192px] rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />
            </div>
            <textarea
              placeholder="Additional Information "
              className="min-h-[118px] rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] bg-white" />
            <p className="text-[14px] leading-[24px] font-normal text-[#000]">
              Ship to same address.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Shipping Method{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              2
            </div>
          </div>

          <div className="flex items-center justify-start gap-3">
            <div className="h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] bg-white" />
            <Image src={free_delivery} alt="lo" className="max-w-[93px]" />
          </div>
          <div className="rounded-[4px] bg-[#FAFAFA] px-[15px] py-[10px]">
            <p className="mb-0 text-[12px]">
              <span className="font-semibold text-[#61B582]">
                Get it Delivered
              </span>{" "}
              by{" "}
              <span className="font-semibold text-[#000]">
                {" "}
                Tomorrow, January 27
              </span>{" "}
              When you order before 12 PM.
            </p>
          </div>
          <div className="mt-[44px] mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Shipping Method{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              2
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-[14px]">
            {paymentData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex max-w-[240px] items-center justify-start gap-3"
                >
                  <div className="h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] bg-white" />
                  <p className="mb-0 text-[14px] leading-[24px] font-normal text-[#000]">
                    {item.methodName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Shipping Method{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              2
            </div>
          </div>
          <div
            style={{
              borderColor: "rgba(0, 0, 0, 0.10)",
            }}
            className="flex flex-col gap-2 rounded-[8px] border p-5"
          >
            <p className="font-Inter text-[16px] leading-[24px] font-medium text-[#545454]">
              Have a coupon?
            </p>
            <div
              style={{
                borderColor: "rgba(0, 0, 0, 0.2)",
              }}
              className="flex justify-between rounded-[8px] border"
            >
              <input className="py-[10px] ps-4 text-[16px] font-normal outline-none" />

              <button
                style={{
                  borderColor: "rgba(0, 0, 0, 0.2)",
                }}
                className="border-l px-5 text-[16px] leading-[22px] font-semibold text-[#E7448C] outline-none"
              >
                Apply
              </button>
            </div>
          </div>
          <CartPanel products={cartProducts as any} />
        </div>
      </div>
      {/* <FeatureCards /> */}
    </div>
  );
}
