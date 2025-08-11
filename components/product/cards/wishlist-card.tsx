import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  cart,
  s_tag,
  HeartIcon,
  rating_star,
  matched,
  wishlist,
  redBag,
  aedIcon,
} from "../../../public/assets/icons";

import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface WishlistData {
  id: number;
  title?: string;
  name?: string;
  image: StaticImageData | string;
  price?: number;
  oldPrice?: number;
  discount?: string | number;
  rating: number;
  delivery?: string | undefined;
}
interface WishlistCardProps {
  product: WishlistData;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ product }) => {
  const router = useRouter();
  const redirectToCart = (path: any) => {
    router.push(path);
  };
  return (
    <div
      style={{
        borderColor: "rgba(248, 45, 139, 0.10)",
        boxShadow:
          "0px 3px 8px 0px rgba(0, 0, 0, 0.06), 0px 3px 10px 0px rgba(0, 0, 0, 0.02)",
      }}
      className="product-card rounded-[8px] border-[1.5px]"
    >
      <div className={`w-full overflow-hidden rounded-[8px] bg-white`}>
        <div
          onClick={() => redirectToCart("/product")}
          className="relative h-[212px] md:min-w-[212px]"
        >
          <Image
            src={
              `https://www.babystore.ae/storage/${product?.image}` ||
              product?.image
            }
            fill
            alt={"sw"}
            className="h-full min-h-[212px] w-full rounded-lg object-cover"
          />
        </div>

        <div
          style={{
            borderColor: "rgba(248, 45, 139, 0.10)",
          }}
          className="flex h-[120px] flex-col justify-between border-t-1 px-3 pt-2 pb-3"
        >
          <p className="font-inter line-clamp-2 text-left text-[13px] leading-[15.73px] font-normal text-[#1A1718]">
            {product?.name}
          </p>
          <div className="flex flex-row items-center justify-between space-x-2">
            <div className="flex flex-col gap-1">
              <p className="text-dark flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1A1718]">
                <Image src={aedIcon} className="h-[12px] w-[12px]" alt="curr" />{" "}
                <span className="ml-[3px] text-left text-[16px] font-bold">
                  {product?.price?.toLocaleString()}
                </span>
              </p>
              <div className="flex">
                {product?.oldPrice && (
                  <p className="flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1F1F1F80] line-through">
                    <Image
                      src={aedIcon}
                      className="h-[12px] w-[12px]"
                      alt="curr"
                    />{" "}
                    <span className="ml-[3px] text-left text-[14px] leading-[10px] font-medium text-[#1F1F1F80]">
                      {product?.oldPrice?.toLocaleString()}
                    </span>
                  </p>
                )}
                {Number(product.discount) > 0 && (
                  <p className="mt-[-2px] ml-3 text-[12px] leading-[14.52px] font-bold text-[#2AA136]">
                    {product?.discount}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {product.delivery === "free" ? (
              <p className="text-link text-[9px] leading-[10px] font-semibold text-[#54A3FA] italic">
                Free Delivery
              </p>
            ) : product.delivery === "standard" ? (
              <p className="text-link text-[11.093px] leading-[11.093px] font-normal text-[#434343]">
                Standard Delivery
                <br />6 July - 9 July
              </p>
            ) : (
              <span className="flex items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
                <Image
                  src={s_tag}
                  alt="s"
                  width={10}
                  height={10}
                  className=""
                />{" "}
                <Image src={matched} alt="match" height={6} />
              </span>
            )}

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

export default WishlistCard;
