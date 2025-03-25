import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/store/provider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
