"use client";
import Button from "@/components/button/button";
import { call_icon_white, conformTick } from "@/public/assets/icons";
import orderServices from "@/services/order.service";
import { useAppSelector } from "@/store/hooks";
import { cartAction } from "@/store/slices/cart.slice";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const returnStatuses: Record<number, string> = {
  1: "1-2 days",
  2: "1-3 days",
  3: "2-3 days",
  4: "3-5 days",
  5: "4-5 days",
  6: "5-7 days",
  7: "7-10 days",
  8: "10-14 days",
  9: "4-5 weeks",
  10: "no return available",
};
export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { orderDetails = {} } = useAppSelector((state) => state.orders) as any;
  const { order = {} } = orderDetails || {};

  const { order_details = [], billing_info = {} } = order || {};
  console.log({ order_details, order });
  useEffect(() => {
    if (id) orderServices.getOrderDetails(Number(id));
    dispatch(cartAction.emptyCart());
  }, []);
  const totalPrice = order_details?.reduce((sum: number, item: any) => {
    const quantity = item?.qty ?? 1;
    return sum + (item?.price ?? 0) * quantity;
  }, 0);

  const taxAmount = Number(order?.tax) ?? 0;
  const orderTotal = totalPrice + taxAmount + Number(order?.shipping);
  const subTotal = [
    { label: "Sub Total", value: totalPrice?.toFixed(2) },
    { label: "Tax", value: taxAmount ? taxAmount?.toFixed(2) : 0 },
    { label: "Order Total", value: orderTotal ? orderTotal?.toFixed(2) : 0 },
  ];

  return (
    <div className="cus-container mx-auto flex flex-col items-center justify-center">
      <div className="mt-10 flex w-full max-w-[365px] items-center justify-center gap-3">
        <Image src={conformTick} alt="lgo" className="mr-1 h-[38px] w-[38px]" />
        <div className="flex flex-col">
          <p className="mb-0 text-[24px] leading-[22px] font-medium text-[#201C1C]">
            Order Placed
          </p>
          <div className="mb-0 flex text-[18px] leading-[18px] font-light text-[#201C1C]">
            Your order number is{" "}
            <span className="ml-1 font-semibold"> #{id}.</span>
          </div>
        </div>
      </div>
      <div className="my-10 w-full max-w-[640px] rounded-[10px] bg-[#fff0f5] px-0 py-10 text-center md:px-5">
        <h1 className="text-[34px] leading-[32px] font-medium text-[#1F1F1F]">
          Thank you shopping
          <br /> at babystore.
        </h1>
        <p className="my-3 mb-0 text-[28px] leading-[34px] font-medium">
          Your Order
        </p>
        <p className="mb-0 text-[14px] leading-[17px] font-normal text-[#999999]">
          Monday, Dec 28 2015 at 4.13pm
        </p>

        <div className="mt-5 w-full rounded-[8px] bg-white p-1 md:p-4">
          <div className="space-y-1">
            {order_details?.map((order: any, key: number) => {
              return (
                <div key={key} className="flex items-center justify-between">
                  <span
                    className={`font-Inter line-clamp-1 max-w-max text-left text-[16px] leading-[24px] font-normal text-[#1F1F1F]`}
                  >
                    {order?.product?.name || "Product Name"}
                  </span>
                  <span
                    className={`font-Inter text-[14px] leading-[24px] font-normal text-[#1F1F1F]`}
                  >
                    <span
                      className={`text-[10px] leading-normal font-normal text-[#1F1F1F]`}
                    >
                      AED
                    </span>{" "}
                    {order?.price * order?.qty || "0.00"}
                  </span>
                </div>
              );
            })}

            <div className="flex items-center justify-between">
              <span
                className={`font-Inter ] text-[16px] leading-[24px] font-normal text-[#999999]`}
              >
                Sub Total
              </span>
              <span
                className={`font-Inter text-[14px] leading-[24px] font-normal text-[#999999]`}
              >
                <span
                  className={`text-[10px] leading-normal font-normal text-[#999999]`}
                >
                  AED
                </span>{" "}
                {totalPrice?.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`font-Inter ] text-[16px] leading-[24px] font-normal text-[#999999]`}
              >
                Tax
              </span>
              <span
                className={`font-Inter text-[14px] leading-[24px] font-normal text-[#999999]`}
              >
                <span
                  className={`text-[10px] leading-normal font-normal text-[#999999]`}
                >
                  AED
                </span>{" "}
                {taxAmount?.toFixed(2) || 0}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`font-Inter ] text-[16px] leading-[24px] font-normal text-[#999999]`}
              >
                Shipping
              </span>
              <span
                className={`font-Inter text-[14px] leading-[24px] font-normal text-[#999999]`}
              >
                <span
                  className={`text-[10px] leading-normal font-normal text-[#999999]`}
                >
                  {order?.shipping}
                </span>{" "}
                {taxAmount?.toFixed(2) || 0}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`font-Inter ] text-[16px] leading-[24px] font-normal text-[#999999]`}
              >
                Delivery
              </span>
              <span
                className={`font-Inter text-[14px] leading-[24px] font-normal text-[#999999]`}
              >
                {returnStatuses[order?.delivery_id] || "Delivery time -- "}
              </span>
            </div>
            <div className="flex items-center justify-between border-t-2 border-b-2 border-[#ddd]">
              <span
                className={`font-Inter ] text-[16px] leading-[24px] font-semibold text-[#1F1F1F]`}
              >
                Total Amount
              </span>
              <span
                className={`font-Inter text-[14px] leading-[24px] font-semibold text-[#1F1F1F]`}
              >
                <span
                  className={`text-[10px] leading-normal font-normal text-[#1F1F1F]`}
                >
                  AED
                </span>{" "}
                {orderTotal?.toFixed(2) || 0}
              </span>
            </div>
          </div>
        </div>
        <p className="my-3 mb-0 text-[28px] leading-[34px] font-medium">
          Your Details
        </p>
        <div className="bg-white p-4 text-start">
          <span
            className={`font-Inter ] text-[16px] leading-[24px] font-medium text-[#1F1F1F]`}
          >
            Shipping to
          </span>
          <div className="mt-1 flex w-full justify-between gap-1 rounded-[8px]">
            <div
              className={`font-Inter flex flex-col gap-1 text-start text-[16px] leading-[24px] font-normal text-[#999999] capitalize`}
            >
              <span>{"Email"}</span>
              <span>{"Phone"}</span>
              <span>{"Address 1"}</span>
              <span>{"Address 2"}</span>
            </div>
            <div
              className={`font-Inter flex flex-col gap-1 text-end text-[14px] leading-[24px] font-normal text-[#1F1F1F] capitalize`}
            >
              <span>{billing_info?.email}</span>
              <span>{billing_info?.phone}</span>
              <span>{billing_info?.address_1}</span>
              <span>{billing_info?.address_2}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 text-start">
          <span
            className={`font-Inter ] text-[16px] leading-[24px] font-medium text-[#1F1F1F]`}
          >
            Billed to
          </span>
          <div className="mt-1 flex w-full justify-between gap-1 rounded-[8px]">
            <div
              className={`font-Inter flex flex-col gap-1 text-start text-[16px] leading-[24px] font-normal text-[#999999] capitalize`}
            >
              <span>{"Payment Method"}</span>
              <span>{"Payment Status"}</span>
            </div>
            <div
              className={`font-Inter flex flex-col gap-1 text-end text-[14px] leading-[24px] font-normal text-[#1F1F1F] capitalize`}
            >
              <span>{order?.payment_method}</span>
              <span>{order?.payment_status}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-1 rounded-[8px] bg-[#FD71AF] px-[30px] py-[40px] text-white">
          <p className="font-Inter mb-2 text-[34px] leading-[34px] font-medium text-[#FFF]">
            Tell Your Friends
          </p>
          <p className="mb-0 text-[12px] leading-[18px] font-medium text-[#FFF]">
            Share this unique URL with friends & every time they sign up you get
            AED 5.00 credit.
          </p>
          <div className="rounded-[4px] border-1 border-dashed border-[#FFF0F5] bg-[#FD71AF]/90 p-2">
            <p className="mb-0 text-[12px] font-medium text-[#FFF]">
              short.url/10h23s0c{" "}
            </p>
          </div>
        </div>

        <Button
          handler={() => router.push("/")}
          type={"submit"}
          text={"Continue Shopping"}
          className="mt-5 w-full max-w-[50%] cursor-pointer rounded-[8px] border-1 border-dashed border-white bg-[#FD71AF] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] transition-all duration-75 hover:text-[16px] md:px-6 md:py-2 md:text-[18px]"
        />
      </div>
    </div>
  );
}
