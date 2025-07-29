import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { toast } from "react-toastify";

interface Product {
  id: string | number;
  name?: string;
  price?: number;
  rating?: number;
  insatllmentPrice?: number;
  title?: string;
  discount?: number;
  image?: string | StaticImageData;
  isAddedToCart?: boolean;
  isCheckoutProduct?: boolean;
  quantity?: number;
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
          isCheckoutProduct: true,
          quantity: 1,
        });
        toast.success(`Product added to cart successfully`);
      }
    },
    setAddToCartModelProductCart: (
      state,
      action: PayloadAction<Product & { update?: boolean }>,
    ) => {
      const { id, update = false, ...incomingProduct } = action.payload;
      const index = state.cartProducts.findIndex((item) => item.id === id);
      const incomingQuantity = incomingProduct.quantity ?? 1;

      if (index !== -1) {
        const existingProduct = state.cartProducts[index];

        if (update) {
          // Check if all matching keys have same values
          const allValuesSame = Object.keys(incomingProduct).every((key) => {
            const newVal = (incomingProduct as any)[key];
            const oldVal = (existingProduct as any)[key];
            return newVal === oldVal;
          });

          if (allValuesSame) {
            toast.info("Product already added to cart");
            return;
          }

          // Update only values of matching keys
          for (const key of Object.keys(incomingProduct)) {
            const newVal = (incomingProduct as any)[key];
            if (newVal !== undefined) {
              (existingProduct as any)[key] = newVal;
            }
          }

          state.cartProducts[index] = existingProduct;
          toast.success("Product updated in cart");
          return;
        }

        // If update is false, remove the product
        state.cartProducts.splice(index, 1);
        toast.success("Product removed from cart");
        return;
      }

      // If product is new, add it with default keys
      state.cartProducts.push({
        ...incomingProduct,
        id,
        isAddedToCart: true,
        isCheckoutProduct: true,
        quantity: incomingQuantity,
      });

      toast.success("Product added to cart");
    },

    removeCartItem: (state, action: PayloadAction<string | number>) => {
      const index = state.cartProducts.findIndex(
        (item) => item.id === action.payload,
      );

      if (index !== -1) {
        state.cartProducts.splice(index, 1);
        toast.info("Item removed from cart");
      }
    },
    incrementQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload,
      );
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload,
      );
      if (item && item.quantity && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    toggleCheckoutProduct: (state, action: PayloadAction<number | string>) => {
      const index = state.cartProducts.findIndex(
        (item) => item.id === action.payload,
      );

      if (index !== -1) {
        const current = state.cartProducts[index];
        state.cartProducts[index] = {
          ...current,
          isCheckoutProduct: !current.isCheckoutProduct,
        };
      }
    },
    clearAllCheckoutProducts: (state) => {
      state.cartProducts = state.cartProducts.map((product) => ({
        ...product,
        isCheckoutProduct: false,
      }));
    },
    emptyCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
