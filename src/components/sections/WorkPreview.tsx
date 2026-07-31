import { homeContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function WorkPreview() {
  const content = homeContent.workPreview;
  return (
    <section className="py-24 md:py-32 bg-transparent border-y border-hairline relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <RevealOnScroll className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3] shadow-2xl shadow-ink-text/5 group p-2 md:p-3 bg-surface border border-hairline/50">
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image 
                  src={content.image}
                  alt={content.heading}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none" />
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.1} className="lg:col-span-5 order-1 lg:order-2 pl-0 lg:pl-4">
            <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-light text-ink-text leading-[1.1] text-balance mb-8">
              {content.heading}
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light mb-12 max-w-md">
              {content.body}
            </p>
            <Button href="/work" variant="primary" className="!px-10 !py-4 shadow-xl shadow-gold/10">
              {content.linkText}
            </Button>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
}
