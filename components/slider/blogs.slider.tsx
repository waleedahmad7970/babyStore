"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";

import SliderHeading from "../header-titles/slider-header";
import BlogCard from "../cards/blog-card";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useScrollSlider } from "@/hooks/useScrollSlider";
import { useAppSelector } from "@/store/hooks";

interface Blog {
  id: number;
  image: string | StaticImageData;
  category: string;
  date: string;
  read_time: string;
  title: string;
  description: string;
}

interface BlogSliderProps {
  blogs: Blog[];
}

const BlogSlider: React.FC = ({}) => {
  const sliderRef = useRef<Slider | null>(null);
  const { blogs = [] } = useAppSelector((state) => state.blogs);
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

  const { width } = useWindowDimensions();
  const scrollAmount = width < 768 ? 277 : 407;
  const { scrollRef, scrollBy } = useScrollSlider(scrollAmount);
  // const { scrollRef, itemRefs, scrollToNext, scrollToPrev } = useScrollSlider();

  let left = (width - 1360) / 2 - 10;
  if (left < 0) left = 0;
  return (
    <div className="cus-container relative w-full overflow-hidden !py-5 pl-[10px] md:py-10">
      <div className="relative mx-auto w-full pr-[10px]">
        <SliderHeading
          title="Blogs - Babystore"
          onPrev={() => scrollBy("left")}
          onNext={() => scrollBy("right")}
        />
      </div>
      <div
        // ref={scrollRef}
        // style={{ paddingLeft: `${left}px` }}
        // className="relative w-full max-w-[100dvw]"
        className="relative w-full"
      >
        <div
          ref={scrollRef}
          //  style={{ marginLeft: `${left}px` }}
          className="no-scrollbar relative flex snap-x snap-mandatory justify-start gap-[10px] overflow-x-auto scroll-smooth md:gap-4"
        >
          {blogs?.length > 0 &&
            blogs.map((blog: any, index: number) => (
              <BlogCard
                key={index}
                id={blog?.id}
                image={blog?.image}
                category={blog.category}
                date={blog?.created_at}
                readTime={blog?.created_at}
                title={blog?.title}
                description={blog.short_description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
