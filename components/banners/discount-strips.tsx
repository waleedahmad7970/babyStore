"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const words = ["15%", "OFF", "ON", "Your", "First", "3 ORDERS"];

const DiscountStripsBanner = () => {
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    wordRefs.current.forEach((el, index) => {
      if (!el) return;

      const delay = index * 0.2;

      const animType = index % 5;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      switch (animType) {
        case 0:
          tl.fromTo(
            el,
            { rotateX: -90, opacity: 0 },
            {
              rotateX: 0,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay,
            },
          ).to(el, {
            rotateX: 90,
            opacity: 0,
            duration: 0.6,
            ease: "back.in(1.7)",
            delay: 1,
          });
          break;

        case 1:
          tl.fromTo(
            el,
            { rotateY: 90, opacity: 0 },
            {
              rotateY: 0,
              opacity: 1,
              duration: 0.6,
              ease: "expo.out",
              delay,
            },
          ).to(el, {
            rotateY: -90,
            opacity: 0,
            duration: 0.6,
            ease: "expo.in",
            delay: 1,
          });
          break;

        case 2:
          tl.fromTo(
            el,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "elastic.out(1, 0.4)",
              delay,
            },
          ).to(el, {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power1.inOut",
            delay: 1,
          });
          break;

        case 3:
          tl.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              delay,
            },
          ).to(el, {
            y: -50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            delay: 1,
          });
          break;

        case 4:
          tl.fromTo(
            el,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "circ.out",
              delay,
            },
          ).to(el, {
            x: 50,
            opacity: 0,
            duration: 0.6,
            ease: "circ.in",
            delay: 1,
          });
          break;
      }
    });
  }, []);

  return (
    <div className="flex h-10 w-full items-center justify-center overflow-hidden bg-[#F82D8B] shadow-2xs md:h-[60px]">
      {/* <div className="striped-bg flex h-10 w-full items-center justify-center overflow-hidden bg-[black] md:h-[60px]"> */}
      <p className="text-shadow-lg flex gap-2 font-sans text-[18px] font-extrabold text-white md:text-[32px]">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el!) as any}
            className="inline-block"
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default DiscountStripsBanner;
