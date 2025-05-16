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
