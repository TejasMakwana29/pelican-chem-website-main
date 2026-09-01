"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, User, Phone } from "lucide-react";
import { useState } from "react";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
}

export function InquiryForm({ productName, compact = false }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    
    // Package the data for the API
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      // We pass the product name as the "company" so it shows up neatly in your email subject line
      company: productName ? `Product: ${productName}` : "General Inquiry",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true); // Show the success message
      } else {
        setErrorMessage("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      
      {/* Error Message Display */}
      {errorMessage && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-200">
          {errorMessage}
        </div>
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
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-navy transition-colors focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
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
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
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

export function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    
    const requirementType = formData.get("requirementType");
    const volume = formData.get("volume");
    const combinedMessage = `Requirement Type: ${requirementType}\nMonthly Volume: ${volume}`;

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      company: formData.get("company") || "Not provided",
      email: formData.get("email") || "",
      message: combinedMessage,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-blue-50 p-8 text-center border border-blue-100 h-full flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-blue-900">RFQ Received!</h3>
        <p className="mt-2 text-blue-700">
          Thank you for your request. Our sales team will contact you shortly with bulk pricing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 items-end w-full">
      {errorMessage && (
        <div className="md:col-span-2 lg:col-span-4 rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-200">
          {errorMessage}
        </div>
      )}
      
      {/* 1. NAME FIELD */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
        <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="John Doe" />
      </div>
      
      {/* 2. PHONE FIELD */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Contact Number <span className="text-red-500">*</span></label>
        <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="+91 XXXX XXXXX" />
      </div>
      
      {/* 3. COMPANY FIELD */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
        <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="Acme Industries" />
      </div>
      
      {/* 4. EMAIL FIELD */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Email (Optional)</label>
        <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="john@company.com" />
      </div>

      {/* 5. REQUIREMENT TYPE DROPDOWN */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Requirement Type</label>
        <select name="requirementType" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white appearance-none">
          <option value="Bulk Chemical Supply">Bulk Chemical Supply</option>
          <option value="Private Label (OEM)">Private Label (OEM)</option>
          <option value="Turnkey Plant (EPC)">Turnkey Plant (EPC)</option>
          <option value="Technical Consultation">Technical Consultation</option>
        </select>
      </div>

      {/* 6. MONTHLY VOLUME FIELD */}
      <div className="lg:col-span-2">
        <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Volume <span className="text-red-500">*</span></label>
        <input type="text" name="volume" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all bg-white" placeholder="E.g., 2000 Liters, 500 Kg, etc." />
      </div>
      
      {/* 7. SUBMIT BUTTON */}
      <div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg text-lg h-[50px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit RFQ"}
        </button>
      </div>
    </form>
  );
}

// --- NEW COMPONENT FOR CERTIFICATE GATING ---

interface DownloadFormProps {
  onSuccess: () => void;
}

export function DownloadForm({ onSuccess }: DownloadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Grab all the input values automatically
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    try {
      // Pointing to your existing API route
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: phone, 
          company: "Download Gateway", // Keeps the subject line organized in your inbox
          email: email,
          message: `${name} (${phone}) has requested certificate download access. Email provided: ${email}`,
        }),
      });

      if (response.ok) {
        onSuccess();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="download-name" className="sr-only">Full Name</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            id="download-name"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-colors focus:border-aqua focus:ring-1 focus:ring-aqua"
          />
        </div>
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="download-phone" className="sr-only">Phone Number</label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="tel"
            id="download-phone"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-colors focus:border-aqua focus:ring-1 focus:ring-aqua"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="download-email" className="sr-only">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="email"
            id="download-email"
            name="email"
            required
            placeholder="Enter your business email"
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-colors focus:border-aqua focus:ring-1 focus:ring-aqua"
          />
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl bg-navy py-3 font-semibold text-white transition-colors hover:bg-aqua disabled:opacity-70"
      >
        {isLoading ? "Verifying..." : "Unlock Certificates"}
      </button>
    </form>
  );
}