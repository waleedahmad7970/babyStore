"use client";

import { createStateSyncMiddleware } from "redux-state-sync";
import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import {
  PURGE,
  FLUSH,
  PAUSE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import userSlice from "./slices/auth.slice";
import cartSlice from "./slices/cart.slice";
import brandSlice from "./slices/brand.slice";
import blogsSlice from "./slices/blogs.slice";
import ordersSlice from "./slices/orders.slice";
import loaderSlice from "./slices/loader.slice";
import productSlice from "./slices/products";
import dashboardSlice from "./slices/dashboard.slice";
import categoriesSlice from "./slices/categories.slice";
import globalStateSlice from "./slices/globalStates";
import checkoutSlice from "./slices/checkout.slice";
import homeSlice from "./slices/home.slice";

// Create noop storage for server-side
const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const rootReducer = combineReducers({
  home: homeSlice,
  user: userSlice,
  cart: cartSlice,
  blogs: blogsSlice,
  orders: ordersSlice,
  loader: loaderSlice,
  brands: brandSlice,
  product: productSlice,
  checkout: checkoutSlice,
  dashboard: dashboardSlice,
  categories: categoriesSlice,
  globalStates: globalStateSlice,
});
const isServer = typeof window === "undefined";
const storage = isServer ? createNoopStorage() : createWebStorage("local");

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "user",
    "cart",
    "blogs",
    "checkout",
    // "categories",
    // "globalStates",
    // "dashboard",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware: Middleware[] = [];

if (!isServer) {
  // Create state sync middleware with proper typing
  const stateSyncMiddleware = createStateSyncMiddleware({
    blacklist: [PERSIST, PURGE, REGISTER, FLUSH, REHYDRATE, PAUSE],
  });

  // Type assertion to match Redux Toolkit's expected middleware type
  middleware.push(stateSyncMiddleware as Middleware);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
