import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import React from "react";

export default function AddressPage() {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
          <p className="mb-0 text-[18px] leading-[25px] font-normal text-[#473A3F]">
            Address - 1
          </p>
          <div className="flex items-center justify-end gap-2">
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
        <div className="flex items-center justify-between gap-2">
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
        </div>
        <InputField
          value=""
          placeholder="+92 324 9485627"
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
          placeholder="88-F State Life Housing Society"
          className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <InputField
          value=""
          placeholder="Address Line 2"
          className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
      </div>
      <div className="w-full">
        <div className="mb-6 flex w-full items-center justify-between">
          <p className="mb-0 text-[18px] leading-[25px] font-normal text-[#473A3F]">
            Address - 2
          </p>
          <Button
            text={"Edit"}
            className="rounded-[8px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <InputField
            value=""
            placeholder="John"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
          <InputField
            value=""
            placeholder="Wick"
            className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
          />
        </div>
        <InputField
          value=""
          placeholder="+1 322 57824747"
          className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <div className="flex items-center justify-between gap-2">
          <div className="w-full max-w-[40%]">
            <InputField
              value=""
              placeholder="New York"
              className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />{" "}
          </div>
          <div className="w-full max-w-[40%]">
            <InputField
              value=""
              placeholder="Missisippi"
              className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />{" "}
          </div>
          <div className="w-full max-w-[20%]">
            <InputField
              value=""
              placeholder="USA"
              className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />{" "}
          </div>
        </div>

        <InputField
          value=""
          placeholder="Address Line 1"
          className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <InputField
          value=""
          placeholder="Address Line 2"
          className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
      </div>
    </div>
  );
}
