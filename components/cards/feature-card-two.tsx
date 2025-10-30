// components/FeatureCards.tsx

import { offers, refund, security, support } from "@/public/assets/support";
import Image from "next/image";

const features = [
  {
    icon: offers,
    title: "Daily Offers",
    subtitle: "25% off by subscribing",
  },
  {
    icon: security,
    title: "Secure Payment",
    subtitle: "100% safe complete",
  },
  {
    icon: refund,
    title: "Return & refund",
    subtitle: "Money back guarantee",
  },
  {
    icon: support,
    title: "Quality Support",
    subtitle: "Always online 24/7",
  },
];

export default function FeatureCardsTwo() {
  return (
    <div className="w-full cus-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-15">
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-[#FFF0F5] rounded-xl p-6 hover:shadow-lg cursor-pointer transition-all duration-300"
        >
            <Image src={feature.icon} alt={feature.title} />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
