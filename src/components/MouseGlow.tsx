import { ReactNode, useRef } from "react";
import { usePrefersReducedMotion } from "../lib/motion";

/** Resplandor radial que persigue al cursor dentro de la sección. */
export default function MouseGlow({
  children,
  className = "",
  color = "rgba(52,211,153,0.10)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(
      "--gx",
      `${(e.clientX - r.left).toFixed(0)}px`
    );
    ref.current.style.setProperty(
      "--gy",
      `${(e.clientY - r.top).toFixed(0)}px`
    );
  };

  return (
    <div
      ref={ref}
      className={`mouse-glow relative ${className}`}
      style={{ ["--glow" as string]: color }}
      onMouseMove={onMove}
    >
      {children}
    </div>
  );
}
