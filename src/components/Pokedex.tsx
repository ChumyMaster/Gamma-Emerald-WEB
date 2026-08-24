import { useEffect, useRef, useState } from "react";
import { Reveal } from "../lib/motion";
import { FAKEMON, Fakaemon } from "../lib/data";
import SectionHead from "./SectionHead";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function DexCard({ mon, index }: { mon: Fakaemon; index: number }) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Reveal delay={index * 130} className="h-full">
      <article
        ref={ref}
        className="lift group pixel-corners flex h-full flex-col border-2 border-pine-700 bg-pine-900 hover:border-gamma-600"
      >
        <header className="flex items-center justify-between border-b-2 border-pine-700 px-5 py-3">
          <span className="font-term text-xl tracking-widest text-dim">
            {mon.num}
          </span>
          <span className="flex gap-1.5">
            {mon.types.map((t) => (
              <span
                key={t.label}
                className="pixel-corners-sm border px-2 py-0.5 font-display text-[7px]"
                style={{
                  color: t.color,
                  borderColor: t.color,
                  background: `${t.color}1a`,
                }}
              >
                {t.label}
              </span>
            ))}
          </span>
        </header>

        {/* vitrina del sprite */}
        <div
          className="relative overflow-hidden border-b-2 border-pine-700"
          style={{
            background: `radial-gradient(circle at 50% 42%, ${mon.glow} 0%, rgba(8,26,17,0) 68%)`,
          }}
        >
          <img
            src={mon.img}
            alt={`Sprite de ${mon.name}`}
            className="sprite-hop img-pixel relative z-10 mx-auto aspect-square w-44 object-cover sm:w-48"
          />
          {/* barrido de escáner */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 overflow-hidden opacity-40">
            <div className="scan-sweep h-14 w-full bg-gradient-to-b from-transparent via-gamma-400/30 to-transparent" />
          </div>
          <span className="absolute top-2 right-3 font-term text-base tracking-widest text-dim">
            SCANNING…
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 py-4">
          <h3 className="font-display text-xs tracking-wide text-ink">
            {mon.name}
          </h3>
          <p className="mt-2.5 font-term text-xl leading-snug text-fog">
            {mon.desc}
          </p>

          <div className="mt-4 space-y-2">
            {mon.stats.map((s, i) => (
              <div key={s.label} className="grid grid-cols-[42px_1fr_40px] items-center gap-2">
                <span className="font-term text-base text-dim">{s.label}</span>
                <div className="bar-track h-2.5">
                  <div
                    className="bar-fill h-full"
                    style={{
                      width: inView ? `${Math.min(100, Math.round(s.value / 1.2))}%` : "3%",
                      background: s.value >= 100 ? "#ffc857" : "#2fe06f",
                      transitionDelay: `${200 + i * 120}ms`,
                    }}
                  />
                </div>
                <span
                  className="text-right font-term text-lg"
                  style={{ color: s.value >= 100 ? "#ffc857" : "#8dffb0" }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <footer className="mt-auto flex items-center justify-between pt-5">
            <span className="pixel-corners-sm border border-pine-600 bg-pine-950 px-2.5 py-1 font-term text-base text-aqua-400">
              HAB. {mon.ability}
            </span>
            <span className="font-term text-base text-dim">CAPTURA 45</span>
          </footer>
        </div>
      </article>
    </Reveal>
  );
}

export default function Pokedex() {
  return (
    <section id="pokedex" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* resplandor ambiental de fondo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(47,224,111,0.14) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="NUEVAS ENTRADAS · ROTURA DEL CONTADOR"
          title="POKÉDEX GAMMA"
          desc="La tormenta mutó a algunas criaturas de la región. El profesor las registra con el prefijo G: tres avistamientos confirmados hasta la build 0.9."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FAKEMON.map((m, i) => (
            <DexCard key={m.num} mon={m} index={i} />
          ))}
        </div>

        <Reveal delay={200} dir="none">
          <p className="mt-10 text-center font-term text-lg tracking-widest text-dim">
            ※ REGISTRO NO OFICIAL — CRIATURAS CONCEPTUALES DE FANS, INSPIRADAS EN
            LA ENERGÍA GAMMA DEL JUEGO
          </p>
        </Reveal>
      </div>
    </section>
  );
}
