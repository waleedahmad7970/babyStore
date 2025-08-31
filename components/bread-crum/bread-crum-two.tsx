// import React from "react";
// import { breadcrumbPathsBlog } from "../../static/static";
// import Image from "next/image";
// import { right_angle } from "@/public/assets/icons";

// interface BreadcrumbPath {
//   name: string;
//   link: string;
// }

// interface BreadcrumbProps {
//   paths?: BreadcrumbPath[];
// }

// const BreadcrumbTwo: React.FC<BreadcrumbProps> = ({
//   paths = breadcrumbPathsBlog,
// }) => {
//   return (
//     <div className="mt-3 bg-[#FFF0F5] md:mt-0">
//       <nav className="cus-container scrollbar-hide overflow-x-autopx-4 mx-auto my-1 flex min-h-[36px] items-center gap-5 text-sm whitespace-nowrap text-gray-500 md:min-h-[48px] md:px-0">
//         {breadcrumbPathsBlog.map((path, index) => (
//           <div
//             key={index}
//             className="font-Inter flex items-center gap-[20px] text-[10px] leading-3 font-normal"
//           >
//             <a
//               style={{
//                 color: `${index === paths.length - 1 ? "rgba(31, 31, 31, 0.50)" : "#E7448C"}`,
//               }}
//               href={path.link}
//               className={``}
//             >
//               {path.name}
//             </a>
//             {index < paths.length - 1 && (
//               <Image src={right_angle} alt=">" className="!h-2 !w-1" />
//             )}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default BreadcrumbTwo;

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { right_angle } from "@/public/assets/icons";

const BreadcrumbTwo = () => {
  const pathname = usePathname(); // e.g. "/shop/product/123"
  const segments = pathname.split("/").filter(Boolean); // ["shop", "product", "123"]

  // Build breadcrumb array
  const paths = segments.map((segment, index) => {
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize
      link: "/" + segments.slice(0, index + 1).join("/"), // Build partial path
    };
  });

  return (
    <div className="mt-3 bg-[#FFF0F5] md:mt-0">
      <nav className="cus-container scrollbar-hide mx-auto my-1 flex min-h-[36px] items-center gap-5 overflow-x-auto px-4 text-sm whitespace-nowrap text-gray-500 md:min-h-[48px] md:px-0">
        {paths.map((path, index) => (
          <div
            key={index}
            className="font-Inter flex items-center gap-[20px] text-[10px] leading-3 font-normal"
          >
            <Link
              href={path.link}
              style={{
                color:
                  index === paths.length - 1
                    ? "rgba(31, 31, 31, 0.50)" // last one = gray
                    : "#E7448C",
              }}
            >
              {path.name}
            </Link>
            {index < paths.length - 1 && (
              <Image src={right_angle} alt=">" className="!h-2 !w-1" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BreadcrumbTwo;
