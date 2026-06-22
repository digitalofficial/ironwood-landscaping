import Link from "next/link";
import { Reveal } from "./Reveal";

const points = [
  { h: "Desert-native expertise", p: "We know which plants thrive here, which soils drain right, and how to design for 110-degree summers and monsoon floods." },
  { h: "Photo-documented work", p: "After every maintenance visit or project milestone, you get photos so you can see exactly what was done." },
  { h: "Licensed, insured crew", p: "ROC-licensed, background-checked, on time. We treat your property with the same care we'd give our own." },
  { h: "Transparent, flat-rate pricing", p: "One clear monthly rate for maintenance. Project quotes are detailed, line-by-line — no mystery invoices." },
];

export function WhyIronwood() {
  return (
    <section id="why" className="bg-bark text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-cactus/90 mb-3">Why Ironwood</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">The difference is in what we know about this desert.</h2>
            <p className="mt-5 text-white/65 leading-relaxed max-w-md">Most landscapers transplant ideas from wetter climates. We design and maintain for the Sonoran — because that&apos;s what actually works and lasts.</p>
            <Link href="/contact" className="btn-lift mt-8 inline-flex rounded-full bg-cactus px-6 py-3 text-[15px] font-semibold text-bark hover:bg-white">Get a free estimate</Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((pt, i) => (
              <Reveal key={pt.h} delay={i * 90}>
                <div className="glass h-full rounded-2xl p-5">
                  <div className="text-cactus mb-3">&#9670;</div>
                  <h3 className="font-display font-semibold">{pt.h}</h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{pt.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
