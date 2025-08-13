import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import moment from "moment";
import { fallBackImage } from "@/public/assets/products";

interface BlogCardProps {
  id: number;
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  category,
  date,
  readTime,
  title,
  description,
}) => {
  return (
    <Link href={`/blog`} className="block text-inherit no-underline">
      <div className="relative max-w-[277px] min-w-[277px] overflow-hidden rounded-[4px] bg-[#FFF0F566] p-2 md:max-w-[407px] md:min-w-[407px]">
        <div className="relative h-[145px] w-full overflow-hidden rounded-[4px] md:h-[213px]">
          <Image
            src={
              image
                ? `https://www.babystore.ae/storage/back/assets/blogs/${image}`
                : fallBackImage
            }
            alt="tile"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-[5px] md:mt-2">
          {/* <div className="max-w-max rounded-[4px] bg-[#FD71AF] p-[4.18px] md:p-[6.14px]">
            <p className="m-0 text-[10.74px] leading-[8px] font-medium text-white">
              {category}
            </p>
          </div> */}
          <p className="font-inter py-[3.13px] text-[10.17px] leading-[10px] font-medium text-[#000000] md:py-[4.6px]">
            {moment(date).format("MMM DD, YYYY")} • {readTime}
          </p>
          <h3 className="font-inter min-h-[42.97px] text-[12px] leading-[140%] font-semibold text-[#000000] md:text-[15.34px] md:leading-[21.48px]">
            {title}
          </h3>
          <p
            style={{ color: "rgba(0, 0, 0, 0.50)" }}
            className="line-clamp-2 text-[9px] leading-[160%] font-normal md:text-[12.274px]"
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
