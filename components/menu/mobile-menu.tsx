"use client";
import { bag, home, menu2, profile, Search } from "@/public/assets/icons";
import Image from "next/image";
import React, { useState } from "react";

type TabType = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");

  const tabs: TabType[] = [
    {
      id: "Categories",
      icon: <Image src={menu2} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Categories",
    },
    {
      id: "Home",
      icon: <Image src={home} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Home",
    },
    {
      id: "Search",
      icon: <Image src={Search} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Search",
    },
    {
      id: "Bag",
      icon: <Image src={bag} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Bag",
    },
    {
      id: "Profile",
      icon: <Image src={profile} alt="icon" className="h-[24px] w-[24px]" />,
      label: "Profile",
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 block border-t border-gray-100 bg-white sm:hidden">
      <div className="flex items-center justify-around px-5 py-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex h-full w-full flex-col items-center justify-center transition-all duration-300 ${
              activeTab === tab.id ? "text-[#F82D8B]" : "text-gray-500"
            }`}
            aria-label={tab.label}
          >
            <div
              className={`transition-transform duration-300 ${
                activeTab === tab.id ? "scale-110" : "scale-100"
              }`}
            >
              {tab.icon}
            </div>
            <span
              className={`mt-1 text-[10px] leading-[160%] font-normal ${activeTab === tab.id ? "text-[#51545A]" : "text-[#C7CFDA]"} `}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
