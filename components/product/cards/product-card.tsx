"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  s_tag,
  rating_star,
  matched,
  wishlist,
  redBag,
  wishedIcon,
  whiteBag,
} from "../../../public/assets/icons";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartAction } from "@/store/slices/cart.slice";
import { userActions } from "@/store/slices/auth.slice";
import { calculateAverageRating } from "@/helpers/helper";
import { logo } from "@/public/assets/brands";
import { facllBackProduct } from "@/public/assets/products";

interface ProductData {
  id: number;
  name?: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews?: { rating: number }[];
  slug?: string;
  is_promo?: number;
  promo_price?: number;
}

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    name,
    title,
    image,
    price,
    oldPrice,
    discount,
    reviews = [],
    rating,
    slug,
    is_promo,
    promo_price,
  } = product;

  const dispatch = useAppDispatch();
  const { wishList = [] } = useAppSelector((state) => state.user);
  const { cartProducts = [] } = useAppSelector((state) => state.cart);

  const discountPercentage =
    is_promo && promo_price ? ((price - promo_price) / price) * 100 : 0;

  const averageRating = calculateAverageRating(reviews || []);

  const wishedProduct = wishList?.find((p) => p?.id === id && p?.wished);
  const addedCartProduct = cartProducts?.find(
    (p) => p?.id === id && p?.isAddedToCart,
  );
  const hasPromo = is_promo && promo_price;

  const finalPrice = hasPromo ? Number(promo_price) : price;
  const originalPrice = price;

  const addToWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(
      userActions.addToUserWishList({
        id,
        name,
        title,
        image,
        price: finalPrice,
        rating: averageRating ?? 0,
        discount: discountPercentage,
      }),
    );
  };

  const addToCart = () => {
    if (!addedCartProduct?.isAddedToCart) {
      dispatch(cartAction.setAddToCartModel(true));
    }
    const cartPayload = {
      id,
      name,
      title,
      image,
      price: finalPrice,
      rating: averageRating ?? 0,
      discount: discountPercentage,
    };
    dispatch(cartAction.setAddCurrentAddedProduct(cartPayload));
    dispatch(cartAction.setAddToCartModelProduct(cartPayload));
  };

  return (
    <div
      style={{
        borderColor: "rgba(248, 45, 139, 0.10)",
      }}
      className="product-card max-w-[240px] rounded-[8px] border-[1.5px]"
    >
      <div className={`w-full overflow-hidden rounded-[8px] bg-white`}>
        <div className="relative min-h-[240px] min-w-[240px] overflow-hidden">
          <Link
            href={`/product/${id}`}
            className="block text-inherit no-underline"
          >
            <div className="relative min-h-[240px] min-w-[240px] overflow-hidden">
              <Image
                src={
                  `https:www.babystore.ae/storage/${image}` || facllBackProduct
                }
                alt={image || "sw"}
                fill
                className="h-full w-full cursor-pointer object-cover transition duration-500 hover:scale-125 hover:rotate-3"
              />
            </div>
          </Link>
          <button
            onClick={addToWishlist}
            className={`absolute top-[15px] right-[14px] flex h-8 w-8 items-center justify-center rounded-full border-1 border-[rgba(248,45,139,0.10)] ${
              wishedProduct?.wished
                ? "bg-[#F82D8B]"
                : "bg-[rgba(248,45,139,0.04)]"
            }`}
          >
            <Image
              height={20}
              width={20}
              src={wishedProduct?.wished ? wishedIcon : wishlist}
              alt="heart"
              className="cursor-pointer"
            />
          </button>
        </div>

        <div
          style={{
            borderColor: "rgba(248, 45, 139, 0.10)",
          }}
          className="flex h-[170px] flex-col justify-between border-t-1 px-3 pt-2 pb-3"
        >
          <p className="font-inter line-clamp-2 min-h-[32px] text-left text-[13px] leading-[15.73px] font-normal text-[#1A1718]">
            {name}
          </p>
          <div className="flex flex-row items-center justify-between space-x-2">
            <div className="flex min-h-[32px] flex-col gap-1">
              {is_promo && promo_price ? (
                <>
                  <p className="text-dark flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1A1718]">
                    AED{" "}
                    <span className="ml-[3px] text-left text-[16px] font-bold">
                      {Number(promo_price)?.toFixed(2)}
                    </span>
                  </p>
                  <p className="flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1F1F1F80] line-through">
                    AED
                    <span className="ml-[3px] text-left text-[14px] leading-[10px] font-medium text-[#1F1F1F80]">
                      {price?.toFixed(2)}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-dark flex items-baseline justify-start text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1A1718]">
                  AED{" "}
                  <span className="ml-[3px] text-left text-[16px] font-bold">
                    {price?.toFixed(2)}
                  </span>
                </p>
              )}
            </div>

            <button
              onClick={addToCart}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${
                addedCartProduct?.isAddedToCart
                  ? "border-[rgba(248,45,139,0.10)] bg-[#F82D8B]"
                  : "border-[rgba(248,45,139,0.10)] bg-[rgba(248,45,139,0.04)]"
              }`}
            >
              <Image
                height={20}
                width={20}
                src={addedCartProduct?.isAddedToCart ? whiteBag : redBag}
                alt="cart"
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-link text-[9px] leading-[10px] font-semibold text-[#54A3FA] italic">
              Free Delivery
            </p>
            {typeof discountPercentage === "number" &&
              discountPercentage > 0 && (
                <p className="text-[12px] leading-[14.52px] font-bold text-[#2AA136]">
                  {`${discountPercentage.toFixed(0)}% OFF`}
                </p>
              )}
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-[2.7px] rounded-[15px] bg-[#FE9132] px-[3.7px] py-[1.7px] text-xs text-white">
              <Image src={s_tag} alt="s" width={10} height={10} className="" />{" "}
              <Image src={matched} alt="match" height={6} />
            </span>

            {averageRating > 0 && (
              <span className="font-inter flex items-center gap-1 text-[14px] leading-[16.41px] font-normal">
                <Image src={rating_star} alt="rating" />
                <span className="mt-1 text-[14px] leading-[10px] text-[#434343]">
                  {averageRating}
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
