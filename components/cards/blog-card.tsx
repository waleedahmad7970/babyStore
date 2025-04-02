import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  image: string | StaticImageData;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  date,
  readTime,
  title,
  description,
}) => {
  return (
    <div className="overflow-hidden rounded-[4px] bg-[#FFF0F566] p-2">
      <Image
        src={image}
        alt={"tile"}
        className="h-[145px] w-full rounded-[4px] object-cover sm:h-[213px]"
      />
      <div className="mt-[5px] md:mt-2">
        <span className="rounded-[4px] bg-[#FD71AF] p-[4.18px] text-[10.74px] leading-[12.59px] font-medium text-white md:p-[6.14px]">
          {category}
        </span>
        <p className="font-inter py-[3.13px] text-[10.17px] leading-[10px] font-medium text-[#000000] md:py-[4.6px]">
          {date} • {readTime} min read
        </p>
        <h3 className="font-inter text-[12px] leading-[140%] font-semibold text-[#000000] md:text-[15.34px] md:leading-[21.48px]">
          {title}
        </h3>
        <p className="line-clamp-2 text-[9px] leading-[160%] font-normal text-[#000000] md:text-[12.274px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
