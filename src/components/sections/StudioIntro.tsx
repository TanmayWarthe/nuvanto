import { homeContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function StudioIntro() {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          <div className="md:col-span-4 lg:col-span-3">
            <RevealOnScroll>
              <SectionEyebrow>The Studio</SectionEyebrow>
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mt-8" />
            </RevealOnScroll>
          </div>
          
          <div className="md:col-span-8 lg:col-span-9 pl-0 md:pl-8 lg:pl-16 md:border-l md:border-hairline">
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-ink-text leading-[1.3] text-balance mb-10 italic">
                &ldquo;{homeContent.studioTeaser}&rdquo;
              </h2>
              <Button href="/studio" variant="ghost" className="!text-gold-deep !border-gold-deep/20 hover:!border-gold hover:!bg-gold/5">
                Read our manifesto
              </Button>
            </RevealOnScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
}
