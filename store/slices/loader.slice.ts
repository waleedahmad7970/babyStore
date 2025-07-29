import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoaderState {
  [key: string]: boolean;
}

const initialState: LoaderState = {};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    stopLoading: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    clearAllLoaders: () => {
      return {};
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice.reducer;
