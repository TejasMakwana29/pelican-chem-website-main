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
    "Pelican Chem serves water treatment plants, RO plants, food & pharmaceutical manufacturing, textile, chemical processing, and commercial water systems.",
};

export default function IndustriesPage() {
  // Dynamically filter out Power Plant and append a single combined Food & Pharma entry
  const updatedIndustries = industries
    .filter((industry) => !industry.name.toLowerCase().includes("power"))
    .concat([
      {
        slug: "food-and-pharma",
        name: "Food & Pharmaceutical Manufacturing",
        description: "Comprehensive treatment programs, high-pH RO antiscalants, and targeted cleaning solutions designed for food-grade reliability and uninterrupted purified water systems.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
        // Added these empty arrays to satisfy TypeScript's strict Industry type requirements
        challenges: [],
        solutions: [],
        products: []
      }
    ]);

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

      <section className="py-20 bg-slate-50">
        {/* We use a fluid, ultra-wide wrapper here instead of container-wide to stretch closer to the edges */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Grid expands to 3 columns on large screens to fill the side spaces perfectly */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {updatedIndustries.map((industry, index) => (
              <FadeIn key={industry.slug} delay={index * 0.06}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group card-hover flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 h-full"
                >
                  <div className="relative h-64 w-full shrink-0 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="heading-sub text-xl group-hover:text-aqua">{industry.name}</h2>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-grow">
                      {industry.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-aqua">
                        Learn More
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

      <ContactCTA />
    </>
  );
}