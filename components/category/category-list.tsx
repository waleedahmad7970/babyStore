"use client";
import React, { useRef, useState } from "react";
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
const sections: any[] = [
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Skin & Hair & Body",
    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
];
type SectionType = {
  title: string;
  items: string[];
};

const sections2: SectionType[] = [
  {
    title: "Baby Strollers & Prams",
    items: [
      "Strollers",
      "Double Strollers",
      "Travel Systems",
      "Carry Cots & Footmuffs",
      "Stroller Accessories",
      "Stroller Toys",
    ],
  },
  {
    title: "Car Seats & Boosters",
    items: ["Car Seats", "Booster Seats", "Car Seat Accessories"],
  },
  {
    title: "Baby Gears",
    items: ["Bouncers & Rockers", "Walkers", "Baby Carriers"],
  },
  {
    title: "Travel Essentials",
    items: ["Travel Bags - Suitcases"],
  },
  {
    title: "Baby Essentials",
    items: ["Baby Safety Products", "Baby Monitors", "Child Safety Essentials"],
  },
  {
    title: "Medicines & First Aids",
    items: [
      "Health Accessories",
      "Gates & Bed Rails",
      "Bath Safety",
      "Travel Safety",
    ],
  },
];

const nursingSections: SectionType[] = [
  {
    title: "Baby Room Furniture & Decors",
    items: [
      "Cribs & Bassinets",
      "Mattress & Sheets",
      "Sleeping Pods",
      "Blankets & Bedding",
      "Baby Furniture",
      "Playpens",
      "Nursery Centers",
    ],
  },
  {
    title: "Kids Room Furniture",
    items: [
      "Beds & Mattress",
      "Blankets & Bedding",
      "Kids Furniture",
      "Storages & Organize",
    ],
  },
  {
    title: "Room Decor & Accessories",
    items: [
      "Decor",
      "Lamps & Lighting",
      "Rugs & Playmats",
      "Wall Decor",
      "Accessories",
      "Canopy",
    ],
  },
];
const foodingSections: SectionType[] = [
  {
    title: "Bottle Feeding",
    items: [
      "Bottles",
      "Teats & Accessories",
      "Warmers & Sterilizers",
      "Milk Powder Dispenser",
      "Bottle Cleaning",
      "Bottle Holders",
      "Pacifiers & Holders",
    ],
  },
  {
    title: "Baby Food",
    items: ["Formula", "Purees", "Snacks", "Cereals", "Drinks"],
  },
  {
    title: "Meal-Time Essentials",
    items: [
      "Food Processors",
      "Bibs",
      "Dishes & Utensils",
      "Food Containers",
      "Sippers & Cups",
      "High Chairs & Boosters",
    ],
  },
  {
    title: "Nursing Care",
    items: [
      "Pillows & Supports",
      "Breast Feeding Accessories",
      "Breast Pumps",
      "Nursing Scarves & Burpies",
      "Breast Milk Storage",
    ],
  },
];
const diaperingSections: SectionType[] = [
  {
    title: "Diapers",
    items: [
      "Disposable Diapers",
      "Re-usable Diapers",
      "Diaper Liners & Inserts",
      "Diaper Rash Creams",
      "Adult Diapers",
    ],
  },
  {
    title: "Shop by Age",
    items: [
      "Size 1 (Newborn)",
      "Size 2 (Small)",
      "Size 3 (Medium)",
      "Size 4 (Large)",
      "Size 5 (XL)",
      "Size 6 (XXL)",
    ],
  },
  {
    title: "Changing Tables",
    items: [
      "Diaper Changing",
      "Changing Tables",
      "Reusable Changing Mats",
      "Disposable Changing Mats",
      "Diaper Bags",
      "Diaper Caddy",
    ],
  },
  {
    title: "Shop by Brand",
    items: [],
  },
  {
    title: "Wipes",
    items: ["Disposable Wipes", "Re-usable Wipes", "Wipe Cases"],
  },
  {
    title: "Potty Training",
    items: ["Potties", "Toilet Seat Covers", "Step Stools"],
  },
  {
    title: "Diaper Disposal",
    items: ["Diaper Bins & Disposal Systems", "Refills & Nappy bags"],
  },
];
const toySections: SectionType[] = [
  {
    title: "Toddler & Kids Toys",
    items: [
      "Dolls & Accessories",
      "Action Figures",
      "Play Time",
      "Tents & Teepees",
      "Puppets",
      "Soft Toys",
      "Light & Musical Toys",
      "Dollhouses & Accessories",
    ],
  },
  {
    title: "Baby Toys",
    items: [
      "Rattles",
      "Teethers",
      "Playmats & Gym",
      "Crib Toys",
      "Light & Musical Toys",
      "Jumpers & Swings",
      "Activity Center",
      "Bath Toys",
      "Play Fence",
      "Squeeze Toys",
    ],
  },
  {
    title: "Push, Pull & Vehicles",
    items: [
      "Push-pull toys",
      "Stacking & Sorting Toys",
      "Guns & Action Toys",
      "Vehicles",
      "Playtables",
    ],
  },
  {
    title: "Art & Craft",
    items: ["Doughs, Slimes & Sand"],
  },
  {
    title: "Wooden & Building Toys",
    items: [
      "Wooden Toys",
      "Building Sets & Blocks",
      "Board Games & Puzzles",
      "Blocks",
    ],
  },
  {
    title: "Educational & Activity Toys",
    items: [
      "Development Toys",
      "Educational Toys",
      "Activity Toys",
      "Reward Charts",
      "Science Games",
      "Montessori & Early learning",
      "Cause & Effect Toys",
    ],
  },
  {
    title: "Role Play",
    items: [
      "Costumes",
      "Pretend Toys",
      "Fashion & Beauty",
      "Kitchen Toys",
      "Work Bench Toys",
    ],
  },
];
const skincareSections: SectionType[] = [
  {
    title: "Bath",
    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
      "Sponges & Bath Mittens",
    ],
  },
  {
    title: "Baby Grooming & Hygiene",
    items: [
      "Skin & Hair & Body",
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Travel Kits",
      "Eczema Care",
    ],
  },
];
const outdoorSections: SectionType[] = [
  {
    title: "Electric Rideons",
    items: [
      "Electric Jeeps, Trucks & Buggies",
      "Electric Quad Bikes",
      "Electric Cars",
      "Electric Motor Bikes",
      "Go Karts & Drifters",
    ],
  },
  {
    title: "Manual Rideons",
    items: ["Manual Ride-Ons", "Push Cars & Wagons"],
  },
  {
    title: "Bikes",
    items: [
      "Balance Bikes",
      "Bicycles",
      "Helmets",
      "Protective Gear",
      "Accessories",
    ],
  },
  {
    title: "Trikes",
    items: ["Trikes", "Tricycle", "Stroller Trike"],
  },
  {
    title: "Scooters",
    items: ["Manual Scooters", "Electric Scooters"],
  },
  {
    title: "Backyard Playsets",
    items: [
      "Slides, Swings & Seesaws",
      "Trampolines",
      "Playhouses & Tents",
      "Inflatables",
    ],
  },
  {
    title: "Water & Beach Play",
    items: [
      "Sandboxes & Water Playtables",
      "Swimming Pools",
      "Beach & Water Toys",
      "Floats & Swim Rings",
      "Swimming Aids",
    ],
  },
  {
    title: "Skating",
    items: ["Roller Skates", "Skate Boards"],
  },
  {
    title: "Outdoor Toys",
    items: ["Outdoor Games", "Sports Toys", "Balls", "Outdoor Play Equipments"],
  },
];
const schoolEssentialsSections: SectionType[] = [
  {
    title: "School Supplies",
    items: [
      "School Bags & Backpacks",
      "Water Bottles",
      "Lunch Box",
      "Lunch Bags",
      "Drawing & Coloring",
      "Craft Activity",
      "Art Table",
    ],
  },
  {
    title: "Books",
    items: [
      "Activity Books",
      "Reading Books",
      "Sticker Books",
      "Learning Guides",
      "Writing Books",
      "Arabic Books",
    ],
  },
];
const maternitySections: SectionType[] = [
  {
    title: "Maternity Clothes",
    items: [
      "Maternity Dress",
      "Maternity Tops",
      "Maternity Bottom Wear",
      "Maternity Lingerie",
      "Maternity Swimwear",
      "Shapewear",
    ],
  },
  {
    title: "Mommy Skincare",
    items: ["Nipple Creams", "Stretch Mark Creams"],
  },
  {
    title: "Mommy Bathcare & Hygiene",
    items: [
      "Shampoos & Conditioners",
      "Body Wash & Shower Gel",
      "Oral Care",
      "Scrubs",
      "Soaps",
      "Face Wash & Masks",
    ],
  },
  {
    title: "Mommy Essentials",
    items: ["Maternity Belts & Pillows"],
  },
];
const partySections: SectionType[] = [
  {
    title: "Special Occasions",
    items: [
      "Christmas",
      "Halloween",
      "Ramadan",
      "Mother's Day",
      "Valentines Day",
    ],
  },
  {
    title: "Decorations",
    items: [
      "Balloons & Ribbons",
      "Poppers",
      "Confetti",
      "Table Top Decorations",
      "Banners & Garlands",
      "Buntings",
      "Wall decorations",
      "Party Decorations",
    ],
  },
  {
    title: "Party Supplies",
    items: [
      "Party Accessories",
      "Party Favors",
      "Party Bags & Boxes",
      "Games",
      "Cards",
      "Headware & Photo Booth Props",
      "Candles & Lights",
      "Cooking Accessories",
    ],
  },
  {
    title: "Tableware",
    items: ["Cups", "Cutlery", "Table Covers", "Napkins", "Plates & Bowls"],
  },
  {
    title: "Gifts",
    items: [
      "Baby Gifts",
      "Toddler Gifts",
      "Parents Gifts",
      "Gift Wraps & Bags",
    ],
  },
];
const clothingSections: SectionType[] = [
  {
    title: "Baby (0-2yrs)",
    items: [
      "Onsies - Overalls - Rompers",
      "Tops",
      "Bottoms",
      "Sets",
      "Sleeping bags",
      "Dresses",
      "Swaddles",
    ],
  },
  {
    title: "Boy Clothes (3-8yrs)",
    items: ["Shirts & T-Shirts", "Footwear", "Shoes", "Leg warmers & Socks"],
  },
  {
    title: "Girl Clothes (3-8yrs)",
    items: ["Dresses", "Tops & Tees", "Bottom Wear", "Night wear"],
  },
  {
    title: "Swimwear",
    items: ["Swim wear - Girls", "Swim wear - Boys", "Swim accessories"],
  },
  {
    title: "Accessories",
    items: [
      "Gloves & Mittens",
      "Head bands",
      "Caps & Hats",
      "Sunglasses",
      "Watches",
      "Knee Protectors",
      "Belts & Ties",
      "Hand Bags",
      "Jewelry",
      "Hair Accessories",
      "Make Up",
    ],
  },
];

const menuImages = [menu1, menu2];
const menuBrands = [brand1, brand2, brand3, brand4, brand5, brand6];

export default function CategoryList() {
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [previousId, setPreviousId] = useState<number | null>(null);
  const [animationDirection, setAnimationDirection] = useState<string>("");

  // ds

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

  console.log("hover id", hoveredId);
  return (
    <div className="group relative mb-0 hidden w-full px-4 md:block md:px-0 md:pb-6">
      {/* {hoveredId !== null && (
        <div
          onMouseEnter={() => {
            setHoveredId(null);
            setAnimationDirection("");
          }}
          className="fixed inset-0 z-30 bg-black/50 transition duration-300"
        ></div>
      )} */}
      <div className="cus-container no-scrollbar group relative z-30 mx-auto flex justify-between overflow-x-auto">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`relative ${index === categories?.length - 1 ? "" : "pr-[14px]"}`}
            onMouseEnter={() => {
              if (hoverTimer.current) clearTimeout(hoverTimer.current);
              handleHover(category.id);
            }}
            onMouseLeave={() => {
              hoverTimer.current = setTimeout(() => {
                setHoveredId(null);
                setAnimationDirection("");
              }, 300);
            }}
          >
            <CategoryCard
              paraClassName={`${hoveredId === category.id ? "text-[#F82D8B99]" : "text-[#1A1718]"}`}
              {...category}
              ImgClass="w-[82px] h-[82px]"
              // hoveredId={hoveredId}
              categoryId={category.id}
            />
          </div>
        ))}
      </div>
      <div className="relative">
        <div
          onMouseEnter={() =>
            hoverTimer.current && clearTimeout(hoverTimer.current)
          }
          style={{
            boxShadow: "-14px 14px 33px 0px rgba(0, 0, 0, 0.09)",
          }}
          className="animate-scale-in absolute top-[-8px] right-0 left-0 z-40 mx-auto mt-2 hidden w-full max-w-[1390px] origin-top scale-200 transform overflow-hidden rounded-[8px] bg-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:block group-hover:scale-100 group-hover:opacity-100"
        >
          {hoveredId && (
            <div
              key={hoveredId}
              className={`top-[20px] right-0 left-0 z-30 mx-auto hidden bg-white px-[41px] py-6 md:block ${animationDirection}`}
            >
              {hoveredId === 1 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-3 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {sections2
                          .slice(colIndex * 3, colIndex * 3 + 3)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
              )}
              {hoveredId === 2 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-3 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {nursingSections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 3 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-3 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {foodingSections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 4 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-4 gap-[36.88px]">
                    {[0, 1, 2, 3].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {diaperingSections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 5 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-3 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {toySections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 6 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-3 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {skincareSections
                          .slice(colIndex * 1, colIndex * 1 + 1)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 7 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-4 gap-[36.88px]">
                    {[0, 1, 2, 3, 4].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {outdoorSections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 8 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-4 gap-[36.88px]">
                    {[0, 1, 2, 3, 4].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {schoolEssentialsSections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 9 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-4 gap-[36.88px]">
                    {[0, 1, 2, 3, 4].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {maternitySections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 10 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-4 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {partySections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
              {hoveredId === 11 && (
                <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
                  <div className="grid grid-cols-4 gap-[36.88px]">
                    {[0, 1, 2].map((colIndex) => (
                      <div
                        key={colIndex}
                        className="flex w-full max-w-[232.81px] flex-col gap-6"
                      >
                        {clothingSections
                          .slice(colIndex * 2, colIndex * 2 + 2)
                          .map((section, i) => (
                            <div key={i} className="w-[232px] max-w-[232px]">
                              <h2 className="mb-[13px] max-w-[831.3px] text-[15px] leading-[24px] font-medium text-[#1F1F1F]">
                                {section.title}
                              </h2>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {section.items.map((item: any, idx: number) => (
                                  <li
                                    key={idx}
                                    className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
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
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
