"use client";
import { useTypewriter } from "@/hooks/typeWritter";

interface Props {
  message?: string;
}

function FreeShipping({ message = "Shop 100 AED & enjoy " }: Props) {
  const typed = useTypewriter(
    [
      [{ text: message }, { text: "FREE SHIPPING.", bold: true }],
      [{ text: message }, { text: "FREE SHIPPING.", bold: true }],
    ],
    { typingSpeed: 50, deletingSpeed: 30, pauseTime: 1500, leaveChars: 5 },
  );
  return (
    <p className="bg-primary py-[10px] text-center text-[16px] leading-[12px] font-semibold text-[#E7448C] md:py-[18px] md:text-[24px] md:leading-[24px]">
      {typed.map((seg, i) => (
        <span key={i} className={seg.bold ? "font-bold" : ""}>
          {seg.text}
        </span>
      ))}
    </p>
  );
}

export default FreeShipping;
