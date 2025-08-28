// import { useAppSelector } from "@/store/hooks";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";

// const ROUTE_CONFIG = {
//   protected: ["/checkout", "/checkout/order-success"],
//   authOnly: ["/login", "/signup", "/reset-password", "/forgot-password"],
// };

// export function withAuth<P extends object>(
//   WrappedComponent: React.ComponentType<P>,
// ) {
//   return function WithAuthWrapper(props: P) {
//     const pathname = usePathname();
//     const router = useRouter();
//     const { registerSessionId = "" } = useAppSelector((state) => state.user);

//     const isAuthenticated = Boolean(registerSessionId);
//     const isProtectedRoute = ROUTE_CONFIG.protected.includes(pathname);
//     const isPublicRoutes = ROUTE_CONFIG.authOnly.includes(pathname);

//     useEffect(() => {
//       if (isProtectedRoute && !isAuthenticated) {
//         router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
//       } else if (isPublicRoutes && isAuthenticated) {
//         router.replace("/");
//       }
//     }, [isAuthenticated, isProtectedRoute, isPublicRoutes, pathname, router]);

//     return <WrappedComponent {...props} />;
//   };
// }
// "use client";

// import { useAppSelector } from "@/store/hooks";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";

// const authRoutes = ["/login", "/signup", "/reset-password", "/forgot-password"];
// const protectedRoutes = ["/checkout", "/checkout/order-success"];

// export function withAuth<P extends object>(
//   WrappedComponent: React.ComponentType<P>,
// ) {
//   return function WithAuthWrapper(props: P) {
//     const pathname = usePathname();
//     const router = useRouter();
//     const { registerSessionId = "" } = useAppSelector((state) => state.user);

//     const isAuthenticated = Boolean(registerSessionId);
//     const isProtectedRoute = protectedRoutes.includes(pathname);
//     const isAuthRoute = authRoutes.includes(pathname);

//     useEffect(() => {
//       if (isProtectedRoute && !isAuthenticated) {
//         router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
//       } else if (isAuthRoute && isAuthenticated) {
//         router.replace("/");
//       }
//     }, [isProtectedRoute, isAuthRoute, isAuthenticated, pathname, router]);

//     return <WrappedComponent {...props} />;
//   };
// }

"use client";

import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const authRoutes = ["/login", "/signup", "/reset-password", "/forgot-password"];
const protectedRoutes = ["/checkout", "/checkout/order-success"];

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  return function WithAuthWrapper(props: P) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { registerSessionId = "" } = useAppSelector((state) => state.user);

    const isAuthenticated = Boolean(registerSessionId);
    const isProtectedRoute = protectedRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);

    useEffect(() => {
      if (isProtectedRoute && !isAuthenticated) {
        // Not logged in → push to login with redirect
        router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      } else if (isAuthRoute && isAuthenticated) {
        // Logged in but on login/signup/reset page → redirect out
        const redirectParam = searchParams.get("redirect");
        router.replace(redirectParam || "/");
      }
    }, [
      isProtectedRoute,
      isAuthRoute,
      isAuthenticated,
      pathname,
      searchParams,
      router,
    ]);

    return <WrappedComponent {...props} />;
  };
}
