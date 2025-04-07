"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";

import SliderHeading from "../header-titles/slider-header";
import BlogCard from "../cards/blog-card";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useScrollSlider } from "@/hooks/useScrollSlider";

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

  const { width } = useWindowDimensions();
  const scrollAmount = width < 768 ? 277 : 407;
  const { scrollRef, scrollBy } = useScrollSlider(scrollAmount);
  // const { scrollRef, itemRefs, scrollToNext, scrollToPrev } = useScrollSlider();

  let left = (width - 1360) / 2 - 10;
  if (left < 0) left = 0;
  return (
    // <div className="relative w-full overflow-hidden px-[10px] py-5 md:py-0 md:py-10">
    //   <SliderHeading onPrev={previous} onNext={next} />

    //   <div className="relative mx-auto min-h-[244px] max-w-[1360px] md:min-h-[400px]">
    //     <div className="absolute left-0 w-[100vw]">
    //       <Slider ref={sliderRef} {...settings}>
    //         {blogs.map((blog) => (
    //           <BlogCard
    //             key={blog.id}
    //             image={blog.image}
    //             category={blog.category}
    //             date={blog.date}
    //             readTime={blog.read_time}
    //             title={blog.title}
    //             description={blog.description}
    //           />
    //         ))}
    //       </Slider>
    //     </div>
    //   </div>
    // </div>

    <div className="relative w-full overflow-hidden py-5 pl-[10px] md:py-10">
      <div className="relative mx-auto w-full max-w-[1360px] pr-[10px]">
        <SliderHeading
          onPrev={() => scrollBy("left")}
          onNext={() => scrollBy("right")}
        />
      </div>
      <div
        // ref={scrollRef}
        style={{ paddingLeft: `${left}px` }}
        className="relative w-full max-w-[100dvw]"
      >
        <div
          ref={scrollRef}
          //  style={{ marginLeft: `${left}px` }}
          className="no-scrollbar relative flex snap-x snap-mandatory justify-start gap-[10px] overflow-x-auto scroll-smooth md:gap-4"
        >
          {/* <div className=""> */}
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
