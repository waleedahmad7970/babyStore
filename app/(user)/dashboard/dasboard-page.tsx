import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import OrderTable from "@/components/tables/order-table";
import React, { useState } from "react";

export default function DasboardPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        <div className="w-full">
          <div className="mb-6 flex w-full items-center justify-between">
            <p className="mb-0 text-[18px] leading-[25px] font-normal text-[#473A3F]">
              Account info
            </p>
            <Button
              text={"Edit"}
              className="rounded-[8px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
            />
          </div>
          <InputField
            value=""
            placeholder="Hamyd"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
          <InputField
            value=""
            placeholder="Kahn"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
          <InputField
            value=""
            placeholder="hamydkahn@gmail.com"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
          <InputField
            value=""
            placeholder="*********"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
        </div>
        <div className="w-full">
          <div className="mb-6 flex w-full items-center justify-between">
            <p className="mb-0 w-[170px] max-w-max text-[18px] leading-[25px] font-normal text-[#473A3F] md:w-[150px]">
              Account info
            </p>
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                text={"Default"}
                className="rounded-[8px] bg-[#FD71AF] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] underline md:px-6 md:py-2 md:text-[18px]"
              />
              <Button
                text={"Edit"}
                className="rounded-[8px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
              />
            </div>
          </div>
          <InputField
            value=""
            placeholder="Hamyd Kahn"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
          <InputField
            value=""
            placeholder="88-F State Life Housing Society"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
          <div className="flex items-center justify-between gap-2">
            <div className="w-full max-w-[40%]">
              <InputField
                value=""
                placeholder="Lahore"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />{" "}
            </div>
            <div className="w-full max-w-[40%]">
              <InputField
                value=""
                placeholder="Punjab"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />{" "}
            </div>
            <div className="w-full max-w-[20%]">
              <InputField
                value=""
                placeholder="PK"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />{" "}
            </div>
          </div>
          <InputField
            value=""
            placeholder="+92 324 9485627"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />{" "}
        </div>
      </div>
      <div className="w-full max-w-[1140px]">
        <div className="mb-6 flex w-full items-center justify-between">
          <p className="mb-0 min-w-[150px] text-[18px] leading-[25px] font-normal text-[#473A3F]">
            Recent orders
          </p>
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              text={"Show all"}
              className="rounded-[8px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
            />
            <Button
              text={"Remove"}
              className="rounded-[8px] bg-[#FF4545] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] underline md:px-6 md:py-2 md:text-[18px]"
            />
          </div>
        </div>
        <OrderTable />
      </div>
    </div>
  );
}
