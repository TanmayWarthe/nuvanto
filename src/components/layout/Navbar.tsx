"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkBg, setIsOverDarkBg] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (pathname === "/") {
        const heroEl = document.getElementById("home-dark-hero");
        if (heroEl) {
          const heroRect = heroEl.getBoundingClientRect();
          // Navbar is ~75px tall. When dark hero bottom is above 75px, navbar is over the light cream section!
          setIsOverDarkBg(heroRect.bottom > 75);
        } else {
          setIsOverDarkBg(scrollY < 750);
        }
      } else {
        setIsOverDarkBg(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Dynamic header background & border styling
  const getHeaderStyles = () => {
    if (isOverDarkBg) {
      return isScrolled
        ? "bg-[#0a0806]/80 backdrop-blur-2xl border-b border-white/[0.08] py-4 md:py-4.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        : "bg-transparent border-b border-transparent py-6 md:py-8";
    } else {
      return isScrolled
        ? "bg-[#FBF7EE]/90 backdrop-blur-2xl border-b border-[#241C10]/10 py-4 md:py-4.5 shadow-[0_8px_30px_rgba(36,28,16,0.06)]"
        : "bg-[#FBF7EE]/70 backdrop-blur-md border-b border-[#241C10]/06 py-6 md:py-8";
    }
  };

  const getLogoColor = () => {
    if (mobileMenuOpen) return "text-ink-text hover:text-gold";
    return isOverDarkBg
      ? "text-[#F3ECDA] hover:text-gold"
      : "text-[#241C10] hover:text-[#A5811C]";
  };

  const getNavLinkColor = (isActive: boolean) => {
    if (mobileMenuOpen || isOverDarkBg) {
      return isActive
        ? "text-gold font-semibold"
        : "text-[#F3ECDA]/70 hover:text-[#F3ECDA]";
    } else {
      return isActive
        ? "text-[#A5811C] font-semibold"
        : "text-[#6B5E48] hover:text-[#241C10]";
    }
  };

  const getButtonStyles = () => {
    if (isOverDarkBg) {
      return "!text-gold !border-gold/40 hover:!border-gold hover:!bg-gold hover:!text-[#0a0806] shadow-[0_0_15px_rgba(201,162,39,0.1)] hover:shadow-[0_0_25px_rgba(201,162,39,0.35)]";
    } else {
      return "!text-[#241C10] !border-[#241C10]/30 hover:!border-[#241C10] hover:!bg-[#241C10] hover:!text-[#F3ECDA] shadow-[0_2px_12px_rgba(36,28,16,0.04)] hover:shadow-[0_6px_20px_rgba(36,28,16,0.15)]";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${getHeaderStyles()}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className={`font-display text-2xl md:text-3xl font-light tracking-tight transition-colors duration-500 flex items-center group ${getLogoColor()}`}
        >
          <span>{siteConfig.name}</span>
          <span className="text-gold font-serif ml-0.5 transition-transform duration-300 group-hover:scale-150 group-hover:rotate-12 inline-block">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9 lg:space-x-12">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            const linkColor = getNavLinkColor(isActive);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-[0.75rem] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${linkColor}`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-nav-line"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-deep rounded-full shadow-[0_0_10px_rgba(201,162,39,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Button
            href="/contact"
            variant="ghost"
            magnetic={true}
            className={`!py-2.5 !px-6 text-[0.72rem] uppercase tracking-[0.18em] font-semibold rounded-full transition-all duration-500 ${getButtonStyles()}`}
          >
            Start a project
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 -mr-2 text-ink-text focus:outline-none z-50 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-end">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`h-[1.5px] rounded-full inline-block transition-colors duration-500 ${
                mobileMenuOpen || isOverDarkBg ? "bg-[#F3ECDA]" : "bg-[#241C10]"
              }`}
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`h-[1.5px] w-4 rounded-full inline-block transition-colors duration-500 ${
                mobileMenuOpen || isOverDarkBg ? "bg-[#F3ECDA]" : "bg-[#241C10]"
              }`}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "70%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`h-[1.5px] rounded-full inline-block transition-colors duration-500 ${
                mobileMenuOpen || isOverDarkBg ? "bg-[#F3ECDA]" : "bg-[#241C10]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-0 z-40 bg-[#0a0806]/98 backdrop-blur-3xl min-h-screen flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col space-y-6">
              {siteConfig.navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`group flex items-baseline space-x-4 text-3xl font-display font-light transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-ink-text hover:text-gold"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-gold/60 group-hover:text-gold">
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="space-y-6 pt-8 border-t border-white/10"
            >
              <div className="space-y-1 text-xs font-mono uppercase tracking-widest text-text-faint">
                <p>Nagpur, India — est. 2026</p>
                <p>{siteConfig.contact.email}</p>
              </div>

              <Button
                href="/contact"
                variant="primary"
                className="w-full !py-4 text-xs font-semibold tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(201,162,39,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a project
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


