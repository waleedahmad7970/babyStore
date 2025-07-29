import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blogSlider: [],
  blogsDetails: {},
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setBlogSlider: (state, action) => {
      state.blogSlider = action.payload;
    },
    setBlogDetails: (state, action) => {
      state.blogsDetails = action.payload;
    },
  },
});
export const blogActon = blogSlice.actions;
export default blogSlice.reducer;
