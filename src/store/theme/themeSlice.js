import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "light",
  theme: {
    bgPrimary: "#eaeded",
    bgSecondary: "#fff",
    textPrimary: "#000",
    textSecondary: "#2c2c2c",
    navbarPrimary: "#131921",
    navBarSecondary: "#232f3e",
    primary: "#febd69",
    secondary: "#ffd814",
    bgText: "#fff",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightMode: {
      reducer: (state) => {
        state.type = "light";
        state.theme = {
          bgPrimary: "#eaeded",
          bgSecondary: "#fff",
          textPrimary: "#000",
          textSecondary: "#2c2c2c",
          navbarPrimary: "#131921",
          navBarSecondary: "#232f3e",
          primary: "#febd69",
          bgText: "#fff",
        };
      },
    },
  },
});

export const { increment } = themeSlice.actions;
