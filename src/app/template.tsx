"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(container.current, { opacity: 1 });
      return;
    }
    
    gsap.fromTo(container.current, 
      { opacity: 0, y: 12, scale: 0.98 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, { scope: container });

  return (
    <div ref={container} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
