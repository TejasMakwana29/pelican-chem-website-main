"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

// Updated paths to local images in the public folder
const BACKGROUND_IMAGES = [
  "/images/carousal1.jpg",
  "/images/carousal2.jpg",
  "/images/carousal3.jpg",
  "/images/carousal4.jpg"
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy">
      {/* Background Image Carousel */}
      {BACKGROUND_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Industrial water treatment facility"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}

      <div className="gradient-overlay z-10" />
      
      <div className="section-padding relative z-20 w-full">
        <div className="container-wide max-w-4xl pr-12 md:pr-0">
          <FadeIn>
            <p className="text-label text-aqua-300">Industrial Chemical Solutions</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-display mt-6 text-white text-balance">
              Advanced Water Treatment Chemicals for Superior RO Performance
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              With over 14 years of expertise, Pelican Chemical provides high-quality RO chemicals that maximize efficiency, extend membrane life, and ensure consistent water quality.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-slate-200 md:text-base">
              <li className="flex items-center gap-3">
                <span className="text-aqua">🏭</span> State-of-the-Art Production Facility in Rajkot, Jalna, Ahmedabad, Banglore
              </li>
              <li className="flex items-center gap-3">
                <span className="text-aqua">📦</span> Custom / Private Labeling (OEM) Available
              </li>
              <li className="flex items-center gap-3">
                <span className="text-aqua">🚛</span> Pan-India Supply & Prompt Delivery
              </li>
              <li className="flex items-center gap-3">
                <span className="text-aqua">📞</span> 24/7 Support on call
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#quote" className="btn-primary">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute right-4 md:right-10 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
        {BACKGROUND_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2.5 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-aqua h-10" : "bg-white/40 hover:bg-white/70 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}