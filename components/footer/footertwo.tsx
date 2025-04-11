"use client";
import React, { useState } from "react";
import FooterBottom from "./bottom-footer";
import { aboutUsData, navigationsLinks } from "../../static/static";
import FooterCompanyDescribtion from "./footer-company-describtion";
import {
  map_pin,
  mob_down_arrow,
  PaperPlaneTilt,
  phone,
  WhatsappLogo,
} from "../../public/assets/icons";
import Image from "next/image";
import { logo, logo_light } from "@/public/assets/brands";

interface FooterLink {
  name: string;
  url: string;
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

export default function FooterTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-[1360px] py-5 text-[#1C2A54] sm:py-8">
        <div className="mx-auto mb-10 flex w-full flex-col gap-0 md:flex-row md:justify-between md:gap-6">
          {navigationsLinks.map((section: Section, index: number) => (
            <div
              key={index}
              className={`w-full ${index === 0 ? "border-t" : ""} border-b border-[#1C2A54] px-4 sm:border-none md:w-1/4 md:border-none md:px-0`}
            >
              <h3
                className="font-inter flex cursor-pointer items-center justify-between py-[10px] text-[24px] leading-[30px] font-semibold text-[#1C2A54] sm:text-[#1C2A54] md:cursor-auto md:text-[32px] md:leading-[38.73px]"
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
                        <a
                          href={link.url}
                          className="font-inter text-[20px] leading-[24.2px] font-normal text-[#1C2A54] transition"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : section.details ? (
                  <div className="space-y-[14px] text-gray-700">
                    <div className="flex justify-start gap-2">
                      <Image src={map_pin} alt="Location" className="h-6 w-6" />
                      <p className="font-inter max-w-[296px] text-[20px] leading-[24.2px] font-normal text-[#1C2A54]">
                        {section.details.address}
                      </p>
                    </div>
                    <div className="flex justify-start gap-2">
                      <Image src={phone} alt="Phone" className="h-6" />
                      <p className="font-inter max-w-[296px] text-[20px] leading-[24.2px] font-normal text-[#1C2A54]">
                        {section.details.phone}
                      </p>
                    </div>
                    <div className="flex justify-start gap-2">
                      <Image
                        src={WhatsappLogo}
                        alt="WhatsApp"
                        className="h-6 w-6"
                      />
                      <p className="font-inter max-w-[296px] text-[20px] leading-[24.2px] font-normal text-[#1C2A54]">
                        {section.details.whatsapp}
                      </p>
                    </div>
                    {section.details.emails.map((email: Email, idx: number) => (
                      <p key={idx} className="flex justify-start gap-2">
                        <Image src={PaperPlaneTilt} alt="Email" />
                        <a
                          href={`mailto:${email.email}`}
                          className="font-inter text-[20px] leading-[24.2px] font-normal text-[#1C2A54]"
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
        <div className="cus-container flex flex-col items-center md:items-start md:p-0 md:py-10">
          <Image
            src={logo}
            alt="logo"
            className="block h-[88px] w-[324px] sm:hidden"
          />
          <Image
            src={logo}
            alt="logo"
            className="hidden h-[88px] w-[324px] sm:block"
          />
          <p className="mt-4 text-[16px] leading-normal font-normal text-[#1C2A54]">
            {aboutUsData.description}
          </p>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
