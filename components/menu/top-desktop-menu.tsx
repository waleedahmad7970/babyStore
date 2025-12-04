"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SubCategory {
  title: string;
  items: string[];
}

interface MenuItem {
  name: string;
  subMenu?: SubCategory[];
}

const defaultSubMenu: SubCategory[] = [
  {
    title: "Shop by Category",
    items: [
      "Category One",
      "Category Two",
      "Category Three",
      "Category Four",
      "Category Five",
    ],
  },
  {
    title: "Popular Brands",
    items: ["Brand One", "Brand Two", "Brand Three", "Brand Four"],
  },
];

const menuData: MenuItem[] = [
  {
    name: "FEEDING",
    subMenu: [
      {
        title: "Shop by Category",
        items: [
          "Breast Feeding",
          "Feeding Bottles & Teats",
          "Sippers & Cups",
          "Dishes & Utensils",
          "Teethers & Pacifiers",
          "Sterilizers & Warmers",
          "Feeding Accessories",
          "Food Processors & Containers",
          "Baby Food & Infant Formula",
        ],
      },
      {
        title: "Popular Brands",
        items: [
          "Sunshine",
          "Avent",
          "Pigeon",
          "Tommee Tippee",
          "Little Sparks",
          "Lovi",
          "Canpol Babies",
        ],
      },
    ],
  },
  { name: "TOYS" },
  { name: "DIAPERING" },
  { name: "NURSERY" },
  { name: "MOMS" },
  { name: "SCHOOL" },
  { name: "BIRTHDAY" },
  { name: "SALE" },
  { name: "ARRIVAL" },
  { name: "WINTER" },
  { name: "CLOTHS" },
  { name: "PARTY" },
];

export default function TopMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav
      className="group relative z-50 hidden bg-[#E7448C] text-sm font-medium text-white md:block"
      onMouseLeave={() => setActiveMenu(null)} // Prevent flicker
    >
      <div className="cus-container relative mx-auto flex justify-start gap-2">
        {menuData.map((menu) => {
          const subMenu = menu.subMenu ?? defaultSubMenu; // every menu has submenu now
          return (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.name)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-3 text-[16px] font-bold transition-colors duration-200 ${
                  activeMenu === menu.name ? "bg-pink-700" : "hover:bg-pink-700"
                }`}
              >
                {menu.name}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeMenu === menu.name ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Dropdown Container */}
      <div
        className={`absolute top-full left-1/2 w-full -translate-x-1/2 bg-white text-gray-800 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          activeMenu
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        }`}
      >
        {activeMenu && (
          <div className="cus-container mx-auto flex min-h-[400px] gap-10 p-6">
            {(
              menuData.find((m) => m.name === activeMenu)?.subMenu ??
              defaultSubMenu
            ).map((col, i) => (
              <div key={i} className="min-w-[200px]">
                <h4 className="mb-3 font-semibold text-gray-900">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer text-sm transition hover:text-[#E7448C]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
