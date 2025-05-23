"use client";

import {
  checkout_1,
  checkout_2,
  checkout_3,
  cross,
} from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { QuantityControl } from "./quanity-controller";

// Original product type (no quantity expected)
interface Product {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  title: string;
}

// Cart item with quantity added
interface CartItem extends Product {
  quantity: number;
}

interface CartPanelProps {
  products: Product[];
}

export default function CartPanel({ products }: CartPanelProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    products?.map((item) => ({
      ...item,
      quantity: 1, // Default quantity
    })),
  );

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const tax = 30;
  const total = subtotal + tax;

  return (
    <div className="flex flex-col gap-[10px] rounded-[7.6px] bg-white px-[5.4px] py-[5.4px]">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="relative flex h-[115px] justify-between gap-2 rounded-[7.6px] bg-[#FAFAFA] px-[5.4px] py-[5.4px] md:justify-start"
        >
          <Image
            alt="remove item"
            src={cross}
            onClick={() => removeItem(item.id)}
            className="absolute top-[5px] right-[5px] cursor-pointer"
          />
          <Image
            src={item.image}
            alt="cart item"
            height={104}
            width={104}
            className="min-w-[104px] rounded-[5.67px] object-contain"
          />
          <div className="flex h-full w-full flex-col justify-between">
            <p className="line-clamp-2 w-[95%] text-[13px] leading-[17.2px] font-medium text-[#1F1F1F]">
              {item.name || item.title}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[9.673px] font-light text-[#1F1F1F]">AED</p>
                <p className="text-[14.882px] font-semibold text-[#1F1F1F]">
                  {item.price.toFixed(2)}
                </p>
              </div>
              <QuantityControl
                className="gap-4"
                quantity={item.quantity}
                onIncrease={() => updateQuantity(item.id, 1)}
                onDecrease={() => updateQuantity(item.id, -1)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="h-[1px] bg-[#F7F7F7]" />

      <div className="flex flex-col gap-[4.5px]">
        <div className="flex justify-between">
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            Sub Total:
          </span>
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            <span className="text-[8.7px]">AED</span> {subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            Tax:
          </span>
          <span className="text-[13.05px] font-normal text-[#A0A0A0]">
            <span className="text-[8.7px]">AED</span> {tax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-[17.4px] font-semibold text-[#636363]">
          <span>Total:</span>
          <span>
            <span className="mr-[-2px] text-[10.875px]">AED</span>{" "}
            {total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <button className="mt-3 w-full rounded-[5.3px] bg-[#61B582] py-3 text-[15.225px] font-semibold text-white transition hover:bg-green-700">
        Place Order
      </button>
    </div>
  );
}
