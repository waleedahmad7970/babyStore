// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface ExpandableCategoryItemProps {
//   title: string;
//   icon: string;
//   children?: React.ReactNode[];
// }

// const ExpandableCategoryItem: React.FC<ExpandableCategoryItemProps> = ({
//   title,
//   icon,
//   children,
// }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full">
//       <div
//         onClick={() => setOpen((prev) => !prev)}
//         className="flex w-full cursor-pointer flex-col gap-[10px]"
//       >
//         <div
//           className={`flex items-center justify-between gap-3 ${open && children ? "rounded-[8px] bg-[#F3F3F3] px-[10px]" : ""}`}
//         >
//           <Image
//             src={icon}
//             alt="item"
//             className="max-h-[40px] w-full max-w-[40px] object-cover"
//           />
//           <div className="flex w-full items-center justify-between gap-3">
//             <p className="font-Inter mb-0 text-[12px] leading-[17px] font-normal text-[#434343]">
//               {title}
//             </p>
//             <p
//               className={`font-Inter mb-0 min-w-[71px] rounded-[20px] px-[10px] text-center text-[10px] leading-[29px] font-semibold text-[#434343] underline ${open && children ? "bg-[#FAFAFA]" : "bg-[#F3F3F3]"}`}
//             >
//               VIEW ALL
//             </p>
//           </div>
//         </div>
//       </div>

//       {open && children && Array.isArray(children) && children.length > 0 && (
//         <div className="flex flex-col items-end gap-[10px] pt-[10px]">
//           {children.map((child, index) => (
//             <div
//               key={index}
//               className="flex w-full max-w-[281px] items-center rounded-[8px] bg-[#F9F9F9] px-4 py-3"
//             >
//               {child}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpandableCategoryItem;
"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface ExpandableCategoryItemProps {
  title: string;
  icon: string | StaticImageData;
  children?: React.ReactNode[];
  isOpen?: boolean;
  onToggle?: () => void;
}

const ExpandableCategoryItem: React.FC<ExpandableCategoryItemProps> = ({
  title,
  icon,
  children,
  isOpen = false,
  onToggle,
}) => {
  const handleClick = () => {
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className="flex w-full cursor-pointer flex-col gap-[10px]"
      >
        <div
          className={`flex items-center justify-between gap-3 transition-all duration-300 ${
            isOpen && children ? "rounded-[8px] bg-[#F3F3F3] px-[10px]" : ""
          }`}
        >
          <Image
            src={icon}
            alt="item"
            width={40}
            height={40}
            className="max-h-[40px] w-full max-w-[40px] object-cover"
          />
          <div className="flex w-full items-center justify-between gap-3">
            <p className="font-Inter mb-0 text-[12px] leading-[17px] font-normal text-[#434343]">
              {title}
            </p>
            <p
              className={`font-Inter mb-0 min-w-[71px] rounded-[20px] px-[10px] text-center text-[10px] leading-[29px] font-semibold text-[#434343] underline transition-all duration-300 ${
                isOpen && children ? "bg-[#FAFAFA]" : "bg-[#F3F3F3]"
              }`}
            >
              VIEW ALL
            </p>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen && children && children.length > 0
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-end gap-[10px] pt-[10px]">
            {children?.map((child, index) => (
              <div
                key={index}
                className="flex w-full max-w-[281px] items-center rounded-[8px] bg-[#F9F9F9] px-4 py-3 transition-all duration-300"
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCategoryItem;
