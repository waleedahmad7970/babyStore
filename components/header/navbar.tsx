"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import CartPanel from "../cart/cart-panel";
import AddToCard from "../model/add-to-card";
import MobileDrawer from "../drawer/mobile-menu";
import { logo } from "@/public/assets/brands";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { globalStateActions } from "@/store/slices/globalStates";
import { usePreventBodyScroll } from "@/hooks/preventBodyScroll";
import { basketBag, heart, menu, search, user } from "@/public/assets/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  InstantSearch,
  Hits,
  useSearchBox,
  Highlight,
} from "react-instantsearch";
import { searchClient } from "@/config/config";
import TrackVisitedRoutes from "../visitedPath/store..visited";
import Button from "../button/button";
import { userActions } from "@/store/slices/auth.slice";
import authService from "@/services/auth.service";
import productServices from "@/services/product.service";

interface NavbarProps {
  categories?: string[];
}
type SearchBoxWithResultsProps = {
  onFocus?: () => void;
  onBlur?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartRef = useRef<null>(null);
  const loginRef = useRef<null>(null);

  const { isMobMenu } = useAppSelector((state) => state.globalStates);
  const { wishList = [], registerSessionId } = useAppSelector(
    (state) => state.user,
  );
  const { cartProducts = [], addToCartModel } = useAppSelector(
    (state) => state.cart,
  );
  const { isSearchBarOpen } = useAppSelector((state) => state.globalStates);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCartMob, setShowCartMob] = useState(false);
  const totalQuantity = cartProducts?.reduce(
    (sum: any, item: any) => sum + item?.quantity,
    0,
  );

  useEffect(() => {
    productServices.getCategories();
    authService.getUserProfile(registerSessionId);
  }, [registerSessionId]);

  useEffect(() => {
    router.prefetch("/cart");
    router.prefetch("/checkout");

    router.prefetch("/dashboard");
  });

  usePreventBodyScroll(showCartMob);
  // useClickOutside(cartRef, () => {
  //   setShowCart(false);
  // });
  useClickOutside(cartRef, () => {
    setShowCartMob(false);
  });
  useClickOutside(loginRef, () => {
    setShowLogin(false);
  });
  const menuHandler = () => {
    dispatch(globalStateActions.setMobileMenu(true));
  };
  const menuHandlerClose = () => {
    dispatch(globalStateActions.setMobileMenu(false));
  };
  const handleMouseEnter = () => {
    setShowLogin(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCart(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCart(false);
    }, 1000);
  };
  const handleMouseEnterLogin = () => {
    setShowCart(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowLogin(true);
  };
  const handleMouseLeaveLogin = () => {
    timeoutRef.current = setTimeout(() => {
      setShowLogin(false);
    }, 1000);
  };
  const handleToggleMobCart = () => {
    setShowCartMob((prev) => !prev);
  };
  const naviageToProduct = (id: number) => {
    router.push(`product/${id}`);
  };
  const Hit = ({ hit }: any) => (
    <div className="hit-item relative flex w-full cursor-pointer justify-start gap-2 border-b-1 border-[#CDCDCD]/30 p-2 hover:bg-[#FFF0F5]">
      <Image
        width={24}
        height={24}
        src={search}
        alt="Search"
        className="relative h-6 w-6 min-w-6"
      />
      <h4
        onClick={() => naviageToProduct(hit?.id)}
        className="font-inter py-1 text-left text-[14px] leading-[18.73px] font-medium text-[#1A1718]"
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
  const SearchBoxWithResults = (
    {
      // onFocus,
      // onBlur,
    }: SearchBoxWithResultsProps,
  ) => {
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

  const handleLogout = () => {
    dispatch(userActions.clearUser());
    dispatch(userActions.setRegisterSessionId(""));
    router.push("/");
  };

  return (
    <nav className="mx-auto block py-[14px] md:py-7">
      <TrackVisitedRoutes />
      <div className="block sm:hidden">
        <MobileDrawer isOpen={isMobMenu} close={menuHandlerClose} />
      </div>
      <div className="cus-container relative mx-auto flex flex-col items-center justify-between gap-[13px] md:flex-row md:gap-2 lg:gap-5">
        {/* cart model */}
        {/* <div
          className={`fixed top-[84px] right-0 z-[100] h-full max-h-[530px] w-full max-w-[320px] transform bg-white shadow-lg transition-transform duration-300 sm:hidden ${
            showCartMob ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <CartPanel />
        </div> */}
        <div
          className={`blcok fixed top-0 right-0 bottom-0 left-0 z-[100] flex w-full transform justify-end bg-transparent shadow-lg transition-transform duration-300 sm:hidden ${showCartMob ? "translate-x-0" : "translate-x-full"} `}
        >
          <div
            ref={cartRef}
            className={`right-0 z-[100] mt-[84px] max-h-[530px] w-full max-w-[320px] transform bg-white shadow-lg transition-transform duration-300 sm:hidden ${
              showCartMob ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <CartPanel />
          </div>
        </div>
        {showLogin && (
          <div
            onMouseEnter={handleMouseEnterLogin}
            onMouseLeave={() =>
              (timeoutRef.current = setTimeout(() => {
                setShowLogin(false);
              }, 300))
            }
            className="absolute top-[30px] right-[90px] z-50 hidden w-full max-w-[200px] sm:top-[70px] sm:block"
          >
            {!registerSessionId ? (
              <div className="rounded-[6px relative w-full">
                {/* <div className="absolute top-0 right-0 left-0 h-0 w-0 border-r-[20px] border-b-[15px] border-l-[20px] border-r-transparent border-b-amber-400 border-l-transparent"></div> */}
                <div className="flex items-center justify-center rounded-[10px] bg-white">
                  <Button
                    size={30}
                    type={"submit"}
                    text={
                      <div className="flex items-center justify-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-log-in-icon lucide-log-in"
                        >
                          <path d="m10 17 5-5-5-5" />
                          <path d="M15 12H3" />
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        </svg>
                        Login
                      </div>
                    }
                    handler={() => router.push("/login")}
                    className="w-full cursor-pointer rounded-full bg-[#E7448C] py-3 text-[17px] font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:text-[20px]"
                  />
                </div>
                <div className="flex items-center justify-between rounded-[10px] bg-white">
                  <Button
                    size={30}
                    type={"submit"}
                    text={
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-user-round-plus-icon lucide-user-round-plus"
                        >
                          <path d="M2 21a8 8 0 0 1 13.292-6" />
                          <circle cx="10" cy="8" r="5" />
                          <path d="M19 16v6" />
                          <path d="M22 19h-6" />
                        </svg>
                        Sign up
                      </div>
                    }
                    handler={() => router.push("/signup")}
                    className="mt-2 w-full cursor-pointer rounded-full bg-[#E7448C] py-3 text-[17px] font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:text-[20px]"
                  />
                </div>
              </div>
            ) : (
              <Button
                size={30}
                type={"submit"}
                text={
                  <div className="flex items-center justify-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-log-in-icon lucide-log-in rotate-180"
                    >
                      <path d="m10 17 5-5-5-5" />
                      <path d="M15 12H3" />
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    </svg>
                    Logout
                  </div>
                }
                handler={() => handleLogout()}
                className="w-full cursor-pointer rounded-full bg-[#E7448C] py-3 text-[17px] font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:text-[20px]"
              />
            )}
          </div>
        )}
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
          <div className="flex items-center justify-between gap-5">
            <Image
              onClick={() => menuHandler()}
              src={menu}
              width={32}
              height={32}
              alt="Menu"
              className="block md:hidden"
            />
            <Link href={`/`} className="block text-inherit no-underline">
              <Image
                src={logo}
                alt="Logo"
                className="h-[32px] w-[120px] md:h-[58px] md:w-[213px]"
              />
            </Link>
          </div>
          <div className="relative">
            <Image
              onClick={handleToggleMobCart}
              width={32}
              height={32}
              src={basketBag}
              alt="Basket"
              className="block h-[30px] w-[24px] md:hidden"
            />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-1 right-[-6px] flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white md:hidden">
                {totalQuantity || 0}
              </span>
            )}
          </div>
        </div>

        {/* Search Bar old */}
        <div className="relative z-50 w-full max-w-[967px]">
          {/* Overlay */}
          {isSearchBarOpen && (
            <div
              onClick={() => {
                dispatch(globalStateActions.setSearchBarOpen(false));
              }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition duration-300"
            />
          )}

          {/* Search Bar */}
          <div
            className="relative z-50 flex w-full items-center rounded-[50px] bg-[#FFF0F5] py-[9px] pr-[10px] pl-8 md:py-[14px] md:pr-[10px] md:pl-8"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(globalStateActions.setSearchBarOpen(true));
            }}
          >
            <SearchBoxWithResults
              onBlur={() => {
                dispatch(globalStateActions.setSearchBarOpen(false));
              }}
            />
            <Image src={search} alt="Search" className="h-8 w-8" />
          </div>
        </div>

        {/* Desktop User Menu */}
        <div className="hidden w-[136px] items-center justify-between gap-1 md:flex">
          <div className="relative">
            <Image
              onClick={() => router.push("/dashboard")}
              onMouseEnter={() => handleMouseEnterLogin()}
              onMouseLeave={() => handleMouseLeaveLogin()}
              src={user}
              alt={`User`}
              className="h-8 w-8 cursor-pointer"
            />
          </div>
          <div className="relative">
            <Image
              src={heart}
              alt={`User`}
              className="h-8 w-8 cursor-pointer"
            />
            {wishList?.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#F82D8B] text-[10px] font-bold text-white">
                {wishList?.length}
              </span>
            )}
          </div>
          <div className="relative">
            <Image
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
              src={basketBag}
              alt={`User`}
              className="h-8 w-8 cursor-pointer"
            />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-1 right-[-5px] flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                {totalQuantity || 0}
              </span>
            )}
          </div>
        </div>
      </div>
      {addToCartModel && <AddToCard addToCartModel={addToCartModel} />}
    </nav>
  );
};

export default Navbar;
