import React from "react";
import Image from "next/image";
import {
  specialItems1,
  specialItems2,
  specialItems3,
  specialItems4,
  specialItems5,
  specialItems6,
} from "@/public/assets/support";
import ProductCard from "../cards/product-card";
import {
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from "@/public/assets/banners";

const products = [
  {
    id: 1,
    title: "Red Striped Polka Dress",
    price: 80,
    image: Banner2,
    rating: 5,
  },
  {
    id: 2,
    title: "Polka Dot Chambray Shirt",
    price: 60,
    image: Banner3,
    rating: 5,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 70,
    image: Banner5,
    rating: 4,
  },
  {
    id: 4,
    title: "Cute Baby Romper",
    price: 55,
    image: Banner6,
    rating: 5,
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-white py-16">
      <div className="cus-container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[22px] font-medium text-gray-900 md:text-[28px]">
            Featured Collection
          </h2>
          <button className="rounded-full bg-black px-6 py-2 text-[14px] text-white transition-all hover:bg-[#E7448C] md:text-[16px]">
            Explore All
          </button>
        </div>

        {/* ===== Grid Layout ===== */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {/* ==== Left: Product Cards Grid (2x2) ==== */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-6 lg:col-span-2">
            {products.map((item: any) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Sliding glass overlay */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute top-0 left-[-100%] h-full w-full rotate-12 transform bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-[200%]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* ==== Right: Big Promotional Banner ==== */}
          <div className="relative h-full min-h-[540px] overflow-hidden rounded-2xl">
            <Image
              src={Banner4}
              alt="Special Items Banner"
              fill
              className="scale-100 object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* ==== Overlay & Text ==== */}
            {/* <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-10">
              <h3 className="mb-3 text-4xl font-bold text-white">
                Special Collection
              </h3>
              <p className="mb-6 max-w-[400px] text-sm leading-relaxed text-gray-200">
                Get an extra 50% off our most-loved babywear and accessories.
                Premium quality, soft touch, and comfort guaranteed.
              </p>
              <button className="w-fit rounded-full bg-[#E7448C] px-8 py-2 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
                Shop Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
