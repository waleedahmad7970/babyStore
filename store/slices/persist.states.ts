import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobNavbar: false,
};

export const persistStateSLice = createSlice({
  name: "persistStates",
  initialState,
  reducers: {
    setMobNavbar: (state, action) => {
      state.mobNavbar = action.payload;
    },
  },
});
export const persistStatesActions = persistStateSLice.actions;
export default persistStateSLice.reducer;
