import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeSections: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeSections: (state, action) => {
      state.homeSections = action.payload;
    },
  },
});
export const homeActions = homeSlice.actions;
export default homeSlice.reducer;
