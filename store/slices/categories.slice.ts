import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilters: [],
  categoryPageFilters: [],
  categoryPageFiltersMob: [],
  categoryPageProducts: [],
  categoryTopFilters: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    toggleSelectedFilter: (state: any, action: any) => {
      const value = action.payload;
      const exists = state.selectedFilters.includes(value);
      if (exists) {
        state.selectedFilters = state.selectedFilters.filter(
          (item: any) => item !== value,
        );
      } else {
        state.selectedFilters.push(value);
      }
    },
    setCategoryPageFilters: (state, action) => {
      state.categoryPageFilters = action.payload;
    },
    setCategoryPageFiltersMob: (state, action) => {
      state.categoryPageFiltersMob = action.payload;
    },
    setCategoryPageProducts: (state, action) => {
      state.categoryPageProducts = action.payload;
    },
    setCategoryTopFilters: (state, action) => {
      state.categoryTopFilters = action.payload;
    },
  },
});
export const categoriesAction = categoriesSlice.actions;
export default categoriesSlice.reducer;
