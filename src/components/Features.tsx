import { useEffect, useState } from "react";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { FEATURES, IMG } from "../lib/data";
import {
  IconSun,
  IconMoon,
  IconSunset,
  IconBerry,
  IconEgg,
  IconBook,
  IconSpark,
  IconClock,
} from "./Icons";
import SectionHead from "./SectionHead";

const PHASES = [
  { t: "06:12", label: "AMANECER", Icon: IconSun, color: "#ffc857" },
  { t: "12:40", label: "MEDIODÍA", Icon: IconSun, color: "#5dff8f" },
  { t: "18:47", label: "ATARDECER", Icon: IconSunset, color: "#ff7a9e" },
  { t: "23:30", label: "NOCHE", Icon: IconMoon, color: "#b18cff" },
];

const MOVES = [
  "PULSO DRAGÓN",
  "RAYO GAMMA",
  "GARRA UMBRÍA",
  "DANZA LLUVIA",
  "COLA FÉRREA",
  "PODER PASADO",
];

const PANEL =
  "lift pixel-corners relative border-2 border-pine-700 bg-pine-900 p-6 hover:border-gamma-600";

function DayNightCard() {
  const reduced = usePrefersReducedMotion();
  const [p, setP] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setP((v) => (v + 1) % PHASES.length), 2400);
    return () => window.clearInterval(id);
  }, [reduced]);
  const phase = PHASES[p];

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span
          className="pixel-corners-sm flex h-11 w-11 items-center justify-center border-2 border-pine-600 bg-pine-950"
          style={{ color: phase.color }}
        >
          <phase.Icon className="h-5 w-5" />
        </span>
        <span className="font-term text-base tracking-[0.3em] text-dim">N.02</span>
      </div>
      <h3 className="mt-4 font-display text-[11px] leading-relaxed text-ink">
        CICLO DÍA / NOCHE
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-fog">
        El sol sale, cae y las estrellas toman el relevo. Ciertos Pokémon,
        eventos y tiendas solo aparecen según la hora.
      </p>
      <div className="pixel-corners-sm mt-5 border-2 border-pine-700 bg-pine-950 p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-term text-lg text-dim">
            <IconClock className="h-4 w-4" /> RELOJ DE LA REGIÓN
          </span>
          <span
            className="font-term text-3xl transition-colors duration-500"
            style={{ color: phase.color }}
          >
            {phase.t}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span
            className="font-display text-[9px] transition-colors duration-500"
            style={{ color: phase.color }}
          >
            {phase.label}
          </span>
          <span className="flex gap-1.5">
            {PHASES.map((_, i) => (
              <i
                key={i}
                className="h-2 w-2 transition-all duration-300"
                style={{
                  background: i === p ? PHASES[p].color : "#143624",
                  transform: i === p ? "scale(1.35)" : "scale(1)",
                }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [hd2d, berries, breeding] = [
    FEATURES[0],
    FEATURES[2],
    FEATURES[3],
  ];

  return (
    <section
      id="novedades"
      className="relative scroll-mt-24 border-t-2 border-pine-800 bg-pine-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="REGISTRO DE CAMBIOS · BUILD 0.9"
          title="NOVEDADES DEL REMAKE"
          desc="No es un lavado de cara: Gamma Emerald reconstruye la aventura pieza a pieza sobre Unreal Engine y le suma sistemas que el clásico de GBA nunca tuvo."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {/* tarjeta grande HD-2D */}
          <Reveal className="md:col-span-2 lg:col-span-12" dir="up">
            <div className={`${PANEL} group grid overflow-hidden p-0 lg:grid-cols-2`}>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="pixel-corners-sm flex h-11 w-11 items-center justify-center border-2 border-pine-600 bg-pine-950 text-gamma-400">
                    <IconSpark className="h-5 w-5" />
                  </span>
                  <span className="font-term text-base tracking-[0.3em] text-dim">
                    N.01
                  </span>
                </div>
                <h3 className="mt-4 font-display text-sm leading-relaxed text-ink sm:text-base">
                  HD-2D EN <span className="text-gamma-400">UNREAL ENGINE</span>
                </h3>
                <p className="mt-4 max-w-md font-body text-base leading-relaxed text-fog">
                  {hd2d.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {hd2d.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 font-term text-xl text-gamma-300"
                    >
                      <span className="h-1.5 w-1.5 bg-ember-400" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-56 overflow-hidden border-t-2 border-pine-700 lg:border-t-0 lg:border-l-2">
                <img
                  src={IMG.town}
                  alt="Ciudad del remake al atardecer, en estilo HD-2D"
                  className="img-pixel absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 to-transparent" />
                <span className="pixel-corners-sm absolute bottom-3 left-3 border border-gamma-500/60 bg-pine-950/90 px-3 py-1.5 font-term text-lg tracking-widest text-gamma-300">
                  CIUDAD PRISMA · 21:04 · LLUVIA GAMMA
                </span>
              </div>
            </div>
          </Reveal>

          {/* día/noche */}
          <Reveal className="lg:col-span-4" delay={80}>
            <div className={PANEL}>
              <DayNightCard />
            </div>
          </Reveal>

          {/* bayas */}
          <Reveal className="lg:col-span-4" delay={180}>
            <div className={`${PANEL} flex h-full flex-col`}>
              <div className="flex items-center justify-between">
                <span className="pixel-corners-sm flex h-11 w-11 items-center justify-center border-2 border-pine-600 bg-pine-950 text-coral-400">
                  <IconBerry className="h-5 w-5" />
                </span>
                <span className="font-term text-base tracking-[0.3em] text-dim">
                  N.03
                </span>
              </div>
              <h3 className="mt-4 font-display text-[11px] leading-relaxed text-ink">
                SISTEMA DE BAYAS
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                {berries.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {berries.points.map((pt) => (
                  <span
                    key={pt}
                    className="pixel-corners-sm border border-pine-600 bg-pine-950 px-2.5 py-1 font-term text-base text-aqua-400"
                  >
                    {pt}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* crianza */}
          <Reveal className="md:col-span-2 lg:col-span-4" delay={280}>
            <div className={`${PANEL} flex h-full flex-col`}>
              <div className="flex items-center justify-between">
                <span className="pixel-corners-sm flex h-11 w-11 items-center justify-center border-2 border-pine-600 bg-pine-950 text-ember-400">
                  <IconEgg className="egg-wobble h-5 w-5" />
                </span>
                <span className="font-term text-base tracking-[0.3em] text-dim">
                  N.04
                </span>
              </div>
              <h3 className="mt-4 font-display text-[11px] leading-relaxed text-ink">
                CRIANZA Y HUEVOS
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                {breeding.desc}
              </p>
              <div className="mt-auto flex items-center gap-2 pt-5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <i
                    key={i}
                    className="h-2 w-2"
                    style={{ background: i < 3 ? "#ffc857" : "#143624" }}
                  />
                ))}
                <span className="ml-2 font-term text-base text-dim">
                  PASOS: 5.120 / 5.120
                </span>
              </div>
            </div>
          </Reveal>

          {/* tutores */}
          <Reveal className="lg:col-span-7" delay={120}>
            <div className={`${PANEL} flex h-full flex-col`}>
              <div className="flex items-center justify-between">
                <span className="pixel-corners-sm flex h-11 w-11 items-center justify-center border-2 border-pine-600 bg-pine-950 text-aqua-400">
                  <IconBook className="h-5 w-5" />
                </span>
                <span className="font-term text-base tracking-[0.3em] text-dim">
                  N.05
                </span>
              </div>
              <h3 className="mt-4 font-display text-[11px] leading-relaxed text-ink">
                TUTORES DE MOVIMIENTOS
              </h3>
              <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-fog">
                Maestros repartidos por la región enseñan movimientos exclusivos a
                cambio de escamas y minerales gamma.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {MOVES.map((m, i) => (
                  <span
                    key={m}
                    className={`pixel-corners-sm border px-3 py-1.5 font-term text-lg transition-colors hover:text-pine-950 ${
                      i % 3 === 0
                        ? "border-gamma-500 text-gamma-300 hover:bg-gamma-400"
                        : i % 3 === 1
                          ? "border-ember-400 text-ember-400 hover:bg-ember-400"
                          : "border-aqua-400 text-aqua-400 hover:bg-aqua-400"
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ficha técnica */}
          <Reveal className="lg:col-span-5" delay={220}>
            <div className={`${PANEL} flex h-full flex-col`}>
              <h3 className="font-display text-[11px] text-ink">
                FICHA DEL <span className="text-ember-400">FANGAME</span>
              </h3>
              <dl className="mt-5 space-y-3 font-term text-xl">
                {[
                  ["AUTOR", "UndreamedPanic", "text-gamma-300"],
                  ["MOTOR", "Unreal Engine · HD-2D", "text-fog"],
                  ["BASE", "Reimaginación de Pokémon Esmeralda", "text-fog"],
                  ["ESTADO", "Early Access · v0.9", "text-ember-400"],
                  ["PRECIO", "Gratis, sin ánimo de lucro", "text-gamma-300"],
                ].map(([k, v, c]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-pine-700 pb-2"
                  >
                    <dt className="text-dim">{k}</dt>
                    <dd className={`text-right ${c}`}>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto pt-5">
                <div className="flex items-baseline justify-between font-term text-lg">
                  <span className="text-dim">VALORACIÓN DE LA COMUNIDAD</span>
                  <span className="text-2xl text-ember-400">★ 4.7 / 5</span>
                </div>
                <div className="bar-track mt-2 h-3">
                  <div
                    className="bar-fill h-full bg-gradient-to-r from-gamma-600 via-gamma-400 to-ember-400"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
