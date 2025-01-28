export const getProductById = async (id: string) => {
  const response = await fetch(`/api/products/product?id=${id}`);

  if (!response.ok) {
    throw new Error("Produsul nu a putut fi încărcat.");
  }

  return response.json();
};
