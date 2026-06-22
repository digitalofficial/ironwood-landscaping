"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const SERVICES = [
  { href: "/services#landscape-design", label: "Landscape Design" },
  { href: "/services#irrigation", label: "Irrigation Systems" },
  { href: "/services#hardscaping", label: "Hardscaping & Pavers" },
  { href: "/services#weekly-maintenance", label: "Weekly Maintenance" },
  { href: "/services#tree-care", label: "Tree & Shrub Care" },
  { href: "/services#seasonal-cleanups", label: "Seasonal Cleanups" },
];

const NAV = [
  { href: "/pricing", label: "Pricing" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 border-ink/10 backdrop-blur-md shadow-[0_8px_30px_-20px_rgba(26,46,26,.5)]"
          : "bg-paper/70 border-transparent backdrop-blur-sm"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <Logo />

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/70">
          {/* Services dropdown */}
          <div className="group relative">
            <Link
              href="/services"
              className="relative flex items-center gap-1 transition-colors hover:text-sage after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cactus after:transition-all hover:after:w-full"
            >
              Services
              <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l4 4 4-4" /></svg>
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-56 rounded-2xl border border-ink/[0.08] bg-paper shadow-[0_12px_40px_-12px_rgba(26,46,26,.22)] overflow-hidden">
                <div className="p-1.5">
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13.5px] text-ink/70 transition-colors hover:bg-sage/[0.07] hover:text-sage">
                      <span className="text-cactus text-[9px] leading-none">&#9670;</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-ink/[0.06] px-3 py-2.5">
                  <Link href="/services" className="text-[12.5px] font-semibold text-sage hover:text-cactus transition-colors">All services &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="relative transition-colors hover:text-sage after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cactus after:transition-all hover:after:w-full">{n.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+15200000000" className="hidden lg:inline text-sm font-semibold text-sage">(520) 000-0000</a>
          <Link href="/contact" className="hidden sm:inline btn-lift rounded-full bg-sage px-4 py-2 text-sm font-semibold text-white hover:bg-bark">Free estimate</Link>
          <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink">
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[680px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto max-w-6xl px-5 pb-6 pt-2 flex flex-col gap-1 text-[15px] font-medium text-ink/80">
          <button onClick={() => setServicesOpen((v) => !v)} className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-sage/[0.06] hover:text-sage text-left w-full">
            <span>Services</span>
            <svg className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l4 4 4-4" /></svg>
          </button>
          <div className={`overflow-hidden transition-[max-height,opacity] duration-200 ${servicesOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="ml-4 border-l-2 border-sage/20 pl-3 flex flex-col gap-0.5 py-1">
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13.5px] text-ink/65 hover:bg-sage/[0.06] hover:text-sage">
                  <span className="text-cactus text-[9px]">&#9670;</span>{s.label}
                </Link>
              ))}
              <Link href="/services" onClick={() => setOpen(false)} className="mt-1 px-2.5 py-1.5 text-[13px] font-semibold text-sage hover:text-cactus">All services &rarr;</Link>
            </div>
          </div>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-sage/[0.06] hover:text-sage">{n.label}</Link>
          ))}
          <Link href="/faq" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-sage/[0.06] hover:text-sage">FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-sage px-4 py-3 text-center font-semibold text-white">Free estimate</Link>
          <a href="tel:+15200000000" className="mt-1 px-3 py-2 text-center text-sm font-semibold text-sage">(520) 000-0000</a>
        </nav>
      </div>
    </header>
  );
}
