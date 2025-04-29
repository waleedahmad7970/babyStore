"use client";
import {
  checkout_1,
  checkout_2,
  checkout_3,
  cross,
  minus,
  plus,
} from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string | StaticImageData;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Lindale Outdoor Wooden Swing And Slide Playset...",
    price: 20081.25,
    quantity: 3,
    image: checkout_1,
  },
  {
    id: 2,
    name: "Fox 2 Complete Black/Black...",
    price: 4287.94,
    quantity: 1,
    image: checkout_2,
  },
  {
    id: 3,
    name: "Evenflo-EveryStage LX All-In-One Car Seat...",
    price: 1420.25,
    quantity: 7,
    image: checkout_3,
  },
];

export default function CartPanel() {
  const [cartItems, setCartItems] = useState(initialCart);

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

  const tax = 30; // Fixed tax as per image
  const total = subtotal + tax;

  return (
    <div className="flex flex-col gap-[10px] rounded-[7.6px] bg-white px-[5.4px] py-[5.4px]">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="relative flex h-[115px] justify-between gap-2 rounded-[7.6px] bg-[#FAFAFA] px-[5.4px] py-[5.4px] md:justify-start"
        >
          <Image
            alt="cros"
            src={cross}
            onClick={() => removeItem(item.id)}
            className="absolute top-[5px] right-[5px]"
          />
          <Image
            src={item?.image}
            alt={"cart-item"}
            height={104}
            width={104}
            className="min-w-[104px] rounded-[5.67px] object-contain"
          />
          <div className="flex h-full flex-col justify-between pr-5 md:pr-0">
            <p className="w[97%] line-clamp-2 text-[13px] leading-[17.2px] font-medium text-[#1F1F1F] md:w-[195px]">
              {item.name}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[9.673px] leading-[9.673px] font-light text-[#1F1F1F]">
                  AED
                </p>
                <p className="text-[14.882px] leading-[12.649px] font-semibold text-[#1F1F1F]">
                  {item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center rounded-[5.329px] border-[1.2px] border-[#E7448C] px-[10px] py-[5px]">
                <Image
                  src={minus}
                  alt="min"
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-[10px]"
                />

                <span className="mx-[14px] text-[15.225px] leading-[19.031px] font-semibold text-[#201C1C]">
                  {item.quantity}
                </span>
                <Image
                  src={plus}
                  alt="min"
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="h-[1px] bg-[#F7F7F7]" />

      <div className="flex flex-col gap-[4.5px]">
        <div className="flex justify-between">
          <span className="text-[13.05px] leading-[17.137px] font-normal text-[#A0A0A0]">
            Sub Total:
          </span>
          <span className="text-[13.05px] leading-[17.137px] font-normal text-[#A0A0A0]">
            <span className="text-[8.7px]">AED</span> {subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[13.05px] leading-[17.137px] font-normal text-[#A0A0A0]">
            Tax:
          </span>
          <span className="text-[13.05px] leading-[17.137px] font-normal text-[#A0A0A0]">
            <span className="text-[8.7px]">AED</span> {tax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-[17.4px] leading-[17.137px] font-semibold text-[#636363]">
          <span>Total:</span>
          <span className="">
            <span className="mr-[-2px] text-[10.875px]">AED</span>{" "}
            {total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <button className="mt-3 w-full rounded-[5.3px] bg-[#61B582] py-3 text-[15.225px] leading-[19.031px] font-semibold text-white transition hover:bg-green-700">
        Place Order
      </button>
    </div>
  );
}
