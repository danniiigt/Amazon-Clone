import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { NavBar, UnderNavbar } from "../components";

export const HomeUi = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <NavBar />
      <UnderNavbar />
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.bgPrimary,
          minHeight: "calc(100vh - 105px)",
        }}
      >
        <Box
          sx={{
            maxWidth: 1300,
            padding: "0 24px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
