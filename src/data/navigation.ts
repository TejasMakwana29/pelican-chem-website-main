export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "RO Chemicals", href: "/products/ro-chemicals" },
      { label: "Sea Water RO Chemicals", href: "/products/sea-water-ro-chemicals" },
      { label: "ETP Chemicals", href: "/products/etp-chemicals" },
      { label: "Boiler Chemicals", href: "/products/boiler-chemicals" },
      { label: "EDTA Chemicals", href: "/products/edta-chemicals" },
      { label: "Cooling Tower Chemicals", href: "/products/cooling-tower-chemicals" },
    ],
  },
  { label: "Application", href: "/application" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const sitemap = [
  { path: "/", title: "Home", priority: 1.0 },
  { path: "/about", title: "About Us", priority: 0.9 },
  { path: "/products", title: "Products", priority: 0.9 },
  { path: "/products/ro-chemicals", title: "RO Chemicals", priority: 0.8 },
  { path: "/products/sea-water-ro-chemicals", title: "Sea Water RO Chemicals", priority: 0.8 },
  { path: "/products/etp-chemicals", title: "ETP Chemicals", priority: 0.8 },
  { path: "/products/boiler-chemicals", title: "Boiler Chemicals", priority: 0.8 },
  { path: "/products/edta-chemicals", title: "EDTA Chemicals", priority: 0.8 },
  { path: "/products/cooling-tower-chemicals", title: "Cooling Tower Chemicals", priority: 0.8 },
  { path: "/application", title: "Application", priority: 0.8 },
  { path: "/industries", title: "Industries We Serve", priority: 0.8 },
  { path: "/custom-label", title: "Custom Label Solutions", priority: 0.7 },
  { path: "/quality", title: "Quality & Manufacturing", priority: 0.7 },
  { path: "/contact", title: "Contact", priority: 0.8 },
];