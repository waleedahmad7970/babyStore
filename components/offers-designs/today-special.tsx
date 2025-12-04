// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { todaySale3, todaySale4 } from "@/public/assets/support";

// const products = [
//   {
//     id: 1,
//     title: "Pink Bear Plush Toy & Soft Long Bolster For Kid’s And Adult",
//     store: "Memini Store",
//     image: todaySale3,
//     price: 79,
//     oldPrice: null,
//     rating: 5,
//     reviewCount: 1,
//   },
//   {
//     id: 2,
//     title: "Memory Lion & Lioness - The Heart Warming Keepsakes",
//     store: "Lion & Lioness",
//     image: todaySale4,
//     price: 79,
//     oldPrice: 99,
//     rating: 4,
//     reviewCount: 1,
//     badge: "-20% Sale",
//   },
//   {
//     id: 3,
//     title: "Sunny Cuddles And Huggable Of The Biggest Teddy Bears",
//     store: "Biggest Teddy",
//     image: todaySale3,
//     price: 79,
//     oldPrice: null,
//     rating: 5,
//     reviewCount: 1,
//   },
//   {
//     id: 4,
//     title: "Cartoon Koala Bear Plush Toy & Soft Long Bolster Pillow",
//     store: "Soft Toys",
//     image: todaySale4,
//     price: 79,
//     oldPrice: null,
//     rating: 5,
//     reviewCount: 1,
//   },
// ];

// export default function DealOfTheDay() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hrs: 0,
//     min: 0,
//     sec: 0,
//   });

//   useEffect(() => {
//     const target = new Date();
//     target.setHours(target.getHours() + 24);

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = target.getTime() - now;

//       if (distance <= 0) {
//         clearInterval(interval);
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
//         min: Math.floor((distance / (1000 * 60)) % 60),
//         sec: Math.floor((distance / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#FFF0F5] py-16">
//       <div className="cus-container mx-auto px-4">
//         {/* Header Section */}
//         <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
//           {/* Left Title & Text */}
//           <div className="text-center md:text-left">
//             <h2 className="text-[34px] leading-[28px] font-bold text-[#E7448C]">
//               Deal Of The Day
//             </h2>
//             <p className="mx-auto max-w-md leading-5 text-gray-500 md:mx-0">
//               Grab your favorite plush toys before the offer ends! Limited-time
//               deals updated daily.
//             </p>
//           </div>

//           {/* Countdown Timer */}
//           <div className="mt-6 flex justify-center gap-4 md:mt-0 md:justify-end">
//             {[
//               { label: "Days", value: timeLeft.days },
//               { label: "Hrs", value: timeLeft.hrs },
//               { label: "Min", value: timeLeft.min },
//               { label: "Sec", value: timeLeft.sec },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#E7448C] text-white shadow-xl"
//               >
//                 <span className="text-[28px] leading-[20px] font-bold">
//                   {item.value}
//                 </span>
//                 <span className="text-xs">{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="relative rounded-2xl bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md md:p-3"
//             >
//               {product.badge && (
//                 <span className="absolute top-4 left-4 rounded-full bg-[#E7448C] px-3 py-1 text-xs font-semibold text-white">
//                   {product.badge}
//                 </span>
//               )}

//               <div className="relative mb-4 flex h-[160px] items-center justify-center rounded-xl bg-[#FFF0F5] p-2 md:h-[300px]">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               <p className="mb-1 text-center text-sm text-gray-500">
//                 {product.store}
//               </p>

//               <h3 className="mb-2 text-center text-base leading-snug font-semibold text-gray-800">
//                 {product.title}
//               </h3>

//               <div className="mb-2 flex items-center justify-center gap-1">
//                 <span className="text-sm text-gray-700">{product.rating}</span>
//                 <span className="text-xs text-gray-500">
//                   ({product.reviewCount} review)
//                 </span>
//               </div>

//               <div className="mb-4 text-center">
//                 {product.oldPrice && (
//                   <span className="mr-2 text-sm text-gray-400 line-through">
//                     AED {product.oldPrice.toFixed(2)}
//                   </span>
//                 )}
//                 <span className="text-lg font-bold text-gray-800">
//                   AED {product.price.toFixed(2)}
//                 </span>
//               </div>

//               <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E7448C] py-2.5 font-light text-white uppercase shadow-2xl transition hover:bg-[#000]">
//                 Add to cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { matched, s_tag } from "@/public/assets/icons";
import { todaySale3, todaySale4 } from "@/public/assets/support";
// import s_tag from "@/public/..."
// import matched from "@/public/..."
// import todaySale3, todaySale4… (your imports)

const products = [
  {
    id: 1,
    title: "Pink Bear Plush Toy & Soft Long Bolster ",
    image: todaySale3,
    price: 79,
    oldPrice: 0,
    rating: 5,
  },
  {
    id: 2,
    title: "Memory Lion & Lioness Warming Keepsakes",
    image: todaySale4,
    price: 79,
    oldPrice: 99,
    rating: 4,
  },
  {
    id: 3,
    title: "Huggable Of The Biggest Teddy Bears",
    image: todaySale3,
    price: 79,
    oldPrice: 0,
    rating: 5,
  },
  {
    id: 4,
    title: "Cartoon Koala Bear Plush Toy",
    image: todaySale4,
    price: 79,
    oldPrice: 0,
    rating: 5,
  },
  {
    id: 3,
    title: "Huggable Of The Biggest Teddy Bears",
    image: todaySale3,
    price: 79,
    oldPrice: 0,
    rating: 5,
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
    <section className="bg-[#FFE6F2] py-5 md:py-16">
      <div className="cus-container mx-auto px-4">
        {/* Header */}
        <div className="mb-5 flex flex-col md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-[34px] leading-[28px] font-bold text-[#E7448C]">
              Deal Of The Day
            </h2>
            <p className="mx-auto hidden max-w-md leading-5 text-gray-500 md:mx-0 md:block">
              Grab your favorite plush toys before the offer ends! Limited-time
              deals updated daily.
            </p>
          </div>

          {/* Countdown */}
          <div className="mt-6 hidden justify-center gap-4 md:mt-0 md:flex md:justify-end">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hrs },
              { label: "Min", value: timeLeft.min },
              { label: "Sec", value: timeLeft.sec },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#E7448C] text-white shadow-xl"
              >
                <span className="text-[28px] leading-[20px] font-bold">
                  {item.value}
                </span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-center gap-1 md:mt-0 md:flex md:hidden md:justify-end">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hrs },
              { label: "Min", value: timeLeft.min },
              { label: "Sec", value: timeLeft.sec },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex h-10 w-10 flex-col items-center justify-center rounded-[8px] bg-[#E7448C] text-white shadow-md"
              >
                <span className="text-[14px] leading-[12px] font-bold">
                  {item.value}
                </span>
                <span className="text-[8px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID — Using your full custom product card */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:gap-3 lg:grid-cols-5">
          {products.map((product) => {
            const discount =
              product.oldPrice > 0
                ? Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100,
                  )
                : 0;

            return (
              <div
                key={product.id}
                className="group/card relative cursor-pointer rounded-2xl bg-[#FFF0F5] text-center transition-all duration-300 hover:shadow-lg"
              >
                {/* Popular + Discount Badges */}
                <div className="absolute top-3 right-0 left-0 z-10 flex items-center justify-between px-3">
                  <div className="text rounded-[20px] bg-[#E7448A] px-2 py-1 text-[10px] font-bold text-white drop-shadow-2xl md:px-3 md:text-[14px]">
                    Popular
                  </div>
                  {discount > 0 && (
                    <div className="text rounded-[20px] bg-[#46af56] px-2 py-1 text-[10px] font-bold text-white drop-shadow-2xl md:px-3 md:text-[14px]">
                      {discount}% OFF
                    </div>
                  )}
                </div>

                {/* Heart Icon */}
                <div className="absolute top-[50%] right-4 z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FFE6F2] hover:bg-[#E7448A] md:h-[40px] md:w-[40px]">
                  <Heart
                    className="h-[15px] w-[15px] md:h-[22px] md:w-[22px]"
                    fill="#FFE6F2"
                    color="#E7448A"
                  />
                </div>

                {/* Image */}
                <div className="relative flex h-[170px] items-center justify-center overflow-hidden rounded-xl md:h-[250px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={325}
                    height={250}
                    className="object-contain transition-transform duration-500 group-hover/card:scale-110 md:group-hover/card:scale-125"
                  />
                </div>

                {/* Product Info */}
                <div className="flex justify-between gap-1 px-2 pb-4 md:gap-5 md:px-4">
                  <div className="flex flex-col justify-start gap-1">
                    <h3 className="line-clamp-2 text-left text-[14px] font-semibold text-[#3B3B45]">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-[10px] text-[#3B3B45] md:text-[12px]">
                      <Star size={16} fill="#FACC15" color="" />
                      <span>{product.rating}</span>
                      <span>(203)</span>
                    </div>

                    {/* Price */}
                    <div className="text-left text-[12px] font-bold text-[#3B3B45]">
                      AED {product.price.toFixed(2)}
                      {product.oldPrice > 0 && (
                        <span className="ml-2 text-[10px] text-gray-400 line-through">
                          AED {product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* S-tag badge */}
                    <span className="flex max-w-max items-center gap-[3px] rounded-[15px] bg-[#FE9132] px-[5px] py-[2px] text-xs text-white">
                      <Image src={s_tag} alt="s" width={10} height={10} />
                      <Image src={matched} alt="match" height={6} />
                    </span>

                    {/* Free Delivery */}
                    <div className="text-left text-[12px] font-bold text-[#3B82F6]">
                      Free Delivery
                    </div>
                  </div>

                  <div className="flex h-full self-end pr-2 md:pr-0">
                    <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#E7448A] p-0 md:h-[40px] md:w-[40px] md:p-2">
                      <ShoppingCart
                        className={`h-[10px] w-[10px] text-white md:h-[22px] md:w-[22px]`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
