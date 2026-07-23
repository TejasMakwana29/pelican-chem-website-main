import Link from "next/link";
import { FlaskConical, Factory, Tag, Building2, BookOpenText, ArrowRight } from "lucide-react";

export default function ApplicationPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Widest Range of Advanced Water Treatment Solutions</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From specialized chemical formulations to turnkey plant manufacturing, we provide end-to-end solutions for industrial water management.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-16 space-y-20">
        
        {/* 1. Water Treatment Chemicals */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg"><FlaskConical className="w-6 h-6 text-blue-600" /></div>
            <h2 className="text-3xl font-bold text-gray-900">1. Water Treatment Chemicals (By Application)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Reverse Osmosis (RO) Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-semibold text-gray-800">RO Antiscalants:</span> PELICAN-301, PELICAN-309, and PELICAN-309 H/S High Silica.</li>
                <li><span className="font-semibold text-gray-800">Specialized RO:</span> High pH, Low pH, and Sea Water RO Antiscalants.</li>
                <li><span className="font-semibold text-gray-800">RO Descaling & Cleaning:</span> Specialized formulations for membrane maintenance.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Boiler & Cooling Water</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Boiler Treatment Chemicals</li>
                <li>Cooling Tower Chemicals</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Wastewater & Industrial</h3>
              <ul className="space-y-2 text-gray-600">
                <li>ETP (Effluent Treatment Plant) Chemicals</li>
                <li>EDTA Chemicals</li>
                <li>General Descaling Chemicals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Water & Sewage Treatment Plants */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg"><Factory className="w-6 h-6 text-blue-600" /></div>
            <h2 className="text-3xl font-bold text-gray-900">2. Water & Sewage Treatment Plants</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Water Treatment Plants (WTP)</h3>
              <p className="text-gray-600">Comprehensive hardware solutions for high-quality water production.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Sewage Treatment Plants (STP)</h3>
              <p className="text-gray-600">Efficient systems designed for municipal and commercial sewage management.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Effluent Treatment Plants (ETP)</h3>
              <p className="text-gray-600">Customized plants to handle industrial wastewater discharge compliance.</p>
            </div>
          </div>
        </section>

        {/* 3. Private Label Services */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg"><Tag className="w-6 h-6 text-blue-600" /></div>
<h2 className="text-3xl font-bold text-gray-900">3. Private Label Services (&quot;Own Label&quot;)</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
            This is a core competitive advantage for Pelican Chemical. Giving it a prominent spot in the Mega Menu attracts B2B partners, service companies, and plant manufacturers.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
               <h4 className="font-bold text-xl mb-2 text-gray-900">Custom Branding Services</h4>
               <p className="text-gray-600">Supply of RO chemicals with your own custom label on the drum.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
               <h4 className="font-bold text-xl mb-2 text-gray-900">Partner Programs</h4>
               <p className="text-gray-600">Dedicated support for RO plant manufacturers and FM companies.</p>
            </div>
          </div>
        </section>

        {/* 4. Company & Strengths */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg"><Building2 className="w-6 h-6 text-blue-600" /></div>
            <h2 className="text-3xl font-bold text-gray-900">4. Company & Strengths</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="block p-6 border rounded-xl hover:shadow-lg transition-all">
              <h4 className="font-bold text-lg mb-1">Our Story</h4>
              <p className="text-sm text-gray-500">Company profile & history since 2007.</p>
            </Link>
            <Link href="/strengths" className="block p-6 border rounded-xl hover:shadow-lg transition-all">
              <h4 className="font-bold text-lg mb-1">Our Strengths</h4>
              <p className="text-sm text-gray-500">Technical expertise & manufacturing.</p>
            </Link>
            <Link href="/quality" className="block p-6 border rounded-xl hover:shadow-lg transition-all">
              <h4 className="font-bold text-lg mb-1">Quality Standards</h4>
              <p className="text-sm text-gray-500">Industry-set norms & expert supervision.</p>
            </Link>
            <Link href="/gallery" className="block p-6 border rounded-xl hover:shadow-lg transition-all">
              <h4 className="font-bold text-lg mb-1">Photo Gallery</h4>
              <p className="text-sm text-gray-500">Manufacturing & product visuals.</p>
            </Link>
          </div>
        </section>

        {/* 5. Technical Resources & Contact */}
        <section className="grid md:grid-cols-2 gap-12 pt-12 border-t">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <BookOpenText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">5. Technical Resources & Support</h2>
            </div>
            <ul className="space-y-4">
              <li><Link href="/downloads/sds" className="text-blue-600 font-semibold hover:underline">Product Safety Data Sheets (SDS) →</Link></li>
              <li><Link href="/water-analysis" className="text-blue-600 font-semibold hover:underline">Water Analysis Request →</Link></li>
            </ul>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Contact Our Rajkot Headquarters</h3>
            <p className="text-gray-400">Reach out for inquiries, contract pricing, or partnership opportunities.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}