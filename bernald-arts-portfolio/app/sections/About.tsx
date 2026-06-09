"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STATS = [
  { number: "08+", label: "Years Experience" },
  { number: "150+", label: "Projects Crafted" },
  { number: "100+", label: "Creative Clients" },
];

const SPECIALIZATIONS = [
  "MIXED MEDIA ART",
  "WALL MURALS",
  "VISUAL STORYTELLING",
  "STENCIL TYPOGRAPHY",
  "CINEMATIC ART",
  "SURFACE DESIGN",
];

const ARTIST_IMAGES = [
  "/images/about/1.jpg",
  "/images/about/2.jpg",
  "/images/about/3.jpg",
];

export default function About() {
  const [currentSpec, setCurrentSpec] = useState(0);
  const [fade, setFade] = useState(true);

  // Optimized CSS-based fader for the specializations text
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setCurrentSpec((prev) => (prev + 1) % SPECIALIZATIONS.length);
        setFade(true); // Trigger fade in
      }, 300); // Wait for fade out to finish before changing text
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen bg-white overflow-hidden scroll-mb-0">
      
      {/* BULLETPROOF CSS CAROUSEL ANIMATION */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .auto-scroll-carousel {
          animation: infinite-slide 30s linear infinite;
        }
        /* Pauses the carousel when the user hovers over it */
        .auto-scroll-carousel:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* LEFT SIDE LOW-BLUR BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 w-full xl:w-[55%] h-full pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-25 scale-105"
          style={{ backgroundImage: "url('/images/devigodart.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
      </div>

      {/* Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')" }}
      />

      {/* Grid Lines */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-black/5" />
      <div className="absolute top-0 left-1/2 h-full w-px bg-black/5" />
      <div className="absolute top-0 left-3/4 h-full w-px bg-black/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-black/5" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* Small Label */}
        <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-20">
          <div className="w-12 md:w-16 h-px bg-black/30" />
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/50 font-bold">
            ABOUT THE ARTIST
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-24 items-end">
          
          {/* LEFT: TEXT CONTENT */}
          <div>
            <h2 className="text-[22vw] md:text-[10vw] leading-[0.85] font-black tracking-[-0.08em] uppercase text-black">
              About
            </h2>

            {/* Custom CSS Animated Spec */}
            <div className="mt-6 md:mt-10 h-16 md:h-20 flex flex-col justify-center">
              <p
                className={`text-[12px] md:text-[26px] uppercase tracking-[0.2em] md:tracking-[0.32em] text-black/80 font-semibold transition-opacity duration-300 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {SPECIALIZATIONS[currentSpec]}
              </p>
              <div className="mt-3 md:mt-4 w-24 md:w-40 h-px bg-black/20" />
            </div>

            {/* Description */}
            <div className="mt-10 md:mt-20 max-w-2xl space-y-6 md:space-y-10">
              <p className="text-[18px] md:text-[32px] leading-[1.5] text-black/85 font-light">
                Bernald creates emotionally immersive visual experiences
                through cinematic composition, mixed media experimentation,
                and large-scale artistic storytelling.
              </p>
              <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-xl">
                Blending physical textures, spatial narratives, mural work,
                and contemporary visual language, each project is designed
                to feel atmospheric, timeless, and deeply human.
              </p>
            </div>
          </div>

          {/* RIGHT: CSS INFINITE SLIDER */}
          <div className="relative mt-8 md:mt-0 h-[400px] md:h-[700px] overflow-hidden bg-black/5">
            
            {/* The auto-scroll-carousel class relies on the injected <style> block above */}
            <div className="flex h-full w-[max-content] auto-scroll-carousel">
              {/* We duplicate the array to create the seamless infinite loop illusion */}
              {[...ARTIST_IMAGES, ...ARTIST_IMAGES].map((src, index) => (
                <div
                  key={index}
                  className="relative h-full w-[260px] md:w-[450px] flex-shrink-0 border-r border-white/10"
                >
                  <Image
                    src={src}
                    alt={`Art ${index}`}
                    fill
                    className="object-cover grayscale contrast-[1.1] brightness-[0.95]"
                    sizes="(max-width: 768px) 260px, 450px"
                  />
                </div>
              ))}
            </div>

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Text */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-10">
              <p className="text-white text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.28em] font-medium"> 
                BERNALD GEORGE RAJ J
              </p>
              <div className="mt-3 md:mt-4 w-20 md:w-32 h-px bg-white/30" />
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mt-20 md:mt-32 pt-10 md:pt-16 border-t border-black/10">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={i === 2 ? "col-span-2 md:col-span-1" : ""}>
              <h3 className="text-[14vw] sm:text-[10vw] md:text-[6vw] leading-none font-black tracking-[-0.06em] text-black">
                {stat.number}
              </h3>
              <p className="mt-2 md:mt-4 text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.28em] text-black/50 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}