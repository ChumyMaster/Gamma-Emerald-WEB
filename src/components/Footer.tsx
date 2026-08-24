import { LINKS } from "../lib/data";
import { IconBall, IconExt, IconLeaf, IconPlay } from "./Icons";

const COLS = [
  {
    title: "JUEGO",
    links: [
      { label: "Early Access · itch.io", href: LINKS.itch },
      { label: "Página en GameJolt", href: LINKS.gamejolt },
      { label: "Demo clásica (2025)", href: LINKS.itchDemo },
      { label: "Discord oficial", href: LINKS.discord },
    ],
  },
  {
    title: "VÍDEOS",
    links: [
      { label: "Tráiler oficial", href: LINKS.trailer1 },
      { label: "Gameplay / avance", href: LINKS.trailer2 },
    ],
  },
  {
    title: "FAN PAGE",
    links: [
      { label: "Tráiler", href: "#trailer" },
      { label: "Novedades", href: "#novedades" },
      { label: "Pokédex Gamma", href: "#pokedex" },
      { label: "Región", href: "#region" },
      { label: "Descargar", href: "#descargar" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-pine-700 bg-pine-950">
      {/* franja decorativa tipo hierba alta */}
      <div className="flex h-3 overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className={`h-full flex-1 ${
              i % 5 === 0 ? "bg-gamma-600" : i % 5 === 2 ? "bg-pine-700" : "bg-pine-800"
            }`}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <span className="pixel-corners-sm flex h-10 w-10 items-center justify-center border-2 border-gamma-500 bg-pine-900 text-gamma-400">
              <IconBall className="h-6 w-6" />
            </span>
            <span className="font-display text-[10px] leading-tight text-ink">
              GAMMA<span className="text-gamma-400">·</span>EMERALD
              <span className="mt-0.5 block font-term text-base font-normal tracking-[0.25em] text-dim">
                FAN PAGE NO OFICIAL
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-fog">
            Web tributo creada por fans para celebrar el remake HD-2D de
            UndreamedPanic. Sin ánimo de lucro, con mucho cariño y una pizca de
            radiación gamma.
          </p>
          <p className="mt-5 flex items-center gap-2 font-term text-lg text-dim">
            <IconLeaf className="h-4 w-4 text-gamma-500" /> HECHO CON BAYAS ARANJA
          </p>
        </div>

        {COLS.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h4 className="font-term text-lg tracking-[0.35em] text-gamma-500">
              ▚ {c.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="link-underline group inline-flex items-center gap-2 font-body text-sm text-fog hover:text-gamma-300"
                  >
                    {l.href.startsWith("http") && (
                      <IconExt className="h-3 w-3 text-dim transition-colors group-hover:text-gamma-400" />
                    )}
                    {l.href.startsWith("#") && (
                      <IconPlay className="h-2.5 w-2.5 text-dim transition-colors group-hover:text-gamma-400" />
                    )}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t-2 border-pine-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-term text-base leading-snug text-dim">
            © 2026 COMUNIDAD GAMMA · SITIO DE FANS SIN AFILIACIÓN CON NINTENDO,
            GAME FREAK NI THE POKÉMON COMPANY. POKÉMON ES MARCA DE SUS
            RESPECTIVOS PROPIETARIOS.
          </p>
          <p className="shrink-0 font-display text-[8px] text-pine-600">
            SAVE COMPLETE ▮ NO CONTINUES NEEDED
          </p>
        </div>
      </div>
    </footer>
  );
}
