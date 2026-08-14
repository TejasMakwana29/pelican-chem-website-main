import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { productCategories, getProductsByCategory } from "@/data/products";

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
  const category = productCategories.find((c) => c.slug === categorySlug);
  
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} | Pelican Chemical`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = productCategories.find((c) => c.slug === categorySlug);
  const categoryProducts = getProductsByCategory(categorySlug);

  if (!category || categoryProducts.length === 0) notFound();

  return (
    <>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-navy">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full !pb-16">
          <div className="container-wide">
            <FadeIn>
              <Link
                href="/products"
                className="text-sm font-medium text-aqua-300 hover:text-white"
              >
                ← Back to All Products
              </Link>
              <h1 className="heading-display mt-4 text-white">{category.name}</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                {category.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product, index) => (
              <FadeIn key={product.slug} delay={index * 0.1}>
                <Link
                  href={`/products/${category.slug}/${product.slug}`}
                  className="group card-hover flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                >
                  <div className="relative h-64 w-full shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    {product.code && (
                      <span className="mb-3 self-start rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                        {product.code}
                      </span>
                    )}
                    <h3 className="heading-sub text-xl group-hover:text-aqua">{product.name}</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                      {product.shortDescription}
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-aqua">
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}