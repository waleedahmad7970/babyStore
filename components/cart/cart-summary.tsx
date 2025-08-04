import { paymentMethods } from "@/static/static";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { userActions } from "@/store/slices/auth.slice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
interface PaymentMethod {
  name: string;
  img: string;
}
const summaryData = [
  {
    title: "Subtotal:",
    value: "AED 155.00",
  },
  {
    title: "Tax:",
    value: "AED 5.00",
  },
  {
    title: "Discount:",
    value: "- AED 10.00",
  },
  {
    title: "Shipping:",
    value: "AED 15.00",
  },
  {
    title: "Cashback:",
    value: "- AED 5.00",
  },
  {
    title: "Total:",
    value: "AED 160.00",
  },
];
export const CartSummary = ({
  handleCheckout,
  total = 0,
  subtotal = 0,
  tax = 0,
  discount = 0,
}: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [couponValue, setCouponValue] = useState("");
  const { discountCouponDetails = {}, appliedCoupon = {} } = useAppSelector(
    (state) => state.user,
  ) as any;
  const handleCoupon = () => {
    if (couponValue.length <= 0)
      return toast.error("Please input your discount coupon");
    if (couponValue === discountCouponDetails?.coupon_applied) {
      toast.success("Coupon Appplied Successfully");
      dispatch(
        userActions.setApplyCoupon({
          coupon: true,
          discount: discountCouponDetails?.discount_value,
          couponValue,
        }),
      );
    } else {
      toast.error("Coupon has expired or incorrect");
    }
  };
  return (
    <div className="flex w-full flex-col gap-6 lg:max-w-[360px]">
      <div
        style={{
          borderColor: "rgba(0, 0, 0, 0.10)",
        }}
        className="flex flex-col gap-2 rounded-[8px] border p-5"
      >
        <p className="font-Inter text-[16px] leading-[24px] font-medium text-[#545454]">
          Have a coupon?
        </p>
        <div
          style={{
            borderColor: ` ${appliedCoupon?.coupon ? "#E7448C " : "rgba(0, 0, 0, 0.2)"}`,
          }}
          className={`flex justify-between overflow-hidden rounded-[8px] border ${appliedCoupon?.coupon ? "bg-[#FFF0F5] text-[#E7448C]" : ""}`}
        >
          <input
            value={appliedCoupon?.couponValue || couponValue}
            onChange={(e) => setCouponValue(e.target.value)}
            disabled={appliedCoupon?.coupon}
            className={`py-[10px] ps-4 text-[16px] font-normal outline-none`}
          />

          <button
            disabled={appliedCoupon?.coupon}
            onClick={() => handleCoupon()}
            type="button"
            style={{
              borderColor: "rgba(0, 0, 0, 0.2)",
            }}
            className={`cursor-pointer border-l px-5 text-[16px] leading-[22px] font-semibold text-[#E7448C] outline-none ${appliedCoupon?.coupon ? "bg-[#E7448C] text-[#fff]" : ""} hover:bg-[#E7448C] hover:text-white`}
          >
            Apply
          </button>
        </div>
      </div>
      <div
        style={{
          borderColor: "rgba(0, 0, 0, 0.10)",
        }}
        className="flex flex-col rounded-[8px] border p-5"
      >
        <p className="mb-0 text-[20px] leading-normal font-bold text-[#000]">
          Order Summary
        </p>
        <div className="mt-4 space-y-[3px] text-sm text-white">
          <div className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {"Subtotal"}
            </p>
            <p className={`text-[16px] leading-[24px] font-medium text-[#000]`}>
              {subtotal?.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {"Tax"}
            </p>
            <p className={`text-[16px] leading-[24px] font-medium text-[#000]`}>
              {tax?.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {"Discount"}
            </p>
            <p className={`text-[16px] leading-[24px] font-medium text-[#000]`}>
              {discount?.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {"Shipping"}
            </p>
            <p className={`text-[16px] leading-[24px] font-medium text-[#000]`}>
              0.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {"Cashback"}
            </p>
            <p
              className={`text-[16px] leading-[24px] font-medium text-[#FA3434]`}
            >
              0.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {"Total:"}
            </p>
            <p className={`text-[16px] leading-[24px] font-medium text-[#000]`}>
              {total?.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 pt-5">
          <Button
            text={"CHECKOUT"}
            handler={handleCheckout}
            className="w-full cursor-pointer rounded-[50px] bg-[#E7448C] px-5 py-[10px] text-[20px] font-semibold text-white uppercase hover:bg-[#E7448C]/80"
          />
          <Button
            text={"Shop More"}
            handler={() => router.push("/category/1")}
            className="w-full cursor-pointer rounded-[50px] bg-[#61B482] px-5 py-[10px] text-[20px] font-semibold text-white uppercase hover:bg-[#61B482]/80"
          />
        </div>
      </div>
      <div
        style={{
          borderColor: "rgba(0, 0, 0, 0.10)",
        }}
        className="flex flex-col gap-2 rounded-[8px] border p-5"
      >
        <p className="font-Inter text-[16px] leading-[24px] font-medium text-[#545454]">
          We accept:{" "}
        </p>
        <div className="flex items-center justify-between">
          {paymentMethods.map((method: PaymentMethod, index: number) => (
            <Image key={index} src={method.img} alt={"paymet-cards"} />
          ))}
        </div>
      </div>
    </div>
  );
};
