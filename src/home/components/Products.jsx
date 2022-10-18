import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

export const Products = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  return (
    <>
      <Grid container mt={5} mb={5} spacing={3} sx={{ marginTop: 0 }}>
        {!isLoading &&
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductItem product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
