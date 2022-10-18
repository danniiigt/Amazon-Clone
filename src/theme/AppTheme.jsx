import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./";

export const AppTheme = ({ children }) => {
  const { type } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={type === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
