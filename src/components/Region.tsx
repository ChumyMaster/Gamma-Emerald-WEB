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
      3600
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
          eyebrow="VUELO REGISTRADO · DE ALFALFA A MALVALONA"
          title="LA RUTA DEL EARLY ACCESS"
          desc="Todo el tramo jugable de la build 1.13.1, reconstruido tile a tile: ocho paradas obligatorias, tres gimnasios y un corte de camino esperando la próxima actualización."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* visor fijo con imagen real */}
          <Reveal dir="left" className="lg:sticky lg:top-28 lg:self-start">
            <div className="pixel-corners border-2 border-pine-600 bg-pine-900 p-3">
              <div className="flex items-center justify-between px-1 pb-2.5">
                <span className="font-display text-[8px] text-fog">
                  VISOR DE ZONA
                </span>
                <span className="font-term text-base tracking-widest text-dim">
                  CAPTURA REAL DEL JUEGO
                </span>
              </div>
              <div className="pixel-corners-sm relative aspect-[4/3] overflow-hidden border-2 border-pine-700 bg-pine-950">
                <img
                  key={route.name}
                  src={route.img}
                  alt={`Captura real de ${route.name} en Gamma Emerald`}
                  className="kenburns absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-transparent to-pine-950/20" />
                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <p
                    className="pixel-corners-sm inline-block border px-2.5 py-1 font-term text-base tracking-widest transition-colors duration-500"
                    style={{ color: route.color, borderColor: route.color, background: "rgba(5,15,10,0.9)" }}
                  >
                    {route.type.toUpperCase()}
                  </p>
                  <h3 className="mt-2 font-display text-sm text-ink sm:text-base">
                    {route.name}
                  </h3>
                  <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-fog">
                    {route.desc}
                  </p>
                </div>
                {/* esquinas de visor */}
                <span className="absolute top-2 left-2 h-5 w-5 border-t-2 border-l-2 border-gamma-400/70" aria-hidden />
                <span className="absolute top-2 right-2 h-5 w-5 border-t-2 border-r-2 border-gamma-400/70" aria-hidden />
                <span className="absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-gamma-400/70" aria-hidden />
                <span className="absolute right-2 bottom-2 h-5 w-5 border-r-2 border-b-2 border-gamma-400/70" aria-hidden />
              </div>
              <div className="flex items-center justify-between px-1 pt-2.5">
                <span className="flex items-center gap-2 font-term text-lg tracking-widest text-dim">
                  <span
                    className="inline-flex"
                    style={{ color: route.color }}
                  >
                    <IconPin className="h-4 w-4" />
                  </span>
                  ZONA {String(active + 1).padStart(2, "0")} /{" "}
                  {String(ROUTES.length).padStart(2, "0")}
                </span>
                <div className="flex gap-1.5">
                  {ROUTES.map((r, i) => (
                    <button
                      key={r.name}
                      onClick={() => setActive(i)}
                      aria-label={`Ir a ${r.name}`}
                      className="h-2 w-4 transition-all duration-300"
                      style={{
                        background:
                          i === active ? route.color : "#143624",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* lista de zonas */}
          <div className="flex flex-col gap-3">
            {ROUTES.map((r, i) => (
              <Reveal key={r.name} delay={(i % 4) * 90} dir="right">
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`pixel-corners flex w-full items-center gap-4 border-2 px-5 py-4 text-left transition-all duration-300 ${
                    i === active
                      ? "translate-x-1 border-gamma-500 bg-pine-850 shadow-[6px_6px_0_rgba(47,224,111,0.22)]"
                      : "border-pine-700 bg-pine-900 hover:border-pine-500"
                  }`}
                >
                  <span
                    className="font-term text-3xl transition-colors duration-300"
                    style={{ color: i === active ? r.color : "#5f8a70" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-display text-[10px] tracking-wide sm:text-[11px] ${
                        i === active ? "text-ink" : "text-fog"
                      }`}
                    >
                      {r.name}
                    </span>
                    <span
                      className="mt-0.5 block font-term text-base tracking-widest uppercase"
                      style={{ color: r.color }}
                    >
                      {r.type}
                    </span>
                  </span>
                  <span
                    className={`font-term text-2xl transition-all duration-300 ${
                      i === active
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                    style={{ color: r.color }}
                  >
                    ▸▸
                  </span>
                </button>
              </Reveal>
            ))}

            <Reveal delay={300} dir="none">
              <div className="pixel-corners mt-2 border-2 border-dashed border-ember-400/50 bg-pine-950 px-5 py-4">
                <p className="font-term text-lg leading-snug text-ember-300">
                  ⚠ BLOQUEO DE CAMINO — «Las rutas más allá de Ciudad
                  Malvalona aún no están listas, entrenadores veloces. ¡Toca
                  esperar al siguiente parche!» — UndreamedPanic
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
