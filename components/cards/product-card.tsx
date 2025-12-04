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

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Star, Heart, Eye, ShoppingBag, ShoppingCart } from "lucide-react";
// import { freeDeliveryIcon, matched, s_tag } from "@/public/assets/icons";

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
//   const [mobileActive, setMobileActive] = useState(false);

//   const toggleMobileActive = () => {
//     if (window.innerWidth < 768) setMobileActive(!mobileActive);
//   };
//   const added = true;

//   return (
//     <div
//       onClick={toggleMobileActive}
//       className="group/card relative cursor-pointer rounded-2xl bg-[#FFF0F5] p-2 text-center transition-all duration-300 hover:shadow-lg md:p-3"
//     >
//       <button className="absolute top-5 right-5 z-20 cursor-pointer rounded-full bg-white p-2 shadow hover:text-white">
//         <ShoppingCart
//           size={24}
//           className={added ? "text-[#E7448A]" : "text-gray-400"}
//         />
//       </button>

//       {/* Image Wrapper */}
//       <div className="relative flex h-auto items-center justify-center overflow-hidden rounded-xl md:h-[250px]">
//         <Image
//           src={image}
//           alt={title}
//           width={250}
//           height={250}
//           className="object-contain transition-transform duration-500 group-hover/card:scale-105 md:group-hover/card:scale-105"
//         />

//         {/* Hover Icons (Desktop) + Tap Icons (Mobile) */}
//         <div
//           className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${mobileActive ? "opacity-100" : "opacity-0"} md:group-hover/card:opacity-100`}
//         >
//           <button
//             onClick={onWishlist}
//             className={`transform rounded-full bg-white p-3 text-gray-700 shadow-md transition-all duration-500 hover:bg-[#E7448A] hover:text-white ${mobileActive ? "translate-x-0" : "-translate-x-8"} md:group-hover/card:translate-x-0`}
//           >
//             <Heart size={18} />
//           </button>

//           <button
//             onClick={onView}
//             className={`transform rounded-full bg-white p-3 text-gray-700 shadow-md transition-all duration-500 hover:bg-[#E7448A] hover:text-white ${mobileActive ? "translate-x-0" : "translate-x-8"} md:group-hover/card:translate-x-0`}
//           >
//             <Eye size={18} />
//           </button>
//         </div>

//         {/* Add to Cart Button */}
//         <button
//           onClick={onAddToCart}
//           className={`absolute left-1/2 min-w-[110px] -translate-x-1/2 rounded-[20px] bg-[#E7448A] px-2 py-2 font-medium text-white shadow-md transition-all duration-500 hover:bg-[#d6377b] md:w-auto md:rounded-full md:px-4 md:py-2 ${mobileActive ? "bottom-4" : "bottom-[-70px]"} md:group-hover/card:bottom-5`}
//         >
//           <div className="flex items-center gap-1">
//             <ShoppingBag size={18} />
//             <span className="text-[12px] md:text-[16px]">Add to Cart</span>
//           </div>
//         </button>
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col items-center justify-start gap-1">
//         <h3 className="mt-0 text-[14px] font-semibold text-gray-900 md:text-lg">
//           {title}
//         </h3>
//         <button className="absolute top-15 right-2 z-20 cursor-pointer">
//           <Image
//             src={freeDeliveryIcon}
//             alt="free"
//             className="h-[60px] w-[60px] md:h-[70px] md:w-[70px]"
//           />
//         </button>

//         <span className="flex max-w-max items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
//           <Image src={s_tag} alt="s" width={10} height={10} />{" "}
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
import { Star, Heart, Eye, ShoppingBag, ShoppingCart } from "lucide-react";
import { freeDeliveryIcon, matched, s_tag } from "@/public/assets/icons";

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
  const added = true;

  return (
    <div
      onClick={toggleMobileActive}
      className="group/card relative cursor-pointer rounded-2xl bg-[#FFF0F5] text-center transition-all duration-300 hover:shadow-lg"
    >
      <div className="absolute top-3 right-0 left-0 z-10 flex items-center justify-between px-3">
        <div className="text rounded-[20px] bg-[#E7448A] px-2 py-1 text-[10px] font-bold text-white drop-shadow-2xl md:px-3 md:text-[14px]">
          Popular
        </div>
        {discount && (
          <div className="text rounded-[20px] bg-[#46af56] px-2 py-1 text-[10px] font-bold text-white drop-shadow-2xl md:px-3 md:text-[14px]">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="absolute top-[50%] right-4 z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FFE6F2] hover:bg-[#E7448A] md:h-[40px] md:w-[40px]">
        <Heart
          className="h-[15px] w-[15px] md:h-[22px] md:w-[22px]"
          fill="#FFE6F2"
          color="#E7448A"
        />
      </div>

      {/* Image Wrapper */}
      <div className="relative flex h-auto items-center justify-center overflow-hidden rounded-xl md:h-[250px]">
        <Image
          src={image}
          alt={title}
          width={325}
          height={250}
          className="object-contain transition-transform duration-500 group-hover/card:scale-105 md:group-hover/card:scale-125"
        />

        {/* Hover Icons (Desktop) + Tap Icons (Mobile) */}
        {/* <div
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
        </div> */}

        {/* Add to Cart Button */}
        {/* <button
          onClick={onAddToCart}
          className={`absolute left-1/2 min-w-[110px] -translate-x-1/2 rounded-[20px] bg-[#E7448A] px-2 py-2 font-medium text-white shadow-md transition-all duration-500 hover:bg-[#d6377b] md:w-auto md:rounded-full md:px-4 md:py-2 ${mobileActive ? "bottom-4" : "bottom-[-70px]"} md:group-hover/card:bottom-5`}
        >
          <div className="flex items-center gap-1">
            <ShoppingBag size={18} />
            <span className="text-[12px] md:text-[16px]">Add to Cart</span>
          </div>
        </button> */}
      </div>

      {/* Product Info */}
      <div className="flex justify-between gap-1 px-2 pb-4 md:gap-5 md:px-4">
        <div className="flex flex-col justify-start gap-1">
          <h3 className="mt-0 line-clamp-2 text-left text-[14px] font-semibold text-[#3B3B45]">
            {title}
          </h3>

          <div className="mt-0 flex items-center gap-1 text-[8px] text-[#3B3B45] md:text-[12px]">
            <Star size={16} fill="#FACC15" color="" />
            <span className="text-[#3B3B45]">{rating}</span>
            <span>(203)</span>
          </div>

          <div className="mt-0 text-left text-[10px] font-bold text-[#3B3B45] md:text-[12px]">
            AED{" "}
            {Number(price) > 0 && Number(discount)
              ? ((Number(discount) / Number(price)) * 100).toFixed(2)
              : "0.00"}
            <span className="ml-1 text-[8px] font-normal text-gray-400 line-through md:text-[10px]">
              AED {price.toFixed(2)}
            </span>{" "}
          </div>
          <span className="flex max-w-max items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
            <Image src={s_tag} alt="s" width={10} height={10} />{" "}
            <Image src={matched} alt="match" height={6} />
          </span>
          <div className="mt-0 text-left text-[10px] font-bold text-[#3B82F6] capitalize md:text-[12px]">
            Free Delivery
          </div>
        </div>
        <div className="flex h-full self-end pr-2 md:pr-0">
          <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#E7448A] p-0 md:h-[40px] md:w-[40px] md:p-2">
            <ShoppingCart
              className={`h-[10px] w-[10px] md:h-[22px] md:w-[22px] ${added ? "text-white" : "text-gray-400"} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
