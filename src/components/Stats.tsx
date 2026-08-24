import { useEffect, useRef, useState } from "react";
import { STATS } from "../lib/data";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";

function useCountUp(target: number, active: boolean, duration = 1500) {
  const reduced = usePrefersReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setV(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      setV(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration, reduced]);
  return v;
}

function StatItem({
  value,
  decimals = 0,
  suffix,
  label,
  delay,
}: {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const v = useCountUp(value, active);
  const text =
    decimals > 0 ? v.toFixed(decimals).replace(".", ",") : String(Math.round(v));

  return (
    <Reveal delay={delay} className="h-full">
      <div
        ref={ref}
        className="group flex h-full flex-col items-center justify-center gap-1.5 px-4 py-8 text-center"
      >
        <p className="font-display text-4xl text-ink transition-all duration-300 group-hover:scale-110 group-hover:text-gamma-400 sm:text-5xl">
          {text}
          <span className="text-gamma-500">{suffix}</span>
        </p>
        <p className="font-term text-sm tracking-[0.28em] text-fog">{label}</p>
      </div>
    </Reveal>
  );
}

export default function StatsBar() {
  return (
    <section className="relative z-10 border-y-2 border-pine-800 bg-pine-900/70">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x-2 divide-pine-800 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <StatItem
            key={s.label}
            value={s.value}
            decimals={s.decimals}
            suffix={s.suffix}
            label={s.label}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
}
