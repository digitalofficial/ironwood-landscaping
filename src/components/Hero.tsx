import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop&crop=center"
          alt="Beautiful two-story home with lush green landscaped front yard in Tucson"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-12 w-full mt-10">
        {/* Content card — blurred on mobile, transparent on desktop */}
        <div className="max-w-2xl text-white bg-black/40 backdrop-blur-md ring-1 ring-white/10 rounded-3xl p-6 sm:p-8 lg:bg-transparent lg:backdrop-blur-none lg:ring-0 lg:rounded-none lg:p-0">
          <p className="eyebrow text-cactus mb-4">Tucson&apos;s Landscape Experts</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
            Landscapes Built<br />
            for the <span className="font-serif italic font-normal text-cactus">Sonoran Desert.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl drop-shadow">
            Design, installation, and year-round maintenance from a crew that understands Tucson&apos;s soil, sun, and monsoons. We build outdoor spaces that thrive.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-cactus text-bark px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cactus/30"
            >
              Get a Free Estimate
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a
              href="tel:+15200000000"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              (520) 000-0000
            </a>
          </div>
        </div>

        {/* Bottom-right social proof card — desktop only */}
        <div className="hidden lg:block absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-72 text-white">
          <div className="text-4xl font-bold mb-1 font-display">800+</div>
          <p className="font-medium mb-3">Properties Maintained in Tucson</p>

          {/* Avatar stack + stars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" className="w-10 h-10 rounded-full border-2 border-white/80 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="" className="w-10 h-10 rounded-full border-2 border-white/80 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="" className="w-10 h-10 rounded-full border-2 border-white/80 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="" className="w-10 h-10 rounded-full border-2 border-white/80 object-cover" />
            </div>
            <div>
              <div className="flex gap-0.5 text-yellow-400">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <p className="text-xs text-white/60 mt-0.5">5.0 &middot; 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
