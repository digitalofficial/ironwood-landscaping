import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Landscaping Services in Tucson | Ironwood Landscaping",
  description:
    "Full-service landscape design, hardscaping, irrigation, weekly maintenance, tree care, and seasonal cleanups for Tucson, the Catalina Foothills, Oro Valley, and beyond.",
};

const services = [
  {
    id: "landscape-design",
    title: "Landscape Design & Installation",
    tagline: "From blank canvas to desert masterpiece.",
    body: "Every Tucson yard has unique challenges — caliche soil layers, intense south-facing sun exposure, monsoon drainage paths, and water restrictions. We design with all of it in mind. Our process starts with an on-site soil and sun assessment, moves through custom CAD plans with native plant selections, and ends with a full crew installation that includes grading, planting, hardscape, irrigation hookups, and landscape lighting.",
    tucson: "Tucson's caliche layer — that rock-hard calcium carbonate shelf a few feet below the surface — can kill plants and destroy drainage if you don't plan for it. We test for caliche depth on every project and amend or break through it properly. We also design for the 15+ inches of rain that dumps during monsoon season in just a few weeks, grading every yard to channel water safely away from your foundation.",
    includes: ["On-site soil & sun assessment", "Caliche layer identification & prep", "Custom CAD design plans", "Native & drought-tolerant plant selection", "Decomposed granite & boulder placement", "Landscape lighting design & install", "Shade structures & pergolas", "Grading & monsoon drainage planning", "Full installation by our crew", "Post-install walkthrough & care guide"],
  },
  {
    id: "irrigation",
    title: "Irrigation Systems",
    tagline: "Every drop counts in the desert.",
    body: "Tucson Water has some of the strictest watering restrictions in Arizona — and they enforce them. We design drip and spray irrigation systems that maximize every gallon, keep your plants healthy through 115-degree summers, and stay compliant with local ordinances. From new installs to fixing a 20-year-old system that's leaking underground, we handle the full scope: design, installation, smart controller programming, seasonal adjustments, leak detection, and backflow testing.",
    tucson: "Desert plants don't need much water — but they need it at the right time and in the right amount. Overwatering kills more Tucson landscapes than drought does. We program smart timers with separate zones for native plants (deep, infrequent watering), turf (if you have it), and container plants. We also adjust schedules four times a year to match Tucson's seasonal patterns — your July schedule should look nothing like your January schedule.",
    includes: ["Drip system design & install", "Spray zone optimization", "Smart timer programming (Rachio, Hunter, etc.)", "Leak detection & underground repair", "Seasonal schedule adjustments (4x/year)", "Backflow preventer testing & certification", "Rain sensor installation", "Valve & line replacement", "System audits & water-use reports", "Tucson Water compliance verification"],
  },
  {
    id: "hardscaping",
    title: "Hardscaping & Pavers",
    tagline: "Built for 115 degrees and monsoon downpours.",
    body: "Patios, walkways, retaining walls, fire pits, outdoor kitchens, and seating walls — all built with materials that won't crack in Arizona heat or shift in monsoon floods. We handle everything from design through installation, including proper base prep, drainage integration, and compaction that prevents settling. Whether it's travertine pavers around a pool, a flagstone patio in the Foothills, or a block retaining wall on a slope, we build it to last decades.",
    tucson: "Arizona's extreme temperature swings — from 115°F summer days to near-freezing winter nights — cause concrete and pavers to expand and contract constantly. Cheap base prep leads to cracking and shifting within a year or two. We use a compacted aggregate base with proper depth for Tucson's clay-heavy soils, and we always integrate drainage so monsoon water flows away from your hardscape, not through it.",
    includes: ["Paver patios & walkways", "Retaining & seat walls", "Fire pits & outdoor fireplaces", "Outdoor kitchen builds", "Flagstone & natural stone", "Travertine installation", "Proper aggregate base prep", "Drainage integration", "Landscape border & edging", "Stucco & block wall construction"],
  },
  {
    id: "weekly-maintenance",
    title: "Weekly Maintenance",
    tagline: "Same crew. Same day. Every week.",
    body: "A complete routine every visit — not a drive-by mow-and-blow. We mow, edge, trim, blow all hardscape clean, pull weeds from beds, check your irrigation for leaks and coverage, and document the visit with a photo. You get the same crew on the same day every week, so your yard stays consistently sharp and your crew actually knows your property.",
    tucson: "Tucson yards don't go dormant — they just shift. Bermuda grass surges in summer, weeds explode after monsoon rains, and native plants need different pruning schedules than what you'd find in Phoenix or California. Our crews are trained specifically for Sonoran Desert landscapes. We know when to cut back a Texas Ranger, when to leave a palo verde alone, and how to keep decomposed granite beds looking fresh without disturbing the weed barrier underneath.",
    includes: ["Weekly mow, edge & blow", "Shrub & hedge trimming", "Weed control (beds & gravel)", "Blow & clean all hardscape", "Irrigation visual check every visit", "Photo documentation after every visit", "Seasonal plant care adjustments", "Gravel raking & leveling", "Priority scheduling", "Direct line to your crew lead"],
  },
  {
    id: "tree-care",
    title: "Tree & Shrub Care",
    tagline: "Pruning for health, not just looks.",
    body: "Tucson's desert trees — mesquite, palo verde, ironwood, acacia — grow differently than trees anywhere else. They need structural pruning to handle monsoon winds, crown thinning to reduce sail area, and deadwood removal to prevent storm damage. We also handle shrub rejuvenation (overgrown oleander, Texas sage, etc.), full tree removal with stump grinding, and storm damage cleanup. Every cut is made with the tree's long-term health in mind.",
    tucson: "Monsoon microbursts can push 60+ mph winds through Tucson neighborhoods. Trees that haven't been properly thinned act like sails and either snap or uproot. We structurally prune desert trees to open the canopy — letting wind pass through instead of catching it. We also know which Sonoran native trees self-prune (leave them alone) and which need annual attention. Topping a palo verde — which many crews do — actually weakens it and creates more hazardous growth.",
    includes: ["Structural pruning for wind resistance", "Crown thinning & shaping", "Deadwood & hazard limb removal", "Storm damage cleanup", "Full tree removal", "Stump grinding", "Shrub rejuvenation pruning", "Cactus removal & relocation", "Palm tree trimming", "Annual tree health assessment"],
  },
  {
    id: "seasonal-cleanups",
    title: "Seasonal Cleanups",
    tagline: "Reset your yard after whatever the desert threw at it.",
    body: "Tucson's monsoon season drops branches, floods beds, scatters gravel, and deposits inches of dust and debris across every surface. Our post-monsoon cleanup gets your yard back to sharp — debris removal, re-grading disturbed areas, gravel refresh, deep weeding, bed re-edging, and pre-cooling-season prep. We also do pre-summer prep (irrigation audit, trimming back overgrowth before peak heat) and winter cleanups for leaf drop from deciduous trees.",
    tucson: "After a heavy monsoon season, the average Tucson yard has shifted gravel, eroded bed edges, scattered organic debris, and at least a few broken branches. We see it every August-September. Our seasonal cleanup crews come in with trailers and handle the full reset — we don't just blow debris around, we remove it, re-grade areas that have eroded, and top off gravel beds so everything looks dialed before the cooler months hit.",
    includes: ["Post-monsoon full cleanup", "Debris & branch removal (hauled away)", "Gravel raking, leveling & refresh", "Deep weed treatment & removal", "Bed re-edging & border repair", "Irrigation audit & repair", "Pre-summer overgrowth trimming", "Winter leaf drop cleanup", "Hardscape pressure washing", "Seasonal color plantings (optional)"],
  },
];

const steps = [
  { n: "01", h: "Free on-site estimate", p: "We walk your property, listen to your goals, and deliver a detailed quote within one business day." },
  { n: "02", h: "Design & planning", p: "For projects, we create a custom plan. For maintenance, we set your schedule, crew, and irrigation timing." },
  { n: "03", h: "Build or maintain", p: "Our crew handles everything — installation, planting, hardscape — or starts your weekly service routine." },
  { n: "04", h: "Always reachable", p: "Direct line to your crew lead. Irrigation issue? Storm damage? We handle it fast." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="What we do"
          title="Complete landscape care for"
          highlight="Tucson properties."
          subtitle="Design, build, and maintain — all from one crew that knows the Sonoran Desert inside and out. Licensed, insured, and locally owned."
          seed={9}
        />

        {/* Service deep-dives */}
        {services.map((s, si) => (
          <section key={s.id} id={s.id} className={si % 2 === 1 ? "bg-bark text-white" : ""}>
            <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
                <Reveal>
                  <p className={`eyebrow ${si % 2 === 1 ? "text-cactus/90" : "text-sage"} mb-3`}>{s.tagline}</p>
                  <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight">{s.title}</h2>
                  <p className={`mt-5 leading-relaxed ${si % 2 === 1 ? "text-white/65" : "text-ink/65"}`}>{s.body}</p>
                  <div className={`mt-6 rounded-2xl ${si % 2 === 1 ? "glass" : "border border-ink/[0.08] bg-white"} p-5`}>
                    <h3 className={`font-display font-semibold text-sm mb-2 ${si % 2 === 1 ? "text-cactus" : "text-sage"}`}>Why this matters in Tucson</h3>
                    <p className={`text-[14px] leading-relaxed ${si % 2 === 1 ? "text-white/55" : "text-ink/55"}`}>{s.tucson}</p>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact" className={`btn-lift inline-flex rounded-full px-6 py-3 text-[15px] font-semibold ${si % 2 === 1 ? "bg-cactus text-bark hover:bg-white" : "bg-sage text-white hover:bg-bark"}`}>
                      Get a free estimate
                    </Link>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h3 className={`font-display font-semibold text-lg mb-4 ${si % 2 === 1 ? "text-white" : "text-ink"}`}>What&apos;s included</h3>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {s.includes.map((item) => (
                      <li key={item} className={`flex items-start gap-3 rounded-xl ${si % 2 === 1 ? "glass" : "border border-ink/[0.08] bg-white"} px-4 py-3 text-[14px]`}>
                        <span className={`mt-px ${si % 2 === 1 ? "text-cactus" : "text-cactus"}`}>&#9670;</span>
                        <span className={si % 2 === 1 ? "text-white/80" : "text-ink/75"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
            {si < services.length - 1 && si % 2 === 0 && (
              <div className="mx-auto max-w-6xl px-5"><div className="rootline opacity-60" /></div>
            )}
          </section>
        ))}

        {/* Process */}
        <section className="bg-bark text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-cactus/90 mb-3">How it works</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">From bare dirt to dream yard in four steps.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((st, i) => (
                <Reveal key={st.n} delay={i * 90}>
                  <div className="glass h-full rounded-2xl p-6">
                    <div className="font-display text-3xl font-bold text-cactus/80">{st.n}</div>
                    <h3 className="mt-3 font-display font-semibold">{st.h}</h3>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{st.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="mt-10">
              <Link href="/pricing" className="btn-lift inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:bg-white">
                See plans &amp; pricing &rarr;
              </Link>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
