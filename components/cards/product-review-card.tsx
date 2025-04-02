import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/button/button";
import { qout_icon } from "@/public/assets/icons";

interface Review {
  review_count: number;
  text: string;
  reviewer: {
    name: string;
    field: string;
    image: StaticImageData | string;
  };
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { review_count, text, reviewer } = review;
  const { name, field, image } = reviewer;

  return (
    <div className="relative w-full max-w-[368px] rounded-[21px] bg-[#F470AB1A] p-[14.16px] md:rounded-[30px] md:p-5">
      <Image
        src={qout_icon}
        alt="quote"
        className="absolute top-5 right-5 z-0"
        width={24}
        height={24}
      />

      <Button
        text={`${review_count} Reviews`}
        className="font-inter rounded-[50px] bg-[#F470AB33] px-[14.16px] py-[7.8px] text-[10px] leading-[14px] font-normal text-[#000] md:px-5 md:py-[10px] md:text-[13.73px]"
      />

      <p className="font-inter pt-[22px] pb-[10px] text-[12px] leading-normal font-normal text-[#000] md:pt-8 md:text-[20px] md:leading-[24px]">
        {text}
      </p>

      <Button
        text="Read More"
        className="font-inter rounded-[50px] bg-[#F470AB33] px-[14.16px] py-[7.8px] text-[10px] leading-[16.69px] font-semibold text-[#000] md:px-5 md:py-[10px] md:text-[12px]"
      />

      <div className="my-[15.57px] h-[2px] w-full bg-[#F470AB33] md:my-[22px]" />

      <div className="flex items-center">
        {typeof image === "string" ? (
          <Image
            src={image}
            alt={name}
            className="mr-3 h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="mr-3 h-12 w-12 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col justify-start gap-[3px]">
          <p className="font-Inter text-[12px] leading-[12px] font-semibold text-[#000] md:text-[20px] md:leading-[20px]">
            {name}
          </p>
          <p className="font-Inter text-[10px] leading-[10px] font-normal text-[#000] md:text-[16px] md:leading-[16px]">
            {field}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
