import { homeContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services() {
  const servicesContent = {
    eyebrow: "What we do",
    heading: "Three kinds of work, done properly.",
    cards: homeContent.servicesPreview
  };

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 md:py-16">
      <section className="bg-background border border-hairline py-16 md:py-20 px-8 lg:px-16">
        <div className="mb-14 md:mb-20 text-left max-w-2xl">
          <RevealOnScroll>
            <SectionEyebrow>{servicesContent.eyebrow}</SectionEyebrow>
            <h2 className="text-3xl md:text-[2.5rem] font-body text-text-primary leading-tight text-balance">
              {servicesContent.heading}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesContent.cards.map((card, i) => (
            <RevealOnScroll key={i} delay={0.1 * i} className="h-full">
              <div className="h-full p-8 md:p-10 rounded-2xl bg-surface transition-transform duration-300 hover:-translate-y-1 flex flex-col">
                <span className="font-body text-sm md:text-base font-medium text-gold-deep mb-8 block">{card.index}</span>
                <h3 className="font-body text-base md:text-lg text-text-primary mb-4">{card.title}</h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-auto font-light">{card.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
