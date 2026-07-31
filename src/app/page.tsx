import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { Services } from "@/components/sections/Services";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { homeContent } from "@/lib/constants";
import { Divider } from "@/components/ui/Divider";
import { WebLatticeBackground } from "@/components/ui/WebLatticeBackground";


export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <WebLatticeBackground>
        <Hero />
      </WebLatticeBackground>
      <Marquee />
      <StudioIntro />
      <div className="px-6 lg:px-8 max-w-5xl mx-auto"><Divider /></div>
      <Services />
      <WorkPreview />
      <ProcessPreview />
      <CtaBand line={homeContent.ctaBand.line} cta={homeContent.ctaBand.cta} href="/contact" />
    </main>
  );
}

