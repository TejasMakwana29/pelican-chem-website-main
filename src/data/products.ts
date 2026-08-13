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
  datasheetUrl?: string; 
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "ro-dosing-chemicals",
    name: "RO Dosing Chemicals",
    description: "High-performance antiscalants for optimal membrane protection and system efficiency.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=800&q=80",
  },
  {
    slug: "sea-water",
    name: "Sea Water",
    description: "Specialized antiscalants engineered for the extreme challenges of seawater reverse osmosis.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
  },
  {
    slug: "etp",
    name: "ETP",
    description: "Effluent treatment plant chemicals for effective wastewater processing and compliance.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    slug: "edta",
    name: "EDTA",
    description: "High-purity EDTA chelating agents for industrial cleaning and process applications.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
  },
  {
    slug: "boiler-chemical",
    name: "Boiler Chemical",
    description: "Comprehensive boiler water treatment chemicals for scale prevention and efficiency.",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  },
  {
    slug: "ro-descaling-chemicals",
    name: "RO Descaling Chemicals",
    description: "Professional cleaning and descaling solutions for membrane performance recovery.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    slug: "cooling-tower",
    name: "Cooling Tower",
    description: "Cooling tower treatments for biofouling control, scale prevention, and corrosion inhibition.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    slug: "descaling-chemical",
    name: "Descaling Chemical",
    description: "Versatile descaling chemicals for AHU/FCU, chillers, solar pipes, and industrial equipment.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export const products: Product[] = [
  // --- RO DOSING CHEMICALS ---
  {
    slug: "pelican-antiscalant-301",
    name: "High pH RO Antiscalant (PELICAN-301)",
    code: "PELICAN-301",
    category: "RO Dosing Chemicals",
    categorySlug: "ro-dosing-chemicals",
    shortDescription: "Keep Your RO System Running at Peak Performance",
    overview: "PELICAN-301 is a high-performance High pH RO Antiscalant specially developed to protect reverse osmosis (RO) membranes from scaling and fouling. It helps prevent mineral deposits before they form, allowing your RO plant to operate efficiently, reduce downtime, and extend membrane life. Designed for demanding industrial water treatment applications, PELICAN-301 performs exceptionally well even in challenging water conditions with high hardness, silica, and iron content.\n\nWhy Choose PELICAN-301?\nInstead of dealing with frequent membrane cleaning and costly maintenance, PELICAN-301 continuously protects your RO system by keeping scale-forming minerals dissolved and preventing deposits on membrane surfaces.",
    benefits: [
      "Prevents scaling caused by calcium carbonate, calcium sulfate, barium sulfate, strontium sulfate, magnesium salts, silica, iron, and calcium fluoride",
      "Improves RO system recovery and overall efficiency",
      "Reduces membrane cleaning frequency and maintenance costs",
      "Requires low chemical dosage for effective performance",
      "Helps control iron fouling through sequestration",
      "Compatible with all major RO membrane brands",
      "Eliminates the need for hazardous acid dosing in many applications",
      "Organic, biodegradable formulation for safer operation"
    ],
    applications: [
      "Industrial RO Plants",
      "Process Water Treatment",
      "Boiler Feed Water Systems",
      "Pharmaceutical Industries",
      "Food & Beverage Plants",
      "Textile Industry",
      "Chemical Processing Plants",
      "Power Plants",
      "Commercial Water Treatment Systems"
    ],
    technicalHighlights: [
      "LSI up to +2.6",
      "Iron concentration up to 1.2 ppm (reject stream)",
      "Silica up to 166 ppm",
      "High SDI feed water",
      "Compatible with ALSTAFLOC coagulants and flocculants"
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to Pale Yellow Liquid" },
      { property: "pH", specification: "10 – 12" },
      { property: "Water Solubility", specification: "Completely Soluble" },
      { property: "Solid Content", specification: "33–34% w/w" },
      { property: "Specific Gravity", specification: "1.35–1.45" }
    ],
    image: "https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-301-TDS.pdf"
  },
  {
    slug: "pelican-antiscalant-309",
    name: "Low pH RO Antiscalant (PELICAN-309/319)",
    code: "PELICAN-319",
    category: "RO Dosing Chemicals",
    categorySlug: "ro-dosing-chemicals",
    shortDescription: "Reliable Scale Control for RO, NF & UF Membrane Systems",
    overview: "PELICAN-319 is a high-performance low pH RO antiscalant designed to protect reverse osmosis (RO), nanofiltration (NF), and ultrafiltration (UF) membrane systems from scale formation and fouling. Its advanced formulation helps prevent the buildup of inorganic salts and suspended particles, ensuring consistent plant performance and longer membrane life.\n\nWhy Choose PELICAN-319?\nMembrane scaling is one of the leading causes of reduced efficiency and increased maintenance in water treatment plants. PELICAN-319 minimizes these challenges by preventing scale deposits before they form, allowing your system to operate more efficiently while reducing operating costs.",
    benefits: [
      "Prevents inorganic scale formation on RO membranes",
      "Controls calcium phosphate and other hard water deposits",
      "Effective against reactive and non-reactive silica scaling",
      "Helps control iron, aluminum, and heavy metal fouling",
      "Protects membranes from colloidal particle deposition",
      "Compatible with leading RO, NF, and UF membrane brands",
      "Can be used directly or diluted as required",
      "Reduces membrane cleaning frequency and extends membrane lifespan",
      "Supports lower operating and maintenance costs"
    ],
    applications: [
      "Reverse Osmosis (RO) Plants",
      "Nanofiltration (NF) Systems",
      "Ultrafiltration (UF) Systems",
      "Industrial Water Treatment Plants",
      "Boiler Feed Water Systems",
      "Food & Beverage Industries",
      "Pharmaceutical Manufacturing",
      "Textile Processing",
      "Chemical Industries",
      "Commercial Water Purification Systems"
    ],
    technicalHighlights: [
      "Effective in feed water with pH ranging from 5.0 to 10.0",
      "Controls a wide range of inorganic scales",
      "Suitable for both RO and membrane-based filtration systems",
      "Provides excellent protection against silica, iron, aluminum, and colloidal fouling",
      "Optimized dosage range: 2–30 ppm, depending on water quality and operating conditions"
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to White Slightly Viscous Liquid" },
      { property: "pH", specification: "3.5 – 4.5" },
      { property: "Water Solubility", specification: "Completely Soluble" },
      { property: "Solid Content", specification: "33–34% w/w" },
      { property: "Specific Gravity", specification: "1.17–1.23" }
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-319-TDS.pdf"
  },

  {
    slug: "pelican-antiscalant-hs-309",
    name: "RO Antiscalant (PELICAN-309 H/S High Silica)",
    code: "PELICAN-309 H/S",
    category: "RO Dosing Chemicals",
    categorySlug: "ro-dosing-chemicals",
    shortDescription: "High Silica RO Antiscalant for Superior Membrane Protection",
    overview: "PELICAN-309 H/S is a premium RO antiscalant specially formulated for reverse osmosis systems treating high-silica feed water. It effectively controls silica scaling, hardness deposits, and other inorganic contaminants that reduce membrane efficiency.\n\nBy preventing scale formation before it starts, PELICAN-309 H/S helps improve system recovery, extends membrane life, and minimizes maintenance costs—making it an ideal choice for demanding industrial water treatment applications.\n\nWhy Choose PELICAN-309 H/S?\nWhen your RO system processes water with high silica and dissolved solids, ordinary antiscalants may not be enough. PELICAN-309 H/S is engineered to provide dependable protection even under challenging operating conditions, helping your plant deliver consistent performance day after day.",
    benefits: [
      "Excellent control of high silica scaling",
      "Prevents hardness deposits on RO membranes",
      "Enhances membrane efficiency and water recovery",
      "Reduces cleaning frequency and maintenance downtime",
      "Suitable for high TDS feed water",
      "Compatible with major RO membrane systems",
      "Supports longer membrane life and lower operating costs",
      "Easy to dose and highly effective at low concentrations"
    ],
    applications: [
      "Industrial Reverse Osmosis Plants",
      "High Silica Borewell Water Treatment",
      "Pharmaceutical Industries",
      "Textile Manufacturing",
      "Food & Beverage Processing",
      "Chemical Industries",
      "Power Plants",
      "Commercial Water Purification Systems",
      "Process Water Treatment"
    ],
    technicalHighlights: [
      "TDS levels up to 7,500 ppm",
      "Hardness up to 2,700 ppm",
      "Silica concentration up to 500 ppm",
      "High chloride water conditions",
      "Advanced formulation includes biocide support to help control unpleasant odours"
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-309-HS-TDS.pdf"
  },

  // --- SEA WATER ---
  {
    slug: "sea-water-ro-antiscalant-399",
    name: "Sea Water RO Antiscalant (PELICAN-399)",
    code: "PELICAN-399",
    category: "Sea Water",
    categorySlug: "sea-water",
    shortDescription: "Advanced Protection for Seawater RO Membrane Systems",
    overview: "PELICAN-399 is a premium seawater RO antiscalant specially formulated to protect reverse osmosis membranes operating in high-salinity environments. It effectively prevents the formation of inorganic scale and minimizes particulate fouling, helping seawater desalination plants achieve consistent performance, higher water recovery, and longer membrane life.\n\nWhy Choose PELICAN-399?\nSeawater contains high concentrations of dissolved minerals that can quickly form scale on RO membranes, reducing system efficiency and increasing maintenance costs. PELICAN-399 is designed to keep these deposits under control, ensuring reliable operation even under demanding conditions.",
    benefits: [
      "Prevents scale formation on seawater RO membranes",
      "Controls calcium carbonate, calcium sulfate, barium sulfate, calcium fluoride, silica, and iron & aluminum hydroxides",
      "Reduces particulate fouling for improved membrane performance",
      "Supports higher water recovery and plant efficiency",
      "Lowers membrane cleaning frequency and maintenance costs",
      "Compatible with RO, NF, and UF membranes from leading manufacturers",
      "Suitable for potable water treatment applications",
      "Delivers reliable protection at low dosage rates"
    ],
    applications: [
      "Seawater Reverse Osmosis (SWRO) Plants",
      "Desalination Plants",
      "Offshore Water Treatment Systems",
      "Marine & Shipping Industries",
      "Coastal Industrial Water Treatment",
      "Power Plants",
      "Oil & Gas Facilities",
      "Municipal Desalination Projects"
    ],
    technicalHighlights: [
      "Excellent Scale Inhibition & Superior Membrane Protection",
      "Engineered to perform in high-salinity feed water",
      "Maintains clean membrane surfaces and consistent permeate quality",
      "Reliable Performance in High-Salinity Water",
      "Easy to Dose and Handle"
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to White Liquid" },
      { property: "Water Solubility", specification: "Completely Soluble" },
      { property: "Solid Content", specification: "33–34% w/w" },
      { property: "Specific Gravity", specification: "1.17–1.23" }
    ],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-399-TDS.pdf"
  },
  // --- ETP ---
  {
    slug: "pelican-101",
    name: "ETP Chemical (PELICAN-101)",
    code: "PELICAN-101",
    category: "ETP",
    categorySlug: "etp",
    shortDescription: "High-Performance Coagulant for Efficient Effluent Treatment",
    overview: "PELICAN-101 is a highly cationic liquid coagulant designed to improve the efficiency of Effluent Treatment Plants (ETPs). It rapidly destabilizes suspended solids, allowing them to settle faster and making wastewater treatment more effective and economical.\n\nIts low molecular weight and pumpable liquid formulation ensure easy handling, accurate dosing, and reliable performance across a wide range of industrial wastewater treatment applications.\n\nWhy Choose PELICAN-101?\nIndustrial wastewater often contains suspended solids, oils, organic matter, and other contaminants that require effective treatment before discharge or reuse. PELICAN-101 accelerates the coagulation process, helping industries achieve cleaner effluent while reducing chemical consumption and operating costs.",
    benefits: [
      "Fast and effective coagulation of suspended particles",
      "Improves sedimentation and sludge separation",
      "Reduces turbidity and wastewater colour",
      "Easy-to-dose liquid formulation",
      "Highly pumpable for automated dosing systems",
      "Suitable for a wide range of industrial effluents",
      "Optimizes ETP performance and treatment efficiency",
      "Helps reduce overall operating and maintenance costs"
    ],
    applications: [
      "Effluent Treatment Plants (ETP)",
      "Industrial Wastewater Treatment",
      "Textile Industries",
      "Chemical Manufacturing",
      "Food & Beverage Processing",
      "Pharmaceutical Industries",
      "Paper & Pulp Mills",
      "Electroplating Industries",
      "Municipal Wastewater Treatment",
      "Process Water Clarification"
    ],
    technicalHighlights: [
      "High Cationic Coagulant",
      "Fast Solid-Liquid Separation",
      "Improved Clarification Efficiency",
      "Stable Liquid Formulation & Easy Pumping & Dosing",
      "Reduced Sludge Handling Time"
    ],
    specifications: [
      { property: "Appearance", specification: "Colorless to Off-White Slightly Viscous Liquid" },
      { property: "pH", specification: "3.0 – 5.0" },
      { property: "Water Solubility", specification: "Infinite" },
      { property: "Solid Content", specification: "Minimum 50%" },
      { property: "Viscosity", specification: "Approximately 30–130 cPs" }
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-101-TDS.pdf"
  },

  // --- EDTA ---
  {
    slug: "edta-chemical",
    name: "EDTA Chemical",
    category: "EDTA",
    categorySlug: "edta",
    shortDescription: "High-Purity EDTA for Reliable Metal Ion Control",
    overview: "Pelican Chemical offers premium-quality EDTA Chemicals formulated to deliver effective chelation and metal ion control across a wide range of industrial applications. Known for their high purity, excellent water solubility, and consistent performance, our EDTA chemicals help improve process efficiency by binding unwanted metal ions and preventing scale formation.\n\nWhy Choose Pelican Chemical EDTA Chemicals?\nMetal ions such as calcium, magnesium, iron, and copper can affect product quality and process efficiency in many industries. Pelican Chemical's EDTA Chemicals act as powerful chelating agents, helping stabilize formulations, improve cleaning performance, and protect equipment from scale and deposits.",
    benefits: [
      "High purity and consistent quality",
      "Excellent water solubility",
      "Effective metal ion chelation",
      "Helps remove limescale and mineral deposits",
      "Improves process efficiency",
      "Long shelf life",
      "Available in multiple packaging options",
      "Suitable for a wide range of industrial applications"
    ],
    applications: [
      "Textile Processing",
      "Dyeing & Bleaching Operations",
      "Water Treatment Plants",
      "Chemical Manufacturing",
      "Detergent & Cleaning Products",
      "Paper & Pulp Industry",
      "Electroplating Processes",
      "Industrial Cleaning Applications",
      "Laboratory & Process Chemicals"
    ],
    technicalHighlights: [
      "High-Purity Formulation & Industrial-Grade Quality",
      "Excellent Chelating Performance",
      "Water-Soluble & Effective Limescale Removal",
      "Stable Chemical Composition & Long Shelf Life",
      "Available in Multiple Pack Sizes"
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
    datasheetUrl: "/downloads/EDTA-TDS.pdf"
  },

  // --- BOILER CHEMICAL ---
  {
    slug: "pelican-br",
    name: "Boiler Chemical (PELICAN-BR 01/11)",
    code: "PELICAN-BR 01/11",
    category: "Boiler Chemical",
    categorySlug: "boiler-chemical",
    shortDescription: "Advanced Boiler Water Treatment for Cleaner, More Efficient Operations",
    overview: "PELICAN-BR 01/11 is a high-performance boiler treatment chemical designed to prevent scale formation, corrosion, and metal oxide deposits inside industrial boilers. By keeping boiler internals clean, it improves heat transfer efficiency, reduces fuel consumption, and extends the service life of your boiler system.\n\nWhy Choose PELICAN-BR 01/11?\nEven a thin layer of scale inside a boiler can reduce efficiency and increase energy costs. PELICAN-BR 01/11 helps maintain clean heat transfer surfaces, ensuring smooth operation, reduced maintenance, and improved boiler reliability.",
    benefits: [
      "Prevents scale formation on boiler surfaces",
      "Controls metal ion and metal oxide deposits",
      "Helps reduce corrosion inside the boiler",
      "Improves heat transfer efficiency",
      "Lowers fuel consumption and operating costs",
      "Reduces boiler downtime and maintenance",
      "Extends equipment life",
      "Suitable for a wide range of industrial boiler systems"
    ],
    applications: [
      "Steam Boilers",
      "Industrial Boiler Systems",
      "Textile Industries",
      "Food & Beverage Processing",
      "Pharmaceutical Manufacturing",
      "Chemical Processing Plants",
      "Paper & Pulp Mills",
      "Power Plants",
      "Hotels, Hospitals & Commercial Boiler Systems"
    ],
    technicalHighlights: [
      "Prevents Scale Formation & Controls Corrosion",
      "Protects Boiler Internals & Extends Boiler Life",
      "Improves Heat Transfer & Reduces Fuel Consumption",
      "Reliable Industrial Performance"
    ],
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-BR-01-11-TDS.pdf"
  },

  // --- RO DESCALING CHEMICALS ---
  {
    slug: "pelican-ds-h17",
    name: "PELICAN DS-H17 – High pH RO Cleaner",
    code: "PELICAN DS-H17",
    category: "RO Descaling Chemicals",
    categorySlug: "ro-descaling-chemicals",
    shortDescription: "High-strength membrane descaling solution for organic fouling and biofouling.",
    overview: "Pelican RO Cleaners are specially formulated membrane cleaning chemicals designed to restore the performance of reverse osmosis (RO) systems by removing stubborn scale, organic deposits, silt, colloidal silica, clay, colour, and bacterial slime. PELICAN DS-H17 is a High pH RO Cleaner designed to remove organic fouling, biological slime, colloidal silica, and silt and clay deposits, making it ideal for membranes affected by organic contaminants and biofouling.",
    benefits: [
      "Removes organic fouling and biological deposits",
      "Effectively cleans colloidal silica, clay, and silt deposits",
      "Eliminates bacterial slime and organic colour",
      "Low-foaming formula for easy circulation and rinsing",
      "Buffered solution helps maintain safe membrane pH during cleaning",
      "Restores water flow and system efficiency",
      "Extends membrane service life"
    ],
    applications: [
      "Industrial Reverse Osmosis (RO) Plants",
      "Water Purification Systems",
      "Pharmaceutical Industries",
      "Food & Beverage Processing",
      "Textile Industries",
      "Chemical Manufacturing",
      "Power Plants & Commercial RO Systems"
    ],
    technicalHighlights: [
      "Available in High pH Formulation",
      "Safe for Thin-Film Composite Membranes",
      "Reduces Cleaning Time & Improves Water Recovery",
      "Important Note: Do not use on cellulose acetate membranes"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-DS-H17-TDS.pdf"
  },
  {
    slug: "pelican-ds-l17",
    name: "PELICAN DS-L17 – Low pH RO Cleaner",
    code: "PELICAN DS-L17",
    category: "RO Descaling Chemicals",
    categorySlug: "ro-descaling-chemicals",
    shortDescription: "Gentle membrane descaling and cleaning agent for mineral scaling and metallic deposits.",
    overview: "Pelican RO Cleaners are specially formulated membrane cleaning chemicals designed to restore the performance of reverse osmosis (RO) systems. PELICAN DS-L17 is a Low pH RO Cleaner designed to remove calcium and mineral scale, iron deposits, inorganic fouling, and hard water scaling, making it perfect for restoring membranes affected by mineral scaling and metallic deposits.",
    benefits: [
      "Low-foaming formula for easy circulation and rinsing",
      "Buffered solution helps maintain safe membrane pH during cleaning",
      "Restores water flow and system efficiency",
      "Helps reduce maintenance costs and unplanned downtime",
      "Compatible with most thin-film composite (TFC) membranes",
      "Extends membrane service life"
    ],
    applications: [
      "Industrial Reverse Osmosis (RO) Plants",
      "Water Purification Systems",
      "Pharmaceutical Industries",
      "Food & Beverage Processing",
      "Chemical Manufacturing",
      "Process Water Treatment Facilities"
    ],
    technicalHighlights: [
      "Available in Low pH Formulation",
      "Removes Inorganic Fouling",
      "Safe for Thin-Film Composite Membranes",
      "Important Note: Do not use on cellulose acetate membranes"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    datasheetUrl: "/downloads/PELICAN-DS-L17-TDS.pdf"
  },

  // --- COOLING TOWER ---
  {
    slug: "pc-ct-sc1-309",
    name: "Anti-Scalant Cum Corrosion Inhibitor – PC CT SC1 309",
    code: "PC-CT-SC1",
    category: "Cooling Tower",
    categorySlug: "cooling-tower",
    shortDescription: "A dual-action treatment that prevents scale buildup while protecting metal components from corrosion.",
    overview: "Pelican Chemical offers a comprehensive range of Cooling Tower Chemicals designed to protect industrial cooling systems from the three most common problems—scale formation, corrosion, and microbial growth. PC CT SC1 309 is a dual-action treatment that prevents scale buildup while protecting metal components from corrosion, ensuring maximum cooling efficiency.",
    benefits: [
      "Prevents scale and mineral deposits",
      "Protects metal surfaces from corrosion",
      "Improves heat transfer efficiency",
      "Reduces maintenance and cleaning frequency",
      "Extends the service life of cooling tower equipment",
      "Optimizes water usage and system performance"
    ],
    applications: [
      "Industrial Cooling Towers",
      "HVAC Cooling Systems",
      "Power Plants",
      "Chemical Processing Industries",
      "Pharmaceutical Manufacturing",
      "Food & Beverage Processing",
      "Textile & Petrochemical Plants",
      "Commercial Chiller Systems",
      "Manufacturing Facilities"
    ],
    technicalHighlights: [
      "Complete Cooling Water Treatment Program",
      "Scale & Corrosion Protection",
      "Restores Heat Transfer Efficiency",
      "Reduces Maintenance Costs & Extends Equipment Life",
      "Suitable for Open & Recirculating Cooling Systems"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    datasheetUrl: "/downloads/PC-CT-SC1-309-TDS.pdf"
  },
  {
    slug: "pc-ct-mb1-301",
    name: "Micro Biocide Chemical – PC CT MB1 301",
    code: "PC-CT-MB1",
    category: "Cooling Tower",
    categorySlug: "cooling-tower",
    shortDescription: "Controls bacterial growth, biofilm, and harmful microorganisms.",
    overview: "Pelican Chemical's complete water treatment program helps maintain clean, protected cooling systems while minimizing downtime and operating costs. PC CT MB1 301 controls bacterial growth, biofilm, and harmful microorganisms that can reduce cooling tower performance and create hygiene concerns.",
    benefits: [
      "Controls algae, bacteria, and microbial growth",
      "Improves heat transfer efficiency",
      "Reduces maintenance and cleaning frequency",
      "Extends the service life of cooling tower equipment",
      "Optimizes water usage and system performance"
    ],
    applications: [
      "Industrial Cooling Towers",
      "HVAC Cooling Systems",
      "Power Plants",
      "Chemical Processing Industries",
      "Pharmaceutical Manufacturing",
      "Food & Beverage Processing",
      "Textile & Petrochemical Plants",
      "Commercial Chiller Systems",
      "Manufacturing Facilities"
    ],
    technicalHighlights: [
      "Complete Cooling Water Treatment Program",
      "Effective Microbial Control",
      "Restores Heat Transfer Efficiency",
      "Reduces Maintenance Costs & Extends Equipment Life",
      "Suitable for Open & Recirculating Cooling Systems"
    ],
    image: "https://images.unsplash.com/photo-1581093458791-9f3023e2d2b8?w=800&q=80",
    datasheetUrl: "/downloads/PC-CT-MB1-301-TDS.pdf"
  },
  {
    slug: "pc-ct-alg-306",
    name: "Algae Preventive – PC CT ALG 306",
    code: "PC-CT-ALG",
    category: "Cooling Tower",
    categorySlug: "cooling-tower",
    shortDescription: "Prevents algae formation that can block water flow and reduce heat exchange efficiency.",
    overview: "Cooling towers operate under demanding conditions where mineral deposits, corrosion, algae, and bacteria can significantly reduce system efficiency. PC CT ALG 306 prevents algae formation that can block water flow, reduce heat exchange efficiency, and increase maintenance requirements.",
    benefits: [
      "Controls algae, bacteria, and microbial growth",
      "Improves heat transfer efficiency",
      "Reduces maintenance and cleaning frequency",
      "Extends the service life of cooling tower equipment",
      "Optimizes water usage and system performance"
    ],
    applications: [
      "Industrial Cooling Towers",
      "HVAC Cooling Systems",
      "Power Plants",
      "Chemical Processing Industries",
      "Pharmaceutical Manufacturing",
      "Food & Beverage Processing",
      "Textile & Petrochemical Plants",
      "Commercial Chiller Systems",
      "Manufacturing Facilities"
    ],
    technicalHighlights: [
      "Complete Cooling Water Treatment Program",
      "Algae Prevention",
      "Restores Heat Transfer Efficiency",
      "Reduces Maintenance Costs & Extends Equipment Life",
      "Suitable for Open & Recirculating Cooling Systems"
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    datasheetUrl: "/downloads/PC-CT-ALG-306-TDS.pdf"
  },
  {
    slug: "pc-ct-ds1-399",
    name: "Cooling Tower Descaling Chemical – PC CT DS1 399",
    code: "PC-CT-DS1",
    category: "Cooling Tower",
    categorySlug: "cooling-tower",
    shortDescription: "Removes existing scale and mineral deposits from heat exchange surfaces.",
    overview: "Pelican Chemical's complete water treatment program helps maintain clean, protected cooling systems while minimizing downtime and operating costs. PC CT DS1 399 removes existing scale and mineral deposits from heat exchange surfaces, restoring cooling efficiency and improving overall system performance.",
    benefits: [
      "Prevents scale and mineral deposits",
      "Improves heat transfer efficiency",
      "Reduces maintenance and cleaning frequency",
      "Extends the service life of cooling tower equipment",
      "Optimizes water usage and system performance"
    ],
    applications: [
      "Industrial Cooling Towers",
      "HVAC Cooling Systems",
      "Power Plants",
      "Chemical Processing Industries",
      "Pharmaceutical Manufacturing",
      "Food & Beverage Processing",
      "Textile & Petrochemical Plants",
      "Commercial Chiller Systems",
      "Manufacturing Facilities"
    ],
    technicalHighlights: [
      "Complete Cooling Water Treatment Program",
      "Scale & Corrosion Protection",
      "Restores Heat Transfer Efficiency",
      "Reduces Maintenance Costs & Extends Equipment Life",
      "Suitable for Open & Recirculating Cooling Systems"
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9db3881b5?w=800&q=80",
    datasheetUrl: "/downloads/PC-CT-DS1-399-TDS.pdf"
  },

  // --- DESCALING CHEMICAL ---
  {
    slug: "descaling-ahu-fcu",
    name: "AHU & FCU Cleaning Chemical",
    category: "Descaling Chemical",
    categorySlug: "descaling-chemical",
    shortDescription: "Specialized descaler for Air Handling and Fan Coil Units.",
    overview: "Pelican Chemical offers a comprehensive range of industrial descaling chemicals designed to remove stubborn scale, rust, mineral deposits, and dirt. Designed to clean Air Handling Units (AHUs) and Fan Coil Units (FCUs), this formulation effectively removes dust, dirt, grease, and other contaminants from cooling fins and coils. Clean surfaces improve airflow, cooling efficiency, and indoor air quality.",
    benefits: [
      "Removes hard scale, rust, and mineral deposits",
      "Restores heat transfer efficiency",
      "Improves equipment performance",
      "Reduces energy consumption",
      "Minimizes maintenance downtime",
      "Safe for a wide range of metal surfaces when used as recommended",
      "Easy-to-use formulations for industrial cleaning",
      "Extends equipment service life"
    ],
    applications: [
      "AHU & FCU Coils",
      "HVAC Systems",
      "Heat Exchangers",
      "Chillers",
      "Cooling Towers",
      "Boilers",
      "Solar Water Heating Systems",
      "Pipelines",
      "Process Equipment",
      "Industrial Manufacturing Plants"
    ],
    technicalHighlights: [
      "Fast Scale Removal",
      "Suitable for MS, SS & Copper",
      "Restores Heat Transfer Efficiency & Improves Equipment Performance",
      "Reduces Maintenance Downtime",
      "Easy-to-Apply Formulation & Cost-Effective Industrial Cleaning",
      "Reliable Performance Across Multiple Applications"
    ],
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    datasheetUrl: "/downloads/AHU-FCU-Descaling-TDS.pdf"
  },
  {
    slug: "descaling-chiller",
    name: "Chiller Descaling Chemical",
    category: "Descaling Chemical",
    categorySlug: "descaling-chemical",
    shortDescription: "Formulated for chiller tube and condenser cleaning.",
    overview: "Pelican Chemical's descaling solutions dissolve mineral deposits quickly and safely, helping your systems operate at peak efficiency. Specially developed for chillers and cooling systems, this chemical removes scale and deposits from heat exchangers, helping restore cooling efficiency while reducing energy consumption and equipment wear.",
    benefits: [
      "Removes hard scale, rust, and mineral deposits",
      "Restores heat transfer efficiency",
      "Improves equipment performance",
      "Reduces energy consumption",
      "Minimizes maintenance downtime",
      "Safe for a wide range of metal surfaces when used as recommended",
      "Easy-to-use formulations for industrial cleaning",
      "Extends equipment service life"
    ],
    applications: [
      "Chillers",
      "Heat Exchangers",
      "Cooling Towers",
      "Boilers",
      "AHU & FCU Coils",
      "HVAC Systems",
      "Solar Water Heating Systems",
      "Pipelines",
      "Process Equipment",
      "Industrial Manufacturing Plants"
    ],
    technicalHighlights: [
      "Fast Scale Removal",
      "Suitable for MS, SS & Copper",
      "Restores Heat Transfer Efficiency & Improves Equipment Performance",
      "Reduces Maintenance Downtime",
      "Easy-to-Apply Formulation & Cost-Effective Industrial Cleaning",
      "Reliable Performance Across Multiple Applications"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    datasheetUrl: "/downloads/Chiller-Descaling-TDS.pdf"
  },
  {
    slug: "descaling-solar-pipes",
    name: "Solar Pipe Cleaning Chemical",
    category: "Descaling Chemical",
    categorySlug: "descaling-chemical",
    shortDescription: "Scale remover for solar water heating systems.",
    overview: "Pelican Chemical's descaling solutions dissolve deposits quickly and safely to restore system efficiency. Engineered to eliminate scale and mineral buildup inside solar water heating pipelines, ensuring smooth water circulation and improved thermal efficiency.",
    benefits: [
      "Removes hard scale, rust, and mineral deposits",
      "Restores heat transfer efficiency",
      "Improves equipment performance",
      "Reduces energy consumption",
      "Minimizes maintenance downtime",
      "Safe for a wide range of metal surfaces when used as recommended",
      "Easy-to-use formulations for industrial cleaning",
      "Extends equipment service life"
    ],
    applications: [
      "Solar Water Heating Systems",
      "Pipelines",
      "Heat Exchangers",
      "Chillers",
      "Cooling Towers",
      "Boilers",
      "AHU & FCU Coils",
      "HVAC Systems",
      "Process Equipment",
      "Industrial Manufacturing Plants"
    ],
    technicalHighlights: [
      "Fast Scale Removal",
      "Suitable for MS, SS & Copper",
      "Restores Heat Transfer Efficiency & Improves Equipment Performance",
      "Reduces Maintenance Downtime",
      "Easy-to-Apply Formulation & Cost-Effective Industrial Cleaning",
      "Reliable Performance Across Multiple Applications"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    datasheetUrl: "/downloads/Solar-Pipe-Descaling-TDS.pdf"
  },
  {
    slug: "descaling-industrial-equipment",
    name: "Industrial Equipment Descaling",
    category: "Descaling Chemical",
    categorySlug: "descaling-chemical",
    shortDescription: "Heavy-duty descaler for manufacturing equipment.",
    overview: "Pelican Chemical offers a comprehensive range of industrial descaling chemicals designed to remove stubborn scale, rust, mineral deposits, and dirt from a variety of metal surfaces and equipment. Suitable for cleaning mild steel (MS), stainless steel (SS), copper, and other metal components used in industrial processes. It effectively removes scale without compromising operational performance when applied correctly.",
    benefits: [
      "Removes hard scale, rust, and mineral deposits",
      "Restores heat transfer efficiency",
      "Improves equipment performance",
      "Reduces energy consumption",
      "Minimizes maintenance downtime",
      "Safe for a wide range of metal surfaces when used as recommended",
      "Easy-to-use formulations for industrial cleaning",
      "Extends equipment service life"
    ],
    applications: [
      "Process Equipment",
      "Industrial Manufacturing Plants",
      "Heat Exchangers",
      "Chillers",
      "Cooling Towers",
      "Boilers",
      "AHU & FCU Coils",
      "HVAC Systems",
      "Solar Water Heating Systems",
      "Pipelines"
    ],
    technicalHighlights: [
      "Fast Scale Removal",
      "Suitable for MS, SS & Copper",
      "Restores Heat Transfer Efficiency & Improves Equipment Performance",
      "Reduces Maintenance Downtime",
      "Easy-to-Apply Formulation & Cost-Effective Industrial Cleaning",
      "Reliable Performance Across Multiple Applications"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    datasheetUrl: "/downloads/Industrial-Equipment-Descaling-TDS.pdf"
  }
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