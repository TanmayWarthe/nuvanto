"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { homeContent } from "@/lib/constants";

export function Marquee() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  
  // Duplicate text enough times to fill ultra-wide screens
  const content = homeContent.marqueeText.repeat(5);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !track.current) return;

    gsap.to(track.current, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1,
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full overflow-hidden border-y border-gold/10 py-6 bg-transparent">
      <div
        ref={track}
        className="flex whitespace-nowrap"
      >
        <span className="text-2xl md:text-3xl font-display italic font-light tracking-wide text-gold pr-16 md:pr-24">
          {content}
        </span>
        <span className="text-2xl md:text-3xl font-display italic font-light tracking-wide text-gold pr-16 md:pr-24">
          {content}
        </span>
      </div>
    </div>
  );
}
