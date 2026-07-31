"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({ children, delay = 0, className = "" }: RevealOnScrollProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Determine if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(container.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      container.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=50px",
          once: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
