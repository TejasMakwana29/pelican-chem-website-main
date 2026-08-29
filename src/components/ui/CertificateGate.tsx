"use client";

import { useState } from "react";
import { Download, Lock, FileText, CheckCircle2 } from "lucide-react";
import { DownloadForm } from "./Forms"; 

export function CertificateGate() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const certificates = [
    { name: "ISO 9001:2015 Certificate", file: "/downloads/iso-9001.pdf" },
    { name: "GMP Certification", file: "/downloads/gmp-cert.pdf" },
    { name: "Company Profile & Profile", file: "/downloads/company-profile.pdf" },
  ];

  if (isUnlocked) {
    return (
      <div className="mx-auto max-w-4xl rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="heading-sub text-teal-900">Access Granted</h3>
        <p className="mt-2 text-sm text-teal-700">
          Thank you! You can now download our certificates below.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.file}
              download
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-aqua hover:shadow-md"
            >
              <FileText className="h-8 w-8 text-navy" />
              <span className="text-sm font-semibold text-slate-800">{cert.name}</span>
              <span className="mt-2 flex items-center gap-2 text-xs font-medium text-aqua">
                Download PDF <Download className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <Lock className="h-8 w-8" />
      </div>
      <h3 className="heading-sub text-center text-navy">Secure Downloads</h3>
      <p className="mt-2 text-center text-sm text-slate-600">
        Please enter your business email address to unlock and download our corporate certificates.
      </p>

      <DownloadForm onSuccess={() => setIsUnlocked(true)} />
    </div>
  );
}