import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  sliderImages: [],
  mobSliderImages: [],
  topCategories: [],
  suggestedCategories: [],
  // products
  youMayAlosLike: [],
  topProducts: [],
  trendingItems: [],
  flashSaleproducts: [],
  userLikeproducts: [],
  mostWishedProducts: [],

  // desktop_Sections
  desktopSections: [],
  desktopSectionsTest: [],
  // product details
  productDetails: {},
  relatedProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSliderImages: (state, action) => {
      state.sliderImages = action.payload;
    },
    setMobSliderImages: (state, action) => {
      state.mobSliderImages = action.payload;
    },
    setTopCategories: (state, action) => {
      state.topCategories = action.payload;
    },
    setSuggestedCategories: (state, action) => {
      state.suggestedCategories = action.payload;
    },
    setYouMayAlosLike: (state, action) => {
      state.youMayAlosLike = action.payload;
    },
    setTopProducts: (state, action) => {
      state.topProducts = action.payload;
    },
    setTrendingItems: (state, action) => {
      state.trendingItems = action.payload;
    },
    setFlashSaleproducts: (state, action) => {
      state.flashSaleproducts = action.payload;
    },
    setUserLikeproducts: (state, action) => {
      state.userLikeproducts = action.payload;
    },
    setMostWishedProducts: (state, action) => {
      state.mostWishedProducts = action.payload;
    },
    // desktop sections
    setDesktopSections: (state, action) => {
      state.desktopSections = action.payload;
    },
    setDesktopSectionsTest: (state, action) => {
      state.desktopSectionsTest = action.payload;
    },
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setRelatedProducts: (state, action) => {
      state.relatedProducts = action.payload;
    },
  },
});
export const productAction = productSlice.actions;
export default productSlice.reducer;
