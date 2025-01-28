"use client";
import React, { useEffect, useState } from "react";
import { getProductById } from "@/lib/getProductById";
import { Product } from "@/lib/types/ProductType";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToBasketButton from "@/components/AddToBasketButton";
interface ProductPageProps {
  params: Promise<{ id: string }>;
}
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

function ProductPage({ params }: ProductPageProps) {
  const { id } = React.use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const outOfStock = product && product.stock != null && product.stock <= 0;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(`Eroare la încărcare: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Se încarcă...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`container mx-auto px-4 py-8 ${roboto.className}`}>
      <Link
        href="/produse"
        className="inline-flex items-center gap-2 mb-6 text-blue-500 hover:text-blue-700 group transition duration-300 font-medium"
      >
        <IoArrowBackOutline
          size={20}
          className="transform transition-transform duration-300 group-hover:-translate-x-1"
        />
        Înapoi la produse
      </Link>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${
            outOfStock ? "opacity-50" : ""
          }`}
        >
          {product && product.image && (
            <Image
              src={product.image}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {outOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of stock</span>
            </div>
          )}
        </div>{" "}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product && product.name}
            </h1>
            <div className="text-xl font-semibold mb-4">
              RON{product?.price?.toFixed(2)}
            </div>
            <div className="prose max-w-none mb-6">
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="mt-4">
            {product && (
              <AddToBasketButton
                product={product}
                disabled={outOfStock ?? false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
