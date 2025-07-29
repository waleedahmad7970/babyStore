"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import BlogSlider from "@/components/slider/blogs.slider";
import FreeShipping from "@/components/banners/freeShipping";
import ReviewSlider from "@/components/slider/reviews.slider";
import CategoryList from "@/components/category/category-list";
import productServices from "@/services/product.service";
import DeliveryService from "@/components/features/delivery-services";
import SubscribeSection from "@/components/features/subscribtion-section";
import StoreInfoSection from "@/components/features/store-info-section";

import { NotFound404 } from "@/public/assets/others";
import { blogs, reviews } from "@/static/static";
import { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    productServices.getCategories();
  }, []);

  return (
    <Fragment>
      <FreeShipping />
      <Navbar />
      <CategoryList />
      <div className="mx-auto flex h-screen max-w-[581px] flex-col items-center justify-center bg-white text-center">
        <Image priority src={NotFound404} alt="404" />
        <p className="mb-4 text-center text-[24px] leading-[130%] font-bold text-[#434343] md:text-[50px]">
          Something went wrong
        </p>
        <p className="mb-10 text-center text-[16px] leading-[170%] font-normal text-[#434343] md:text-[24px]">
          This page doesn’t exist or was removed! we suggest you back to home.
        </p>
        <button
          onClick={() => router.push("/")}
          style={{
            background: "linear-gradient(180deg, #FE9132 0%, #FE9132 100%)",
            boxShadow: "0px -3px 0px 0px rgba(0, 0, 0, 0.10) inset",
          }}
          className="mx-auto w-full max-w-[225px] cursor-pointer rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] bg-[#4F4F4F] px-10 py-[11px] text-[12px] leading-[16px] font-bold text-white md:my-0 md:max-w-[424px] md:py-[22px] md:text-[22.268px]"
        >
          Go Home
        </button>
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
