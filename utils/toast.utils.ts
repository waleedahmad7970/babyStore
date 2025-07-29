import { toast } from "react-toastify";

type APIResponse = {
  data?: {
    message?: string;
  };
};

export const handleToastAPIError = (
  res?: APIResponse | null,
  error?: any,
  fallbackMessage = "Something went wrong",
) => {
  if (res?.data?.message) {
    toast.success(res.data.message);
    return;
  }

  if (error?.response?.data?.message) {
    toast.error(error.response.data.message);
    return;
  }

  toast.error(fallbackMessage);
};
