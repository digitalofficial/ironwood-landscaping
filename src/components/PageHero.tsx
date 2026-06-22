import { Foliage } from "./Foliage";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  seed = 11,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  seed?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-bark text-white">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 22% 0%, #3D6B4E 0%, #264A32 48%, #1A2E1A 80%)" }}
      />
      <Foliage seed={seed} opacity={0.42} />
      <div className="absolute bottom-0 left-0 right-0 rootline" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <Reveal as="p" className="eyebrow text-cactus/90 mb-4">
          {eyebrow}
        </Reveal>
        <Reveal as="h1" delay={80} className="font-display font-bold tracking-[-0.02em] text-[2.3rem] leading-[1.06] md:text-[3.6rem] max-w-3xl">
          {title} {highlight && <span className="ironwood-text">{highlight}</span>}
        </Reveal>
        {subtitle && (
          <Reveal as="p" delay={160} className="mt-5 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  );
}
