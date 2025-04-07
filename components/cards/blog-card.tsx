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
    <div className="max-w-[277px] min-w-[277px] overflow-hidden rounded-[4px] bg-[#FFF0F566] p-2 md:max-w-[407px] md:min-w-[407px]">
      <Image
        src={image}
        alt={"tile"}
        className="h-[145px] w-full rounded-[4px] object-cover sm:h-[213px]"
      />
      <div className="mt-[5px] md:mt-2">
        <div className="max-w-max rounded-[4px] bg-[#FD71AF] p-[4.18px] md:p-[6.14px]">
          <p className="m-0 text-[10.74px] leading-[8px] font-medium text-white">
            {category}
          </p>
        </div>
        <p className="font-inter py-[3.13px] text-[10.17px] leading-[10px] font-medium text-[#000000] md:py-[4.6px]">
          {date} • {readTime} min read
        </p>
        <h3 className="font-inter text-[12px] leading-[140%] font-semibold text-[#000000] md:text-[15.34px] md:leading-[21.48px]">
          {title}
        </h3>
        <p
          style={{
            color: "rgba(0, 0, 0, 0.50)",
          }}
          className="line-clamp-2 text-[9px] leading-[160%] font-normal md:text-[12.274px]"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
