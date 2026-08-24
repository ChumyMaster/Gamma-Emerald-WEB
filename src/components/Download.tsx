import { Reveal } from "../lib/motion";
import {
  IMG,
  GALLERY,
  LINKS,
  VERSIONS,
  REQUIREMENTS,
  CONTROLS,
} from "../lib/data";
import {
  IconWindows,
  IconDiscord,
  IconItch,
  IconGamepad,
  IconDisk,
  IconStar,
  IconBolt,
} from "./Icons";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";
import MouseGlow from "./MouseGlow";

export default function Download() {
  return (
    <section id="descargar" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(58% 100% at 50% 100%, rgba(52,211,153,0.13) 0%, transparent 70%)",
        }}
      />
      <MouseGlow className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="SAVE ROOM · INSERT CARTRIDGE"
          title="GET THE GAME"
          desc="Gamma Emerald is 100% free and is distributed through itch.io and GameJolt. The current Early Access build weighs in at 1.3 GB and runs on Windows — the first launch takes a few minutes while shaders compile."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* cartridge with the official cover */}
          <Reveal dir="left" className="flex flex-col items-center">
            <Tilt max={12} className="relative w-64 sm:w-72">
              <div className="pixel-corners shine border-2 border-pine-600 bg-pine-800 p-4 shadow-[12px_12px_0_rgba(5,15,10,0.9)]">
                <div className="mb-3 flex justify-between px-1" aria-hidden>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="h-2 w-2 rounded-sm bg-pine-600" />
                  ))}
                </div>
                <div className="pixel-corners-sm zoom-img relative overflow-hidden border-2 border-pine-700 bg-pine-950">
                  <img
                    src={IMG.cover}
                    alt="Official Gamma Emerald cover art"
                    className="aspect-square w-full object-cover"
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
                  SAVED: SLOT 1 ▮▮▮
                </p>
              </div>
              <div className="pixel-corners-sm floaty absolute -top-3 -right-4 border-2 border-ember-400 bg-pine-950 px-3 py-1.5 font-term text-lg text-ember-400">
                <IconStar className="mr-1 inline h-4 w-4" /> FREE
              </div>
            </Tilt>

            {/* platform buttons with official logos */}
            <div className="mt-9 flex w-full max-w-sm flex-col gap-3">
              <a
                href={LINKS.itch}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="btn-pixel pixel-corners shine group flex items-center justify-between border-b-8 border-[#8a3ab9]/70 bg-[#fa5c5c] px-6 py-4 text-[11px] text-white hover:bg-[#ff7a7a]"
              >
                <span className="flex items-center gap-3">
                  <IconItch className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  DOWNLOAD ON ITCH.IO
                </span>
                <span className="font-term text-sm opacity-80">v1.13.1 · 1.3 GB</span>
              </a>
              <a
                href={LINKS.gamejolt}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="btn-pixel pixel-corners shine group flex items-center justify-between border-b-8 border-[#0e6b3d] bg-[#1f8f52] px-6 py-4 text-[11px] text-white hover:bg-[#27a761]"
              >
                <span className="flex items-center gap-3">
                  <IconGamepad className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  PLAY VIA GAMEJOLT
                </span>
                <span className="font-term text-sm opacity-80">WINDOWS</span>
              </a>
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="btn-pixel pixel-corners shine group flex items-center justify-between border-b-8 border-[#3c45a5] bg-[#5865F2] px-6 py-4 text-[11px] text-white hover:bg-[#6b77ff]"
              >
                <span className="flex items-center gap-3">
                  <IconDiscord className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
                  JOIN THE DISCORD
                </span>
                <span className="font-term text-sm opacity-80">COMMUNITY</span>
              </a>
              <a
                href={LINKS.itchDemo}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="btn-pixel pixel-corners group flex items-center justify-between border-2 border-pine-600 bg-pine-900 px-6 py-4 text-[10px] text-fog hover:border-gamma-500 hover:text-gamma-300"
              >
                <span className="flex items-center gap-3">
                  <IconDisk className="h-4 w-4" />
                  TRY THE CLASSIC DEMO
                </span>
                <span className="font-term text-sm opacity-70">★ 4.7 · 2025</span>
              </a>
            </div>

            {/* chips */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                ["WINDOWS 10 / 11", IconWindows],
                ["1.3 GB", IconDisk],
                ["GTX 1060+", IconBolt],
              ].map(([label, Ic]) => {
                const Icon = Ic as typeof IconWindows;
                return (
                  <span
                    key={label as string}
                    className="pixel-corners-sm flex items-center gap-2 border border-pine-600 bg-pine-900 px-3.5 py-2 font-term text-sm tracking-wider text-fog"
                  >
                    <Icon className="h-3.5 w-3.5 text-gamma-400" />
                    {label as string}
                  </span>
                );
              })}
            </div>
          </Reveal>

          {/* right column: versions + requirements + controls */}
          <div className="space-y-8">
            <div>
              <h3 className="font-term text-lg tracking-[0.35em] text-gamma-400">
                ▚ VERSION TIMELINE
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {VERSIONS.map((v, i) => (
                  <Reveal key={v.ver} delay={i * 110}>
                    <article
                      className={`lift relative flex h-full flex-col border-2 p-5 ${
                        v.state === "CURRENT BUILD"
                          ? "border-gamma-500 bg-pine-850"
                          : "border-pine-700 bg-pine-900"
                      }`}
                    >
                      {v.state === "CURRENT BUILD" && (
                        <span className="pixel-corners-sm absolute -top-3 right-3 border-2 border-gamma-400 bg-pine-950 px-2.5 py-0.5 font-term text-sm tracking-widest text-gamma-400">
                          NOW
                        </span>
                      )}
                      <p className="font-display text-2xl text-ink">{v.ver}</p>
                      <p className="mt-1 font-term text-sm tracking-[0.25em] text-ember-400">
                        {v.name}
                      </p>
                      <p className="mt-0.5 font-term text-xs tracking-widest text-dim">
                        {v.date} · {v.state}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {v.notes.map((n) => (
                          <li
                            key={n}
                            className="flex gap-2 font-body text-xs leading-relaxed text-fog"
                          >
                            <span className="text-gamma-500">◆</span> {n}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  ["MINIMUM", REQUIREMENTS.min],
                  ["RECOMMENDED", REQUIREMENTS.rec],
                ] as const
              ).map(([label, rows], i) => (
                <Reveal key={label} delay={i * 120}>
                  <div className="h-full border-2 border-pine-700 bg-pine-900 p-5">
                    <p className="flex items-center gap-2 font-term text-sm tracking-[0.3em] text-fog">
                      <IconWindows className="h-4 w-4 text-gamma-400" />
                      {label}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {rows.map(([k, v]) => (
                        <li
                          key={k}
                          className="flex justify-between gap-3 border-b border-dashed border-pine-700 pb-2 font-body text-sm last:border-0"
                        >
                          <span className="font-semibold text-dim">{k}</span>
                          <span className="text-right text-fog">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="border-2 border-pine-700 bg-pine-900 p-5">
                <p className="font-term text-sm tracking-[0.3em] text-fog">
                  ▚ CONTROLS
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[430px] text-left font-body text-sm">
                    <thead>
                      <tr className="font-term text-xs tracking-[0.25em] text-dim">
                        <th className="pb-2 font-normal">ACTION</th>
                        <th className="pb-2 font-normal">KEYBOARD</th>
                        <th className="pb-2 font-normal">CONTROLLER</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONTROLS.map((c) => (
                        <tr
                          key={c.action}
                          className="border-t border-pine-800 transition-colors hover:bg-pine-850"
                        >
                          <td className="py-2.5 font-semibold text-ink">
                            {c.action}
                          </td>
                          <td className="py-2.5">
                            <code className="pixel-corners-sm border border-pine-600 bg-pine-950 px-2 py-0.5 font-term text-sm text-gamma-300">
                              {c.kb}
                            </code>
                          </td>
                          <td className="py-2.5 text-fog">{c.pad}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* capture gallery */}
        <div className="mt-20">
          <Reveal dir="none">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-term text-lg tracking-[0.35em] text-ember-400">
                  ▚ STRAIGHT FROM THE GAME
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                  CAPTURE <span className="text-gamma-400">GALLERY</span>
                </h3>
              </div>
              <p className="max-w-md font-body text-sm leading-relaxed text-fog">
                Real screenshots and official key art from the Early Access and
                the classic demo — from Route 101's first battles to the Team
                Magma legends. Hover to zoom.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal
                key={g.src + i}
                delay={(i % 4) * 90}
                className={i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <figure className="zoom-img group pixel-corners relative h-full overflow-hidden border-2 border-pine-700 bg-pine-950">
                  <img
                    src={g.src}
                    alt={g.tag}
                    className="h-full min-h-[140px] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-pine-950/95 to-pine-950/70 px-3 py-2 font-term text-xs tracking-[0.22em] text-gamma-300 transition-transform duration-300 group-hover:translate-y-0">
                    {g.tag}
                  </figcaption>
                  <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-gamma-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </MouseGlow>
    </section>
  );
}
