const isServer: boolean = typeof window === "undefined";

export const getItemFromLS = <T>(key: string): T | null => {
  if (isServer) return null;
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const setItemInLS = <T>(key: string, data: T): void => {
  if (!isServer) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const removeItemFromLS = (key: string): void => {
  if (!isServer) {
    localStorage.removeItem(key);
  }
};
