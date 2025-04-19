import { Fragment } from "react";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { blogs, reviews } from "@/static/static";

import Navbar from "@/components/header/navbar";
import FooterTwo from "@/components/footer/footertwo";
import BlogSlider from "@/components/slider/blogs.slider";
import FreeShipping from "@/components/banners/freeShipping";
import ReviewSlider from "@/components/slider/reviews.slider";
import CategoryList from "@/components/category/category-list";
import BreadcrumbTwo from "@/components/bread-crum/bread-crum-two";
import DeliveryService from "@/components/features/delivery-services";
import StoreInfoSection from "@/components/features/store-info-section";
import SubscribeSection from "@/components/features/subscribtion-section";

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
      <BreadcrumbTwo />
      {children}
      <ReviewSlider reviews={reviews} />
      <BlogSlider blogs={blogs} />
      <StoreInfoSection />
      <SubscribeSection />
      <DeliveryService />
      <FooterTwo />
    </Fragment>
  );
}
