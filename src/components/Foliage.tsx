/** Organic texture overlay — replaces the pool site's water caustics with an earthy, botanical noise pattern. */
export function Foliage({ seed = 7, opacity = 0.5 }: { seed?: number; opacity?: number }) {
  const id = `foliage-${seed}`;
  return (
    <div className="foliage" aria-hidden="true" style={{ opacity }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.02" numOctaves={3} seed={seed} stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.24  0 0 0 0 0.42  0 0 0 0 0.27  0 0 0 12 -5" />
        </filter>
        <rect width="600" height="600" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}
