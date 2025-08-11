import { Fragment } from "react";

import { reviews } from "@/static/static";

import Navbar from "@/components/header/navbar";
import BlogSlider from "@/components/slider/blogs.slider";
import FreeShipping from "@/components/banners/freeShipping";
import ReviewSlider from "@/components/slider/reviews.slider";
import CategoryList from "@/components/category/category-list";
import BreadcrumbOne from "@/components/bread-crum/bread-crum-one";
import DeliveryService from "@/components/features/delivery-services";
import StoreInfoSection from "@/components/features/store-info-section";
import SubscribeSection from "@/components/features/subscribtion-section";
import Footer from "@/components/footer/footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <FreeShipping />
      <Navbar />
      <CategoryList />
      <BreadcrumbOne />
      {children}
      <ReviewSlider reviews={reviews} />
      <BlogSlider />
      <StoreInfoSection />
      <SubscribeSection />
      <DeliveryService />
      <Footer />
    </Fragment>
  );
}
