"use client";
import React, { useEffect, useState } from "react";

import InputField from "@/components/fields/input-field";
import { free_delivery } from "@/public/assets/icons";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Needed for the flags!
import { useAppSelector } from "@/store/hooks";
import { useFormik } from "formik";
import CartPanelCheckout from "@/components/cart/cart-panel-checkout";
import Button from "@/components/button/button";
import orderServices from "@/services/order.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/slices/auth.slice";
import { withAuth } from "@/routes/ProtectedRoutes";
import { checkoutAction } from "@/store/slices/checkout.slice";
import * as Yup from "yup";

const paymentData = [
  { value: "cod", methodName: "Cash on Delivery" },
  { value: "telr", methodName: "Credit/ Debit Card" },
];

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [couponValue, setCouponValue] = useState("");
  const { cartProducts = [] } = useAppSelector((state) => state.cart);
  const { placeOrder } = useAppSelector((state) => state.loader);
  const {
    registerSessionId = "",
    user = {},
    defaultAddress = {},
    discountCouponDetails = {},
    appliedCoupon = {},
  } = useAppSelector((state) => state.user) as any;

  const initialValues = {
    billing: {
      firstName: defaultAddress?.first_name || "",
      lastName: defaultAddress?.last_name || "",
      email: defaultAddress?.email || "",
      country: defaultAddress?.country || "UAE",
      city: defaultAddress?.city || "",
      address1: defaultAddress?.address_1 || "",
      address2: defaultAddress?.address_2 || "",
      phone: defaultAddress?.phone || "",
      additionalInfo: defaultAddress?.additional_info || "",
    },
    shipping: {
      firstName: defaultAddress?.first_name || "",
      lastName: defaultAddress?.last_name || "",
      country: defaultAddress?.country || "UAE",
      city: defaultAddress?.city || "",
      address1: defaultAddress?.address_1 || "",
      address2: defaultAddress?.address_2 || "",
      phone: defaultAddress?.phone || "",
    },
    shipToSameAddress: true,
    payment_method: "cod",
  };
  const checkoutSchema = Yup.object({
    shipToSameAddress: Yup.boolean().required(),
    billing: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      address1: Yup.string().required("Address is required"),
      address2: Yup.string(),
      phone: Yup.string().required("Phone is required"),
      additionalInfo: Yup.string(),
    }),
    shipping: Yup.object().when(
      "shipToSameAddress",
      (shipToSameAddress, schema) => {
        return shipToSameAddress?.[0]
          ? schema.strip()
          : Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              country: Yup.string().required("Country is required"),
              city: Yup.string().required("City is required"),
              address1: Yup.string().required("Address is required"),
              address2: Yup.string(),
              phone: Yup.string().required("Phone is required"),
            });
      },
    ),
    payment_method: Yup.string().required("Payment method is required"),
  });
  useEffect(() => {
    if (!token) dispatch(checkoutAction.setIscheckoutVisited(true));
  }, [dispatch, token]);

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
      first_name: values.billing.firstName,
      last_name: values.billing.lastName,
      address: values.billing.address1,
      address2: values.billing.address1,
      payment_type: values.payment_method,
      // payment_status: "paid",
      shipToSameAddress: values.shipToSameAddress,
      additionalInfo: values.billing.additionalInfo,
      phone: values.billing.phone,
      city: values.billing.city,
      country: values.billing.country,
      user_id: registerSessionId,
      cart: orderCart,
      // shiiping
      shipping_first_name: values.shipping.firstName,
      shipping_last_name: values.shipping.lastName,
      shipping_address: values.shipping.address1,
      shipping_address2: values.shipping.address2,
      shipping_country: values.shipping.country,
      shipping_city: values.shipping.city,
      shipping_phone: values.shipping.phone,
    };
    if (!id) {
      toast.info("Login first before checkout");
      return router.push("/login");
    }
    if (!cartProducts.length) {
      return toast.info("Add products first before checkout");
    }
    await orderServices.placeOrder(data, router);
  };

  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues,
    validationSchema: checkoutSchema,
    onSubmit: onSubmit,
  });

  const {
    values,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    submitCount,
  } = formikProps;

  // const handleShipSameAddress = (value: boolean) => {
  //   setFieldValue("shipToSameAddress", !value);
  // };

  const selectPaymentMethod = (value: string) => {
    setFieldValue("payment_method", value);
  };

  const handleCoupon = () => {
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
  const handleBillingChange = (e: any) => {
    const { name, value } = e.target;
    setFieldValue(`billing.${name}`, value);

    // Update shipping fields if "same address" is checked
    if (values.shipToSameAddress) {
      setFieldValue(`shipping.${name}`, value);
    }
  };

  const handleShippingChange = (e: any) => {
    const { name, value } = e.target;
    setFieldValue(`shipping.${name}`, value);
  };

  // Fix the phone input handler

  // Fix the ship to same address toggle
  const handleShipSameAddress = (checked: boolean) => {
    setFieldValue("shipToSameAddress", !checked);
    if (checked) {
      // Copy all billing values to shipping
      Object.entries(values.billing).forEach(([key, value]) => {
        setFieldValue(`shipping.${key}`, value);
      });
    }
  };

  console.log("values", values);

  return (
    <div className="mx-auto w-full max-w-[1360px] px-[10px] py-10 lg:px-0">
      <p className="mb-[22px] text-[40px] leading-normal font-semibold text-[#000] sm:mb-[44px]">
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
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FF6AAF] text-[14px] leading-[9.818px] font-semibold text-white sm:h-[40px] sm:w-[40px] sm:text-[16px]">
              1
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <InputField
                name="firstName"
                value={values.billing.firstName}
                error={
                  isSubmitted &&
                  errors.billing?.firstName &&
                  touched.billing?.firstName
                    ? errors.billing.firstName
                    : null
                }
                onChange={handleBillingChange}
                onBlur={handleBlur}
                placeholder="First Name"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD] lg:max-w-[228px]"
              />
              <InputField
                name="lastName"
                value={values.billing.lastName}
                error={
                  isSubmitted &&
                  errors.billing?.lastName &&
                  touched.billing?.lastName
                    ? errors.billing.lastName
                    : null
                }
                onChange={handleBillingChange}
                onBlur={handleBlur}
                placeholder="Last Name"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD] lg:max-w-[228px]"
              />
            </div>
            <InputField
              name="email"
              value={values.billing.email}
              error={
                isSubmitted && errors.billing?.email && touched.billing?.email
                  ? errors.billing.email
                  : null
              }
              onChange={handleBillingChange}
              onBlur={handleBlur}
              placeholder="Email address"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
            />
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <InputField
                name="country"
                disabled={true}
                value={values.billing.country}
                error={
                  isSubmitted &&
                  errors.billing?.country &&
                  touched.billing?.country
                    ? errors.billing.country
                    : null
                }
                onChange={handleBillingChange}
                onBlur={handleBlur}
                placeholder="Country"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] uppercase outline-none placeholder:text-[#ADADAD] disabled:bg-gray-100 lg:max-w-[228px]"
              />
              <InputField
                name="city"
                value={values.billing.city}
                error={
                  isSubmitted && errors.billing?.city && touched.billing?.city
                    ? errors.billing.city
                    : null
                }
                onChange={handleBillingChange}
                onBlur={handleBlur}
                placeholder="City"
                className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD] lg:max-w-[228px]"
              />
            </div>

            <InputField
              name="address1"
              value={values.billing.address1}
              error={
                isSubmitted &&
                errors.billing?.address1 &&
                touched.billing?.address1
                  ? errors.billing.address1
                  : null
              }
              onChange={handleBillingChange}
              onBlur={handleBlur}
              placeholder="Address1"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
            />

            <InputField
              name="address2"
              value={values.billing.address2}
              error={
                isSubmitted &&
                errors.billing?.address2 &&
                touched.billing?.address2
                  ? errors.billing.address2
                  : null
              }
              onChange={handleBillingChange}
              onBlur={handleBlur}
              placeholder="Address2"
              className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
            />
            <div className="flex flex-col items-baseline justify-between gap-2 outline-none md:flex-row">
              <div className="">
                <PhoneInput
                  country="ae"
                  // value={values.billing.phone}
                  onChange={(val) => setFieldValue("phone", val)}
                  inputClass="!ps-10 !w-full !rounded-[7px] !bg-[#FAFAFA] !border-none !px-4 !py-3 !h-[48px] !text-[14px] !leading-[24px] !text-[#ADADAD]"
                  containerClass="!w-full !bg-[#FAFAFA] !border-none !rounded-[7px]"
                  buttonClass="!bg-[#FAFAFA] !border-none !rounded-[7px]"
                  specialLabel=""
                />
                {isSubmitted &&
                  errors?.billing?.phone &&
                  touched?.billing?.phone &&
                  typeof errors.billing.phone === "string" && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.billing.phone}
                    </p>
                  )}
              </div>
              <InputField
                name="phone"
                value={values.billing.phone}
                error={
                  isSubmitted &&
                  errors?.billing?.phone &&
                  touched?.billing?.phone
                    ? errors?.billing?.phone
                    : null
                }
                onChange={handleBillingChange}
                onBlur={handleBlur}
                placeholder="phone"
                className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
              />
            </div>
            <div>
              <textarea
                name="additionalInfo"
                value={values.billing.additionalInfo}
                onChange={handleBillingChange}
                onBlur={handleBlur}
                placeholder="Enter additional information"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              {isSubmitted &&
                errors?.billing?.additionalInfo &&
                touched?.billing?.additionalInfo && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.billing.additionalInfo as string}
                  </p>
                )}
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Button
              text={""}
              type={"button"}
              handler={() => handleShipSameAddress(values?.shipToSameAddress)}
              className={`h-5 w-5 rounded-[2px] border-[2px] border-[#CDCDCD] ${values?.shipToSameAddress ? "bg-[#FF6AAF]" : "bg-white"} `}
            />
            <p className="text-[14px] leading-[24px] font-normal text-[#000]">
              Ship to same address.
            </p>
          </div>
          {!values?.shipToSameAddress && (
            <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
              <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                <InputField
                  name="firstName"
                  value={values.shipping.firstName}
                  error={
                    isSubmitted &&
                    errors.shipping?.firstName &&
                    touched.shipping?.firstName
                      ? errors.shipping.firstName
                      : null
                  }
                  onChange={handleShippingChange}
                  onBlur={handleBlur}
                  placeholder="First Name"
                  className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD] lg:max-w-[228px]"
                />
                <InputField
                  name="lastName"
                  value={values.shipping.lastName}
                  error={
                    isSubmitted &&
                    errors.shipping?.lastName &&
                    touched.shipping?.lastName
                      ? errors.shipping.lastName
                      : null
                  }
                  onChange={handleShippingChange}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD] lg:max-w-[228px]"
                />
              </div>

              <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                <InputField
                  name="country"
                  disabled={true}
                  value={values.shipping.country}
                  error={
                    isSubmitted &&
                    errors.shipping?.country &&
                    touched.shipping?.country
                      ? errors.shipping.country
                      : null
                  }
                  onChange={handleShippingChange}
                  onBlur={handleBlur}
                  placeholder="Country"
                  className={`w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] uppercase outline-none placeholder:text-[#ADADAD] disabled:bg-gray-100 lg:max-w-[228px] ${true ? "disabled:bg-gray-100" : ""}`}
                />
                <InputField
                  name="city"
                  value={values.shipping.city}
                  error={
                    isSubmitted &&
                    errors.shipping?.city &&
                    touched.shipping?.city
                      ? errors.shipping.city
                      : null
                  }
                  onChange={handleShippingChange}
                  onBlur={handleBlur}
                  placeholder="City"
                  className="w-full rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD] lg:max-w-[228px]"
                />
              </div>

              <InputField
                name="address1"
                value={values.shipping.address1}
                error={
                  isSubmitted &&
                  errors.shipping?.address1 &&
                  touched.shipping?.address1
                    ? errors.shipping.address1
                    : null
                }
                onChange={handleShippingChange}
                onBlur={handleBlur}
                placeholder="Address1"
                className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
              />

              <InputField
                name="address2"
                value={values.shipping.address2}
                error={
                  isSubmitted &&
                  errors.shipping?.address2 &&
                  touched.shipping?.address2
                    ? errors.shipping.address2
                    : null
                }
                onChange={handleShippingChange}
                onBlur={handleBlur}
                placeholder="Address2"
                className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
              />
              <div className="flex flex-col items-baseline justify-between gap-2 outline-none md:flex-row">
                <div className="">
                  <PhoneInput
                    country="ae"
                    // value={values.billing.phone}
                    onChange={(val) => setFieldValue("phone", val)}
                    inputClass="!ps-10 !w-full !rounded-[7px] !bg-[#FAFAFA] !border-none !px-4 !py-3 !h-[48px] !text-[14px] !leading-[24px] !text-[#ADADAD]"
                    containerClass="!w-full !bg-[#FAFAFA] !border-none !rounded-[7px]"
                    buttonClass="!bg-[#FAFAFA] !border-none !rounded-[7px]"
                    specialLabel=""
                  />
                  {isSubmitted &&
                    errors?.shipping?.phone &&
                    touched?.shipping?.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors?.shipping?.phone as string}
                      </p>
                    )}
                </div>
                <InputField
                  name="phone"
                  value={values.shipping.phone}
                  error={
                    isSubmitted &&
                    errors?.shipping?.phone &&
                    touched?.shipping?.phone
                      ? errors?.shipping?.phone
                      : null
                  }
                  onChange={handleShippingChange}
                  onBlur={handleBlur}
                  placeholder="phone"
                  className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#121212] outline-none placeholder:text-[#ADADAD]"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-2 lg:max-w-[425px]">
          <div className="mb-3 flex items-center justify-between gap-1">
            <h1 className="max-wmax text-[24px] leading-[20px] font-semibold text-[#201C1C]">
              Shipping Method{" "}
            </h1>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FF6AAF] text-[14px] leading-[9.818px] font-semibold text-white sm:h-[40px] sm:w-[40px] sm:text-[16px]">
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
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FF6AAF] text-[14px] leading-[9.818px] font-semibold text-white sm:h-[40px] sm:w-[40px] sm:text-[16px]">
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
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FF6AAF] text-[14px] leading-[9.818px] font-semibold text-white sm:h-[40px] sm:w-[40px] sm:text-[16px]">
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
          <CartPanelCheckout products={cartProducts as any} />

          <Button
            loading={placeOrder}
            type={"submit"}
            className="fixed right-0 bottom-[64px] left-0 z-[99] mt-3 w-full bg-[#61B582] py-3 text-[15.225px] font-semibold text-white transition hover:bg-green-700 sm:relative sm:top-0 sm:z-0 sm:w-full sm:rounded-[5.3px]"
            text={"Place Order"}
          />
        </div>
      </form>
      {/* <FeatureCards /> */}
    </div>
  );
};

export default withAuth(Checkout);
// export default Checkout;
