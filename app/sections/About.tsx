"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { msMadi } from "@/app/lib/fonts";

const STATS = [
  {
    number: "2000+",
    label: "Projects Completed",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 5.5 20 5.5 20.5C5.5 21.3284 6.17157 22 7 22H12Z" />
        <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
        <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
        <path d="M14.5 14C14.5 15.5 13 17 11.5 17C10 17 9 15.5 9 14C9 12.5 11 11.5 12 10.5C13 11.5 14.5 12.5 14.5 14Z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    color: "from-blue-500/10 to-sky-500/10 text-blue-600 border-blue-200/50"
  },
  {
    number: "3x",
    label: "World Records Set",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
        <path d="m12 6 .8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3L12 6Z" fill="currentColor" />
      </svg>
    ),
    color: "from-amber-500/10 to-yellow-500/10 text-amber-600 border-amber-200/50"
  },
  {
    number: "2000+",
    label: "Happy Clients",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/50"
  },
  {
    number: "8+",
    label: "Years of Experience",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
        <path d="m12 5 1 2 2.5.5-1.75 1.75.5 2.25-2.25-1-2.25 1 .5-2.25L8.5 7.5l2.5-.5L12 5Z" fill="currentColor" />
      </svg>
    ),
    color: "from-rose-500/10 to-pink-500/10 text-rose-600 border-rose-200/50"
  }
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

function StatCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    
    const targetValue = parseInt(numMatch[0], 10);
    const suffix = value.replace(numMatch[0], "");
    const isPrefix = value.startsWith(suffix) && suffix !== "+";
    
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, targetValue, {
      duration,
      ease: [0.16, 1, 0.3, 1], // premium easeOutQuart-like curve
      onUpdate(val) {
        const rounded = Math.round(val);
        node.textContent = isPrefix ? `${suffix}${rounded}` : `${rounded}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [value, isInView, duration]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  const [currentSpec, setCurrentSpec] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSpec((prev) => (prev + 1) % SPECIALIZATIONS.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[#fafafa] overflow-hidden scroll-mb-0 text-black py-24 md:py-36"
    >
      
      {/* BULLETPROOF CAROUSEL ANIMATION */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .auto-scroll-carousel {
          animation: infinite-slide 25s linear infinite;
        }
        .auto-scroll-carousel:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* AMBIENT BLUE SHADE BACKGROUNDS */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none z-0 mix-blend-multiply" />

      {/* BACKGROUND GRAPHIC LINES */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-black/[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 h-full w-px bg-black/[0.03] pointer-events-none" />
      <div className="absolute top-0 left-3/4 h-full w-px bg-black/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* SUB-HEADER LABEL */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <div className="w-12 h-px bg-sky-400" />
          <p className="text-[12px] md:text-[14px] uppercase tracking-[0.25em] text-sky-600 font-bold sans-serif">
            THE STUDIO PROFILED
          </p>
        </div>

        {/* MAIN LAYOUT SPLIT */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center">
          
          {/* LEFT AREA: TYPOGRAPHY PROFILE & BIO DESCRIPTION */}
          <div className="xl:col-span-6 space-y-8 md:space-y-12">
            
            {/* SOPHISTICATED REPLACEMENT FOR THE REMOVED BIG TEXT */}
            <div className="space-y-2">
              <h3 className="text-3xl md:text-5xl text-black font-black uppercase tracking-tight">
                Bernald George Raj J
              </h3>
              
              {/* CURRENT ACTIVE SPECIALIZATION FIELD */}
              <div className="h-12 flex items-center">
                <p
                  className={`text-[13px] md:text-[16px] uppercase tracking-[0.3em] bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent font-bold transition-opacity duration-300 ease-in-out ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {SPECIALIZATIONS[currentSpec]}
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-black/10 via-transparent to-transparent mt-2" />
            </div>

            {/* ARTIST PORTFOLIO STATEMENT - CUSTOM FONT APPLIED TO THE WORDS */}
            <div className="space-y-6 md:space-y-8">
              <p 
                className={`${msMadi.className} text-[24px] md:text-[34px] leading-[1.4] text-black/90 font-normal max-w-2xl`}
              >
                "As a Multi-Surface Artist, I bridge the gap between traditional techniques and modern digital narratives. My work explores how art interacts with its environment; whether it’s on paper, canvas, or unconventional everyday objects, I bring surfaces to life."
              </p>
              <p 
                className="text-black/70 text-lg md:text-2xl leading-relaxed max-w-xl font-normal"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                Combining mixed media, graffiti, and digital design ensures that every project is not just a painting, but a majestic experience tailored completely to its structural medium.
              </p>
            </div>
          </div>

          {/* RIGHT AREA: CLEAN VIBRANT IMAGE SLIDER CAROUSEL */}
          <div className="xl:col-span-6 relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02] shadow-2xl">
            
            <div className="flex h-full w-[max-content] auto-scroll-carousel">
              {[...ARTIST_IMAGES, ...ARTIST_IMAGES].map((src, index) => (
                <div
                  key={index}
                  className="relative h-full w-[280px] md:w-[420px] flex-shrink-0 border-r border-white/20"
                >
                  <Image
                    src={src}
                    alt={`Vibrant Artwork Frame ${index}`}
                    fill
                    className="object-cover contrast-[1.04] brightness-[1.02] saturate-[1.15]"
                    sizes="(max-width: 768px) 280px, 420px"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* SMOOTH SURFACE LAYERING VIGNETTES */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

            {/* FLOATING CORNER CREDIT - CUSTOM FONT APPLIED */}
            <div className="absolute bottom-6 left-8 z-10">
              <p 
                className="text-white/95 text-xl md:text-3xl tracking-wider font-normal drop-shadow-md"
                style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
              >
                Bespoke Experiences
              </p>
            </div>
          </div>

        </div>

        {/* METRIC DISPLAY COUNT BOUNDS - PREMIUM CARDS WITH SCROLL-COUNT ANIMATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-24 md:mt-36 ">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-6 rounded-2xl bg-white border border-black/[1.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.08] transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className={`p-3.5 rounded-xl bg-gradient-to-br ${stat.color} border flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black drop-shadow-sm flex items-center">
                  <StatCounter value={stat.number} />
                </h3>
                <p 
                  className="text-lg md:text-2xl text-sky-600 font-normal tracking-wide"
                  style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}