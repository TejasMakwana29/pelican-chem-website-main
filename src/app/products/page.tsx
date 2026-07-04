import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";
import { productCategories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Pelican Chem's complete range of RO chemicals, antiscalants, boiler chemicals, ETP chemicals, EDTA chemicals, and cooling tower treatment solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-navy">
        <div className="section-padding w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">Product Catalog</p>
              <h1 className="heading-display mt-4 text-white">Our Products</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Comprehensive water treatment and process chemical solutions engineered
                for industrial performance and reliability.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => {
              const categoryProducts = products.filter(
                (p) => p.categorySlug === category.slug
              );
              return (
                <FadeIn key={category.slug} delay={index * 0.08}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="group card-hover block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="heading-sub group-hover:text-aqua">{category.name}</h2>
                      <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-aqua">
                        {categoryProducts.length} Products
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <p className="text-label">All Products</p>
            <h2 className="heading-section mt-4">Complete Product Range</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.05}>
                <Link
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    {product.code && (
                      <span className="text-xs font-semibold text-aqua">{product.code}</span>
                    )}
                    <h3 className="font-display font-semibold text-navy group-hover:text-aqua">
                      {product.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                      {product.shortDescription}
                    </p>
                    <span className="mt-2 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-aqua">
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
