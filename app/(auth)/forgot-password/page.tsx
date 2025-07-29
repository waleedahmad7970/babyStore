"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import authService from "@/services/auth.service";

import { logo } from "@/public/assets/brands";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { validationSchemas } from "@/utils/validation";

const initialValues = {
  email: "",
};
export default function Page() {
  const router = useRouter();
  const { forgotPassword } = useAppSelector((state) => state.loader);

  const onSubmit = async (values: any) => {
    await authService.forgotPassword(values, router);
  };
  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues,
    validationSchema: validationSchemas.resetPassword,
    onSubmit: onSubmit,
  });
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    submitCount,
  } = formikProps;
  const isSubmitted = submitCount > 0;

  return (
    <div className="mx-auto max-w-[500px] px-[10px] py-[50px] sm:py-[100px] md:px-0">
      <Image src={logo} alt="logo" className="mx-auto mb-5" />

      <p className="font-inter mx-auto mt-5 mb-5 min-h-[32px] max-w-[80%] text-center text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
        Enter your email address and well send you a link to reset your password
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputField
          name="email"
          value={values.email}
          error={
            isSubmitted && errors.email && touched.email ? errors.email : null
          }
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="EMAIL"
          className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />

        <Button
          size={30}
          loading={forgotPassword}
          type={"submit"}
          text={"Reset Password"}
          className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#61B582] py-4 text-[17px] font-semibold text-white shadow-md transition hover:bg-[#F470AB]"
        />
      </form>

      <div className="flex items-center justify-between">
        <p className="font-inter mt-5 min-h-[32px] text-center text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
          I agree to terms & Policy.
        </p>
      </div>
      <p className="font-inter mt-5 min-h-[32px] text-left text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
        <span className="font-semibold">Note: </span>Your personal data will be
        used to support your experience throughout this website, to manage
        access to your account, and for other purposes described in our privacy
        policy
      </p>
    </div>
  );
}
