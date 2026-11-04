"use client";

import { useEffect, useState, type ComponentType, type ReactNode } from "react";

type LiquidGlassType = ComponentType<Record<string, unknown>>;

/** Fixed mouse position: disables the library's mousemove tracking and per-move re-renders. */
const STILL = { x: 0, y: 0 };

/** Start fetching the library as soon as this module runs in the browser. */
const glassModule = typeof window !== "undefined" ? import("liquid-glass-react") : null;

/**
 * Glass panel. Renders instantly as a plain translucent block, then upgrades to
 * liquid-glass-react once the library has loaded, with the same size and padding
 * so nothing jumps.
 */
export function GlassPanel({
  children,
  className = "",
  padding = "28px 32px",
  cornerRadius = 24,
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
  cornerRadius?: number;
}) {
  const [LiquidGlass, setLiquidGlass] = useState<LiquidGlassType | null>(null);

  useEffect(() => {
    // Phones and touch devices keep the static panel: the SVG filter is heavy and looks wrong there.
    if (window.matchMedia("(max-width: 767px), (hover: none)").matches) return;
    let cancelled = false;
    (glassModule ?? import("liquid-glass-react")).then((m) => {
      if (!cancelled) setLiquidGlass(() => m.default as unknown as LiquidGlassType);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!LiquidGlass) {
    return (
      <div className={`glass-wrap ${className}`}>
        <div className="glass glass-static w-full" style={{ padding, borderRadius: cornerRadius }}>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-wrap ${className}`}>
      <LiquidGlass
        style={{ position: "relative", top: 0, left: 0 }}
        displacementScale={36}
        blurAmount={0.03}
        saturation={112}
        aberrationIntensity={1.2}
        elasticity={0}
        globalMousePos={STILL}
        mouseOffset={STILL}
        cornerRadius={cornerRadius}
        padding={padding}
        mode="standard"
      >
        {children}
      </LiquidGlass>
    </div>
  );
}
