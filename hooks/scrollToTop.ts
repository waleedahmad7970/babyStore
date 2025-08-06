import { RefObject } from "react";

export function scrollToTop(containerRef?: RefObject<HTMLElement>) {
  if (containerRef?.current) {
    // Scroll the passed container
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // Scroll the whole window
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
