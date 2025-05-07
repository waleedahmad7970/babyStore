"use client";
import Image from "next/image";
import React, { useState } from "react";
import DasboardPage from "./dasboard-page";
import OrderTable from "@/components/tables/order-table";
import AddressPage from "./address-page";
import DashboardReviewCards from "@/components/cards/dashboard-review-card";
import { DashboardCouponList } from "@/components/cards/dasboard-coupon-card";
import CashbackPage from "./cashback-page";
import DashboardTrackingPage from "./tracking-page";
import DashboardOrderPage from "./order-page";
import {
  button,
  Cashback,
  Coupon,
  Dashboard,
  map,
  order,
  Reviews,
  Track,
  wallet,
  wishlist,
} from "@/public/assets/dashboard";
import DashboardWishlist from "./wishlist-dashboard";
import DashboardWallet from "./dashboard-wallet";
import Icons from "@/public/assets/svg-component";
// const dashboardOptions = [
//   { icon: <Icons.DashboardIcon />, label: "Dashboard" },
//   { icon: <Icons.OrderIcon />, label: "Orders" },
//   { icon: <Icons.WishlistIcon />, label: "Wishlist" },
//   { icon: <Icons.MapIcon />, label: "Address List" },
//   { icon: <Icons.ReviewsIcon />, label: "Reviews" },
//   { icon: <Icons.WalletIcon />, label: "Wallet" },
//   { icon: <Icons.CouponIcon />, label: "Coupons" },
//   { icon: <Icons.CashbackIcon />, label: "Cashback" },
//   { icon: <Icons.TrackIcon />, label: "Track order" },
// ];
const dashboardOptions = [
  { icon: Icons.DashboardIcon, label: "Dashboard" },
  { icon: Icons.OrderIcon, label: "Orders" },
  { icon: Icons.WishlistIcon, label: "Wishlist" },
  { icon: Icons.MapIcon, label: "Address List" },
  { icon: Icons.ReviewsIcon, label: "Reviews" },
  { icon: Icons.WalletIcon, label: "Wallet" },
  { icon: Icons.CouponIcon, label: "Coupons" },
  { icon: Icons.CashbackIcon, label: "Cashback" },
  { icon: Icons.TrackIcon, label: "Track order" },
];

export default function Page() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="cus-container mx-auto">
      <div className="flex w-full flex-col justify-between gap-5 py-[45px] lg:flex-row">
        <div className="no-scrollbar flex w-full flex-row gap-2 overflow-x-auto lg:max-w-[200px] lg:flex-col lg:overflow-visible">
          {dashboardOptions.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === item.label;
            return (
              <div
                onClick={() => setActive(item.label)}
                key={index}
                className={`flex w-full cursor-pointer items-center justify-start gap-3 rounded-[8px] px-2 py-2 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#FD71AF] hover:text-white md:px-4 md:py-3 ${active === item.label ? "bg-[#FD71AF] text-white" : "bg-white text-[#473A3F]"} `}
              >
                {/* <Image
                src={item.icon}
                alt="icon"
                className="h-[24px] min-w-[24px]"
              /> */}
                <Icon color={isActive ? "white" : "#473A3F"} />

                <p className="font-Inter w-max text-[14px] leading-[150%] font-normal md:text-[18px]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <div className="hidden w-full text-[32px] font-bold text-[#473A3F] md:block">
            {active}
          </div>
          {active === "Dashboard" && <DasboardPage />}
          {active === "Orders" && <DashboardOrderPage />}
          {active === "Wishlist" && <DashboardWishlist />}
          {active === "Wallet" && <DashboardWallet />}
          {active === "Address List" && <AddressPage />}
          {active === "Reviews" && <DashboardReviewCards />}
          {active === "Coupons" && <DashboardCouponList />}
          {active === "Cashback" && <CashbackPage />}
          {active === "Track order" && <DashboardTrackingPage />}
        </div>
      </div>
    </div>
  );
}
