"use client";

import { useParallax } from "../hooks/useParallax";

interface ParallaxImageProps {
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  children?: React.ReactNode;
}

export default function ParallaxImage({
  className = "",
  speed = 0.5,
  direction = "up",
  children,
}: ParallaxImageProps) {
  const { ref, offset } = useParallax({ speed, direction });

  const translateStyle =
    direction === "up" || direction === "down"
      ? { transform: `translateY(${offset}px)` }
      : { transform: `translateX(${offset}px)` };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className}`}
      style={translateStyle}
    >
      {children}
    </div>
  );
}
