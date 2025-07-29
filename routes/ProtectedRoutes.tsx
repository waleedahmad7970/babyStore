import { isAuthenticated } from "@/utils/protect.auth.util";
import { redirect, usePathname } from "next/navigation";
import { ReactElement, ComponentType } from "react";

const protectedRoutes: Array<string> = [
  "/checkout",
  "/checkout/order-success",
  "/dashboard",
];
const publicRoutes: Array<string> = [
  "/login",
  "/signup",
  "/email-sent",
  "/sign-up-sso",
  "/reset-password",
  "/forgot-password",
  "/reset-password-success",
];

interface Props {
  [key: string]: unknown; // Replace this with the actual props structure if known
}

export default function ProtectedComp(Component: ComponentType<Props>) {
  return function ProtectedComp(props: Props): ReactElement | null {
    const pathname = usePathname();
    const isProtectedRoute = protectedRoutes.includes(pathname);
    const isPublicRoutes = publicRoutes.includes(pathname);

    if (isProtectedRoute && !isAuthenticated()) {
      redirect("/login");
      return null;
    } else if (isPublicRoutes && isAuthenticated()) {
      redirect("/");
      return null;
    }

    return <Component {...props} />;
  };
}
