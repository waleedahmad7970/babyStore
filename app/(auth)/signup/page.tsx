"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";

export default function Page() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return <div>Signup</div>;
}
