"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import authService from "@/services/auth.service";
import { logo } from "@/public/assets/brands";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { validationSchemas } from "@/utils/validation";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { retry } from "@reduxjs/toolkit/query";
import ProtectedComp from "@/routes/ProtectedRoutes";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const router = useRouter();
  const hasStoredData = useRef(false);
  const [loginProvider, setLoginProvider] = useState<
    "google" | "facebook" | null
  >(null);

  const { data: session, status } = useSession();
  const { registerSessionId = "" } = useAppSelector((state) => state.user);

  const { signup } = useAppSelector((state) => state.loader);

  const storeSocialUser = async (provider: "google" | "facebook") => {
    setLoginProvider(provider);
    try {
      // Redirect to provider login page
      await signIn(provider, {
        // callbackUrl: "/", // Redirect to home after successful login
        redirect: false, // We'll handle the redirect manually
      });
    } catch (error) {
      console.error("Social login error:", error);
    }
  };

  useEffect(() => {
    const handleSocialLogin = async () => {
      if (
        status === "authenticated" &&
        session &&
        loginProvider &&
        !registerSessionId &&
        !hasStoredData.current
      ) {
        try {
          const data = {
            name: session.user?.name || "",
            email: session.user?.email || "",
            image: session.user?.image || "",
            id: session.accessToken || "",
            expires: session.expires || "",
            provider: loginProvider,
          };

          hasStoredData.current = true;

          // Call your API to store the social user data
          await authService.socialLogin(data, router);

          // Redirect after successful storage
          // router.push("/"); // or your desired redirect path
        } catch (error) {
          console.error("Error storing social user data:", error);
        } finally {
        }
      }
    };

    handleSocialLogin();
  }, [session, status, loginProvider, registerSessionId, router]);

  const onSubmit = async (values: any) => {
    try {
      await authService.registerMobileUser(values, router);
      // The authService should handle the redirect after successful registration
      // If not, you can add: router.push("/");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues,
    validationSchema: validationSchemas.signup,
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

      {/* Facebook Login */}
      <Button
        size={30}
        loading={signup}
        handler={() => storeSocialUser("facebook")}
        type="button"
        text={"Sign in with Facebook"}
        className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#F470AB] py-4 text-[17px] font-semibold text-white shadow-md transition"
      />

      {/* Google Login */}
      <Button
        size={30}
        loading={signup}
        handler={() => storeSocialUser("google")}
        type="button"
        text={"Continue with Google"}
        className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#F470AB] py-4 text-[17px] font-semibold text-white shadow-md transition"
      />

      {/* Divider */}
      <div className="relative my-10 h-[2px] w-full rounded-2xl bg-[#A0A0A0] p-[1px]">
        <div className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
          OR
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputField
          name="name"
          value={values.name}
          error={
            isSubmitted && errors.name && touched.name ? errors.name : null
          }
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="NAME"
          className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
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
        <InputField
          type="password"
          name="password"
          error={
            isSubmitted && errors.password && touched.password
              ? errors.password
              : null
          }
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="PASSWORD"
          className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <InputField
          type="password"
          name="confirmPassword"
          error={
            isSubmitted && errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : null
          }
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="CONFIRM PASSWORD"
          className="rounded-[7px] bg-[#FAFAFA] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
        />
        <Button
          size={30}
          loading={signup}
          type="submit"
          text="Submit & Register"
          className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#61B582] py-4 text-[17px] font-semibold text-white shadow-md transition hover:bg-[#F470AB]"
        />
      </form>

      <p className="font-inter mt-5 min-h-[32px] text-center text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
        Already have an account?
        <Link href={"/login"} className="font-semibold text-[#F470AB]">
          {" "}
          Login{" "}
        </Link>
      </p>

      <p className="font-inter mt-5 min-h-[32px] text-left text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
        <span className="font-semibold">Note:</span> Your personal data will be
        used to support your experience throughout this website, to manage
        access to your account, and for other purposes described in our privacy
        policy.
      </p>
    </div>
  );
};

export default Signup;
