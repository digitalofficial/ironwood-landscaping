import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Faq, type QA } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ | Ironwood Landscaping Tucson",
  description:
    "Common questions about landscaping services, pricing, maintenance plans, and coverage across Tucson and the Foothills.",
};

const groups: { title: string; items: QA[] }[] = [
  {
    title: "Service & scheduling",
    items: [
      { q: "How often do you maintain my yard?", a: "Standard service is weekly, on the same day each week. We keep tight routes so your day and your crew stay consistent. Bi-weekly is available for some properties — we'll advise what your landscape actually needs." },
      { q: "Do I need to be home?", a: "No. As long as we have gate access, you never need to be home. We send a photo after every visit so you always know it was done." },
      { q: "Do you work with HOAs?", a: "Yes. We're familiar with most Tucson-area HOA landscape requirements and can work within your community's guidelines." },
      { q: "How do I get started?", a: "Send your property details through the contact form. We'll schedule a free on-site estimate and have a quote to you within one business day." },
    ],
  },
  {
    title: "Pricing & plans",
    items: [
      { q: "Is there a contract?", a: "No long-term contract. Maintenance is month-to-month and you can pause or cancel anytime with about a week's notice." },
      { q: "Why is my quote different from the listed price?", a: "Listed prices are starting points for a standard residential lot. Property size, slope, plant density, and features can adjust the rate — your quote reflects your actual property." },
      { q: "Do you offer one-time services?", a: "Yes — seasonal cleanups, tree trimming, and project work are all available as one-time services with a flat quote." },
    ],
  },
  {
    title: "Design & installation",
    items: [
      { q: "Do you do full landscape redesigns?", a: "Absolutely. We handle design, demolition of old landscaping, grading, irrigation, planting, hardscaping, and lighting — the full transformation." },
      { q: "Do you use native plants?", a: "Primarily. We specialize in Sonoran Desert natives and drought-tolerant species that thrive in Tucson's climate with minimal water." },
      { q: "Can you fix my irrigation system?", a: "Yes. We design, install, repair, and optimize drip and spray irrigation systems. We can also upgrade you to a smart timer." },
    ],
  },
  {
    title: "Coverage",
    items: [
      { q: "What areas do you serve?", a: "Tucson, Catalina Foothills, Oro Valley, Marana, Dove Mountain, Vail, Sahuarita, and Green Valley. If you're nearby and don't see your area, ask — we add stops near our routes regularly." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Good questions"
          title="Everything you might"
          highlight="want to ask."
          subtitle="Straight answers on services, pricing, design, and coverage. Still curious? We're a call or message away."
          seed={23}
        />

        <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <div className="space-y-14">
            {groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 60}>
                <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-4">{g.title}</h2>
                <Faq items={g.items} />
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Didn&apos;t find your<br />answer?</>}
          body="Tell us about your property and we'll get you a real answer — and a free estimate — within one business day."
        />
      </main>
      <Footer />
    </>
  );
}
