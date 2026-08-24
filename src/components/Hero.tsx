import { useScramble } from "../lib/motion";
import { IMG, TICKER } from "../lib/data";
import { IconBolt, IconPlay, IconSpark, IconDownload } from "./Icons";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 92}%`,
  size: 3 + (i % 3) * 2,
  delay: `${(i % 8) * 0.55}s`,
  dur: `${4 + (i % 5)}s`,
  color:
    i % 4 === 0
      ? "#ffc857"
      : i % 4 === 2
        ? "#53d8ff"
        : "#5dff8f",
  op: 0.25 + (i % 5) * 0.12,
}));

export default function Hero({ live }: { live: boolean }) {
  const t1 = useScramble("GAMMA", live, 30);
  const t2 = useScramble("EMERALD", live, 26);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden pt-24 pb-10 sm:pt-28"
    >
      {/* fondo: key art con respiración Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt=""
          aria-hidden
          className="kenburns h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/78 to-pine-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-pine-950/70" />
      </div>

      {/* píxeles flotantes ambientales */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="floaty absolute block"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.op,
              animationDelay: p.delay,
              animationDuration: p.dur,
              boxShadow: `0 0 8px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* columna izquierda */}
        <div>
          <div className="flex flex-wrap items-center gap-2 font-term text-lg tracking-widest">
            <span className="pixel-corners-sm inline-flex items-center gap-1.5 border border-ember-400/60 bg-pine-900/80 px-3 py-1 text-ember-400">
              <IconSpark className="h-3.5 w-3.5" /> EARLY ACCESS · v0.9
            </span>
            <span className="pixel-corners-sm inline-flex items-center gap-1.5 border border-pine-600 bg-pine-900/80 px-3 py-1 text-fog">
              FANGAME · HD-2D · UNREAL ENGINE
            </span>
          </div>

          <p className="mt-6 font-term text-2xl tracking-[0.3em] text-gamma-500">
            ▚ POKÉMON
          </p>
          <h1 className="mt-2 font-display leading-[1.18]">
            <span className="title-gamma block text-4xl sm:text-6xl xl:text-7xl">
              {t1}
            </span>
            <span className="title-ink block text-4xl sm:text-6xl xl:text-7xl">
              {t2}
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-term text-2xl leading-snug text-fog sm:text-[1.55rem]">
            El remake <span className="text-gamma-300">HD-2D</span> que reimagina
            la región clásica de Esmeralda en Unreal Engine — ciclo día/noche,
            bayas, crianza y una tormenta gamma que lo cambia todo. Por{" "}
            <span className="text-ember-400">UndreamedPanic</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-term text-xl text-fog">
            <span>
              <span className="text-ember-400">★ 4.7/5</span> · 341+ valoraciones
            </span>
            <span>
              <span className="text-gamma-400">100% GRATIS</span> · PC
            </span>
            <span>
              EA desde el <span className="text-aqua-400">15 · AGO · 2026</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#descargar"
              className="btn-pixel pixel-corners inline-flex items-center gap-3 border-2 border-gamma-400 bg-gamma-500 px-7 py-4 text-[11px] text-pine-950 shadow-[6px_6px_0_rgba(47,224,111,0.35)] hover:bg-gamma-400"
            >
              <IconDownload className="h-4 w-4" /> DESCARGAR AHORA
            </a>
            <a
              href="#trailer"
              className="btn-pixel pixel-corners inline-flex items-center gap-3 border-2 border-pine-600 bg-pine-900/85 px-7 py-4 text-[11px] text-gamma-300 hover:border-gamma-500"
            >
              <IconPlay className="h-4 w-4" /> VER TRÁILER
            </a>
          </div>

          <p className="blink mt-8 font-term text-xl tracking-[0.25em] text-gamma-400">
            ▶ PRESIONA START PARA COMENZAR TU AVENTURA
          </p>
        </div>

        {/* columna derecha: widget de combate en vivo */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 -z-10 rotate-2 border-2 border-pine-700/70" aria-hidden />
          <div className="pixel-corners border-2 border-pine-600 bg-pine-900/95 p-3 shadow-[10px_10px_0_rgba(5,15,10,0.85)]">
            <div className="flex items-center justify-between border-b-2 border-pine-700 px-2 pb-2">
              <span className="font-display text-[8px] text-fog">
                COMBATE · CUEVA VOLTIO
              </span>
              <span className="flex gap-1.5" aria-hidden>
                <i className="h-2 w-2 bg-coral-400" />
                <i className="h-2 w-2 bg-ember-400" />
                <i className="h-2 w-2 bg-gamma-500" />
              </span>
            </div>

            <div className="relative mt-2 overflow-hidden">
              <img
                src={IMG.battle}
                alt="Combate HD-2D: un entrenador frente a una criatura eléctrica gamma"
                className="img-pixel aspect-[16/9] w-full object-cover"
              />
              {/* placa del rival */}
              <div className="pixel-corners-sm absolute top-2 left-2 w-44 border-2 border-pine-600 bg-pine-950/90 p-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[8px] text-ink">RAIKITSU</span>
                  <span className="font-term text-base text-ember-400">Nv36</span>
                </div>
                <div className="bar-track mt-1.5 h-2.5">
                  <div className="hp-live h-full" style={{ width: "92%" }} />
                </div>
              </div>
              {/* aviso de combate */}
              <div className="toast-pop pixel-corners-sm absolute bottom-2 right-2 border-2 border-ember-400 bg-pine-950/95 px-3 py-1.5 font-term text-lg text-ember-300">
                ¡Es súper eficaz!
              </div>
            </div>

            <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <div className="pixel-corners-sm border-2 border-pine-700 bg-pine-950 p-2.5">
                <p className="font-term text-xl leading-tight text-ink">
                  ¿Qué hará <span className="text-gamma-400">SCEPTILE</span>?
                </p>
                <div className="bar-track mt-2 h-2">
                  <div className="xp-live h-full bg-aqua-400" style={{ width: "8%" }} />
                </div>
                <p className="mt-1 font-term text-sm text-dim">EXP · Nv58 → Nv59</p>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["LUCHAR", "MOCHILA", "POKÉMON", "HUIR"].map((b, i) => (
                  <span
                    key={b}
                    className={`pixel-corners-sm flex items-center justify-center border-2 px-3 font-display text-[7px] transition-colors ${
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

          <div className="pixel-corners-sm floaty absolute -top-4 -right-3 border-2 border-ember-400 bg-pine-950 px-3 py-1.5 font-term text-lg text-ember-400 shadow-[4px_4px_0_rgba(255,176,32,0.25)]">
            <IconBolt className="mr-1 inline h-3.5 w-3.5" /> ENERGÍA GAMMA +42%
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
    <div className="marquee relative z-10 overflow-hidden border-y-2 border-pine-700 bg-pine-900/90 py-3">
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-term text-xl tracking-[0.3em] whitespace-nowrap"
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
