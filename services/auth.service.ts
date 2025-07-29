import { userActions } from "@/store/slices/auth.slice";
import { loaderAction } from "@/store/slices/loader.slice";
import { getDispatch } from "@/utils/dispatch.util";
import http from "@/utils/https";
import { setItemInLS } from "@/utils/LS_STORAGE";
import { handleToastAPIError } from "@/utils/toast.utils";
import { toast } from "react-toastify";

const authService = {
  // Driver login removed for now 7/3/25
  async loginDriver(body: any) {
    const dispatch = getDispatch();

    dispatch(loaderAction.startLoading("loginDriver"));

    const [res, error] = await http.post(
      "https://www.babystore.ae/api/driver_login",
      body,
    );
    dispatch(loaderAction.stopLoading("loginDriver"));

    handleToastAPIError(res, error);

    return [res, error];
  },
  // User login
  async loginMobileUser(body: any, router: any) {
    const dispatch = getDispatch();
    dispatch(loaderAction.startLoading("login"));
    const [res, error] = await http.post(
      "https://www.babystore.ae/api/login_mobile_user",
      body,
    );
    dispatch(loaderAction.stopLoading("login"));

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
        router.push("/");
      }

      return;
    }
    return [res, error];
  },
  // User register
  async registerMobileUser(body: any, router: any) {
    const dispatch = getDispatch();
    dispatch(loaderAction.startLoading("signup"));
    const [res, error] = await http.post(
      "https://www.babystore.ae/api/register_mobile_user",
      body,
    );
    dispatch(loaderAction.stopLoading("signup"));

    const message = res?.data?.message;
    const result = res?.data?.result;
    if (error?.response?.data?.message) {
      toast.error(error.response.data.message);
      return;
    }

    if (message) {
      toast[result === 0 ? "error" : "success"](message);

      if (result !== 0) {
        router.push("/login");
      }

      return;
    }
    return [res, error];
  },
  // Forgot password
  async forgotPassword(body: any, router: any) {
    const dispatch = getDispatch();
    dispatch(loaderAction.startLoading("forgotPassword"));
    const [res, error] = await http.post(
      "https://www.babystore.ae/api/forgot-password",
      body,
    );
    dispatch(loaderAction.stopLoading("forgotPassword"));

    handleToastAPIError(res, error);

    return [res, error];
  },
  // Reset password
  async resetPassword(body: any, router: any) {
    const dispatch = getDispatch();
    dispatch(loaderAction.startLoading("resetPassword"));
    const [res, error] = await http.post(
      "https://www.babystore.ae/api/conform-password",
      body,
    );
    dispatch(loaderAction.stopLoading("resetPassword"));
    handleToastAPIError(res, error);
    if (res?.data?.message === "Password set successfully.")
      return router.push("/login");
    return [res, error];
  },

  // store user social session
  async socialLogin(body: any, router: any) {
    const dispatch = getDispatch();
    dispatch(loaderAction.startLoading("storeUserSocialData"));
    const [res, error] = await http.post(
      "https://www.babystore.ae/api/social_login",
      body,
    );

    console.log({ res, error });
    if (res?.data?.user) {
      console.log("B", res?.data);
      dispatch(userActions.setUser(res?.data?.user));
      dispatch(userActions.setRegisterSessionId(res?.data?.user?.id));
      setItemInLS("token", res?.data?.user?.id);

      router.push("/");
    }
    dispatch(loaderAction.stopLoading("storeUserSocialData"));
    handleToastAPIError(res, error);

    return [res, error];
  },
  // subscribe
  async subscribe(body: any) {
    const dispatch = getDispatch();
    dispatch(loaderAction.startLoading("subscribe"));
    const [res, error] = await http.post(
      "https://www.babystore.ae/subscriber_store",
      body,
    );
    dispatch(loaderAction.stopLoading("subscribe"));

    handleToastAPIError(res, error);

    return [res, error];
  },

  // Get user profile
  async getUserProfile(id: number | string | null) {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/user_profile/${id}`,
    );
    if (res?.data?.success) {
      dispatch(userActions.setUser(res?.data?.data));
    }
    return [res, error];
  },

  // update user profile
  async updateUserProfile(body: any) {
    const dispatch = getDispatch();
    const [res, error] = await http.post(
      `https://www.babystore.ae/api/update_address`,
      body,
    );
    if (res?.data?.success) {
      console.log("ddddd", res);
      dispatch(userActions.defaultAddress(res?.data?.changed_fields));
    }
    return [res, error];
  },

  // Update phone number
  async updatePhoneNumber(body: any) {
    const [res, error] = await http.post(
      "https://www.babystore.ae/api/update_number",
      body,
    );
    return [res, error];
  },

  // Delete user account
  async deleteUserAccount(id: number) {
    const [res, error] = await http.delete(
      `https://www.babystore.ae/api/user_account_delete/${id}`,
    );
    return [res, error];
  },

  // Get default address
  async getDefaultAddress(id: number | string) {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/getDefaultAddress/${id}`,
    );
    if (res?.data?.success) {
      dispatch(userActions.defaultAddress(res?.data?.data));
    }
    return [res, error];
  },

  // Get saved addresses
  async getSavedAddresses(id: number | string) {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/saved_address/${id}`,
    );
    return [res, error];
  },

  // Get user order history
  async getUserOrders(id: number) {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/fetch_orders/${id}`,
    );
    return [res, error];
  },
  async getDiscountCoupon() {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://babystore.ae/api/getCouponCode/new10`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
      dispatch(userActions.setDiscountCouponDetails(data));
    }
    return [res, error];
  },
  async getUserCashBack(body: any) {
    const dispatch = getDispatch();

    // dispatch(loaderAction.startLoading("placeOrder"));

    const [res, error] = await http.get(
      `https://babystore.ae/api/user_cashbacks/3`,
      body,
    );
    // dispatch(loaderAction.stopLoading("placeOrder"));

    const { data = [], summary = {} } = res?.data || {};

    console.log("cash", res, summary, data);
    if (res?.data?.success) {
      dispatch(userActions.setUserCashback({ data, summary }));
    }
    return [res, error];
  },
};

export default authService;
