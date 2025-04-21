"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { SessionProvider } from "next-auth/react";
import BottomNavigation from "@/components/menu/mobile-menu";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <BottomNavigation />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
