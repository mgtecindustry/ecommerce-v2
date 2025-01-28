import { Roboto } from "next/font/google";
import HeroBanner from "@/components/HeroBanner";
import { Badge } from "@/components/ui/badge";
import ProductCarousel from "@/components/ProductCarousel";
import Services from "@/components/Services";
import { getAllProducts } from "@/lib/getAllProducts";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PageProducts = async () => {
  const products = await getAllProducts();
  return (
    <div style={{ fontFamily: roboto.style.fontFamily }}>
      <div className="p-2 sm:p-0">
        <HeroBanner />
      </div>
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="space-y-4 text-center mb-12">
          <Badge
            variant="outline"
            className="px-6 py-1.5 text-lg font-medium bg-white hover:bg-gray-50"
          >
            Produse Selectate
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter   text-blue-500">
            Recomandările noastre
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Descoperiți selecția noastră de produse premium, alese special
            pentru dumneavoastră
          </p>
        </div>
        <ProductCarousel products={products || []} />
        <div className="w-full max-w-7xl mx-auto mt-12 mb-8">
          <Services />
        </div>
      </div>
    </div>
  );
};
export default PageProducts;
