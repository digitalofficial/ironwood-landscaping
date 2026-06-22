import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Seasonal Landscape Cleanups Tucson AZ | Monsoon & Spring Prep | Ironwood Landscaping",
  description:
    "Seasonal landscape cleanups in Tucson, AZ. Post-monsoon debris removal, pre-summer preparation, gravel refresh, deep weed treatment, and spring bed cleanup by local crews.",
  keywords: [
    "seasonal cleanup Tucson AZ",
    "post monsoon cleanup Tucson",
    "spring landscape cleanup Tucson",
    "yard cleanup Tucson AZ",
    "monsoon debris removal Tucson",
    "landscape cleanup service Tucson",
  ],
  openGraph: {
    title: "Seasonal Landscape Cleanups Tucson AZ | Ironwood Landscaping",
    description:
      "Post-monsoon debris cleanup, pre-summer prep, gravel refresh, and deep weed treatment in Tucson. Get your property sharp after what the desert threw at it.",
    url: "https://ironwoodlandscaping.com/services/seasonal-cleanups",
  },
};

const INCLUDES = [
  "Post-monsoon debris removal",
  "Downed branch & limb haul-off",
  "Gravel raking & refresh",
  "Deep weed pull & treatment",
  "Bed edging & re-definition",
  "Decomposed granite touch-up",
  "Pre-emergent weed application",
  "Pre-summer plant trimming",
  "Leaf & organic debris removal",
  "Final blow & hardscape clean",
];

const SEASONS = [
  {
    title: "Post-Monsoon Cleanup (Aug–Sep)",
    body: "After Tucson&apos;s monsoon season, properties are littered with downed branches, washed-out gravel, and weeks of debris. We remove everything, re-rake gravel, and assess for damage.",
  },
  {
    title: "Pre-Summer Prep (Apr–May)",
    body: "Before temperatures hit triple digits, plants need a final shaping, drip systems need inspection, and weeds need to be eliminated before the summer heat makes them explode.",
  },
  {
    title: "Fall Reset (Oct–Nov)",
    body: "After summer dormancy, desert plants need shaping, dead material needs removal, and cool-season plants can be introduced. We reset the property for Tucson&apos;s mild winters.",
  },
  {
    title: "One-Time Property Resets",
    body: "Inherited a neglected yard? Rental property that got out of hand? We do full one-time cleanup projects to bring any property from overgrown back to sharp and manageable.",
  },
];

const WHY = [
  {
    title: "Monsoon is unlike any other weather event",
    body: "Tucson&apos;s monsoon dumps 2-3 inches in under an hour, drops limbs, floats gravel across driveways, and deposits debris everywhere. We know exactly what a post-storm cleanup requires.",
  },
  {
    title: "We pull weeds, not just spray",
    body: "Chemical-only weed control doesn&apos;t cut it in Tucson&apos;s soil. We mechanically pull large weeds, treat with targeted pre-emergent, and edge beds so new growth doesn&apos;t immediately return.",
  },
  {
    title: "Gravel work is part of the service",
    body: "Most companies skip the gravel. We rake it back into place, fill low spots, and edge borders so the property looks intentional again — not like a monsoon ran through it.",
  },
  {
    title: "We spot problems early",
    body: "A cleanup visit gives us eyes on your whole property. We flag irrigation damage, pest issues, plant stress, and drainage problems while we&apos;re there — before they become costly repairs.",
  },
];

export default function SeasonalCleanupsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Seasonal Cleanups &#9670; Tucson, AZ"
          title="Back to sharp after"
          highlight="monsoon season."
          subtitle="Post-storm debris removal, gravel refresh, deep weed treatment, and seasonal prep — we get Tucson properties back to looking intentional after whatever the desert threw at them."
          seed={19}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-cactus mb-3">What&apos;s included</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
                A full reset, not<br />a surface sweep.
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed text-[15px] max-w-md">
                We don&apos;t just blow leaves to the curb. Every cleanup includes debris removal, weed treatment, gravel work, edging, and a property walkthrough — so the job is actually done.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:brightness-105">
                  Schedule a cleanup &rarr;
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

        {/* Seasons */}
        <section className="bg-bark text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow text-cactus/90 mb-3">Tucson cleanup calendar</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
                Four times a year your<br />property needs a reset.
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {SEASONS.map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <div className="glass h-full rounded-2xl p-6">
                    <span className="text-cactus text-lg leading-none">&#9670;</span>
                    <h3 className="mt-3 font-display font-semibold text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.body}</p>
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
              We know what monsoon<br />season leaves behind.
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
          heading={<>Post-monsoon slots<br />fill fast. Book early.</>}
          body="Tell us your address and what needs attention — we&apos;ll send a cleanup estimate within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
