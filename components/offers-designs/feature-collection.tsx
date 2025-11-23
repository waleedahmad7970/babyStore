
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

const products = [
  { id: 1, title: "Red Striped Polka Dress", price: 80, image: specialItems2, rating: 5 },
  { id: 2, title: "Polka Dot Chambray Shirt", price: 60, image: specialItems3, rating: 5 },
  { id: 3, title: "Checkered Shirt", price: 70, image: specialItems4, rating: 4 },
  { id: 4, title: "Cute Baby Romper", price: 55, image: specialItems5, rating: 5 },
];

export default function FeaturedCollection() {
  return (
    <section className="py-16 bg-white">
      <div className="cus-container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="flex items-center justify-between mb-10">
        <h2 className="text-[22px] md:text-[28px] font-medium text-gray-900">
        Featured Collection
          </h2>
          <button className="bg-black text-[14px] md:text-[16px] text-white px-6 py-2 rounded-full hover:bg-[#E7448C] transition-all">
            Explore All
          </button>
        </div>

        {/* ===== Grid Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* ==== Left: Product Cards Grid (2x2) ==== */}
          <div className="lg:col-span-2 grid grid-cols-1  md:grid-cols-2 gap-6">
            {products.map((item:any) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                onAddToCart={() => console.log(`Added ${item.title} to cart`)}
                onWishlist={() => console.log(`Wishlisted ${item.title}`)}
                onView={() => console.log(`Viewing ${item.title}`)}
              />
            ))}
          </div>

          {/* ==== Right: Big Promotional Banner ==== */}
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[540px]">
            <Image
              src={specialItems1}
              alt="Special Items Banner"
              fill
              className="object-cover scale-100 hover:scale-105 transition-transform duration-700"
            />

            {/* ==== Overlay & Text ==== */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-4xl font-bold text-white mb-3">
                Special Collection
              </h3>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed max-w-[400px]">
                Get an extra 50% off our most-loved babywear and accessories.
                Premium quality, soft touch, and comfort guaranteed.
              </p>
              <button className="bg-[#E7448C] text-white px-8 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 w-fit">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
