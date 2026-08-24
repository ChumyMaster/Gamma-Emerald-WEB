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
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* barra de progreso */}
      <div className="h-1 w-full bg-pine-800">
        <div
          className="h-full rounded-r-full bg-gradient-to-r from-gamma-600 via-gamma-400 to-ember-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-pine-950/90 shadow-[0_10px_30px_-12px_rgba(2,12,8,0.8)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="pixel-corners-sm shine flex h-11 w-11 items-center justify-center border-2 border-gamma-500 bg-pine-900 text-gamma-400 transition-transform duration-500 group-hover:rotate-[360deg]">
              <IconBall className="h-6 w-6" />
            </span>
            <span className="font-display text-sm leading-none text-ink">
              GAMMA<span className="text-gamma-400">·</span>EMERALD
              <span className="mt-1 block font-term text-[11px] font-bold tracking-[0.25em] text-dim">
                UNOFFICIAL FAN PAGE
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="group relative px-3.5 py-2 font-term text-sm font-bold tracking-wide text-fog transition-colors hover:text-gamma-300"
              >
                {n.label}
                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-gamma-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#descargar"
              className="btn-pixel shine ml-3 inline-flex items-center gap-2 rounded-full border-b-4 border-gamma-700 bg-gamma-500 px-6 py-2.5 text-sm text-pine-950 shadow-[0_10px_22px_-8px_rgba(52,211,153,0.6)] hover:bg-gamma-400"
            >
              <IconBolt className="h-4 w-4" /> PLAY FREE
            </a>
          </div>

          <button
            className="pixel-corners-sm flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-2 border-pine-600 bg-pine-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-gamma-400 transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-gamma-400 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-gamma-400 transition-transform duration-200 ${
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
            <div className="mx-4 mb-4 rounded-2xl border-2 border-pine-700 bg-pine-900/95 p-3 backdrop-blur-md">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border-b border-pine-800 px-4 py-3.5 font-term text-sm font-bold text-fog transition-colors last:border-0 hover:bg-pine-800 hover:text-gamma-300"
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
