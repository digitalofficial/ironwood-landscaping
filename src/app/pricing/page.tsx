import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing & Plans | Ironwood Landscaping Tucson",
  description:
    "Flat-rate monthly landscape maintenance plans for Tucson. No contracts, no surprise fees. Choose Essential, Complete, or Premium.",
};

const plans = [
  {
    name: "Essential",
    tag: "Maintenance basics",
    price: "149",
    blurb: "Weekly mowing, edging, and blowing. Best for smaller yards that just need to stay clean.",
    features: ["Weekly mow, edge & blow", "Walkway & patio cleanup", "Weed control (beds)", "Irrigation visual check", "Photo after every visit"],
    featured: false,
  },
  {
    name: "Complete",
    tag: "Most popular",
    price: "229",
    blurb: "Full weekly maintenance with trimming, weeding, and irrigation monitoring. What most Tucson yards need.",
    features: ["Everything in Essential", "Shrub & hedge trimming", "Deep bed weeding", "Irrigation system check & adjust", "Priority scheduling", "Direct line to your crew lead"],
    featured: true,
  },
  {
    name: "Premium",
    tag: "Full-service",
    price: "349",
    blurb: "Complete care plus seasonal deep-cleans, tree trimming, and first-priority project scheduling.",
    features: ["Everything in Complete", "Quarterly tree & shrub pruning", "Seasonal gravel refresh", "Pre-summer & post-monsoon deep-clean", "Same-day emergency response", "Annual landscape health review"],
    featured: false,
  },
];

const faqs = [
  { q: "What about one-time projects?", a: "Design, hardscaping, and installation are quoted per project with a detailed line-by-line estimate. No monthly commitment required for project work." },
  { q: "Is there a contract?", a: "No long-term contract. Maintenance is month-to-month; pause or cancel anytime with a week's notice." },
  { q: "Does the price change with yard size?", a: "Listed prices are starting points for a standard residential lot. Larger properties, HOA common areas, or commercial sites are quoted individually." },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Flat-rate plans, with"
          highlight="zero surprises."
          subtitle="One clear monthly rate. No contracts, no mystery line items. Final pricing depends on lot size and scope — your quote is exact."
          seed={5}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-7 ${
                    p.featured
                      ? "border-cactus/40 bg-bark text-white shadow-[0_30px_70px_-40px_rgba(26,46,26,.8)] lg:-mt-4 lg:mb-0"
                      : "border-ink/[0.08] bg-white"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-cactus px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-bark">
                      {p.tag}
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-xl">{p.name}</h2>
                    {!p.featured && <span className="text-[11px] font-semibold uppercase tracking-wider text-sage/70">{p.tag}</span>}
                  </div>
                  <p className={`mt-2 text-sm leading-relaxed ${p.featured ? "text-white/65" : "text-ink/55"}`}>{p.blurb}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className={`text-sm font-medium ${p.featured ? "text-white/55" : "text-ink/45"}`}>from $</span>
                    <span className="font-display text-5xl font-bold leading-none">{p.price}</span>
                    <span className={`mb-1 text-sm ${p.featured ? "text-white/55" : "text-ink/45"}`}>/mo</span>
                  </div>
                  <ul className={`mt-6 space-y-2.5 text-[14px] ${p.featured ? "text-white/80" : "text-ink/70"}`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className={p.featured ? "text-cactus" : "text-sage"}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`btn-lift mt-7 inline-flex justify-center rounded-full px-6 py-3 text-[15px] font-semibold ${
                      p.featured ? "bg-cactus text-bark hover:bg-white" : "bg-sage text-white hover:bg-bark"
                    }`}
                  >
                    Get my exact quote
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-8 text-center text-sm text-ink/50">
              Prices are starting points for a standard residential lot. Larger properties, slopes, or commercial sites may adjust the rate — we&apos;ll confirm exact pricing in your estimate.
            </p>
          </Reveal>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
            <Reveal as="h2" className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-10">
              Pricing questions, answered.
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 90}>
                  <div className="rounded-2xl border border-ink/[0.08] bg-white p-5 h-full">
                    <h3 className="font-display font-semibold text-[15px]">{f.q}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <p className="mt-8 text-center text-sm text-ink/55">
                More questions? <Link href="/faq" className="font-semibold text-sage hover:text-cactus">Read the full FAQ &rarr;</Link>
              </p>
            </Reveal>
          </div>
        </section>

        <CTASection
          heading={<>Get your exact<br />estimate today.</>}
          body="Send us your property details and we'll reply with precise pricing within one business day — no obligation."
        />
      </main>
      <Footer />
    </>
  );
}
