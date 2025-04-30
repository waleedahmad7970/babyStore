import { useEffect, RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement> | any,
  callback: () => void | any,
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref?.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};
