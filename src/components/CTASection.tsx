import Link from "next/link";
import { Foliage } from "./Foliage";
import { Reveal } from "./Reveal";

export function CTASection({
  heading = (
    <>
      A yard you never<br />have to worry about.
    </>
  ),
  body = "Tell us about your property and we'll send a detailed estimate within one business day.",
}: {
  heading?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sage text-white">
      <Foliage seed={3} opacity={0.35} />
      <div className="relative mx-auto max-w-3xl px-5 py-20 md:py-28 text-center">
        <Reveal as="h2" className="font-display font-bold text-3xl md:text-[2.8rem] tracking-tight leading-[1.08]">
          {heading}
        </Reveal>
        <Reveal as="p" delay={100} className="mt-5 text-white/75 max-w-md mx-auto leading-relaxed">
          {body}
        </Reveal>
        <Reveal delay={180} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-lift rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-sage hover:bg-cactus hover:text-bark">
            Get a free estimate
          </Link>
          <a href="tel:+15200000000" className="btn-lift rounded-full glass px-7 py-3.5 text-[15px] font-semibold text-white hover:border-cactus/60">
            Call (520) 000-0000
          </a>
        </Reveal>
      </div>
    </section>
  );
}
