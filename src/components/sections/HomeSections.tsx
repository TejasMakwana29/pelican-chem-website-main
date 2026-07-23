import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Shield, Wrench, Settings, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { StatsGrid } from "@/components/ui/AnimatedCounter";
import { company, strengths, stats, roHighlights } from "@/data/company";
import { industries } from "@/data/industries";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=1920&q=80"
        alt="Industrial water treatment facility"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="gradient-overlay" />
      <div className="section-padding relative w-full">
        <div className="container-wide max-w-4xl">
          <FadeIn>
            <p className="text-label text-aqua-300">Industrial Chemical Solutions</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-display mt-6 text-white text-balance">
              Advanced Water Treatment Chemicals for Superior RO Performance
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              With over 14 years of expertise, Pelican Chemical provides high-quality RO chemicals that maximize efficiency, extend membrane life, and ensure consistent water quality.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-slate-200 md:text-base">
              <li className="flex items-center gap-3">
                <span className="text-aqua">🏭</span> State-of-the-Art Production Facility in Rajkot, Jalna, Ahmedabad, Banglore
              </li>
              <li className="flex items-center gap-3">
                <span className="text-aqua">📦</span> Custom / Private Labeling (OEM) Available
              </li>
              <li className="flex items-center gap-3">
                <span className="text-aqua">🚛</span> Pan-India Supply & Prompt Delivery
              </li>
              <li className="flex items-center gap-3">
                <span className="text-aqua">📞</span> 24/7 Support on call
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#quote" className="btn-primary">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                alt="Pelican Chem manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="text-label">About Pelican Chem</p>
            <h2 className="heading-section mt-4 text-balance">
              Your Trusted Water Treatment Partner
            </h2>
            <p className="mt-6 text-body">{company.description}</p>
            <p className="mt-4 text-body">{company.extendedDescription}</p>
            <Link href="/about" className="btn-outline mt-8 inline-flex">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function CoreCategoriesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <FadeIn className="text-center">
          <p className="text-label">Our Solutions</p>
          <h2 className="heading-section mt-4">Our Core Chemical Categories</h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0.1}>
            <div className="card-hover flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="heading-sub mb-4">RO Membrane Performance</h3>
              <div className="mb-8 flex-grow">
                <p className="mb-2 text-sm font-semibold text-slate-900">Highlights:</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Antiscalants (Pelican-301, Pelican-309), Membrane Cleaners, and Biocides.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="card-hover flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="heading-sub mb-4">Boiler, Chiller & Cooling Tower</h3>
              <div className="mb-8 flex-grow">
                <p className="mb-2 text-sm font-semibold text-slate-900">Highlights:</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Chiller Scaling Problem Solvers, Scale & Corrosion Inhibitors, Oxygen Scavengers, and Biocides to maximize equipment lifespan.
                </p>
              </div>
              <Link href="/products" className="mt-auto inline-flex items-center font-semibold text-aqua hover:text-navy transition-colors">
                View Thermal Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="card-hover flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="heading-sub mb-4">Specialty & Heavy Industrial</h3>
              <div className="mb-8 flex-grow">
                <p className="mb-2 text-sm font-semibold text-slate-900">Highlights:</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  High-purity EDTA (Diammonium / Tetrasodium) and customized industrial blending.
                </p>
              </div>
              <Link href="/products" className="mt-auto inline-flex items-center font-semibold text-aqua hover:text-navy transition-colors">
                View Specialty Chemicals <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="card-hover flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h3 className="heading-sub mb-4">Wastewater & ETP Formulations</h3>
              <div className="mb-8 flex-grow">
                <p className="mb-2 text-sm font-semibold text-slate-900">Highlights:</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Coagulants, Flocculants, Decolorizing agents, and pH adjusters for industrial effluents.
                </p>
              </div>
              <Link href="/products" className="mt-auto inline-flex items-center font-semibold text-aqua hover:text-navy transition-colors">
                View ETP Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-wide">
        <FadeIn className="text-center">
          <p className="text-label text-aqua-300">Industries We Serve</p>
          <h2 className="heading-section mt-4 text-white text-balance">
            Solutions Across Every Sector
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body text-slate-300">
            From RO plants to power generation, we deliver specialized chemical solutions
            tailored to industry-specific water treatment challenges.
          </p>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((industry, index) => (
            <FadeIn key={industry.slug} delay={index * 0.06}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group card-hover block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12 text-center">
          <Link href="/industries" className="btn-secondary">
            View All Industries
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function StrengthsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="text-label">Our Strengths</p>
            <h2 className="heading-section mt-4 text-balance">
              Strategic Approaches to Quality & Efficiency
            </h2>
            <div className="mt-8 space-y-6">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <h3 className="font-display font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="rounded-3xl bg-aqua-50 p-8 md:p-10">
              <h3 className="heading-sub">Highlights of RO Dosing Chemicals</h3>
              <ul className="mt-6 space-y-3">
                {roHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function B2BCapabilitiesSection() {
  return (
    <section className="section-padding bg-white border-y border-slate-100">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <FadeIn direction="left">
            <div className="card-hover h-full rounded-3xl bg-slate-50 p-8 md:p-10 ring-1 ring-slate-100 flex flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="heading-sub text-2xl mb-4">
                Private Label & White Label Manufacturing (OEM)
              </h3>
              <p className="text-body mb-8 flex-grow">
                Launch your own brand of water treatment chemicals. We offer premium white-label manufacturing with your custom branding, strict quality assurance, and bulk packaging options from 25Kg cans to 200L drums.
              </p>
              <Link href="/contact" className="btn-outline inline-flex w-fit">
                Inquire About Private Labeling
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="card-hover h-full rounded-3xl bg-slate-50 p-8 md:p-10 ring-1 ring-slate-100 flex flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-sub text-2xl mb-4">
                Turnkey Water & Sewage Treatment Plants (EPC)
              </h3>
              <p className="text-body mb-8 flex-grow">
                Beyond chemicals, we design, manufacture, and commission complete RO Plants, Effluent Treatment Plants (ETP), and Sewage Treatment Plants (STP) tailored to your factory's specific flow rates and input water quality.
              </p>
              <Link href="/contact" className="btn-primary inline-flex w-fit">
                Get Plant Specifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-wide">
        <FadeIn className="text-center">
          <h2 className="heading-section text-white mt-4">
            Why Plant Managers Choose Pelican Chemical
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-aqua"></div>
        </FadeIn>

        <div className="mt-16 grid gap-12 text-center md:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
              <svg className="h-10 w-10 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-display text-xl font-semibold mb-4">Consistent Chemical Purity</h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              Every batch undergoes rigorous internal lab testing to ensure precise active ingredient percentages before it leaves our facility.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
              <svg className="h-10 w-10 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-display text-xl font-semibold mb-4">Membrane Life Extension</h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              Our advanced anti-precipitant formulas are engineered to reduce clean-in-place (CIP) frequency and extend membrane life by up to 40%.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
              <svg className="h-10 w-10 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-display text-xl font-semibold mb-4">Direct-from-Manufacturer Pricing</h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              Eliminate trading margins. Source directly from our manufacturing facility in Rajkot for highly competitive contract pricing.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide text-center">
        <FadeIn>
          <p className="text-label">Client Trust</p>
          <h2 className="heading-section mt-4 text-balance">
            Trusted by Water Treatment Professionals
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body">
            Serving water treatment service companies, RO plant manufacturers, and
            industrial facilities across India with reliable chemical solutions and
            dedicated technical support.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-16">
          <StatsGrid stats={stats} />
        </FadeIn>
      </div>
    </section>
  );
}

export function RFQSection() {
  return (
    <section className="section-padding bg-slate-50" id="quote">
      <div className="container-wide max-w-4xl">
        <FadeIn>
          <div className="rounded-3xl bg-white p-8 md:p-14 shadow-xl ring-1 ring-slate-100">
            <div className="mb-10 text-center">
              <h2 className="heading-section mb-4">Request a Quote</h2>
              <p className="text-body text-lg">Provide your requirements for contract pricing and bulk orders.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/10" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/10" placeholder="Acme Industries" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/10" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/10" placeholder="+91 XXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Requirement Type</label>
                <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/10">
                  <option>Bulk Chemical Supply</option>
                  <option>Private Label (OEM)</option>
                  <option>Turnkey Plant (EPC)</option>
                  <option>Technical Consultation</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Requirement Details & Monthly Volume <span className="text-red-500">*</span></label>
                <textarea rows={5} className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/10" placeholder="Please describe your specific requirements, flow rates, or chemical volumes..." required></textarea>
              </div>

              <button type="submit" className="btn-primary mt-4 w-full justify-center py-4 text-lg">
                Submit RFQ
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}