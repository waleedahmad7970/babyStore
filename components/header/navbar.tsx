"use client";
import React, { useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import CartPanel from "../cart/cart-panel";
import AddToCard from "../model/add-to-card";
import MobileDrawer from "../drawer/mobile-menu";
import { logo } from "@/public/assets/brands";
import { userMenu } from "@/static/static";
import { useClickOutside } from "@/hooks/useClickOutside";
import { globalStateActions } from "@/store/slices/globalStates";
import { usePreventBodyScroll } from "@/hooks/preventBodyScroll";
import { basket, menu, search } from "@/public/assets/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface NavbarProps {
  categories?: string[];
}

const Navbar: React.FC<NavbarProps> = ({
  categories = ["All Categories", "Toys", "Clothing", "Accessories"],
}) => {
  const cartRef = useRef<null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();
  const [showCart, setShowCart] = useState(false);
  const [showCartMob, setShowCartMob] = useState(false);
  const { addToCartModel } = useAppSelector((state) => state.cart);
  const { isMobMenu } = useAppSelector((state) => state.globalStates);
  usePreventBodyScroll(showCartMob);
  useClickOutside(cartRef, () => {
    setShowCart(false);
  });
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCart(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCart(false);
    }, 1000);
  };
  const handleToggleMobCart = () => {
    setShowCartMob((prev) => !prev);
  };
  const menuHandler = () => {
    dispatch(globalStateActions.setMobileMenu(true));
  };
  const menuHandlerClose = () => {
    dispatch(globalStateActions.setMobileMenu(false));
  };
  return (
    <nav className="mx-auto block py-[14px] md:py-7">
      <div className="block sm:hidden">
        <MobileDrawer isOpen={isMobMenu} close={menuHandlerClose} />
      </div>
      <div className="cus-container relative mx-auto flex flex-col items-center justify-between gap-[13px] md:flex-row md:gap-2 lg:gap-5">
        {/* cart model */}
        <div
          className={`fixed top-[84px] right-0 z-[100] h-full max-h-[530px] w-full max-w-[320px] transform bg-white shadow-lg transition-transform duration-300 sm:hidden ${
            showCartMob ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <CartPanel />
        </div>
        {showCart && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() =>
              (timeoutRef.current = setTimeout(() => {
                setShowCart(false);
              }, 300))
            }
            className="absolute top-[30px] right-[0px] z-50 hidden w-full max-w-[320px] sm:top-[60px] sm:block"
          >
            <CartPanel />
          </div>
        )}

        {/* Logo and Mobile Icons */}
        <div className="flex w-full justify-between md:w-auto md:items-center">
          <Link href={`/`} className="block text-inherit no-underline">
            <div className="flex items-center justify-between gap-5">
              <Image
                onClick={() => menuHandler()}
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
          </Link>
          <Image
            onClick={handleToggleMobCart}
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
              onMouseEnter={() => index === 1 && handleMouseEnter()}
              onMouseLeave={() => index === 1 && handleMouseLeave()}
              key={`user-menu-${index}`}
              src={icon}
              alt={`User menu icon ${index}`}
              className="h-8 w-8 cursor-pointer"
            />
          ))}
        </div>
      </div>
      {addToCartModel && <AddToCard addToCartModel={addToCartModel} />}
    </nav>
  );
};

export default Navbar;
