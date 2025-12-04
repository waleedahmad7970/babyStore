"use client";
import { offers, refund, security, support } from "@/public/assets/support";
import Image from "next/image";

const features = [
  { icon: offers, title: "Daily Offers", subtitle: "25% off by subscribing" },
  { icon: security, title: "Secure Payment", subtitle: "100% safe complete" },
  { icon: refund, title: "Return & refund", subtitle: "Money back guarantee" },
  { icon: support, title: "Quality Support", subtitle: "Always online 24/7" },
];

export default function FeatureCardsTwo() {
  return (
    <div className="cus-container mx-auto my-3 w-full overflow-hidden md:my-10">
      {/* MOBILE + DESKTOP MARQUEE (same UI, same animation) */}
      <div className="group relative overflow-hidden">
        <div className="animate-marquee flex gap-3 px-1 sm:gap-6 sm:px-4">
          {[...features, ...features].map((feature, i) => (
            <div
              key={i}
              className="flex min-w-[200px] cursor-pointer items-center gap-4 rounded-xl bg-[#FFF0F5] p-2 transition-all duration-300 hover:shadow-lg sm:min-w-[300px] sm:p-6"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="h-[35px] w-[30px] sm:h-[50px] sm:w-[50px]"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-800 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="text-[10px] text-gray-500 sm:text-sm">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
