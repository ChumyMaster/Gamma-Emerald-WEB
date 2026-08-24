import { Reveal } from "../lib/motion";

export default function SectionHead({
  eyebrow,
  title,
  desc,
  accent = "text-gamma-400",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  accent?: string;
}) {
  const word = title.split(" ")[0];
  return (
    <div className="relative max-w-3xl">
      {/* palabra gigante de fondo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -left-3 z-0 font-display text-[17vw] leading-none text-transparent opacity-[0.06] select-none sm:-top-16"
        style={{ WebkitTextStroke: "1.5px #34d399" }}
      >
        {word}
      </span>

      <div className="relative z-10">
        <Reveal dir="none">
          <p className={`font-term text-sm font-bold tracking-[0.35em] ${accent}`}>
            ★ {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="title-ink mt-3 font-display text-3xl leading-tight sm:text-4xl xl:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={160} dir="none">
          <div className="shimmer-bar mt-5 h-1.5 w-40" aria-hidden />
        </Reveal>
        {desc && (
          <Reveal delay={220}>
            <p className="mt-5 font-body text-base leading-relaxed text-fog sm:text-lg">
              {desc}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
