"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";

import Button from "../button/button";
import Accordion from "../Accordian/accordian";
import SizeSelector from "../button/size-select-btn";
import DeliveryServiceCard from "../cards/delivery-services";

import { productData, productsLIST1 } from "../../static/static";
import { accordionItems } from "../../static/static-elements";

import {
  TabbyCard,
  DiscountCard,
  CashbackCard,
  DeliveryCard,
  PriceMatchCard,
} from "../cards/card-info-components";
import { seperator } from "@/public/assets/icons";
import ProductSwiperSlider from "../slider/product.swiper";
import ProductPagingSlider from "../slider/product-pagging-slider";
import Link from "next/link";
import ReviewSection from "../reviews/product-reviews";
import { useAppSelector } from "@/store/hooks";

export default function ProductDetails({ product = productData }) {
  const [quantity, setQuantity] = useState(1);
  const { productDetails = {}, relatedProducts = [] } =
    useAppSelector((state) => state.product) || {};
  const {
    brand_name,
    category_id,
    cost_price,
    description,
    features,
    gallery,
    google_product_category,
    google_product_type,
    hover_image,
    image,
    is_kwik,
    min_quantity,
    name,
    office_stock,
    no_of_sales,
    price,
    promo_cost_price,
    reviews,
    short_description,
    slug,
  } = productDetails || ({} as any);

  const sliderImages = gallery && JSON.parse(gallery);
  const productFeature = features && JSON.parse(features);
  return (
    <div className="cus-container mx-auto mt-3 rounded-lg md:mt-10">
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <div className="relative mx-auto w-full md:max-w-[839px]">
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-5 md:top-7 md:right-[33px] md:gap-2">
            {product.shareProduct.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="img"
                className="h-6 w-6 md:h-10 md:w-10"
              />
            ))}
          </div>
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 md:top-7 md:left-[28px] md:gap-[6px]">
            <div className="rounded-[50px] bg-[#FFEEF6] px-2 py-[5px] md:px-4 md:py-[10px]">
              <p className="mb-0 text-[10.471px] leading-none font-medium text-[#1F1F1F] uppercase md:text-[16.795px]">
                Coupon:
                <span className="ml-1 text-[10.471px] leading-none font-bold uppercase md:text-[16.795px]">
                  NEW15
                </span>
              </p>
            </div>
            <div className="mb-0 max-w-max rounded-[50px] bg-[#FFEEF6] px-2 py-[5px] text-[10.471px] leading-none font-bold text-[#00AE42] md:px-4 md:py-[10px] md:text-[16.795px]">
              25% Off
            </div>
          </div>

          <ProductPagingSlider sliderImages={sliderImages} />
        </div>
        <div className="mx-auto w-full md:max-w-[469px]">
          <h1 className="font-inter tracking-0 text-[14px] leading-[16.94px] font-normal text-[#1F1F1F] md:text-[20px] md:leading-[24px]">
            {name || product.name}
          </h1>
          <p className="font-inter flex gap-[2px] text-[11px] leading-[13px] font-semibold text-[#858585]">
            View all{" "}
            <Link
              href={`/brand`}
              className="block max-w-max text-inherit no-underline"
            >
              <span className="font-inter mr-[2px] text-[11px] font-semibold text-[#6A94FF] underline">
                {" "}
                {brand_name || product.brand}{" "}
              </span>
            </Link>
            products.
          </p>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <span className="text-[22px] leading-[24px] font-semibold tracking-[-0.66px] text-[#1F1F1F]">
                AED {price?.toFixed(2) || product.price}
              </span>

              {/* <span className="rounded-md bg-green-100 px-2 py-1 text-xs text-green-600">
                {product.discount}
              </span> */}
              <span className="text-[14px] leading-[24px] font-semibold text-[#929391] line-through">
                {199}
              </span>
            </div>
            <div className="flex items-center">
              {product.ratings.map((ratings, index) => (
                <Image key={index} src={ratings.icon} alt={ratings.icon} />
              ))}
              <span className="ml-[2px] text-[12px] leading-[14.88px] font-normal text-[#5D5E5C]">
                {product.reviews}
              </span>
            </div>
          </div>
          <div className="space-y-3 md:max-w-[470px]">
            <DiscountCard />
            <TabbyCard />
            <PriceMatchCard />
            <DeliveryCard />
            <CashbackCard />
          </div>
          {/* size */}
          <div className="py-3">
            <div className="flex items-center justify-start gap-[10px] pb-3">
              <p className="text-[14px] leading-[14.88px] font-medium text-[#1F1F1F]">
                Size{" "}
              </p>
              <p className="text-[10px] leading-[14.88px] font-medium text-[#54A3FA] underline">
                Size Guide
              </p>
            </div>
            <SizeSelector />
          </div>
          {/* interactions buttons */}
          <div className="flex justify-between gap-1">
            <button
              style={{
                background: "linear-gradient(180deg, #FE9132 0%, #FE9132 100%)",
                boxShadow: "0px -3px 0px 0px rgba(0, 0, 0, 0.10) inset",
              }}
              className="w-full rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] bg-[#4F4F4F] px-10 py-4 text-[16px] leading-[16px] font-medium text-white md:my-0"
            >
              Add to Basket{" "}
            </button>
            <Button
              handler={() => setQuantity((q) => Math.max(1, q - 1))}
              text="-"
              className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
            />
            <Button
              text={quantity}
              className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
            />
            <Button
              handler={() => setQuantity((q) => Math.max(1, q + 1))}
              text="+"
              className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
            />
          </div>
          {/* cart and qunaity buttons for mobile view make fix or sticky */}
          <div className="fixed right-0 bottom-[60px] left-0 z-50 block border-t border-gray-100 bg-white sm:hidden">
            <div className="flex justify-between gap-1 px-[10px] py-2">
              <button
                style={{
                  background:
                    "linear-gradient(180deg, #FE9132 0%, #FE9132 100%)",
                  boxShadow: "0px -3px 0px 0px rgba(0, 0, 0, 0.10) inset",
                }}
                className="w-full rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] bg-[#4F4F4F] px-10 py-4 text-[16px] leading-[16px] font-medium text-white md:my-0"
              >
                Add to Basket{" "}
              </button>
              <Button
                handler={() => setQuantity((q) => Math.max(1, q - 1))}
                text="-"
                className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
              />
              <Button
                text={quantity}
                className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
              />
              <Button
                handler={() => setQuantity((q) => Math.max(1, q + 1))}
                text="+"
                className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
              />
            </div>
          </div>

          <button
            style={{
              background: "linear-gradient(180deg, #4F4F4F 0%, #323232 100%)",
            }}
            className="mt-1 mb-4 w-full rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] border-[#171717] bg-[#4F4F4F] px-10 py-4 text-[16px] leading-[16px] font-medium text-white md:my-2"
          >
            Buy Now
          </button>
          {/* delivery serv */}
          <div className="mb-3 flex items-center justify-around bg-white md:mb-0 md:pt-[10px] md:pb-[18px]">
            {product.deliveryService.map((feature, index) => (
              <Fragment key={feature.id}>
                <DeliveryServiceCard
                  icon={feature.icon}
                  title={feature.title}
                />
                {index !== product.deliveryService.length - 1 && (
                  <Image src={seperator} alt="sep" className="mx-2" />
                )}
              </Fragment>
            ))}
          </div>
          {/* accordian */}
          <Accordion items={accordionItems} description={description} />
        </div>
      </div>
      <ReviewSection reviews={reviews} />
      <ProductSwiperSlider products={relatedProducts} />
      <ProductSwiperSlider products={relatedProducts} />
    </div>
  );
}
