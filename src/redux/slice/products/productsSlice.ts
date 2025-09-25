import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { dummyProducts } from "./dummyProducts";
import type { Product } from "./types";

export interface ProductState {
  productList: Array<Product>;
}

const initialState: ProductState = {
  productList: dummyProducts,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.productList.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.productList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.productList[index] = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
