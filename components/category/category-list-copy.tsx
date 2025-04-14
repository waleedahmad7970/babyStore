"use client";

const sections: any[] = [
  //   {
  //     title: "Bath",
  //     items: [
  //       "Towels & Accessories",
  //       "Bath Tubs",
  //       "Shampoos & Conditioners",
  //       "Soaps & Body Wash",
  //       "Oral Care",
  //       "Bath Accessories",
  //     ],
  //   },
  //   {
  //     title: "Skin & Hair & Body",
  //     items: [
  //       "Lotions & Creams",
  //       "Balms",
  //       "Powders & Sprays",
  //       "Baby Oil",
  //       "Sun Care",
  //       "Hair Care",
  //       "Nail Care",
  //       "Travel Kits",
  //     ],
  //   },
  //   {
  //     title: "Skin & Hair & Body",
  //     items: [
  //       "Lotions & Creams",
  //       "Balms",
  //       "Powders & Sprays",
  //       "Baby Oil",
  //       "Sun Care",
  //       "Hair Care",
  //       "Nail Care",
  //       "Travel Kits",
  //     ],
  //   },
  //   {
  //     title: "Skin & Hair & Body",
  //     items: [
  //       "Lotions & Creams",
  //       "Balms",
  //       "Powders & Sprays",
  //       "Baby Oil",
  //       "Sun Care",
  //       "Hair Care",
  //       "Nail Care",
  //       "Travel Kits",
  //     ],
  //   },
  //   {
  //     title: "Bath",
  //     items: [
  //       "Towels & Accessories",
  //       "Bath Tubs",
  //       "Shampoos & Conditioners",
  //       "Soaps & Body Wash",
  //       "Oral Care",
  //       "Bath Accessories",
  //     ],
  //   },
  //   {
  //     title: "Bath",
  //     items: [
  //       "Towels & Accessories",
  //       "Bath Tubs",
  //       "Shampoos & Conditioners",
  //       "Soaps & Body Wash",
  //       "Oral Care",
  //       "Bath Accessories",
  //     ],
  //   },
  //   {
  //     title: "Skin & Hair & Body",
  //     items: [
  //       "Lotions & Creams",
  //       "Balms",
  //       "Powders & Sprays",
  //       "Baby Oil",
  //       "Sun Care",
  //       "Hair Care",
  //       "Nail Care",
  //       "Travel Kits",
  //     ],
  //   },
  //   {
  //     title: "Bath",
  //     items: [
  //       "Towels & Accessories",
  //       "Bath Tubs",
  //       "Shampoos & Conditioners",
  //       "Soaps & Body Wash",
  //       "Oral Care",
  //       "Bath Accessories",
  //     ],
  //   },
  //   {
  //     title: "Bath",
  //     items: [
  //       "Towels & Accessories",
  //       "Bath Tubs",
  //       "Shampoos & Conditioners",
  //       "Soaps & Body Wash",
  //       "Oral Care",
  //       "Bath Accessories",
  //     ],
  //   },
];

const menuImages = [menu1, menu2];
const menuBrands = [brand1, brand2, brand3, brand4, brand5, brand6];
// export default function CategoryList() {
//   const [hoveredId, setHoveredId] = useState<number | null>(null);

//   return (
//     <div className="relative mb-0 hidden w-full px-4 md:block md:px-0 md:pb-6">
//       {hoveredId !== null && (
//         <div className="fixed inset-0 z-30 bg-black/50 transition duration-300"></div>
//       )}

//       <div className="cus-container no-scrollbar relative z-30 mx-auto flex justify-between gap-3 overflow-x-auto">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="relative"
//             onMouseEnter={() => setHoveredId(category.id)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             {/* {hoveredId !== null && hoveredId !== category.id && (
//               <div className="absolute z-0 bg-black/5 transition duration-300" />
//             )} */}

//             {hoveredId === category.id && (
//               <div className="animate-fade-in absolute -top-48 left-1/2 z-20 w-40 -translate-x-1/2">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   className="h-40 w-40 rounded-lg object-cover shadow-2xl"
//                 />
//               </div>
//             )}

//             <CategoryCard
//               {...category}
//               hoveredId={hoveredId}
//               categoryId={category.id}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="relative">
//         {hoveredId && (
//           <div
//             style={{
//               boxShadow: "box-shadow: -14px 14px 33px 0px rgba(0, 0, 0, 0.09)",
//             }}
//             className="absolute top-[23px] right-0 left-0 z-30 mx-auto hidden max-w-[1360px] rounded-[8px] bg-white px-[41px] py-6 md:block"
//           >
//             <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
//               <div className="grid grid-cols-3 gap-[36.88px]">
//                 {[0, 1, 2].map((colIndex) => (
//                   <div
//                     key={colIndex}
//                     className="flex w-full max-w-[232.81px] flex-col gap-6"
//                   >
//                     {sections
//                       .slice(colIndex * 3, colIndex * 3 + 3)
//                       .map((section, i) => (
//                         <div key={i} className="w-[232px] max-w-[232px]">
//                           <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
//                             {section.title}
//                           </h2>
//                           <ul className="space-y-1 text-sm text-gray-600">
//                             {section.items.map((item, idx) => (
//                               <li
//                                 className="mb-0 border-b-1 border-[#F5F5F5] text-[12px] leading-[24px] font-[274px] text-[#1F1F1F]"
//                                 key={idx}
//                               >
//                                 {item}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                   </div>
//                 ))}
//               </div>

//               <div className="flex w-full justify-between gap-[26.51px] lg:max-w-[483px]">
//                 <div className="flex flex-col gap-[12.35px]">
//                   {menuImages.map((menu, index) => {
//                     return <Image src={menu} alt="im" key={index} />;
//                   })}
//                 </div>
//                 <div className="flex flex-col gap-0">
//                   <p className="mb-0 text-[14px] leading-[24px] font-bold text-[#1F1F1F]">
//                     TOP BRANDS
//                   </p>
//                   {menuBrands?.map((brand, index) => (
//                     <Image src={brand} alt="im" key={index} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import CategoryCard from "./cards/category-card";
import { categories } from "../../static/static";
import { menu1, menu2 } from "@/public/assets/banner";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
} from "@/public/assets/brands";

// ... (keep your existing sections, menuImages, menuBrands declarations)

export default function CategoryList() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [previousId, setPreviousId] = useState<number | null>(null);
  const [animationDirection, setAnimationDirection] = useState<string>("");

  const handleHover = (id: number) => {
    if (id !== hoveredId) {
      if (hoveredId !== null) {
        // Determine direction before updating state
        const direction = id > hoveredId ? "slide-left" : "slide-right";
        setAnimationDirection(direction);
      }
      setPreviousId(hoveredId);
      setHoveredId(id);
    }
  };

  return (
    <div className="relative mb-0 hidden w-full px-4 md:block md:px-0 md:pb-6">
      {hoveredId !== null && (
        <div className="fixed inset-0 z-30 bg-black/50 transition duration-300"></div>
      )}

      <div className="cus-container no-scrollbar group relative z-30 mx-auto flex overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative"
            onMouseEnter={() => handleHover(category.id)}
            onMouseLeave={() => {
              setHoveredId(null);
              setAnimationDirection("");
            }}
          >
            {hoveredId === category.id && (
              <div className="animate-fade-in absolute -top-48 left-1/2 z-20 w-40 -translate-x-1/2">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="h-40 w-40 rounded-lg object-cover shadow-2xl"
                />
              </div>
            )}

            <CategoryCard
              {...category}
              hoveredId={hoveredId}
              categoryId={category.id}
            />
          </div>
        ))}
      </div>

      <div className="relative">
        {/* {hoveredId && (
          <div
            key={hoveredId} // ✅ Forces remount on category change
            style={{
              boxShadow: "-14px 14px 33px 0px rgba(0, 0, 0, 0.09)",
            }}
            className={`absolute top-[-30px] right-0 left-0 z-30 mx-auto hidden max-w-[1360px] rounded-[8px] bg-white px-[41px] py-6 md:block ${animationDirection}`}
          >
            <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
              <div className="grid grid-cols-3 gap-[36.88px]">
                {[0, 1, 2].map((colIndex) => (
                  <div
                    key={colIndex}
                    className="flex w-full max-w-[232.81px] flex-col gap-6"
                  >
                    {sections
                      .slice(colIndex * 3, colIndex * 3 + 3)
                      .map((section, i) => (
                        <div key={i} className="w-[232px] max-w-[232px]">
                          <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                            {section.title}
                          </h2>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {section.items.map((item: any, idx: number) => (
                              <li
                                className="mb-0 border-b-1 border-[#F5F5F5] text-[12px] leading-[24px] font-[274px] text-[#1F1F1F]"
                                key={idx}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                ))}
              </div>

              <div className="flex w-full justify-between gap-[26.51px] lg:max-w-[483px]">
                <div className="flex flex-col gap-[12.35px]">
                  {menuImages.map((menu, index) => {
                    return <Image src={menu} alt="im" key={index} />;
                  })}
                </div>
                <div className="flex flex-col gap-0">
                  <p className="mb-0 text-[14px] leading-[24px] font-bold text-[#1F1F1F]">
                    TOP BRANDS
                  </p>
                  {menuBrands?.map((brand, index) => (
                    <Image src={brand} alt="im" key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )} */}
        <div
          key={hoveredId}
          className={`animate-scale-in transition-transform duration-300 ease-out`}
        >
          {hoveredId && (
            <div className="absolute top-[-30px] right-0 left-0 z-30 mx-auto hidden max-w-[1360px] md:block">
              {/* ✅ Animation wrapper */}
              <div
                key={hoveredId}
                className={`animate-scale-in transition-transform duration-300 ease-out`}
              >
                {/* ✅ Actual hover panel content */}
                <div
                  style={{
                    boxShadow: "-14px 14px 33px 0px rgba(0, 0, 0, 0.09)",
                  }}
                  className={`rounded-[8px] bg-white px-[41px] py-6 ${animationDirection}`}
                >
                  <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                    <div className="grid grid-cols-3 gap-[36.88px]">
                      {[0, 1, 2].map((colIndex) => (
                        <div
                          key={colIndex}
                          className="flex w-full max-w-[232.81px] flex-col gap-6"
                        >
                          {sections
                            .slice(colIndex * 3, colIndex * 3 + 3)
                            .map((section, i) => (
                              <div key={i} className="w-[232px] max-w-[232px]">
                                <h2 className="mb-[13px] text-[15px] font-medium text-[#1F1F1F]">
                                  {section.title}
                                </h2>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {section.items.map(
                                    (item: any, idx: number) => (
                                      <li
                                        className="border-b-1 text-[12px] font-medium text-[#1F1F1F]"
                                        key={idx}
                                      >
                                        {item}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>

                    <div className="flex w-full justify-between gap-[26.51px] lg:max-w-[483px]">
                      <div className="flex flex-col gap-[12.35px]">
                        {menuImages.map((menu, index) => (
                          <Image src={menu} alt="menu" key={index} />
                        ))}
                      </div>
                      <div className="flex flex-col gap-0">
                        <p className="mb-0 text-[14px] font-bold text-[#1F1F1F]">
                          TOP BRANDS
                        </p>
                        {menuBrands.map((brand, index) => (
                          <Image src={brand} alt="brand" key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
