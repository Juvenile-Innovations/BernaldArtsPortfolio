"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * HeroScrollSequence
 *
 * Owns the GSAP ScrollTrigger that pins the Hero and simultaneously:
 *  1. Zooms the background video (Ken Burns)
 *  2. Fades + lifts Hero content out
 *  3. Slides the About section upward over the Hero
 *
 * Hero and About themselves stay clean — no GSAP inside them.
 */
export default function HeroScrollSequence() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero        = wrapperRef.current?.querySelector<HTMLElement>("#hero-pin");
      const video       = wrapperRef.current?.querySelector<HTMLVideoElement>("#hero-video");
      const heroContent = wrapperRef.current?.querySelector<HTMLElement>("#hero-content");
      const about       = wrapperRef.current?.querySelector<HTMLElement>("#about");

      if (!hero || !video || !heroContent || !about) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Video zooms slowly (Ken Burns feel)
      tl.to(video, {
        scale: 1.18,
        ease: "none",
      }, 0);

      // 2. Hero content fades up and out
      tl.to(heroContent, {
        opacity: 0,
        y: -80,
        ease: "power2.in",
      }, 0);

      // 3. About panel slides up over the pinned Hero
      //    It starts translated down (fully below viewport) and moves to y:0
      gsap.set(about, { y: "100vh" });
      tl.to(about, {
        y: "0vh",
        ease: "power2.inOut",
      }, 0);
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <Hero />
      <About />
    </div>
  );
}
