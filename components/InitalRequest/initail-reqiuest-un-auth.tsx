"use client";
import React, { useEffect, useState } from "react";
import productServices from "@/services/product.service";
import FullScreenLoader from "../Loader/fullscreen-loader";

import { useRouter } from "next/navigation";

export default function InitialRequestUnauth() {
  const router = useRouter();
  const [initailRequestLoader, setInitailRequestLoader] = useState(true);

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/category");
    router.prefetch("/dashboard");
  }, [router]);

  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     try {
  //       await Promise.all([productServices.getCategories()]);
  //     } catch (error) {
  //       console.error("Error in critical requests:", error);
  //     } finally {
  //       setInitailRequestLoader(false);
  //     }
  //   };

  //   fetchInitialData();
  // }, []);

  return (
    <div>
      <FullScreenLoader isLoading={initailRequestLoader} />
    </div>
  );
}
