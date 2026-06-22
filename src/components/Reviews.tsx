import Link from "next/link";
import { Reveal } from "./Reveal";

const reviews = [
  { quote: "They completely transformed our backyard with native plants and a flagstone patio. It looks incredible and barely uses any water. Best investment we've made on this house.", who: "Foothills homeowner" },
  { quote: "Reliable weekly maintenance crew — yard always looks sharp, and they actually know how to care for desert plants. No more dead saguaros.", who: "Oro Valley" },
  { quote: "Got us a new drip system and cleaned up years of neglect in one week. Fair price, great communication, and the crew was respectful of our property.", who: "Marana" },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow text-sage mb-3 text-center">What Tucson says</p>
        <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight text-center mb-12">Yards we keep looking their best.</h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.who} delay={i * 90}>
            <figure className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
              <div className="text-terra mb-3 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="text-[15px] text-ink/75 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">{r.who}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-center text-sm text-ink/55 mt-8">
          <Link href="/reviews" className="font-semibold text-sage hover:text-cactus">Read more Tucson reviews &rarr;</Link>
        </p>
      </Reveal>
    </section>
  );
}
