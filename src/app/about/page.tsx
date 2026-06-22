import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Foliage } from "@/components/Foliage";

export const metadata: Metadata = {
  title: "About | Ironwood Landscaping Tucson",
  description:
    "Locally owned, licensed landscape design and maintenance for Tucson and the Foothills. Meet the crew that treats your yard like our own.",
};

const stats = [
  { to: 800, suffix: "+", label: "Properties maintained" },
  { to: 10, suffix: "yrs", label: "Serving Tucson" },
  { to: 100, suffix: "%", label: "Licensed & insured" },
  { to: 24, suffix: "hr", label: "Estimate turnaround" },
];

const values = [
  { h: "Show up, every time", p: "Same crew, same day each week. If we say Thursday, it's Thursday — and you'll have a photo to prove it." },
  { h: "Know the desert", p: "We don't guess what works here. Ten years in Tucson means we know the soil, the sun angles, the monsoons, and the plants that actually thrive." },
  { h: "Do the whole job", p: "No partial visits, no skipped edges. Every service is the complete routine, documented start to finish." },
  { h: "Treat it like ours", p: "Gates latched, cleanup done, zero damage. Locally owned means your property is personal to us." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our story"
          title="Landscaping built the"
          highlight="Tucson way."
          subtitle="We started Ironwood because Tucson deserved a landscaping crew that actually knows the desert, shows up on time, and does the full job every single visit."
          seed={13}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            <Reveal>
              <p className="eyebrow text-sage mb-3">Why we exist</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight">
                The desert is hard on landscapes. We make it look easy.
              </h2>
              <div className="mt-5 space-y-4 text-ink/65 leading-relaxed max-w-xl">
                <p>
                  Between monsoon flooding, relentless sun, caliche soil, and water restrictions, a Tucson yard needs expertise — not just a mow-and-blow crew.
                </p>
                <p>
                  We built Ironwood on a simple idea: know the Sonoran Desert, do the complete job, and charge one fair price. Our crews are licensed and background-checked, and we keep routes tight so your service day and your crew stay consistent.
                </p>
                <p>
                  Whether it&apos;s a full backyard redesign in the Foothills or weekly maintenance in Marana, we treat every property like it&apos;s our own.
                </p>
              </div>
            </Reveal>
            <Reveal scale delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-bark">
                <div className="absolute inset-0" style={{ background: "radial-gradient(120% 100% at 30% 10%, #3D6B4E 0%, #264A32 55%, #1A2E1A 85%)" }} />
                <Foliage seed={21} opacity={0.55} />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="self-start glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float">&#9670; ROC Licensed</span>
                  <span className="self-end glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "1.2s" }}>&#9670; Desert Experts</span>
                  <span className="self-start glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "2.4s" }}>&#9670; Locally Owned</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-bark text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="font-display text-4xl md:text-5xl font-bold ironwood-text">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/55">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-sage mb-3">What we stand for</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">Four promises we don&apos;t break.</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.h} delay={(i % 2) * 90}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-7">
                  <div className="mb-3 text-cactus text-xl">&#9670;</div>
                  <h3 className="font-display font-semibold text-lg">{v.h}</h3>
                  <p className="mt-2 text-[15px] text-ink/60 leading-relaxed">{v.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Meet your new<br />landscape crew.</>}
          body="Locally owned, licensed, and built for the desert. Let's get your property on a plan that just works."
        />
      </main>
      <Footer />
    </>
  );
}
