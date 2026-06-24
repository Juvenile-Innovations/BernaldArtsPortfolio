"use client";

import { useEffect, useRef } from "react";
import { spaceGrotesk, shareTechMono, elsie } from "@/app/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WallArt from "./services_components/WallArt";
import PencilArt from "./services_components/PencilArt";
import ColourPencil from "./services_components/ColourPencil";
import AcrylicArt from "./services_components/AcrylicArt";
import OilPainting from "./services_components/OilPainting";
import Watercolor from "./services_components/Watercolor";
import BloodArt from "./services_components/BloodArt";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Services Header
      gsap.fromTo(
        ".services-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 85%",
          }
        }
      );

      // 2. Horizontal divider reveal
      gsap.fromTo(
        ".services-divider-h",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".services-divider-h",
            start: "top 85%",
          }
        }
      );

      // 3. Vertical divider reveal
      gsap.fromTo(
        ".services-divider-v",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".services-divider-h",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full min-h-screen bg-neutral-950 overflow-hidden text-white px-6 md:px-12 py-24 md:py-36 border-t border-neutral-900"
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Cohesive Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-sky-500/5 blur-[160px] pointer-events-none z-0" />

      {/* Decorative Crosshairs */}
      <div className="absolute top-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute top-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute bottom-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute bottom-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>

      <div className="relative z-10 max-w-[1700px] mx-auto">

        {/* Section Header */}
        <div className="services-header flex items-center justify-between pb-6">
          <h2 className={`text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-400 font-bold ${spaceGrotesk.className}`}>
            SPOTLIGHT <span className={`${elsie.className} text-orange-500 lowercase tracking-normal font-normal px-1.5`}>specializations</span> ///
          </h2>
          <span className={`text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-500 font-black ${spaceGrotesk.className}`}>
            bernald arts*
          </span>
        </div>

        {/* Content Area with Vertical line and Horizontal line intersection */}
        <div className="relative w-full pt-8">
          {/* Thicker, Brighter Horizontal Divider Line */}
          <div
            style={{ transformOrigin: "left" }}
            className="services-divider-h absolute top-0 left-0 right-0 h-[2px] bg-white/40 z-20 pointer-events-none"
          />

          {/* Thicker, Brighter Vertical Framing Line starting exactly at horizontal line */}
          <div
            style={{ transformOrigin: "top" }}
            className="services-divider-v absolute top-0 bottom-0 left-0 w-[2px] bg-white/40 z-20 pointer-events-none"
          />

          {/* Services List Grid */}
          <div className="w-full flex flex-col pt-4">
            <WallArt />
            <PencilArt />
            <ColourPencil />
            <AcrylicArt />
            <OilPainting />
            <Watercolor />
            <BloodArt />
          </div>
        </div>

      </div>
    </section>
  );
}