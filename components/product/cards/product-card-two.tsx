import React from "react";
import Image from "next/image";
import {
  cart,
  s_tag,
  HeartIcon,
  rating_star,
  matched,
  wishlist,
  redBag,
} from "../../../public/assets/icons";

import { StaticImageData } from "next/image";

interface ProductData {
  id: number;
  title: string;
  image: StaticImageData | string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
}
interface ProductCardProps {
  product: ProductData;
}

const ProductCardTwo: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        borderColor: "rgba(248, 45, 139, 0.10)",
      }}
      className="product-card rounded-[8px] border-[1.5px]"
    >
      <div
        className={`w-full overflow-hidden rounded-[8px] border-[1.5px] border-[#1F1F1F0A] bg-white`}
      >
        <div className="relative max-h-[175px] max-w-[174px] md:h-auto lg:max-h-[259px] lg:max-w-[259px]">
          <Image
            src={product?.image}
            alt={"sw"}
            className="h-full w-full rounded-lg object-cover md:min-h-[240px]"
          />
          <button
            style={{
              background: "rgba(248, 45, 139, 0.04)",
              borderColor: "rgba(248, 45, 139, 0.10)",
            }}
            className="absolute top-[15px] right-[14px] flex h-8 w-8 items-center justify-center rounded-full border-1"
          >
            <Image height={20} width={20} src={wishlist} alt="heart" />
          </button>
        </div>
        <div
          style={{
            borderColor: "rgba(248, 45, 139, 0.10)",
          }}
          className="flex h-[170px] flex-col justify-between border-t-1 px-3 pt-2 pb-3"
        >
          <p className="font-inter text-left text-[13px] leading-[15.73px] font-normal text-[#1A1718]">
            {product?.title}
          </p>
          <div className="flex flex-row items-center justify-between space-x-2">
            <div className="flex flex-col gap-1">
              <p className="text-dark flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1A1718]">
                AED{" "}
                <span className="ml-[3px] text-left text-[16px] font-bold">
                  {product?.price?.toLocaleString()}
                </span>
              </p>
              {product?.oldPrice && (
                <p className="flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1F1F1F80] line-through">
                  AED
                  <span className="ml-[3px] text-left text-[14px] leading-[10px] font-medium text-[#1F1F1F80]">
                    {product?.oldPrice?.toLocaleString()}
                  </span>
                </p>
              )}
            </div>
            <button
              style={{
                background: "rgba(248, 45, 139, 0.04)",
                borderColor: "rgba(248, 45, 139, 0.10)",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border-1"
            >
              <Image height={20} width={20} src={redBag} alt="heart" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-link text-[9px] leading-[10px] font-semibold text-[#54A3FA] italic">
              Free Delivery
            </p>
            {product?.discount && (
              <p className="text-[12px] leading-[14.52px] font-bold text-[#2AA136]">
                {product?.discount}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
              <Image src={s_tag} alt="s" width={10} height={10} className="" />{" "}
              <Image src={matched} alt="match" height={6} />
            </span>
            {product.rating !== undefined && (
              <span className="font-inter flex items-center gap-1 text-[14px] leading-[16.41px] font-normal">
                <Image src={rating_star} alt="rating" className="" />{" "}
                <span className="text-[14px] leading-[10px] text-[#434343]">
                  {product.rating}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
