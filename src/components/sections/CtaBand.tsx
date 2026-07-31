import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface CtaBandProps {
  line: string;
  cta: string;
  href: string;
}

export function CtaBand({ line, cta, href }: CtaBandProps) {
  return (
    <section className="bg-ink py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-10 max-w-3xl text-balance leading-tight">
            {line}
          </h2>
          <Button href={href} variant="ghost" className="!px-12 !py-5 text-sm tracking-widest uppercase !text-ink !bg-gold hover:!bg-white hover:!text-ink transition-colors duration-500 border-none shadow-2xl shadow-gold/20">
            {cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
