import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCartModel: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCartModel: (state, action) => {
      state.addToCartModel = action.payload;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
