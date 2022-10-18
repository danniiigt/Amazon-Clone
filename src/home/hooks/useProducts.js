import { useSelector } from "react-redux";
import { importProducts, setLoading } from "../../store/products";

export const useProducts = async () => {
  const { isLoading, products, selectedProduct } = useSelector(
    (state) => state.products
  );

  const setIsLoading = async () => {
    dispatch(setLoading());
  };

  const importProductsHook = async (limit = 15) => {
    dispatch(importProducts(limit));
  };

  return {
    isLoading,
    products,
    selectedProduct,
    importProductsHook,
    setIsLoading,
  };
};
