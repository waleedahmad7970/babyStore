import { useEffect } from "react";

export const usePreventBodyScroll = (preventValue: any) => {
  useEffect(() => {
    if (preventValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [preventValue]);
};
