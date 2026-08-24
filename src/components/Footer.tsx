import { LINKS } from "../lib/data";
import {
  IconBall,
  IconExt,
  IconLeaf,
  IconPlay,
  IconDiscord,
  IconItch,
  IconGamepad,
} from "./Icons";

const COLS: {
  title: string;
  links: { label: string; href: string; icon?: (p: { className?: string }) => React.ReactElement }[];
}[] = [
  {
    title: "THE GAME",
    links: [
      { label: "Early Access · itch.io", href: LINKS.itch, icon: IconItch },
      { label: "GameJolt page", href: LINKS.gamejolt, icon: IconGamepad },
      { label: "Classic demo (2025)", href: LINKS.itchDemo, icon: IconItch },
      { label: "Official Discord", href: LINKS.discord, icon: IconDiscord },
    ],
  },
  {
    title: "VIDEOS",
    links: [
      { label: "Official trailer", href: LINKS.trailer1 },
      { label: "Gameplay showcase", href: LINKS.trailer2 },
      { label: "Devlog — 15 days", href: LINKS.trailer3 },
    ],
  },
  {
    title: "FAN PAGE",
    links: [
      { label: "Trailers", href: "#trailer" },
      { label: "Features", href: "#novedades" },
      { label: "Starters", href: "#iniciales" },
      { label: "Region", href: "#region" },
      { label: "Download", href: "#descargar" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-pine-700 bg-pine-950">
      {/* tall-grass decorative strip */}
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
                UNOFFICIAL FAN PAGE
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-fog">
            A tribute site built by fans to celebrate UndreamedPanic's HD-2D
            remake. Non-profit, full of love and sprinkled with a little gamma
            radiation.
          </p>
          <p className="mt-5 flex items-center gap-2 font-term text-lg text-dim">
            <IconLeaf className="h-4 w-4 text-gamma-500" /> MADE WITH SITRUS
            BERRIES
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
                    {l.icon ? (
                      <l.icon className="h-3.5 w-3.5 text-dim transition-colors group-hover:text-gamma-400" />
                    ) : l.href.startsWith("http") ? (
                      <IconExt className="h-3 w-3 text-dim transition-colors group-hover:text-gamma-400" />
                    ) : (
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
            © 2026 GAMMA COMMUNITY · FAN SITE WITH NO AFFILIATION TO NINTENDO,
            GAME FREAK, CREATURES INC. OR THE POKÉMON COMPANY. POKÉMON IS A
            TRADEMARK OF ITS RESPECTIVE OWNERS.
          </p>
          <p className="shrink-0 font-display text-[8px] text-pine-600">
            SAVE COMPLETE ▮ NO CONTINUES NEEDED
          </p>
        </div>
      </div>
    </footer>
  );
}
