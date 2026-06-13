"use client";

import { useEffect, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf: number;

    async function init() {
      try {
        const LenisModule = await import("lenis");
        const LenisClass = LenisModule.default ?? LenisModule;
        lenis = new (LenisClass as new (opts: object) => typeof lenis & { raf: (t: number) => void; destroy: () => void })({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        function loop(time: number) {
          lenis?.raf(time);
          raf = requestAnimationFrame(loop);
        }
        raf = requestAnimationFrame(loop);
      } catch {
        // lenis not available, skip smooth scroll
      }
    }

    init();

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
