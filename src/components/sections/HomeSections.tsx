import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Shield, Wrench, Settings, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { StatsGrid } from "@/components/ui/AnimatedCounter";
import { ContactCTA } from "@/components/ui/Forms";
import { company, whyChooseUs, strengths, stats, roHighlights } from "@/data/company";
import { featuredProducts } from "@/data/products";
import { industries } from "@/data/industries";

const iconMap: Record<string, ReactNode> = {
  calendar: <Calendar className="h-7 w-7" />,
  shield: <Shield className="h-7 w-7" />,
  expertise: <Wrench className="h-7 w-7" />,
  customize: <Settings className="h-7 w-7" />,
};

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
              <Link href="/products" className="btn-primary">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request Quote
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

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <FadeIn className="text-center">
          <p className="text-label">Why Choose Us</p>
          <h2 className="heading-section mx-auto mt-4 max-w-3xl text-balance">
            Excellence in Every Formulation
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="card-hover rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                  {iconMap[item.icon]}
                </div>
                <h3 className="heading-sub">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <p className="text-label">Our Products</p>
            <h2 className="heading-section mt-4">Featured Products</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/products" className="btn-outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.08}>
              <Link
                href={`/products/${product.categorySlug}/${product.slug}`}
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-aqua">
                    {product.category}
                  </p>
                  <h3 className="heading-sub mt-2 group-hover:text-aqua">{product.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
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

export function CustomLabelBanner() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-navy">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80')] bg-cover bg-center opacity-20" />
            <div className="relative grid items-center gap-8 p-10 md:p-16 lg:grid-cols-2">
              <div>
                <p className="text-label text-aqua-300">Own Label Solutions</p>
                <h2 className="heading-section mt-4 text-white text-balance">
                  Own Label RO Chemicals
                </h2>
                <p className="mt-6 text-body text-slate-300">
                  We can supply you with our Reverse Osmosis chemicals with your own label
                  on the drum. If you are a water treatment service company, specialist RO
                  plant manufacturer, or FM company looking to increase your added value,
                  contact us — we can help you.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link href="/custom-label" className="btn-primary">
                  Learn About Custom Label
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export { ContactCTA };
