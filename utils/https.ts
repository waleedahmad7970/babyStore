import axios, {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import { toast } from "react-toastify";
import { getItemFromLS } from "@/utils/LS_STORAGE";
import { getDispatch } from "@/utils/dispatch.util";
import { promisify } from "./promisify.util";

interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success?: boolean;
  message?: string;
  token?: string;
}

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.0.198:8001/api/v1/",
  // baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getItemFromLS("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] =
      config.headers["Content-Type"] || "application/json";

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response interceptor
httpClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const { error, success, message, token } = response.data;

    if (success) {
      if (error) {
        toast.error(error);
      }
      if (token) {
        localStorage.setItem("token", token);
      }
    }

    if (message) {
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }

    return response;
  },
  (error: AxiosError<ApiResponse>) => {
    // const dispatch = getDispatch();
    let message = error.message || "Something went wrong.";

    if (error.response?.data) {
      if (error.response.data.success === true) {
        message = "";
      } else if (error.response.data.success === false) {
        message = error.response.data.message || message;
      }
    }

    if (message) {
      toast.error(message);
    }

    if (error.response?.status === 401) {
      //   localStorage.clear();
      //   window.location.href = "/sign-in";
    }

    return Promise.reject(error);
  },
);

// HTTP methods with proper typing

const http = {
  get: <T = any>(url = "", config: AxiosRequestConfig = {}) =>
    promisify<T>(axios.get<T>(url, config)),

  post: <T = any>(url = "", data = {}, config: AxiosRequestConfig = {}) =>
    promisify<T>(axios.post<T>(url, data, config)),

  put: <T = any>(url = "", data = {}, config: AxiosRequestConfig = {}) =>
    promisify<T>(axios.put<T>(url, data, config)),

  patch: <T = any>(url = "", data = {}, config: AxiosRequestConfig = {}) =>
    promisify<T>(axios.patch<T>(url, data, config)),

  delete: <T = any>(url = "", config: AxiosRequestConfig = {}) =>
    promisify<T>(axios.delete<T>(url, config)),
};
export default http;
