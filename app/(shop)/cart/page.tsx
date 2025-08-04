"use client";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { CartItemMob } from "@/components/cart/cart-item-mob";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartAction } from "@/store/slices/cart.slice";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";
import { useMemo } from "react";
import { toast } from "react-toastify";
interface AppliedCoupon {
  discount?: number | string;
}
export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartProducts = [] } = useAppSelector((state) => state.cart);
  const { appliedCoupon = {} } = useAppSelector((state) => state.user);

  const { subtotal, discountAmount, tax, total } = useMemo(() => {
    const subtotal = cartProducts
      ?.filter((item: any) => item.isCheckoutProduct)
      ?.reduce(
        (acc, item) => acc + (item?.price ?? 0) * (item?.quantity ?? 1),
        0,
      );

    const discountPercentage =
      Number((appliedCoupon as AppliedCoupon)?.discount) || 0;

    const discountAmount = (subtotal * discountPercentage) / 100;
    const discountedSubtotal = subtotal - discountAmount;

    const tax = discountedSubtotal * 0.015;
    const total = discountedSubtotal + tax;

    return { subtotal, discountAmount, tax, total };
  }, [cartProducts, appliedCoupon]);

  const handleCheckout = () => {
    const isAnyItemSelcted =
      cartProducts?.filter((item) => item?.isCheckoutProduct === true).length >
      0;
    if (!isAnyItemSelcted)
      return toast.warn("Please Select atleast one product before checkout");
    else {
      router.push("/checkout");
    }
  };
  return (
    <div className="mx-auto w-full max-w-[1360px]">
      <div className="px-[10px] py-10">
        <h1 className="text-[40px] font-semibold text-[#000]"> My Cart</h1>
        <div className="flex flex-col justify-start gap-4 py-6 md:flex-row md:items-center">
          <div className="rounded-[40px] bg-[#F6D3A2] px-5 py-[10px] text-[16px] font-medium text-[#E77027] md:rounded-[24px]">
            Shop for AED 12.20 more to avail{" "}
            <span className="font-bold"> FREE SHIPPING.</span>
          </div>
          <Button
            text={"Shop More"}
            handler={() => router.push("/")}
            className="max-w-max cursor-pointer rounded-[50px] border-none bg-[#61B482] px-5 py-[10px] text-[16px] font-semibold text-white uppercase"
          />

          <button
            onClick={() => dispatch(cartAction.clearAllCheckoutProducts())}
            style={{
              background: "rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(0, 0, 0, 0.10)",
              color: "rgba(0, 0, 0, 0.20)",
            }}
            className="hidden cursor-pointer rounded-[50px] border-1 px-5 py-[10px] text-[16px] font-bold md:block"
          >
            Remove Selected{" "}
          </button>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 rounded-[6px] border-1 border-[#E0E0E0] p-[10px] md:p-6">
            <div className="flex items-center justify-start gap-6 md:hidden">
              <div className="h-6 min-w-6 rounded-[3px] border border-[#E0E0E0] bg-white"></div>
              <button
                onClick={() => dispatch(cartAction.clearAllCheckoutProducts())}
                style={{
                  background: "rgba(0, 0, 0, 0.04)",
                  borderColor: "rgba(0, 0, 0, 0.10)",
                  color: "rgba(0, 0, 0, 0.20)",
                }}
                className="rounded-[50px] border-1 px-5 py-[10px] text-[16px] font-bold"
              >
                Remove Selected{" "}
              </button>
            </div>
            <div className="hidden items-center justify-between md:flex">
              <p className="font-Inter w-full max-w-[354px] text-center text-[16px] font-semibold text-[#000]">
                Product
              </p>
              <p className="font-Inter w-full max-w-[112px] text-center text-[16px] font-semibold text-[#000]">
                Quantity
              </p>
              <p className="font-Inter w-full max-w-[103px] text-center text-[16px] font-semibold text-[#000]">
                Unit Price
              </p>
              <p className="font-Inter w-full max-w-[112px] text-center text-[16px] font-semibold text-[#000]">
                Subtotal
              </p>
              <p className="font-Inter w-full max-w-[102px] text-center text-[16px] font-semibold text-[#000]">
                Remove
              </p>
            </div>
            <div className="hidden md:block">
              {cartProducts?.map((product: any, index) => (
                <div key={index} className="">
                  <CartItem key={product?.id} product={product} />
                  <div className="my-4 h-[1px] w-full bg-[#D9D9D9]" />
                </div>
              ))}
            </div>
            <div className="block md:hidden">
              {cartProducts?.map((product: any, index) => (
                <div key={index} className="">
                  <CartItemMob key={product?.id} product={product} />
                  <div className="my-4 h-[1px] w-full bg-[#D9D9D9]" />
                </div>
              ))}
            </div>
          </div>
          <CartSummary
            handleCheckout={() => handleCheckout()}
            total={total}
            tax={tax}
            subtotal={subtotal}
            discount={discountAmount}
          />
        </div>
      </div>
    </div>
  );
}
