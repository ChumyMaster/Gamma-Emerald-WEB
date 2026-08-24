import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../lib/motion";
import { IconBall } from "./Icons";

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const k = reduced ? 0.22 : 1;
    const timers = [
      window.setTimeout(() => setStage(1), 650 * k),
      window.setTimeout(() => setStage(2), 1750 * k),
      window.setTimeout(() => setStage(3), 2650 * k),
    ];
    const done = window.setTimeout(onDone, 3900 * k + 400);
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.clearTimeout(done);
    };
  }, [onDone, reduced]);

  return (
    <div
      className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-pine-950 px-6 select-none"
      onClick={onDone}
      role="button"
      aria-label="Comenzar — saltar introducción"
    >
      <div className="absolute top-5 right-6 font-term text-xl text-dim tracking-widest">
        TOCA PARA SALTAR ▸▸
      </div>

      <div className="flex flex-col items-center gap-7 text-center">
        <div
          className={`font-term text-3xl sm:text-4xl tracking-[0.35em] text-gamma-300 transition-opacity duration-500 ${
            stage >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          UNDREAMEDPANIC<span className="blink">▌</span>
        </div>

        <div
          className={`font-term text-xl tracking-[0.5em] text-fog transition-opacity duration-500 ${
            stage >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          — PRESENTA —
        </div>

        <div
          className={`relative transition-all duration-700 ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="pixel-corners-sm orbit-glow h-24 w-24 bg-[radial-gradient(circle_at_35%_30%,#c9ffdd_0%,#5dff8f_38%,#0e9e4e_72%,#081a11_100%)] shadow-[0_0_60px_rgba(93,255,143,0.45)]" />
          <div className="absolute inset-0 flex items-center justify-center text-pine-950">
            <IconBall className="h-10 w-10 opacity-80" />
          </div>
        </div>

        <div
          className={`transition-opacity duration-500 ${
            stage >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-display title-gamma text-lg sm:text-2xl leading-relaxed">
            GAMMA EMERALD
          </div>
          <div className="mt-4 inline-block pixel-corners-sm blink border-2 border-gamma-500 bg-pine-900 px-5 py-2 font-term text-xl tracking-[0.3em] text-gamma-300">
            ▶ PULSA START
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 font-term text-lg text-dim tracking-widest">
        ©2026 FANGAME · HECHO POR FANS, PARA FANS
      </div>
    </div>
  );
}
