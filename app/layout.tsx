import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/store/provider";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "react-phone-input-2/lib/style.css";
// slick css
import { AppDispatch } from "@/components/AppDispatch";
import ToastProvider from "@/components/Toastify/toastProvider";

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
      <body suppressHydrationWarning className={inter.className}>
        <Providers>
          <ToastProvider>
            <AppDispatch />
            {children}
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
