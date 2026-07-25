import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export function Footer() {
  const productLinks = navigation.find((n) => n.label === "Our Products")?.children ?? [];

  return (
    <footer className="bg-navy text-slate-300">
      <div className="section-padding !pb-12 !pt-20">
        <div className="container-wide">
          
          {/* Main Footer Links & Info - Using a 12-column grid for precise layout */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-12">
            
            {/* Column 1: Logo & Map (Wider) */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <Logo variant="full" theme="dark" />
              </div>
              
              {/* Google Maps Integration */}
              <div className="mb-6 h-40 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.70010221669!2d70.72422557555896!3d22.273630793616684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cbd81%3A0x41ed019757a8809e!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pelican Chemical Manufacturing Facility Location"
                ></iframe>
              </div>

              {/* GST and CST Information */}
              <div className="space-y-2 text-sm text-slate-400">
                <p>GST: {company.gst}</p>
                <p>CST: {company.cst}</p>
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

            {/* Column 3: Technical Access (Moved to sit beside Quick Links and Products) */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
                Technical Access
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/quality" className="text-sm transition-colors hover:text-aqua">
                    TDS Download
                  </Link>
                </li>
                <li>
                  <Link href="/quality" className="text-sm transition-colors hover:text-aqua">
                    Safety Data Sheets (SDS)
                  </Link>
                </li>
                <li>
                  <Link href="/quality" className="text-sm transition-colors hover:text-aqua">
                    ISO Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm transition-colors hover:text-aqua">
                    Corporate Profile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Products */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
                Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((item) => (
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

            {/* Column 5: Contact (Wider) */}
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