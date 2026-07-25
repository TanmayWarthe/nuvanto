"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const isDarkBg = !isScrolled && pathname === "/";

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ease-out">
      <div 
        className={`
          flex items-center justify-between px-5 py-3 md:px-6 md:py-3.5 rounded-full 
          backdrop-blur-2xl border transition-all duration-500
          ${isScrolled 
            ? "bg-background/80 border-hairline shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
            : isDarkBg 
              ? "bg-white/5 border-white/10 shadow-none" 
              : "bg-black/5 border-black/10 shadow-none"
          }
        `}
      >
        <Link href="/" className={`font-display text-xl md:text-2xl font-light tracking-wide transition-colors duration-300 ${isDarkBg ? "text-ink-text hover:text-gold" : "text-text-primary hover:text-gold"}`}>
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 bg-black/5 dark:bg-white/5 rounded-full px-2 py-1">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            const linkColor = isActive 
              ? isDarkBg ? "text-ink-text" : "text-text-primary"
              : isDarkBg ? "text-ink-text/60 hover:text-ink-text" : "text-text-secondary hover:text-text-primary";
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative px-4 py-2 text-[0.7rem] uppercase tracking-[0.1em] font-medium transition-colors duration-300 ${linkColor}`}
              >
                <span className="relative z-10">
                  {link.name}
                </span>
                {isActive && (
                  <motion.span 
                    layoutId="navbar-active-pill"
                    className={`absolute inset-0 rounded-full ${isDarkBg ? "bg-white/10" : "bg-black/5"}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button 
            href="/contact" 
            variant={isDarkBg && !isScrolled ? "ghost" : "primary"} 
            magnetic={true} 
            className={`shadow-none !py-2.5 !px-6 text-[0.7rem] uppercase tracking-[0.1em] rounded-full transition-all duration-300 ${
              isDarkBg && !isScrolled
                ? "!text-ink-text !border-ink-text/30 hover:!border-gold hover:!text-gold hover:!bg-white/5" 
                : "hover:scale-105"
            }`}
          >
            Start a project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-full transition-colors duration-300 ${isDarkBg && !mobileMenuOpen ? "text-ink-text bg-white/5" : "text-text-primary bg-black/5"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-[-100vh] bg-ink/40 backdrop-blur-md md:hidden -z-10"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 10 }}
              exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border border-hairline rounded-3xl p-6 flex flex-col md:hidden shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 pt-2 pb-8">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className={`text-2xl font-display font-light p-4 rounded-2xl transition-colors ${isActive ? "bg-surface text-gold" : "text-text-primary hover:bg-surface/50 hover:text-gold"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <Button href="/contact" variant="primary" className="w-full !py-4 text-sm tracking-widest uppercase rounded-full" onClick={() => setMobileMenuOpen(false)}>
                Start a project
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
