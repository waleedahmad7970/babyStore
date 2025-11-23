"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, Newspaper } from "lucide-react";
import BlogCard from "../cards/blog-card";
import { useAppSelector } from "@/store/hooks";

interface BlogSliderTwoProps {
  title?: string;
}

const BlogSliderTwo: React.FC<BlogSliderTwoProps> = ({ title = "Latest Blogs" }) => {
  const { blogs = [] } = useAppSelector((state) => state.blogs);

  return (
    <section className="group relative bg-white py-16">
      <div className="cus-container">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Newspaper className="text-[#E7448A]" size={28} />
            <h2 className="text-[22px] md:text-[28px] font-medium text-gray-900">
            {title}
            </h2>
          </div>

          <button className="rounded-full text-[14px] md:text-[16px] bg-black px-6 py-2 font-medium text-white transition-all hover:bg-[#E7448A]">
            View All Blogs
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40}
            breakpoints={{
              639: {   
                slidesPerView: 1,
              },
              640: {   
                slidesPerView: 2,
              },
              768: {   
                slidesPerView: 3,
              },
              1024: {  
                slidesPerView: 3,
              }}}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            className="!overflow-visible"
           
          >
            {blogs?.length > 0 ? (
              blogs.map((blog: any, index: number) => (
                <SwiperSlide key={index}>
                  <BlogCard
                    id={blog?.id}
                    image={blog?.image}
                    category={blog?.category}
                    date={blog?.created_at}
                    readTime={blog?.read_time || "3 min read"}
                    title={blog?.title}
                    description={blog?.short_description}
                  />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No blogs available.
              </p>
            )}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="prev-btn absolute top-1/2 left-4 z-10 -translate-x-10 -translate-y-1/2 cursor-pointer rounded-[8px] bg-white px-3 py-9 opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#E7448A] hover:text-white">
            <ArrowLeft size={20} />
          </button>

          <button className="next-btn absolute top-1/2 right-4 z-10 translate-x-10 -translate-y-1/2 cursor-pointer rounded-[8px] bg-white px-3 py-9 opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#E7448A] hover:text-white">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSliderTwo;
