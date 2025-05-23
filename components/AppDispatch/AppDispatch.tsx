"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDispatch } from "@/utils/dispatch.util";

export const AppDispatch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setDispatch(dispatch);
  }, [dispatch]);

  return "";
};
