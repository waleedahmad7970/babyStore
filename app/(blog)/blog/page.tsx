import { blog_card, blogmain } from "@/public/assets/blogs";
import { men, strong_calendar, white_arrow_right } from "@/public/assets/icons";
import { blogTags } from "@/static/static";
import Image from "next/image";
import React from "react";

export const babySwingCardsData = [
  {
    image: "/assets/baby-swing-1.jpg",
    date: "12 Mar, 2023",
    comments: 52,
    title: "How to choose the best baby swing?",
    description:
      "We've tested dozens of baby swings so you don’t have to. tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to. From smart Bluetooth-enabled models to simple manual ones, here are the top picks that balance comfort, safety, and ease of use for busy parents.",
    authorName: "Lionardo De Caprio",
    authorImage: "/assets/authors/samantha.jpg",
  },
  {
    image: "/assets/baby-swing-2.jpg",
    date: "24 Feb, 2023",
    comments: 136,
    title: "How to Choose the Right Baby Swing",
    description:
      "Not all baby swings are made equal. This guide helps you understand the different types, features to prioritize like recline settings and noise levels, and how to match the swing to your baby's age and temperament.",
    authorName: "Lionardo De Caprio",
    authorImage: "/assets/authors/lionardo.jpg",
  },
  {
    image: "/assets/baby-swing-3.jpg",
    date: "03 Jan, 2023",
    comments: 87,
    title: "Swing Safety Tips Every Parent Should Know",
    description:
      "Even the best swing isn't safe if not used properly. Learn about essential safety practices including harnessing, placement, swing timing, and why it's important never to leave your baby unattended.",
    authorName: "Emily Stone",
    authorImage: "/assets/authors/emily.jpg",
  },
  {
    image: "/assets/baby-swing-4.jpg",
    date: "18 Dec, 2022",
    comments: 64,
    title: "Best Budget Baby Swings That Actually Work",
    description:
      "On a tight budget? We’ve reviewed swings under $100 that are still durable, reliable, and packed with useful features. Find out which ones are worth it and which to avoid.",
    authorName: "Michael Sun",
    authorImage: "/assets/authors/michael.jpg",
  },
  {
    image: "/assets/baby-swing-5.jpg",
    date: "06 Nov, 2022",
    comments: 29,
    title: "When to Start and Stop Using a Baby Swing",
    description:
      "Wondering when to introduce your baby to a swing? Or when it’s time to stop using it altogether? Our pediatric-backed advice breaks down age guidelines, developmental milestones, and weaning tips.",
    authorName: "Isabella Blue",
    authorImage: "/assets/authors/isabella.jpg",
  },
  {
    image: "/assets/baby-swing-6.jpg",
    date: "21 Oct, 2022",
    comments: 111,
    title: "Do Baby Swings Help with Sleep?",
    description:
      "Baby swings can be soothing—but are they safe for sleep? We explore what doctors recommend, how to use swings for short naps, and when it's time to transition to a crib for better sleep habits.",
    authorName: "James Holloway",
    authorImage: "/assets/authors/james.jpg",
  },
];

const tags = ["Outdoor", "Online", "Kids", "Outdoor"];

export default function page() {
  return (
    <div className="cus-container mx-auto w-full">
      <div className="relative my-0 w-full overflow-hidden rounded-[5px] md:my-10">
        <Image
          src={blogmain}
          alt="blog"
          className="h-auto min-h-[200px] w-full object-fill"
        />
        {/* Gradient Background Only */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(32,28,28,0.9)] mix-blend-multiply" />

        {/* Content Layer Above */}
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
              {tags.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py:0 rounded-[16px] border-1 border-white px-[9px] py-[3px] text-[5.172px] leading-[5px] font-normal md:px-[28px] md:text-[14px] md:leading-[25px]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[16px] border-1 border-white px-[9px] text-[5.172px] leading-[5px] font-normal md:px-[28px] md:text-[14px] md:leading-[25px]"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 py-5 md:py-10">
        {blogTags?.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer rounded-[50px] border-1 border-[#747474] px-2 py-[5px] text-[12px] font-normal text-[#747474] hover:border-none hover:bg-[#F82D8B33] hover:text-[#F82D8B] md:px-3 md:py-2"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div
        className="grid grid-cols-[repeat(auto-fit,_minmax(166px,_1fr))] gap-[7px] md:grid-cols-3 md:gap-[17px]"
        //   className="flex flex-wrap justify-start gap-[17px]"
      >
        {babySwingCardsData.map((item, index) => (
          <div
            key={index}
            className="flex max-h-fit min-w-[166px] flex-col justify-start gap-[6.1px] rounded-[7px] md:w-full md:max-w-[442px] md:gap-[14.4px]"
          >
            <div className="relative h-[108px] w-full overflow-hidden rounded-[7px] md:h-[248px]">
              <Image
                src={blog_card}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center justify-start gap-[12px]">
                <Image
                  src={strong_calendar}
                  className="h-[9.2px] w-[9.2px] md:h-[18px] md:w-[18px]"
                  alt="cal"
                />
                <span className="text-[4.365px] leading-[10px] font-normal tracking-[0.524px] text-[#747474] md:text-[10px] md:tracking-[1.2px]">
                  {"24 Feb,2023"}
                </span>
              </div>
              <div className="h-[6px] w-[1px] bg-[#747474] md:h-[14px]" />
              <div className="flex items-center justify-start gap-[12px]">
                <Image
                  src={strong_calendar}
                  className="h-[9.2px] w-[9.2px] md:h-[18px] md:w-[18px]"
                  alt="cal"
                />
                <span className="text-[4.365px] leading-[10px] font-normal tracking-[0.524px] text-[#747474] md:text-[10px] md:tracking-[1.2px]">
                  136 COMMENTS
                </span>
              </div>
            </div>
            <h3 className="text-[7.857px] leading-[140%] font-normal text-[#070A13] md:text-[18px] md:font-medium">
              {item.title}
            </h3>
            <p className="text-[6px] leading-[9.601px] font-normal text-[#747474] md:text-[14px] md:leading-[22px]">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5.6px]">
                <Image
                  src={men}
                  alt={item.authorName}
                  className="h-[28px] w-[28px] rounded-full object-cover"
                />

                <span className="text-[5.2px] leading-[7.566px] font-normal tracking-[1.2px] text-[#1F1F1F] md:text-[12px] md:leading-[17.333px] md:font-semibold">
                  {item.authorName}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-[4.4px] bg-[#61B582] py-[3.8px] pr-[5.7px] pl-[9.6px] text-white md:py-[8.8px] md:pr-[13.3px] md:pl-[22px]">
                <p className="mb-0 text-[5.238px] leading-[11.521px] font-normal text-[#FFF] md:text-[12px] md:leading-[27px] md:font-medium">
                  Read More
                </p>
                <Image
                  src={white_arrow_right}
                  alt={item.authorName}
                  className="h-[9.2px] w-[9.2px] rounded-full md:h-[21px] md:w-[21px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
