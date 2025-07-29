"use client";
import React, { useState } from "react";
import FooterBottom from "./bottom-footer";
import { navigationsLinks } from "../../static/static";
import FooterCompanyDescribtion from "./footer-company-describtion";
import {
  map_pin,
  mob_down_arrow,
  PaperPlaneTilt,
  phone,
  WhatsappLogo,
} from "../../public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

interface FooterLink {
  name: string;
  url?: string;
  id?: string | number;
}

interface Email {
  email: string;
}

interface Section {
  title: string;
  links?: FooterLink[];
  details?: {
    address: string;
    phone: string;
    whatsapp: string;
    emails: Email[];
  };
}

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { categories = [] } = useAppSelector((state) => state.product);
  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Merge static data with dynamic categories from Redux
  const mergedData = navigationsLinks?.map((section) => {
    if (section.title === "Categories" && categories.length > 0) {
      return { ...section, links: categories };
    }
    return section;
  });

  return (
    <footer className="bg-[#FAFAFA] sm:bg-[#F470AB]">
      <div className="mx-auto w-full max-w-[1360px] py-8 text-white">
        <div className="mx-auto mb-10 flex w-full flex-col gap-0 md:flex-row md:justify-between md:gap-6">
          {mergedData.map((section: Section, index: number) => (
            <div
              key={index}
              className={`w-full ${index === 0 ? "border-t" : ""} border-b border-[#1C2A54] px-4 sm:border-none md:w-1/4 md:border-none md:px-0`}
            >
              <h3
                className="font-inter flex cursor-pointer items-center justify-between py-[10px] text-[24px] leading-[30px] font-semibold text-[#1C2A54] sm:text-[#fff] md:cursor-auto md:text-[32px] md:leading-[38.73px]"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span
                  className="transition-transform duration-300 md:hidden"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <Image src={mob_down_arrow} className="h-6 w-6" alt="arrow" />
                </span>
              </h3>

              <div
                className={`${openIndex === index ? "block" : "hidden"} md:block`}
              >
                {section.links ? (
                  <ul className="space-y-2">
                    {section.links.map((link: FooterLink, idx: number) => (
                      <li key={idx}>
                        <Link
                          prefetch
                          href={link?.url || `/category/${link?.id}`}
                          className="font-inter text-[20px] leading-[24.2px] font-normal text-[#1C2A54] transition sm:text-[#fff]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : section.details ? (
                  <div className="space-y-[14px] text-gray-700">
                    <div className="flex justify-start gap-2">
                      <Image src={map_pin} alt="Location" className="h-6 w-6" />
                      <p className="font-inter max-w-[296px] text-[20px] leading-[24.2px] font-normal text-[#1C2A54] sm:text-[#fff]">
                        {section.details.address}
                      </p>
                    </div>
                    <div className="flex justify-start gap-2">
                      <Image src={phone} alt="Phone" className="h-6" />
                      <p className="font-inter max-w-[296px] text-[20px] leading-[24.2px] font-normal text-[#1C2A54] sm:text-[#fff]">
                        {section.details.phone}
                      </p>
                    </div>
                    <div className="flex justify-start gap-2">
                      <Image
                        src={WhatsappLogo}
                        alt="WhatsApp"
                        className="h-6 w-6"
                      />
                      <p className="font-inter max-w-[296px] text-[20px] leading-[24.2px] font-normal text-[#1C2A54] sm:text-[#fff]">
                        {section.details.whatsapp}
                      </p>
                    </div>
                    {section.details.emails.map((email: Email, idx: number) => (
                      <p key={idx} className="flex justify-start gap-2">
                        <Image src={PaperPlaneTilt} alt="Email" />
                        <a
                          href={`mailto:${email.email}`}
                          className="font-inter text-[20px] leading-[24.2px] font-normal text-[#1C2A54] sm:text-[#fff]"
                        >
                          {email.email}
                        </a>
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <FooterCompanyDescribtion />
      </div>
      <FooterBottom />
    </footer>
  );
}
