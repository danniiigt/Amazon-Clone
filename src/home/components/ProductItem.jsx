import {
  Box,
  Button,
  ButtonBase,
  Paper,
  Rating,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const ProductItem = ({ product }) => {
  console.log(product);
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: theme.bgSecondary,
          p: 2.5,
          height: 535,
          "&:hover": { cursor: "pointer" },
        }}
      >
        <Stack sx={{ width: "100%", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              mb: 6,
              img: {
                objectFit: "contain",
                maxHeight: "100%",
                maxWidth: "100%",
              },
            }}
          >
            <img src={product.image} alt="" />
          </Box>
          <Typography variant="body1" gutterBottom>
            {product.title}
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Stack direction="row" spacing={1}>
              <Rating
                value={product.rating.rate}
                size="small"
                readOnly
                precision={0.1}
              />
              <Typography variant="body2">({product.rating.count})</Typography>
            </Stack>
            <Typography variant="body2" fontWeight={600}>
              {product.price}€
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            mb={3}
            overflow="hidden"
            sx={{ color: theme.textSecondary, flexGrow: 1 }}
            className="bottomShadow"
          >
            {product.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              backgroundColor: theme.secondary,
            }}
          >
            Añadir a la cesta
          </Button>
        </Stack>
      </Paper>
    </>
  );
};
