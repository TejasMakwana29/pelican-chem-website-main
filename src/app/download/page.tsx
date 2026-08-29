import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { CertificateGate } from "@/components/ui/CertificateGate";

export const metadata: Metadata = {
  title: "Downloads & Certificates",
  description: "Download Pelican Chem corporate certificates, ISO documents, and company profiles.",
};

export default function DownloadPage() {
  return (
    <>
      <section className="relative flex min-h-[35vh] items-center bg-navy">
        <div className="section-padding w-full">
          <div className="container-wide text-center">
            <FadeIn>
              <h1 className="heading-display mt-4 text-white">Downloads</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                Access our corporate documentation, quality certifications, and compliance records.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 min-h-[50vh]">
        <div className="container-wide">
          <FadeIn direction="up">
            <CertificateGate />
          </FadeIn>
        </div>
      </section>
    </>
  );
}