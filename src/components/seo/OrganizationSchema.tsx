import { company } from "@/data/company";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: "https://www.pelicanchem.com",
    logo: "https://www.pelicanchem.com/images/pelican-logo.svg",
    description: company.description,
    foundingDate: String(company.established),
    email: company.email,
    telephone: company.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: "IN",
    },
    areaServed: "IN",
    knowsAbout: company.keywords,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
