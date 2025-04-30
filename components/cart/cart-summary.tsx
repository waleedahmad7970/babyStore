import { paymentMethods } from "@/static/static";
import Image from "next/image";
import Link from "next/link";
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
export const CartSummary = () => (
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
          borderColor: "rgba(0, 0, 0, 0.2)",
        }}
        className="flex justify-between rounded-[8px] border"
      >
        <input className="py-[10px] ps-4 text-[16px] font-normal outline-none" />

        <button
          style={{
            borderColor: "rgba(0, 0, 0, 0.2)",
          }}
          className="border-l px-5 text-[16px] leading-[22px] font-semibold text-[#E7448C] outline-none"
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
        {summaryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {item.title}
            </p>
            <p
              className={`text-[16px] leading-[24px] font-medium ${item.title === "Total:" ? "text-[#FA3434]" : "text-[#000]"}`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-2 pt-5">
        <Link href={`/checkout`} className="block text-inherit no-underline">
          <button className="w-full rounded-[50px] bg-[#E7448C] px-5 py-[10px] text-[20px] font-semibold text-white uppercase">
            CHECKOUT
          </button>
        </Link>
        <Link href={`/category`} className="block text-inherit no-underline">
          <button className="w-full rounded-[50px] bg-[#61B482] px-5 py-[10px] text-[20px] font-semibold text-white uppercase">
            SHOP MORE
          </button>
        </Link>
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
