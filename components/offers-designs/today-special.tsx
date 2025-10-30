
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {

  todaySale3,
  todaySale4,
} from "@/public/assets/support";

const products = [
  {
    id: 1,
    title: "Pink Bear Plush Toy & Soft Long Bolster For Kid’s And Adult",
    store: "Memini Store",
    image: todaySale3,
    price: 79,
    oldPrice: null,
    rating: 5,
    reviewCount: 1,
  },
  {
    id: 2,
    title: "Memory Lion & Lioness - The Heart Warming Keepsakes",
    store: "Lion & Lioness",
    image: todaySale4,
    price: 79,
    oldPrice: 99,
    rating: 4,
    reviewCount: 1,
    badge: "-20% Sale",
  },
  {
    id: 3,
    title: "Sunny Cuddles And Huggable Of The Biggest Teddy Bears",
    store: "Biggest Teddy",
    image: todaySale3,
    price: 79,
    oldPrice: null,
    rating: 5,
    reviewCount: 1,
  },
  {
    id: 4,
    title: "Cartoon Koala Bear Plush Toy & Soft Long Bolster Pillow",
    store: "Soft Toys",
    image: todaySale4,
    price: 79,
    oldPrice: null,
    rating: 5,
    reviewCount: 1,
  },
];

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 24);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
        min: Math.floor((distance / (1000 * 60)) % 60),
        sec: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FFF0F5] py-16">
      <div className="cus-container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          {/* Left Title & Text */}
          <div className="text-center md:text-left">
            <h2 className="text-[34px] leading-[28px] font-bold text-[#E7448C]">
              Deal Of The Day
            </h2>
            <p className="text-gray-500 max-w-md mx-auto md:mx-0 leading-5">
              Grab your favorite plush toys before the offer ends! Limited-time
              deals updated daily.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hrs },
              { label: "Min", value: timeLeft.min },
              { label: "Sec", value: timeLeft.sec },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-16 h-16 bg-[#E7448C] text-white rounded-full shadow-xl"
              >
                <span className="text-[28px] leading-[20px] font-bold">{item.value}</span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#E7448C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}

              <div className="relative mb-4 flex h-[300px] items-center justify-center rounded-xl bg-[#FFF0F5] p-2">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mb-1 text-center text-sm text-gray-500">
                {product.store}
              </p>

              <h3 className="mb-2 text-center text-base leading-snug font-semibold text-gray-800">
                {product.title}
              </h3>

              <div className="mb-2 flex items-center justify-center gap-1">
                <span className="text-sm text-gray-700">{product.rating}</span>
                <span className="text-xs text-gray-500">
                  ({product.reviewCount} review)
                </span>
              </div>

              <div className="mb-4 text-center">
                {product.oldPrice && (
                  <span className="mr-2 text-sm text-gray-400 line-through">
                    AED {product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg font-bold text-gray-800">
                  AED {product.price.toFixed(2)}
                </span>
              </div>

              <button className="flex w-full shadow-2xl items-center justify-center gap-2 rounded-full bg-[#E7448C] py-2.5 font-light uppercase text-white transition hover:bg-[#000]">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
