import { FormulationFinder } from "@/components/ui/FormulationFinder";
import {
  HeroSection,
  AboutPreview,
} from "@/components/sections/HomeSections";
import Link from "next/link";

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
                <p className="text-sm text-gray-600 leading-relaxed">Antiscalants (Pelican-301, Pelican-309), Membrane Cleaners, and Biocides.</p>
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
                <p className="text-sm text-gray-600 leading-relaxed">Chiller Scaling Problem Solvers, Scale & Corrosion Inhibitors, Oxygen Scavengers, and Biocides to maximize boiler lifespan.</p>
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
            {/* Left Column: OEM */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Private Label & White Label Manufacturing (OEM)</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Launch your own brand of water treatment chemicals. We offer premium white-label manufacturing with your custom branding, strict quality assurance, and bulk packaging options from 25Kg cans to 200L drums.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Inquire About Private Labeling
              </Link>
            </div>

            {/* Right Column: EPC */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Turnkey Water & Sewage Treatment Plants (EPC)</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Beyond chemicals, we design, manufacture, and commission complete RO Plants, Effluent Treatment Plants (ETP), and Sewage Treatment Plants (STP) tailored to your factory's specific flow rates and input water quality.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Get Plant Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Partner with Pelican Chemical */}
      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Technical Edge</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Why Partner with Pelican Chemical?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Since these chemicals will carry your brand name, they must be reliable. We ensure the technical superiority of every formulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engineered Excellence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All formulations are created under the supervision of experienced engineers following industry-set norms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our chemicals are highly effective at low dose rates across a wide range of feed water types and pH levels.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Stability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Products are safe to handle, safe in use, and fully compatible with other system components.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Legacy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Partners benefit from a manufacturer that has been operating in Rajkot, Gujarat since 2007.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="bg-blue-600 rounded-3xl p-10 md:p-12 text-white shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-extrabold mb-3">1000+</p>
                <p className="text-blue-100 font-medium text-sm md:text-base">Installations</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-extrabold mb-3">14+</p>
                <p className="text-blue-100 font-medium text-sm md:text-base">Years of Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-extrabold mb-3">30+</p>
                <p className="text-blue-100 font-medium text-sm md:text-base">Global Partners</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-extrabold mb-3">20+</p>
                <p className="text-blue-100 font-medium text-sm md:text-base">Distributors & Dealers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The High-Intent RFQ Form (Horizontally Elongated) */}
      <section className="py-16 bg-white border-t border-gray-200" id="quote">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gray-50 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">The High-Intent RFQ</h2>
                <p className="text-gray-600">Provide your requirements for contract pricing and bulk orders.</p>
              </div>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 items-end">
              {/* Row 1 */}
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

              {/* Row 2 */}
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