"use client";

import { useEffect, useState, type ComponentType } from "react";
import { useReducedMotion } from "./useReducedMotion";

type LiquidMetalType = ComponentType<Record<string, unknown>>;

/** Start fetching the shader chunk as soon as this module runs in the browser, before the first render. */
const shaderModule = typeof window !== "undefined" ? import("@paper-design/shaders-react") : null;

/** Initials as liquid metal. A plain serif "YA" shows instantly; the shader replaces it as soon as its chunk arrives. */
const MARK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <text x="200" y="262" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-weight="600" font-size="220" letter-spacing="-10" fill="#000">YA</text>
  </svg>`
)}`;

export function LiquidMark({ size = 112, className = "" }: { size?: number; className?: string }) {
  const reduced = useReducedMotion();
  const [LiquidMetal, setLiquidMetal] = useState<LiquidMetalType | null>(null);

  useEffect(() => {
    let cancelled = false;
    (shaderModule ?? import("@paper-design/shaders-react")).then((m) => {
      if (!cancelled) setLiquidMetal(() => m.LiquidMetal as unknown as LiquidMetalType);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <span
        className="absolute inset-0 flex items-center justify-center font-display text-[2.6em] font-semibold leading-none tracking-[-0.04em] text-accent transition-opacity duration-500"
        style={{ opacity: LiquidMetal ? 0 : 1 }}
      >
        YA
      </span>
      {LiquidMetal && (
        <div className="absolute inset-0 animate-[bg-in_600ms_ease-out_forwards] opacity-0">
          <LiquidMetal
            style={{ width: "100%", height: "100%" }}
            image={MARK_SVG}
            shape="none"
            fit="contain"
            scale={1}
            colorBack="#00000000"
            colorTint="#b8603e"
            contour={0.5}
            softness={0.08}
            distortion={0.05}
            repetition={2.4}
            shiftRed={0.25}
            shiftBlue={0.25}
            angle={60}
            speed={reduced ? 0 : 0.6}
          />
        </div>
      )}
    </div>
  );
}
