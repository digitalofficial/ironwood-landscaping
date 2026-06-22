import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="eyebrow text-sage mb-4">Tucson&apos;s Landscape Experts</p>
            <h1 className="font-display font-bold tracking-[-0.02em] text-[2.4rem] leading-[1.08] md:text-[3.6rem] text-ink">
              Your yard deserves a crew that<br className="hidden md:block" />
              <span className="text-sage"> knows this desert.</span>
            </h1>
            <p className="mt-5 max-w-md text-base md:text-[17px] text-ink/60 leading-relaxed">
              Design, installation, and year-round maintenance from a locally owned crew that understands Tucson&apos;s soil, sun, and monsoons.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-lift rounded-full bg-sage px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-bark transition-colors">
                Get a free estimate
              </Link>
              <a href="tel:+15200000000" className="rounded-full border border-ink/15 px-6 py-3.5 text-[15px] font-semibold text-ink/70 hover:border-sage/50 hover:text-sage transition-colors">
                (520) 000-0000
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[13px] text-ink/50">
              <span className="flex items-center gap-1.5"><span className="h-5 w-5 rounded-full bg-sage/10 text-sage grid place-items-center text-[10px]">&#10003;</span> ROC Licensed</span>
              <span className="flex items-center gap-1.5"><span className="h-5 w-5 rounded-full bg-sage/10 text-sage grid place-items-center text-[10px]">&#10003;</span> 10+ Years</span>
              <span className="flex items-center gap-1.5"><span className="h-5 w-5 rounded-full bg-sage/10 text-sage grid place-items-center text-[10px]">&#10003;</span> Insured</span>
            </div>
          </div>

          {/* Right — property image + social proof */}
          <div className="relative">
            {/* Main property image */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(26,46,26,.3)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center"
                alt="Beautiful Tucson home with landscaped front yard"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Subtle gradient overlay at bottom for review card readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Review card — bottom right */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:max-w-[280px]">
                <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                  {/* Avatar stack */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="flex -space-x-2.5">
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-sage/80 grid place-items-center text-white text-[11px] font-bold">JM</div>
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-bark/70 grid place-items-center text-white text-[11px] font-bold">SK</div>
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-terra/80 grid place-items-center text-white text-[11px] font-bold">RL</div>
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-cactus/70 grid place-items-center text-white text-[11px] font-bold">AP</div>
                    </div>
                    <div>
                      <div className="text-terra text-sm tracking-wide leading-none">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                      <div className="text-[11px] text-ink/50 mt-0.5">4.9 avg &middot; 200+ reviews</div>
                    </div>
                  </div>
                  <p className="text-[12.5px] text-ink/70 leading-relaxed">&ldquo;Completely transformed our backyard. Native plants, flagstone patio — looks incredible.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-3 -left-3 md:-left-6 rounded-2xl bg-white shadow-lg px-4 py-3 border border-ink/[0.06]">
              <div className="font-display font-bold text-2xl text-sage">800+</div>
              <div className="text-[11px] text-ink/45">Properties maintained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
