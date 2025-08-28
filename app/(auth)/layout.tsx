import Footer from "@/components/footer/footer";
import UnAuthNavbar from "@/components/header/un-auth-navbar";
import DeliveryService from "@/components/features/delivery-services";
import SubscribeSection from "@/components/features/subscribtion-section";
import FreeShipping from "@/components/banners/freeShipping";
import CategoryList from "@/components/category/category-list";
import InitialRequestUnauth from "@/components/InitalRequest/initail-reqiuest-un-auth";
import { Fragment } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      {/* <InitialRequestUnauth /> */}
      <FreeShipping />
      <UnAuthNavbar />
      <CategoryList />
      {children}
      <SubscribeSection />
      <DeliveryService />
      <Footer />
    </Fragment>
  );
}
