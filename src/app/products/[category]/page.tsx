import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";
import {
  getCategoryBySlug,
  getProductsByCategory,
  productCategories,
} from "@/data/products";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Products" };

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) notFound();

  const categoryProducts = getProductsByCategory(categorySlug);

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-navy">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full">
          <div className="container-wide">
            <FadeIn>
              <Link
                href="/products"
                className="text-sm font-medium text-aqua-300 hover:text-white"
              >
                ← All Products
              </Link>
              <h1 className="heading-display mt-4 text-white">{category.name}</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">{category.description}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.08}>
                <Link
                  href={`/products/${categorySlug}/${product.slug}`}
                  className="group card-hover block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {product.code && (
                      <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {product.code}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="heading-sub group-hover:text-aqua">{product.name}</h2>
                    <p className="mt-2 text-sm text-slate-600">{product.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-aqua">
                      View Product
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
