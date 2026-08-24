import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../lib/motion";

const TRAIL = 12;

/**
 * Efectos de cursor: orbe gamma + anillo con retardo, estela de chispas
 * pixeladas y ondas al hacer clic. Solo en punteros finos y con movimiento.
 */
export default function CursorFx() {
  const reduced = usePrefersReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = trailRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!root || !dot || !ring) return;

    root.style.opacity = "1";

    const sparks: HTMLDivElement[] = [];
    for (let i = 0; i < TRAIL; i++) {
      const s = document.createElement("div");
      s.className = "cursor-spark";
      s.style.opacity = "0";
      root.appendChild(s);
      sparks.push(s);
    }

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    const pts = sparks.map(() => ({ x: -100, y: -100 }));
    let hovered = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      hovered = !!t?.closest("a, button, [data-cursor], iframe");
      ring.classList.toggle("cursor-hot", hovered);
      dot.classList.toggle("cursor-hot", hovered);
    };

    const onDown = (e: MouseEvent) => {
      dot.classList.add("cursor-down");
      const r = document.createElement("div");
      r.className = "cursor-ripple";
      r.style.left = `${e.clientX}px`;
      r.style.top = `${e.clientY}px`;
      root.appendChild(r);
      window.setTimeout(() => r.remove(), 650);
    };
    const onUp = () => dot.classList.remove("cursor-down");

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

      let px = mx;
      let py = my;
      for (let i = 0; i < TRAIL; i++) {
        const p = pts[i];
        p.x += (px - p.x) * 0.32;
        p.y += (py - p.y) * 0.32;
        const s = sparks[i];
        s.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        const k = 1 - i / TRAIL;
        s.style.opacity = (k * 0.5).toFixed(2);
        s.style.width = s.style.height = `${Math.max(2, 7 * k)}px`;
        px = p.x;
        py = p.y;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      sparks.forEach((s) => s.remove());
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={trailRef}
      className="pointer-events-none fixed inset-0 z-[90] hidden opacity-0 md:block"
      aria-hidden
    >
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
