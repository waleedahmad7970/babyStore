interface Review {
  stars: string | number;
}

interface StarCounts {
  full: number;
  half: number;
  empty: number;
  average: number;
}
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
export const calculateAverageRating = (reviews: { rating: number }[]) => {
  if (!reviews || reviews.length === 0) return 0;

  const total = reviews.reduce((sum, curr) => sum + curr.rating, 0);
  return +(total / reviews.length).toFixed(1);
};

interface Review {
  stars: string | number;
}

export function calculateAverageRatingProduct(reviews: Review[]): number {
  if (!reviews?.length) return 0;

  const total = reviews.reduce((sum, review) => {
    const rating =
      typeof review.stars === "string"
        ? parseFloat(review.stars)
        : review.stars;
    return sum + (isNaN(rating) ? 0 : rating);
  }, 0);

  return parseFloat((total / reviews.length).toFixed(1));
}

export function getStarCounts(reviews: Review[]): StarCounts {
  if (!reviews?.length) return { full: 0, half: 0, empty: 5, average: 0 };

  const total = reviews.reduce((sum, review) => {
    const rating =
      typeof review.stars === "string"
        ? parseFloat(review.stars)
        : review.stars;
    return sum + (isNaN(rating) ? 0 : rating);
  }, 0);

  const average = total / reviews.length;
  const full = Math.floor(average);
  const hasHalf = average % 1 >= 0.5;
  const half = hasHalf ? 1 : 0;
  const empty = 5 - full - half;

  return {
    full,
    half,
    empty,
    average: parseFloat(average.toFixed(1)),
  };
}

export const getStarPercentages = (reviews: { stars: string }[]) => {
  const total = reviews?.length;
  const count = [0, 0, 0, 0, 0];

  reviews?.forEach((r) => {
    const star = Math.floor(Number(r.stars));
    if (star >= 1 && star <= 5) {
      count[5 - star]++;
    }
  });

  return count.map((c) => (total ? (c / total) * 100 : 0));
};

export const formatKey = (str: string) => {
  if (!str) return "";
  str
    ?.split("_")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const conformOrderStatusLabels: Record<OrderStatusKey, string> = {
  pending: "Pending",
  under_process: "Process",
  ready: "Process",
  shipped: "Delivered",
  delivered: "Delivered",
  cancelled: "Cancelled",
  returned: "Returned",
  return_request: "Return Request",
  cancel_request: "Cancel Request",
  partially_cancelled: "Cancelled",
  partially_returned: "Returned",
};

export const statusColorKeyMap: Record<
  OrderStatusKey,
  "purple" | "blue" | "green" | "yellow"
> = {
  pending: "yellow",
  under_process: "blue",
  ready: "blue",
  shipped: "green",
  delivered: "green",
  cancelled: "purple",
  returned: "purple",
  return_request: "purple",
  cancel_request: "purple",
  partially_cancelled: "purple",
  partially_returned: "purple",
};

export type OrderStatusKey =
  | "pending"
  | "under_process"
  | "ready"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned"
  | "return_request"
  | "cancel_request"
  | "partially_cancelled"
  | "partially_returned";
