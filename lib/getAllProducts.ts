export const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products"); // Înlocuiește cu URL-ul tău complet
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};
