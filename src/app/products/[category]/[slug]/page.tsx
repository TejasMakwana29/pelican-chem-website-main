import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { InquiryForm, DatasheetButton } from "@/components/ui/Forms";
import { getProductBySlug, products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };

  return {
    title: product.code ? `${product.name} (${product.code})` : product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.categorySlug !== category) notFound();

  const displayName = product.code
    ? `${product.name} (${product.code})`
    : product.name;

  return (
    <>
      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-navy">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full !pb-16">
          <div className="container-wide">
            <FadeIn>
              <Link
                href={`/products/${category}`}
                className="text-sm font-medium text-aqua-300 hover:text-white"
              >
                ← {product.category}
              </Link>
              {product.code && (
                <span className="ml-4 rounded-full bg-aqua/20 px-3 py-1 text-xs font-semibold text-aqua-300">
                  {product.code}
                </span>
              )}
              <h1 className="heading-display mt-4 text-white">{product.name}</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                {product.shortDescription}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="heading-section">Product Overview</h2>
                <p className="mt-6 text-body">{product.overview}</p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-12">
                <h3 className="heading-sub">Benefits</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.2} className="mt-12">
                <h3 className="heading-sub">Applications</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.applications.map((app) => (
                    <li key={app} className="flex gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                      {app}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-12">
                <h3 className="heading-sub">Technical Highlights</h3>
                <div className="mt-6 rounded-2xl bg-slate-50 p-8">
                  <ul className="space-y-3">
                    {product.technicalHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 border-b border-slate-200 pb-3 text-sm text-slate-700 last:border-0 last:pb-0"
                      >
                        <span className="font-semibold text-navy">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* New Specifications Table Block */}
              {product.specifications && (
                <FadeIn delay={0.35} className="mt-12">
                  <h3 className="heading-sub">Product Specifications</h3>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-left text-sm text-slate-700">
                      <thead className="bg-slate-50 font-semibold text-navy">
                        <tr>
                          <th className="px-6 py-4">Property</th>
                          <th className="px-6 py-4">Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {product.specifications.map((spec) => (
                          <tr key={spec.property} className="hover:bg-slate-50/50">
                            <td className="px-6 py-4 font-medium">{spec.property}</td>
                            <td className="px-6 py-4">{spec.specification}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </FadeIn>
              )}

              <FadeIn delay={0.4} className="mt-8">
                <DatasheetButton productName={displayName} />
              </FadeIn>
            </div>

            <div>
              <FadeIn direction="right">
                <div className="sticky top-28 rounded-2xl bg-slate-50 p-8">
                  <h3 className="heading-sub">Product Inquiry</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Request pricing, technical data, or customized formulations.
                  </p>
                  <div className="mt-6">
                    <InquiryForm productName={displayName} compact />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}