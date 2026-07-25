"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MilestoneMark({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-gold-light/30"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <span className="font-display text-5xl md:text-6xl text-gold-light font-light italic">0</span>
    </div>
  );
}
