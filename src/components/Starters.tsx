import { useState } from "react";
import confetti from "canvas-confetti";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { STARTERS, SPRITES } from "../lib/data";
import { IconBall } from "./Icons";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";
import MouseGlow from "./MouseGlow";

const SPARKS = [
  { top: "12%", left: "18%", delay: "0s" },
  { top: "22%", right: "14%", delay: "0.6s" },
  { bottom: "26%", left: "12%", delay: "1.1s" },
];

export default function Starters() {
  const reduced = usePrefersReducedMotion();
  const [shiny, setShiny] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const chosen = STARTERS.find((s) => s.id === picked);

  const choose = (id: string) => {
    setPicked(id);
    const mon = STARTERS.find((s) => s.id === id)!;
    if (!reduced) {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.62 },
        colors: mon.confetti,
        disableForReducedMotion: true,
      });
    }
    window.setTimeout(() => {
      document
        .getElementById("respuesta-prof")
        ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    }, 60);
  };

  return (
    <section
      id="iniciales"
      className="relative scroll-mt-24 border-t-2 border-pine-800 bg-pine-900/40 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(58% 100% at 50% 0%, rgba(52,211,153,0.13) 0%, transparent 70%)",
        }}
      />

      <MouseGlow
        className="relative mx-auto max-w-6xl px-4 sm:px-6"
        color="rgba(251,191,36,0.08)"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="LABORATORIO DEL PROFESOR ABEDUL"
            title="ELIGE A TU INICIAL"
            desc="Los tres compañeros que te esperan en el maletín del profesor, con sus sprites pixel art tal y como aparecen en combate. Elige con sabiduría: te acompañará hasta la Liga."
          />
          <Reveal delay={200} dir="right">
            <button
              onClick={() => setShiny((v) => !v)}
              aria-pressed={shiny}
              className={`btn-pixel pixel-corners inline-flex items-center gap-3 border-b-4 px-5 py-3 font-term text-sm tracking-[0.25em] ${
                shiny
                  ? "border-ember-500 bg-ember-400 text-pine-950"
                  : "border-pine-700 bg-pine-900 text-fog hover:text-ember-300"
              }`}
            >
              <span className={shiny ? "sparkle-star inline-block" : "inline-block"}>
                ✦
              </span>
              {shiny ? "VARIOCOLOR SÍ" : "VARIOCOLOR NO"}
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STARTERS.map((s, i) => {
            const spr = SPRITES[s.id as keyof typeof SPRITES];
            const isPicked = picked === s.id;
            return (
              <Reveal key={s.id} delay={i * 140} className="h-full">
                <Tilt className="h-full">
                  <article
                    className={`lift group relative flex h-full flex-col overflow-hidden pixel-corners border-2 bg-pine-900 ${
                      isPicked ? "border-gamma-500" : "border-pine-700"
                    }`}
                  >
                    {/* cabecera */}
                    <header className="flex items-center justify-between px-6 pt-5">
                      <span className="font-term text-lg tracking-[0.2em] text-dim">
                        {s.dex}
                      </span>
                      <span
                        className="pixel-corners-sm border px-3 py-1 font-term text-xs font-bold tracking-[0.18em]"
                        style={{
                          color: s.color,
                          borderColor: s.color,
                          background: `${s.color}1f`,
                        }}
                      >
                        {s.type}
                      </span>
                    </header>

                    {/* vitrina del sprite */}
                    <div className="relative mx-4 mt-3">
                      <div
                        className="relative flex h-52 items-center justify-center overflow-hidden pixel-corners-sm"
                        style={{
                          background: `radial-gradient(circle at 50% 42%, ${s.color}38 0%, rgba(6,35,26,0) 70%)`,
                        }}
                      >
                        <img
                          src={shiny ? spr.shiny : spr.front}
                          alt={`Sprite pixel art de ${s.name}${shiny ? " variocolor" : ""}`}
                          className="pixelated floaty relative z-10 w-44 transition-transform duration-300 group-hover:scale-110"
                        />
                        {shiny &&
                          SPARKS.map((sp, k) => (
                            <span
                              key={k}
                              className="sparkle-star absolute z-20 text-lg text-ember-300"
                              style={{ ...sp, animationDelay: sp.delay }}
                              aria-hidden
                            >
                              ✦
                            </span>
                          ))}
                        <span className="absolute bottom-2 right-3 font-term text-xs tracking-[0.2em] text-dim">
                          SPRITE DE COMBATE
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col px-6 py-5">
                      <h3
                        className="font-display text-2xl tracking-wide"
                        style={{ color: s.color }}
                      >
                        {s.name}
                      </h3>
                      <p className="mt-2.5 font-body text-sm leading-relaxed text-fog">
                        {s.desc}
                      </p>

                      <div className="mt-4 space-y-2">
                        {s.stats.map((st, j) => (
                          <div
                            key={st.label}
                            className="grid grid-cols-[46px_1fr_40px] items-center gap-2"
                          >
                            <span className="font-term text-xs tracking-widest text-dim">
                              {st.label}
                            </span>
                            <div className="bar-track h-2.5">
                              <div
                                className="bar-fill h-full"
                                style={{
                                  width: `${Math.min(100, st.value)}%`,
                                  background:
                                    st.value >= 70 ? s.color : "#10b981",
                                  transitionDelay: `${j * 90}ms`,
                                }}
                              />
                            </div>
                            <span className="text-right font-term text-base text-ink">
                              {st.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <footer className="mt-auto flex items-center justify-between gap-3 pt-6">
                        <span className="font-term text-xs tracking-[0.18em] text-dim">
                          {s.ability}
                        </span>
                        <button
                          onClick={() => choose(s.id)}
                          className={`btn-pixel pixel-corners-sm inline-flex items-center gap-2 border-b-4 px-4 py-2.5 text-xs ${
                            isPicked
                              ? "border-gamma-700 bg-gamma-500 text-pine-950"
                              : "border-pine-700 bg-pine-800 text-ink hover:bg-gamma-600 hover:text-pine-950"
                          }`}
                        >
                          <IconBall className="h-3.5 w-3.5" />
                          {isPicked ? "¡ELEGIDO!" : "ELEGIR"}
                        </button>
                      </footer>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        {/* respuesta del profesor */}
        {chosen && (
          <div
            id="respuesta-prof"
            className="pop-in pixel-corners mt-10 border-2 border-gamma-600 bg-pine-900 p-6 sm:p-8"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-term text-sm tracking-[0.3em] text-gamma-400">
                  ▚ PROFESOR ABEDUL
                </p>
                <p className="mt-3 font-display text-xl leading-relaxed text-ink sm:text-2xl">
                  «¡Excelente elección!{" "}
                  <span style={{ color: chosen.color }}>{chosen.name}</span> y tú
                  haréis un gran equipo. Tu aventura por Hoenn comienza ahora.»
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1.5 font-term text-xs tracking-[0.2em] text-fog">
                    REGISTRADO EN LA POKÉDEX
                  </span>
                  <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1.5 font-term text-xs tracking-[0.2em] text-fog">
                    OBJETO: POCIÓN ×5
                  </span>
                  <span className="pixel-corners-sm border border-ember-400/60 bg-pine-950 px-3 py-1.5 font-term text-xs tracking-[0.2em] text-ember-300">
                    MEDALLAS: 0 / 8
                  </span>
                </div>
                <button
                  onClick={() => setPicked(null)}
                  className="link-underline mt-6 font-term text-sm tracking-[0.25em] text-gamma-400 hover:text-gamma-300"
                >
                  ↺ ELEGIR OTRO INICIAL
                </button>
              </div>

              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <div
                    className="pixel-corners-sm flex h-40 w-40 items-center justify-center border-2"
                    style={{
                      borderColor: chosen.color,
                      background: `radial-gradient(circle at 50% 45%, ${chosen.color}35 0%, rgba(6,35,26,0) 72%)`,
                    }}
                  >
                    <img
                      src={
                        shiny
                          ? SPRITES[chosen.id as keyof typeof SPRITES].shiny
                          : SPRITES[chosen.id as keyof typeof SPRITES].front
                      }
                      alt={`Sprite de ${chosen.name}`}
                      className="pixelated bob-slow w-32"
                    />
                  </div>
                  <p className="mt-2 font-term text-xs tracking-[0.25em] text-dim">
                    EN EL EQUIPO
                  </p>
                </div>
                <div className="text-center">
                  <div className="pixel-corners-sm zoom-img h-40 w-40 border-2 border-pine-700 bg-pine-950 p-2">
                    <img
                      src={chosen.img}
                      alt={`Arte oficial de ${chosen.name}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 font-term text-xs tracking-[0.25em] text-dim">
                    ARTE OFICIAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </MouseGlow>
    </section>
  );
}
