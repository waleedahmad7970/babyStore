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
          productServices.getCategories(),
          productServices.getHomeSlider(),
          productServices.getHomeMobSlider(),
          productServices.getFavouriteList(),
        ]);

        await Promise.all([
          // productServices.getSuggestedProducts(), not using in new deisgn anywehre
          productServices.getHomeDesktopSectionsTest(),
        ]);

        await Promise.all([
          productServices.storeSearchDataToAlgolia(),
          // productServices.getAllProducts(), search api of products
          productServices.getbannerImage(),
        ]);

        await Promise.all([
          authService.getUserProfile(registerSessionId),
          authService.getDiscountCoupon(),
        ]);

        await Promise.all([
          // productServices.getMumzData(), no using because not using any iyts data
          // productServices.getTopBrandList(), not using i nay app
          // productServices.getHomeDesktopSections(), dsta will come form here of home page
          // productServices.getCustomizedCategoryListUi(), no data coming no reason for api
          // get user profile
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
