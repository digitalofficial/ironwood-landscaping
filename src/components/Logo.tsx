import Link from "next/link";

/**
 * Text-based logo lockup for Ironwood Landscaping.
 * Replace with an <Image> when a logo.png is added to /public.
 */
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Ironwood Landscaping — home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage text-white text-lg font-bold font-display">I</span>
      <span className="font-display font-bold text-lg tracking-tight text-ink">
        Iron<span className="text-sage">wood</span>
      </span>
    </Link>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sage text-2xl font-bold font-display shadow-sm">I</span>
      <span className="font-display font-bold text-xl tracking-tight text-white">
        Iron<span className="text-cactus">wood</span>
      </span>
    </span>
  );
}
