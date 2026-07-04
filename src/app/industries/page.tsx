import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Pelican Chem serves water treatment plants, RO plants, power plants, manufacturing, textile, chemical processing, and commercial water systems.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-navy">
        <div className="section-padding w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">Industries</p>
              <h1 className="heading-display mt-4 text-white">Industries We Serve</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Specialized water treatment chemical solutions tailored to the unique
                challenges of diverse industrial sectors.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry, index) => (
              <FadeIn key={industry.slug} delay={index * 0.06}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group card-hover flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                >
                  <div className="relative w-2/5 shrink-0 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="200px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h2 className="heading-sub group-hover:text-aqua">{industry.name}</h2>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                      {industry.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-aqua">
                      Learn More
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
