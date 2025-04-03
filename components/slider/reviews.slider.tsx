"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";

import SliderHeading from "../header-titles/slider-header";
import ReviewCard from "../cards/product-review-card";

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
    autoplay: true,
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

  return (
    <div className="relative w-full overflow-hidden px-[10px] py-5 md:py-10">
      <SliderHeading onPrev={previous} onNext={next} />

      <div className="relative mx-auto min-h-[310px] max-w-[1360px] md:min-h-[400px]">
        <div className="absolute left-0 w-[100vw]">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
