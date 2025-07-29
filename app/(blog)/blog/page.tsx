"use client";

import { blogmain } from "@/public/assets/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  comments,
  men,
  strong_calendar,
  white_arrow_right,
} from "@/public/assets/icons";
import blogService from "@/services/blogs.service";
import { useAppSelector } from "@/store/hooks";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const tags = ["Outdoor", "Online", "Kids", "Outdoor"];

export default function Page() {
  const router = useRouter();
  const [selectBlogCat, setSelectBlogCat] = useState("");
  const { blogs = [], blogSlider = [] } = useAppSelector(
    (state) => state.blogs,
  );
  const categoryNames = blogs?.map((blog: any) => blog.category_name) || [];
  const categoryTags = [...new Set(categoryNames)];

  useEffect(() => {
    blogService.getAllBlogs();
    blogService.getBlogSlider();
  }, []);

  const redirectToCart = (path: string) => {
    router.push(path);
  };

  return (
    <div className="cus-container mx-auto w-full">
      {/* <div className="relative my-0 w-full overflow-hidden rounded-[5px] md:my-10">
        <Image
          src={blogmain}
          alt="blog"
          className="h-auto min-h-[200px] w-full object-fill"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(32,28,28,0.9)] mix-blend-multiply" />

        <div className="absolute inset-0 z-10 flex items-end p-4 md:p-8">
          <div className="w-full max-w-[904px] text-white">
            <p className="mb-[6px] text-[6px] leading-[7.2px] font-medium md:mb-5 md:text-[16px] md:leading-[25px]">
              Lionardo de Caprio • Fri 24 Feb 2023
            </p>
            <p className="mb-[4px] text-[12px] leading-[7.2px] md:mb-[9px] md:text-[38px] md:leading-[25px] md:font-bold">
              How to choose the best baby swing?
            </p>
            <p className="mb-2 text-[6px] leading-[5.78px] font-normal md:mb-[30px] md:line-clamp-2 md:text-[16px] md:leading-[20px]">
              A baby swing is a magical device that will rock your little one to
              provide comfort like never before. With its soft and cozy seat,
              gentle rocking motion, and fun toy bar, your baby will be cradled
              in comfort.
            </p>
            <div className="flex flex-wrap items-center justify-start gap-1">
              {tags.map((item, index) => (
                <div
                  key={index}
                  className="py:0 rounded-[16px] border-1 border-white px-[9px] py-[3px] text-[5.172px] leading-[5px] font-normal md:px-[28px] md:text-[14px] md:leading-[25px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] border-1 border-white px-[9px] text-[5.172px] leading-[5px] font-normal md:px-[28px] md:text-[14px] md:leading-[25px]"></div>
        </div>
      </div> */}
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="rounded-[5px] md:max-h-max"
        >
          {blogSlider.map((slide: any, index) => (
            <SwiperSlide key={slide?.id ?? index}>
              {/* Desktop image */}
              <div className="relative hidden h-[500px] w-full overflow-hidden rounded-[5px] md:my-10 md:block">
                <Image
                  src={
                    slide?.image
                      ? `https://www.babystore.ae/storage/back/assets/blogs/${slide.image}`
                      : "/fallback-desktop.jpg"
                  }
                  alt="blog"
                  fill
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(32,28,28,0.9)] mix-blend-multiply" />
              </div>

              {/* Mobile image */}
              <div className="relative block h-[300px] w-full overflow-hidden rounded-[5px] md:hidden">
                <Image
                  src={
                    slide?.mobile_image
                      ? `https://www.babystore.ae/storage/back/assets/blogs/${slide.mobile_image}`
                      : "/fallback-mobile.jpg"
                  }
                  alt="blog"
                  fill
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(32,28,28,0.9)] mix-blend-multiply" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text Layer */}
        <div className="absolute inset-0 z-10 flex items-end p-3 md:bottom-10 md:p-8">
          <div className="w-full max-w-[904px] text-white">
            <p className="mb-1 text-[6px] leading-[7px] font-medium md:mb-5 md:text-[16px] md:leading-[25px]">
              Leonardo DiCaprio • Fri 24 Feb 2023
            </p>
            <h2 className="mb-1 text-[12px] leading-[14px] font-bold md:mb-[9px] md:text-[38px] md:leading-[44px]">
              How to choose the best baby swing?
            </h2>
            <p className="mb-2 line-clamp-2 text-[6px] leading-[6px] font-normal md:mb-[30px] md:text-[16px] md:leading-[20px]">
              A baby swing is a magical device that will rock your little one to
              provide comfort like never before. With its soft and cozy seat,
              gentle rocking motion, and fun toy bar, your baby will be cradled
              in comfort.
            </p>
            <div className="flex flex-wrap items-center gap-1">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-[16px] border border-white px-[9px] py-[3px] text-[5.2px] leading-[5px] font-normal md:px-[28px] md:text-[14px] md:leading-[25px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 py-5 md:py-10">
        {categoryTags?.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectBlogCat(item)}
            className={`cursor-pointer rounded-[50px] border-1 border-[#747474] px-2 py-[5px] text-[12px] font-normal text-[#747474] hover:border-none hover:bg-[#F82D8B33] ${item === selectBlogCat ? "" : ""} hover:text-[#F82D8B] md:px-3 md:py-2`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(166px,_1fr))] gap-[7px] md:grid-cols-3 md:gap-[17px]">
        {blogs
          // ?.filter((blog) =>
          //   selectBlogCat ? blog.category_name === selectBlogCat : true,
          // )
          ?.map((blog: any, index: number) => (
            <div
              onClick={() => redirectToCart("/blog/1")}
              key={index}
              className="flex max-h-fit min-w-[166px] flex-col justify-start gap-[6.1px] rounded-[7px] md:w-full md:max-w-[442px] md:gap-[14.4px]"
            >
              <div className="relative h-[138px] w-full overflow-hidden rounded-[7px] md:h-[248px]">
                <Image
                  src={`https://www.babystore.ae/storage/back/assets/blogs/${blog?.image}`}
                  alt={"blog"}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="flex items-center justify-start gap-[12px]">
                  <Image
                    src={strong_calendar}
                    className="h-[9.2px] w-[9.2px] md:h-[18px] md:w-[18px]"
                    alt="cal"
                  />
                  <span className="text-[5px] leading-[10px] font-normal tracking-[0.524px] text-[#747474] md:text-[10px] md:tracking-[1.2px]">
                    {moment(blog?.date).format("MMM DD, YYYY")}
                  </span>
                </div>
                <div className="h-[6px] w-[1px] bg-[#747474] md:h-[14px]" />
                <div className="flex items-center justify-start gap-[12px]">
                  <Image
                    src={comments}
                    className="h-[9.2px] w-[9.2px] md:h-[18px] md:w-[18px]"
                    alt="cal"
                  />
                  <span className="text-[5px] leading-[10px] font-normal tracking-[0.524px] text-[#747474] md:text-[10px] md:tracking-[1.2px]">
                    {blog?.comments || 0} COMMENTS
                  </span>
                </div>
              </div>
              <h3 className="text-[10px] leading-[140%] font-normal text-[#070A13] md:text-[18px] md:font-medium">
                {blog?.title}
              </h3>
              <p className="text-[10px] leading-[10px] font-normal text-[#747474] md:text-[14px] md:leading-[22px]">
                {blog?.short_description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[5.6px]">
                  <Image
                    src={men}
                    alt={"name"}
                    className="h-[28px] w-[28px] rounded-full object-cover"
                  />
                  <span className="max-w-[63px] text-[8px] leading-[7.566px] font-normal tracking-[1.2px] text-[#1F1F1F] md:max-w-max md:text-[12px] md:leading-[17.333px] md:font-semibold">
                    {blog.authorName || "Auther Name"}
                  </span>
                </div>
                <Link href={`/blog/${blog?.id}`}>
                  <div className="flex cursor-pointer items-center gap-2 rounded-[4.4px] bg-[#61B582] py-[3.8px] pr-[5.7px] pl-[9.6px] text-white md:py-[8.8px] md:pr-[13.3px] md:pl-[22px]">
                    <p className="mb-0 text-[5.238px] leading-[11.521px] font-normal text-[#FFF] md:text-[12px] md:leading-[27px] md:font-medium">
                      Read More
                    </p>
                    <Image
                      src={white_arrow_right}
                      alt={"auth"}
                      className="h-[9.2px] w-[9.2px] rounded-full md:h-[21px] md:w-[21px]"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
