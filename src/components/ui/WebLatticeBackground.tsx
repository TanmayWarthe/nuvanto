"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface WebLatticeBackgroundProps {
  children: ReactNode;
}

export function WebLatticeBackground({ children }: WebLatticeBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const spokes = 32;
  const rings = 12;

  return (
    <div className="relative w-full bg-[#0E0B08] overflow-hidden">
      {/* The Lattice SVG Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <motion.div
          className="relative w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] opacity-80"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
          style={{
            maskImage: "radial-gradient(circle at center, black 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 65%)",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold-light">
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
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
