import { homeContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function WorkPreview() {
  const content = homeContent.workPreview;
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-hairline mt-8">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden bg-background border border-hairline relative aspect-[4/3] shadow-sm group">
              <Image 
                src={content.image}
                alt={content.heading}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="order-1 lg:order-2">
            <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-display text-text-primary leading-tight text-balance mb-6">
              {content.heading}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light mb-8 max-w-md">
              {content.body}
            </p>
            <Button href="/work" variant="primary">
              {content.linkText}
            </Button>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
