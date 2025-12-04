import { imageBaseUrl } from "@/config/config";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { AbbreviateNumber } from "@/helpers/helper.fucntions";
const mainColor = "#E7448A";
const secondaryBg = "#FFF0F5";

const toys = [
  {
    image: "Feeding (1).png1757069041.png",
    title: "Feeding",
    price: 31232,
    prevPrice: null,
  },
  {
    image: "Frame_39-removebg-preview.png1758780672.png",
    title: "Skin Care",
    price: 42342,
    prevPrice: 60,
  },
  {
    image: "Nursery 1 (1).png1757069256.png",
    title: "Nursery",
    price: 7430,
    prevPrice: null,
  },
  {
    image: "Stroller Clean.H03 1 (4).png1757069102.png",
    title: "Diapers",
    price: 8000,
    prevPrice: null,
  },
  {
    image: "Stroller Clean.H03 1 (5).png1757069352.png",
    title: "Gears & Safety",
    price: 55340,
    prevPrice: null,
  },
  {
    image: "86x90 - 5 1.png1757069370.png",
    title: "Toys & Games",
    price: 50000,
    prevPrice: null,
  },
  {
    image: "Outdoor (2).png1757069528.png",
    title: "Outdoor",
    price: 3000,
    prevPrice: 60,
  },
  {
    image: "Stroller Clean.H03 1 (6).png1757069622.png",
    title: "School Essentials",
    price: 4300,
    prevPrice: null,
  },
  {
    image: "Mommy 1 (1).png1757069660.png",
    title: "Mommy & Me",
    price: 3000,
    prevPrice: 60,
  },
  {
    image: "Rectangle 4247 (2).png1757069677.png",
    title: "Party Supplies",
    price: 7000,
    prevPrice: null,
  },
  {
    image: "Rectangle 4247 (3).png1757069724.png",
    title: "Cloths & Accessories",
    price: 8076,
    prevPrice: null,
  },
  {
    image: "% (1).png1757070096.png",
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
const mobileChunks = chunkArray(toys, 6);

const TopCategoriesSection: React.FC = () => (
  <div
    className="cus-container flex flex-col flex-wrap gap-3 pt-[50px] pb-[100px] md:gap-8 xl:flex-row"
    style={{ background: "#fff" }}
  >
    {/* Left Banner */}
    <div
      className="flex flex-col items-center justify-center rounded-[8px] p-2 text-[#fff] md:min-h-[350px] md:rounded-2xl md:p-10 xl:w-[430px]"
      style={{
        background: mainColor,
      }}
    >
      <span className="hidden text-[50px] leading-[45px] sm:text-[68px] sm:leading-[60px] md:block">
        Explore With Our Categories
      </span>
      <span className="font-poppins text-[24px] md:mt-2 md:mb-3 md:text-4xl">
        New & Trending
      </span>
      <button
        className="mt-6 hidden cursor-pointer rounded-full px-10 py-3 text-xl font-bold shadow-2xl hover:mr-3 md:block"
        style={{ background: "#fff0f5", color: mainColor }}
      >
        Explore All
      </button>
    </div>
    {/* Mobile / Tablet Slider */}
    <div className="block w-full md:hidden">
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {mobileChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-3 gap-1">
              {chunk.map((toy, idx) => (
                <div
                  key={idx}
                  className="flex cursor-pointer flex-col items-center gap-2 rounded-2xl bg-white hover:bg-[#FFF0F5] md:p-3"
                >
                  <Image
                    src={`${imageBaseUrl}/assets/menu_category/${toy?.image}`}
                    alt={toy?.title}
                    className="h-[80px] w-[80px] rounded-xl object-contain"
                    width={75}
                    height={75}
                    style={{ background: secondaryBg }}
                  />
                  <div className="text-center">
                    <div className="text-[clamp(0.9rem,2vw,1rem)] font-light text-gray-500">
                      {toy.title}
                    </div>
                    <div
                      className="mt-1 text-[clamp(1rem,2vw,1.2rem)] font-bold"
                      style={{ color: mainColor }}
                    >
                      {AbbreviateNumber(toy.price)}{" "}
                      <span className="hidden font-light text-[#A8A8A8] md:block">
                        Products
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="hidden grid-cols-3 gap-2 md:grid md:flex-1">
      {toys.map((toy, idx) => (
        <div
          key={idx}
          className="-md flex cursor-pointer items-center gap-4 rounded-2xl bg-white p-1 hover:bg-[#FFF0F5]"
        >
          <div>
            <Image
              src={`${imageBaseUrl}/assets/menu_category/${toy?.image}`}
              alt={toy?.title}
              className="h-[80px] w-[80px] rounded-xl object-contain transition-all duration-500 hover:mr-3 hover:scale-100"
              width={75}
              height={75}
              style={{ background: secondaryBg }}
            />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1"></div>
            <div className="text-[18px] leading-[20px] font-light text-gray-500">
              {toy.title}
            </div>
            <div className="mt-1">
              <span
                className="text-[16px] font-bold"
                style={{ color: mainColor }}
              >
                {toy.price}
                <span className="font-light text-[#A8A8A8]"> Products</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopCategoriesSection;
