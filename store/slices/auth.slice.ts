import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { toast } from "react-toastify";

interface Product {
  id?: string | number;
  name?: string;
  price?: number;
  title?: string;
  discount?: number;
  rating?: number;
  image?: string | StaticImageData;
  wished?: boolean;
}

interface SignupResult {
  registerSessionId: string | number;
}
interface User {
  name: string;
  email: string;
  password: string;
}

interface UserState {
  user: User | null;
  defaultAddress: null;
  wishList: Product[];
  registerSessionId: string | number | null;
  discountCouponDetails: null;
  userCashback: null;
  appliedCoupon: null;
}

const initialState: UserState = {
  user: null,
  defaultAddress: null,
  wishList: [],
  registerSessionId: null,
  discountCouponDetails: null,
  userCashback: null,
  appliedCoupon: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    defaultAddress: (state, action) => {
      state.defaultAddress = action.payload;
    },
    setUserCashback: (state, action) => {
      state.userCashback = action.payload;
    },
    setDiscountCouponDetails: (state, action) => {
      state.discountCouponDetails = action.payload;
    },
    setApplyCoupon: (state, action) => {
      state.appliedCoupon = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
    setRegisterSessionId: (state, action) => {
      state.registerSessionId = action.payload;
    },
    addToUserWishList: (state, action: PayloadAction<Product>) => {
      const index = state.wishList.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.wishList.splice(index, 1);
        toast.success(`Product removed from wishlist successfully`);
      } else {
        state.wishList.push({
          ...action.payload,
          wished: true,
        });
        toast.success(`Product added to wishlist successfully`);
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
