import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  products: null,
  selectedProduct: null,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = true;
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setLoading, setProducts, setSelectedProduct } =
  productsSlice.actions;
