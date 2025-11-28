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
    <div className="cus-container mx-auto my-10 w-full">
      {/* MOBILE AUTO-SLIDER */}
      <div className="group relative overflow-hidden sm:hidden">
        <div className="animate-marquee flex gap-2 px-1">
          {[...features, ...features].map((feature, i) => (
            <div
              key={i}
              className="flex min-w-[200px] cursor-pointer snap-start items-center gap-4 rounded-xl bg-[#FFF0F5] p-2 transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="max-h-[40px] max-w-[30px] animate-bounce"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-[10px] text-gray-500">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-[#FFF0F5] p-6 transition-all duration-300 hover:shadow-lg"
          >
            <Image src={feature.icon} alt={feature.title} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ANIMATION STYLES */}
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

        /* Pause on hover */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
