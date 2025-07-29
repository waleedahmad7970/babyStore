"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import authService from "@/services/auth.service";
import { logo } from "@/public/assets/brands";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { validationSchemas } from "@/utils/validation";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import ProtectedComp from "@/routes/ProtectedRoutes";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const router = useRouter();
  const hasStoredData = useRef(false);
  const [loginProvider, setLoginProvider] = useState<
    "google" | "facebook" | null
  >(null);

  const { data: session, status } = useSession();
  const { registerSessionId = "" } = useAppSelector((state) => state.user);

  const { login } = useAppSelector((state) => state.loader);

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
          await authService.socialLogin(data, router);
        } catch (error) {
          console.error("Error storing social user data:", error);
        } finally {
        }
      }
    };

    handleSocialLogin();
  }, [session, status, loginProvider, registerSessionId, router]);

  const onSubmit = async (values: any) => {
    await authService.loginMobileUser(values, router);
  };
  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues,
    validationSchema: validationSchemas.login,
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

      <Button
        loading={login}
        size={30}
        handler={() => storeSocialUser("facebook")}
        type={"submit"}
        text={"Sign in with Facebook"}
        className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#F470AB] py-4 text-[17px] font-semibold text-white shadow-md transition"
      />
      <Button
        loading={login}
        size={30}
        handler={() => storeSocialUser("google")}
        type={"submit"}
        text={"Continue with Google"}
        className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#F470AB] py-4 text-[17px] font-semibold text-white shadow-md transition"
      />
      <div className="relative my-10 h-[2px] w-full rounded-2xl bg-[#A0A0A0] p-[1px]">
        <div className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
          OR
        </div>
      </div>

      <p className="font-inter mt-5 min-h-[32px] text-center text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
        Dont have an account?{" "}
        <Link href={"/signup"} className="font-semibold text-[#F470AB]">
          {" "}
          Create Here{" "}
        </Link>
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

        <Button
          size={30}
          loading={login}
          type={"submit"}
          text={"Login"}
          className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#61B582] py-4 text-[17px] font-semibold text-white shadow-md transition hover:bg-[#F470AB]"
        />
      </form>

      <div className="flex items-center justify-between">
        <p className="font-inter mt-5 min-h-[32px] text-center text-[16px] leading-[18px] font-normal text-[#A0A0A0]">
          Remember me
        </p>

        <p className="font-inter mt-5 min-h-[32px] text-center text-[16px] leading-[18px] font-normal text-[#A0A0A0] underline">
          <Link
            href={"/forgot-password"}
            className="font-semibold text-[#F470AB]"
          >
            {" "}
            Forgot Password{" "}
          </Link>
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
};

export default Login;
