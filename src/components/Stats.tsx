import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Foliage } from "./Foliage";

const stats = [
  { to: 800, suffix: "+", label: "Tucson properties maintained" },
  { to: 10, suffix: "yrs", label: "Locally owned & operated" },
  { to: 100, suffix: "%", label: "Licensed & insured" },
  { to: 24, suffix: "hr", label: "Estimate turnaround" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-sage text-white">
      <Foliage seed={15} opacity={0.3} />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="font-display text-4xl md:text-5xl font-bold ironwood-text">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/65 leading-snug">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
