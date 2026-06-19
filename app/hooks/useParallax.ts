"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = "up" } = options;
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

      // Calculate the distance from viewport center to element center
      const distance = elementCenter - viewportCenter;

      let transform = 0;
      if (direction === "up" || direction === "down") {
        transform = distance * speed * (direction === "down" ? -1 : 1);
      } else {
        transform = distance * speed * (direction === "right" ? -1 : 1);
      }

      setOffset(transform);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, offset };
}

/**
 * Hook for fade-in effect on scroll
 */
export function useScrollFadeIn(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Hook for scale and fade in effect
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
