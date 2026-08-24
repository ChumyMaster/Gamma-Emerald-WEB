import { useEffect, useState } from "react";
import { NAV } from "../lib/data";
import { IconBall, IconBolt } from "./Icons";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* barra de progreso estilo barra de PS */}
      <div className="h-[3px] w-full bg-pine-800">
        <div
          className="h-full bg-gradient-to-r from-gamma-600 via-gamma-400 to-ember-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-pine-950/95 shadow-[0_6px_0_rgba(13,39,24,0.8)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#inicio"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="pixel-corners-sm flex h-9 w-9 items-center justify-center border-2 border-gamma-500 bg-pine-900 text-gamma-400 transition-transform duration-300 group-hover:rotate-[360deg]">
              <IconBall className="h-5 w-5" />
            </span>
            <span className="font-display text-[9px] leading-tight text-ink sm:text-[10px]">
              GAMMA
              <span className="text-gamma-400">·</span>EMERALD
              <span className="mt-0.5 block font-term text-sm font-normal tracking-[0.25em] text-dim">
                FAN PAGE ES
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="group px-3 py-2 font-display text-[9px] tracking-wider text-fog transition-colors hover:text-gamma-400"
              >
                <span className="mr-1 inline-block text-gamma-500 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ▸
                </span>
                {n.label}
              </a>
            ))}
            <a
              href="#descargar"
              className="btn-pixel pixel-corners-sm ml-3 inline-flex items-center gap-2 border-2 border-gamma-500 bg-gamma-600 px-4 py-2.5 text-[9px] text-pine-950 shadow-[4px_4px_0_rgba(47,224,111,0.3)] hover:bg-gamma-400"
            >
              <IconBolt className="h-3.5 w-3.5" /> JUGAR GRATIS
            </a>
          </div>

          <button
            className="pixel-corners-sm flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-pine-600 bg-pine-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-5 bg-gamma-400 transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gamma-400 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gamma-400 transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* menú móvil */}
        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mx-4 mb-4 border-2 border-pine-700 bg-pine-900/95 p-3">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-pine-800 px-3 py-3 font-display text-[10px] text-fog transition-colors last:border-0 hover:bg-pine-800 hover:text-gamma-400"
                >
                  ▸ {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
