import { useEffect, useRef } from "react";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { IconDownload } from "./Icons";

/** Banner cinematográfico a sangre completa con parallax de scroll. */
export default function Cinematic({
  img,
  kicker,
  title,
  alt,
}: {
  img: string;
  kicker: string;
  title: string;
  alt: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        const im = imgRef.current;
        if (!el || !im) return;
        const r = el.getBoundingClientRect();
        const p =
          (window.innerHeight - r.top) / (window.innerHeight + r.height);
        im.style.transform = `translateY(${((p - 0.5) * 110).toFixed(
          1
        )}px) scale(1.25)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      ref={ref}
      className="relative flex h-[68vh] min-h-[480px] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={img}
          alt={alt}
          className="h-full w-full object-cover will-change-transform"
          style={{ transform: "scale(1.25)" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-pine-950/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950 via-transparent to-pine-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal dir="none">
          <p className="tag-tilt mx-auto inline-block pixel-corners-sm border-2 border-ember-400 bg-pine-950/85 px-5 py-2 font-term text-base tracking-[0.3em] text-ember-400">
            ★ {kicker}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="title-ember mx-auto mt-6 max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <a
            href="#descargar"
            className="btn-pixel pixel-corners mt-9 inline-flex items-center gap-3 border-b-8 border-gamma-700 bg-gamma-500 px-8 py-4 text-sm text-pine-950 hover:bg-gamma-400"
          >
            <IconDownload className="h-4 w-4" /> DESCARGAR GAMMA EMERALD
          </a>
        </Reveal>
      </div>
    </section>
  );
}
