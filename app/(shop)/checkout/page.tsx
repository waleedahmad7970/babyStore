"use client";
import React, { useState } from "react";
import CartPanel from "@/components/cart/cart-panel";
import FeatureCards from "@/components/cards/feature-card";
import InputField from "@/components/fields/input-field";
import { free_delivery } from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Needed for the flags!
import { useAppSelector } from "@/store/hooks";
import { validationSchemas } from "@/utils/validation";
import { useFormik } from "formik";
import CartPanelCheckout from "@/components/cart/cart-panel-checkout";
import Button from "@/components/button/button";
import orderServices from "@/services/order.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ProtectedComp from "@/routes/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/slices/auth.slice";

const paymentData = [
  { value: "cod", methodName: "Cash on Delivery" },
  { value: "telr", methodName: "Credit/ Debit Card" },
  // { value:"Apple",methodName: "PayPal" },
  // { value:"Apple",methodName: "Apple Pay" },
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  city: "",
  address1: "",
  address2: "",
  phone: "",
  additionalInfo: "",
  shipToSameAddress: true,
  payment_method: "cod",
};

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [couponValue, setCouponValue] = useState("");
  const { cartProducts = [] } = useAppSelector((state) => state.cart);
  const { placeOrder } = useAppSelector((state) => state.loader);
  const {
    registerSessionId = "",
    user = {},
    discountCouponDetails = {},
    appliedCoupon = {},
  } = useAppSelector((state) => state.user) as any;

  const id = (user as { id?: number })?.id ?? null;
  const orderCart =
    cartProducts?.length > 0 &&
    cartProducts
      ?.filter((item) => item?.isAddedToCart === true)
      .map((item) => ({
        id: item?.id,
        name: item?.name,
        price: item?.price,
        quantity: item?.quantity,
      }));

  const onSubmit = async (values: any) => {
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      address: values.address1,
      address2: values.address1,
      payment_type: values.payment_method,
      // payment_status: "paid",
      shipToSameAddress: values.shipToSameAddress,
      additionalInfo: values.additionalInfo,
      phone: values.phone,
      city: values.city,
      country: values.country,
      user_id: registerSessionId,
      cart: orderCart,
    };
    if (!id) {
      toast.info("Login first before checkout");
      return router.push("/login");
    }
    await orderServices.placeOrder(data, router);
  };

  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues,
    validationSchema: validationSchemas.checkoutBilling,
    onSubmit: onSubmit,
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    submitCount,
  } = formikProps;

  const handleShipSameAddress = (value: boolean) => {
    setFieldValue("shipToSameAddress", !value);
  };

  const selectPaymentMethod = (value: string) => {
    setFieldValue("payment_method", value);
  };

  const handleCoupon = () => {
    console.log("helo coupon");
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
  const isSubmitted = submitCount > 0;

  return (
    <div className="mx-auto w-full max-w-[1360px] px-[10px] py-10 lg:px-0">
      <p className="mb-[44px] text-[40px] leading-normal font-semibold text-[#000]">
        Checkout
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-0"
      >
        <div className="flex flex-col gap-2">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-w-max text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Billing Information{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              1
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <InputField
                name="firstName"
                value={values.firstName}
                error={
                  isSubmitted && errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
              />
              <InputField
                name="lastName"
                value={values.lastName}
                error={
                  isSubmitted && errors.lastName && touched.lastName
                    ? errors.lastName
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Last Name"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
              />
            </div>
            <InputField
              name="email"
              value={values.email}
              error={
                isSubmitted && errors.email && touched.email
                  ? errors.email
                  : null
              }
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email address"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <InputField
                name="country"
                value={values.country}
                error={
                  isSubmitted && errors.country && touched.country
                    ? errors.country
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Country"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
              />
              <InputField
                name="city"
                value={values.city}
                error={
                  isSubmitted && errors.city && touched.city
                    ? errors.city
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="City"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none lg:max-w-[228px]"
              />
            </div>

            <InputField
              name="address1"
              value={values.address1}
              error={
                isSubmitted && errors.address1 && touched.address1
                  ? errors.address1
                  : null
              }
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address1"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />

            <InputField
              name="address2"
              value={values.address2}
              error={
                isSubmitted && errors.address2 && touched.address2
                  ? errors.address2
                  : null
              }
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address2"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
            />
            <div className="flex flex-col items-baseline justify-between gap-2 outline-none md:flex-row">
              <div className="">
                <PhoneInput
                  country="ae"
                  // value={values.phone}
                  onChange={(val) => setFieldValue("phone", val)}
                  inputClass="!ps-10 !w-full !rounded-[7px] !bg-[#FAFAFA] !border-none !px-4 !py-3 !h-[48px] !text-[14px] !leading-[24px] !text-[#ADADAD]"
                  containerClass="!w-full !bg-[#FAFAFA] !border-none !rounded-[7px]"
                  buttonClass="!bg-[#FAFAFA] !border-none !rounded-[7px]"
                  specialLabel=""
                />
                {isSubmitted && errors.phone && touched.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <InputField
                name="phone"
                value={values.phone}
                error={
                  isSubmitted && errors.phone && touched.phone
                    ? errors.phone
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="phone"
                className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
              />
            </div>
            <div>
              <textarea
                name="additionalInfo"
                value={values.additionalInfo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter additional information"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              {isSubmitted &&
                errors.additionalInfo &&
                touched.additionalInfo && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.additionalInfo}
                  </p>
                )}
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Button
              text={""}
              handler={() => handleShipSameAddress(values?.shipToSameAddress)}
              className={`h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] ${values?.shipToSameAddress ? "bg-[#FF6AAF]" : "bg-white"} `}
            />
            <p className="text-[14px] leading-[24px] font-normal text-[#000]">
              Ship to same address.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Shipping Method{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              2
            </div>
          </div>

          <div className="flex items-center justify-start gap-3">
            <div className="h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] bg-white" />
            <Image src={free_delivery} alt="lo" className="max-w-[93px]" />
          </div>
          <div className="rounded-[4px] bg-[#FAFAFA] px-[15px] py-[10px]">
            <p className="mb-0 text-[12px]">
              <span className="font-semibold text-[#61B582]">
                Get it Delivered
              </span>{" "}
              by{" "}
              <span className="font-semibold text-[#000]">
                {" "}
                Tomorrow, January 27
              </span>{" "}
              When you order before 12 PM.
            </p>
          </div>
          <div className="mt-[44px] mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Payment Method
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              3
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-[14px]">
            {paymentData?.map((item, index) => {
              return (
                <div
                  onClick={() => selectPaymentMethod(item?.value)}
                  key={index}
                  className="flex max-w-[240px] items-center justify-start gap-3"
                >
                  <div
                    className={`h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] ${values?.payment_method === item?.value ? "bg-[#FF6AAF]" : "bg-white"} `}
                  />
                  <p className="mb-0 text-[14px] leading-[24px] font-normal text-[#000]">
                    {item.methodName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Shipping Method{" "}
            </h1>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF6AAF] text-[12px] leading-[9.818px] font-semibold text-white">
              4
            </div>
          </div>
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
              className={`flex justify-between rounded-[8px] border ${appliedCoupon?.coupon ? "bg-gray-50" : ""}`}
            >
              <input
                value={appliedCoupon?.couponValue || couponValue}
                onChange={(e) => setCouponValue(e.target.value)}
                disabled={appliedCoupon?.coupon}
                className={`py-[10px] ps-4 text-[16px] font-normal outline-none`}
              />

              <button
                onClick={() => handleCoupon()}
                type="button"
                style={{
                  borderColor: "rgba(0, 0, 0, 0.2)",
                }}
                className="border-l px-5 text-[16px] leading-[22px] font-semibold text-[#E7448C] outline-none"
              >
                Apply
              </button>
            </div>
          </div>
          <CartPanelCheckout products={cartProducts as any} />
          <Button
            loading={placeOrder}
            type={"submit"}
            className="mt-3 w-full rounded-[5.3px] bg-[#61B582] py-3 text-[15.225px] font-semibold text-white transition hover:bg-green-700"
            text={"Place Order"}
          />
        </div>
      </form>
      {/* <FeatureCards /> */}
    </div>
  );
};

export default Checkout;
