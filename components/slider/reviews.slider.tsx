"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

import ReviewCard from "../cards/product-review-card";
import SliderHeading from "../header-titles/slider-header";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { StaticImageData } from "next/image";
import { useScrollSlider } from "@/hooks/useScrollSlider";

interface Review {
  id: number;
  review_count: number;
  text: string;
  reviewer: {
    name: string;
    field: string;
    image: StaticImageData | string;
  };
}

interface ReviewSliderProps {
  reviews: Review[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    className: "review-slider",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const { width } = useWindowDimensions();
  const scrollAmount = width < 768 ? 280 : 388;
  const { scrollRef, scrollBy } = useScrollSlider(scrollAmount);
  // const { scrollRef, itemRefs, scrollToNext, scrollToPrev } = useScrollSlider();

  let left = (width - 1360) / 2 - 10;
  if (left < 0) left = 0;
  return (
    <div className="cus-container relative w-full overflow-hidden !py-5 pl-[10px] md:py-10">
      <div className="relative mx-auto w-full pr-[10px]">
        <SliderHeading
          onPrev={() => scrollBy("left")}
          onNext={() => scrollBy("right")}
        />
      </div>
      <div
        // ref={scrollRef}
        // style={{ paddingLeft: `${left}px` }}
        // className="relative min-h-[310px] w-full max-w-[100dvw] md:min-h-[410px]"
        className="relative min-h-[310px] w-full md:min-h-[410px]"
      >
        <div
          ref={scrollRef}
          //  style={{ marginLeft: `${left}px` }}
          className="no-scrollbar relative flex min-h-[310px] snap-x snap-mandatory justify-start gap-4 overflow-x-auto scroll-smooth md:min-h-[410px]"
        >
          {/* <div className=""> */}
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
