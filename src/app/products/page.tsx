import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

      {/* Category Tiles Only */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="heading-sub text-xl group-hover:text-aqua">{category.name}</h2>
                      <p className="mt-3 text-slate-600 leading-relaxed">{category.description}</p>
                      <p className="mt-6 inline-flex items-center text-sm font-bold uppercase tracking-wider text-navy group-hover:text-aqua bg-slate-50 px-4 py-2 rounded-lg">
                        View {categoryProducts.length} Products
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}