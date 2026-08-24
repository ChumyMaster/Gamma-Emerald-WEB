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
  const words = title.split(" ");
  return (
    <div className="max-w-3xl">
      <Reveal dir="none">
        <span
          className={`tag-tilt inline-flex items-center gap-2 rounded-full border-2 border-pine-600 bg-pine-900/85 px-4 py-1.5 font-term text-xs font-bold tracking-[0.28em] ${accent}`}
        >
          ◆ {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 font-display text-4xl leading-[1.06] text-ink sm:text-5xl">
          {words.map((w, i) => (
            <span key={i}>
              {i % 2 === 1 ? (
                <span className="text-gamma-400">{w}</span>
              ) : (
                w
              )}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={180}>
          <p className="mt-5 text-lg font-semibold leading-relaxed text-fog">
            {desc}
          </p>
        </Reveal>
      )}
      <Reveal delay={240} dir="none">
        <div className="mt-6 flex items-center gap-2" aria-hidden>
          <span className="h-1.5 w-16 rounded-full bg-gamma-500" />
          <span className="h-1.5 w-7 rounded-full bg-ember-400" />
          <span className="h-1.5 w-3 rounded-full bg-aqua-400" />
        </div>
      </Reveal>
    </div>
  );
}
