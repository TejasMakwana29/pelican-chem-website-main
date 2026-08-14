import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { getProductsByCategory } from "@/data/products";

// Helper function to bypass category pages with only 1 product (Consistency with Navbar)
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
  const productLinks = navigation.find((n) => n.label === "Our Products")?.children ?? [];

  return (
    <footer className="bg-navy text-slate-300">
      <div className="section-padding !pb-12 !pt-20">
        <div className="container-wide">
          
          {/* Main Footer Links & Info - Using a 12-column grid for precise layout */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-12">
            
            {/* Column 1: Map (Logo removed, stretched to full height) */}
            <div className="lg:col-span-4 h-full">
              {/* Google Maps Integration */}
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
                      href={getSmartHref(item.href)} // Applied Smart Routing
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

          {/* Copyright & Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Pelican Chem. All Rights Reserved.
            </p>
            <p className="text-sm text-slate-500">
              RO Chemicals Manufacturer · Water Treatment Solutions · Rajkot, India
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}