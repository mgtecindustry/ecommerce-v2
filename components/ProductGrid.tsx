"use client";
import { Product } from "@/lib/types/ProductType";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid items-center  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        return (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex w-auto md:w-[200px] h-full"
            >
              <ProductThumb key={product._id} product={product} />
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
}

export default ProductGrid;
