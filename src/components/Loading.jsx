import { Box } from "@mui/material";
import "../styles/loadingAnimation.css";

export const Loading = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        zIndex: 999999999,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          // img: {
          //   maxWidth: "20%",
          //   transition: "all 2.5s ease",
          //   transform: "scale(1.3)",
          //   // MAKE A TRANSITION THAT ZOOMS IN AND OUT THE IMAGE
          // },
        }}
      >
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="zoom-in-zoom-out"
        />
      </Box>
    </Box>
  );
};
