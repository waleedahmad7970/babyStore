"use client";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Star, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Shop", icon: ShoppingBag, href: "/shop" },
  { name: "Reviews", icon: Star, href: "/reviews" },
  { name: "Cart", icon: ShoppingCart, href: "/cart" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-3 md:px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full shadow-2xl border border-white/40 z-50">
      {navItems.map(({ name, icon: Icon, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={name}
            href={href}
            className={`flex flex-col items-center text-sm transition-all duration-200 ${
              isActive ? "text-[#E7448A] " : "text-gray-700 hover:text-[#E7448A] "
            }`}
          >
            <div
              className={`flex items-center justify-center w-10  rounded-full mb-1 transition-all ${
                isActive ? "bg-red-100" : "hover:bg-red-50"
              }`}
            >
              <Icon size={20} />
            </div>
            <span
              className={`${
                isActive
                  ? "font-medium text-red-500"
                  : "text-gray-700 group-hover:text-red-500"
              }`}
            >
              {name}
            </span>
          </Link>
        );
      })}

      <button className="ml-[20px] md:ml-[200px] cursor-pointer p-3 bg-white rounded-full shadow hover:shadow-lg transition">
        <Search size={20} />
      </button>
    </div>
  );
}
