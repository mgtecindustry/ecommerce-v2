import { getAllProducts } from "@/lib/getAllProducts";
import DiscoverOurProductsBanner from "@/components/DiscoverOurProductsBanner";
import { Roboto } from "next/font/google";

import ProductsView from "@/components/ProductsView";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default async function AllProductsPage() {
  const products = await getAllProducts();

  return (
    <div className={`flex flex-col min-h-screen ${roboto.className}`}>
      <DiscoverOurProductsBanner />
      <div className="p-2 sm:p-4 mx-auto w-full  bg-gray-100">
        <ProductsView products={products} />
      </div>
    </div>
  );
}
