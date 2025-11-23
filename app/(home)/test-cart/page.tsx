"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trash2, Edit, Plus, Minus } from "lucide-react";
import { specialItems6 } from "@/public/assets/support";
import { paymentMethods } from "@/static/static";

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
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cus-container mx-auto py-10 font-poppins">
      <h1 className="text-[28px] md:text-4xl font-normal text-gray-400 font-poppins mt-10 md:mt-0 mb-0 md:mb-10">Manage Your Cart</h1>
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 font-semibold text-gray-600 mb-4 border-[#E7448C] border-b-2 pb-2">
        <div className="col-span-5">PRODUCT</div>
        <div className="col-span-2">PRICE</div>
        <div className="col-span-2">QUANTITY</div>
        <div className="col-span-3 text-right">TOTAL</div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-gray-400 font-poppins"
        >
          {/* Product */}
          <div className="flex items-center col-span-5 gap-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={specialItems6}
                alt={item.title}
                width={200}
                height={200}
                className="object-cover w-full h-full aspect-square"
              />
            </div>

            <div>
              <div className="font-medium text-gray-800 leading-tight">
                {item.title}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Select Size: {item.size}
              </div>

              <div className="flex gap-3 mt-3">
           
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
          <div className="col-span-2 text-[#99A1AF] font-medium">
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
            <span className="font-medium text-[#99A1AF] text-[16px]">{item.quantity}</span>
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

      {/* Notes & Coupon */}
      <div className="flex justify-between gap-10 md:gap-20 flex-col md:flex-row ">
      <div className="mt-6 flex flex-col gap-3 font-poppins w-full">
        <div className="flex-1 w-full">
          <label className="block text-[#99A1AF] mb-1">Add Order Note</label>
          <textarea
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
            placeholder="How can we help you?"
            className="w-full border-b border-gray-400 min-h-[200px]  p-3 resize-none"
          />
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[#99A1AF] mb-1">Coupon</label>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon code"
            className="w-full border-b border-gray-400  p-3"
          />
          <p className="text-gray-500 text-sm mt-1">
            Coupon code will work on checkout page
          </p>
        </div>
      </div>

      {/* Subtotal & Checkout */}
      <div className="mt-8 flex flex-col justify-between  gap-4 font-poppins">
        <div className="text-lg font-semibold">
          SUBTOTAL: Rs.{subtotal}
          <p className="text-sm text-gray-500">
            Taxes and shipping calculated at checkout
          </p>
        </div>
        <button className="mb-[24px] bg-[#E7448C] cursor-pointer text-white px-10 py-3 rounded-full hover:bg-[#121212] transition duration-300">
          Check Out
        </button>

       
      </div>
      </div>
      <div
        className="flex flex-col gap-2 mt-10 md:mt-20"
      >
        <p className="font-Inter text-[16px] leading-[24px] font-normal text-[#99A1AF]">
          We accept:{" "}
        </p>
        <div className="flex items-center justify-between">
          {paymentMethods.map((method: any, index: number) => (
            <Image key={index} src={method.img} alt={"paymet-cards"} className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
