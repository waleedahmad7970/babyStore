"use client";
import { useState } from "react";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { detail_image_1 } from "@/public/assets/products";
import { CartItemMob } from "@/components/cart/cart-item-mob";

const initialProducts = [
  {
    id: 1,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    price: 155,
    quantity: 1,
    image: detail_image_1,
  },
  {
    id: 2,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    price: 155,
    quantity: 1,
    image: detail_image_1,
  },
  {
    id: 3,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    price: 155,
    quantity: 1,
    image: detail_image_1,
  },
  {
    id: 4,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    price: 155,
    quantity: 1,
    image: detail_image_1,
  },
];

export default function Page() {
  const [cart, setCart] = useState(initialProducts);

  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-auto w-full max-w-[1360px]">
      <div className="px-[10px] py-10">
        <h1 className="text-[40px] font-semibold text-[#000]"> My Cart</h1>
        <div className="flex flex-col justify-start gap-4 py-6 md:flex-row md:items-center">
          <div className="rounded-[40px] bg-[#F6D3A2] px-5 py-[10px] text-[16px] font-medium text-[#E77027] md:rounded-[24px]">
            Shop for AED 12.20 more to avail{" "}
            <span className="font-bold"> FREE SHIPPING.</span>
          </div>
          <div className="max-w-max rounded-[50px] border-none bg-[#61B482] px-5 py-[10px] text-[16px] font-semibold text-white uppercase">
            Shop More{" "}
          </div>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(0, 0, 0, 0.10)",
              color: "rgba(0, 0, 0, 0.20)",
            }}
            className="hidden rounded-[50px] border-1 px-5 py-[10px] text-[16px] font-bold md:block"
          >
            Remove Selected{" "}
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 rounded-[6px] border-1 border-[#E0E0E0] p-[10px] md:p-6">
            <div className="flex items-center justify-start gap-6 md:hidden">
              <div className="h-6 min-w-6 rounded-[3px] border border-[#E0E0E0] bg-white"></div>

              <div
                style={{
                  background: "rgba(0, 0, 0, 0.04)",
                  borderColor: "rgba(0, 0, 0, 0.10)",
                  color: "rgba(0, 0, 0, 0.20)",
                }}
                className="rounded-[50px] border-1 px-5 py-[10px] text-[16px] font-bold"
              >
                Remove Selected{" "}
              </div>
            </div>
            <div className="hidden items-center justify-between md:flex">
              <p className="font-Inter w-full max-w-[354px] text-center text-[16px] font-semibold text-[#000]">
                Product
              </p>
              <p className="font-Inter w-full max-w-[103px] text-center text-[16px] font-semibold text-[#000]">
                Unit Price
              </p>
              <p className="font-Inter w-full max-w-[112px] text-center text-[16px] font-semibold text-[#000]">
                Quantity
              </p>
              <p className="font-Inter w-full max-w-[112px] text-center text-[16px] font-semibold text-[#000]">
                Subtotal
              </p>
              <p className="font-Inter w-full max-w-[102px] text-center text-[16px] font-semibold text-[#000]">
                Remove
              </p>
            </div>
            <div className="hidden md:block">
              {cart.map((product, index) => (
                <div key={index} className="">
                  <CartItem
                    key={product.id}
                    product={product}
                    onRemove={() => removeItem(product.id)}
                    onQuantityChange={(qty) => updateQuantity(product.id, qty)}
                  />
                  <div className="my-4 h-[1px] w-full bg-[#D9D9D9]" />
                </div>
              ))}
            </div>
            <div className="block md:hidden">
              {cart.map((product, index) => (
                <div key={index} className="">
                  <CartItemMob
                    key={product.id}
                    product={product}
                    onRemove={() => removeItem(product.id)}
                    onQuantityChange={(qty) => updateQuantity(product.id, qty)}
                  />
                  <div className="my-4 h-[1px] w-full bg-[#D9D9D9]" />
                </div>
              ))}
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
