import { useEffect, useState } from "react";
import { Reveal } from "../lib/motion";
import { FEATURES, IMG, TOOLS } from "../lib/data";
import SectionHead from "./SectionHead";
import MouseGlow from "./MouseGlow";
import Tilt from "./Tilt";

const PHASES = [
  { name: "MORNING", color: "#fbbf24", icon: "☀" },
  { name: "DUSK", color: "#ff8a5c", icon: "◐" },
  { name: "NIGHT", color: "#6ee7b7", icon: "☾" },
  { name: "DAWN", color: "#a78bfa", icon: "✦" },
];

function DayClock() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setPhase((p) => (p + 1) % PHASES.length),
      2400
    );
    return () => window.clearInterval(id);
  }, []);
  const p = PHASES[phase];
  return (
    <div className="mt-5 flex items-center gap-3">
      <div
        className="relative h-12 w-12 border-2 transition-colors duration-700"
        style={{ borderColor: p.color }}
      >
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 50% ${
              phase === 0 ? 62 : phase === 1 ? 38 : 30
            }%, ${p.color}55 0%, transparent 70%)`,
          }}
        />
        <span
          className="absolute inset-0 flex items-center justify-center text-xl transition-colors duration-700"
          style={{ color: p.color }}
        >
          {p.icon}
        </span>
      </div>
      <div>
        <p
          className="font-term text-lg tracking-[0.3em] transition-colors duration-700"
          style={{ color: p.color }}
        >
          {p.name}
        </p>
        <p className="font-term text-sm text-dim">
          Encounters shift with the time
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const big = FEATURES[0];
  const small = FEATURES.slice(1, 5);
  const second = FEATURES.slice(5);

  return (
    <section
      id="novedades"
      className="relative scroll-mt-24 border-t-2 border-pine-800 bg-pine-900/40 py-20 sm:py-28"
    >
      <MouseGlow className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="FICHA TÉCNICA · BUILD 1.13.1"
          title="TODO LO NUEVO DEL REMAKE"
          desc="No es un filtro sobre el original: es Hoenn reconstruido desde cero en Unreal Engine 5, con sistemas que el juego de 2004 nunca tuvo. Esto es lo que trae el Early Access."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* tarjeta grande con screenshot real */}
          <Reveal dir="left" className="md:col-span-2 lg:row-span-2">
            <article className="lift group relative flex h-full flex-col overflow-hidden border-2 border-pine-600 bg-pine-900 hover:border-gamma-600">
              <div className="relative overflow-hidden">
                <img
                  src={big.img}
                  alt={`Captura real del Early Access: ${big.title}`}
                  className="kenburns aspect-[16/10] w-full bg-pine-950 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-900/20 to-transparent" />
                <span className="absolute top-3 left-3 border border-gamma-500 bg-pine-950/90 px-2.5 py-1 font-term text-base tracking-widest text-gamma-400">
                  IN-GAME CAPTURE
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-term text-lg tracking-[0.35em] text-dim">
                  {big.code}
                </p>
                <h3 className="mt-2 font-display text-xs leading-relaxed text-ink sm:text-sm">
                  {big.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-fog sm:text-base">
                  {big.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {big.points.map((pt) => (
                    <li
                      key={pt}
                      className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1.5 font-term text-base text-gamma-300"
                    >
                      ◆ {pt}
                    </li>
                  ))}
                </ul>
                {/* herramientas del autor */}
                <div className="mt-auto pt-6">
                  <p className="mb-2 font-term text-base tracking-[0.3em] text-dim">
                    AUTHOR'S TOOLKIT
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.map((t) => (
                      <span
                        key={t}
                        className="border-b-2 border-ember-400/60 px-1 font-term text-base text-ember-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 4 tarjetas pequeñas */}
          {small.map((f, i) => (
            <Reveal key={f.id} delay={120 + i * 110} dir="right">
              <article className="lift flex h-full flex-col border-2 border-pine-700 bg-pine-900 p-6 hover:border-gamma-600">
                <p className="font-term text-lg tracking-[0.35em] text-dim">
                  {f.code}
                </p>
                <h3 className="mt-2 font-display text-[10px] leading-relaxed text-ink sm:text-[11px]">
                  {f.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                  {f.desc}
                </p>
                {f.id === "daynight" && <DayClock />}
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {f.points.map((pt) => (
                    <li
                      key={pt}
                      className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1 font-term text-base text-gamma-300"
                    >
                      ◆ {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* fila inferior: as + P2P + revanchas */}
          {second.map((f, i) => (
            <Reveal key={f.id} delay={i * 110} dir="up">
              <article className="lift group flex h-full flex-col overflow-hidden border-2 border-pine-700 bg-pine-900 hover:border-gamma-600">
                {f.img && (
                  <div className="relative overflow-hidden">
                    <img
                      src={f.img}
                      alt={`Captura real: ${f.title}`}
                      className="h-32 w-full bg-pine-950 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-900 to-transparent" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-term text-lg tracking-[0.35em] text-dim">
                    {f.code}
                  </p>
                  <h3 className="mt-2 font-display text-[10px] leading-relaxed text-ink sm:text-[11px]">
                    {f.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                    {f.desc}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {f.points.map((pt) => (
                      <li
                        key={pt}
                        className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1 font-term text-base text-gamma-300"
                      >
                        ◆ {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* promo real de la demo */}
        <Reveal delay={150}>
          <figure className="pixel-corners group mt-12 overflow-hidden border-2 border-pine-700 bg-pine-900">
            <div className="overflow-hidden">
              <img
                src={IMG.promoIsland}
                alt="Arte promocional oficial de Gamma Emerald: bienvenida a la isla"
                className="kenburns w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-3">
              <span className="font-term text-lg tracking-widest text-fog">
                ▚ OFFICIAL ART FROM THE GAME PAGE — "WELCOME TO THE ISLAND!"
              </span>
              <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1 font-term text-base text-ember-400">
                100% HANDMADE · NO GENERATIVE AI
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </MouseGlow>
    </section>
  );
}
