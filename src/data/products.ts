export interface Product {
  slug: string;
  name: string;
  code?: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  applications: string[];
  technicalHighlights: string[];
  image: string;
  specifications?: { property: string; specification: string }[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "ro-chemicals",
    name: "RO Chemicals",
    description:
      "High-performance reverse osmosis antiscalants and descaling chemicals for optimal membrane protection and system efficiency.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=800&q=80",
  },
  {
    slug: "sea-water-ro-chemicals",
    name: "Sea Water RO Chemicals",
    description:
      "Specialized antiscalants engineered for the unique challenges of seawater reverse osmosis systems.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
  },
  {
    slug: "etp-chemicals",
    name: "ETP Chemicals",
    description:
      "Effluent treatment plant chemicals for effective wastewater treatment and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    slug: "boiler-chemicals",
    name: "Boiler Chemicals",
    description:
      "Comprehensive boiler water treatment chemicals for scale prevention, corrosion control, and efficiency.",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  },
  {
    slug: "edta-chemicals",
    name: "EDTA Chemicals",
    description:
      "High-purity EDTA chelating agents for industrial cleaning, water treatment, and process applications.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
  },
  {
    slug: "cooling-tower-chemicals",
    name: "Cooling Tower Chemicals",
    description:
      "Cooling tower water treatment solutions for biofouling control, scale prevention, and corrosion inhibition.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
];

export const products: Product[] = [
  {
    slug: "pelican-301",
    name: "High pH RO Antiscalant",
    code: "PELICAN-301",
    category: "RO Chemicals",
    categorySlug: "ro-chemicals",
    shortDescription:
      "Premium high pH antiscalant for reverse osmosis systems operating in alkaline feed water conditions.",
    overview:
      "PELICAN-301 is a high pH RO antiscalant formulated for effective scale inhibition in reverse osmosis membranes. Designed for stable and effective performance at low dose rates, it protects membranes from calcium carbonate, sulfate, and silica scaling across diverse feed water types.",
    benefits: [
      "Effective scale inhibition at low dose rates",
      "Stable performance across wide pH ranges",
      "Safe to handle and use in industrial environments",
      "Compatible with other RO treatment chemicals",
      "Improved overall RO system performance",
    ],
    applications: [
      "Industrial RO plants",
      "Commercial water purification systems",
      "Municipal water treatment facilities",
      "Pharmaceutical water systems",
    ],
    technicalHighlights: [
      "High pH formulation for alkaline feed waters",
      "Effective against multiple scale-forming minerals",
      "Low dose rate requirement",
      "Compatible with polyamide and cellulose acetate membranes",
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to Pale Yellow Liquid" },
      { property: "pH", specification: "10 – 12" },
      { property: "Water Solubility", specification: "Completely Soluble" },
      { property: "Solid Content", specification: "33–34% w/w" },
      { property: "Specific Gravity", specification: "1.35–1.45" }
    ],
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=800&q=80",
  },
  {
    slug: "pelican-309",
    name: "RO Antiscalant",
    code: "PELICAN-309",
    category: "RO Chemicals",
    categorySlug: "ro-chemicals",
    shortDescription:
      "Versatile RO antiscalant for broad-spectrum scale control in reverse osmosis systems.",
    overview:
      "PELICAN-309 is a versatile RO antiscalant offering reliable protection against scale formation in reverse osmosis membranes. Formulated under the supervision of experienced engineers, it delivers consistent performance for a wide range of industrial and commercial RO applications.",
    benefits: [
      "Broad-spectrum scale inhibition",
      "Stable and effective at low concentrations",
      "Safe handling characteristics",
      "Compatible with standard RO pretreatment programs",
      "Extended membrane life and reduced downtime",
    ],
    applications: [
      "Industrial RO utilities",
      "Food and beverage processing",
      "Hospitality and commercial buildings",
      "Manufacturing process water systems",
    ],
    technicalHighlights: [
      "Multi-mineral scale inhibition",
      "Effective across varied feed water compositions",
      "Low dosing requirement",
      "Proven field performance since 2007",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    slug: "pelican-309-hs",
    name: "RO Antiscalant High Silica",
    code: "PELICAN-309 H/S",
    category: "RO Chemicals",
    categorySlug: "ro-chemicals",
    shortDescription:
      "Specialized high silica antiscalant for RO systems with elevated silica content in feed water.",
    overview:
      "PELICAN-309 H/S is engineered specifically for reverse osmosis systems facing high silica scaling challenges. This advanced formulation provides targeted silica scale inhibition while maintaining compatibility with other RO treatment chemicals.",
    benefits: [
      "Targeted high silica scale control",
      "Prevents silica fouling on membrane surfaces",
      "Effective at low dose rates",
      "Compatible with other antiscalant products",
      "Reduces cleaning frequency and operational costs",
    ],
    applications: [
      "High silica feed water RO systems",
      "Groundwater treatment plants",
      "Industrial process water RO units",
      "Geothermal water treatment",
    ],
    technicalHighlights: [
      "Enhanced silica dispersant technology",
      "Effective in high silica feed waters",
      "Low dose rate performance",
      "Stable across operational pH ranges",
    ],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
  },
  {
    slug: "pelican-319",
    name: "Low pH RO Antiscalant",
    code: "PELICAN-319",
    category: "RO Chemicals",
    categorySlug: "ro-chemicals",
    shortDescription:
      "Low pH antiscalant optimized for reverse osmosis systems with acidic feed water conditions.",
    overview:
      "PELICAN-319 is a low pH RO antiscalant designed for systems operating in acidic feed water environments. It provides effective scale inhibition while maintaining membrane integrity and system efficiency at reduced dose rates.",
    benefits: [
      "Optimized for low pH feed water conditions",
      "Effective multi-mineral scale prevention",
      "Safe and stable formulation",
      "Compatible with standard RO chemical programs",
      "Improved membrane performance and longevity",
    ],
    applications: [
      "Acidic feed water RO systems",
      "Surface water treatment plants",
      "Industrial utility RO systems",
      "Desalination pretreatment",
    ],
    technicalHighlights: [
      "Low pH optimized formulation",
      "Multi-scale mineral inhibition",
      "Low dose effectiveness",
      "Compatible with polyamide membranes",
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to White Slightly Viscous Liquid" },
      { property: "pH", specification: "3.5 – 4.5" },
      { property: "Water Solubility", specification: "Completely Soluble" },
      { property: "Solid Content", specification: "33–34% w/w" },
      { property: "Specific Gravity", specification: "1.17–1.23" }
    ],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    slug: "ro-descaling-chemicals",
    name: "RO Descaling Chemicals",
    category: "RO Chemicals",
    categorySlug: "ro-chemicals",
    shortDescription:
      "Professional RO cleaning and descaling chemicals for membrane restoration and performance recovery.",
    overview:
      "Our RO Descaling Chemicals are formulated for effective removal of inorganic scale, organic fouling, and biofilm from reverse osmosis membranes. Regular cleaning with our descaling solutions restores membrane flux and extends operational life.",
    benefits: [
      "Effective scale and fouling removal",
      "Restores membrane flux and performance",
      "Safe for standard membrane materials",
      "Reduces replacement frequency and costs",
      "Easy application protocols",
    ],
    applications: [
      "RO membrane cleaning and maintenance",
      "Periodic CIP (Clean-In-Place) programs",
      "Membrane performance recovery",
      "Preventive maintenance schedules",
    ],
    technicalHighlights: [
      "Formulated for inorganic and organic fouling",
      "Compatible with CIP systems",
      "Effective at recommended concentrations",
      "Documented cleaning protocols available",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    slug: "pelican-399",
    name: "Sea Water RO Antiscalant",
    code: "PELICAN-399",
    category: "Sea Water RO Chemicals",
    categorySlug: "sea-water-ro-chemicals",
    shortDescription:
      "Advanced antiscalant engineered for seawater reverse osmosis desalination systems.",
    overview:
      "PELICAN-399 is a specialized seawater RO antiscalant designed to handle the extreme scaling potential of high-TDS seawater feed. It provides robust protection for SWRO membranes operating in demanding desalination environments.",
    benefits: [
      "Engineered for high-TDS seawater applications",
      "Robust multi-mineral scale inhibition",
      "Effective at low dose rates in SWRO systems",
      "Reduces membrane cleaning frequency",
      "Supports continuous desalination operations",
    ],
    applications: [
      "Seawater desalination plants",
      "Offshore and marine RO systems",
      "Coastal industrial water supply",
      "Island and remote community water systems",
    ],
    technicalHighlights: [
      "High-TDS seawater optimized",
      "Multi-mineral and silica scale control",
      "Low dose rate in SWRO conditions",
      "Compatible with SWRO pretreatment systems",
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to White Liquid" },
      { property: "Water Solubility", specification: "Completely Soluble" },
      { property: "Solid Content", specification: "33–34% w/w" },
      { property: "Specific Gravity", specification: "1.17–1.23" }
    ],
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
  },
  {
    slug: "pelican-101",
    name: "ETP Treatment Chemical",
    code: "PELICAN-101",
    category: "ETP Chemicals",
    categorySlug: "etp-chemicals",
    shortDescription:
      "Comprehensive effluent treatment plant chemical for effective wastewater processing and compliance.",
    overview:
      "PELICAN-101 is formulated for effluent treatment plants requiring reliable chemical treatment for coagulation, flocculation, and pollutant removal. It supports industries in achieving discharge compliance and environmental standards.",
    benefits: [
      "Effective wastewater treatment performance",
      "Supports regulatory compliance",
      "Consistent batch quality",
      "Compatible with standard ETP processes",
      "Cost-effective treatment solution",
    ],
    applications: [
      "Industrial effluent treatment plants",
      "Textile wastewater treatment",
      "Chemical processing effluent",
      "Manufacturing wastewater systems",
    ],
    technicalHighlights: [
      "Multi-function ETP treatment capability",
      "Effective across varied effluent compositions",
      "Stable formulation for consistent dosing",
      "Documented application guidelines",
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to Off-White Slightly Viscous Liquid" },
      { property: "pH", specification: "3.0 – 5.0" },
      { property: "Water Solubility", specification: "Infinite" },
      { property: "Solid Content", specification: "Minimum 50%" },
      { property: "Viscosity", specification: "Approximately 30–130 cPs" }
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    slug: "boiler-treatment-range",
    name: "Boiler Water Treatment Chemicals",
    category: "Boiler Chemicals",
    categorySlug: "boiler-chemicals",
    shortDescription:
      "Complete boiler water treatment program for scale prevention, corrosion control, and steam purity.",
    overview:
      "Our Boiler Chemicals range provides comprehensive protection for industrial boiler systems. Formulations address scale formation, corrosion, and carryover to ensure safe, efficient boiler operation and extended equipment life.",
    benefits: [
      "Scale and deposit prevention",
      "Corrosion inhibition for boiler internals",
      "Improved steam purity and efficiency",
      "Reduced maintenance and downtime",
      "Safe handling and dosing protocols",
    ],
    applications: [
      "Industrial steam boilers",
      "Power generation facilities",
      "Food processing steam systems",
      "Pharmaceutical manufacturing boilers",
    ],
    technicalHighlights: [
      "Multi-function boiler treatment program",
      "Effective across boiler pressure ranges",
      "Compatible with standard feedwater treatment",
      "Customized dosing recommendations available",
    ],
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  },
  {
    slug: "edta-chelating-agents",
    name: "EDTA Chelating Agents",
    category: "EDTA Chemicals",
    categorySlug: "edta-chemicals",
    shortDescription:
      "High-quality EDTA chelating agents for industrial cleaning, metal ion control, and process applications.",
    overview:
      "Our EDTA Chemicals provide effective chelation of metal ions in water treatment, industrial cleaning, and process chemical applications. Available in various grades to meet specific industrial requirements.",
    benefits: [
      "Effective metal ion chelation",
      "Versatile industrial applications",
      "Consistent purity and quality",
      "Supports cleaning and descaling programs",
      "Compatible with water treatment systems",
    ],
    applications: [
      "Industrial cleaning and descaling",
      "Metal finishing processes",
      "Water softening and treatment",
      "Textile and dyeing applications",
    ],
    technicalHighlights: [
      "High chelation efficiency",
      "Multiple grade options available",
      "Stable storage characteristics",
      "Documented handling guidelines",
    ],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
  },
  {
    slug: "cooling-tower-treatment",
    name: "Cooling Tower Treatment Program",
    category: "Cooling Tower Chemicals",
    categorySlug: "cooling-tower-chemicals",
    shortDescription:
      "Integrated cooling tower water treatment for biofouling, scale, and corrosion control.",
    overview:
      "Our Cooling Tower Chemicals provide a complete treatment program addressing biological growth, scale deposition, and corrosion in open recirculating cooling systems. Formulations ensure efficient heat transfer and equipment protection.",
    benefits: [
      "Biofouling and algae control",
      "Scale prevention in cooling circuits",
      "Corrosion inhibition for system metals",
      "Improved heat transfer efficiency",
      "Reduced water and energy consumption",
    ],
    applications: [
      "HVAC cooling tower systems",
      "Industrial process cooling",
      "Power plant cooling circuits",
      "Commercial building cooling systems",
    ],
    technicalHighlights: [
      "Integrated treatment program approach",
      "Effective in open recirculating systems",
      "Compatible with standard blowdown practices",
      "Customized treatment plans available",
    ],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export const featuredProducts = products.slice(0, 6);