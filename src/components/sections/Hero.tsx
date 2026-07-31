"use client";

import { useRef } from "react";
import { homeContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !contentRef.current) return;

    // Animate content up
    gsap.fromTo(contentRef.current.children, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
    );


  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[100svh] flex flex-col justify-center items-center pt-32 pb-16 overflow-hidden bg-surface">
      


      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center" ref={contentRef}>
        
        {/* Masterpiece Headline */}
        <div className="mb-8 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.1] tracking-tight text-ink-text text-balance mx-auto">
            Your business&apos;s <br />
            <span className="italic relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-gold-deep via-gold to-gold-light bg-clip-text text-transparent px-2">first mile</span>
            </span>{" "}
            online.
          </h1>
        </div>
        
        {/* Refined Subhead */}
        <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl font-light text-balance mx-auto">
          {homeContent.hero.subhead}
        </p>
        
        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
          <Button href={homeContent.hero.ctaPrimary.href} variant="primary" className="!px-8 !py-3 text-sm tracking-widest uppercase shadow-xl shadow-gold/10 w-full sm:w-auto transition-transform hover:scale-105">
            {homeContent.hero.ctaPrimary.label}
          </Button>
          <Button href={homeContent.hero.ctaSecondary.href} variant="ghost" className="!px-8 !py-3 text-sm tracking-widest uppercase !text-ink-text !border-ink-text/10 hover:!border-gold hover:!text-gold hover:!bg-gold/5 w-full sm:w-auto transition-all duration-300">
            {homeContent.hero.ctaSecondary.label}
          </Button>
        </div>
        
      </div>
    </section>
  );
}
