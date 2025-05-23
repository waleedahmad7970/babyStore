import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { toast } from "react-toastify";

interface Product {
  id: string | number;
  name?: string;
  price: number;
  title: string;
  image: string | StaticImageData;
  isAddedToCart?: boolean;
}

interface CartState {
  addToCartModel: boolean;
  cartProducts: Product[];
  addCurrentAddedProduct: Product | null;
}

const initialState: CartState = {
  addToCartModel: false,
  cartProducts: [],
  addCurrentAddedProduct: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCartModel: (state, action: PayloadAction<boolean>) => {
      state.addToCartModel = action.payload;
    },
    setAddCurrentAddedProduct: (state, action: PayloadAction<Product>) => {
      state.addCurrentAddedProduct = action.payload;
    },
    setAddToCartModelProduct: (state, action: PayloadAction<Product>) => {
      const index = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.cartProducts.splice(index, 1);
        toast.success(`Product removed from cart successfully`);
      } else {
        state.cartProducts.push({
          ...action.payload,
          isAddedToCart: true,
        });
        toast.success(`Product added to cart successfully`);
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
