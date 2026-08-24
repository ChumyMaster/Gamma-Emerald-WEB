import { useEffect, useState } from "react";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { IMG, ROUTES } from "../lib/data";
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
          eyebrow="MAPA DESBLOQUEADO · VUELO 11"
          title="LA REGIÓN GAMMA"
          desc="Seis zonas confirmadas en el Early Access, conectadas por rutas de hierba alta, túneles imantados y corrientes marinas. Pasa el cursor por la lista para localizarlas en el mapa."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* mapa fijo */}
          <Reveal dir="left" className="lg:sticky lg:top-28 lg:self-start">
            <div className="pixel-corners border-2 border-pine-600 bg-pine-900 p-3">
              <div className="flex items-center justify-between px-1 pb-2.5">
                <span className="font-display text-[8px] text-fog">
                  MAPA DE LA REGIÓN
                </span>
                <span className="font-term text-base tracking-widest text-dim">
                  LAT 11.07 · LON 104.23
                </span>
              </div>
              <div className="pixel-corners-sm relative overflow-hidden border-2 border-pine-700">
                <img
                  src={IMG.map}
                  alt="Mapa pixel art de la región Gamma con sus islas y rutas"
                  className="img-pixel aspect-square w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/55 via-transparent to-pine-950/25" />

                {ROUTES.map((r, i) => (
                  <button
                    key={r.name}
                    onClick={() => setActive(i)}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                    style={{ left: `${r.x}%`, top: `${r.y}%` }}
                    aria-label={`Ver ${r.name}`}
                  >
                    <span
                      className={`block h-3.5 w-3.5 rotate-45 border-2 transition-all duration-300 ${
                        i === active ? "pulse-dot scale-125" : "scale-90 opacity-70"
                      }`}
                      style={{
                        background: i === active ? r.color : "#0d2718",
                        borderColor: r.color,
                        boxShadow:
                          i === active ? `0 0 18px ${r.color}` : "none",
                      }}
                    />
                    <span
                      className={`absolute top-4 left-1/2 -translate-x-1/2 border px-2 py-0.5 font-term text-sm tracking-widest whitespace-nowrap transition-all duration-300 ${
                        i === active
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-1 opacity-0"
                      }`}
                      style={{
                        color: r.color,
                        borderColor: r.color,
                        background: "rgba(5,15,10,0.92)",
                      }}
                    >
                      {r.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between px-1 pt-2.5">
                <span
                  className="flex items-center gap-2 font-term text-lg tracking-widest transition-colors duration-300"
                  style={{ color: route.color }}
                >
                  <IconPin className="h-4 w-4" /> {route.type.toUpperCase()}
                </span>
                <span className="font-term text-lg text-dim">
                  ZONA {String(active + 1).padStart(2, "0")} / 06
                </span>
              </div>
            </div>
          </Reveal>

          {/* lista de zonas */}
          <div className="flex flex-col gap-3">
            {ROUTES.map((r, i) => (
              <Reveal key={r.name} delay={i * 90} dir="right">
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`pixel-corners w-full border-2 p-5 text-left transition-all duration-300 ${
                    i === active
                      ? "translate-x-1 border-gamma-500 bg-pine-850 shadow-[6px_6px_0_rgba(47,224,111,0.22)]"
                      : "border-pine-700 bg-pine-900 hover:border-pine-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-term text-3xl transition-colors duration-300"
                      style={{ color: i === active ? r.color : "#5f8a70" }}
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
                      <p className="mt-0.5 font-term text-base tracking-widest uppercase"
                        style={{ color: r.color }}
                      >
                        {r.type}
                      </p>
                    </div>
                    <span
                      className={`ml-auto font-term text-2xl transition-all duration-300 ${
                        i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
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
                <span>◆ 6 ZONAS CONFIRMADAS</span>
                <span>◆ RUTAS INTERCONECTADAS</span>
                <span>◆ MÁS EN v1.0</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
