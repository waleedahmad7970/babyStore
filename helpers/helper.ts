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

export const calculateAverageRating = (reviews: { stars: string }[]) => {
  if (!reviews || reviews.length === 0) return 0;

  const totalStars = reviews.reduce((acc, curr) => {
    return acc + parseInt(curr.stars, 10);
  }, 0);

  return +(totalStars / reviews.length).toFixed(1);
};
