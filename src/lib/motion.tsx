import {
  ReactNode,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

const SCRAMBLE_CHARS = "▓▒░<>/#%&@*+=¤";

/** Decodifica un texto tipo terminal: caracteres aleatorios que se fijan de izquierda a derecha. */
export function useScramble(text: string, active: boolean, speed = 26) {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(() =>
    text.replace(/[^ ]/g, () =>
      SCRAMBLE_CHARS.charAt(Math.floor(Math.random() * SCRAMBLE_CHARS.length))
    )
  );
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const fixed = Math.floor(frame / 2);
      setOut(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < fixed) return ch;
            return SCRAMBLE_CHARS.charAt(
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            );
          })
          .join("")
      );
      if (fixed >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, active, reduced, speed]);
  return out;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "pop" | "none";
  style?: CSSProperties;
};

/** Envoltorio de scroll-reveal con IntersectionObserver (una sola vez). */
export function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${dir} ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
