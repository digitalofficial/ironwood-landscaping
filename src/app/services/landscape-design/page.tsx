import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Landscape Design & Installation Tucson AZ | Ironwood Landscaping",
  description:
    "Custom landscape design and installation in Tucson, AZ. Desert-adapted native plants, drought-tolerant planting, caliche soil prep, and full installation by locally licensed crews.",
  keywords: [
    "landscape design Tucson AZ",
    "landscape installation Tucson",
    "desert landscaping Tucson",
    "native plant landscaping Tucson",
    "drought tolerant landscape design Tucson",
    "Sonoran Desert landscaping",
  ],
  openGraph: {
    title: "Landscape Design & Installation Tucson AZ | Ironwood Landscaping",
    description:
      "Custom desert landscape design built for Tucson's heat, caliche soil, and monsoon seasons. Native plants, gravel, boulders, lighting, and full installation.",
    url: "https://ironwoodlandscaping.com/services/landscape-design",
  },
};

const INCLUDES = [
  "On-site assessment & soil analysis",
  "Caliche layer identification & prep",
  "Custom CAD design plans",
  "Native & drought-tolerant plant selection",
  "Decomposed granite & boulder placement",
  "Landscape lighting design",
  "Shade structures & pergolas",
  "Grading & drainage planning",
  "Full installation by our crew",
  "Post-install walkthrough & care guide",
];

const WHY = [
  {
    title: "We know caliche soil",
    body: "Tucson's rocky caliche layers stump most out-of-state crews. Our team breaks it properly, amends it right, and ensures drainage so your plants actually survive.",
  },
  {
    title: "True desert natives only",
    body: "We spec palo verde, saguaro, agave, brittlebush, and other Sonoran species that thrive with minimal water — not tropical filler that dies by August.",
  },
  {
    title: "Monsoon-ready design",
    body: "Every design accounts for Tucson's intense summer monsoons. We grade for flow, place boulders to slow runoff, and choose hardscape that won't wash out.",
  },
  {
    title: "One crew, start to finish",
    body: "No subcontractors. The team that designs your landscape is the team that installs it — so nothing gets lost in translation.",
  },
];

const PROCESS = [
  { n: "01", h: "Free on-site visit", p: "We walk your property, assess soil conditions, sun exposure, drainage, and listen to your goals and budget." },
  { n: "02", h: "Design & plant plan", p: "You receive a detailed layout with plant selections, materials, lighting, and a line-item quote — no surprises." },
  { n: "03", h: "Installation day", p: "Our crew handles all grading, planting, hardscape, irrigation hookups, and lighting in one coordinated project." },
  { n: "04", h: "Walkthrough & care tips", p: "We walk you through your new landscape and leave a watering schedule tailored to Tucson's seasons." },
];

export default function LandscapeDesignPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Landscape Design & Installation &#9670; Tucson, AZ"
          title="Desert landscape design that"
          highlight="actually thrives."
          subtitle="Custom plans built for Tucson's heat, caliche soil, and monsoon seasons — using native plants and materials that look great and survive without constant babysitting."
          seed={7}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-cactus mb-3">What&apos;s included</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
                Everything from bare dirt<br />to finished landscape.
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed text-[15px] max-w-md">
                We handle every step — site assessment, design drawings, plant sourcing, grading, installation, and a post-project walkthrough. You don&apos;t coordinate anything.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:brightness-105">
                  Get a free design estimate &rarr;
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INCLUDES.map((item) => (
                  <li key={item} className="card-hover flex items-start gap-3 rounded-xl border border-ink/[0.07] bg-white px-4 py-3.5 text-[14px] text-ink/80">
                    <span className="mt-px text-cactus text-base leading-none">&#9670;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <div className="rootline mx-auto max-w-6xl px-5" />

        {/* Why Ironwood */}
        <section className="bg-bark text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow text-cactus/90 mb-3">Why Ironwood</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
                Built for the Sonoran Desert.<br />Not imported from Phoenix.
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 70}>
                  <div className="glass h-full rounded-2xl p-6">
                    <span className="text-cactus text-lg leading-none">&#9670;</span>
                    <h3 className="mt-3 font-display font-semibold text-lg">{w.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="mb-12 max-w-xl">
            <p className="eyebrow text-cactus mb-3">The process</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
              Four steps from concept<br />to completed yard.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((st, i) => (
              <Reveal key={st.n} delay={i * 80}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <div className="font-display text-3xl font-bold text-cactus/80">{st.n}</div>
                  <h3 className="mt-3 font-display font-semibold text-ink">{st.h}</h3>
                  <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{st.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Ready to transform your<br />Tucson property?</>}
          body="Send us your address and goals — we'll schedule a free on-site design consultation within 48 hours."
        />
      </main>
      <Footer />
    </>
  );
}
