import { blog_detail_1, blogmain } from "@/public/assets/blogs";
import { blogDetailsData } from "@/static/static";
import Image from "next/image";
import React from "react";

export default function page() {
  const {
    date,
    title,
    description,
    tags,
    blogImage,
    blogDescription,
    blogImageTwo,
    sectionOne,
    sectionTwo,
    conclusionTitle,
    conclusionDescription,
  } = blogDetailsData;
  return (
    <div className="mx-auto w-full max-w-[1178px] px-[18px] py-10 lg:px-0">
      <div className="mb-[10px] flex md:mb-0">
        <div className="w-full max-w-[904px]">
          <p className="leading-p[25px] mb-[6px] text-[10px] font-semibold text-[#1F1F1F] md:mb-5 md:text-[16px] md:leading-[25px]">
            {date}{" "}
          </p>
          <p className="mb-[4px] text-[18px] leading-[25px] font-bold text-[#1F1F1F] md:mb-[9px] md:text-[38px] md:leading-[25px]">
            {title}
          </p>
          <p className="mb-2 text-[8px] leading-[12px] font-normal text-[#1F1F1F] md:mb-[30px] md:line-clamp-2 md:text-[16px] md:leading-[20px]">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-start gap-1">
            {tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py:0 rounded-[16px] border-1 border-[#1F1F1F] px-[15px] py-[5.05px] text-[8.72px] leading-[8.418px] font-normal md:px-[28px] md:text-[14px] md:leading-[25px]"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative my-0 w-full overflow-hidden rounded-[5px] md:my-10">
        <Image
          src={blogImage}
          alt="blog"
          className="h-auto min-h-[200px] w-full object-fill"
        />
      </div>
      <div className="mt-5 flex justify-between gap-5 md:mt-0 md:gap-6">
        <div className="w-full max-w-[423px] text-[10px] leading-[12px] font-normal text-[#747474] md:text-[18px] md:leading-normal">
          {blogDescription}
        </div>
        <div className="relative h-[306px] max-h-[178px] w-full overflow-hidden rounded-lg md:max-h-[306px]">
          <Image
            src={blogImageTwo}
            alt="blog"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="w-full py-1 md:py-10">
        <h1 className="text-[18px] leading-[23px] font-bold text-[#000] md:max-w-[510px] md:text-[38px] md:leading-[46.996px]">
          {sectionOne.title}
        </h1>
        <p className="mt-1 w-full text-[10px] font-normal text-[#747474] md:mt-[10px] md:text-[18px]">
          {sectionOne.description}
        </p>
        <div className="flex w-full max-w-[1035px] flex-col gap-[36px] pt-5 md:gap-[82px] md:pl-[45px]">
          {sectionOne.sectionItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-5 md:items-start md:gap-[110px]"
              >
                <p className="w-full text-[10px] font-normal text-[#747474] md:text-[18px]">
                  <span className="font-bold">{item.title}</span>
                  {item.description}
                </p>
                <Image
                  src={item.image}
                  alt="d"
                  className="h-[123px] w-full max-w-[123px] md:h-auto md:max-w-[150px]"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <h1 className="max-w-[222px] text-[18px] leading-[23px] font-bold text-[#000] md:max-w-[510px] md:text-[38px] md:leading-[46.996px]">
          {sectionTwo.title}
        </h1>
        <p className="mt-5 w-full text-[10px] leading-[12px] font-normal text-[#747474] md:mt-0 md:mt-[10px] md:max-w-[562px] md:text-[18px] md:leading-normal">
          {sectionTwo.description}
        </p>
        <div className="flex w-full flex-col gap-6 pt-5 md:gap-[82px] md:pl-[45px]">
          {sectionTwo.sectionItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between md:flex-row md:items-start md:gap-[48px]"
              >
                <div className="flex w-full max-w-[562px] flex-col gap-3 md:gap-10">
                  <p className="mt-[10px] w-full text-[18px] leading-[1.2] font-semibold text-[#747474] md:text-[32px]">
                    {item.title}
                  </p>
                  <p className="w-full text-[10px] font-normal text-[#747474] md:text-[18px]">
                    {item.description}
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <Image
                    src={item.image}
                    alt="d"
                    className="h-auto w-full object-cover md:w-auto lg:max-w-[640px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3 mb-5 w-full md:mb-[240px] md:pl-[45px]">
        <p className="mb-2 text-[18px] leading-[18px] font-normal text-[#747474] md:text-[32px] md:leading-[39px]">
          {conclusionTitle}
        </p>
        <p className="mb-0 text-[10px] leading-[10px] font-normal text-[#747474] md:text-[18px] md:leading-[28.496px]">
          {conclusionDescription}
        </p>
      </div>
    </div>
  );
}
