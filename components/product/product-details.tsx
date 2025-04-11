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

export default function ProductDetails({ product = productData }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="cus-container mx-auto mt-3 rounded-lg md:mt-10">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="relative w-full lg:max-w-[839px]">
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
          <div className="h-[375px] overflow-hidden rounded-[10px] border border-[#00000033] md:h-[839px] lg:max-w-[839px]">
            <Image
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 hidden space-x-2 md:flex">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`h-[124px] w-[124px] cursor-pointer overflow-hidden rounded-lg object-cover ${
                  selectedImage === img ? "border-primaryColor border-2" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full md:max-w-[469px]">
          <h1 className="font-inter tracking-0 text-[14px] leading-[16.94px] font-normal text-[#1F1F1F] md:text-[20px] md:leading-[24px]">
            {product.name}
          </h1>
          <p className="font-inter text-[11px] leading-[13px] font-semibold text-[#858585]">
            View all{" "}
            <span className="font-inter mr-[2px] text-[11px] font-semibold text-[#6A94FF] underline">
              {" "}
              {product.brand}{" "}
            </span>
            products.
          </p>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <span className="text-[22px] leading-[24px] font-semibold tracking-[-0.66px] text-[#1F1F1F]">
                AED {product.price}
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
          <Accordion items={accordionItems} />
        </div>
      </div>
      <ProductSwiperSlider products={productsLIST1} />
      <ProductSwiperSlider products={productsLIST1} />
    </div>
  );
}
