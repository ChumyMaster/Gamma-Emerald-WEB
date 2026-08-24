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
  return (
    <div className="max-w-3xl">
      <Reveal dir="none">
        <p className={`font-term text-xl tracking-[0.35em] ${accent}`}>
          ▚ {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-3 font-display text-xl leading-relaxed text-ink sm:text-2xl xl:text-3xl">
          {title.split(" ").map((w, i) => (
            <span key={i}>
              {i % 2 === 1 ? <span className="text-gamma-400">{w}</span> : w}
              {i < title.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={180}>
          <p className="mt-4 font-body text-base leading-relaxed text-fog sm:text-lg">
            {desc}
          </p>
        </Reveal>
      )}
      <Reveal delay={240} dir="none">
        <div className="mt-6 flex items-center gap-2" aria-hidden>
          <span className="h-1 w-14 bg-gamma-500" />
          <span className="h-1 w-6 bg-ember-400" />
          <span className="h-1 w-3 bg-aqua-400" />
        </div>
      </Reveal>
    </div>
  );
}
