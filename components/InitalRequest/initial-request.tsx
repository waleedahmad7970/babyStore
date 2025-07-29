"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import productServices from "@/services/product.service";
import FullScreenLoader from "../Loader/fullscreen-loader";
import authService from "@/services/auth.service";
import { useAppSelector } from "@/store/hooks";
import blogService from "@/services/blogs.service";

export default function InitialRequest() {
  const router = useRouter();
  const { registerSessionId = "" } = useAppSelector((state) => state.user);

  const [initailRequestLoader, setInitailRequestLoader] = useState(true);

  // prefetch
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/cart");
    router.prefetch("/brand");
    router.prefetch("/category");
    router.prefetch("/dashboard");
  }, [router]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await Promise.all([
          productServices.getMumzData(),
          productServices.getCategories(),
          productServices.getHomeSlider(),
          productServices.getTopBrandList(),
          productServices.getFavouriteList(),
          productServices.getHomeMobSlider(),
          productServices.getSuggestedProducts(),
          productServices.getHomeDesktopSections(),
          productServices.getHomeDesktopSectionsTest(),
          productServices.storeSearchDataToAlgolia(),
          productServices.getAllProducts(),
          productServices.getbannerImage(),
          productServices.getCustomizedCategoryListUi(),
          // get user profile
          authService.getUserProfile(registerSessionId),
          authService.getDiscountCoupon(),
          //
        ]);
      } catch (error) {
        console.error("Error in critical requests:", error);
      } finally {
        setInitailRequestLoader(false);
      }
    };

    const fetchInitialDataBlogs = async () => {
      await blogService.getAllBlogs();
    };
    fetchInitialData();
    fetchInitialDataBlogs();
  }, []);

  return (
    <div>
      <FullScreenLoader isLoading={initailRequestLoader} />
    </div>
  );
}
