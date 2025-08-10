"use client";
import React, { useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import CartPanel from "../cart/cart-panel";
import AddToCard from "../model/add-to-card";
import MobileDrawer from "../drawer/mobile-menu";
import { logo } from "@/public/assets/brands";
import { userMenu } from "@/static/static";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { dashboardAction } from "@/store/slices/dashboard.slice";
import { globalStateActions } from "@/store/slices/globalStates";
import { usePreventBodyScroll } from "@/hooks/preventBodyScroll";
import { basket, menu, search } from "@/public/assets/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  InstantSearch,
  Hits,
  useSearchBox,
  Highlight,
} from "react-instantsearch";
import { searchClient } from "@/config/config";

interface NavbarProps {
  categories?: string[];
}

const UnAuthNavbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartRef = useRef<null>(null);
  const { isMobMenu } = useAppSelector((state) => state.globalStates);
  const { wishList = [] } = useAppSelector((state) => state.user);
  const { cartProducts = [], addToCartModel } = useAppSelector(
    (state) => state.cart,
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showCartMob, setShowCartMob] = useState(false);

  usePreventBodyScroll(showCartMob);
  useClickOutside(cartRef, () => {
    setShowCart(false);
  });
  const menuHandler = () => {
    dispatch(globalStateActions.setMobileMenu(true));
  };
  const menuHandlerClose = () => {
    dispatch(globalStateActions.setMobileMenu(false));
  };
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
  const naviageToProduct = (id: number) => {
    router.push(`product/${id}`);
  };
  const Hit = ({ hit }: any) => (
    // custom made by me
    // <div className="hit-item relative flex w-full justify-start gap-6 border-b-1 border-[#CDCDCD]/30 p-2">
    //   <Image
    //     src={hit?.thumbnail}
    //     width={90}
    //     height={90}
    //     alt="s"
    //     className="h-[90px] min-w-[90px] cursor-pointer rounded-[6px] border border-[#CDCDCD]"
    //   />
    //   <div className="flex w-full justify-between">
    //     <div className="flex w-full cursor-pointer flex-col justify-start gap-1">
    //       <h4 className="font-inter text-left text-[18px] leading-[18.73px] font-medium text-[#1A1718]">
    //         {/* <Highlight
    //           attribute="title"
    //           hit={hit}
    //           highlightedTagName="span"
    //           classNames={{
    //             highlighted: "text-pink-600 font-semibold",
    //           }}
    //         /> */}
    //         {hit?.title}
    //       </h4>
    //       <h4 className="font-inter text-left text-[16px] leading-[18px] font-normal text-[#1A1718]">
    //         {hit?.category}
    //       </h4>
    //       <h4 className="font-inter text-left text-[16px] leading-[18px] font-medium text-[#1F1F1F80]">
    //         {hit?.price} AED
    //       </h4>
    //     </div>
    //     <div className="flex justify-end gap-1">
    //       {hit?.images?.map((img: string, index: number) => {
    //         return (
    //           <Image key={index} src={img} alt="img" width={80} height={80} />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="hit-item relative flex w-full cursor-pointer justify-start gap-6 border-b-1 border-[#CDCDCD]/30 p-2 hover:bg-[#FFF0F5]">
      <h4
        onClick={() => naviageToProduct(hit?.id)}
        className="font-inter py-1 text-left text-[18px] leading-[18.73px] font-medium text-[#1A1718]"
      >
        <Highlight
          attribute="title"
          hit={hit}
          highlightedTagName="span"
          classNames={{
            highlighted: "text-pink-600 font-semibold",
          }}
        />
      </h4>
    </div>
  );
  const CustomSearchInput = () => {
    const { query, refine } = useSearchBox();

    return (
      <input
        type="text"
        value={query}
        onChange={(e) => refine(e.target.value)}
        placeholder="What are you looking for?"
        className="w-full bg-transparent text-[14px] leading-[24px] font-medium text-black outline-none placeholder:text-[#1A171880]"
        style={{
          color: "rgba(26, 23, 24, 0.50)",
        }}
        aria-label="Search input"
      />
    );
  };
  const ConditionalHits = () => {
    const { query } = useSearchBox();
    const isTyping = query.trim().length > 0;
    if (!isTyping) return null;

    return (
      <div className="no-scrollbar absolute top-14 right-0 left-0 z-40 mt-4 max-h-[440px] overflow-y-auto rounded-[8px] bg-white px-6 py-3 shadow-md">
        <Hits hitComponent={Hit} />
      </div>
    );
  };
  const SearchBoxWithResults = () => {
    return (
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_INDEX}
      >
        <CustomSearchInput />
        <ConditionalHits />
      </InstantSearch>
    );
  };
  const handleRedirectionUserMenu = (index: number) => {
    if (index === 1) router.push("/dashboard");
    return dispatch(dashboardAction.setActiveDashboardTab("Wishlist"));
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
        {showCart && cartProducts?.length > 0 && (
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
          <SearchBoxWithResults />
          <Image src={search} alt="Search" className="h-8 w-8" />
        </div>

        {/* Desktop User Menu */}

        <div className="hidden w-[136px] items-center justify-between gap-1 md:flex">
          {userMenu.map((icon, index) => {
            const isSecondLast = index === userMenu.length - 2;
            const isLast = index === userMenu.length - 1;

            // Replace these with your actual dynamic counts
            const badgeCountSecondLast = wishList?.length; // e.g., wishList.length
            const badgeCountLast = cartProducts?.length; // e.g., cart.length

            if (isSecondLast || isLast) {
              const badgeCount = isLast ? badgeCountLast : badgeCountSecondLast;

              return (
                <div key={`user-menu-${index}`} className="relative">
                  <Image
                    onMouseEnter={() => index === 2 && handleMouseEnter()}
                    onMouseLeave={() => index === 2 && handleMouseLeave()}
                    onClick={() => handleRedirectionUserMenu(index)}
                    src={icon || "icon"}
                    alt={`User menu icon ${index}`}
                    className="h-8 w-8 cursor-pointer"
                  />
                  {badgeCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#F82D8B] text-[10px] font-bold text-white">
                      {badgeCount}
                    </span>
                  )}
                </div>
              );
            }

            return (
              <Image
                key={`user-menu-${index}`}
                onMouseEnter={() => index === 2 && handleMouseEnter()}
                onMouseLeave={() => index === 2 && handleMouseLeave()}
                onClick={() => handleRedirectionUserMenu(index)}
                src={icon || "icon"}
                alt={`User menu icon ${index}`}
                className="h-8 w-8 cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      {addToCartModel && <AddToCard addToCartModel={addToCartModel} />}
    </nav>
  );
};

export default UnAuthNavbar;
