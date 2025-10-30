// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Image, { StaticImageData } from "next/image";
// import { topCategoriesDumy } from "@/static/static";
// import { imageBaseUrl } from "@/config/config";
// import { useRef } from "react";

// interface Category {
//   name: string;
//   image: StaticImageData | string;
// }

// export default function TopCategorySlider() {
//   const swiperRef = useRef<any>(null);

//   return (
//     <div
//       className="w-full"
//       // 🧠 Pause autoplay when hover, resume on leave
//       onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
//       onMouseLeave={() => swiperRef.current?.autoplay?.start()}
//     >
//       <Swiper
//         modules={[Autoplay]}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         slidesPerView="auto"
//         spaceBetween={90}
//         loop
//         className="overflow-hidden"
//       >
//         {topCategoriesDumy.map((category: Category, index) => (
//           <SwiperSlide
//             key={index}
//             className="!w-auto flex justify-center md:!w-[180px]"
//           >
//             <div className="flex py-3 cuspor-pointer flex-col items-center transition-transform duration-300 hover:scale-105">
//               <div className="relative flex h-[85px] w-[85px] items-center justify-center rounded-[35px] bg-[#FFF1E9] md:h-[250px] md:w-[250px] md:rounded-[20px]">
//                 <Image
//                   src={
//                     typeof category.image === "string"
//                       ? `${imageBaseUrl}/assets/favorite_category/${category.image}`
//                       : category.image
//                   }
//                   alt={category.name}
//                   width={200}
//                   height={200}
//                   className="object-contain max-w-[70px] md:max-w-[181px] max-h-[105px] md:max-h-[153px]"
//                 />
//               </div>
//               <p className="mt-3 text-[12px] font-medium uppercase text-[#A8A8A8] md:text-[20px]">
//                 {category.name}
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image, { StaticImageData } from "next/image";
import { topCategoriesDumy } from "@/static/static";
import { imageBaseUrl } from "@/config/config";
import { useRef } from "react";

interface Category {
  name: string;
  image: StaticImageData | string;
}

export default function TopCategorySlider() {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      {/* Left Navigation Button */}
      <button
        onClick={handlePrev}
        className="absolute left-[-25px] top-1/2 z-10 -translate-y-1/2 transform rounded-full cursor-pointer bg-[#FFF1E9] p-3 shadow-lg hover:bg-[#ffe3d3] transition-all duration-300 active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27 44"
          className="h-5 w-5"
        >
          <path
            d="M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z"
            fill="#E7448C"
          />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView="auto"
        spaceBetween={90}
        loop
        className="overflow-hidden"
      >
        {topCategoriesDumy.map((category: Category, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-center md:!w-[180px]"
          >
            <div className="flex py-3 cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-[85px] w-[85px] items-center justify-center rounded-[35px] bg-[#FFF0F5] md:h-[250px] md:w-[250px] md:rounded-[20px]">
                <Image
                  src={
                    typeof category.image === "string"
                      ? `${imageBaseUrl}/assets/favorite_category/${category.image}`
                      : category.image
                  }
                  alt={category.name}
                  width={200}
                  height={200}
                  className="object-contain max-w-[70px] md:max-w-[181px] max-h-[105px] md:max-h-[153px]"
                />
              </div>
              <p className="mt-3 text-[12px] font-medium uppercase text-[#A8A8A8] md:text-[20px]">
                {category.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
