import { useEffect, useRef, useState } from "react";
import { useScramble, usePrefersReducedMotion } from "../lib/motion";
import { IMG, TICKER } from "../lib/data";
import { IconBolt, IconPlay, IconSpark, IconDownload } from "./Icons";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 92}%`,
  size: 5 + (i % 3) * 3,
  delay: `${(i % 8) * 0.55}s`,
  dur: `${4 + (i % 5)}s`,
  color:
    i % 4 === 0 ? "#fbbf24" : i % 4 === 2 ? "#38bdf8" : "#34d399",
  op: 0.3 + (i % 5) * 0.12,
}));

function useScrollY(reduced: boolean) {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);
  return y;
}

export default function Hero({ live }: { live: boolean }) {
  const reduced = usePrefersReducedMotion();
  const y = useScrollY(reduced);
  const t1 = useScramble("GAMMA", live, 30);
  const t2 = useScramble("EMERALD", live, 26);

  // factores de parallax suaves
  const bg = reduced ? 0 : y * 0.22;
  const mid = reduced ? 0 : y * 0.12;
  const fg = reduced ? 0 : y * -0.06;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 pb-14 sm:pt-32"
    >
      {/* fondo cinematográfico con parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${bg}px)` }}>
        <img
          src={IMG.gameplayGif}
          alt=""
          aria-hidden
          className="kenburns h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/95 via-pine-950/70 to-pine-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-pine-950/60" />
      </div>

      {/* destellos de color */}
      <div className="pointer-events-none absolute inset-0 drift-slow" aria-hidden>
        <div className="absolute -top-24 right-[-8rem] h-96 w-96 rounded-full bg-gamma-600/25 blur-3xl" />
        <div className="absolute bottom-10 left-[-6rem] h-80 w-80 rounded-full bg-ember-400/15 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-aqua-400/12 blur-3xl" />
      </div>

      {/* chispas flotantes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden style={{ transform: `translateY(${mid}px)` }}>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="floaty absolute block rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.op,
              animationDelay: p.delay,
              animationDuration: p.dur,
              boxShadow: `0 0 12px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        style={{ transform: `translateY(${fg}px)` }}
      >
        {/* columna izquierda */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag-tilt shine inline-flex items-center gap-2 rounded-full border-2 border-ember-400/70 bg-ember-400/15 px-4 py-1.5 font-term text-sm font-bold tracking-widest text-ember-300">
              <IconSpark className="h-4 w-4" /> EARLY ACCESS · v0.9
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-pine-600 bg-pine-900/80 px-4 py-1.5 font-term text-sm font-semibold tracking-widest text-fog">
              HD-2D · UNREAL ENGINE 5
            </span>
          </div>

          <p className="mt-8 font-display text-xl tracking-wide text-gamma-400 sm:text-2xl">
            POKÉMON
          </p>
          <h1 className="mt-1 font-display leading-[1.02]">
            <span className="title-gamma block text-6xl sm:text-7xl xl:text-8xl">
              {t1}
            </span>
            <span className="title-ember block text-6xl sm:text-7xl xl:text-8xl">
              {t2}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-fog sm:text-xl">
            El remake <span className="text-gamma-300">HD-2D</span> que reimagina
            la región de Esmeralda en Unreal Engine — ciclo día/noche, bayas,
            crianza y una tormenta gamma que lo cambia todo. Por{" "}
            <span className="text-ember-300">UndreamedPanic</span>.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 font-term text-base font-semibold text-fog">
            <span>
              <span className="text-ember-300">★ 4.7/5</span> · 341+ valoraciones
            </span>
            <span>
              <span className="text-gamma-400">100% GRATIS</span> · PC
            </span>
            <span>
              EA desde el <span className="text-aqua-400">15 · AGO · 2026</span>
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#trailer"
              className="btn-pixel shine inline-flex items-center gap-3 rounded-full border-b-8 border-gamma-700 bg-gamma-500 px-8 py-4 text-lg text-pine-950 shadow-[0_18px_38px_-12px_rgba(52,211,153,0.6)] hover:bg-gamma-400"
            >
              <IconPlay className="h-5 w-5" /> VER TRÁILER
            </a>
            <a
              href="#descargar"
              className="btn-pixel inline-flex items-center gap-3 rounded-full border-2 border-pine-600 bg-pine-900/85 px-8 py-4 text-lg text-gamma-300 hover:border-gamma-500 hover:text-gamma-200"
            >
              <IconDownload className="h-5 w-5" /> DESCARGAR
            </a>
          </div>

          <p className="blink mt-9 font-term text-base font-bold tracking-[0.22em] text-gamma-400">
            ▶ PRESIONA START PARA COMENZAR TU AVENTURA
          </p>
        </div>

        {/* columna derecha: combate en vivo */}
        <div className="relative mx-auto w-full max-w-md" style={{ transform: `translateY(${fg * 0.6}px)` }}>
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] border-2 border-gamma-600/30 bg-gamma-600/5" aria-hidden />
          <div className="shine pixel-corners lift border-2 border-pine-600 bg-pine-900/95 p-3 shadow-[0_30px_60px_-20px_rgba(2,12,8,0.9)]">
            <div className="flex items-center justify-between border-b-2 border-pine-700 px-2 pb-2">
              <span className="font-display text-xs text-fog">
                COMBATE · CUEVA VOLTIO
              </span>
              <span className="flex gap-1.5" aria-hidden>
                <i className="h-2.5 w-2.5 rounded-full bg-coral-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-ember-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-gamma-500" />
              </span>
            </div>

            <div className="zoom-img relative mt-2 overflow-hidden rounded-xl">
              <img
                src={IMG.eaShot1}
                alt="Combate HD-2D real del Early Access de Gamma Emerald"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="pixel-corners-sm absolute top-2 left-2 w-44 border-2 border-pine-600 bg-pine-950/90 p-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[11px] text-ink">RAIKITSU</span>
                  <span className="font-term text-sm font-bold text-ember-400">Nv36</span>
                </div>
                <div className="bar-track mt-1.5 h-2.5">
                  <div className="hp-live h-full" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="toast-pop pixel-corners-sm absolute bottom-2 right-2 border-2 border-ember-400 bg-pine-950/95 px-3 py-1.5 font-term text-base font-bold text-ember-300">
                ¡Es súper eficaz!
              </div>
            </div>

            <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <div className="pixel-corners-sm border-2 border-pine-700 bg-pine-950 p-2.5">
                <p className="font-term text-lg font-semibold leading-tight text-ink">
                  ¿Qué hará <span className="text-gamma-400">SCEPTILE</span>?
                </p>
                <div className="bar-track mt-2 h-2">
                  <div className="xp-live h-full rounded-full bg-aqua-400" style={{ width: "8%" }} />
                </div>
                <p className="mt-1 font-term text-xs font-semibold text-dim">EXP · Nv58 → Nv59</p>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["LUCHAR", "MOCHILA", "POKÉMON", "HUIR"].map((b, i) => (
                  <span
                    key={b}
                    className={`flex items-center justify-center rounded-lg border-2 px-3 font-display text-[9px] transition-colors ${
                      i === 0
                        ? "border-gamma-500 bg-gamma-600/20 text-gamma-300"
                        : "border-pine-700 bg-pine-950 text-fog"
                    }`}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="tag-tilt floaty absolute -top-5 -right-4 rounded-full border-2 border-ember-400 bg-pine-950 px-4 py-2 font-term text-base font-bold text-ember-400 shadow-[0_10px_24px_-8px_rgba(251,191,36,0.5)]">
            <IconBolt className="mr-1 inline h-4 w-4" /> ENERGÍA GAMMA +42%
          </div>
        </div>
      </div>
    </section>
  );
}

/* cinta transportadora de ubicaciones */
export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee relative z-10 overflow-hidden border-y-2 border-pine-700 bg-pine-900/90 py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-term text-lg font-bold tracking-[0.28em] whitespace-nowrap"
          >
            <span className={i % 2 ? "text-gamma-400" : "text-fog"}>{t}</span>
            <span className="text-ember-400" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
