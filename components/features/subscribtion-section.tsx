import React from "react";
import Image from "next/image";
import { slider_right_arrow } from "../../public/assets/icons";
import { app_store, google_play } from "../../public/assets/app";

export default function SubscribeSection() {
  return (
    <div className="cus-container mx-auto flex flex-col justify-between py-[10px] md:py-10 lg:flex-row">
      <div className="my-5 flex justify-between gap-10 bg-[#FFF5FA] py-5 pr-[10px] pl-4 sm:hidden md:mx-4 md:my-0">
        <p className="font-inter text-dark mb-0 text-[16px] leading-[19.36px] font-semibold">
          Baby Store – New Mom & Baby Products online in UAE
        </p>
        <div className="flex h-10 min-w-10 items-center justify-center rounded-[8px] bg-[#F470AB]">
          <Image src={slider_right_arrow} className="rotate-90" alt="arrow" />
        </div>
      </div>

      <div className="mt-[10px] mb-[30px] w-full text-black md:px-0 lg:mt-0 lg:mb-0 lg:w-1/2">
        <h2 className="font-inter text-dark text-[20px] leading-[24px] font-semibold md:text-[24px] md:leading-[29.05px]">
          Subscribe to our awesome emails.
        </h2>
        <p className="font-inter text-dark text-[13px] leading-[15.73px] font-normal md:text-[20px] md:leading-[24px]">
          Get our latest offers & news straight in your inbox.
        </p>

        <div className="mt-10 flex w-full items-center overflow-hidden rounded-[8px] bg-[#F7F8F7] p-[10px] lg:max-w-[637px]">
          <input
            type="email"
            placeholder="Please Enter Your Email Address"
            className="w-full bg-transparent px-4 py-2 text-[16px] font-normal text-[#1A1718] outline-none md:py-3"
          />
          <button className="font-inter h-[40px] min-w-[120px] rounded-[6px] bg-[#F470AB] text-[16px] leading-[19.5px] font-bold text-white md:h-[69px] md:min-w-[200px] md:text-[24px] md:leading-[29.5px]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-0 mb-[30px] md:mt-4 md:px-4 lg:mb-0">
        <h2 className="font-inter text-dark text-[20px] leading-[24.05px] font-semibold md:text-[24px] md:leading-[29.05px]">
          Download our apps
        </h2>
        <p className="font-inter text-dark text-[13px] leading-[15.73px] font-normal md:text-[20px] md:leading-[24px]">
          Shop our products & offers on-the-go
        </p>

        <div className="mt-2 flex w-full justify-between gap-1 md:mt-10">
          <Image
            src={app_store}
            alt="App Store"
            className="h-[67px] w-full max-w-[170px] cursor-pointer md:max-w-[234px]"
          />
          <Image
            src={google_play}
            alt="Google Play"
            className="h-[67px] w-full max-w-[170px] cursor-pointer md:max-w-[234px]"
          />
        </div>
      </div>
    </div>
  );
}
