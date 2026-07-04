import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { InquiryForm } from "@/components/ui/Forms";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pelican Chem for RO chemicals, water treatment solutions, and product inquiries. Located in Rajkot, Gujarat, India. Call +91 98242 58544.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-navy">
        <div className="section-padding w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">Get In Touch</p>
              <h1 className="heading-display mt-4 text-white">Contact Us</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Reach out for product inquiries, technical consultation, custom label
                solutions, or partnership opportunities.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="heading-section">Contact Information</h2>
                <div className="mt-8 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy">
                        {company.legalName}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {company.address.street}
                        <br />
                        {company.address.landmark && (
                          <>
                            {company.address.landmark}
                            <br />
                          </>
                        )}
                        {company.address.city} - {company.address.postalCode}
                        <br />
                        {company.address.state}, {company.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy">Phone</h3>
                      {company.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="mt-1 block text-sm text-slate-600 hover:text-aqua"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy">Email</h3>
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-1 block text-sm text-slate-600 hover:text-aqua"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy">Business Hours</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Monday – Saturday: 9:00 AM – 6:00 PM IST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                  <p>GST TIN: {company.gst}</p>
                  <p className="mt-1">CST TIN: {company.cst}</p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <div className="rounded-2xl bg-slate-50 p-8 md:p-10">
                  <h2 className="heading-sub">Send Us a Message</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Fill out the form below and our team will respond promptly.
                  </p>
                  <div className="mt-8">
                    <InquiryForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <FadeIn>
          <div className="relative h-[400px] w-full">
            <iframe
              title="Pelican Chem Location Map"
              src="https://maps.google.com/maps?q=Trishul+Chowk,+Hasanwadi+Main+Road,+Rajkot,+Gujarat+360001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
