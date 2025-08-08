"use client";

import { aedIcon, cross } from "@/public/assets/icons";
import Image from "next/image";
import { useMemo, useState } from "react";
import { QuantityControl } from "./quanity-controller";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartAction } from "@/store/slices/cart.slice";
import { useRouter } from "next/navigation";
import Button from "../button/button";

// Original product type (no quantity expected)
interface Product {
  id: number;
  name?: string;
  price: number;
  title: string;
  image: string;
  isAddedToCart?: boolean;
  quantity?: number;
}
interface AppliedCoupon {
  discount?: number | string;
}

export default function CartPanel() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartProducts = [] } = useAppSelector((state) => state.cart);
  const { appliedCoupon = {} } = useAppSelector((state) => state.user);

  const { subtotal, discountAmount, tax, total } = useMemo(() => {
    const subtotal = cartProducts
      ?.filter((item: any) => item.isCheckoutProduct)
      ?.reduce(
        (acc, item) => acc + (item?.price ?? 0) * (item?.quantity ?? 1),
        0,
      );

    const discountPercentage =
      Number((appliedCoupon as AppliedCoupon)?.discount) || 0;

    const discountAmount = (subtotal * discountPercentage) / 100;
    const discountedSubtotal = subtotal - discountAmount;

    const tax = discountedSubtotal * 0.015;
    const total = discountedSubtotal + tax;

    return { subtotal, discountAmount, tax, total };
  }, [cartProducts, appliedCoupon]);

  return (
    <div className="flex flex-col gap-[10px] rounded-[7.6px] bg-white px-[5.4px] py-[5.4px]">
      <div className="flex max-h-[400px] flex-col gap-[10px] overflow-y-auto">
        {cartProducts
          ?.filter((item) => item.isCheckoutProduct)
          ?.map((item, index) => (
            <div
              key={index}
              className="relative flex h-[115px] justify-between gap-2 rounded-[7.6px] bg-[#FAFAFA] px-[5.4px] py-[5.4px] md:justify-start"
            >
              <Image
                alt="remove item"
                src={cross}
                onClick={() =>
                  dispatch(cartAction.removeCartItem(Number(item.id)))
                }
                className="absolute top-[5px] right-[5px] cursor-pointer"
              />
              <Image
                src={`https://www.babystore.ae/storage/${item?.image}`}
                alt="cart item"
                height={104}
                width={104}
                className="min-w-[104px] rounded-[5.67px] object-contain"
              />
              <div className="flex h-full w-full flex-col justify-between">
                <p className="line-clamp-2 w-[95%] text-[13px] leading-[17.2px] font-medium text-[#1F1F1F]">
                  {item?.name || item?.title}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <Image
                      src={aedIcon}
                      className="h-[12px] w-[12px]"
                      alt="curr"
                    />
                    <p className="text-[14.882px] font-semibold text-[#1F1F1F]">
                      {item?.price?.toFixed(2)}
                    </p>
                  </div>
                  <QuantityControl
                    className="gap-4"
                    quantity={item?.quantity || 1}
                    onIncrease={() =>
                      dispatch(cartAction.incrementQuantity(item?.id))
                    }
                    onDecrease={() =>
                      dispatch(cartAction.decrementQuantity(item?.id))
                    }
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-[1px] bg-[#F7F7F7]" />

      <div className="flex flex-col gap-[4.5px]">
        <div className="flex justify-between">
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            Sub Total:
          </span>
          <span className="flex items-center justify-between gap-1 text-[13.05px] font-normal text-[#A0A0A0]">
            <Image src={aedIcon} className="h-[12px] w-[12px]" alt="curr" />{" "}
            {subtotal?.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            Tax:
          </span>
          <span className="flex items-center justify-between gap-1 text-[13.05px] font-normal text-[#A0A0A0]">
            <Image src={aedIcon} className="h-[12px] w-[12px]" alt="curr" />{" "}
            {tax?.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            Discount:
          </span>
          <span className="gap1 flex items-center justify-between text-[13.05px] font-normal text-[#A0A0A0]">
            <Image src={aedIcon} className="h-[12px] w-[12px]" alt="curr" />{" "}
            {discountAmount?.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-[17.4px] font-semibold text-[#636363]">
          <span>Total:</span>
          <span className="flex items-center justify-between">
            <Image src={aedIcon} className="h-[16px] w-[16px]" alt="curr" />{" "}
            {total?.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <Button
          type={"button"}
          text={"View Cart"}
          handler={() => router.push("/cart")}
          className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#61B582] py-3 text-[15.225px] font-semibold text-white transition hover:bg-[#61B582]/80"
        />
        <Button
          type={"button"}
          text={"Checkout"}
          handler={() => router.push("/checkout")}
          className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#61B582] py-3 text-[15.225px] font-semibold text-white transition hover:bg-[#61B582]/80"
        />
      </div>
    </div>
  );
}
