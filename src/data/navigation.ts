export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Products",
    href: "/products",
    children: [
      // Reordered exactly to your requested sequence
      { label: "RO Antiscalant Chemicals", href: "/products/ro-dosing-chemicals" },
      { label: "Sea Water", href: "/products/sea-water" },
      { label: "Cooling Tower Chemical", href: "/products/cooling-tower" },
      { label: "Boiler Chemical", href: "/products/boiler-chemical" },
      { label: "RO Descaling Chemicals", href: "/products/ro-descaling-chemicals" },
      { label: "Chiller Chemical", href: "/products/chiller-chemical" }, // Added
      { label: "Descaling Chemical", href: "/products/descaling-chemical" },
      { label: "AHU / FCU", href: "/products/ahu-fcu-chemical" }, // Added
      { label: "ETP", href: "/products/etp" },
      { label: "EDTA", href: "/products/edta" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Study", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Application", href: "/application" },
];

export const sitemap = [
  { path: "/", title: "Home", priority: 1.0 },
  { path: "/products", title: "Our Products", priority: 0.9 },
  
  // Updated Titles & Sequence for Sitemap
  { path: "/products/ro-dosing-chemicals", title: "RO Antiscalant Chemicals", priority: 0.8 },
  { path: "/products/sea-water", title: "Sea Water", priority: 0.8 },
  { path: "/products/cooling-tower", title: "Cooling Tower", priority: 0.8 },
  { path: "/products/boiler-chemical", title: "Boiler Chemical", priority: 0.8 },
  { path: "/products/ro-descaling-chemicals", title: "RO Descaling Chemicals", priority: 0.8 },
  { path: "/products/chiller-chemical", title: "Chiller Chemical", priority: 0.8 }, // Added
  { path: "/products/descaling-chemical", title: "Descaling Chemical", priority: 0.8 },
  { path: "/products/ahu-fcu-chemical", title: "AHU / FCU", priority: 0.8 }, // Added
  { path: "/products/etp", title: "ETP", priority: 0.8 },
  { path: "/products/edta", title: "EDTA", priority: 0.8 },
  
  { path: "/industries", title: "Industries We Serve", priority: 0.8 },
  { path: "/case-studies", title: "Case Studies", priority: 0.8 },
  { path: "/about", title: "About Us", priority: 0.9 },
  { path: "/contact", title: "Contact", priority: 0.8 },
  { path: "/application", title: "Application", priority: 0.8 },
  { path: "/custom-label", title: "Custom Label Solutions", priority: 0.7 },
  { path: "/quality", title: "Quality & Manufacturing", priority: 0.7 },
];