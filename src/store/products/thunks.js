import { fetchProducts } from "../../helpers/fetchProducts";
import { setLoading, setProducts } from "./productsSlice";

export const importProducts = (limit = 15) => {
  return async (dispatch) => {
    dispatch(setLoading());
    const products = await fetchProducts(limit);
    dispatch(setProducts(products));
  };
};
