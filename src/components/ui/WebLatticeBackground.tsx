"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface WebLatticeBackgroundProps {
  children: ReactNode;
}

export function WebLatticeBackground({ children }: WebLatticeBackgroundProps) {
  const bg = useRef<HTMLDivElement>(null);
  const spokes = 32;
  const rings = 12;

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !bg.current) return;

    gsap.to(bg.current, {
      rotation: 360,
      duration: 400,
      repeat: -1,
      ease: "none"
    });
  }, { scope: bg });

  return (
    <div className="relative w-full bg-background overflow-hidden">
      {/* The Lattice SVG Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div
          ref={bg}
          className="relative w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] opacity-80"
          style={{
            maskImage: "radial-gradient(circle at center, black 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 65%)",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            {/* Spokes */}
            {Array.from({ length: spokes }).map((_, i) => (
              <line
                key={`spoke-${i}`}
                x1="50"
                y1="50"
                x2={50 + 50 * Math.cos((i * 2 * Math.PI) / spokes)}
                y2={50 + 50 * Math.sin((i * 2 * Math.PI) / spokes)}
                stroke="currentColor"
                strokeWidth="0.05"
                className="opacity-20"
              />
            ))}
            {/* Rings */}
            {Array.from({ length: rings }).map((_, i) => {
              const radius = 10 + (40 / rings) * i;
              const opacity = 0.35 - (0.2 / rings) * i;
              return (
                <circle
                  key={`ring-${i}`}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.05"
                  style={{ opacity: opacity * 0.7 }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
