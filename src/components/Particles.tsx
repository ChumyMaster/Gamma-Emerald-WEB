import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../lib/motion";

type P = {
  x: number;
  y: number;
  r: number;
  s: number;
  ph: number;
  ci: number;
  a: number;
};

const COLORS = ["52,211,153", "251,191,36", "56,189,248", "167,243,208"];

/** Esporas gamma / luciérnagas que flotan por toda la página y reaccionan al cursor. */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = w * DPR;
      c.height = h * DPR;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const count = Math.min(85, Math.max(40, Math.floor(window.innerWidth / 20)));
    const ps: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 2.3,
      s: 0.14 + Math.random() * 0.42,
      ph: Math.random() * Math.PI * 2,
      ci: Math.floor(Math.random() * COLORS.length),
      a: 0.22 + Math.random() * 0.45,
    }));

    let mx = -9999;
    let my = -9999;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const drawFrame = (interactive: boolean) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        if (interactive) {
          p.y -= p.s;
          p.x += Math.sin(t * 0.012 + p.ph) * 0.35;
          if (p.y < -14) {
            p.y = h + 14;
            p.x = Math.random() * w;
          }
        }
        const d = Math.hypot(p.x - mx, p.y - my);
        const boost = d < 150 ? 1 - d / 150 : 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + boost * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[p.ci]},${Math.min(0.92, p.a + boost * 0.5)})`;
        ctx.shadowColor = `rgba(${COLORS[p.ci]},0.85)`;
        ctx.shadowBlur = 7 + boost * 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const loop = () => {
      t += 1;
      drawFrame(true);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) {
      window.addEventListener("mousemove", onMove);
      raf = requestAnimationFrame(loop);
    } else {
      drawFrame(false);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduced]);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[2] opacity-80"
      aria-hidden
    />
  );
}
