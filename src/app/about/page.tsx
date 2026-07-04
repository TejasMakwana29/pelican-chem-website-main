import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";
import { company, timeline, whyChooseUs } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pelican Chem - established in 2007 in Rajkot, Gujarat. Manufacturer and supplier of RO chemicals, water treatment solutions, and industrial process chemicals.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
          alt="About Pelican Chem"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">About Us</p>
              <h1 className="heading-display mt-4 text-white">About Pelican Chem</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                A technology-driven manufacturer and trusted water treatment partner
                since {company.established}.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-label">Company Profile</p>
              <h2 className="heading-section mt-4">Manufacturing Excellence Since 2007</h2>
              <p className="mt-6 text-body">{company.description}</p>
              <p className="mt-4 text-body">{company.extendedDescription}</p>
              <p className="mt-4 text-body">{company.clientSatisfaction}</p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                  alt="Pelican Chem facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="heading-sub">Our Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{company.vision}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="heading-sub">Our Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{company.mission}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="heading-sub">Client Satisfaction</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {company.clientSatisfaction}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="text-center">
            <p className="text-label">Our Journey</p>
            <h2 className="heading-section mt-4">Company Timeline</h2>
          </FadeIn>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-aqua-100 md:left-1/2 md:block md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <FadeIn key={item.year} delay={index * 0.1}>
                  <div
                    className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-aqua bg-white md:left-1/2 md:block" />
                    <div className="md:w-1/2 md:pl-0 md:pr-0">
                      <div
                        className={`rounded-2xl bg-slate-50 p-8 ${
                          index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                        }`}
                      >
                        <span className="font-display text-2xl font-bold text-aqua">
                          {item.year}
                        </span>
                        <h3 className="heading-sub mt-2">{item.title}</h3>
                        <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-wide">
          <FadeIn className="text-center">
            <p className="text-label text-aqua-300">Leadership Approach</p>
            <h2 className="heading-section mt-4 text-white">Quality Commitment</h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <Link href="/quality" className="btn-secondary">
              Explore Quality & Manufacturing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
