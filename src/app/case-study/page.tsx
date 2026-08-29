import type { Metadata } from "next";
import { 
  CheckCircle2, 
  Droplets, 
  Factory, 
  FlaskConical, 
  Stethoscope, 
  Zap
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/ui/Forms";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories",
  description: "Read how Pelican Chem provides customized water treatment and RO chemical solutions to solve complex industrial challenges.",
};

const caseStudies = [
  {
    id: "textile-ro",
    title: "Improving RO Plant Efficiency for a Textile Manufacturing Unit",
    industry: "Textile & Dyeing",
    icon: <Droplets className="h-6 w-6 text-aqua" />,
    challenge: {
      text: "A leading textile manufacturer was facing frequent membrane scaling in its Reverse Osmosis (RO) plant due to high silica and hardness in borewell water. The plant experienced:",
      list: [
        "Reduced permeate flow",
        "Frequent membrane cleaning",
        "High maintenance costs",
        "Increased production downtime"
      ]
    },
    solution: {
      text: "Pelican Chem's technical team analyzed the feed water and recommended:",
      list: [
        "PELICAN-309 H/S High Silica RO Antiscalant",
        "Periodic cleaning using Pelican RO Descaling Chemicals",
        "The dosing program was customized based on water quality and plant recovery."
      ]
    },
    results: [
      "35% reduction in membrane cleaning frequency",
      "Improved RO recovery",
      "Longer membrane life",
      "Reduced maintenance expenses",
      "Stable water quality for textile processing"
    ],
    products: [
      "PELICAN-309 H/S High Silica RO Antiscalant",
      "Pelican DS-H17 & DS-L17 RO Cleaners"
    ]
  },
  {
    id: "pharma-purified-water",
    title: "Reliable Purified Water Production for Pharmaceutical Manufacturing",
    industry: "Pharmaceutical Manufacturing",
    icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
    challenge: {
      text: "A pharmaceutical company required uninterrupted purified water production while complying with strict quality standards. Their RO system suffered from scaling and occasional fouling, impacting production schedules.",
      list: []
    },
    solution: {
      text: "Pelican Chem supplied:",
      list: [
        "PELICAN-301 High pH RO Antiscalant",
        "Scheduled membrane cleaning with Pelican RO Cleaners",
        "Technical support for optimized chemical dosing"
      ]
    },
    results: [
      "Consistent RO water quality",
      "Increased membrane life",
      "Reduced unplanned shutdowns",
      "Lower operating costs",
      "Improved production reliability"
    ],
    products: [
      "PELICAN-301 High pH RO Antiscalant",
      "RO Descaling Chemicals"
    ]
  },
  {
    id: "fnb-cooling-tower",
    title: "Reducing Cooling Tower Maintenance in a Beverage Processing Plant",
    industry: "Food & Beverage Processing",
    icon: <FlaskConical className="h-6 w-6 text-blue-500" />,
    challenge: {
      text: "A beverage manufacturer experienced excessive scale formation, algae growth, and corrosion in its cooling tower system, resulting in reduced cooling efficiency and higher energy consumption.",
      list: []
    },
    solution: {
      text: "Pelican Chem developed a complete cooling water treatment program using:",
      list: [
        "Anti-Scalant Cum Corrosion Inhibitor",
        "Micro Biocide",
        "Algae Preventive",
        "Cooling Tower Descaling Chemical"
      ]
    },
    results: [
      "Improved heat transfer efficiency",
      "Cleaner cooling tower operation",
      "Reduced energy consumption",
      "Lower maintenance frequency",
      "Extended equipment life"
    ],
    products: [
      "PC CT SC1 309",
      "PC CT MB1 301",
      "PC CT ALG 306",
      "PC CT DS1 399"
    ]
  },
  {
    id: "power-boiler",
    title: "Enhancing Boiler Efficiency in a Power Plant",
    industry: "Power Generation",
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    challenge: {
      text: "A thermal power plant experienced scale formation inside its boiler tubes, reducing heat transfer efficiency and increasing fuel consumption.",
      list: []
    },
    solution: {
      text: "Pelican Chem recommended:",
      list: [
        "PELICAN-BR 01/11 Boiler Treatment Chemical",
        "Regular boiler water analysis",
        "Customized dosing program"
      ]
    },
    results: [
      "Improved boiler efficiency",
      "Reduced scale formation",
      "Lower fuel consumption",
      "Extended boiler operating life",
      "Reduced maintenance shutdowns"
    ],
    products: [
      "PELICAN-BR 01/11 Boiler Chemical"
    ]
  },
  {
    id: "chemical-effluent",
    title: "Optimizing Effluent Treatment for Regulatory Compliance",
    industry: "Chemical Manufacturing",
    icon: <Factory className="h-6 w-6 text-purple-500" />,
    challenge: {
      text: "A chemical manufacturing company struggled with poor sludge settling, high turbidity, and inconsistent effluent quality, making it difficult to meet environmental discharge standards.",
      list: []
    },
    solution: {
      text: "Pelican Chem's application engineers recommended:",
      list: [
        "PELICAN-101 ETP Chemical",
        "Optimized dosing based on jar testing",
        "Continuous technical support for process optimization"
      ]
    },
    results: [
      "Faster sludge settling",
      "Improved clarification",
      "Lower chemical consumption",
      "Better ETP efficiency",
      "Consistent compliance with discharge norms"
    ],
    products: [
      "PELICAN-101 ETP Chemical"
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative flex min-h-[35vh] items-center bg-navy">
        <div className="section-padding w-full">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="text-label text-aqua-300">Success Stories</p>
              <h1 className="heading-display mt-4 text-white">Case Studies</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                Discover how Pelican Chem's specialized formulations and technical expertise solve complex water treatment challenges across industries.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.id} delay={index * 0.1} className="flex">
                <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-aqua/50 hover:shadow-md">
                  
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-100 pb-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                      {study.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {study.industry}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-navy leading-tight">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Challenge</h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {study.challenge.text}
                      </p>
                      {study.challenge.list.length > 0 && (
                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
                          {study.challenge.list.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Solution</h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {study.solution.text}
                      </p>
                      {study.solution.list.length > 0 && (
                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
                          {study.solution.list.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-aqua/10 p-6">
                    <h4 className="text-sm font-bold text-navy mb-4">Results</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-teal-900">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                          <span className="font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Products Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.products.map((product, idx) => (
                        <span 
                          key={idx} 
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}