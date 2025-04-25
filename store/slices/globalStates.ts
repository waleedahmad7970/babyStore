import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilter: "",
  isMobMenu: false,
};

export const globalStateSlice = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.isFilter = action.payload;
    },
    setMobileMenu: (state, action) => {
      state.isMobMenu = action.payload;
    },
  },
});
export const globalStateActions = globalStateSlice.actions;
export default globalStateSlice.reducer;
