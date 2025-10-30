"use client";

import React from "react";

const HeroVideo = () => {
  return (
    <section className="cus- relative w-full h-[1000px] overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://memini-demo.myshopify.com/cdn/shop/videos/c/vp/7d9dd6ed1ea947dda09d38dfd642a83a/7d9dd6ed1ea947dda09d38dfd642a83a.HD-1080p-7.2Mbps-41821392.mp4?v=0"
        autoPlay={true}
        muted
        loop
        playsInline
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-0 tracking-[-2.72px] max-w-[40%]">We Make Your Children Happier With The Best Toys
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover adorable babywear and exclusive collections.
        </p>
        <button className="bg-[#E7448A] hover:bg-white hover:text-[#E7448A] transition-all px-8 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroVideo;
