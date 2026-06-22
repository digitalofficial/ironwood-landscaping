import Link from "next/link";
import { Foliage } from "./Foliage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bark text-white">
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 18% 0%, #3D6B4E 0%, #264A32 45%, #1A2E1A 78%)" }} />
      <Foliage seed={7} opacity={0.5} />
      <div className="absolute bottom-0 left-0 right-0 rootline" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
          {/* Left — copy */}
          <div>
            <p className="eyebrow text-cactus/90 mb-5">Desert-smart landscaping &middot; Tucson &amp; the Foothills</p>
            <h1 className="font-display font-bold tracking-[-0.02em] text-[2.6rem] leading-[1.05] md:text-[4.2rem] max-w-2xl">
              Landscapes built for the<br /><span className="ironwood-text">Sonoran Desert.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
              Design, installation, and year-round maintenance from a crew that understands Tucson&apos;s soil, sun, and monsoons. We build outdoor spaces that thrive — not just survive.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="rounded-full bg-cactus px-6 py-3.5 text-[15px] font-semibold text-bark hover:bg-white transition-colors">Free estimate</Link>
              <a href="tel:+15200000000" className="rounded-full glass px-6 py-3.5 text-[15px] font-semibold text-white hover:border-cactus/60 transition-colors">Call (520) 000-0000</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/55">
              <span className="flex items-center gap-2"><span className="text-cactus">&#9670;</span> ROC Licensed &amp; Insured</span>
              <span className="flex items-center gap-2"><span className="text-cactus">&#9670;</span> 10+ Years in Tucson</span>
              <span className="flex items-center gap-2"><span className="text-cactus">&#9670;</span> Locally Owned</span>
            </div>
          </div>

          {/* Right — property visual + review */}
          <div className="hidden lg:block relative">
            {/* Property image placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 140% 100% at 50% 20%, #4A7A5A 0%, #2D5A3A 40%, #1A2E1A 90%)" }} />
              <Foliage seed={21} opacity={0.6} />

              {/* Floating credential chips */}
              <div className="absolute top-5 left-5">
                <span className="glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float">&#9670; Desert Natives</span>
              </div>
              <div className="absolute top-16 right-5">
                <span className="glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "1.5s" }}>&#9670; Hardscaping</span>
              </div>
              <div className="absolute top-32 left-8">
                <span className="glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "3s" }}>&#9670; Irrigation</span>
              </div>

              {/* Review card — bottom right */}
              <div className="absolute bottom-5 right-5 left-5">
                <div className="glass rounded-2xl p-4">
                  <div className="text-terra text-sm tracking-wide mb-1.5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p className="text-[13px] text-white/80 leading-relaxed">&ldquo;They completely transformed our backyard with native plants and a flagstone patio. Best investment we&apos;ve made on this house.&rdquo;</p>
                  <p className="mt-2 text-[12px] font-semibold text-white/60">— Foothills homeowner</p>
                </div>
              </div>
            </div>

            {/* Stats bar below the image */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="glass rounded-xl px-3 py-2.5 text-center">
                <div className="font-display font-bold text-lg text-white">800+</div>
                <div className="text-[11px] text-white/50">Properties</div>
              </div>
              <div className="glass rounded-xl px-3 py-2.5 text-center">
                <div className="font-display font-bold text-lg text-white">10yr</div>
                <div className="text-[11px] text-white/50">In Tucson</div>
              </div>
              <div className="glass rounded-xl px-3 py-2.5 text-center">
                <div className="font-display font-bold text-lg text-white">4.9&#9733;</div>
                <div className="text-[11px] text-white/50">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
