import { useEffect, useRef, useState } from "react";
import { Reveal } from "../lib/motion";
import { STARTERS, Starter } from "../lib/data";
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

function StarterCard({
  mon,
  index,
  picked,
  onPick,
}: {
  mon: Starter;
  index: number;
  picked: boolean;
  onPick: () => void;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Reveal delay={index * 130} className="h-full">
      <article
        ref={ref}
        className={`lift group relative flex h-full flex-col border-2 bg-pine-900 transition-colors duration-300 ${
          picked ? "pixel-corners" : "pixel-corners"
        }`}
        style={{
          borderColor: picked ? mon.accent : "#143624",
          boxShadow: picked ? `8px 8px 0 ${mon.glow}` : undefined,
        }}
      >
        {/* badge de selección */}
        <span
          className={`pixel-corners-sm absolute -top-3 -right-2 z-20 border-2 px-2.5 py-1 font-term text-base tracking-widest transition-all duration-300 ${
            picked
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-75 opacity-0"
          }`}
          style={{
            background: mon.accent,
            borderColor: mon.accent,
            color: "#050f0a",
          }}
        >
          ✓ EN TU EQUIPO
        </span>

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

        {/* vitrina del artwork oficial */}
        <div
          className="relative flex items-center justify-center overflow-hidden border-b-2 border-pine-700"
          style={{
            background: `radial-gradient(circle at 50% 45%, ${mon.glow} 0%, rgba(8,26,17,0) 70%)`,
          }}
        >
          <img
            src={mon.img}
            alt={`Arte oficial de ${mon.name}`}
            className="sprite-hop relative z-10 w-40 py-4 drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)] sm:w-44"
          />
          {/* barrido de escáner */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 overflow-hidden opacity-40">
            <div className="scan-sweep h-14 w-full bg-gradient-to-b from-transparent via-gamma-400/30 to-transparent" />
          </div>
          <span className="absolute top-2 right-3 font-term text-base tracking-widest text-dim">
            LAB. ABEDUL
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
              <div
                key={s.label}
                className="grid grid-cols-[42px_1fr_40px] items-center gap-2"
              >
                <span className="font-term text-base text-dim">{s.label}</span>
                <div className="bar-track h-2.5">
                  <div
                    className="bar-fill h-full"
                    style={{
                      width: inView
                        ? `${Math.min(100, Math.round((s.value / 70) * 100))}%`
                        : "3%",
                      background: mon.accent,
                      transitionDelay: `${200 + i * 120}ms`,
                    }}
                  />
                </div>
                <span
                  className="text-right font-term text-lg"
                  style={{ color: mon.accent }}
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
            <button
              onClick={onPick}
              className={`btn-pixel pixel-corners-sm border-2 px-4 py-2 font-display text-[8px] ${
                picked
                  ? "text-pine-950"
                  : "border-pine-600 bg-pine-950 text-fog hover:border-gamma-500 hover:text-gamma-300"
              }`}
              style={picked ? { background: mon.accent, borderColor: mon.accent } : undefined}
            >
              {picked ? "ELEGIDO ✓" : "ELEGIR"}
            </button>
          </footer>
        </div>
      </article>
    </Reveal>
  );
}

export default function Starters() {
  const [picked, setPicked] = useState<number>(-1);

  return (
    <section id="iniciales" className="relative scroll-mt-24 py-20 sm:py-28">
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
          eyebrow="LABORATORIO DEL PROFESOR ABEDUL"
          title="ELIGE A TU INICIAL"
          desc="Como en todo buen Esmeralda, la decisión arranca en el maletín del profesor: Treecko, Torchic o Mudkip, ahora con animaciones nuevas y luz real sobre los sprites clásicos."
        />

        {/* barra de diálogo estilo juego */}
        <Reveal delay={120} dir="none">
          <div className="pixel-corners mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-2 border-pine-600 bg-pine-900 px-5 py-4">
            <span className="font-term text-xl text-dim">ABEDUL ▸</span>
            <p className="font-term text-xl text-ink sm:text-2xl">
              {picked === -1 ? (
                <>
                  «¡Adelante! Elige a tu compañero de viaje…»
                  <span className="blink text-gamma-400"> ▌</span>
                </>
              ) : (
                <>
                  «¡Buena elección! ¿Así que{" "}
                  <span style={{ color: STARTERS[picked].accent }}>
                    {STARTERS[picked].name}
                  </span>
                  , eh? ¡A tu lado hasta la Liga!»
                </>
              )}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {STARTERS.map((m, i) => (
            <StarterCard
              key={m.num}
              mon={m}
              index={i}
              picked={picked === i}
              onPick={() => setPicked(picked === i ? -1 : i)}
            />
          ))}
        </div>

        <Reveal delay={200} dir="none">
          <p className="mt-10 text-center font-term text-lg tracking-widest text-dim">
            ※ SPRITES Y ESTADÍSTICAS BASE OFICIALES DE LA LÍNEA CLÁSICA DE
            HOENN — EN EL REMAKE LUCEN CON ANIMACIÓN Y LUZ NUEVAS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
