"use client";
import React, { useState } from "react";

import Image from "next/image";
import { userMenu } from "@/static/static";
import { basket, menu, search } from "@/public/assets/icons";
import { logo } from "@/public/assets/brands";
import MobileDrawer from "../drawer/mobile-menu";

interface NavbarProps {
  categories?: string[];
}

const Navbar: React.FC<NavbarProps> = ({
  categories = ["All Categories", "Toys", "Clothing", "Accessories"],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mx-auto block py-[14px] sm:hidden md:py-7">
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="cus-container mx-auto flex flex-col items-center justify-between gap-[13px] md:flex-row md:gap-2 lg:gap-5">
        {/* Logo and Mobile Icons */}
        <div className="flex w-full justify-between md:w-auto md:items-center">
          <div className="flex items-center justify-between gap-5">
            <Image
              onClick={menuHandler}
              src={menu}
              width={32}
              height={32}
              alt="Menu"
              className="block md:hidden"
            />
            <Image
              src={logo}
              alt="Logo"
              className="h-[32px] w-[120px] md:h-[58px] md:w-[213px]"
            />
          </div>
          <Image
            width={32}
            height={32}
            src={basket}
            alt="Basket"
            className="block md:hidden"
          />
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-[967px] items-center rounded-[50px] bg-[#FFF0F5] py-[9px] pr-[10px] pl-8 md:py-[14px] md:pr-[10px] md:pl-8">
          <select
            className="mr-[10px] hidden bg-transparent pr-[10px] text-[14px] font-medium text-[#1A1718] outline-none md:block"
            aria-label="Category selector"
          >
            {categories.map((category, index) => (
              <option key={`category-${index}`} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            style={{
              color: "rgba(26, 23, 24, 0.50)",
            }}
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-transparent !ps-0 pl-5 text-[14px] leading-[24px] font-medium outline-none md:ps-0"
            aria-label="Search input"
          />
          <Image src={search} alt="Search" className="h-8 w-8" />
        </div>

        {/* Desktop User Menu */}
        <div className="hidden w-[136px] items-center justify-between gap-1 md:flex">
          {userMenu.map((icon, index) => (
            <Image
              key={`user-menu-${index}`}
              src={icon}
              alt={`User menu icon ${index}`}
              className="h-8 w-8"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
