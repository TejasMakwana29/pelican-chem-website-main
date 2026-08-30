"use client";

import { useState } from "react";
import { Download, Lock, FileText, CheckCircle2 } from "lucide-react";
import { DownloadForm } from "./Forms"; 

export function CertificateGate() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // The comprehensive 9 certificates for your B2B clients
 const certificates = [
    { 
      id: "mb2-301", 
      title: "PC-CT-MB2-301-(MICROBIOSIDE 2)", 
      description: "Certificate of Analysis", 
      file: "/COA/PC-CT-MB2-301-(MICROBIOSIDE 2).pdf" 
    },
    { 
      id: "coa-descaling", 
      title: "COA-DESCALING-LIQUID", 
      description: "Certificate of Analysis", 
      file: "/COA/COA-DESCALING-LIQUID.pdf" 
    },
    { 
      id: "coa-algaecide", 
      title: "COA-ALGAECIDE", 
      description: "Certificate of Analysis", 
      file: "/COA/COA-ALGAECIDE.pdf" 
    },
    { 
      id: "coa-ds-399", 
      title: "COA-PC-AM-DS-399", 
      description: "Certificate of Analysis", 
      file: "/COA/COA-PC-AM-DS-399.pdf" 
    },
    { 
      id: "coa-chiller", 
      title: "COA-CHILLER", 
      description: "Certificate of Analysis", 
      file: "/COA/COA-CHILLER.pdf" 
    },
    { 
      id: "mb1-301", 
      title: "PC-CT-MB1-301", 
      description: "Certificate of Analysis", 
      file: "/COA/PC-CT-MB1-301.pdf" 
    },
    { 
      id: "sc1-309", 
      title: "COA-PC-SC1-309", 
      description: "Certificate of Analysis", 
      file: "/COA/COA-PC-SC1-309.pdf" 
    },
    { 
      id: "blr-ant", 
      title: "COA-BLR-ANT", 
      description: "Certificate of Analysis", 
      file: "/COA/COA-BLR-ANT.pdf" 
    }
  ];
  if (isUnlocked) {
    return (
      <div className="mx-auto max-w-5xl rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="heading-sub text-teal-900">Access Granted</h3>
        <p className="mt-2 text-sm text-teal-700">
          Thank you! You can now securely download our compliance certificates below.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.file}
              target="_blank" // Opens PDF in a new tab
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-2 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-aqua hover:shadow-md"
            >
              <div className="flex w-full items-center gap-3">
                <FileText className="h-6 w-6 shrink-0 text-navy group-hover:text-aqua transition-colors" />
                <span className="text-sm font-bold text-slate-800">{cert.title}</span>
              </div>
              
              <span className="mt-1 flex-grow text-xs text-slate-500">
                {cert.description}
              </span>
              
              <span className="mt-4 flex w-full justify-center items-center gap-2 rounded-lg bg-slate-50 py-2 text-xs font-semibold text-aqua group-hover:bg-aqua/10">
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
      <p className="mt-2 text-center text-sm text-slate-600 mb-6">
        Please enter your business email address to unlock and download our corporate certificates.
      </p>

      {/* Your existing form logic perfectly handles the unlock! */}
      <DownloadForm onSuccess={() => setIsUnlocked(true)} />
    </div>
  );
}