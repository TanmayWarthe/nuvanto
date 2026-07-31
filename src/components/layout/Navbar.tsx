"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    return isScrolled
      ? "bg-background/80 backdrop-blur-2xl border-b border-hairline py-4 md:py-4.5 shadow-sm"
      : "bg-transparent border-b border-transparent py-6 md:py-8";
  };

  const getLogoColor = () => {
    if (mobileMenuOpen) return "text-foreground hover:text-gold";
    return "text-foreground hover:text-gold";
  };

  const getNavLinkColor = (isActive: boolean) => {
    return isActive
      ? "text-gold font-semibold"
      : "text-foreground/70 hover:text-foreground";
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
                className={`relative py-1 text-[0.75rem] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${linkColor} group`}
              >
                <span>{link.name}</span>
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-deep shadow-[0_0_10px_rgba(201,162,39,0.5)] rounded-full transition-all duration-300 ease-out ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-75"
                  }`} 
                  style={{ transformOrigin: "center" }}
                />
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
            className="!py-2.5 !px-6 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 !text-gold !border-gold/40 hover:!border-gold hover:!bg-gold hover:!text-background"
          >
            Start a project
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground focus:outline-none z-50 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] rounded-full inline-block transition-all duration-300 ease-in-out origin-right bg-foreground ${
                mobileMenuOpen ? "w-[120%] -rotate-45 -translate-y-[1px]" : "w-full"
              }`}
            />
            <span
              className={`h-[1.5px] w-4 rounded-full inline-block transition-all duration-200 ease-in-out bg-foreground ${
                mobileMenuOpen ? "opacity-0 w-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] rounded-full inline-block transition-all duration-300 ease-in-out origin-right bg-foreground ${
                mobileMenuOpen ? "w-[120%] rotate-45 translate-y-[1px]" : "w-[70%]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 top-0 z-40 bg-background/98 backdrop-blur-3xl min-h-screen flex flex-col justify-between px-8 pt-28 pb-12 md:hidden transition-opacity duration-500 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

        <nav className="flex flex-col space-y-6">
          {siteConfig.navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <div 
                key={link.name}
                className={`transition-all duration-500 transform ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                style={{ transitionDelay: `${100 + idx * 80}ms` }}
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
              </div>
            );
          })}
        </nav>

        <div 
          className={`space-y-6 pt-8 border-t border-hairline transition-all duration-500 transform ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
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
        </div>
      </div>
    </header>
  );
}
