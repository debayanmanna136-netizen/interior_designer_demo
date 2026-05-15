/**
 * Continuously scrolling marquee ticker strip between sections.
 * Pure CSS animation — no JS.
 */
const items = [
  'Quiet Luxury',
  'Minimalist Spaces',
  'Bespoke Design',
  'Timeless Craft',
  'Architectural Serenity',
  'Material Elegance',
  'Curated Interiors',
  'Editorial Aesthetics',
];

export default function Ticker() {
  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="ticker-wrap" aria-hidden>
      <div className="ticker-inner">
        {all.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
