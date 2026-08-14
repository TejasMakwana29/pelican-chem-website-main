"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react"; // Added Phone here
import { FadeIn } from "@/components/ui/FadeIn";
import { products } from "@/data/products";

// ==========================================
// 1. THE LOGIC MAP (THE "BRAIN")
// ==========================================
type IssueMap = {
  [issueId: string]: {
    label: string;
    productSlugs: string[]; 
  };
};

type AppMap = {
  [appId: string]: {
    label: string;
    issues: IssueMap;
  };
};

const suggestorLogic: AppMap = {
  "ro": {
    label: "Water Treatment Plant / RO System",
    issues: {
      "scale": { label: "Scale Prevention", productSlugs: ["ro-antiscalant-high-ph", "ro-antiscalant-low-ph", "ro-antiscalant-silica", "sea-water-ro-antiscalant-399"] },
      "ph": { label: "pH Correction", productSlugs: ["ro-ph-booster", "ro-ph-booster-food-grade"] },
      "descaling": { label: "Cleaning & Descaling", productSlugs: ["ro-descaling-high-ph", "ro-descaling-low-ph", "ro-descaling-silica", "ro-descaling-bio-foul"] },
      "odor": { label: "Bad Odor", productSlugs: ["ro-biocide"] } 
    }
  },
  "etp": {
    label: "Effluent & Sewage (ETP/STP)",
    issues: {
      "coagulation": { label: "Coagulation & Flocculation", productSlugs: ["pelican-101"] },
      "color": { label: "Color Issue", productSlugs: ["pelican-101"] },
      "ph": { label: "pH Correction", productSlugs: ["ro-ph-booster", "ro-ph-booster-food-grade"] },
      "odor": { label: "Bad Odor", productSlugs: ["ro-biocide"] }
    }
  },
  "boiler": {
    label: "Boiler & Cooling Towers",
    issues: {
      "scale": { label: "Scale Prevention", productSlugs: ["boiler-chemical-pelican-br-01-11", "cooling-tower-antiscalant"] },
      "descaling": { label: "Cleaning & Descaling", productSlugs: ["cooling-tower-descaling"] },
      "odor": { label: "Bad Odor", productSlugs: ["cooling-tower-micro-biocide"] }
    }
  },
  "chiller": {
    label: "Chiller",
    issues: {
      "descaling": { label: "Cleaning & Descaling", productSlugs: ["descaling-chiller", "descaling-ahu-fcu"] }
    }
  },
  "other": {
    label: "Other",
    issues: {
      "descaling": { label: "Cleaning & Descaling", productSlugs: ["descaling-industrial-equipment", "descaling-solar-pipes"] },
      "scale": { label: "Scale Prevention", productSlugs: ["edta-chemical"] }
    }
  }
};

// ==========================================
// 2. THE COMPONENT
// ==========================================
export function FormulationFinder() {
  const [application, setApplication] = useState("");
  const [issue, setIssue] = useState("");
  const [results, setResults] = useState<any[] | null>(null);

  // When application changes, reset the issue and clear results
  const handleAppChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setApplication(e.target.value);
    setIssue("");
    setResults(null);
  };

  // When issue changes, clear results until they click search
  const handleIssueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIssue(e.target.value);
    setResults(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!application || !issue) return;

    // Find the required product slugs from our logic map
    const slugsToFind = suggestorLogic[application].issues[issue].productSlugs;
    
    // Filter the master product list to find matching products
    const foundProducts = products.filter(product => slugsToFind.includes(product.slug));
    
    setResults(foundProducts);
  };

  // Dynamically grab available issues for the second dropdown
  const availableIssues = application ? suggestorLogic[application].issues : {};

  return (
    <section className="section-padding bg-aqua-50">
      <div className="container-wide">
        <FadeIn className="rounded-3xl bg-navy p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <h2 className="heading-section text-white">Find Your Chemical Formulation Instantly</h2>
            <p className="mt-4 text-slate-300">Select your application and target issue to discover the perfect solution.</p>
          </div>
          
          <form onSubmit={handleSearch} className="mt-10 grid gap-4 md:grid-cols-3">
            {/* Dropdown 1: Application */}
            <select 
              className="w-full rounded-xl border-none bg-white/10 px-4 py-4 text-white outline-none focus:ring-2 focus:ring-aqua cursor-pointer"
              value={application}
              onChange={handleAppChange}
              required
            >
              <option value="" className="text-slate-800">Select Application</option>
              {Object.entries(suggestorLogic).map(([key, app]) => (
                <option key={key} value={key} className="text-slate-800">
                  {app.label}
                </option>
              ))}
            </select>

            {/* Dropdown 2: Target Issue (Dynamically Populated) */}
            <select 
              className="w-full rounded-xl border-none bg-white/10 px-4 py-4 text-white outline-none focus:ring-2 focus:ring-aqua disabled:opacity-50 cursor-pointer"
              value={issue}
              onChange={handleIssueChange}
              required
              disabled={!application}
            >
              <option value="" className="text-slate-800">Select Target Issue</option>
              {Object.entries(availableIssues).map(([key, issueData]) => (
                <option key={key} value={key} className="text-slate-800">
                  {issueData.label}
                </option>
              ))}
            </select>

            <button 
              type="submit" 
              disabled={!application || !issue}
              className="btn-primary w-full shadow-none disabled:bg-slate-500 disabled:cursor-not-allowed"
            >
              Show Recommended Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </FadeIn>

        {/* Dynamic Results Area */}
        {results !== null && (
          <div className="mt-12">
            <FadeIn>
              <h3 className="text-2xl font-bold text-navy mb-8 text-center">
                Recommended Formulations
              </h3>
              
              {results.length === 1 ? (
                /* HERO LAYOUT FOR SINGLE PRODUCT */
                <div className="max-w-5xl mx-auto">
                  <Link
                    href={`/products/${results[0].categorySlug}/${results[0].slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 lg:flex-row transition-all hover:shadow-md"
                  >
                    <div className="relative h-72 w-full shrink-0 overflow-hidden lg:h-auto lg:w-1/2">
                      <Image
                        src={results[0].image}
                        alt={results[0].name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                      {results[0].code && (
                        <span className="mb-4 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                          {results[0].code}
                        </span>
                      )}
                      <h4 className="font-bold text-navy text-2xl group-hover:text-aqua">
                        {results[0].name}
                      </h4>
                      <p className="mt-4 text-slate-600 leading-relaxed">
                        {results[0].shortDescription}
                      </p>
                      <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wider text-aqua">
                        View Details & Datasheet
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              ) : results.length > 1 ? (
                /* GRID LAYOUT FOR MULTIPLE PRODUCTS */
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                  {results.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.categorySlug}/${product.slug}`}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all"
                    >
                      <div className="relative h-48 w-full shrink-0 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-col p-6 flex-grow">
                        {product.code && (
                          <span className="mb-3 self-start rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                            {product.code}
                          </span>
                        )}
                        <h4 className="font-bold text-navy text-lg group-hover:text-aqua">
                          {product.name}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                          {product.shortDescription}
                        </p>
                        <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase text-aqua">
                          View Details <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                /* PREMIUM FALLBACK IF ZERO RESULTS */
                <div className="mx-auto max-w-2xl text-center bg-white p-10 rounded-2xl shadow-sm ring-1 ring-slate-200">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-aqua/10 mb-6">
                    <Phone className="h-8 w-8 text-aqua" />
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-3">Custom Formulation Required</h4>
                  <p className="text-slate-600 mb-8">
                    This specific application issue requires a specialized or tailored chemical approach. Our engineering team can develop a custom solution specifically for your facility's unique parameters.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Consult Our Technical Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}