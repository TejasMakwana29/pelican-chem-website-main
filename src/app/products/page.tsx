"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { productCategories, getProductsByCategory } from "@/data/products";

export default function ProductsPage() {
  // State to track which category is currently expanded
  // We can default it to the first category, or leave it null so all are closed initially
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    if (expandedCategory === slug) {
      setExpandedCategory(null); // Close it if it's already open
    } else {
      setExpandedCategory(slug); // Open the clicked one
    }
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[40vh] items-center bg-navy">
        <div className="section-padding w-full">
          <div className="container-wide">
            <FadeIn>
              <p className="text-label text-aqua-300">Catalog</p>
              <h1 className="heading-display mt-4 text-white">Our Products</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Explore our complete range of specialized formulations designed for maximum efficiency and system protection. Select a category below to view our solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Accordion Categories List */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container-wide space-y-6">
          {productCategories.map((category, index) => {
            const categoryProducts = getProductsByCategory(category.slug);
            if (categoryProducts.length === 0) return null;

            const isSingleProduct = categoryProducts.length === 1;
            const isExpanded = expandedCategory === category.slug;

            return (
              <FadeIn key={category.slug} delay={index * 0.05}>
                <div className="flex flex-col">
                  
                  {/* CATEGORY HEADER BANNER (The clickable wide/short image) */}
                  <button
                    onClick={() => toggleCategory(category.slug)}
                    className="group relative w-full h-32 md:h-40 overflow-hidden rounded-2xl flex items-center justify-between px-8 md:px-12 text-left transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-aqua focus:ring-offset-2"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                    />
                    {/* Dark overlay that lightens slightly on hover */}
                    <div className="absolute inset-0 bg-navy/70 transition-colors duration-300 group-hover:bg-navy/50" />
                    
                    <div className="relative z-10 max-w-3xl">
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {category.name}
                      </h2>
                      <p className="mt-2 text-sm md:text-base text-aqua-100 hidden sm:block">
                        {category.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-aqua">
                      <ChevronDown
                        className={`h-6 w-6 text-white transition-transform duration-500 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* EXPANDED PRODUCTS CONTENT */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-8 mb-8"
                        : "grid-rows-[0fr] opacity-0 mt-0 mb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {isSingleProduct ? (
                        /* HERO LAYOUT FOR SINGLE PRODUCT */
                        <Link
                          href={`/products/${category.slug}/${categoryProducts[0].slug}`}
                          className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 lg:flex-row transition-all hover:shadow-md"
                        >
                          <div className="relative h-72 w-full shrink-0 overflow-hidden lg:h-auto lg:w-1/2">
                            <Image
                              src={categoryProducts[0].image}
                              alt={categoryProducts[0].name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                            {categoryProducts[0].code && (
                              <span className="mb-4 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                                {categoryProducts[0].code}
                              </span>
                            )}
                            <h3 className="heading-sub text-2xl group-hover:text-aqua">{categoryProducts[0].name}</h3>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                              {categoryProducts[0].shortDescription}
                            </p>
                            <div className="mt-8">
                              <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-aqua">
                                View Details & Datasheet
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        /* GRID LAYOUT FOR MULTIPLE PRODUCTS */
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                          {categoryProducts.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/products/${category.slug}/${product.slug}`}
                              className="group card-hover flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                            >
                              <div className="relative h-56 w-full shrink-0 overflow-hidden">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                              <div className="flex flex-1 flex-col p-6 lg:p-8">
                                {product.code && (
                                  <span className="mb-3 self-start rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                                    {product.code}
                                  </span>
                                )}
                                <h3 className="heading-sub text-xl group-hover:text-aqua">{product.name}</h3>
                                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                                  {product.shortDescription}
                                </p>
                                <div className="mt-6 pt-4 border-t border-slate-100">
                                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-aqua">
                                    View Details
                                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                  </span>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}