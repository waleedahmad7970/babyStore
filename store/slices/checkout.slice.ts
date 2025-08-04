import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckoutVisited: false,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setIscheckoutVisited: (state, action) => {
      state.isCheckoutVisited = action.payload;
    },
  },
});
export const checkoutAction = checkoutSlice.actions;
export default checkoutSlice.reducer;
