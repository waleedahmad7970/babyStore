import ProductDetails from "@/components/product/product-details";
import { productData } from "@/static/static";
import React from "react";

export default function page() {
  return <ProductDetails product={productData} />;
}
