import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  orderDetails: {},
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const orderAction = orderSlice.actions;
export default orderSlice.reducer;
