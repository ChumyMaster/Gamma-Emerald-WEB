import { useEffect, useState } from "react";
import { IconExt } from "./Icons";

const TRACK = {
  id: "zf9rqmkXCFA",
  title: "ROUTE 101",
  sub: "Pokémon Emerald · Original theme",
  url: "https://www.youtube.com/watch?v=zf9rqmkXCFA",
};

/** Radio flotante con el tema de la primera ruta del juego. */
export default function MusicPlayer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {/* panel */}
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pixel-corners shine w-[19rem] border-2 border-pine-600 bg-pine-900/95 p-3 shadow-[0_30px_60px_-18px_rgba(4,22,15,0.95)] sm:w-80">
            <div className="flex items-center justify-between gap-2 px-1 pb-2">
              <div className="min-w-0">
                <p className="font-display text-[10px] text-ink">
                  🎵 HOENN RADIO
                </p>
                <p className="truncate font-term text-sm tracking-widest text-gamma-400">
                  {TRACK.title} — {TRACK.sub}
                </p>
              </div>
              {/* ecualizador */}
              <div
                className="flex h-6 items-end gap-[3px]"
                aria-hidden
                data-eq={open ? "on" : "off"}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`eq-bar w-[5px] rounded-sm ${
                      i % 2 ? "bg-ember-400" : "bg-gamma-500"
                    }`}
                    style={{ animationDelay: `${i * 0.13}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="pixel-corners-sm overflow-hidden border-2 border-pine-700 bg-pine-950">
              {open && (
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube-nocookie.com/embed/${TRACK.id}?autoplay=1&rel=0&color=white`}
                  title={`${TRACK.title} — ${TRACK.sub}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="flex items-center justify-between px-1 pt-2">
              <p className="font-term text-xs text-dim">
                If silent, press ▶ on the video
              </p>
              <a
                href={TRACK.url}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1 font-term text-sm text-gamma-400 hover:text-gamma-300"
              >
                YouTube <IconExt className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* botón */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close the radio" : "Open the radio: Route 101 theme"}
        data-cursor
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border-b-4 border-gamma-700 bg-gamma-500 text-pine-950 shadow-[0_16px_34px_-10px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-gamma-400 active:translate-y-0 active:border-b-2"
      >
        <span
          className={`absolute inset-0 rounded-full border-2 border-gamma-400 transition-all duration-500 ${
            open ? "scale-125 opacity-0" : "music-ping opacity-60"
          }`}
          aria-hidden
        />
        <svg
          viewBox="0 0 24 24"
          className={`h-6 w-6 transition-transform duration-500 ${
            open ? "rotate-[360deg] scale-0 opacity-0" : ""
          }`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9 3v10.55A4 4 0 1 0 11 17V7h8V3H9Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className={`absolute h-5 w-5 transition-all duration-500 ${
            open ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M6 6h4v12H6zM14 6h4v12h-4z" />
        </svg>
      </button>

      <span
        className={`pixel-corners-sm pointer-events-none border border-pine-600 bg-pine-950/95 px-3 py-1.5 font-term text-sm tracking-widest text-fog transition-all duration-300 ${
          open ? "translate-y-1 opacity-0" : "opacity-100"
        } group-hover:opacity-0`}
      >
        ♪ MUSIC: ROUTE 101
      </span>
    </div>
  );
}
