import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Fragment } from "react";
import { reviews } from "@/static/static";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import BlogSlider from "@/components/slider/blogs.slider";
import FreeShipping from "@/components/banners/freeShipping";
import ReviewSlider from "@/components/slider/reviews.slider";
import DeliveryService from "@/components/features/delivery-services";
import SubscribeSection from "@/components/features/subscribtion-section";
import StoreInfoSection from "@/components/features/store-info-section";
import StoreInfoSectionTwo from "@/components/features/store-info-section-two";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <FreeShipping />
      <Navbar />
      {children}
      {/* <ReviewSlider reviews={reviews} /> */}
      {/* <BlogSlider /> */}
      <StoreInfoSectionTwo />
      <SubscribeSection />
      <DeliveryService />
      <Footer />
    </Fragment>
  );
}
