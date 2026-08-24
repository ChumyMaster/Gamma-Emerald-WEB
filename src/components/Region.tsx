import { useEffect, useState } from "react";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { ROUTES } from "../lib/data";
import { IconPin } from "./Icons";
import SectionHead from "./SectionHead";

export default function Region() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % ROUTES.length),
      3200
    );
    return () => window.clearInterval(id);
  }, [reduced, paused]);

  const route = ROUTES[active];

  return (
    <section
      id="region"
      className="relative scroll-mt-24 border-t-2 border-pine-800 bg-pine-900/40 py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="ROUTE MAP UNLOCKED · FLY 11"
          title="THE OPEN WORLD"
          desc="Six confirmed stops in the Early Access, from Littleroot Town to Mauville City. Hover the list — or let it run — to preview each location with a real in-game capture."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* capture viewer */}
          <Reveal dir="left" className="lg:sticky lg:top-28 lg:self-start">
            <div className="pixel-corners border-2 border-pine-600 bg-pine-900 p-3">
              <div className="flex items-center justify-between px-1 pb-2.5">
                <span className="font-display text-[8px] text-fog">
                  HOENN · HD-2D CAPTURE
                </span>
                <span className="font-term text-base tracking-widest text-dim">
                  SECTOR {String(active + 1).padStart(2, "0")} / 06
                </span>
              </div>

              <div className="pixel-corners-sm relative aspect-[4/3] overflow-hidden border-2 border-pine-700 bg-pine-950">
                {ROUTES.map((r, i) => (
                  <img
                    key={r.name}
                    src={r.img}
                    alt={`${r.name} in-game capture`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      i === active
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-pine-950/20" />

                {/* location label */}
                <div
                  key={active}
                  className="absolute bottom-3 left-3 transition-all duration-500"
                >
                  <span
                    className="tag-tilt inline-block border-2 px-4 py-1.5 font-display text-xs text-pine-950"
                    style={{ background: route.color, borderColor: route.color }}
                  >
                    {route.name}
                  </span>
                </div>

                {/* scan sweep */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 overflow-hidden opacity-30">
                  <div className="scan-sweep h-16 w-full bg-gradient-to-b from-transparent via-gamma-400/30 to-transparent" />
                </div>
              </div>

              <div className="flex items-center justify-between px-1 pt-2.5">
                <span
                  className="flex items-center gap-2 font-term text-lg tracking-widest transition-colors duration-300"
                  style={{ color: route.color }}
                >
                  <span className="inline-flex" style={{ color: route.color }}>
                    <IconPin className="h-4 w-4" />
                  </span>
                  {route.type.toUpperCase()}
                </span>
                <span className="flex gap-1.5" aria-hidden>
                  {ROUTES.map((_, i) => (
                    <i
                      key={i}
                      className={`h-1.5 w-4 rounded-full transition-all duration-300 ${
                        i === active ? "w-7" : ""
                      }`}
                      style={{
                        background: i === active ? route.color : "#14503a",
                      }}
                    />
                  ))}
                </span>
              </div>
            </div>
          </Reveal>

          {/* locations list */}
          <div className="flex flex-col gap-3">
            {ROUTES.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} dir="right">
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  data-cursor
                  className={`pixel-corners w-full border-2 p-5 text-left transition-all duration-300 ${
                    i === active
                      ? "translate-x-1 border-gamma-500 bg-pine-850 shadow-[0_18px_38px_-16px_rgba(16,185,129,0.4)]"
                      : "border-pine-700 bg-pine-900 hover:border-pine-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-term text-3xl transition-colors duration-300"
                      style={{ color: i === active ? r.color : "#6f9a85" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-display text-[10px] tracking-wide sm:text-[11px] ${
                          i === active ? "text-ink" : "text-fog"
                        }`}
                      >
                        {r.name}
                      </h3>
                      <p
                        className="mt-0.5 font-term text-base uppercase tracking-widest"
                        style={{ color: r.color }}
                      >
                        {r.type}
                      </p>
                    </div>
                    <span
                      className={`ml-auto font-term text-2xl transition-all duration-300 ${
                        i === active
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                      style={{ color: r.color }}
                    >
                      ▸▸
                    </span>
                  </div>
                  <div
                    className={`grid transition-all duration-400 ${
                      i === active ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="font-body text-sm leading-relaxed text-fog">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}

            <Reveal delay={540} dir="none">
              <p className="mt-2 flex flex-wrap gap-x-6 gap-y-1 px-1 font-term text-lg text-dim">
                <span>◆ 6 LOCATIONS CONFIRMED</span>
                <span>◆ ROUTES INTERCONNECTED</span>
                <span>◆ MORE IN v2.0</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
