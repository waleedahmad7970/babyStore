// "use client";

// import React from "react";
// import Image from "next/image";
// import { Star, Heart, Eye, ShoppingBag } from "lucide-react";
// import { matched, s_tag } from "@/public/assets/icons";

// interface ProductCardProps {
//   image: string;
//   title: string;
//   price: number;
//   rating: number;
//   discount?: string;
//   onAddToCart?: () => void;
//   onWishlist?: () => void;
//   onView?: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   image,
//   title,
//   price,
//   discount,
//   rating,
//   onAddToCart,
//   onWishlist,
//   onView,
// }) => {
//   return (
//     <div className="group/card relative cursor-pointer rounded-2xl bg-[#FFF0F5] p-2 text-center transition-all duration-300 hover:shadow-lg md:p-3">
//       {/* Image Wrapper */}
//       <div className="relative flex h-auto items-center justify-center overflow-hidden rounded-xl md:h-[250px]">
//         <Image
//           src={image}
//           alt={title}
//           width={250}
//           height={250}
//           className="object-contain transition-transform duration-500 group-hover/card:scale-105"
//         />

//         {/* Hover Icons (Wishlist + View) */}
//         <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover/card:opacity-100">
//           <button
//             onClick={onWishlist}
//             className="-translate-x-8 transform rounded-full bg-white p-3 text-gray-700 shadow-md transition-all duration-500 group-hover/card:translate-x-0 hover:bg-[#E7448A] hover:text-white"
//             title="Add to Wishlist"
//           >
//             <Heart size={18} />
//           </button>

//           <button
//             onClick={onView}
//             className="translate-x-8 transform rounded-full bg-white p-3 text-gray-700 shadow-md transition-all duration-500 group-hover/card:translate-x-0 hover:bg-[#E7448A] hover:text-white"
//             title="View Details"
//           >
//             <Eye size={18} />
//           </button>
//         </div>

//         {/* Add to Cart Button (slides from bottom) */}
//         <button
//           onClick={onAddToCart}
//           className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 rounded-full bg-[#E7448A] px-4 py-2 font-medium text-white shadow-md transition-all duration-500 group-hover/card:bottom-5 hover:bg-[#d6377b]"
//         >
//           <div className="flex items-center gap-1">
//             <ShoppingBag size={18} />
//             <span className="text-[16px]">Add to Cart</span>
//           </div>
//         </button>
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col items-center justify-start gap-1">
//         <h3 className="mt-0 text-[14px] font-semibold text-gray-900 md:text-lg">
//           {title}
//         </h3>

//         <span className="flex max-w-max items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
//           <Image src={s_tag} alt="s" width={10} height={10} className="" />{" "}
//           <Image src={matched} alt="match" height={6} />
//         </span>
//         <div className="mt-0 flex items-center justify-center gap-1 text-[10px] text-gray-700 md:text-sm">
//           <span className="text-[#E7448A]">{rating}</span>
//           <Star size={16} fill="#E7448A" color="#E7448A" />
//           <span>(1 review)</span>
//         </div>
//         <div className="mt-0 text-[14px] font-bold text-gray-900 md:text-[18px]">
//           <span className="text-[10px] font-normal text-gray-400 line-through md:text-sm">
//             AED {price.toFixed(2)}
//           </span>{" "}
//           AED{" "}
//           {Number(price) > 0 && Number(discount)
//             ? ((Number(discount) / Number(price)) * 100).toFixed(2)
//             : "0.00"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Heart, Eye, ShoppingBag } from "lucide-react";
import { matched, s_tag } from "@/public/assets/icons";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  discount?: string;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  onView?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  discount,
  rating,
  onAddToCart,
  onWishlist,
  onView,
}) => {
  const [mobileActive, setMobileActive] = useState(false);

  const toggleMobileActive = () => {
    if (window.innerWidth < 768) setMobileActive(!mobileActive);
  };

  return (
    <div
      onClick={toggleMobileActive}
      className="group/card relative cursor-pointer rounded-2xl bg-[#FFF0F5] p-2 text-center transition-all duration-300 hover:shadow-lg md:p-3"
    >
      {/* Image Wrapper */}
      <div className="relative flex h-auto items-center justify-center overflow-hidden rounded-xl md:h-[250px]">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="object-contain transition-transform duration-500 group-hover/card:scale-105 md:group-hover/card:scale-105"
        />

        {/* Hover Icons (Desktop) + Tap Icons (Mobile) */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${mobileActive ? "opacity-100" : "opacity-0"} md:group-hover/card:opacity-100`}
        >
          <button
            onClick={onWishlist}
            className={`transform rounded-full bg-white p-3 text-gray-700 shadow-md transition-all duration-500 hover:bg-[#E7448A] hover:text-white ${mobileActive ? "translate-x-0" : "-translate-x-8"} md:group-hover/card:translate-x-0`}
          >
            <Heart size={18} />
          </button>

          <button
            onClick={onView}
            className={`transform rounded-full bg-white p-3 text-gray-700 shadow-md transition-all duration-500 hover:bg-[#E7448A] hover:text-white ${mobileActive ? "translate-x-0" : "translate-x-8"} md:group-hover/card:translate-x-0`}
          >
            <Eye size={18} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className={`absolute left-1/2 min-w-[110px] -translate-x-1/2 rounded-[20px] bg-[#E7448A] px-2 py-2 font-medium text-white shadow-md transition-all duration-500 hover:bg-[#d6377b] md:w-auto md:rounded-full md:px-4 md:py-2 ${mobileActive ? "bottom-4" : "bottom-[-70px]"} md:group-hover/card:bottom-5`}
        >
          <div className="flex items-center gap-1">
            <ShoppingBag size={18} />
            <span className="text-[12px] md:text-[16px]">Add to Cart</span>
          </div>
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center justify-start gap-1">
        <h3 className="mt-0 text-[14px] font-semibold text-gray-900 md:text-lg">
          {title}
        </h3>

        <span className="flex max-w-max items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
          <Image src={s_tag} alt="s" width={10} height={10} />{" "}
          <Image src={matched} alt="match" height={6} />
        </span>

        <div className="mt-0 flex items-center justify-center gap-1 text-[10px] text-gray-700 md:text-sm">
          <span className="text-[#E7448A]">{rating}</span>
          <Star size={16} fill="#E7448A" color="#E7448A" />
          <span>(1 review)</span>
        </div>

        <div className="mt-0 text-[14px] font-bold text-gray-900 md:text-[18px]">
          <span className="text-[10px] font-normal text-gray-400 line-through md:text-sm">
            AED {price.toFixed(2)}
          </span>{" "}
          AED{" "}
          {Number(price) > 0 && Number(discount)
            ? ((Number(discount) / Number(price)) * 100).toFixed(2)
            : "0.00"}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
