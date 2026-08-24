import { Reveal } from "../lib/motion";
import { IMG, LINKS, VERSIONS, REQUIREMENTS } from "../lib/data";
import { IconDownload, IconExt, IconPlay, IconBolt } from "./Icons";
import SectionHead from "./SectionHead";

export default function Download() {
  return (
    <section id="descargar" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 100% at 50% 100%, rgba(47,224,111,0.16) 0%, transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* cartucho */}
          <Reveal dir="left">
            <div className="relative mx-auto w-64 sm:w-72">
              <div
                className="absolute -inset-8 -z-10 orbit-glow"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle, rgba(93,255,143,0.2) 0%, transparent 65%)",
                }}
              />
              <div className="bob-slow pixel-corners border-2 border-pine-500 bg-gradient-to-b from-pine-700 to-pine-850 p-4 shadow-[12px_12px_0_rgba(5,15,10,0.9)]">
                {/* estrías superiores */}
                <div className="mb-3 flex justify-center gap-1.5" aria-hidden>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="h-4 w-2.5 bg-pine-950/70" />
                  ))}
                </div>

                <div className="pixel-corners-sm border-2 border-gamma-600/70 bg-pine-950 p-2.5">
                  <div className="overflow-hidden">
                    <img
                      src={IMG.hero}
                      alt="Arte del cartucho: la región Gamma bajo la tormenta"
                      className="img-pixel aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <div className="mt-2.5 text-center">
                    <p className="font-term text-base tracking-[0.4em] text-dim">
                      POKÉMON
                    </p>
                    <p className="font-display text-[11px] leading-relaxed text-gamma-400">
                      GAMMA
                      <br />
                      EMERALD
                    </p>
                    <p className="mt-1.5 inline-block border border-ember-400/70 px-2 py-0.5 font-term text-sm tracking-widest text-ember-400">
                      EARLY ACCESS · v0.9
                    </p>
                  </div>
                </div>

                {/* pines inferiores */}
                <div className="mt-3 flex justify-center gap-1" aria-hidden>
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-5 w-1.5 bg-ember-400/80"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-5 text-center font-term text-lg tracking-[0.3em] text-dim">
                SOPLA EL CARTUCHO Y PULSA START
              </p>
            </div>
          </Reveal>

          {/* descargas */}
          <div>
            <SectionHead
              eyebrow="INSERTA EL CARTUCHO"
              title="CONSIGUE EL JUEGO"
              desc="Gamma Emerald es gratuito y se distribuye en las dos tiendas indie de siempre. Elige tu plataforma favorita: ambas llevan a la misma build oficial de UndreamedPanic."
              accent="text-ember-400"
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={LINKS.itch}
                target="_blank"
                rel="noreferrer"
                className="btn-pixel pixel-corners inline-flex items-center justify-center gap-3 border-2 border-coral-400 bg-coral-400 px-6 py-4 text-[10px] text-pine-950 shadow-[6px_6px_0_rgba(255,122,158,0.3)] hover:bg-[#ff93b1]"
              >
                <IconDownload className="h-4 w-4" /> DESCARGAR EN ITCH.IO
                <IconExt className="h-3.5 w-3.5" />
              </a>
              <a
                href={LINKS.gamejolt}
                target="_blank"
                rel="noreferrer"
                className="btn-pixel pixel-corners inline-flex items-center justify-center gap-3 border-2 border-ember-400 bg-ember-400 px-6 py-4 text-[10px] text-pine-950 shadow-[6px_6px_0_rgba(255,200,87,0.3)] hover:bg-ember-300"
              >
                <IconDownload className="h-4 w-4" /> JUGAR EN GAMEJOLT
                <IconExt className="h-3.5 w-3.5" />
              </a>
              <a
                href={LINKS.itchDemo}
                target="_blank"
                rel="noreferrer"
                className="btn-pixel pixel-corners inline-flex items-center justify-center gap-3 border-2 border-pine-600 bg-pine-900 px-6 py-4 text-[10px] text-gamma-300 hover:border-gamma-500"
              >
                <IconPlay className="h-4 w-4" /> PROBAR LA DEMO v0.5
              </a>
            </div>

            <p className="mt-5 flex items-start gap-2 font-term text-lg leading-snug text-dim">
              <IconBolt className="mt-1 h-4 w-4 shrink-0 text-ember-400" />
              Proyecto sin ánimo de lucro. Si alguien te cobra por este juego, es
              una estafa: repórtalo en los comentarios oficiales.
            </p>
          </div>
        </div>

        {/* línea de versiones */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal dir="left">
            <h3 className="font-display text-xs text-ink">
              REGISTRO DE <span className="text-gamma-400">VERSIONES</span>
            </h3>
            <ol className="relative mt-8 space-y-8 border-l-2 border-pine-700 pl-8">
              {VERSIONS.map((v, i) => (
                <li key={v.ver} className="relative">
                  <span
                    className={`absolute top-1 -left-[41px] h-4 w-4 rotate-45 border-2 ${
                      v.state === "ACTUAL"
                        ? "pulse-dot border-gamma-400 bg-gamma-500"
                        : v.state === "DISPONIBLE"
                          ? "border-ember-400 bg-pine-950"
                          : "border-pine-500 bg-pine-950"
                    }`}
                    aria-hidden
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-sm text-gamma-400">
                      {v.ver}
                    </span>
                    <span className="font-term text-xl text-ink">{v.name}</span>
                    <span className="font-term text-lg tracking-widest text-ember-400">
                      {v.date}
                    </span>
                    <span
                      className={`pixel-corners-sm border px-2 py-0.5 font-term text-sm tracking-widest ${
                        v.state === "ACTUAL"
                          ? "border-gamma-500 text-gamma-300"
                          : v.state === "DISPONIBLE"
                            ? "border-ember-400/70 text-ember-400"
                            : "border-pine-500 text-dim"
                      }`}
                    >
                      {v.state}
                    </span>
                  </div>
                  <ul className={`mt-3 space-y-1.5 ${i === VERSIONS.length - 1 ? "opacity-60" : ""}`}>
                    {v.notes.map((n) => (
                      <li key={n} className="flex gap-2.5 font-body text-sm text-fog">
                        <span className="text-gamma-500" aria-hidden>
                          ▸
                        </span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* requisitos */}
          <Reveal dir="right" delay={140}>
            <h3 className="font-display text-xs text-ink">
              REQUISITOS <span className="text-ember-400">DEL SISTEMA</span>
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {(
                [
                  ["MÍNIMO", REQUIREMENTS.min, "text-fog", "border-pine-600"],
                  ["RECOMENDADO", REQUIREMENTS.rec, "text-gamma-300", "border-gamma-700"],
                ] as const
              ).map(([label, rows, color, border]) => (
                <div
                  key={label}
                  className={`pixel-corners border-2 ${border} bg-pine-900 p-5`}
                >
                  <p className={`font-term text-lg tracking-[0.3em] ${color}`}>
                    ▚ {label}
                  </p>
                  <dl className="mt-4 space-y-2.5">
                    {rows.map(([k, v]) => (
                      <div key={k} className="border-b border-dashed border-pine-700 pb-2 last:border-0 last:pb-0">
                        <dt className="font-term text-sm tracking-widest text-dim">
                          {k.toUpperCase()}
                        </dt>
                        <dd className="font-term text-xl text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <p className="mt-4 font-term text-base text-dim">
              * Especificaciones estimadas por la comunidad para la build de
              Unreal Engine; consulta la página oficial para cada actualización.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
