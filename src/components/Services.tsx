import Link from "next/link";
import { Reveal } from "./Reveal";

const ICON = "h-[22px] w-[22px]";
const services = [
  { title: "Landscape Design", body: "Custom plans that blend native desert plants, shade, and hardscape for beauty that actually works in Tucson heat.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M8 5.2C9.2 3.8 10.5 3 12 3s2.8.8 4 2.2"/></svg>) },
  { title: "Irrigation Systems", body: "Smart drip and spray systems designed for desert efficiency — save water, keep everything green.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 4 7 7 7 11a7 7 0 0 1-14 0c0-4 3-7 7-11z"/></svg>) },
  { title: "Hardscaping & Pavers", body: "Patios, walkways, retaining walls, and fire pits — built to handle the desert sun and monsoon rains.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>) },
  { title: "Weekly Maintenance", body: "Mowing, trimming, blowing, weeding, and seasonal adjustments — your yard stays sharp every week.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14c2 0 2-1.5 4.5-1.5S11 14 13 14s2-1.5 4.5-1.5S20 14 21 14"/><path d="M3 18c2 0 2-1.5 4.5-1.5S11 18 13 18s2-1.5 4.5-1.5S20 18 21 18"/><path d="M12 3v6"/></svg>) },
  { title: "Tree & Shrub Care", body: "Expert pruning, shaping, and removal — including mesquite, palo verde, and all Sonoran natives.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7"/><path d="M9 9V4a3 3 0 1 1 6 0v5"/><path d="M5 14a7 7 0 0 0 14 0c0-3-2.5-6-7-11-4.5 5-7 8-7 11z"/></svg>) },
  { title: "Seasonal Cleanups", body: "Post-monsoon recovery, leaf removal, gravel refresh, and pre-summer prep to keep your property tight.",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>) },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="flex items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow text-sage mb-3">What we do</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight max-w-xl leading-tight">Everything your landscape needs, under one crew.</h2>
        </div>
        <Link href="/services" className="hidden md:inline text-sm font-semibold text-sage whitespace-nowrap hover:text-cactus">All services &rarr;</Link>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 80}>
            <div className="card-hover h-full rounded-2xl border border-ink/[0.08] bg-white p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage/[0.08] text-sage">{s.icon}</div>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
