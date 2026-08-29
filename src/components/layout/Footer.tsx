"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { getProductsByCategory } from "@/data/products";
import { LegalModal } from "@/components/ui/LegalModal"; // Imported the modal

// Helper function to bypass category pages with only 1 product
const getSmartHref = (originalHref: string) => {
  if (originalHref.startsWith("/products/") && originalHref.split("/").length === 3) {
    const categorySlug = originalHref.split("/")[2];
    const categoryProducts = getProductsByCategory(categorySlug);
    
    if (categoryProducts && categoryProducts.length === 1) {
      return `/products/${categorySlug}/${categoryProducts[0].slug}`;
    }
  }
  return originalHref;
};

export function Footer() {
  const [modalType, setModalType] = useState<"legal" | "privacy" | "cookie" | null>(null);
  const productLinks = navigation.find((n) => n.label === "Our Products")?.children ?? [];

  return (
    <>
      <footer className="bg-navy text-slate-300">
        <div className="section-padding !pb-12 !pt-20">
          <div className="container-wide">
            
            {/* Main Footer Links & Info */}
            <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-12">
              
              {/* Column 1: Map */}
              <div className="lg:col-span-4 h-full">
                <div className="h-64 lg:h-full min-h-[240px] w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14767.17725827309!2d70.798407!3d22.28578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca118b91ac2f%3A0x4c2268f5822578c0!2sPelican%20Industries!5e0!3m2!1sen!2sin!4v1784974342133!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pelican Chemical Manufacturing Facility Location"
                    className="h-full w-full"
                  />
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="lg:col-span-2">
                <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm transition-colors hover:text-aqua"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Products */}
              <div className="lg:col-span-3">
                <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
                  Products
                </h3>
                <ul className="space-y-3">
                  {productLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={getSmartHref(item.href)}
                        className="text-sm transition-colors hover:text-aqua"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className="lg:col-span-3">
                <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
                  Contact
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                    <span>
                      <strong className="text-white">Corporate Office & Plant</strong><br />
                      {company.address.full}
                    </span>
                  </li>   
                  <li>
                    <span className="text-white">GSTIN: 24AIVPD4424G1ZC</span>
                    <span className="mt-1 block text-xs text-slate-400">Sterling Enterprise Rajkot</span>
                  </li>       
                  
                  {company.phones.map((phone) => (
                    <li key={phone} className="flex gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-aqua" />
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                        {phone}
                      </a>
                    </li>
                  ))}

                  <li className="flex gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-aqua" />
                    <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                      {company.email}
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Copyright & Bottom Bar with Clickable Legal Buttons */}
            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 lg:flex-row">
              
              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} Pelican Chem. All Rights Reserved.
                </p>
                <p className="text-xs text-slate-500">
                  RO Chemicals Manufacturer · Water Treatment Solutions · Rajkot, India
                </p>
              </div>

              {/* Legal Triggers (Buttons that open modals) */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <button 
                  onClick={() => setModalType("legal")} 
                  className="transition-colors hover:text-aqua cursor-pointer"
                >
                  Legal Notice
                </button>
                <button 
                  onClick={() => setModalType("privacy")} 
                  className="transition-colors hover:text-aqua cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setModalType("cookie")} 
                  className="transition-colors hover:text-aqua cursor-pointer"
                >
                  Cookie Policy
                </button>
              </div>

            </div>
            
          </div>
        </div>
      </footer>

      {/* Render the popup modal dynamically */}
      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType} 
      />
    </>
  );
}