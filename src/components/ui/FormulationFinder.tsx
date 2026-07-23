"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function FormulationFinder() {
  const [application, setApplication] = useState("");
  const [issue, setIssue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would filter products or push to a search page
    alert(`Searching products for ${application} targeting ${issue}...`);
  };

  return (
    <section className="section-padding bg-aqua-50">
      <div className="container-wide">
        <FadeIn className="rounded-3xl bg-navy p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <h2 className="heading-section text-white">Find Your Chemical Formulation Instantly</h2>
            <p className="mt-4 text-slate-300">Select your application and target issue to discover the perfect solution.</p>
          </div>
          
          <form onSubmit={handleSearch} className="mt-10 grid gap-4 md:grid-cols-3">
            <select 
              className="w-full rounded-xl border-none bg-white/10 px-4 py-4 text-white outline-none focus:ring-2 focus:ring-aqua"
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              required
            >
              <option value="" className="text-slate-800">Select Application</option>
              <option value="ro" className="text-slate-800">Water Treatment Plant / RO System</option>
              <option value="etp" className="text-slate-800">Effluent & Sewage (ETP/STP)</option>
              <option value="boiler" className="text-slate-800">Boiler & Cooling Towers</option>
              <option value="chiller" className="text-slate-800">Chiller</option>
              <option value="other" className="text-slate-800">Other</option>
            </select>

            <select 
              className="w-full rounded-xl border-none bg-white/10 px-4 py-4 text-white outline-none focus:ring-2 focus:ring-aqua"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
            >
              <option value="" className="text-slate-800">Select Target Issue</option>
              <option value="scale" className="text-slate-800">Scale Prevention</option>
              <option value="ph" className="text-slate-800">pH Correction</option>
              <option value="coagulation" className="text-slate-800">Coagulation & Flocculation</option>
              <option value="descaling" className="text-slate-800">Cleaning & Descaling</option>
              <option value="odor" className="text-slate-800">Bad Odor</option>
              <option value="color" className="text-slate-800">Color Issue</option>
            </select>

            <button type="submit" className="btn-primary w-full shadow-none">
              Show Recommended Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}