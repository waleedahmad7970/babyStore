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
const dashboardOptions = [
  { icon: "", label: "Dashboard" },
  { icon: "", label: "Orders" },
  { icon: "", label: "Wishlist" },
  { icon: "", label: "Address List" },
  { icon: "", label: "Reviews" },
  { icon: "", label: "Wallet" },
  { icon: "", label: "Coupons" },
  { icon: "", label: "Cashback" },
  { icon: "", label: "Track order" },
];
export default function Page() {
  const [active, setActive] = useState("Dashboard");
  {
    console.log("active", active);
  }
  return (
    <div className="cus-container mx-auto">
      <div className="flex w-full flex-row justify-between gap-5 py-[45px]">
        <div className="flex w-full max-w-[200px] flex-col gap-2">
          {dashboardOptions.map((item, index) => (
            <div
              onClick={() => setActive(item.label)}
              key={index}
              className={`flex w-full cursor-pointer items-center justify-start gap-3 rounded-[8px] px-4 py-3 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#FD71AF] hover:text-white ${active === item.label ? "bg-[#FD71AF] text-white" : "bg-white text-[#473A3F]"} `}
            >
              <Image src={item.icon} alt="icon" />
              <p className="font-Inter text-[18px] leading-[150%] font-normal">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="w-full text-[32px] font-bold text-[#473A3F]">
            {active}
          </div>
          {active === "Dashboard" && <DasboardPage />}
          {active === "Orders" && <DashboardOrderPage />}
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
