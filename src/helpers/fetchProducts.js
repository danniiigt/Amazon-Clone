export const fetchProducts = async (qty) => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${qty}`);
  const data = await res.json();
  return data;
};
