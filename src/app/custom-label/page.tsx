import type { Metadata } from "next";
import Image from "next/image";
import { Tag, Factory, Package, Handshake } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { InquiryForm, ContactCTA } from "@/components/ui/Forms";
import { customLabelFeatures } from "@/data/company";

export const metadata: Metadata = {
  title: "Custom Label Solutions",
  description:
    "Own Label RO Chemicals from Pelican Chem. Private labeling, OEM manufacturing, bulk supply, and distributor partnerships for water treatment companies.",
};

const featureIcons = [Tag, Factory, Package, Handshake];

export default function CustomLabelPage() {
  return (
    <>
      <section className="relative flex min-h-[45vh] items-center overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80"
          alt="Custom label solutions"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="section-padding relative w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">Private Label Solutions</p>
              <h1 className="heading-display mt-4 text-white text-balance">
                Own Label RO Chemicals
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Build your brand with proven Reverse Osmosis chemical formulations.
                We supply with your own label on the drum.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Partner With Pelican Chem</h2>
            <p className="mt-6 text-body">
              We can supply you with our Reverse Osmosis chemicals with your own label
              on the drum. So if you are a water treatment service company, a specialist
              RO plant manufacturer, or an FM company looking to increase your added value,
              why not contact us — because we can help you.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {customLabelFeatures.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <div className="card-hover rounded-2xl bg-slate-50 p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="heading-sub">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-label">Ideal Partners</p>
              <h2 className="heading-section mt-4">Who Benefits From Custom Label?</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Water treatment service companies",
                  "Specialist RO plant manufacturers",
                  "Facility management (FM) companies",
                  "Industrial chemical distributors",
                  "OEM equipment manufacturers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua-50 text-sm font-bold text-aqua">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="heading-sub">Start Your Partnership</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tell us about your business and labeling requirements.
                </p>
                <div className="mt-6">
                  <InquiryForm productName="Custom Label RO Chemicals" compact />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
