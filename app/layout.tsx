import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/store/provider";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import FreeShipping from "@/components/banners/freeShipping";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Store",
  description: "Baby Store web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className}`}>
        <Providers>
          <FreeShipping />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
