"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trash2, Edit, Plus, Minus } from "lucide-react";
import { specialItems6 } from "@/public/assets/support";
import { paymentMethods } from "@/static/static";
import FreeShippingBar from "@/components/features/free-shipping-bar";

interface CartItem {
  id: number;
  image: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    image: "/assets/products/product1.png",
    title: "Kids Printed Fleece Tracksuit Adventures Maroon - Mini Charm",
    size: "1-2 Years",
    price: 1795,
    quantity: 1,
  },
  {
    id: 2,
    image: "/assets/products/product2.png",
    title: "Kids Printed Fleece Tracksuit Butterfly Blue - Mini Charm",
    size: "1-2 Years",
    price: 1795,
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [orderNote, setOrderNote] = useState("");
  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cus-container font-poppins mx-auto py-10">
      <h1 className="font-poppins my-10 text-[22px] font-normal text-gray-400 md:mt-0 md:mb-10 md:text-4xl md:text-[28px]">
        <span className="bg-[#E7448A] px-3 py-1 text-white">Manage</span>
        <span className="bg-[#FFF0F5] px-3 py-1 text-[#E7448A]">
          {" "}
          Your Cart
        </span>
      </h1>
      <div className="w-full pb-10 md:max-w-[500px]">
        <FreeShippingBar total={50} />
      </div>

      {/* Table Header */}
      <div className="mb-4 hidden grid-cols-12 gap-4 border-b-2 border-[#E7448C] pb-2 font-semibold text-gray-600 md:grid">
        <div className="col-span-5">PRODUCT</div>
        <div className="col-span-2">PRICE</div>
        <div className="col-span-2">QUANTITY</div>
        <div className="col-span-3 text-right">TOTAL</div>
      </div>

      {/* Cart Items */}
      {cartItems?.length ? (
        <>
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="font-poppins grid grid-cols-1 items-center gap-4 border-b border-gray-400 py-4 md:grid-cols-12"
            >
              {/* Product */}
              <div className="col-span-5 flex items-center gap-4">
                <div className="h-24 w-24 overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={specialItems6}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div>
                  <div className="leading-tight font-medium text-gray-800">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Select Size: {item.size}
                  </div>

                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Trash2 color="#99A1AF" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 font-medium text-[#99A1AF]">
                AED.{item.price}
              </div>

              {/* Quantity */}
              <div className="col-span-2 flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className=""
                >
                  <Minus color="#E7448C" size={20} />
                </button>
                <span className="text-[16px] font-medium text-[#99A1AF]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className=""
                >
                  <Plus color="#E7448C" size={20} />
                </button>
              </div>

              {/* Total */}
              <div className="col-span-3 text-right font-semibold text-gray-800">
                Rs.{item.price * item.quantity}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="font-poppins py-20 text-center text-[35px] font-normal text-gray-400 capitalize md:py-30 md:text-[40px]">
          Your cart is empty
        </div>
      )}

      {/* Notes & Coupon */}
      <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-20">
        <div className="font-poppins mt-6 flex w-full flex-col gap-3">
          <div className="w-full flex-1">
            <label className="mb-1 block text-[#E7448A]">Add Order Note</label>
            <textarea
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              placeholder="How can we help you?"
              className="min-h-[200px] w-full resize-none border-b border-gray-400 bg-[#FFF0F5] p-3 focus:outline-none"
            />
          </div>

          <div className="w-full flex-1">
            <label className="mb-1 block text-[#E7448A]">Coupon</label>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              className="w-full border-b border-gray-400 bg-[#FFF0F5] p-3 focus:outline-none"
            />
            <p className="mt-1 text-sm text-gray-500">
              Coupon code will work on checkout page
            </p>
          </div>
        </div>

        {/* Subtotal & Checkout */}
        <div className="font-poppins mt-8 flex flex-col justify-between gap-4">
          <div className="text-lg font-semibold">
            SUBTOTAL: Rs.{subtotal}
            <p className="text-sm text-gray-500">
              Taxes and shipping calculated at checkout
            </p>
          </div>
          <button className="mb-[24px] cursor-pointer rounded-full bg-[#E7448C] px-10 py-3 text-white transition duration-300 hover:bg-[#121212]">
            Check Out
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 md:mt-20">
        <p className="font-Inter text-[16px] leading-[24px] font-normal text-[#E7448A]">
          We accept:{" "}
        </p>
        <div className="mb-10 flex items-center justify-between md:mb-1">
          {paymentMethods.map((method: any, index: number) => (
            <Image
              key={index}
              src={method.img}
              alt={"paymet-cards"}
              className="h-[50px] w-[50px] md:h-[80px] md:w-[80px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
