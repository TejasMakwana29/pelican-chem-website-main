import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";
import { getIndustryBySlug, industries } from "@/data/industries";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industries" };

  return {
    title: industry.name,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  return (
    <>
      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-navy">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full !pb-16">
          <div className="container-wide">
            <FadeIn>
              <Link
                href="/industries"
                className="text-sm font-medium text-aqua-300 hover:text-white"
              >
                ← All Industries
              </Link>
              <h1 className="heading-display mt-4 text-white">{industry.name}</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">{industry.description}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="heading-section">Industry Challenges</h2>
              <ul className="mt-8 space-y-4">
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 text-body">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-aqua" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right">
              <h2 className="heading-section">Our Solutions</h2>
              <ul className="mt-8 space-y-4">
                {industry.solutions.map((solution) => (
                  <li key={solution} className="flex gap-3 text-body">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                    {solution}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn className="mt-16">
            <h2 className="heading-section">Recommended Products</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {industry.products.map((product) => (
                <span
                  key={product}
                  className="rounded-full bg-aqua-50 px-5 py-2.5 text-sm font-semibold text-navy"
                >
                  {product}
                </span>
              ))}
            </div>
            <Link href="/products" className="btn-outline mt-8 inline-flex">
              Browse All Products
            </Link>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
