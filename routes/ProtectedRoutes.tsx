"use client";

import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ROUTE_CONFIG = {
  protected: ["/checkout", "/checkout/order-success"],
  authOnly: ["/login", "/signup", "/reset-password", "/forgot-password"],
};

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  return function WithAuthWrapper(props: P) {
    const router = useRouter();
    const pathname = usePathname();
    const [loaded, setLoaded] = useState(false);

    const { registerSessionId = "" } = useAppSelector((state) => state.user);
    const isAuthenticated = Boolean(registerSessionId);

    useEffect(() => {
      // Prefetch known routes
      const allRoutes = [
        ...ROUTE_CONFIG.protected,
        ...ROUTE_CONFIG.authOnly,
        "/",
      ];
      allRoutes.forEach((route) => router.prefetch(route));
      setLoaded(true);
    }, [router]);

    useEffect(() => {
      if (!loaded) return;

      const cleanPath = pathname?.split("?")[0].replace(/\/+$/, "") || "/";

      const isProtected = ROUTE_CONFIG.protected.includes(cleanPath);
      const isAuthScreen = ROUTE_CONFIG.authOnly.includes(cleanPath);

      if (!isAuthenticated && isProtected) {
        // Redirect to login with ?redirect=
        router.push(`/login?redirect=${encodeURIComponent(cleanPath)}`);
        return;
      }

      if (isAuthenticated && isAuthScreen) {
        // Authenticated users shouldn't see login/signup screens
        router.push("/");
        return;
      }
    }, [pathname, isAuthenticated, loaded, router]);

    if (!loaded) {
      return (
        <div className="flex h-screen items-center justify-center">
          <div className="animate-pulse">Loading application...</div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
