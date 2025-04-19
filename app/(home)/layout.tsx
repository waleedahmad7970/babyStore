import "../globals.css";
import { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import FreeShipping from "@/components/banners/freeShipping";
import DeliveryService from "@/components/features/delivery-services";
import SubscribeSection from "@/components/features/subscribtion-section";
import StoreInfoSection from "@/components/features/store-info-section";
import BlogSlider from "@/components/slider/blogs.slider";
import ReviewSlider from "@/components/slider/reviews.slider";
import { blogs, reviews } from "@/static/static";
import BottomNavigation from "@/components/menu/mobile-menu";

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
      <ReviewSlider reviews={reviews} />
      <BlogSlider blogs={blogs} />
      <StoreInfoSection />
      <SubscribeSection />
      <DeliveryService />
      <Footer />
      <BottomNavigation />
    </Fragment>
  );
}
