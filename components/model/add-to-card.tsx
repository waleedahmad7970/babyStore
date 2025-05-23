import { checkout_1, cross } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";
import Button from "../button/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartAction } from "@/store/slices/cart.slice";
import { useRouter } from "next/navigation";
import { usePreventBodyScroll } from "@/hooks/preventBodyScroll";
const data = {
  id: 1,
  name: "Lindale Outdoor Wooden Swing And Slide Playset...",
  price: 20081.25,
  quantity: 3,
  image: checkout_1,
};
interface Product {
  title: string;
  image: string;
  price: number;
}
export default function AddToCard({
  className = "relative p-6 rounded-[12px] bg-[#fff] w-full sm:max-w-[363px] ",
  addToCartModel,
}: {
  className?: string;
  addToCartModel: boolean;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  usePreventBodyScroll(addToCartModel);
  const { addCurrentAddedProduct = {} } = useAppSelector((state) => state.cart);
  const { title = "", image = "", price = 0 } = addCurrentAddedProduct || {};
  const handleCloseModel = () => {
    dispatch(cartAction.setAddToCartModel(false));
  };
  const redirectToCart = (path: any) => {
    router.push(path);
  };
  return (
    <div
      onClick={handleCloseModel}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div className={`${className}`}>
        <div className="absolute top-[-15px] right-0 z-20 flex h-[30px] w-[30px] items-center justify-between rounded-[18px] border border-[#000000]/10 bg-[#FFF] p-2 sm:right-[-15px]">
          <Image src={cross} className="cursor-pointer" alt="s" />
        </div>
        <div
          key={data.id}
          className="relative flex h-[115px] justify-between gap-2 rounded-[7.6px] bg-[#FAFAFA] px-[5.4px] py-[5.4px] md:justify-start"
        >
          <Image
            onClick={handleCloseModel}
            alt="cros"
            src={cross}
            className="absolute top-[5px] right-[5px] cursor-pointer"
          />
          <Image
            src={image.src || data?.image}
            alt={"cart-data"}
            height={104}
            width={104}
            className="min-w-[104px] rounded-[5.67px] object-contain"
          />
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <p className="line-clamp-2 w-[95%] text-[13px] leading-[17.2px] font-medium text-[#1F1F1F]">
                {title || data.name}
              </p>
              <div className="flex items-center justify-start">
                <div className="h-[14px] w-[14px] rounded-full bg-[#FFCD52]" />
                <div className="mx-2 h-3 w-[1px] border-r-1 border-[#1F1F1F]" />
                <p className="mb-0 text-[10px] leading-[20px] font-normal text-[#A0A0A0]">
                  12m
                </p>
                <div className="mx-2 h-3 w-[1px] border-r-1 border-[#1F1F1F]" />
                <p className="mb-0 text-[10px] leading-[20px] font-normal text-[#A0A0A0]">
                  M
                </p>
                <div className="mx-2 h-3 w-[1px] border-r-1 border-[#1F1F1F]" />
                <p className="mb-0 text-[10px] leading-[20px] font-normal text-[#A0A0A0]">
                  30kg
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[9.673px] leading-[9.673px] font-light text-[#1F1F1F]">
                  AED
                </p>
                <p className="text-[14.882px] leading-[12.649px] font-semibold text-[#1F1F1F]">
                  {price?.toFixed(2) || data.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <Button
            handler={handleCloseModel}
            text={"Continue Shopping"}
            className="w-full cursor-pointer rounded-[5px] border border-[#61B582] bg-[#fff] px-3 py-1 text-[14px] leading-[25px] font-semibold text-[#61B582] md:px-6 md:py-2 md:text-[14px]"
          />
          <Button
            handler={() => redirectToCart("/product")}
            text={"View Cart"}
            className="w-full max-w-[127px] cursor-pointer rounded-[5px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-semibold text-[#fff] underline md:px-6 md:py-2 md:text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
