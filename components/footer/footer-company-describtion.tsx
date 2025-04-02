import React from "react";
import Image from "next/image";

import { logo, logo_light } from "@/public/assets/brands";
import { aboutUsData } from "../../static/static";

const FooterCompanyDescription: React.FC = () => {
  return (
    <div className="cus-container flex flex-col items-center md:items-start md:p-0 md:py-10">
      <Image
        src={logo}
        alt="logo"
        className="block h-[88px] w-[324px] sm:hidden"
      />
      <Image
        src={logo_light}
        alt="logo"
        className="hidden h-[88px] w-[324px] sm:block"
      />
      <p className="mt-4 text-[16px] leading-normal font-normal text-[#1C2A54] md:text-[#fff]">
        {aboutUsData.description}
      </p>
    </div>
  );
};

export default FooterCompanyDescription;
