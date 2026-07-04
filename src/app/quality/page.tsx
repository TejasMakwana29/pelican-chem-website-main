import type { Metadata } from "next";
import Image from "next/image";
import { FlaskConical, Cog, TestTube, Repeat, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";
import { qualityPoints } from "@/data/company";

export const metadata: Metadata = {
  title: "Quality & Manufacturing",
  description:
    "Pelican Chem quality standards, manufacturing process, product testing, consistency, and safety commitment for industrial water treatment chemicals.",
};

const qualityIcons = [ShieldCheck, Cog, TestTube, Repeat, FlaskConical];

export default function QualityPage() {
  return (
    <>
      <section className="relative flex min-h-[45vh] items-center overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=1920&q=80"
          alt="Quality and manufacturing"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">Quality Assurance</p>
              <h1 className="heading-display mt-4 text-white">Quality & Manufacturing</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Strategic approaches to ensure quality and efficiency in every
                formulation we manufacture.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Manufacturing Excellence</h2>
            <p className="mt-6 text-body">
              Every Pelican Chem product is formulated as per industry set norms and
              under the supervision of experienced engineers. Our commitment to quality
              drives consistent performance across all product lines.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualityPoints.map((point, index) => {
              const Icon = qualityIcons[index];
              return (
                <FadeIn key={point.title} delay={index * 0.08}>
                  <div className="card-hover h-full rounded-2xl bg-slate-50 p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-aqua">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="heading-sub">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-label text-aqua-300">Our Process</p>
              <h2 className="heading-section mt-4 text-white">
                From Formulation to Delivery
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Research & Formulation",
                    desc: "Engineered formulations based on industry requirements and field performance data.",
                  },
                  {
                    step: "02",
                    title: "Quality-Controlled Manufacturing",
                    desc: "Supervised blending and production following strict process controls.",
                  },
                  {
                    step: "03",
                    title: "Testing & Verification",
                    desc: "Comprehensive testing ensures every batch meets performance specifications.",
                  },
                  {
                    step: "04",
                    title: "Packaging & Dispatch",
                    desc: "Safe packaging with proper labeling for industrial handling and storage.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-display text-2xl font-bold text-aqua">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="Manufacturing process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
