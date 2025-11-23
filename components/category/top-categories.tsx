import { imageBaseUrl } from "@/config/config";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const mainColor = "#E7448A";
const secondaryBg = "#FFF0F5";

const toys = [
  {
    image: 
    "Feeding (1).png1757069041.png",
    title: "Feeding",
    price: 31232,
    prevPrice: null,
  },
  {
    image:"Frame_39-removebg-preview.png1758780672.png",
    title: "Skin Care",
    price: 42342,
    prevPrice: 60,
  },
  {
    image:"Nursery 1 (1).png1757069256.png",
    title: "Nursery",
    price: 7430,
    prevPrice: null,
  },
  {
    image:"Stroller Clean.H03 1 (4).png1757069102.png",
    title: "Diapers",
    price: 8000,
    prevPrice: null,
  },
  {
    image:"Stroller Clean.H03 1 (5).png1757069352.png",
    title: "Gears & Safety",
    price: 55340,
    prevPrice: null,
  },
  {
    image:"86x90 - 5 1.png1757069370.png",
    title: "Toys & Games",
    price: 50000,
    prevPrice: null,
  },
  {
    image:"Outdoor (2).png1757069528.png",
    title: "Outdoor",
    price: 3000,
    prevPrice: 60,
  },
  {
    image:"Stroller Clean.H03 1 (6).png1757069622.png",
    title: "School Essentials", 
    price: 4300,
    prevPrice: null,
  },
  {
    image:"Mommy 1 (1).png1757069660.png",
    title: "Mommy & Me",
    price: 3000,
    prevPrice: 60,
  },
  {
    image:"Rectangle 4247 (2).png1757069677.png",
    title: "Party Supplies",
    price: 7000,
    prevPrice: null,
  },
  {
    image:"Rectangle 4247 (3).png1757069724.png",
    title: "Cloths & Accessories",
    price: 8076,
    prevPrice: null,
  },
  {
    image:"% (1).png1757070096.png",
    title: "Sales & Deals",
    price: 1000,
    prevPrice: null,
  },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
const mobileChunks = chunkArray(toys, 4);


const TopCategoriesSection: React.FC = () => (
  <div className="flex cus-container flex-wrap gap-8 pt-[50px] pb-[100px] flex-col xl:flex-row" style={{ background: "#fff" }}>
    {/* Left Banner */}
    <div
      className="flex flex-col justify-center items-center rounded-2xl p-10 text-[#fff] xl:w-[430px] min-h-[350px]"
      style={{
        background: mainColor,
       
      }}
    >
      <span className="text-[50px] leading-[45px]  sm:text-[68px] sm:leading-[60px]">Explore With Our Categories</span>
      <span className="text-4xl font-bold mb-3 mt-2">New & Trending</span>
      <button
        className="mt-6 rounded-full px-10 py-3 font-bold text-xl shadow-2xl cursor-pointer hover:mr-3"
        style={{ background: "#fff0f5", color: mainColor }}
      >
        Explore All
      </button>
    </div>
  {/* Mobile / Tablet Slider */}
  <div className="w-full block md:hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {mobileChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-2">
                {chunk.map((toy, idx) => (
                  <div key={idx} className="flex flex-col items-center cursor-pointer bg-white hover:bg-[#FFF0F5] rounded-2xl p-3 gap-2">
                    <Image
                      src={`${imageBaseUrl}/assets/menu_category/${toy?.image}`}
                      alt={toy?.title}
                      className="rounded-xl object-contain h-[80px] w-[80px]"
                      width={75}
                      height={75}
                      style={{ background: secondaryBg }}
                    />
                    <div className="text-center">
                      <div className="text-gray-500 font-light text-[clamp(0.9rem,2vw,1rem)]">{toy.title}</div>
                      <div className="mt-1 text-[clamp(1rem,2vw,1.2rem)] font-bold" style={{ color: mainColor }}>
                        {toy.price} <span className="text-[#A8A8A8] font-light">Products</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    <div className="hidden  md:flex-1 md:grid grid-cols-3 gap-2">
      {toys.map((toy, idx) => (
        <div
          key={idx}
          className="flex cursor-pointer items-center bg-white hover:bg-[#FFF0F5]  -md rounded-2xl p-1 gap-4"
        >
          <div>
            <Image
              src={`${imageBaseUrl}/assets/menu_category/${toy?.image}`}
              alt={toy?.title}
              className="rounded-xl object-contain h-[80px] w-[80px] hover:mr-3 hover:scale-100 duration-500 transition-all"
              width={75}
              height={75}
              style={{ background: secondaryBg }}
            />
          </div>
          <div>
            <div className="flex gap-1 items-center mb-1">
            </div>
            <div className="text-gray-500 text-[18px] leading-[20px] font-light">{toy.title}</div>
            <div className="mt-1">
              
              <span className="font-bold text-[16px]" style={{ color: mainColor }}>
                {toy.price}<span className="text-[#A8A8A8] font-light"> Products</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopCategoriesSection;
