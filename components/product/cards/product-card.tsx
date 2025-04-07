import React from "react";
import Image from "next/image";
import {
  cart,
  s_tag,
  HeartIcon,
  rating_star,
  matched,
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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        borderColor: "rgba(0, 0, 0, 0.04)",
      }}
      className="product-card max-w-[240px] rounded-[8px] border-[1.5px]"
    >
      <div className="w-full overflow-hidden rounded-[8px] border-[1.5px] border-[#1F1F1F0A] bg-white">
        <div className="relative w-[240px]">
          <Image
            src={product.image}
            alt={"sw"}
            className="h-full max-h-[240px] w-full rounded-lg object-cover"
          />
          <button className="absolute top-2 right-2 rounded-[4px] bg-white p-2 shadow-md">
            <Image height={20} width={20} src={HeartIcon} alt="heart" />
          </button>
        </div>
        <div
          style={{
            borderColor: "rgba(0, 0, 0, 0.04)",
          }}
          className="flex h-[170px] flex-col justify-between border-t-1 px-3 pt-2 pb-3"
        >
          <p className="font-inter text-left text-[13px] leading-[15.73px] font-normal">
            {product.title}
          </p>
          <div className="flex flex-row items-center justify-between space-x-2">
            <div className="flex flex-col gap-1">
              <p className="text-dark flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-1px]">
                AED{" "}
                <span className="ml-1 text-left text-[16px] font-bold">
                  {product.price}
                </span>
              </p>
              {product.oldPrice && (
                <p className="flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-1px] text-[#1F1F1F80]">
                  AED{" "}
                  <span className="ml-1 text-left text-[14px] leading-[10px] font-bold text-[#1F1F1F80] line-through">
                    {product.oldPrice}
                  </span>
                </p>
              )}
            </div>
            <div className="max-h-max rounded-[4px] p-[6px] shadow-lg">
              <Image
                src={cart}
                height={18}
                width={18}
                alt="cart"
                className="h-[18px] w-[18px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-link text-[9px] leading-[10px] font-semibold text-[#54A3FA] italic">
              Free Delivery
            </p>
            {product.discount && (
              <p className="text-[12px] leading-[14.52px] font-bold text-[#2AA136]">
                {product.discount}
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

export default ProductCard;
