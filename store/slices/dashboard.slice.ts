import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  activeDashboardTab: string;
}

const initialState: DashboardState = {
  activeDashboardTab: "Dashboard",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveDashboardTab: (state, action: PayloadAction<string>) => {
      state.activeDashboardTab = action.payload;
    },
  },
});

export const dashboardAction = dashboardSlice.actions;
export default dashboardSlice.reducer;
