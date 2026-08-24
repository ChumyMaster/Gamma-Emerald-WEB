import { Reveal } from "../lib/motion";
import { TRAILERS, LINKS } from "../lib/data";
import { IconExt } from "./Icons";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";

export default function Trailer() {
  return (
    <section id="trailer" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="SEÑAL RECIBIDA · POKÉNET"
          title="TRANSMISIONES"
          desc="Los vídeos oficiales del proyecto: el tráiler que presentó el remake HD-2D, el avance de gameplay y el devlog original del canal de UndreamedPanic. Reproducción directa desde YouTube."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {TRAILERS.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 140}
              dir={i % 2 === 0 ? "left" : "right"}
            >
              <Tilt max={6} className="h-full">
              <article className="pixel-corners shine group h-full border-2 border-pine-600 bg-pine-900 p-3">
                {/* bisel tipo consola */}
                <div className="flex items-center justify-between px-1 pb-2.5">
                  <span className="font-term text-lg tracking-[0.3em] text-gamma-500">
                    {t.tag}
                  </span>
                  <span className="flex items-center gap-1.5 font-term text-lg text-dim">
                    <i className="pulse-dot inline-block h-2 w-2 rounded-full bg-gamma-500" />
                    EN DIRECTO DESDE YT
                  </span>
                </div>

                <div className="pixel-corners-sm relative overflow-hidden border-2 border-pine-700 bg-pine-950">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube-nocookie.com/embed/${t.id}`}
                    title={`Gamma Emerald — ${t.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  {/* barrido CRT decorativo */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 overflow-hidden opacity-30">
                    <div className="scan-sweep h-16 w-full bg-gradient-to-b from-transparent via-gamma-400/25 to-transparent" />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 px-1 pt-3">
                  <div>
                    <h3 className="font-display text-[11px] text-ink sm:text-xs">
                      {t.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-fog">
                      {t.desc}
                    </p>
                  </div>
                  <span className="pixel-corners-sm shrink-0 border border-pine-600 bg-pine-950 px-2.5 py-1.5 font-term text-base text-ember-400">
                    {t.time}
                  </span>
                </div>
              </article>
              </Tilt>

              <a
                href={
                  i === 0
                    ? LINKS.trailer1
                    : i === 1
                      ? LINKS.trailer2
                      : LINKS.trailer3
                }
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-3 inline-flex items-center gap-2 px-1 font-term text-xl text-gamma-400 hover:text-gamma-300"
              >
                ABRIR EN YOUTUBE <IconExt className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
