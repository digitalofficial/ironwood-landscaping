import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hardscaping & Pavers Tucson AZ | Patios, Walls & Outdoor Living | Ironwood Landscaping",
  description:
    "Hardscaping and paver installation in Tucson, AZ. Patio pavers, retaining walls, flagstone, fire pits, and outdoor kitchens built to handle desert heat and monsoon storms.",
  keywords: [
    "hardscaping Tucson AZ",
    "paver patio Tucson",
    "retaining wall Tucson",
    "flagstone patio Tucson",
    "outdoor kitchen Tucson",
    "fire pit installation Tucson AZ",
  ],
  openGraph: {
    title: "Hardscaping & Pavers Tucson AZ | Ironwood Landscaping",
    description:
      "Paver patios, retaining walls, fire pits, and outdoor kitchens built for Tucson's desert climate. Materials that handle 115-degree summers without cracking.",
    url: "https://ironwoodlandscaping.com/services/hardscaping",
  },
};

const INCLUDES = [
  "Paver patio design & installation",
  "Flagstone & natural stone work",
  "Retaining & decorative seat walls",
  "Walkways & entry paths",
  "Fire pits & outdoor fireplaces",
  "Outdoor kitchen construction",
  "Concrete block & CMU walls",
  "Drainage & grading solutions",
  "Decomposed granite finishing",
  "Outdoor lighting integration",
];

const WHY = [
  {
    title: "Materials rated for desert extremes",
    body: "We only spec pavers and stone rated for extreme thermal cycling — Tucson's 50-degree temperature swings between night and day cause inferior materials to crack within a season.",
  },
  {
    title: "Monsoon drainage built in",
    body: "Every patio and wall project includes proper grading and drainage channels. We&apos;ve seen what happens when hardscape is installed without it — pools, shifting, and failed bases.",
  },
  {
    title: "Zero subcontractors",
    body: "Our crews are trained in-house on paver installation, stone work, and wall construction. No day-labor subcontractors who disappear when something shifts.",
  },
  {
    title: "Structural permits when required",
    body: "We handle Tucson permitting for retaining walls, gas fire pits, and outdoor kitchens. You don&apos;t chase paperwork — we do.",
  },
];

const PROCESS = [
  { n: "01", h: "Site consultation", p: "We assess grading, drainage, sun orientation, and how you want to use the space before recommending any material or layout." },
  { n: "02", h: "Design & material selection", p: "You see a layout plan and choose from paver styles, stone types, and finishes. We price it line-by-line so you know exactly what you&apos;re getting." },
  { n: "03", h: "Base prep & installation", p: "Proper base compaction is everything. We excavate, compact, and install per manufacturer specs — no shortcuts that cause settling later." },
  { n: "04", h: "Finishing & cleanup", p: "Polymeric sand, edge restraints, sealing if requested, final grading, and a full site cleanup before we hand over the keys." },
];

export default function HardscapingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Hardscaping & Pavers &#9670; Tucson, AZ"
          title="Outdoor living spaces built for"
          highlight="Tucson summers."
          subtitle="Patios, walls, fire pits, and outdoor kitchens constructed with materials and techniques that handle 115-degree heat and monsoon floods — season after season."
          seed={5}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-cactus mb-3">What&apos;s included</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
                From bare ground to<br />outdoor oasis.
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed text-[15px] max-w-md">
                We design, source materials, pull permits when needed, and build everything in-house. Patios, walls, fire features, and kitchens — all from one crew that knows the desert.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:brightness-105">
                  Get a free hardscape estimate &rarr;
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
                Hardscape that doesn&apos;t crack<br />by its second summer.
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
              From concept to<br />finished outdoor space.
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
          heading={<>Build the backyard<br />you actually use.</>}
          body="Tell us what you have in mind — patio, wall, fire pit, or full outdoor kitchen. Free estimate, no commitment."
        />
      </main>
      <Footer />
    </>
  );
}
