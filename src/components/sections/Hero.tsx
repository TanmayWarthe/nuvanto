import { homeContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-16">
      {/* Subtle Background Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold-deep/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* The Zero Watermark */}
      <div className="absolute right-[-15%] md:right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden mix-blend-screen">
        <span className="font-display text-[25rem] md:text-[40rem] text-gold-light opacity-[0.03] leading-none italic font-light tracking-tighter">
          0
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          
          <RevealOnScroll>
            <div className="flex items-center gap-6 mb-10 md:mb-14">
              <div className="h-px w-16 bg-gold/40" />
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-gold">
                {homeContent.hero.eyebrow}
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light leading-[1.02] tracking-tight text-ink-text mb-10 text-balance">
              Your business&apos;s <br className="hidden md:block" />
              <span className="italic text-gold-light">first mile</span> online.
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <p className="text-base md:text-xl text-ink-text/60 leading-relaxed mb-14 max-w-xl font-light">
              {homeContent.hero.subhead}
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3} className="flex flex-col sm:flex-row gap-6">
            <Button href={homeContent.hero.ctaPrimary.href} variant="primary" className="!px-10 !py-4 text-sm tracking-widest uppercase">
              {homeContent.hero.ctaPrimary.label}
            </Button>
            <Button href={homeContent.hero.ctaSecondary.href} variant="ghost" className="!px-10 !py-4 text-sm tracking-widest uppercase !text-ink-text !border-ink-text/30 hover:!border-gold hover:!text-gold hover:!bg-transparent">
              {homeContent.hero.ctaSecondary.label}
            </Button>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
}
