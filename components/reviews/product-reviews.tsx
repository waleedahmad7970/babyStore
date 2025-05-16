"use client";

import {
  arrows_sort,
  full_star,
  grey_star,
  half_star,
} from "@/public/assets/icons";
import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Georgette Strobel",
    time: "2 days ago",
    text: "The shoe runs really, really big! I usually take an 11 for Nike, but this is really huge!",
    rating: 4.5,
  },
  {
    name: "Tyra Dhillon",
    time: "2 days ago",
    text: "Love colorway, the shoe is super comfortable.",
    rating: 4,
  },
  {
    name: "Tyniaha Obey",
    time: "2 days ago",
    text: "I love them, they are beautiful, the colors, they combine with everything, very comfortable and fashionable",
    rating: 5,
  },
  {
    name: "Georgette Strobel",
    time: "2 days ago",
    text: "The shoe runs really, really big! I usually take an 11 for Nike, but this is really huge!",
    rating: 4.5,
  },
  {
    name: "Tyra Dhillon",
    time: "2 days ago",
    text: "Love colorway, the shoe is super comfortable.",
    rating: 4,
  },
  {
    name: "Tyniaha Obey",
    time: "2 days ago",
    text: "I love them, they are beautiful, the colors, they combine with everything, very comfortable and fashionable",
    rating: 5,
  },
];

const ReviewSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);
  return (
    <div className="py-[40px] lg:space-y-6 lg:p-6 lg:py-[100px]">
      <h2 className="mb-10 text-2xl font-bold md:mb-0">Reviews</h2>

      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <div className="max-h-max w-full rounded-[16px] border border-[#E2E8F0] p-6 lg:max-w-[375px]">
          <div className="flex items-baseline text-[28px] font-bold text-[#434343]">
            4.9<span className="text-[16px] font-medium">/5</span>
          </div>
          <div className="mb-3 text-[10px] font-medium text-[#868686]">
            23 Rating • 960 Reviews
          </div>

          <div className="mb-6 flex items-center gap-0">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={full_star}
                className="h-[34px] min-w-[34px]"
                alt="star"
              />
            ))}
            <Image
              src={half_star}
              className="h-[34px] min-w-[34px]"
              alt="star"
            />
          </div>

          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="min-w-[36px] text-[12px] leading-[160%] font-medium text-[#868686]">
                  {star} Star
                </span>
                <div className="h-2 w-full rounded bg-[#F0F0F0]">
                  <div
                    className="h-full rounded bg-[#FEBD19]"
                    style={{ width: `${(6 - star) * 20}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-[#434343]">
          <div className="mb-[10px] flex items-center justify-between">
            <h3 className="text-[16px] leading-[165%] font-bold">
              User Reviews
            </h3>
            <Image src={arrows_sort} className="h-[24px] w-[24px]" alt="arr" />
          </div>

          <div
            className={`transition-max-height transform-gpu overflow-hidden duration-500 ease-in-out ${
              showAll ? "max-h-[1000px]" : "max-h-[320px] md:max-h-[250px]"
            }`}
          >
            {visibleReviews?.map((review, i) => (
              <div key={i} className="border-t border-[#E2E8F0] py-[10px]">
                <div className="flex items-center justify-between">
                  <div className="mb-[2px] text-[14px] leading-[170%] font-bold text-[#434343]">
                    {review.name}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(Math.floor(review.rating))].map(
                      (_, idx) =>
                        idx < 5 && (
                          <Image key={idx} src={full_star} alt="star" />
                        ),
                    )}
                    {review.rating % 1 > 0 && Math.floor(review.rating) < 5 && (
                      <Image key="half" src={half_star} alt="star" />
                    )}
                  </div>
                </div>
                <div className="mb-3 text-[12px] leading-[170%] font-medium text-[#868686]">
                  {review.time}
                </div>
                <div className="mb-3 text-[12px] leading-[170%] font-normal text-[#868686]">
                  {review.text}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 w-full cursor-pointer rounded-[5px] border border-[#FEBD19] py-2 text-[16px] font-medium text-[#FEBD19] transition hover:bg-[#FEBD19] hover:text-black"
          >
            {showAll ? "Show less" : "View more reviews"}
          </button>
        </div>
      </div>

      <div className="mt-[100px] rounded-[16px] bg-[#FAFAFA] py-[60px] text-center">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={grey_star}
              alt="star"
              className="mb-4 h-[28px] w-[28px]"
            />
          ))}
        </div>
        <p className="text-[16px] leading-[170%] font-medium text-[#868686]">
          There are no customer reviews yet.
        </p>
        <a
          href="#"
          className="text-[16px] leading-[170%] font-medium text-[#78A0FA] underline"
        >
          Be the first one to review this product!
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;
