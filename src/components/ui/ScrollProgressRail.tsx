"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ScrollProgressRail() {
  const rail = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only animate if element exists and motion is preferred
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !rail.current) return;

    gsap.fromTo(rail.current, 
      { scaleY: 0 }, 
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      }
    );
  }, { scope: rail });

  return (
    <div className="fixed left-0 top-0 bottom-0 w-1 bg-surface z-50 hidden lg:block">
      <div 
        ref={rail}
        className="w-full bg-gradient-to-b from-gold-light to-gold-deep origin-top"
        style={{ height: "100%", transform: "scaleY(0)" }}
      />
    </div>
  );
}
