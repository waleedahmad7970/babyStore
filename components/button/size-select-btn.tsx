import React, { useState } from "react";
const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState("M");
  return (
    <div className="flex flex-wrap space-x-1">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`flex items-center justify-center rounded-[50px] border px-[14px] py-[6px] md:px-4 md:py-[6px] ${
            selectedSize === size
              ? "border-t-[5px] border-r-[2px] border-b-[2px] border-l-[2px] border-[#00AE42] font-bold text-[#00AE42]"
              : "border-border border-t-[5px] border-r-[2px] border-b-[2px] border-l-[2px] border-[#E4E4E4] font-bold text-[#1F1F1F]"
          } leading-[22px] transition-all duration-200`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
