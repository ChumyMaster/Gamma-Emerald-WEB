import { Reveal } from "../lib/motion";
import {
  IMG,
  LINKS,
  VERSIONS,
  REQUIREMENTS,
  CONTROLS,
  CREDITS,
} from "../lib/data";
import {
  IconWindows,
  IconGamejolt,
  IconDisk,
  IconClock,
  IconStar,
} from "./Icons";
import SectionHead from "./SectionHead";

export default function Download() {
  return (
    <section id="descargar" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(47,224,111,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="SALA DE GUARDADO · INSERTA EL CARTUCHO"
          title="DESCARGA EL JUEGO"
          desc="Gamma Emerald es 100% gratuito y se distribuye por itch.io y GameJolt. La build actual del Early Access pesa 1.3 GB y corre en Windows — el primer arranque tarda unos minutos mientras compila shaders."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* cartucho + botones */}
          <Reveal dir="left" className="flex flex-col items-center">
            <div className="relative w-64 sm:w-72">
              <div className="pixel-corners border-2 border-pine-600 bg-pine-800 p-4 shadow-[12px_12px_0_rgba(5,15,10,0.9)]">
                <div className="mb-3 flex justify-between px-1">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="h-2 w-4 bg-pine-950/80" />
                  ))}
                </div>
                <div className="pixel-corners-sm relative overflow-hidden border-2 border-pine-950">
                  <img
                    src={IMG.promoStory}
                    alt="Arte oficial de Gamma Emerald en el cartucho"
                    className="kenburns aspect-square w-full bg-pine-950 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-pine-950/85 px-2 py-1.5 text-center">
                    <span className="font-term text-base tracking-[0.25em] text-gamma-300">
                      GAMMA EMERALD
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center font-term text-lg tracking-[0.25em] text-fog">
                  EARLY ACCESS · v1.13.1
                </p>
                <p className="mt-1 text-center font-term text-sm tracking-widest text-dim">
                  GUARDADO: RANURA 1 ▮▮▮
                </p>
              </div>
              {/* etiqueta flotante */}
              <div className="pixel-corners-sm floaty absolute -top-3 -right-4 border-2 border-ember-400 bg-pine-950 px-3 py-1.5 font-term text-lg text-ember-400">
                <IconStar className="mr-1 inline h-4 w-4" /> GRATIS
              </div>
            </div>

            {/* botones reales */}
            <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
              <a
                href={LINKS.itch}
                target="_blank"
                rel="noreferrer"
                className="btn-pixel pixel-corners group flex items-center justify-between border-2 border-gamma-400 bg-gamma-500 px-6 py-4 text-[10px] text-pine-950 shadow-[6px_6px_0_rgba(47,224,111,0.35)] hover:bg-gamma-400"
              >
                <span className="flex items-center gap-3">
                  <IconDisk className="h-5 w-5" /> DESCARGAR EN ITCH.IO
                </span>
                <span className="font-term text-lg">1.3 GB ▸</span>
              </a>
              <a
                href={LINKS.gamejolt}
                target="_blank"
                rel="noreferrer"
                className="btn-pixel pixel-corners flex items-center justify-between border-2 border-pine-600 bg-pine-900 px-6 py-4 text-[10px] text-fog hover:border-ember-400 hover:text-ember-300"
              >
                <span className="flex items-center gap-3">
                  <IconGamejolt className="h-5 w-5" /> VER EN GAMEJOLT
                </span>
                <span className="font-term text-lg">PÁGINA ▸</span>
              </a>
              <a
                href={LINKS.itchDemo}
                target="_blank"
                rel="noreferrer"
                className="btn-pixel pixel-corners flex items-center justify-between border-2 border-pine-700 bg-pine-950 px-6 py-3.5 text-[9px] text-dim hover:border-pine-500 hover:text-fog"
              >
                <span className="flex items-center gap-3">
                  <IconClock className="h-4 w-4" /> DEMO CLÁSICA (2025)
                </span>
                <span className="font-term text-base">ARCHIVO ▸</span>
              </a>
            </div>

            <p className="mt-5 max-w-sm text-center font-term text-base leading-snug text-dim">
              ¿PROBLEMAS AL DESCARGAR? ÚNETE AL DISCORD OFICIAL: LA COMUNIDAD
              AYUDA CON VPN, GESTORES DE DESCARGA Y SAVES.
            </p>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-2 font-term text-xl text-viol-400 hover:text-ink"
            >
              discord.com/invite/JFtPDmy59u
            </a>
          </Reveal>

          {/* versiones + requisitos + controles */}
          <div className="space-y-10">
            <div>
              <h3 className="font-term text-xl tracking-[0.3em] text-gamma-500">
                ▚ LÍNEA DE VERSIONES
              </h3>
              <div className="relative mt-6 space-y-6 pl-6">
                <span
                  className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-pine-600"
                  aria-hidden
                />
                {VERSIONS.map((v, i) => (
                  <Reveal key={v.ver} delay={i * 120} dir="right">
                    <div className="relative">
                      <span
                        className={`absolute top-1.5 -left-6 h-4 w-4 rotate-45 border-2 ${
                          v.state === "ACTUAL"
                            ? "pulse-dot border-gamma-400 bg-gamma-500"
                            : v.state === "EN DESARROLLO"
                              ? "border-ember-400 bg-pine-900"
                              : "border-pine-500 bg-pine-900"
                        }`}
                        aria-hidden
                      />
                      <div
                        className={`pixel-corners border-2 p-5 transition-colors ${
                          v.state === "ACTUAL"
                            ? "border-gamma-600 bg-pine-850"
                            : "border-pine-700 bg-pine-900"
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="font-display text-[11px] text-ink">
                            {v.name}
                          </span>
                          <span className="font-term text-lg text-ember-400">
                            {v.ver}
                          </span>
                          <span className="ml-auto font-term text-base tracking-widest text-dim">
                            {v.date}
                          </span>
                        </div>
                        <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                          {v.notes.map((n) => (
                            <li
                              key={n}
                              className="flex items-start gap-2 font-body text-sm text-fog"
                            >
                              <span className="mt-0.5 shrink-0 text-gamma-500">
                                ◆
                              </span>
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* requisitos */}
            <Reveal delay={120}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="pixel-corners border-2 border-pine-700 bg-pine-900 p-5">
                  <h4 className="font-display text-[9px] text-fog">
                    REQUISITOS MÍNIMOS
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {REQUIREMENTS.min.map(([k, val]) => (
                      <li
                        key={k}
                        className="flex justify-between gap-3 border-b border-dashed border-pine-700 pb-2 text-sm last:border-0"
                      >
                        <span className="font-term text-lg text-dim">{k}</span>
                        <span className="text-right font-body font-semibold text-fog">
                          {val}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pixel-corners border-2 border-gamma-700 bg-pine-850 p-5">
                  <h4 className="font-display text-[9px] text-gamma-300">
                    RECOMENDADO
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {REQUIREMENTS.rec.map(([k, val]) => (
                      <li
                        key={k}
                        className="flex justify-between gap-3 border-b border-dashed border-pine-700 pb-2 text-sm last:border-0"
                      >
                        <span className="font-term text-lg text-dim">{k}</span>
                        <span className="text-right font-body font-semibold text-gamma-200">
                          {val}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* controles reales del juego */}
            <Reveal delay={180}>
              <div className="pixel-corners border-2 border-pine-700 bg-pine-900 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-[9px] text-ink">
                    CONTROLES OFICIALES
                  </h4>
                  <span className="font-term text-base tracking-widest text-dim">
                    TECLADO · MANDO
                  </span>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[430px] text-left">
                    <thead>
                      <tr className="border-b-2 border-pine-700 font-term text-lg text-gamma-500">
                        <th className="py-2 pr-4 font-normal">ACCIÓN</th>
                        <th className="py-2 pr-4 font-normal">TECLADO</th>
                        <th className="py-2 font-normal">MANDO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONTROLS.map(([a, kb, pad]) => (
                        <tr
                          key={a}
                          className="border-b border-dashed border-pine-800 text-sm transition-colors last:border-0 hover:bg-pine-850"
                        >
                          <td className="py-2 pr-4 font-body text-fog">{a}</td>
                          <td className="py-2 pr-4">
                            <kbd className="pixel-corners-sm border border-pine-600 bg-pine-950 px-2 py-0.5 font-term text-base text-gamma-300">
                              {kb}
                            </kbd>
                          </td>
                          <td className="py-2 font-term text-lg text-fog">
                            {pad}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            {/* créditos */}
            <Reveal delay={240}>
              <div className="pixel-corners border-2 border-pine-700 bg-pine-950 p-5">
                <h4 className="font-term text-xl tracking-[0.3em] text-ember-400">
                  ▚ CRÉDITOS DEL PROYECTO
                </h4>
                <ul className="mt-3 space-y-2">
                  {CREDITS.map(([who, what]) => (
                    <li key={who} className="flex flex-wrap gap-x-3 text-sm">
                      <span className="font-term text-lg text-gamma-300">
                        {who}
                      </span>
                      <span className="font-body text-dim">{what}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
