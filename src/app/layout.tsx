import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pelicanchem.com"),
  title: {
    default: `${company.name} | Water Treatment & Process Chemical Solutions`,
    template: `%s | ${company.name}`,
  },
  description:
    "Pelican Chem - Leading manufacturer and supplier of RO Chemicals, RO Antiscalants, Boiler Chemicals, ETP Chemicals, and industrial water treatment solutions since 2007. Based in Rajkot, Gujarat, India.",
  keywords: company.keywords,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    title: `${company.name} | Water Treatment Chemical Solutions`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/pelican-mark.svg",
    apple: "/images/pelican-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <body className="font-sans">
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
