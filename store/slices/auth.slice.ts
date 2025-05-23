import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { toast } from "react-toastify";

interface Product {
  id: string | number;
  name?: string;
  price: number;
  title: string;
  image: string | StaticImageData;
  wished?: boolean;
}

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserState {
  user: User;
  wishList: Product[];
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  wishList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
    addToUserWishList: (state, action: PayloadAction<Product>) => {
      const index = state.wishList.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.wishList.splice(index, 1);
        toast.success(`Product added to wishlist successfully`);
      } else {
        state.wishList.push({
          ...action.payload,
          wished: true,
        });
        toast.success(`Product removed from wishlist successfully`);
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
