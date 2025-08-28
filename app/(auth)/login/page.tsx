"use client";
import Image from "next/image";
import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import authService from "@/services/auth.service";
import { logo } from "@/public/assets/brands";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { validationSchemas } from "@/utils/validation";
import Link from "next/link";
import FacebookLogin from "@greatsumini/react-facebook-login";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { userActions } from "@/store/slices/auth.slice";
import { useDispatch } from "react-redux";
import { setItemInLS } from "@/utils/LS_STORAGE";
import { withAuth } from "@/routes/ProtectedRoutes";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const onSubmit = async (values: any) => {
    const [res, error] = await authService.loginMobileUser(values, router);
    const message = res?.data?.message;
    const result = res?.data?.result;
    if (error?.response?.data?.message) {
      toast.error(error.response.data.message);
      return;
    }

    if (message) {
      toast[result === 0 ? "error" : "success"](message);

      if (result !== 0) {
        dispatch(userActions.setRegisterSessionId(res?.data?.result));
        setItemInLS("token", res?.data?.result);

        if (res?.data?.result) {
          router.push(redirect);
        }
      }

      return;
    }
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
          const visitedPaths = JSON.parse(
            localStorage.getItem("visited-paths") || "[]",
          );

          if (res?.data?.user) {
            const lastPath = visitedPaths?.[visitedPaths?.length - 1];
            if (lastPath === "/checkout") {
              return router.push("/checkout");
            } else router.push("/");
          }
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
          const visitedPaths = JSON.parse(
            localStorage.getItem("visited-paths") || "[]",
          );

          if (res?.data?.user) {
            const lastPath = visitedPaths?.[visitedPaths?.length - 1];
            if (lastPath === "/checkout") {
              return router.push("/checkout");
            } else router.push("/");
          }
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

export default withAuth(Login);
// export default Login;
