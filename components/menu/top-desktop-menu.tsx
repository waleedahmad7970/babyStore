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
      className="relative bg-[#E7448C] text-white font-medium text-sm z-50 group"
      onMouseLeave={() => setActiveMenu(null)} // Prevent flicker
    >
      <div className="cus-container mx-auto flex justify-start gap-2 relative">
        {menuData.map((menu) => {
          const subMenu = menu.subMenu ?? defaultSubMenu; // every menu has submenu now
          return (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.name)}
            >
              <button
                className={`flex items-center gap-1 py-3 px-3 font-bold text-[16px] transition-colors duration-200 ${
                  activeMenu === menu.name ? "bg-pink-700" : "hover:bg-pink-700"
                }`}
              >
                {menu.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
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
        className={`absolute left-1/2 top-full -translate-x-1/2 w-full bg-white text-gray-800 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          activeMenu
            ? "opacity-100 translate-y-0 visible scale-100"
            : "opacity-0 -translate-y-3 invisible scale-95"
        }`}
      >
        {activeMenu && (
          <div className="cus-container mx-auto p-6 flex gap-10 min-h-[400px]">
            {(menuData.find((m) => m.name === activeMenu)?.subMenu ??
              defaultSubMenu
            ).map((col, i) => (
              <div key={i} className="min-w-[200px]">
                <h4 className="font-semibold mb-3 text-gray-900">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm hover:text-[#E7448C] cursor-pointer transition"
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
