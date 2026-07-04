"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
}

export function InquiryForm({ productName, compact = false }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-aqua-50 p-8 text-center">
        <h3 className="heading-sub text-teal-dark">Thank You!</h3>
        <p className="mt-2 text-body">
          Your inquiry has been received. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-6"}>
      {productName && (
        <input type="hidden" name="product" value={productName} />
      )}
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-6 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-navy transition-colors focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-navy transition-colors focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-navy transition-colors focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>
      {productName && (
        <div>
          <label htmlFor="product-display" className="mb-2 block text-sm font-medium text-navy">
            Product
          </label>
          <input
            type="text"
            id="product-display"
            value={productName}
            readOnly
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600"
          />
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 3 : 5}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-navy transition-colors focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit Inquiry
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}

export function DatasheetButton({ productName }: { productName: string }) {
  return (
    <button
      type="button"
      className="btn-outline group"
      aria-label={`Download datasheet for ${productName}`}
    >
      <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
      Download Datasheet
    </button>
  );
}

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=1920&q=80')] bg-cover bg-center opacity-10" />
      <div className="section-padding relative">
        <div className="container-wide text-center">
          <p className="text-label text-aqua-300">Get In Touch</p>
          <h2 className="heading-section mt-4 text-white text-balance">
            Ready to Optimize Your Water Treatment?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body text-slate-300">
            Contact our team for product inquiries, technical consultation, or
            customized chemical solutions tailored to your operations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-secondary">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
