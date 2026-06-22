import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Weekly Lawn & Landscape Maintenance Tucson AZ | Ironwood Landscaping",
  description:
    "Weekly landscape maintenance in Tucson, AZ. Mowing, edging, trimming, weed control, and irrigation checks — same crew, same day, photo-documented every visit.",
  keywords: [
    "weekly lawn maintenance Tucson AZ",
    "landscape maintenance Tucson",
    "yard maintenance service Tucson",
    "lawn care Tucson AZ",
    "weekly landscaping Tucson",
    "residential lawn service Tucson",
  ],
  openGraph: {
    title: "Weekly Landscape Maintenance Tucson AZ | Ironwood Landscaping",
    description:
      "Complete weekly landscape maintenance in Tucson. Same crew, same day, photo report after every visit. Mowing, trimming, weed control, and irrigation checks.",
    url: "https://ironwoodlandscaping.com/services/weekly-maintenance",
  },
};

const INCLUDES = [
  "Mowing & precise edging",
  "Shrub & hedge trimming",
  "Desert plant shaping",
  "Weed pulling & pre-emergent",
  "Blow & clean all hardscape",
  "Irrigation system check",
  "Emitter & head inspection",
  "Debris & clipping removal",
  "Photo report after every visit",
  "Same crew every week",
];

const WHY = [
  {
    title: "Same crew, every time",
    body: "No rotating strangers. You get the same team each week who knows your property, your plants, and what &quot;how you like it&quot; actually means.",
  },
  {
    title: "Photo documentation",
    body: "After every visit you get a photo summary. We flag anything unusual — a dead emitter, a diseased plant, pest damage — before it becomes an expensive problem.",
  },
  {
    title: "Desert-aware scheduling",
    body: "Tucson maintenance isn&apos;t one-size-fits-all. We adjust visit timing around monsoon season, pre-summer prep weeks, and post-storm cleanups at no extra charge.",
  },
  {
    title: "No contracts required",
    body: "We earn your business week by week. No long-term lock-in, no cancellation penalties. Stay because the service is excellent — not because you&apos;re trapped.",
  },
];

const WHAT = [
  {
    title: "Every visit checklist",
    items: ["Mow all turf areas", "Edge all borders & hardscape", "Blow walkways, patios, driveways", "Remove all clippings & debris"],
  },
  {
    title: "Plants & beds",
    items: ["Trim & shape all shrubs", "Desert plant maintenance", "Weed beds & gravel areas", "Check for pest or disease signs"],
  },
  {
    title: "Irrigation check",
    items: ["Walk every zone visually", "Clear clogged emitters", "Check spray head alignment", "Flag any leaks for repair"],
  },
  {
    title: "Reporting",
    items: ["Photo summary sent after visit", "Notes on anything flagged", "Direct line to crew lead", "Estimate for any repair items"],
  },
];

export default function WeeklyMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Weekly Maintenance &#9670; Tucson, AZ"
          title="Your yard, always sharp."
          highlight="Every week."
          subtitle="Complete landscape maintenance on a weekly schedule — same crew, same day, photo-documented after every visit. No surprises, no excuses, no chasing us down."
          seed={17}
        />

        {/* What's Included */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-cactus mb-3">What&apos;s included</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight text-ink">
                A complete routine.<br />Not a quick pass.
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed text-[15px] max-w-md">
                Every weekly visit is a full-service routine — not just a mow and go. We treat your property the same way each week, so it stays sharp between visits too.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:brightness-105">
                  Get a maintenance quote &rarr;
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

        {/* Visit Breakdown */}
        <section className="bg-bark text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow text-cactus/90 mb-3">Every visit breakdown</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
                Here&apos;s exactly what happens<br />when we show up.
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT.map((w, i) => (
                <Reveal key={w.title} delay={i * 70}>
                  <div className="glass h-full rounded-2xl p-6">
                    <span className="text-cactus text-lg leading-none">&#9670;</span>
                    <h3 className="mt-3 font-display font-semibold text-lg">{w.title}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {w.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="mt-px text-cactus/70 text-xs">&#9670;</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
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
              Maintenance that earns<br />your trust every week.
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
          heading={<>Stop thinking about<br />your yard every week.</>}
          body="Tell us your property size and schedule preferences — we&apos;ll send a maintenance quote within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
