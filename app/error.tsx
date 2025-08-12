"use client";

import Image from "next/image";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import BlogSlider from "@/components/slider/blogs.slider";
import FreeShipping from "@/components/banners/freeShipping";
import ReviewSlider from "@/components/slider/reviews.slider";

import DeliveryService from "@/components/features/delivery-services";
import SubscribeSection from "@/components/features/subscribtion-section";
import StoreInfoSection from "@/components/features/store-info-section";

import { NotFounderror } from "@/public/assets/others";
import { reviews } from "@/static/static";
import { Fragment, useEffect } from "react";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <Fragment>
      <FreeShipping />
      <Navbar />
      <div className="mx-auto flex h-screen max-w-[581px] flex-col items-center justify-center bg-white text-center">
        <Image priority src={NotFounderror} alt="404" />
        <p className="mb-4 text-center text-[24px] leading-[130%] font-bold text-[#434343] md:text-[50px]">
          Something went wrong
        </p>
        <p className="mb-10 text-center text-[16px] leading-[170%] font-normal text-[#434343] md:text-[24px]">
          Please try refreshing the page or go back home.{" "}
        </p>
        <p className="mb-10 text-center text-[12px] leading-[170%] font-normal text-[#E7448C] md:text-[16px]">
          {error?.message || "Error"}
        </p>
        <Button
          text={"Go Home"}
          handler={() => router.push("/")}
          className="text w-full cursor-pointer rounded-[50px] border-1 border-[#E7448C] bg-[#FFF0F5] px-5 py-[10px] text-[16px] font-bold text-[#E7448C]/50 uppercase hover:border-white hover:bg-[#E7448C] hover:text-white sm:max-w-max"
        />
        <Button
          text={"Refresh Page"}
          handler={() => reset()}
          className="text mt-3 w-full cursor-pointer rounded-[50px] border-1 border-[#fff] bg-[#E7448C] px-5 py-[10px] text-[16px] font-bold text-[#fff] uppercase hover:border-white hover:bg-[#E7448C] hover:text-white sm:max-w-max"
        />
      </div>
      <ReviewSlider reviews={reviews} />
      <BlogSlider />
      <StoreInfoSection />
      <SubscribeSection />
      <DeliveryService />
      <Footer />
    </Fragment>
  );
}
