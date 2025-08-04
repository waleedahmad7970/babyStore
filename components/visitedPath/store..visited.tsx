"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TrackVisitedRoutes() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const stored = localStorage.getItem("visited-paths");
    let visitedPaths: string[] = stored ? JSON.parse(stored) : [];

    visitedPaths = visitedPaths.filter((path) => path !== pathname);

    visitedPaths.push(pathname);

    localStorage.setItem("visited-paths", JSON.stringify(visitedPaths));
  }, [pathname]);

  return null;
}
