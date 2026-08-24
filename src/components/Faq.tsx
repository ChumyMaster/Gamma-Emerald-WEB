import { useState } from "react";
import { Reveal } from "../lib/motion";
import { FAQS } from "../lib/data";
import SectionHead from "./SectionHead";

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 border-t-2 border-pine-800 bg-pine-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            eyebrow="CENTRO POKÉMON · MOSTRADOR"
            title="PREGUNTAS FRECUENTES"
            desc="Todo lo que la comunidad pregunta antes de pulsar START: precio, plataformas, idioma y el estado legal del proyecto."
          />
          <Reveal delay={260} dir="none">
            <div className="pixel-corners mt-8 border-2 border-pine-700 bg-pine-950 p-5">
              <p className="font-term text-xl leading-snug text-fog">
                ¿TU DUDA NO ESTÁ AQUÍ? Los comentarios de{" "}
                <span className="text-gamma-300">itch.io</span> y{" "}
                <span className="text-ember-400">GameJolt</span> son el canal
                directo con UndreamedPanic.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 70} dir="right">
                <div
                  className={`pixel-corners border-2 transition-colors duration-300 ${
                    isOpen
                      ? "border-gamma-500 bg-pine-850"
                      : "border-pine-700 bg-pine-900 hover:border-pine-500"
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-3">
                      <span
                        className={`font-term text-xl ${
                          isOpen ? "text-ember-400" : "text-dim"
                        }`}
                      >
                        Q{i + 1}
                      </span>
                      <span
                        className={`font-body text-base font-semibold sm:text-lg ${
                          isOpen ? "text-gamma-300" : "text-ink"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`pixel-corners-sm flex h-8 w-8 shrink-0 items-center justify-center border-2 font-term text-xl transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-ember-400 text-ember-400"
                          : "border-pine-600 text-fog"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="border-t border-dashed border-pine-700 px-5 py-4 pl-14 font-body text-sm leading-relaxed text-fog sm:text-[0.95rem]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
