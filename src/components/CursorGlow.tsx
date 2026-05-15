'use client';

import { useEffect, useRef } from 'react';

/**
 * Subtle ambient cursor glow — desktop only.
 * Renders a soft radial gradient that follows the cursor.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices

    const el = glowRef.current;
    if (!el) return;

    let raf: number;
    let mx = -999, my = -999;
    let cx = -999, cy = -999;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });

    const tick = () => {
      // Lerp for smooth lag
      cx += (mx - cx) * 0.1;
      cy += (my - cy) * 0.1;
      el.style.left = `${cx}px`;
      el.style.top  = `${cy}px`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden />;
}
