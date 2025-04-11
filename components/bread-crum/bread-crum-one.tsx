import React from "react";
import { breadcrumbPaths } from "../../static/static";
import Image from "next/image";
import { right_angle } from "@/public/assets/icons";

interface BreadcrumbPath {
  name: string;
  link: string;
}

interface BreadcrumbProps {
  paths?: BreadcrumbPath[];
}

const BreadcrumbOne: React.FC<BreadcrumbProps> = ({
  paths = breadcrumbPaths,
}) => {
  return (
    <div className="mt-3 border-t border-b border-[#1F1F1F1A] md:mt-0">
      <nav className="cus-container scrollbar-hide mx-auto my-1 flex min-h-[36px] items-center gap-5 overflow-x-auto px-4 text-sm whitespace-nowrap text-gray-500 md:min-h-[48px] md:px-0">
        {paths.map((path, index) => (
          <div
            key={index}
            className="font-Inter flex items-center gap-[20px] text-[10px] leading-3 font-normal"
          >
            <a
              style={{
                color: `${index === paths.length - 1 ? "rgba(31, 31, 31, 0.50)" : "#E7448C"}`,
              }}
              href={path.link}
              className={``}
            >
              {path.name}
            </a>
            {index < paths.length - 1 && (
              <Image src={right_angle} alt=">" className="!h-2 !w-1" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BreadcrumbOne;
