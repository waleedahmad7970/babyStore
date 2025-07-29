import { createSlice } from "@reduxjs/toolkit";

type BrandDetails = {
  name?: string;
  image?: string;
  description?: string;
};

interface State {
  CBSDetails: BrandDetails;
  selectedFilters: string[];
  CBSPageFilters: any;
  CBSPageProducts: any;
  CBSPageFiltersMob: any;
  CBSTopFilters: any;
  priceRange: any;
  filteredProducts: any;
  selectTopFilterValue: any;
}

const initialState: State = {
  CBSDetails: {},
  selectedFilters: [],
  CBSPageFilters: [],
  CBSPageProducts: [],
  CBSPageFiltersMob: [],
  CBSTopFilters: [],
  filteredProducts: [],
  selectTopFilterValue: "",
  priceRange: {
    lowest: 0,
    highest: 0,
  },
};

export const brandSlice = createSlice({
  name: "brands",
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
    setToggleSelectedFilterByArray: (state, action: { payload: string[] }) => {
      const newValues = action.payload;
      state.selectedFilters = newValues;
    },
    setCBSDetails: (state, action) => {
      state.CBSDetails = action.payload;
    },
    setCBSPageFilters: (state, action) => {
      state.CBSPageFilters = action.payload;
    },
    setCBSPageFiltersMob: (state, action) => {
      state.CBSPageFiltersMob = action.payload;
    },
    setCBSPageProducts: (state, action) => {
      state.CBSPageProducts = action.payload;
    },
    setCBSTopFilters: (state, action) => {
      state.CBSTopFilters = action.payload;
    },
    setCBSTopFilterValue: (state, action) => {
      state.selectTopFilterValue = action.payload;
    },

    reserAllAppliedFilter: (state) => {
      state.selectTopFilterValue = "";
      state.selectedFilters = [];
      state.priceRange = {
        lowest: 0,
        highest: 0,
      };
    },

    setCBSFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    unSelectTopFilterValue: (state) => {
      state.selectTopFilterValue = "";
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    resetPriceRange: (state) => {
      state.priceRange = { lowest: 0, highest: 0 };
    },
  },
});
export const brandAction = brandSlice.actions;
export default brandSlice.reducer;
