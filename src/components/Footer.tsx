import Link from "next/link";
import { LogoBadge } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-bark text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <LogoBadge className="mb-5" />
            <p className="text-sm leading-relaxed max-w-xs text-white/50">Desert-smart landscape design, installation, and year-round maintenance for Tucson and the surrounding foothills.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[.2em] text-white/40 mb-4 font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-cactus">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-cactus">Pricing</Link></li>
              <li><Link href="/service-areas" className="hover:text-cactus">Service areas</Link></li>
              <li><Link href="/gallery" className="hover:text-cactus">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[.2em] text-white/40 mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-cactus">About</Link></li>
              <li><Link href="/reviews" className="hover:text-cactus">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-cactus">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-cactus">Free estimate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[.2em] text-white/40 mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+15200000000" className="hover:text-cactus">(520) 000-0000</a></li>
              <li><a href="mailto:hello@ironwoodtucson.com" className="hover:text-cactus">hello@ironwoodtucson.com</a></li>
              <li className="text-white/50">Mon&ndash;Fri &middot; 7am&ndash;5pm</li>
              <li className="text-white/50">ROC #000000 &middot; Insured</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} Ironwood Landscaping &middot; Tucson, AZ</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-cactus">Privacy</Link>
            <span>Licensed &amp; insured &middot; Locally owned</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
