"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import productServices from "@/services/product.service";
import FullScreenLoader from "../Loader/fullscreen-loader";
import authService from "@/services/auth.service";
import { useAppSelector } from "@/store/hooks";
import blogService from "@/services/blogs.service";
import homeServices from "@/services/UI/home.service";

export default function InitialRequest() {
  const router = useRouter();
  const { categories = [] } = useAppSelector((state) => state.product);
  const { registerSessionId = "" } = useAppSelector((state) => state.user);

  const [initailRequestLoader, setInitailRequestLoader] = useState(true);

  // prefetch sdlkd;l
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/cart");
    router.prefetch("/dashboard");
    router.prefetch("/login");
    router.prefetch("/signup");
  }, [router]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await Promise.allSettled([
          productServices.getCategories(),
          productServices.getHomeSlider(),
          productServices.getHomeMobSlider(),
          registerSessionId && authService.getDefaultAddress(registerSessionId),

          homeServices.getHomeSections(),
          productServices.getFavouriteList(),

          // productServices.getSuggestedProducts(), not using in new deisgn anywehre
          productServices.getHomeDesktopSectionsTest(),

          productServices.storeSearchDataToAlgolia(),
          // productServices.getAllProducts(), search api of products
          productServices.getbannerImage(),

          registerSessionId && authService.getUserProfile(registerSessionId),
          blogService.getAllBlogs(),

          authService.getDiscountCoupon(),

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

    fetchInitialData();
  }, []);

  return (
    <div>
      <FullScreenLoader isLoading={initailRequestLoader} />
    </div>
  );
}
