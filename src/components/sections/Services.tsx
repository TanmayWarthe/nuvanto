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
      <section className="bg-surface/50 border border-hairline py-16 md:py-20 px-8 lg:px-16 rounded-[2rem] shadow-xl shadow-ink-text/5">
        <div className="mb-16 md:mb-24 text-left max-w-3xl">
          <RevealOnScroll>
            <SectionEyebrow>{servicesContent.eyebrow}</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-light text-ink-text leading-[1.1] text-balance">
              {servicesContent.heading}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {servicesContent.cards.map((card, i) => (
            <RevealOnScroll key={i} delay={0.1 * i} className="h-full">
              <div className="group h-full p-10 md:p-12 bg-surface rounded-2xl border border-hairline transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(200,155,83,0.15)] flex flex-col relative overflow-hidden">
                {/* Subtle gold accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-deep to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <span className="font-display italic text-4xl md:text-5xl text-gold/30 mb-10 block transition-colors duration-500 group-hover:text-gold-deep">
                  {card.index}
                </span>
                
                <h3 className="font-body font-medium text-lg md:text-xl text-ink-text mb-4 tracking-tight">{card.title}</h3>
                
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-auto font-light">{card.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
