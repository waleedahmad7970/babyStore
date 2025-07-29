import http from "@/utils/https";
import { getDispatch } from "@/utils/dispatch.util";
import { orderAction } from "@/store/slices/orders.slice";
import { dashboardAction } from "@/store/slices/dashboard.slice";
import { loaderAction } from "@/store/slices/loader.slice";

const orderServices = {
  async getOrders(id: number | string) {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_orders/${id}`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
      dispatch(orderAction.setOrders(data));
    }
    return [res, error];
  },
  // order details
  async getOrderDetails(id: number) {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/getOrderId/${id}`,
    );

    console.log("details", res);
    const {
      billing_info = {},
      order = {},
      order_details = [],
    } = res?.data?.data || {};
    if (res?.data?.success) {
      dispatch(
        orderAction.setOrderDetails({ billing_info, order, order_details }),
      );
    }
    return [res, error];
  },
  //   order info by driver Id
  async getOrderDetailsByDriverId(id: number) {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/orders_driver_index_api/${id}`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
    }
    return [res, error];
  },
  //   order status by order number
  async getOrderStatus(orderNumber: number) {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/order_status/${orderNumber}`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
    }
    return [res, error];
  },
  async getOrdersDeliveryStatus() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/orders_delivery_status`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
    }
    return [res, error];
  },

  async getListOfCollectiveOrders() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/orders_driver_index_api_collected`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
    }
    return [res, error];
  },
  //   filters related api
  async getOrderFilterByDate() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/orders_driver_index_api_date`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
    }
    return [res, error];
  },
  //   place order
  async placeOrder(body: any, router: any) {
    const dispatch = getDispatch();

    dispatch(loaderAction.startLoading("placeOrder"));

    const [res, error] = await http.post(
      `https://www.babystore.ae/api/order_created`,
      body,
    );
    dispatch(loaderAction.stopLoading("placeOrder"));

    const { order_id = "", payment_url = {} } = res?.data || {};
    if (payment_url?.original?.payment_url) {
      return router.push(payment_url?.original?.payment_url);
    }
    if (order_id) {
      router.push(`/checkout/order-success/${order_id}`);
    }
    return [res, error];
  },
  //   get cashback

  //   update prder status
  async updateOrderDeliberyStatus(body: any) {
    const [res, error] = await http.post(
      `https://www.babystore.ae/api/orders_delivery_status_update`,
      body,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
    }
    return [res, error];
  },
  // it will b move to dahos ar servcie please

  // reviews
  async getUserReviews(id: number) {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/user_reviews/${id}`,
    );
    const { data = [] } = res?.data || {};
    if (res?.data?.success && data) {
      dispatch(dashboardAction.setUserReviews(data));
    }
    return [res, error];
  },
};

export default orderServices;
