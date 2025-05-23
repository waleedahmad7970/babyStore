import { AppDispatch } from "@/store/store";

let appDispatch: AppDispatch;

export const getDispatch = (): AppDispatch => appDispatch;
export const setDispatch = (dispatch: AppDispatch): AppDispatch =>
  (appDispatch = dispatch);
