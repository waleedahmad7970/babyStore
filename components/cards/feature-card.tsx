import { Cashback2x, FreeShipping, Support7 } from "@/public/assets/icons";
import Image from "next/image";

const features = [
  {
    title: "Free Shipping",
    description: "Free Shipping over AED 100",
    icon: FreeShipping,
  },
  {
    title: "2x Cashback",
    description: "Get 2x Cashback when you shop over AED 300",
    icon: Cashback2x,
  },
  {
    title: "24/7 Support",
    description: "When something goes wrong",
    icon: Support7,
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-5 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:px-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-[7px] border-[2px] border-[#DDD] p-6 text-center"
        >
          <div className="mb-5 h-10 w-10">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h3 className="mb-4 text-[20px] font-bold text-[#4D4D4D]">
            {feature.title}
          </h3>
          <p
            className={`text-[20px] leading-[24px] font-normal text-[#4D4D4D] ${index === 0 ? "max-w-[180px]" : "max-w-[225px]"}`}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
