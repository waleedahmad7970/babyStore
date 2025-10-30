"use client";
import React from "react";
import { Heart, Ribbon } from "lucide-react";

const offers = [
  "Get the latest shopping related offers",
  "Limited time offer: Fashion sale you can’t resist",
  "Newest products 10% off use code NEW10",
  "Free shipping on orders over $50",
];

const RotatingTextSlider = () => {
  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white">
      <div className="group relative flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 py-4">
          {[...offers, ...offers].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[20px] font-light text-gray-800"
            >
              <Ribbon size={40} className="text-pink-100" />
              <span className="">{text}</span>
            </div>
          ))}
        </div>
      </div>

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

        /* Pause animation on hover */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default RotatingTextSlider;
