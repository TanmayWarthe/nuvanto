"use client";

import { useRef } from "react";
import Image from "next/image";
import { teamData, whyNavunto } from "@/lib/team-data";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function TeamPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    // Ambient glow animation
    gsap.to(".team-glow", {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Hero reveals
    const tl = gsap.timeline();
    tl.fromTo(".team-hero-eyebrow", 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".team-hero-headline", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(".team-hero-subtext", 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.7"
    );

    // Founder cards staggered reveal
    gsap.fromTo(".founder-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Why strip reveal
    gsap.fromTo(".why-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-strip",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 overflow-hidden relative min-h-screen">
      {/* Background glow effects */}
      <div className="team-glow absolute top-0 left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="team-glow absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-gold-light/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 1. Hero Section */}
        <section className="text-center max-w-3xl mx-auto pt-10 pb-20">
          <div className="team-hero-eyebrow flex justify-center mb-8">
            <SectionEyebrow>The People Behind Navunto</SectionEyebrow>
          </div>
          <h1 className="team-hero-headline text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight tracking-tight text-foreground mb-6">
            Three friends. One studio. <br className="hidden md:block" />
            <span className="italic gradient-text">Built to ship great software.</span>
          </h1>
          <p className="team-hero-subtext text-base md:text-lg text-text-secondary leading-relaxed font-light">
            We&apos;re a small team that partners directly with founders and businesses to design and build websites that feel premium — no account managers, no middlemen, just the people building your product.
          </p>
        </section>

        {/* 2. Founders Grid */}
        <section className="team-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {teamData.map((founder, i) => (
            <div 
              key={i} 
              className="founder-card p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(200,155,83,0.15)] flex flex-col group relative"
            >
              {/* Gradient border that appears on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ padding: '1px' }}>
                <div className="w-full h-full bg-surface rounded-[15px]" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Photo */}
                <div className="w-full aspect-[4/5] relative rounded-xl overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0" />
                  <Image 
                    src={founder.photo} 
                    alt={founder.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-2xl text-foreground mb-1">{founder.name}</h3>
                <p className="text-sm font-mono tracking-widest uppercase text-gold-deep mb-3">{founder.role}</p>
                <p className="text-base text-text-primary mb-6 font-medium">{founder.tagline}</p>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-light">{founder.bio}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {founder.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium border border-hairline text-text-faint bg-surface-hover/30">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm italic text-text-faint border-l-2 border-gold/30 pl-4 mb-8">
                  &quot;{founder.quote}&quot;
                </blockquote>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-hairline">
                  {founder.links.map(link => (
                    <a 
                      key={link.label}
                      href={link.href}
                      className="text-xs uppercase tracking-widest font-mono text-text-secondary hover:text-gold transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 3. Why Navunto Strip */}
        <section className="why-strip border-y border-hairline py-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {whyNavunto.map((item, i) => (
              <div key={i} className="why-item flex flex-col md:items-center text-left md:text-center">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5 text-gold">
                  <span className="font-mono text-xs">0{i + 1}</span>
                </div>
                <h4 className="text-lg font-display text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-text-secondary font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Closing CTA */}
        <section className="text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-10">
            Let&apos;s build something together.
          </h2>
          <Button href="/contact" variant="primary" className="!px-12 !py-5 text-sm tracking-widest uppercase shadow-[0_0_40px_rgba(200,155,83,0.3)] hover:shadow-[0_0_60px_rgba(200,155,83,0.5)]">
            Start a Project
          </Button>
        </section>

      </div>
    </div>
  );
}
