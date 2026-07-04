import { MetadataRoute } from "next";
import { sitemap } from "@/data/navigation";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

export default function sitemapConfig(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pelicanchem.com";

  const staticPages = sitemap.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...industryPages];
}
