import { useEffect, useRef, useState } from "react";
import { useScramble, usePrefersReducedMotion } from "../lib/motion";
import { IMG, TICKER } from "../lib/data";
import { IconBolt, IconPlay, IconSpark, IconDownload } from "./Icons";

export default function Hero({ live }: { live: boolean }) {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [off, setOff] = useState(0);

  const t1 = useScramble("GAMMA", live, 30);
  const t2 = useScramble("EMERALD", live, 26);

  /* scroll parallax with rAF */
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOff(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  /* spotlight that follows the cursor */
  const onMove = (e: React.MouseEvent) => {
    if (reduced || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty(
      "--mx",
      `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`
    );
    sectionRef.current.style.setProperty(
      "--my",
      `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`
    );
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* background: real gameplay GIF with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: reduced ? undefined : `translateY(${off * 0.32}px)` }}
      >
        <img
          src={IMG.gameplayGif}
          alt=""
          aria-hidden
          className="kenburns h-[115%] w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/80 to-pine-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-pine-950/70" />
      </div>

      {/* cursor spotlight */}
      <div className="spotlight pointer-events-none absolute inset-0 z-[3] mix-blend-screen" aria-hidden />

      {/* light rays */}
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
        <div className="god-ray ray absolute -top-20 right-[12%] h-[140%] w-36" />
        <div
          className="god-ray ray absolute -top-20 right-[30%] h-[140%] w-20"
          style={{ animationDelay: "2.2s" }}
        />
      </div>

      <div
        className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14"
        style={{ transform: reduced ? undefined : `translateY(${off * 0.08}px)` }}
      >
        {/* left column */}
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="tag-tilt pixel-corners-sm inline-flex items-center gap-2 border-2 border-ember-400 bg-pine-900/90 px-4 py-1.5 font-term text-sm font-bold tracking-[0.22em] text-ember-300">
              <IconSpark className="h-4 w-4" /> EARLY ACCESS · v1.13.1
            </span>
            <span className="pixel-corners-sm inline-flex items-center gap-2 border border-pine-600 bg-pine-900/90 px-4 py-1.5 font-term text-sm tracking-[0.22em] text-fog">
              FAN GAME · HD-2D · UNREAL ENGINE 5
            </span>
          </div>

          <p className="mt-7 font-term text-xl font-semibold tracking-[0.4em] text-gamma-400">
            ▚ POKÉMON
          </p>
          <h1 className="mt-1 font-display leading-[1.05]">
            <span className="title-gamma block text-6xl sm:text-7xl xl:text-8xl">
              {t1}
            </span>
            <span className="title-ember block text-6xl sm:text-7xl xl:text-8xl">
              {t2}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
            Hoenn rebuilt <strong className="text-gamma-300">from the ground up</strong>{" "}
            in Unreal Engine 5: day/night cycle, berries, egg breeding, P2P
            trading and an HD-2D world drawn tile by tile by{" "}
            <strong className="text-ember-300">UndreamedPanic</strong>. Free,
            forever.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#descargar"
              className="btn-pixel pixel-corners shine inline-flex items-center gap-3 border-b-8 border-gamma-700 bg-gamma-500 px-8 py-4 text-sm text-pine-950 hover:bg-gamma-400"
            >
              <IconDownload className="h-4 w-4" /> DOWNLOAD NOW
            </a>
            <a
              href="#trailer"
              className="btn-pixel pixel-corners shine inline-flex items-center gap-3 border-2 border-pine-600 bg-pine-900/90 px-8 py-4 text-sm text-gamma-300 hover:border-gamma-500"
            >
              <IconPlay className="h-4 w-4" /> WATCH TRAILER
            </a>
          </div>

          <p className="blink mt-9 font-term text-base tracking-[0.3em] text-gamma-400">
            ▶ PRESS START TO BEGIN YOUR ADVENTURE
          </p>
        </div>

        {/* right column: battle widget */}
        <div
          className="relative mx-auto w-full max-w-md"
          style={{ transform: reduced ? undefined : `translateY(${off * -0.05}px)` }}
        >
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] border-2 border-pine-700/70" aria-hidden />
          <div className="pixel-corners shine border-2 border-pine-600 bg-pine-900/95 p-3 shadow-[0_30px_60px_-20px_rgba(4,22,15,0.9)]">
            <div className="flex items-center justify-between border-b-2 border-pine-700 px-2 pb-2">
              <span className="font-display text-[9px] text-fog">
                BATTLE · ROUTE 101
              </span>
              <span className="flex gap-1.5" aria-hidden>
                <i className="h-2 w-2 rounded-full bg-coral-400" />
                <i className="h-2 w-2 rounded-full bg-ember-400" />
                <i className="h-2 w-2 rounded-full bg-gamma-500" />
              </span>
            </div>

            <div className="pixel-corners-sm relative mt-2 overflow-hidden">
              <img
                src={IMG.eaShot1}
                alt="Real HD-2D battle from the Gamma Emerald Early Access"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="pixel-corners-sm absolute top-2 left-2 w-44 border-2 border-pine-600 bg-pine-950/90 p-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[8px] text-ink">POOCHYENA</span>
                  <span className="font-term text-sm text-ember-400">Lv2</span>
                </div>
                <div className="bar-track mt-1.5 h-2.5">
                  <div className="hp-live h-full" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="toast-pop pixel-corners-sm absolute bottom-2 right-2 border-2 border-ember-400 bg-pine-950/95 px-3 py-1.5 font-term text-base text-ember-300">
                It's super effective!
              </div>
            </div>

            <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <div className="pixel-corners-sm border-2 border-pine-700 bg-pine-950 p-2.5">
                <p className="font-term text-lg leading-tight text-ink">
                  What will <span className="text-gamma-400">MUDKIP</span> do?
                </p>
                <div className="bar-track mt-2 h-2">
                  <div className="xp-live h-full bg-aqua-400" style={{ width: "8%" }} />
                </div>
                <p className="mt-1 font-term text-xs text-dim">EXP · Lv5 → Lv6</p>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["FIGHT", "BAG", "POKÉMON", "RUN"].map((b, i) => (
                  <span
                    key={b}
                    className={`pixel-corners-sm flex items-center justify-center border-2 px-3 font-term text-xs font-bold tracking-wider ${
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

          <div className="pixel-corners-sm floaty absolute -top-4 -right-3 border-2 border-ember-400 bg-pine-950 px-3 py-1.5 font-term text-base text-ember-400 shadow-[0_14px_30px_-10px_rgba(251,191,36,0.45)]">
            <IconBolt className="mr-1 inline h-3.5 w-3.5" /> GAMMA ENERGY +42%
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#trailer"
        className="group absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5"
        aria-label="Scroll down to the trailers"
      >
        <span className="font-term text-xs tracking-[0.35em] text-fog transition-colors group-hover:text-gamma-400">
          EXPLORE HOENN
        </span>
        <svg
          viewBox="0 0 24 24"
          className="cue-bounce h-5 w-5 text-gamma-400"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 17.4 4.6 10l2-2L12 13.4 17.4 8l2 2z" />
        </svg>
      </a>
    </section>
  );
}

/* locations marquee */
export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee relative z-10 overflow-hidden border-y-2 border-pine-700 bg-pine-900/90 py-3">
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-term text-lg font-semibold tracking-[0.3em] whitespace-nowrap transition-transform duration-300 hover:scale-110"
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
