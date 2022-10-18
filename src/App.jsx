import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./components/Loading";
import { AppRouter } from "./router/AppRouter";
import { useEffect } from "react";
import { importProducts } from "./store/products";

export const App = () => {
  const { isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(importProducts());
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <AppRouter />
    </>
  );
};
