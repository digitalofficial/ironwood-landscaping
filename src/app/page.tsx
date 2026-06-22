import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyIronwood } from "@/components/WhyIronwood";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";

const trust = [
  "ROC Licensed & Insured",
  "Desert-Native Plant Experts",
  "Flat-Rate Maintenance",
  "Photo After Every Visit",
  "10+ Years in Tucson",
  "Locally Owned & Operated",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="border-b border-ink/5 bg-paper">
          <div className="mx-auto max-w-6xl"><Marquee items={trust} /></div>
        </div>
        <Services />
        <WhyIronwood />
        <Stats />
        <ServiceArea />
        <div className="mx-auto max-w-6xl px-5"><div className="rootline opacity-60" /></div>
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
