"use client";

import {
  calculateAverageRatingProduct,
  getStarCounts,
  getStarPercentages,
} from "@/helpers/helper";
import {
  arrows_sort,
  full_star,
  grey_star,
  half_star,
} from "@/public/assets/icons";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";

const ReviewSection = ({ reviews }: any) => {
  const [showAll, setShowAll] = useState(false);
  const { full, half, empty, average } = getStarCounts(reviews);
  const visibleReviews = showAll ? reviews : reviews?.slice(0, 3);
  const percentages = getStarPercentages(reviews);

  return (
    <div className="py-[40px] lg:space-y-6 lg:p-6 lg:py-[100px]">
      <h2 className="mb-10 text-2xl font-bold md:mb-0">Reviews</h2>

      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <div className="max-h-max w-full rounded-[16px] border border-[#E2E8F0] p-6 lg:max-w-[375px]">
          <div className="flex items-baseline text-[28px] font-bold text-[#434343]">
            {average || 0}
            <span className="text-[16px] font-medium">/5</span>
          </div>
          <div className="mb-3 text-[10px] font-medium text-[#868686]">
            {visibleReviews?.length} Rating • {reviews?.length} Reviews
          </div>

          <div className="mb-6 flex items-center gap-0">
            {[...Array(full)]?.map((_, i) => (
              <Image
                key={`full-${i}`}
                src={full_star}
                className={"h-[34px] min-w-[34px]"}
                alt="Full Star"
              />
            ))}
            {[...Array(half)]?.map((_, i) => (
              <Image
                key={`half-${i}`}
                src={half_star}
                className={"h-[34px] min-w-[34px]"}
                alt="Half Star"
              />
            ))}
            {[...Array(empty)]?.map((_, i) => (
              <Image
                key={`empty-${i}`}
                src={grey_star}
                className={"h-[34px] min-w-[34px]"}
                alt="Empty Star"
              />
            ))}
          </div>

          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="min-w-[36px] text-[12px] leading-[160%] font-medium text-[#868686]">
                  {star} Star
                </span>
                <div className="h-2 w-full rounded bg-[#F0F0F0]">
                  <div
                    className="h-full rounded bg-[#FEBD19]"
                    style={{ width: `${percentages[index]}%` }}
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
              showAll ? "max-h-[1000px]" : "max-h-[320px] md:max-h-[320px]"
            }`}
          >
            {visibleReviews?.length > 0 ? (
              <div>
                {visibleReviews?.map((review: any, i: number) => (
                  <div key={i} className="border-t border-[#E2E8F0] py-[10px]">
                    <div className="flex items-center justify-between">
                      <div className="mb-[2px] text-[14px] leading-[170%] font-bold text-[#434343]">
                        {review.name}
                      </div>
                      <div className="flex gap-1">
                        {(() => {
                          const rating = Number(review?.stars) || 0;
                          const fullStars = Math.floor(rating);
                          const hasHalfStar = rating % 1 >= 0.5;
                          const greyStars =
                            5 - fullStars - (hasHalfStar ? 1 : 0);

                          return (
                            <>
                              {[...Array(fullStars)].map((_, idx) => (
                                <Image
                                  key={`full-${idx}`}
                                  src={full_star}
                                  alt="full star"
                                  className="h-4 w-4"
                                />
                              ))}

                              {hasHalfStar && (
                                <Image
                                  key="half"
                                  src={half_star}
                                  alt="half star"
                                  className="h-4 w-4"
                                />
                              )}

                              {[...Array(greyStars)].map((_, idx) => (
                                <Image
                                  key={`grey-${idx}`}
                                  src={grey_star}
                                  alt="empty star"
                                  className="h-4 w-4"
                                />
                              ))}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                    <div className="mb-3 text-[12px] leading-[170%] font-medium text-[#868686]">
                      {review?.created_at &&
                        moment(review?.created_at).fromNow()}
                    </div>
                    <div className="mb-3 text-[12px] leading-[170%] font-normal text-[#868686]">
                      {review?.comment}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mb-[2px] text-[14px] leading-[170%] font-bold text-[#434343]">
                No Reviews
              </div>
            )}
          </div>
          {visibleReviews?.length > 2 && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-4 w-full cursor-pointer rounded-[5px] border border-[#FEBD19] py-2 text-[16px] font-medium text-[#FEBD19] transition hover:bg-[#FEBD19] hover:text-black"
            >
              {showAll ? "Show less" : "View more reviews"}
            </button>
          )}
        </div>
      </div>

      <div className="mt-[100px] rounded-[16px] bg-[#FAFAFA] py-[60px] text-center">
        <div className="flex justify-center gap-1">
          {[...Array(5)]?.map((_, i) => (
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
