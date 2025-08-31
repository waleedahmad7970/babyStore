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
  title:
    "Baby Store - Online Shopping Store for Kids, Moms, Toys, Clothes & Essentials",
  description:
    "Shop the best baby store in Dubai with everything for children and moms. Discover baby clothes, toys, strollers, feeding essentials, maternity products & more. Fast delivery across Dubai & worldwide shipping available.",
  keywords: [
    "baby store Dubai",
    "baby shop UAE",
    "toys for kids Dubai",
    "maternity products UAE",
    "baby clothes Dubai",
    "strollers and car seats",
    "feeding essentials for babies",
    "newborn care Dubai",
    "kids toys UAE",
    "mom and baby products Dubai",
  ],
  openGraph: {
    title: "Baby Store Dubai | Shop for Kids & Moms Essentials",
    description:
      "Everything your child and mom need in one place. Explore toys, clothes, strollers, maternity items & more. Available in Dubai with worldwide delivery.",
    url: "https://your-domain.com",
    siteName: "Baby Store Dubai",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Store Dubai | Toys, Clothes & Essentials",
    description:
      "Shop Dubai’s best baby store for kids & moms. From toys and clothes to maternity and newborn care. Worldwide delivery available.",
  },
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
