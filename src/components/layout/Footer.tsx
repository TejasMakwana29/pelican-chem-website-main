import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export function Footer() {
  const productLinks = navigation.find((n) => n.label === "Products")?.children ?? [];

  return (
    <footer className="bg-navy text-slate-300">
      <div className="section-padding !pb-12 !pt-20">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6">
                <Logo variant="full" theme="dark" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Manufacturer and supplier of RO Dosing Chemicals, Antiscalants, Boiler
                Chemicals, ETP Chemicals, and comprehensive water treatment solutions since 2007.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>GST: {company.gst}</p>
                <p>CST: {company.cst}</p>
              </div>
            </div>

            <div>
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

            <div>
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

            <div>
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                  <span>{company.address.full}</span>
                </li>
                {company.phones.map((phone) => (
                  <li key={phone} className="flex gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-aqua" />
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                      {phone}
                    </a>
                  </li>
                ))}
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-aqua" />
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 md:flex-row">
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
