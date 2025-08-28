"use client";
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

import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { withAuth } from "@/routes/ProtectedRoutes";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const router = useRouter();

  const { signup } = useAppSelector((state) => state.loader);

  const onSubmit = async (values: any) => {
    try {
      await authService.registerMobileUser(values, router);
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

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const accessToken = credentialResponse.access_token;
        const { data: userInfo } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        const data = {
          name: userInfo?.name || "",
          email: userInfo?.email || "",
          image: userInfo?.picture || "",
          id: userInfo.sub || "",
          sub: userInfo.sub || "",
          accessToken: accessToken,
          provider: "google",
        };
        const [res] = await authService.socialLogin(data, router);
        if (res?.data?.user) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching user info or saving:", error);
      }
    },
    onError: (error) => {
      toast.error(error.error_description || "Google login failed");
    },
    scope: [
      "openid",
      "profile",
      "email",
      "https://www.googleapis.com/auth/user.phonenumbers.read",
    ].join(" "),
  });
  const responseFacebook = async (response: any) => {
    if (response.accessToken) {
      const { name, email, userID, picture, accessToken } = response;

      const data = {
        name: name || "",
        email: email || "",
        image: picture?.data?.url || "",
        id: userID || "",
        accessToken: accessToken,
        provider: "facebook",
      };
      try {
        const [res] = await authService.socialLogin(data, router);
        if (res?.data?.user) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error saving Facebook user:", error);
      }
    }
  };
  return (
    <div className="mx-auto max-w-[500px] px-[10px] py-[50px] sm:py-[100px] md:px-0">
      <Image src={logo} alt="logo" className="mx-auto mb-5" />

      <FacebookLogin
        appId="2009538322910108"
        autoLoad={false}
        fields="name,email,picture"
        onSuccess={responseFacebook}
        onFail={(error) => console.error("Facebook login failed:", error)}
        onProfileSuccess={responseFacebook}
        render={({ onClick }) => (
          <button
            onClick={onClick}
            className="mt-3 w-full cursor-pointer rounded-[5.3px] bg-[#F470AB] py-4 text-[17px] font-semibold text-white shadow-md transition"
          >
            Continue with Facebook
          </button>
        )}
      />

      <Button
        size={30}
        handler={() => loginWithGoogle()}
        type={"submit"}
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

export default withAuth(Signup);
// export default Signup;
