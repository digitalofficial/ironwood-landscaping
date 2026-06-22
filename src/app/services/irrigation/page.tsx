import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Irrigation Systems Tucson AZ | Drip & Spray Installation | Ironwood Landscaping",
  description:
    "Drip irrigation design, installation, and repair in Tucson, AZ. Smart controllers, water-efficient drip systems, backflow testing, and seasonal adjustments for desert landscapes.",
  keywords: [
    "irrigation systems Tucson AZ",
    "drip irrigation Tucson",
    "sprinkler system installation Tucson",
    "irrigation repair Tucson",
    "smart irrigation controller Tucson",
    "water efficient irrigation Tucson",
  ],
  openGraph: {
    title: "Irrigation Systems Tucson AZ | Ironwood Landscaping",
    description:
      "Water-smart drip and spray irrigation built for Tucson's desert heat and water restrictions. Design, installation, repair, and smart controller programming.",
    url: "https://ironwoodlandscaping.com/services/irrigation",
  },
};

const INCLUDES = [
  "Full irrigation system design",
  "Drip system installation",
  "Spray zone layout & heads",
  "Smart controller programming",
  "Tucson Water variance compliance",
  "Backflow preventer testing",
  "Leak detection & pressure testing",
  "Emitter & head adjustments",
  "Seasonal schedule updates",
  "Emergency repair response",
];

const WHY = [
  {
    title: "Designed for Tucson Water rules",
    body: "We know Tucson Water's restrictions and tiered rate structure. Every system we design keeps you compliant and in the lowest usage tier possible.",
  },
  {
    title: "Drip-first approach",
    body: "Overhead spray wastes up to 30% of water through evaporation in Tucson's heat. We favor drip for desert plants — water where roots are, not where the sun evaporates it.",
  },
  {
    title: "Monsoon-aware scheduling",
    body: "We program smart controllers with weather-based logic that backs off during monsoon weeks so you&apos;re not irrigating through summer rains.",
  },
  {
    title: "Fast leak response",
    body: "A blown emitter in July can cook a plant in 48 hours. We offer priority repair scheduling for existing customers — no waiting a week on a service queue.",
  },
];

const PROCESS = [
  { n: "01", h: "System audit or new design", p: "We assess your property's zones, plant types, soil, and existing system (if any) before recommending any new equipment." },
  { n: "02", h: "Design & materials quote", p: "You get a zone-by-zone plan, materials list, and flat installation quote. No per-head surprise fees." },
  { n: "03", h: "Installation & programming", p: "Our crew installs all lines, heads, emitters, and programs your smart controller with Tucson-specific seasonal schedules." },
  { n: "04", h: "Test, tune & hand off", p: "We run every zone, check pressure and coverage, adjust heads, and walk you through the controller before we leave." },
];

export default function IrrigationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Irrigation Systems &#9670; Tucson, AZ"
          title="Water smarter in the"
          highlight="Sonoran Desert."
          subtitle="Drip and spray systems engineered for Tucson's heat, water restrictions, and desert plants. We design, install, repair, and keep everything running efficiently year-round."
          seed={13}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-cactus mb-3">What&apos;s included</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
                Every zone dialed in.<br />Not a drop wasted.
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed text-[15px] max-w-md">
                From full new-system installs to repairing an aging system before monsoon season, we handle design, installation, backflow compliance, and smart-timer setup — all in one visit.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:brightness-105">
                  Get a free irrigation quote &rarr;
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
                Irrigation built for 110-degree<br />summers, not Ohio.
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
              From assessment to<br />every emitter flowing.
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
          heading={<>Stop losing water to<br />the Tucson heat.</>}
          body="We&apos;ll audit your current system or design a new one — free quote, no pressure. Response within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
