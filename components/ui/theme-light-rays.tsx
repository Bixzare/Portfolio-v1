"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LightRays } from "@/components/ui/light-rays";
import { cn } from "@/lib/utils";

// ─── Accent Palette ──────────────────────────────────────────────────────────
// Dark mode  → Blue rays   (#0F1FA7 primary, #10137B secondary)
// Light mode → Orange rays (#FF5F01 electric, #FF8E18 shiny)

const DARK_RAY_COLOR = "rgba(15, 31, 167, 0.25)";   // Primary Blue at 25% opacity
const LIGHT_RAY_COLOR = "rgba(255, 95, 1, 0.22)";    // Electric Orange at 22% opacity

/**
 * A full-page LightRays background that flips from blue (dark) to orange (light).
 * Positioned as a fixed layer behind all content.
 *
 * Uses `mounted` guard to prevent hydration mismatch — renders nothing on the
 * server, then fades in once the client resolves the theme.
 */
export function ThemeLightRays() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Don't render until hydrated to avoid SSR/client mismatch
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";
  const color = isLight ? LIGHT_RAY_COLOR : DARK_RAY_COLOR;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0",
        // In light mode, override the internal `mix-blend-screen` on rays
        // to `multiply` so orange renders correctly on white backgrounds.
        isLight && "light-rays-multiply",
      )}
      aria-hidden="true"
    >
      <LightRays
        color={color}
        count={8}
        blur={isLight ? 44 : 40}
        speed={16}
        length="85vh"
        className="h-full w-full"
      />
    </div>
  );
}
