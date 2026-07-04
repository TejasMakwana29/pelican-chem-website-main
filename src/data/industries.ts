export interface Industry {
  slug: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  products: string[];
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "water-treatment-plants",
    name: "Water Treatment Plants",
    description:
      "Comprehensive chemical solutions for municipal and industrial water treatment plants ensuring safe, compliant water supply.",
    challenges: [
      "Scale formation in treatment equipment",
      "Membrane fouling in filtration systems",
      "Maintaining water quality standards",
      "Operational cost management",
    ],
    solutions: [
      "RO antiscalants for membrane protection",
      "ETP chemicals for wastewater compliance",
      "Customized dosing programs",
      "Technical support and consultation",
    ],
    products: ["PELICAN-301", "PELICAN-309", "PELICAN-101"],
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=800&q=80",
  },
  {
    slug: "ro-plants",
    name: "RO Plants",
    description:
      "Specialized reverse osmosis chemical programs for optimal membrane performance, extended life, and reduced maintenance.",
    challenges: [
      "Membrane scaling and fouling",
      "Declining flux over time",
      "High cleaning frequency",
      "Diverse feed water compositions",
    ],
    solutions: [
      "High and low pH antiscalants",
      "High silica specialized formulations",
      "RO descaling and cleaning chemicals",
      "Private label options for service companies",
    ],
    products: ["PELICAN-301", "PELICAN-319", "PELICAN-309 H/S"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    slug: "industrial-utilities",
    name: "Industrial Utilities",
    description:
      "Integrated water treatment chemicals for industrial utility systems including boilers, cooling towers, and process water.",
    challenges: [
      "Multi-system chemical management",
      "Equipment corrosion and scaling",
      "Energy efficiency requirements",
      "Process water quality maintenance",
    ],
    solutions: [
      "Boiler water treatment programs",
      "Cooling tower chemical solutions",
      "RO pretreatment chemicals",
      "Bulk supply and technical support",
    ],
    products: ["Boiler Treatment Range", "Cooling Tower Program"],
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Process water and utility chemical solutions supporting manufacturing operations across diverse production environments.",
    challenges: [
      "Process water purity requirements",
      "Wastewater treatment compliance",
      "Equipment protection and longevity",
      "Production continuity demands",
    ],
    solutions: [
      "Customized chemical formulations",
      "ETP treatment chemicals",
      "RO system protection products",
      "Reliable supply chain partnership",
    ],
    products: ["PELICAN-101", "PELICAN-309", "EDTA Agents"],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    slug: "power-plants",
    name: "Power Plants",
    description:
      "Critical water treatment chemicals for power generation facilities requiring reliable boiler, cooling, and process water treatment.",
    challenges: [
      "High-pressure boiler water treatment",
      "Cooling system biofouling and scaling",
      "Strict water quality specifications",
      "Continuous operation requirements",
    ],
    solutions: [
      "Boiler scale and corrosion inhibitors",
      "Cooling tower treatment programs",
      "RO chemicals for makeup water",
      "Performance-optimized formulations",
    ],
    products: ["Boiler Treatment Range", "Cooling Tower Program", "PELICAN-301"],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    slug: "textile-industry",
    name: "Textile Industry",
    description:
      "Water treatment and effluent chemicals tailored for textile manufacturing processes and wastewater treatment requirements.",
    challenges: [
      "Complex effluent composition",
      "High water consumption",
      "Color and dye removal requirements",
      "Environmental compliance standards",
    ],
    solutions: [
      "ETP treatment chemicals",
      "Process water treatment products",
      "EDTA chelating agents",
      "Compliance-focused formulations",
    ],
    products: ["PELICAN-101", "EDTA Agents"],
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
  {
    slug: "chemical-processing",
    name: "Chemical Processing",
    description:
      "Specialized process and utility chemicals for chemical manufacturing facilities with demanding water treatment needs.",
    challenges: [
      "Aggressive process water conditions",
      "Complex effluent streams",
      "Equipment material compatibility",
      "Safety and handling requirements",
    ],
    solutions: [
      "EDTA chelating agents",
      "Custom formulation capabilities",
      "ETP treatment solutions",
      "Safety-documented products",
    ],
    products: ["EDTA Agents", "PELICAN-101"],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
  },
  {
    slug: "commercial-water-systems",
    name: "Commercial Water Systems",
    description:
      "Reliable water treatment solutions for commercial buildings, hospitality, healthcare, and institutional water systems.",
    challenges: [
      "Consistent water quality delivery",
      "System maintenance costs",
      "Space-efficient treatment solutions",
      "Regulatory compliance",
    ],
    solutions: [
      "RO antiscalant programs",
      "Cooling tower treatment",
      "Private label partnership options",
      "Technical consultation services",
    ],
    products: ["PELICAN-309", "Cooling Tower Program"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
