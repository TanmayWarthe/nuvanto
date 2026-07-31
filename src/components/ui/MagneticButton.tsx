"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use a ref to store GSAP quickTo functions for performance
  const xTo = useRef<any>(null);
  const yTo = useRef<any>(null);

  useGSAP(() => {
    xTo.current = gsap.quickTo(ref.current, "x", { duration: 0.6, ease: "power3", opacity: 1 });
    yTo.current = gsap.quickTo(ref.current, "y", { duration: 0.6, ease: "power3", opacity: 1 });
  }, { scope: ref });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    if (xTo.current && yTo.current) {
      xTo.current(middleX * 0.1);
      yTo.current(middleY * 0.1);
    }
  };

  const reset = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    
    if (xTo.current && yTo.current) {
      xTo.current(0);
      yTo.current(0);
    }
  };

  return (
    <div
      className={`inline-block ${className}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
