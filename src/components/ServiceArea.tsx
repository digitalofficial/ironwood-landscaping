import Link from "next/link";
import { Reveal } from "./Reveal";

const areas = ["Tucson", "Catalina Foothills", "Oro Valley", "Marana", "Dove Mountain", "Vail", "Sahuarita", "Green Valley"];

export function ServiceArea() {
  return (
    <section id="area" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="eyebrow text-sage mb-3">Where we work</p>
        <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">Serving Tucson &amp; the surrounding desert.</h2>
        <p className="mt-4 text-ink/60 leading-relaxed">From the Catalina Foothills to Green Valley — if you&apos;re nearby and not listed, give us a call.</p>
      </Reveal>
      <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-2.5">
        {areas.map((a) => (
          <span key={a} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:border-cactus/50 hover:text-sage">{a}</span>
        ))}
      </Reveal>
      <Reveal delay={140} className="mt-8 text-center">
        <Link href="/service-areas" className="text-sm font-semibold text-sage hover:text-cactus">See all service areas &rarr;</Link>
      </Reveal>
    </section>
  );
}
