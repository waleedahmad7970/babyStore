"use client";

import React from "react";
import Image from "next/image";
import { Star, Heart, Eye, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  onView?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  rating,
  onAddToCart,
  onWishlist,
  onView,
}) => {
  return (
    <div className="group/card relative cursor-pointer rounded-2xl bg-[#FFF0F5] p-3 text-center transition-all duration-300 hover:shadow-lg">
      {/* Image Wrapper */}
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="object-contain transition-transform duration-500 group-hover/card:scale-105"
        />

        {/* Hover Icons (Wishlist + View) */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover/card:opacity-100 transition-all duration-500">
          <button
            onClick={onWishlist}
            className="bg-white text-gray-700 p-3 rounded-full shadow-md transform -translate-x-8 group-hover/card:translate-x-0 transition-all duration-500 hover:bg-[#E7448A] hover:text-white"
            title="Add to Wishlist"
          >
            <Heart size={18} />
          </button>

          <button
            onClick={onView}
            className="bg-white text-gray-700 p-3 rounded-full shadow-md transform translate-x-8 group-hover/card:translate-x-0 transition-all duration-500 hover:bg-[#E7448A] hover:text-white"
            title="View Details"
          >
            <Eye size={18} />
          </button>
        </div>

        {/* Add to Cart Button (slides from bottom) */}
        <button
          onClick={onAddToCart}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 bg-[#E7448A] text-white font-medium px-4 py-2 rounded-full shadow-md transition-all duration-500 group-hover/card:bottom-5 hover:bg-[#d6377b]"
        >
          <div className="flex items-center gap-1">
            <ShoppingBag size={18} />
            <span className="text-[16px]">Add to Cart</span>
          </div>
        </button>
      </div>

      {/* Product Info */}
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-1 flex items-center justify-center gap-1 text-sm text-gray-700">
        <span className="text-[#E7448A]">{rating}</span>
        <Star size={16} fill="#E7448A" color="#E7448A" />
        <span>(1 review)</span>
      </div>
      <div className="mt-2 text-[20px] font-bold text-gray-900">
        ${price.toFixed(2)}
      </div>
    </div>
  );
};

export default ProductCard;
