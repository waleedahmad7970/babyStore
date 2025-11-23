"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { SessionProvider } from "next-auth/react";
import BottomNavigation from "@/components/menu/mobile-menu";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <SessionProvider>
    <GoogleOAuthProvider
      clientId={
        "1079821016037-2tggd3aq3fk588mutao1p878v619hm7e.apps.googleusercontent.com"
      }
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
          {/* <BottomNavigation /> */}
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
    // </SessionProvider>
  );
}
