import { blogmain } from "@/public/assets/blogs";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="cus-container">
      <div className="relative my-0 w-full overflow-hidden rounded-[5px] md:my-10">
        <Image
          src={blogmain}
          alt="blog"
          className="h-auto min-h-[200px] w-full object-fill"
        />
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-full max-w-[423px]">
          A baby swing is a magical device that will rock your little one to
          provide comfort like never before. With its soft and cozy seat, gentle
          rocking motion, and fun toy bar, your baby will be cradled in comfort.
          Plus, some swings come equipped with music, vibration, and adjustable
          speeds to personalize the experience. The best part? This solution
          allows you to take a much-needed break without holding your baby the
          entire time. It is designed for babies 4 months and younger, and a
          baby swing is essential in every parens toolkit.
        </div>
        <div className="relative h-[306px] max-h-[306px] w-full overflow-hidden rounded-lg">
          <Image
            src={blogmain}
            alt="blog"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
