import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { STARTERS } from "../lib/data";
import { IconChevron } from "./Icons";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";
import MouseGlow from "./MouseGlow";

const TYPE_COLORS: Record<string, string> = {
  GRASS: "rgba(74,222,128,0.3)",
  FIRE: "rgba(255,138,92,0.3)",
  WATER: "rgba(83,216,255,0.3)",
};

export default function Starters() {
  const reduced = usePrefersReducedMotion();
  const [shiny, setShiny] = useState(false);
  const [picked, setPicked] = useState(-1);
  const panelRef = useRef<HTMLDivElement>(null);

  const chosen = picked >= 0 ? STARTERS[picked] : null;

  const choose = (i: number) => {
    setPicked(i);
    const s = STARTERS[i];
    if (!reduced && typeof confetti === "function") {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: s.confetti,
        disableForReducedMotion: true,
        zIndex: 90,
      });
    }
  };

  useEffect(() => {
    if (picked >= 0 && panelRef.current) {
      panelRef.current.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }, [picked, reduced]);

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
            eyebrow="PROF. BIRCH'S LAB"
            title="CHOOSE YOUR PARTNER"
            desc="The three partners waiting in the professor's case, with their pixel-art battle sprites exactly as they appear in-game. Choose wisely — it will walk beside you all the way to the League."
          />
          <Reveal delay={200} dir="right">
            <button
              onClick={() => setShiny((v) => !v)}
              aria-pressed={shiny}
              data-cursor
              className="pixel-corners group flex items-center gap-3 border-2 border-pine-600 bg-pine-900 px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-400"
            >
              <span
                className={`relative h-6 w-11 rounded-full border-2 transition-colors duration-300 ${
                  shiny ? "border-ember-400 bg-ember-500/30" : "border-pine-600 bg-pine-950"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full transition-all duration-300 ${
                    shiny ? "left-6 bg-ember-300" : "left-0.5 bg-pine-600"
                  }`}
                />
              </span>
              <span className="font-term text-sm tracking-[0.25em] text-fog group-hover:text-ember-300">
                ✦ SHINY MODE
              </span>
            </button>
          </Reveal>
        </div>

        {/* starter cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STARTERS.map((s, i) => {
            const sel = picked === i;
            return (
              <Reveal key={s.name} delay={i * 130} className="h-full">
                <Tilt className="h-full">
                  <article
                    className={`lift group relative flex h-full flex-col overflow-hidden border-2 bg-pine-900 transition-colors duration-300 ${
                      sel ? "border-gamma-400" : "border-pine-700 hover:border-pine-500"
                    }`}
                  >
                    <header className="flex items-center justify-between border-b-2 border-pine-700 px-5 py-3">
                      <span className="font-term text-lg tracking-widest text-dim">
                        {s.dex}
                      </span>
                      <span
                        className="pixel-corners-sm border px-3 py-1 font-term text-xs font-bold tracking-[0.2em]"
                        style={{
                          color: s.color,
                          borderColor: s.color,
                          background: `${s.color}1f`,
                        }}
                      >
                        {s.type}
                      </span>
                    </header>

                    {/* pixel-art sprite showcase */}
                    <button
                      onClick={() => choose(i)}
                      aria-label={`Pick ${s.name} as your partner`}
                      data-cursor
                      className="relative cursor-pointer border-0 bg-transparent p-0 text-left"
                    >
                      <div
                        className="relative flex aspect-[4/3] items-end justify-center overflow-hidden"
                        style={{
                          background: `radial-gradient(52% 68% at 50% 44%, ${
                            TYPE_COLORS[s.type]
                          } 0%, rgba(4,22,15,0) 72%)`,
                        }}
                      >
                        {/* twinkles */}
                        <span
                          className="absolute top-5 left-[16%] text-lg"
                          style={{ color: s.color }}
                          aria-hidden
                        >
                          ✦
                        </span>
                        <span
                          className="sparkle absolute top-12 right-[18%] text-xl"
                          style={{ color: s.color, animationDelay: "0.7s" }}
                          aria-hidden
                        >
                          ✦
                        </span>
                        <span
                          className="sparkle absolute bottom-9 left-[24%] text-sm"
                          style={{ color: s.color, animationDelay: "1.3s" }}
                          aria-hidden
                        >
                          ✧
                        </span>

                        <img
                          key={`${s.id}-${shiny ? "s" : "n"}`}
                          src={shiny ? s.sprites.shiny : s.sprites.front}
                          alt={`${s.name} pixel-art battle sprite`}
                          className="sprite-hop img-pixel relative z-10 -mb-3 h-40 w-auto transition-transform duration-500 group-hover:scale-110 sm:h-44"
                          draggable={false}
                        />
                        <div
                          className="absolute bottom-4 h-5 w-40 rounded-[100%] bg-pine-950/70 blur-[2px]"
                          aria-hidden
                        />
                        {shiny && (
                          <span className="absolute top-3 right-3 border border-ember-400 bg-pine-950/90 px-2 py-0.5 font-term text-xs tracking-widest text-ember-300">
                            ✦ SHINY
                          </span>
                        )}
                      </div>
                    </button>

                    <div className="flex flex-1 flex-col px-5 py-4">
                      <h3 className="font-display text-lg tracking-wide text-ink">
                        {s.name}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-fog">
                        {s.desc}
                      </p>

                      <div className="mt-4 space-y-2">
                        {s.stats.map((st, j) => (
                          <div
                            key={st.label}
                            className="grid grid-cols-[38px_1fr_34px] items-center gap-2"
                          >
                            <span className="font-term text-xs tracking-widest text-dim">
                              {st.label}
                            </span>
                            <div className="bar-track h-2">
                              <div
                                className="bar-fill h-full"
                                style={{
                                  width: `${Math.min(100, Math.round(st.value / 0.8))}%`,
                                  background: s.color,
                                  transitionDelay: `${200 + j * 100}ms`,
                                }}
                              />
                            </div>
                            <span
                              className="text-right font-term text-sm"
                              style={{ color: s.color }}
                            >
                              {st.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <footer className="mt-auto flex items-center justify-between pt-5">
                        <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-2.5 py-1 font-term text-sm text-aqua-400">
                          AB. {s.ability}
                        </span>
                        <button
                          onClick={() => choose(i)}
                          data-cursor
                          className={`btn-pixel pixel-corners-sm border-b-4 px-4 py-2 text-[9px] ${
                            sel
                              ? "border-gamma-700 bg-gamma-500 text-pine-950"
                              : "border-pine-700 bg-pine-950 text-fog hover:text-gamma-300"
                          }`}
                        >
                          {sel ? "✓ PICKED!" : "I CHOOSE YOU!"}
                        </button>
                      </footer>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        {/* Prof. Birch's dialogue */}
        {chosen && (
          <div ref={panelRef} className="mt-12">
            <Reveal dir="pop">
              <div className="pixel-corners relative mx-auto max-w-3xl border-2 border-pine-600 bg-pine-900 p-6 sm:p-8">
                <span className="pixel-corners-sm absolute -top-3.5 left-6 border-2 border-ember-400 bg-pine-950 px-3 py-1 font-term text-sm tracking-[0.25em] text-ember-400">
                  PROF. BIRCH
                </span>
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div
                    className="relative shrink-0 overflow-hidden rounded-2xl border-2 border-pine-600 p-4"
                    style={{
                      background: `radial-gradient(circle at 50% 40%, ${
                        TYPE_COLORS[chosen.type]
                      } 0%, rgba(4,22,15,0) 75%)`,
                    }}
                  >
                    <img
                      src={shiny ? chosen.sprites.shiny : chosen.sprites.front}
                      alt={`${chosen.name} in your team`}
                      className="img-pixel bob-slow h-28 w-auto"
                    />
                  </div>
                  <div>
                    <p className="font-body text-base leading-relaxed text-ink sm:text-lg">
                      Excellent choice!{" "}
                      <strong style={{ color: chosen.color }}>{chosen.name}</strong>{" "}
                      and you make a great team! Take good care of it — your
                      adventure through Hoenn starts now.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1 font-term text-sm text-gamma-300">
                        YOUR TEAM · 1/6
                      </span>
                      <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-3 py-1 font-term text-sm text-fog">
                        LV. 5 · {chosen.ability}
                      </span>
                      <a
                        href="#descargar"
                        className="btn-pixel pixel-corners-sm inline-flex items-center gap-2 border-b-4 border-gamma-700 bg-gamma-500 px-4 py-2 text-[9px] text-pine-950 hover:bg-gamma-400"
                      >
                        DOWNLOAD & START <IconChevron className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div className="hidden shrink-0 lg:block">
                    <div className="pixel-corners-sm zoom-img h-36 w-36 overflow-hidden rounded-xl border-2 border-pine-700 bg-pine-950">
                      <img
                        src={chosen.art}
                        alt={`${chosen.name} official artwork`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-center font-term text-xs tracking-[0.25em] text-dim">
                      OFFICIAL ARTWORK
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {!chosen && (
          <p className="mt-10 text-center font-term text-base tracking-[0.2em] text-dim">
            PSST — TOGGLE SHINY MODE FOR SOMETHING SPECIAL ✦
          </p>
        )}
      </MouseGlow>
    </section>
  );
}
