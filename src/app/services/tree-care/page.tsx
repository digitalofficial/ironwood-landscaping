import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tree & Shrub Care Tucson AZ | Pruning, Trimming & Removal | Ironwood Landscaping",
  description:
    "Tree and shrub care in Tucson, AZ. Expert pruning of mesquite, palo verde, ironwood, and desert natives. Crown thinning, dead wood removal, storm cleanup, and stump grinding.",
  keywords: [
    "tree trimming Tucson AZ",
    "tree pruning Tucson",
    "mesquite tree trimming Tucson",
    "palo verde pruning Tucson",
    "shrub care Tucson",
    "tree removal Tucson AZ",
  ],
  openGraph: {
    title: "Tree & Shrub Care Tucson AZ | Ironwood Landscaping",
    description:
      "Expert tree and shrub care for Tucson desert natives. Mesquite, palo verde, ironwood pruning, storm damage cleanup, and stump grinding by licensed local crews.",
    url: "https://ironwoodlandscaping.com/services/tree-care",
  },
};

const INCLUDES = [
  "Structural pruning & shaping",
  "Crown thinning & canopy lift",
  "Dead & crossing branch removal",
  "Mesquite & palo verde pruning",
  "Ironwood & desert willow care",
  "Shrub rejuvenation pruning",
  "Storm damage assessment",
  "Monsoon prep trimming",
  "Debris haul-away",
  "Stump grinding",
];

const WHY = [
  {
    title: "We prune desert natives correctly",
    body: "Most out-of-state crews over-prune mesquite and palo verde — removing too much live canopy, leaving flush cuts, and causing long-term structural failure. We know Sonoran tree biology.",
  },
  {
    title: "Pre-monsoon is critical in Tucson",
    body: "Tucson&apos;s monsoon winds routinely hit 60+ mph. Improperly thinned trees become sails and fail at the root or trunk. We prune for wind resistance before storm season.",
  },
  {
    title: "No topping, ever",
    body: "Topping destroys a tree&apos;s structure, invites disease, and creates liability. We refuse the practice and will explain why — and what the right cut looks like instead.",
  },
  {
    title: "Fast storm response",
    body: "When a monsoon drops a limb on your block wall at 10 PM, we have an emergency line. Storm debris cleanup and assessment within 24 hours for existing customers.",
  },
];

const TREES = [
  { name: "Velvet Mesquite", note: "Structural pruning to prevent split crotches; remove seed pods in spring" },
  { name: "Blue Palo Verde", note: "Light crown thinning only; hard pruning kills them fast" },
  { name: "Arizona Ironwood", note: "Slow-growing — every cut matters; minimal intervention approach" },
  { name: "Desert Willow", note: "Annual shaping after bloom; remove dead wood in late winter" },
  { name: "Saguaro Cactus", note: "Arm support, boot inspection, bacterial rot removal" },
  { name: "Ocotillo & Agave", note: "Dead stalk removal, pup separation, bloom care" },
];

export default function TreeCarePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tree & Shrub Care &#9670; Tucson, AZ"
          title="Desert tree care done"
          highlight="the right way."
          subtitle="Expert pruning, shaping, and removal for Tucson's native mesquite, palo verde, ironwood, and desert shrubs — by crews who understand Sonoran species, not just chainsaws."
          seed={3}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-cactus mb-3">What&apos;s included</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
                Healthy trees. Safer<br />property. Every season.
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed text-[15px] max-w-md">
                From structural pruning and pre-monsoon thinning to full removal and stump grinding — we handle all tree and shrub work with proper technique for desert species.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:brightness-105">
                  Get a free tree care quote &rarr;
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

        {/* Desert Species Knowledge */}
        <section className="bg-bark text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow text-cactus/90 mb-3">Species knowledge</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
                Every Sonoran species<br />has different needs.
              </h2>
              <p className="mt-4 text-white/60 text-[15px] leading-relaxed">
                We don&apos;t apply generic tree-trimming rules to desert natives. Here&apos;s how we approach the species most common on Tucson properties.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TREES.map((t, i) => (
                <Reveal key={t.name} delay={i * 60}>
                  <div className="glass h-full rounded-2xl p-5">
                    <span className="text-cactus text-lg leading-none">&#9670;</span>
                    <h3 className="mt-2.5 font-display font-semibold">{t.name}</h3>
                    <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{t.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ironwood */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="mb-12 max-w-xl">
            <p className="eyebrow text-cactus mb-3">Why Ironwood</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
              Pruning for tree health,<br />not just appearances.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <span className="text-cactus text-lg leading-none">&#9670;</span>
                  <h3 className="mt-3 font-display font-semibold text-ink text-lg">{w.title}</h3>
                  <p className="mt-2 text-sm text-ink/55 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Pre-monsoon window<br />fills up fast.</>}
          body="Book your tree thinning before storm season. Free on-site estimate — we&apos;ll tell you exactly what each tree needs and why."
        />
      </main>
      <Footer />
    </>
  );
}
