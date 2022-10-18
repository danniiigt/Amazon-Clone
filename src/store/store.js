import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products";
import { themeSlice } from "./theme";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    products: productsSlice.reducer,
  },
});
