"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";

import SliderHeading from "../header-titles/slider-header";
import BlogCard from "../cards/blog-card";

interface Blog {
  id: number;
  image: StaticImageData | string;
  category: string;
  date: string;
  read_time: string;
  title: string;
  description: string;
}

interface BlogSliderProps {
  blogs: Blog[];
}

const BlogSlider: React.FC<BlogSliderProps> = ({ blogs }) => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    className: "blog-slider",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden px-[10px] py-5 md:py-0 md:py-10">
      <SliderHeading onPrev={previous} onNext={next} />

      <div className="relative mx-auto min-h-[244px] max-w-[1360px] md:min-h-[400px]">
        <div className="absolute left-0 w-[100vw]">
          <Slider ref={sliderRef} {...settings}>
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                category={blog.category}
                date={blog.date}
                readTime={blog.read_time}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
