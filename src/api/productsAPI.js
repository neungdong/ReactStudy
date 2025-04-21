import apiClient from "@/api/apiClient";

export const getProducts = async () => {
  const { data } = await apiClient.get("/products");

  const refined = data.products.map((product) => ({
    id: product.id,
    name: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  }));

  return refined;
};
