"use client";

import { useEffect } from "react";

/**
 * SmoothScrollProvider
 * ─────────────────────────────────────────────────────────────────────────────
 * Boots Locomotive Scroll v5 on the client only (dynamic import so it never
 * runs on the server / during SSR / Turbopack fast-refresh cycles).
 *
 * Locomotive Scroll v5 attaches itself to <html data-scroll-container> by
 * default, so the only thing needed here is to call `new LocomotiveScroll()`.
 */
export default function SmoothScrollProvider() {
  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scroll = new LocomotiveScroll();

        return () => {
          scroll.destroy();
        };
      } catch (err) {
        // Locomotive Scroll is an enhancement – fail silently
        console.warn("[SmoothScrollProvider] Could not init LocomotiveScroll:", err);
      }
    })();
  }, []);

  return null;
}
