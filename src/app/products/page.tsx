import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { productCategories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Products | Pelican Chemical",
  description: "Browse our comprehensive range of high-performance water treatment chemicals.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative bg-navy py-20">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-8 text-center flex flex-col items-center">
          <FadeIn>
            <p className="text-label text-aqua-300 justify-center flex">Catalog</p>
            <h1 className="heading-display mt-4 text-white">Our Products</h1>
            <p className="mt-6 text-lg text-slate-300">
              Explore our complete range of specialized formulations. Select a category below to view our solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="mx-auto w-full max-w-6xl flex flex-col gap-4 px-4 md:px-8">
          {productCategories.map((category, index) => {
            const categoryProducts = getProductsByCategory(category.slug);
            if (categoryProducts.length === 0) return null;

            const isSingleProduct = categoryProducts.length === 1;
            
            // SMART ROUTING: Direct to product if 1 item, otherwise go to category grid
            const destinationUrl = isSingleProduct
              ? `/products/${category.slug}/${categoryProducts[0].slug}`
              : `/products/${category.slug}`;

            return (
              <FadeIn key={category.slug} delay={index * 0.05}>
                <Link
                  href={destinationUrl}
                  className="group relative w-full h-24 md:h-28 overflow-hidden flex items-center justify-between px-6 md:px-10 text-left transition-colors focus:outline-none rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-navy/75 transition-colors duration-300 group-hover:bg-navy/60" />

                  <div className="relative z-10 flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {category.name}
                    </h2>
                    <p className="text-aqua-300 text-sm mt-1 font-medium hidden sm:block">
                      {isSingleProduct ? "1 Product Available" : `${categoryProducts.length} Products Available`}
                    </p>
                  </div>

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-aqua">
                    <ArrowRight className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}