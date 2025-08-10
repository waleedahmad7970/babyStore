"use client";
import React, { useEffect } from "react";
import Icons from "@/public/assets/svg-component";
import AddressPage from "./address-page";
import authService from "@/services/auth.service";
import DasboardPage from "./dasboard-page";
import CashbackPage from "./cashback-page";
import DashboardWallet from "./dashboard-wallet";
import DashboardWishlist from "./wishlist-dashboard";
import DashboardOrderPage from "./order-page";
import DashboardReviewCards from "@/components/cards/dashboard-review-card";
import DashboardTrackingPage from "./tracking-page";

import { dashboardAction } from "@/store/slices/dashboard.slice";
import { DashboardCouponList } from "@/components/cards/dasboard-coupon-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import orderServices from "@/services/order.service";
import { userActions } from "@/store/slices/auth.slice";
import { useRouter } from "next/navigation";

const dashboardOptions = [
  { icon: Icons.DashboardIcon, label: "Dashboard" },
  { icon: Icons.OrderIcon, label: "Orders" },
  { icon: Icons.WishlistIcon, label: "Wishlist" },
  { icon: Icons.MapIcon, label: "Address List" },
  { icon: Icons.ReviewsIcon, label: "Reviews" },
  // { icon: Icons.WalletIcon, label: "Wallet" },
  // { icon: Icons.CouponIcon, label: "Coupons" },
  { icon: Icons.CashbackIcon, label: "Cashback" },
  { icon: Icons.TrackIcon, label: "Track order" },
];

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { registerSessionId } = useAppSelector((state) => state.user);
  const { activeDashboardTab } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    if (registerSessionId) {
      orderServices.getOrders(registerSessionId);
      orderServices.getUserReviews(Number(registerSessionId));
      authService.getUserCashBack(registerSessionId);
      authService.getUserProfile(registerSessionId);
      authService.getDefaultAddress(registerSessionId);
      authService.getSavedAddresses(registerSessionId);
    }
  }, [registerSessionId]);

  const handleLogout = () => {
    dispatch(userActions.clearUser());
    dispatch(userActions.setRegisterSessionId(""));
    router.push("/");
  };

  return (
    <div className="cus-container mx-auto">
      <div className="flex w-full flex-col justify-between gap-5 py-[45px] lg:flex-row">
        <div className="no-scrollbar flex w-full flex-row gap-2 overflow-x-auto lg:max-w-[200px] lg:flex-col lg:overflow-visible">
          {dashboardOptions.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeDashboardTab === item?.label;
            return (
              <div
                onClick={() =>
                  dispatch(dashboardAction.setActiveDashboardTab(item?.label))
                }
                key={index}
                className={`flex w-full cursor-pointer items-center justify-start gap-3 rounded-[8px] px-2 py-2 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#FD71AF] hover:text-white md:px-4 md:py-3 ${activeDashboardTab === item.label ? "bg-[#FD71AF] text-white" : "bg-white text-[#473A3F]"} `}
              >
                <Icon color={isActive ? "white" : "#473A3F"} />

                <p className="font-Inter w-max text-[14px] leading-[150%] font-normal md:text-[18px]">
                  {item.label}
                </p>
              </div>
            );
          })}
          <div
            onClick={() => handleLogout()}
            className={`flex w-full cursor-pointer items-center justify-center gap-3 rounded-[8px] bg-[#FD71AF] px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#FD71AF] hover:text-white md:px-2 md:py-3`}
          >
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

            <p className="font-Inter w-max text-[14px] leading-[150%] font-normal md:text-[18px]">
              Logout
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="hidden w-full text-[32px] font-bold text-[#473A3F] md:block">
            {activeDashboardTab}
          </div>
          {activeDashboardTab === "Dashboard" && <DasboardPage />}
          {activeDashboardTab === "Orders" && <DashboardOrderPage />}
          {activeDashboardTab === "Wishlist" && <DashboardWishlist />}
          {activeDashboardTab === "Address List" && <AddressPage />}
          {activeDashboardTab === "Reviews" && <DashboardReviewCards />}
          {activeDashboardTab === "Cashback" && <CashbackPage />}
          {activeDashboardTab === "Track order" && <DashboardTrackingPage />}

          {activeDashboardTab === "Coupons" && <DashboardCouponList />}
          {activeDashboardTab === "Wallet" && <DashboardWallet />}
        </div>
      </div>
    </div>
  );
}
