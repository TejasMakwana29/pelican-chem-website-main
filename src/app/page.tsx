import { FormulationFinder } from "@/components/ui/FormulationFinder";
import {
  HeroSection,
  AboutPreview,
} from "@/components/sections/HomeSections";
import Link from "next/link";
import { ShieldCheck, Zap, Building2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Formulation Finder */}
      <FormulationFinder />

      {/* 3. About Preview */}
      <AboutPreview />

      {/* 4. Our Core Chemical Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Chemical Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">RO Membrane Performance</h3>
              <div className="mb-8 flex-grow">
                <p className="font-semibold text-sm text-gray-900 mb-2">Highlights:</p>
                <p className="text-sm text-gray-600 leading-relaxed">Antiscalants (PELICAN-301, PELICAN-309), Membrane Cleaners, and Biocides.</p>
              </div>
              <Link href="/products/ro-chemicals" className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                View RO Solutions <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Boiler, Chiller & Cooling Tower</h3>
              <div className="mb-8 flex-grow">
                <p className="font-semibold text-sm text-gray-900 mb-2">Highlights:</p>
                <p className="text-sm text-gray-600 leading-relaxed">Chiller Scaling Problem Solvers, Scale & Corrosion Inhibitors, Oxygen Scavengers, and Biocides.</p>
              </div>
              <Link href="/products/thermal-solutions" className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                View Thermal Solutions <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specialty & Heavy Industrial</h3>
              <div className="mb-8 flex-grow">
                <p className="font-semibold text-sm text-gray-900 mb-2">Highlights:</p>
                <p className="text-sm text-gray-600 leading-relaxed">High-purity EDTA (Diammonium / Tetrasodium) and customized industrial blending.</p>
              </div>
              <Link href="/products/specialty-chemicals" className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                View Specialty Chemicals <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Category 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wastewater & ETP Formulations</h3>
              <div className="mb-8 flex-grow">
                <p className="font-semibold text-sm text-gray-900 mb-2">Highlights:</p>
                <p className="text-sm text-gray-600 leading-relaxed">Coagulants, Flocculants, Decolorizing agents, and pH adjusters for industrial effluents.</p>
              </div>
              <Link href="/products/etp-chemicals" className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                View ETP Solutions <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Specialized B2B Capabilities */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">The Conversion Trigger</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Specialized B2B Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Private Label & White Label Manufacturing (OEM)</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Launch your own brand of water treatment chemicals. We offer premium white-label manufacturing with your custom branding, strict quality assurance, and bulk packaging options from 25Kg cans to 200L drums.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Inquire About Private Labeling
              </Link>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Turnkey Water & Sewage Treatment Plants (EPC)</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Beyond chemicals, we design, manufacture, and commission complete RO Plants, Effluent Treatment Plants (ETP), and Sewage Treatment Plants (STP) tailored to your factory&apos;s specific flow rates and input water quality.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Get Plant Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Partner with Pelican Chemical (Technical Edge) */}
      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Technical Edge</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Why Partner with Pelican Chemical?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engineered Excellence</h3>
              <p className="text-sm text-gray-600">All formulations are created under the supervision of experienced engineers following industry-set norms.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-sm text-gray-600">Highly effective at low dose rates across a wide range of feed water types and pH levels.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Stability</h3>
              <p className="text-sm text-gray-600">Products are safe to handle, safe in use, and fully compatible with other system components.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Legacy</h3>
              <p className="text-sm text-gray-600">Partners benefit from a manufacturer that has been operating in Rajkot, Gujarat since 2007.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Plant Managers Choose Pelican Chemical (Value Props) */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Why Plant Managers Choose Pelican Chemical</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-4">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700 shadow-lg">
                <ShieldCheck className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-100">Consistent Chemical Purity</h4>
              <p className="text-gray-400">Every batch undergoes rigorous internal lab testing to ensure precise active ingredient percentages.</p>
            </div>
            <div className="p-4">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700 shadow-lg">
                <Zap className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-100">Membrane Life Extension</h4>
              <p className="text-gray-400">Our advanced anti-precipitant formulas reduce clean-in-place (CIP) frequency and extend membrane life by up to 40%.</p>
            </div>
            <div className="p-4">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700 shadow-lg">
                <Building2 className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-100">Direct-from-Manufacturer Pricing</h4>
              <p className="text-gray-400">Eliminate trading margins. Source directly from our manufacturing facility in Rajkot for highly competitive contract pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RFQ Form */}
      <section className="py-16 bg-white border-t border-gray-200" id="quote">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gray-50 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Request a Quote</h2>
                <p className="text-gray-600">Provide your requirements for contract pricing and bulk orders.</p>
              </div>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 items-end">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="Acme Industries" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="john@company.com" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="+91 XXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Requirement Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white appearance-none">
                  <option>Bulk Chemical Supply</option>
                  <option>Private Label (OEM)</option>
                  <option>Turnkey Plant (EPC)</option>
                  <option>Technical Consultation</option>
                </select>
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Requirement Details & Monthly Volume <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="Describe specific requirements, flow rates, or volumes..." required />
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg text-lg h-[50px] flex items-center justify-center">
                  Submit RFQ
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}