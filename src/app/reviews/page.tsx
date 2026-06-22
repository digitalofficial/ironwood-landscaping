import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews | Ironwood Landscaping Tucson",
  description: "What Tucson homeowners say about Ironwood Landscaping — real reviews from real properties.",
};

const reviews = [
  { quote: "They completely transformed our backyard with native plants and a flagstone patio. It looks incredible and barely uses any water. Best investment we've made on this house.", who: "Sarah M.", area: "Catalina Foothills" },
  { quote: "Reliable weekly maintenance crew — yard always looks sharp, and they actually know how to care for desert plants. No more dead saguaros.", who: "Mike R.", area: "Oro Valley" },
  { quote: "Got us a new drip system and cleaned up years of neglect in one week. Fair price, great communication, and the crew was respectful of our property.", who: "David L.", area: "Marana" },
  { quote: "We hired three landscapers before Ironwood. They're the first crew that actually shows up on the same day every week and does the full job. Night and day difference.", who: "Jennifer K.", area: "Tucson" },
  { quote: "Beautiful paver patio and fire pit — finished on time and on budget. The design process was collaborative and they really understood the desert aesthetic we wanted.", who: "Carlos & Maria T.", area: "Dove Mountain" },
  { quote: "Post-monsoon our yard was destroyed. They had everything cleaned up, re-graded, and looking better than before within a few days. Can't recommend them enough.", who: "Patricia H.", area: "Sahuarita" },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reviews"
          title="What Tucson says about"
          highlight="Ironwood."
          subtitle="Real feedback from real properties across the Tucson metro."
          seed={11}
        />

        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.who} delay={(i % 3) * 90}>
                <figure className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
                  <div className="text-terra mb-3 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <blockquote className="text-[15px] text-ink/75 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4">
                    <div className="text-sm font-semibold text-ink">{r.who}</div>
                    <div className="text-xs text-ink/50">{r.area}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection
          heading={<>Ready to join<br />the list?</>}
          body="Get a free estimate and see why Tucson homeowners switch to Ironwood."
        />
      </main>
      <Footer />
    </>
  );
}
