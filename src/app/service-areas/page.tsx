import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Service Areas | Ironwood Landscaping Tucson",
  description: "Ironwood Landscaping serves Tucson, Catalina Foothills, Oro Valley, Marana, Dove Mountain, Vail, Sahuarita, and Green Valley.",
};

const areas = [
  { name: "Tucson", desc: "Central, midtown, east side, and south Tucson — the heart of our routes." },
  { name: "Catalina Foothills", desc: "Estate properties, hillside lots, and HOA communities along the Santa Catalinas." },
  { name: "Oro Valley", desc: "From Rancho Vistoso to Steam Pump Ranch — desert-smart maintenance and design." },
  { name: "Marana", desc: "Gladden Farms, Dove Mountain, and the growing northwest corridor." },
  { name: "Dove Mountain", desc: "Luxury desert properties with native plant landscapes and custom hardscaping." },
  { name: "Vail", desc: "Southeast Tucson's growing communities — Rita Ranch, Civano, and beyond." },
  { name: "Sahuarita", desc: "Rancho Sahuarita, Quail Creek, and surrounding neighborhoods." },
  { name: "Green Valley", desc: "Retirement communities, golf properties, and residential maintenance." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Coverage"
          title="Landscaping across"
          highlight="greater Tucson."
          subtitle="We keep our routes tight for reliability. If you're nearby and don't see your area, give us a call — we add stops regularly."
          seed={17}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 80}>
                <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <h2 className="font-display font-semibold text-lg">{a.name}</h2>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-10 text-center text-sm text-ink/55">Don&apos;t see your area? <a href="tel:+15200000000" className="font-semibold text-sage hover:text-cactus">Call us</a> — we likely cover it.</p>
          </Reveal>
        </section>

        <CTASection
          heading={<>In your neighborhood?<br />Let&apos;s get started.</>}
          body="Tell us where you are and what you need — we'll confirm coverage and send a quote within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
