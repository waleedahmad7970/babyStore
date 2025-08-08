"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import Button from "@/components/button/button";
import SizeSelector from "@/components/button/size-select-btn";
import DeliveryServiceCard from "@/components/cards/delivery-services";
import Cookies from "js-cookie";
import Icons from "@/public/assets/svg-component";
import {
  TabbyCard,
  DiscountCard,
  CashbackCard,
  DeliveryCard,
  PriceMatchCard,
  InstallationCard,
} from "@/components/cards/card-info-components";
import {
  aedIcon,
  full_star,
  grey_star,
  half_star,
  left_right_arrow,
  seperator,
  share,
} from "@/public/assets/icons";
import ProductSwiperSlider from "@/components/slider/product.swiper";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ReviewSection from "@/components/reviews/product-reviews";
import ProductPagingSlider from "@/components/slider/product-pagging-slider";
import { deliveryService, productData } from "@/static/static";
import { useParams, useRouter } from "next/navigation";
import productServices from "@/services/product.service";
import HighlightsAccordion from "@/components/Accordian/hightlight-accordian";
import FeaturesAccordion from "@/components/Accordian/feature-accordian";
import SpecificationAccordion from "@/components/Accordian/specification-accordian";
import FullScreenLoader from "@/components/Loader/fullscreen-loader";
import { userActions } from "@/store/slices/auth.slice";
import { cartAction } from "@/store/slices/cart.slice";
import { calculateAverageRating } from "@/helpers/helper";
const installationPrices = {
  "Dubai, Abu Dhabi, Al Ain, Sharjah & Ajman (within city limits) – FREE": 0,
  "*Abu Dhabi, & Sharjah( Outside City Limits) +315 AED": 315,
  "*Hatta,  RAK, FUJ, UAQ and other Northern & Western emirates +315 aed": 315,
  "No Installation/Delivery required": 0,
};

// export default function ProductDetails({ product = productData }) {
export default function Page() {
  const router = useRouter();
  const params = useParams();
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);
  const [recentProducts, setRecentProducts] = useState([]);
  const [initalQuanity, setInitialQuantity] = useState(1);
  const [selectedInstallation, setSelectedInstallation] = useState<
    string | null
  >(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  const { productDetails = {}, relatedProducts = [] } =
    useAppSelector((state) => state.product) || {};
  const { wishList = [] } = useAppSelector((state) => state.user);
  const { cartProducts = [] } = useAppSelector((state) => state.cart);

  const {
    id,
    brand_name,
    description,
    features,
    gallery,
    image,
    is_kwik,
    min_quantity,
    name,
    price,
    reviews,
    recommended_age,
    dimensions,
    discount,
    weight,
    sku,
    return_id,
    shipping_id,
    installation_attribute_array,
    type,
    specification,
    color,
    brand_id,
    promo_price,
    is_promo,
  } = (productDetails as any) || {};

  const averageRating = calculateAverageRating(reviews || []);

  const discountPercentage =
    is_promo && promo_price ? ((price - promo_price) / price) * 100 : 0;
  const sliderImages = gallery && JSON.parse(gallery);
  const productFeature = features && JSON.parse(features);

  const currentProductDetails = cartProducts?.find(
    (item) => Number(item?.id) === Number(params?.id),
  );
  const { quantity } = currentProductDetails || {};

  const hasPromo = is_promo && promo_price;

  const finalPrice = hasPromo
    ? Number(promo_price) + (selectedPrice || 0)
    : price + (selectedPrice || 0);

  const originalPrice = price + (selectedPrice || 0);
  useEffect(() => {
    const fetchAndStoreProduct = async () => {
      // if (!params?.id) return;
      if (!params?.id) {
        return notFound();
      }
      try {
        setLoader(true);
        const [res] = await productServices.getProductDetails(params.id);

        const product = res?.data?.data;

        if (res?.data?.success && product) {
          // Store product in Redux

          const existing = Cookies.get("recentProducts");
          let recentProducts = existing ? JSON.parse(existing) : [];

          recentProducts = recentProducts.filter(
            (p: any) => p.id !== product.id,
          );

          recentProducts.unshift({
            id: product.id,
            name: product.name,
            image: product.image,
            slug: product.slug,
            discount: product.discount,
            price: product.price,
            reviews: product.reviews,
            rating: product.ratings,
          });

          recentProducts = recentProducts.slice(0, 5);

          Cookies.set("recentProducts", JSON.stringify(recentProducts), {
            expires: 7,
          });
        }
      } catch (error) {
        console.error("Failed to fetch product details", error);
      } finally {
        // ✅ This runs regardless of success or failure
        setLoader(false);
      }
    };

    fetchAndStoreProduct();
  }, [params?.id]);

  useEffect(() => {
    const data = Cookies.get("recentProducts");
    if (data) {
      setRecentProducts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    setSelectedInstallation(installation_attribute_array?.[0]);
  }, []);

  const wishedProduct = wishList?.find(
    (product) => product?.id === id && product?.wished === true,
  );
  console.log({ currentProductDetails });
  const addToWishlist = () => {
    dispatch(
      userActions.addToUserWishList({ id, name, title: name, image, price }),
    );
  };

  const handleNavigate = () => {
    router.push(`/brand/${brand_id}`);
  };

  return (
    <div className="cus-container mx-auto mt-3 rounded-lg md:mt-10">
      {loader && <FullScreenLoader isLoading={loader} />}
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <div className="relative mx-auto w-full md:max-w-[839px]">
          <div className="absolute top-3 right-3 z-10 flex cursor-pointer flex-col gap-5 md:top-7 md:right-[33px] md:gap-2">
            {[share]?.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="img"
                className="h-6 w-6 md:h-10 md:w-10"
              />
            ))}
            <button onClick={addToWishlist}>
              <Icons.FavIcon
                color={wishedProduct?.wished ? "#F82D8B" : "#E2E0DE"}
              />
            </button>
          </div>
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 md:top-7 md:left-[28px] md:gap-[6px]">
            <div className="rounded-[50px] bg-[#FFEEF6] px-2 py-[5px] md:px-4 md:py-[10px]">
              <p className="mb-0 text-[10.471px] leading-none font-medium text-[#1F1F1F] uppercase md:text-[16.795px]">
                Coupon:
                <span className="ml-1 text-[10.471px] leading-none font-bold uppercase md:text-[16.795px]">
                  NEW15
                </span>
              </p>
            </div>
            {discountPercentage > 0 && (
              <div className="mb-0 max-w-max rounded-[50px] bg-[#FFEEF6] px-2 py-[5px] text-[10.471px] leading-none font-bold text-[#00AE42] md:px-4 md:py-[10px] md:text-[16.795px]">
                {`${discountPercentage.toFixed(0)}% Off` || "0 % Off"}
              </div>
            )}
          </div>

          <ProductPagingSlider sliderImages={sliderImages} />
        </div>
        <div className="mx-auto w-full md:max-w-[469px]">
          <h1 className="font-inter tracking-0 text-[14px] leading-[16.94px] font-normal text-[#1F1F1F] md:text-[20px] md:leading-[24px]">
            {name || "Product Name"}
          </h1>
          <div className="font-inter flex gap-[2px] text-[11px] leading-[13px] font-semibold text-[#858585]">
            View all{" "}
            <div
              onClick={handleNavigate}
              className="block max-w-max cursor-pointer text-inherit no-underline"
            >
              <span className="font-inter mr-[2px] text-[11px] font-semibold text-[#6A94FF] underline">
                {" "}
                {brand_name || "Product Brand"}{" "}
              </span>
            </div>
            products.
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              {hasPromo ? (
                <>
                  <p className="flex items-baseline justify-between text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1A1718]">
                    <Image
                      src={aedIcon}
                      className="h-[12px] w-[12px]"
                      alt="curr"
                    />{" "}
                    <span className="ml-[3px] text-[16px] font-bold">
                      {finalPrice?.toFixed(2)}
                    </span>
                  </p>
                  <p className="flex items-baseline text-[10px] leading-[12px] font-normal tracking-[-0.4px] text-[#1F1F1F80] line-through">
                    <Image
                      src={aedIcon}
                      className="h-[12px] w-[12px]"
                      alt="curr"
                    />{" "}
                    <span className="ml-[3px] text-[14px] font-medium">
                      {originalPrice?.toFixed(2)}
                    </span>
                  </p>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="flex items-center justify-between gap-1 text-[26px] leading-[24px] font-semibold tracking-[-0.66px] text-[#1F1F1F]">
                    <Image
                      src={aedIcon}
                      className="h-[18px] w-[18px]"
                      alt="curr"
                    />{" "}
                    {finalPrice?.toFixed(2)}
                  </span>
                  {/* Optional: strike-through if you want to fake discount */}
                  <span className="flex items-center justify-between gap-1 text-[16px] leading-[24px] font-semibold text-[#929391] line-through">
                    <Image
                      src={aedIcon}
                      className="h-[18px] w-[18px]"
                      alt="curr"
                    />{" "}
                    {originalPrice?.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center">
              {(() => {
                const rating = Number(averageRating) || 0;
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                return (
                  <>
                    {[...Array(fullStars)]?.map((_, i) => (
                      <Image
                        key={`full-${i}`}
                        src={full_star}
                        alt="full"
                        className="h-4 w-4"
                      />
                    ))}

                    {hasHalfStar && (
                      <Image src={half_star} alt="half" className="h-4 w-4" />
                    )}

                    {[...Array(emptyStars)]?.map((_, i) => (
                      <Image
                        key={`empty-${i}`}
                        src={grey_star}
                        alt="empty"
                        className="h-4 w-4"
                      />
                    ))}
                  </>
                );
              })()}
              <span className="ml-[2px] text-[12px] leading-[14.88px] font-normal text-[#5D5E5C]">
                {reviews?.length > 0 ? `(${reviews.length})` : "(No reviews)"}
              </span>
            </div>
          </div>
          <div className="space-y-3 md:max-w-[470px]">
            <DiscountCard />
            <TabbyCard />
            <PriceMatchCard />
            {/* <DeliveryCard /> */}
            <CashbackCard />
          </div>

          {/* instaltion */}
          {installation_attribute_array?.length > 0 && (
            <div className="flex flex-col gap-2">
              <h1 className="font-inter tracking-0 mt-5 text-[14px] leading-[16.94px] font-normal text-[#1F1F1F] md:text-[20px] md:leading-[24px]">
                {"Installation Charges"}
              </h1>
              {installation_attribute_array?.map(
                (installment: string, index: number) => {
                  const [label, rawPrice] = installment?.split("__");
                  const price = parseFloat(rawPrice || "0");

                  return (
                    <InstallationCard
                      key={index}
                      text={label}
                      selected={selectedInstallation === label}
                      onClick={() => {
                        setSelectedInstallation(label);
                        setSelectedPrice(price ?? 0);
                      }}
                    />
                  );
                },
              )}
            </div>
          )}
          {/* size */}

          <div className="py-3">
            {/* <div className="flex items-center justify-start gap-[10px] pb-3">
              <p className="text-[14px] leading-[14.88px] font-medium text-[#1F1F1F]">
                Size{" "}
              </p>
              <p className="text-[10px] leading-[14.88px] font-medium text-[#54A3FA] underline">
                Size Guide
              </p>
            </div>
            <SizeSelector /> */}
          </div>
          {/* interactions buttons */}
          <div className="hidden justify-between gap-1 sm:flex">
            <button
              onClick={() => {
                dispatch(
                  cartAction.setAddToCartModelProductCart({
                    id,
                    name,
                    image,
                    price: finalPrice,
                    insatllmentPrice: selectedPrice,
                    rating: averageRating ?? 0,
                    discount: discountPercentage ?? 0,
                    quantity: initalQuanity,
                    update: true,
                  }),
                );
                dispatch(
                  cartAction.setAddCurrentAddedProduct({
                    id,
                    name,
                    image,
                    price: finalPrice,
                    quantity: initalQuanity,

                    insatllmentPrice: selectedPrice,
                    rating: averageRating ?? 0,
                    discount: discountPercentage ?? 0,
                  }),
                );
              }}
              style={{
                background: "linear-gradient(180deg, #FE9132 0%, #FE9132 100%)",
                boxShadow: "0px -3px 0px 0px rgba(0, 0, 0, 0.10) inset",
              }}
              className="w-full cursor-pointer rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] bg-[#4F4F4F] px-10 py-4 text-[16px] leading-[16px] font-medium text-white md:my-0"
            >
              Add to Basket{" "}
            </button>
            <Button
              handler={() => {
                setInitialQuantity((prev) => (prev > 1 ? prev - 1 : 1));

                dispatch(cartAction.decrementQuantity(id));
              }}
              text="-"
              className="flex h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
            />
            <Button
              text={quantity || initalQuanity}
              className="flex h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
            />
            <Button
              handler={() => {
                setInitialQuantity((prev) => prev + 1);
                dispatch(cartAction.incrementQuantity(id));
              }}
              text="+"
              className="flex h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
            />
          </div>
          {/* cart and qunaity buttons for mobile view make fix or sticky */}
          <div className="fixed right-0 bottom-[60px] left-0 z-50 block border-t border-gray-100 bg-white sm:hidden">
            <div className="flex justify-between gap-1 px-[10px] py-2">
              <button
                onClick={() => {
                  dispatch(
                    cartAction.setAddToCartModelProductCart({
                      id,
                      name,
                      image,
                      price: finalPrice,
                      insatllmentPrice: selectedPrice,
                      rating: averageRating ?? 0,
                      discount: discountPercentage ?? 0,
                      quantity: initalQuanity,
                      update: true,
                    }),
                  );
                  dispatch(
                    cartAction.setAddCurrentAddedProduct({
                      id,
                      name,
                      image,
                      price: finalPrice,
                      quantity: initalQuanity,

                      insatllmentPrice: selectedPrice,
                      rating: averageRating ?? 0,
                      discount: discountPercentage ?? 0,
                    }),
                  );
                }}
                style={{
                  background:
                    "linear-gradient(180deg, #FE9132 0%, #FE9132 100%)",
                  boxShadow: "0px -3px 0px 0px rgba(0, 0, 0, 0.10) inset",
                }}
                className="w-full rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] bg-[#4F4F4F] px-10 py-4 text-[16px] leading-[16px] font-medium text-white md:my-0"
              >
                Add to Basket{" "}
              </button>
              <Button
                handler={() => {
                  setInitialQuantity((prev) => (prev > 1 ? prev - 1 : 1));

                  dispatch(cartAction.decrementQuantity(id));
                }}
                text="-"
                className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
              />
              <Button
                text={quantity || initalQuanity}
                className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
              />
              <Button
                handler={() => {
                  setInitialQuantity((prev) => prev + 1);

                  dispatch(cartAction.incrementQuantity(id));
                }}
                text="+"
                className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#F6F6F6] text-[17px] leading-[21px] font-bold"
              />
            </div>
          </div>

          <button
            style={{
              background: "linear-gradient(180deg, #4F4F4F 0%, #323232 100%)",
            }}
            className="mt-1 mb-4 w-full rounded-[50px] border-r-[1px] border-b-[3px] border-l-[1px] border-[#171717] bg-[#4F4F4F] px-10 py-4 text-[16px] leading-[16px] font-medium text-white md:my-2"
          >
            Buy Now
          </button>
          {/* delivery serv */}
          <div className="mb-3 flex items-center justify-around bg-white md:mb-0 md:pt-[10px] md:pb-[18px]">
            {deliveryService?.map((feature, index) => (
              <Fragment key={feature.id}>
                <DeliveryServiceCard
                  icon={feature.icon}
                  title={feature.title}
                />
                {index !== deliveryService?.length - 1 && (
                  <Image src={seperator} alt="sep" className="mx-2" />
                )}
              </Fragment>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-2">
            <HighlightsAccordion
              sku={sku}
              type={type}
              color={color}
              weight={weight}
              dimensions={dimensions}
              returns={return_id}
              recommended_age={recommended_age}
            />
            <FeaturesAccordion features={productFeature} />
            {/* {specification && */}

            {specification && (
              <SpecificationAccordion
                title="Specifications"
                content={`${specification}`}
              />
            )}
            {/* } */}
            {description && (
              <SpecificationAccordion
                title="Description"
                content={description}
              />
            )}

            {return_id && (
              <SpecificationAccordion
                title="Returns"
                content={
                  return_id === 1
                    ? "No Return"
                    : return_id === 2
                      ? "Eligible for refund within 7 days."
                      : ""
                }
              />
            )}
            {shipping_id && (
              <SpecificationAccordion
                title="Shipping"
                content={
                  shipping_id === 1
                    ? "No Return"
                    : shipping_id === 2
                      ? "Eligible for refund within 7 days."
                      : ""
                }
              />
            )}
          </div>
        </div>
      </div>
      <ReviewSection reviews={reviews} />
      <ProductSwiperSlider
        title={"Similar Products"}
        products={relatedProducts}
      />
      {recentProducts?.length > 0 && (
        <ProductSwiperSlider
          title={"Recent Products"}
          products={recentProducts}
        />
      )}
    </div>
  );
}
