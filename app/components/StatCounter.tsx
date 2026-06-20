// @/components/StatCounter.tsx
"use client";
import { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";

export default function StatCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setHasMounted(true);
    const numMatch = value.match(/\d+/);
    if (!numMatch || !ref.current) return;

    const targetValue = parseInt(numMatch[0], 10);
    const suffix = value.replace(numMatch[0], "");
    const isPrefix = value.startsWith(suffix) && suffix !== "+";

    const controls = animate(0, targetValue, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (val) => {
        if (ref.current) {
          const rounded = Math.round(val);
          ref.current.textContent = isPrefix ? `${suffix}${rounded}` : `${rounded}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span ref={ref}>{hasMounted ? "0" : value}</span>;
}