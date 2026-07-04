"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <div className="hidden bg-navy py-2 text-sm text-slate-300 lg:block">
        <div className="container-wide flex items-center justify-between px-6 md:px-8 lg:px-16">
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-4 w-4" />
              {company.phones[0]}
            </a>
          </div>
          <p className="text-slate-400">
            Established {company.established} · {company.location}
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="container-wide flex items-center justify-between px-6 py-4 md:px-8 lg:px-16">
          <Logo priority variant="full" theme="light" />

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full w-64 pt-2">
                      <div className="rounded-xl border border-slate-100 bg-white py-2 shadow-xl shadow-navy/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-aqua-50 hover:text-navy"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/contact" className="btn-primary !px-6 !py-3 !text-xs">
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 font-medium text-navy"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-slate-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="btn-primary mt-4 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Request Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
