"use client";

import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "legal" | "privacy" | "cookie" | null;
}

const legalContent = {
  legal: {
    title: "Legal Notice",
    sections: [
      {
        heading: "1. Corporate Information & Ownership",
        text: "This website is owned, operated, and maintained by Pelican Chem. All content, corporate logos, product brand names (such as the PELICAN series), technical datasheets, graphics, and software source code published on this platform are the exclusive intellectual property of Pelican Chem. Unauthorized reproduction, distribution, modification, or commercial exploitation of any material from this site is strictly prohibited without prior written consent.",
      },
      {
        heading: "2. Accuracy of Technical Data",
        text: "While we make every reasonable effort to ensure that all chemical specifications, water treatment guides, and product application parameters listed on this website are accurate and up to date:",
        bullets: [
          "Technical data is provided for general guidance and informational purposes only.",
          "Chemical performance can vary significantly based on unique raw water parameters, system design, and operating conditions.",
          "We reserve the right to modify product formulations, packaging, or technical specifications without prior notice.",
        ],
      },
      {
        heading: "3. Limitation of Liability",
        text: "Pelican Chem shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use our products based solely on website descriptions without proper on-site technical consultation and jar testing.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "We collect information that you voluntarily provide to us when interacting with our platform, such as:",
        bullets: [
          "Business and personal email addresses submitted through our certificate download gates.",
          "Contact details, phone numbers, and company names provided via our RFQ (Request for Quote) or product inquiry forms.",
          "Specific industrial water treatment requirements and monthly chemical volume estimates.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        text: "The data collected is strictly utilized for internal business and technical support operations, including:",
        bullets: [
          "Processing your requests for corporate certificates and product datasheets.",
          "Responding to inquiries regarding bulk chemical supply, OEM manufacturing, or technical consultation.",
          "Communicating relevant updates about our water treatment product catalog.",
        ],
      },
      {
        heading: "3. Data Protection & Sharing",
        text: "We implement robust security measures to protect your information. Pelican Chem never sells, trades, rents, or transfers your business or personal data to external third-party marketing agencies under any circumstances.",
      },
    ],
  },
  cookie: {
    title: "Cookie Policy",
    sections: [
      {
        heading: "1. What Are Cookies?",
        text: "Cookies are small text files stored on your device (computer or mobile phone) when you visit a website. They are widely used to make websites work efficiently, as well as to provide reporting information to site owners.",
      },
      {
        heading: "2. How We Use Cookies",
        text: "Our website relies on essential cookies and local session storage to ensure seamless operation:",
        bullets: [
          "Download State Tracking: We use temporary state memory to remember when you have successfully unlocked the secure certificate download gate during your visit.",
          "Performance & Security: Basic technical cookies help ensure the website loads securely, balances traffic loads, and responds correctly to form submissions.",
        ],
      },
      {
        heading: "3. Managing Your Preferences",
        text: "You can control or delete cookies through your individual web browser settings. Please note that disabling essential site cookies may affect certain interactive features, such as maintaining access to secure document downloads.",
      },
    ],
  },
};

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const currentInfo = legalContent[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl text-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="text-xl font-bold text-navy">{currentInfo.title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body with Structured Headings & Bullets */}
        <div className="mt-6 max-h-[60vh] space-y-6 overflow-y-auto pr-2 text-sm leading-relaxed text-slate-600">
          {currentInfo.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-bold text-navy">{section.heading}</h4>
              <p>{section.text}</p>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-inside list-disc space-y-1 pl-2 text-slate-600">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end border-t border-slate-100 pt-4">
          <button
            onClick={onClose}
            className="rounded-xl bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aqua cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}