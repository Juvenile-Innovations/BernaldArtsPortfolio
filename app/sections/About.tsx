"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { spaceGrotesk, shareTechMono, elsie } from "@/app/lib/fonts";
import StatCounter from "../components/StatCounter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  {
    id: "METRIC-01",
    number: "2000+",
    label: "Projects Completed",
    unit: "UNITS",
    status: "STABLE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 5.5 20 5.5 20.5C5.5 21.3284 6.17157 22 7 22H12Z" />
        <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
        <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: "text-orange-500 border-orange-500/20 bg-orange-950/20",
    bgImage: "/images/about/2000project.jpg"
  },
  {
    id: "METRIC-02",
    number: "3x",
    label: "World Records Set",
    unit: "INDEX",
    status: "VERIFIED",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
      </svg>
    ),
    color: "text-orange-400 border-orange-400/20 bg-orange-950/20",
    bgImage: "/images/about/2.jpg"
  },
  {
    id: "METRIC-03",
    number: "2000+",
    label: "Happy Clients",
    unit: "PEOPLE",
    status: "ACTIVE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "text-orange-500 border-orange-500/20 bg-orange-950/20",
    bgImage: "/images/about/happycustomer.jpg"
  },
  {
    id: "METRIC-04",
    number: "8+",
    label: "Years of Experience",
    unit: "DURATION",
    status: "OPTIMIZED",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
    color: "text-orange-400 border-orange-400/20 bg-orange-950/20",
    bgImage: "/images/about/1.jpg"
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

const ARTIST_RECORDS = [
  {
    id: "REC-001",
    title: "VIBRANT EXPLORATION",
    medium: "Multi-Surface Mixed-Media",
    dimensions: "Varies // Adaptive",
    location: "Tamil Nadu, IN",
    bgImage: "/images/about/1.jpg",
    description: "An intensive synthesis of industrial spray paint, heavy acrylic overlays, and custom stencils on concrete walls. This approach redefines public space as a playground of tactile materials."
  },
  {
    id: "REC-002",
    title: "CHRONICLES OF EXECUTION",
    medium: "Charcoal & Graphite Study",
    dimensions: "A3 Acid-Free Canvas",
    location: "Fine Art Studio",
    bgImage: "/images/about/2.jpg",
    description: "A deep dive into structural lighting and human anatomy. Utilizing micro-details and dark coal layers to model complex, volumetric forms on raw canvas."
  },
  {
    id: "REC-003",
    title: "TACTILE RESONANCE",
    medium: "Mixed-Media Collage",
    dimensions: "120 x 120 cm",
    location: "Exhibition Hall",
    bgImage: "/images/about/3.jpg",
    description: "Exploration of dense multi-surface materials, blending canvas fabrics with industrial resin, gold-leaf highlights, and textured pastes to create tangible, multidimensional art."
  }
];

export default function About() {
  const [currentSpec, setCurrentSpec] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeRecord, setActiveRecord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bpm, setBpm] = useState(72);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll logic for text overlay
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBgText1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yBgText2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useEffect(() => {
    const specInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSpec((prev) => (prev + 1) % SPECIALIZATIONS.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(specInterval);
  }, []);

  useEffect(() => {
    const bpmInterval = setInterval(() => {
      setBpm(Math.floor(Math.random() * 6) + 68);
    }, 1500);
    return () => clearInterval(bpmInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header animation
      gsap.fromTo(
        ".about-header-group",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-header-group",
            start: "top 85%",
          },
        }
      );

      // 2. Bio text elements stagger
      gsap.fromTo(
        ".about-bio-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-bio-trigger",
            start: "top 75%",
          },
        }
      );

      // 3. Matrix spec grid items stagger
      gsap.fromTo(
        ".about-matrix-item",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-matrix-trigger",
            start: "top 85%",
          },
        }
      );

      // 4. Lab viewer panel
      gsap.fromTo(
        ".about-viewer-panel",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-viewer-panel",
            start: "top 75%",
          },
        }
      );

      // 5. Stat cards staggered slide up
      gsap.fromTo(
        ".about-stat-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".about-stats-trigger",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-neutral-950 overflow-hidden text-white py-24 md:py-36 border-t border-neutral-900"
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Glowing Tech Orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] rounded-full bg-amber-600/5 blur-[150px] pointer-events-none z-0" />

      {/* Floating Scientific Watermarks (Parallax Overlay) */}
      <motion.div
        style={{ y: yBgText1 }}
        className={`absolute left-5 top-28 text-[9vw] font-black uppercase text-white/[0.015] select-none pointer-events-none tracking-widest ${spaceGrotesk.className}`}
      >
        BERNALD GEORGE //
      </motion.div>
      <motion.div
        style={{ y: yBgText2 }}
        className={`absolute right-5 bottom-28 text-[7vw] font-black uppercase text-white/[0.015] select-none pointer-events-none tracking-widest ${shareTechMono.className}`}
      >
        MULTI_SURFACE
      </motion.div>

      {/* Decorative Technical Crosshairs at Corners */}
      <div className="absolute top-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute top-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute bottom-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute bottom-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="about-header-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 border-b border-neutral-900 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <p className={`text-[11px] uppercase tracking-[0.4em] text-orange-500 font-bold ${shareTechMono.className}`}>
                [ SECTION_01 // METRIC_INDEX ]
              </p>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight text-white ${spaceGrotesk.className}`}>
              KNOW <span className={`${elsie.className} text-orange-500 lowercase tracking-normal font-normal px-1.5`}>about</span> ME
            </h2>
          </div>

          {/* Scientific Telemetry ECG Monitor */}
          <div className="hidden md:block">
            {/* ECG Heartbeat Monitor */}
            <div className="flex flex-col gap-1">
              <div className={`flex items-center justify-between text-[9px] uppercase tracking-wider text-neutral-500 ${shareTechMono.className}`}>
                <span className="flex items-center gap-1.5">
                  <svg className="w-2.5 h-2.5 text-red-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  BIOMETRIC MONITOR
                </span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  ONLINE
                </span>
              </div>
              <div className="relative w-72 h-16 bg-neutral-950 border border-neutral-900 rounded p-1 overflow-hidden flex items-center justify-between gap-2">
                {/* SVG ECG Line */}
                <div className="w-[75%] h-full relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff0000" />
                        <stop offset="17%" stopColor="#ff7f00" />
                        <stop offset="33%" stopColor="#ffff00" />
                        <stop offset="50%" stopColor="#00ff00" />
                        <stop offset="67%" stopColor="#0000ff" />
                        <stop offset="83%" stopColor="#4b0082" />
                        <stop offset="100%" stopColor="#8b00ff" />
                      </linearGradient>
                      <filter id="ecg-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <g className="animate-[scroll_2.5s_linear_infinite]">
                      <path
                        d="M 0,40 L 5,39.5 L 10,40.5 C 13,35 22,35 25,40 L 30,39.8 L 35,40.2 L 37,44 L 42,6 L 47,74 L 50,40 L 55,39.5 L 60,39 C 65,30 75,30 80,40 L 85,39.8 L 90,40.2 L 95,39.5 L 100,40 L 105,39.5 L 110,40.5 C 113,35 122,35 125,40 L 130,39.8 L 135,40.2 L 137,44 L 142,6 L 147,74 L 150,40 L 155,39.5 L 160,39 C 165,30 175,30 180,40 L 185,39.8 L 190,40.2 L 195,39.5 L 200,40 L 205,39.5 L 210,40.5 C 213,35 222,35 225,40 L 230,39.8 L 235,40.2 L 237,44 L 242,6 L 247,74 L 250,40 L 255,39.5 L 260,39 C 265,30 275,30 280,40 L 285,39.8 L 290,40.2 L 295,39.5 L 300,40 L 305,39.5 L 310,40.5 C 313,35 322,35 325,40 L 330,39.8 L 335,40.2 L 337,44 L 342,6 L 347,74 L 350,40 L 355,39.5 L 360,39 C 365,30 375,30 380,40 L 385,39.8 L 390,40.2 L 395,39.5 L 400,40 L 405,39.5 L 410,40.5 C 413,35 422,35 425,40 L 430,39.8 L 435,40.2 L 437,44 L 442,6 L 447,74 L 450,40 L 455,39.5 L 460,39 C 465,30 475,30 480,40 L 485,39.8 L 490,40.2 L 495,39.5 L 500,40 L 505,39.5 L 510,40.5 C 513,35 522,35 525,40 L 530,39.8 L 535,40.2 L 537,44 L 542,6 L 547,74 L 550,40 L 555,39.5 L 560,39 C 565,30 575,30 580,40 L 585,39.8 L 590,40.2 L 595,39.5 L 600,40"
                        fill="none"
                        stroke="url(#rainbow-grad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#ecg-glow)"
                      />
                    </g>
                  </svg>
                </div>
                {/* Heart Rate Display */}
                <div className={`w-[25%] flex flex-col items-center justify-center border-l border-neutral-900 h-full pl-1 text-center ${shareTechMono.className}`}>
                  <span className="text-[9px] text-neutral-500 uppercase tracking-tight">PULSE</span>
                  <span className="text-sm font-bold text-white tracking-tighter animate-[pulse_1.0s_infinite]">
                    {bpm}
                  </span>
                  <span className="text-[8px] text-neutral-500">BPM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-stretch">

          {/* Left Panel: Narrative Bio */}
          <div className="about-bio-trigger about-matrix-trigger xl:col-span-6 flex flex-col justify-between space-y-8 md:space-y-12">

            <div className="space-y-6">
              <div className="about-bio-element space-y-2">
                <span className={`text-[12px] tracking-[0.25em] text-neutral-500 uppercase ${shareTechMono.className}`}>
                  ARTIST_NAME:
                </span>
                <h3 className={`text-4xl md:text-5xl text-white font-black uppercase tracking-wide leading-none ${spaceGrotesk.className}`}>
                  Bernald <span className={`${elsie.className} text-orange-500 lowercase tracking-normal font-normal`}>George</span>
                </h3>

                {/* Specialization Indicator */}
                <div className="h-10 flex items-center gap-2.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <p
                    className={`text-[12px] md:text-[14px] uppercase tracking-[0.3em] bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-black ${shareTechMono.className} transition-opacity duration-300 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
                  >
                    {SPECIALIZATIONS[currentSpec]}
                  </p>
                </div>
              </div>

              <p className={`about-bio-element text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-2xl font-light ${spaceGrotesk.className}`}>
                "As a Multi-Surface Artist, I bridge the gap between traditional craftsmanship and modern digital systems. My work explores how art adapts to its target mediums — projecting physical narratives onto paper, canvas, or heavy architectural surfaces."
              </p>

              <div className="about-bio-element border-l-2 border-orange-500/50 pl-4 py-2 space-y-4">
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  Fusing complex structural overlays, multi-layered textures, and modern graphic forms, each project becomes an custom sensory installation optimized for its physical environment.
                </p>
                <div className={`text-[11px] uppercase tracking-wider text-orange-500/60 font-mono ${shareTechMono.className}`}>
                  STATUS // ACTIVE_COMMISSIONS_LOADED
                </div>
              </div>
            </div>

            {/* Spec Matrix Overview */}
            <div className="border border-neutral-900 rounded-xl p-6 bg-neutral-950/60 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
                <span className={`text-[10px] tracking-widest text-neutral-400 uppercase ${shareTechMono.className}`}>
                  [ EXPERIMENTAL SPECIFICATION MATRIX ]
                </span>
                <span className="text-[9px] text-orange-500 font-mono">[ MODULAR ]</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {SPECIALIZATIONS.map((spec, i) => (
                  <div
                    key={spec}
                    className={`about-matrix-item flex items-center gap-2 p-2 rounded bg-neutral-900/50 border border-neutral-900 hover:border-orange-500/30 transition-colors ${shareTechMono.className}`}
                  >
                    <span className="text-[10px] text-orange-500 font-bold">0{i + 1}</span>
                    <span className="text-[10px] text-neutral-400 tracking-wider">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Lab Artwork Viewer */}
          <div className="about-viewer-panel xl:col-span-6 flex flex-col justify-between border border-neutral-900 rounded-2xl p-6 md:p-8 bg-neutral-950/40 backdrop-blur-md relative overflow-hidden">

            {/* Corner Tech Lines */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

            <div className="space-y-6">
              {/* Telemetry Header */}
              <div className={`flex items-center justify-between text-[11px] text-neutral-400 ${shareTechMono.className}`}>
                <span className="tracking-widest">
                  [ SPECIMEN : ARTIST ]
                </span>
                <span className="text-orange-500 animate-pulse">
                  ● ACTIVE
                </span>
              </div>

              {/* Mobile ECG Heartbeat Monitor */}
              <div className="block md:hidden flex flex-col gap-1">
                <div className={`flex items-center justify-between text-[9px] uppercase tracking-wider text-neutral-500 ${shareTechMono.className}`}>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-2.5 h-2.5 text-red-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    BIOMETRIC MONITOR
                  </span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    ONLINE
                  </span>
                </div>
                <div className="relative w-full h-14 bg-neutral-950/60 border border-neutral-900 rounded p-1 overflow-hidden flex items-center justify-between gap-2">
                  {/* SVG ECG Line */}
                  <div className="w-[75%] h-full relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="rainbow-grad-mob" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff0000" />
                          <stop offset="17%" stopColor="#ff7f00" />
                          <stop offset="33%" stopColor="#ffff00" />
                          <stop offset="50%" stopColor="#00ff00" />
                          <stop offset="67%" stopColor="#0000ff" />
                          <stop offset="83%" stopColor="#4b0082" />
                          <stop offset="100%" stopColor="#8b00ff" />
                        </linearGradient>
                        <filter id="ecg-glow-mob" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g className="animate-[scroll_2.5s_linear_infinite]">
                        <path
                          d="M 0,40 L 5,39.5 L 10,40.5 C 13,35 22,35 25,40 L 30,39.8 L 35,40.2 L 37,44 L 42,6 L 47,74 L 50,40 L 55,39.5 L 60,39 C 65,30 75,30 80,40 L 85,39.8 L 90,40.2 L 95,39.5 L 100,40 L 105,39.5 L 110,40.5 C 113,35 122,35 125,40 L 130,39.8 L 135,40.2 L 137,44 L 142,6 L 147,74 L 150,40 L 155,39.5 L 160,39 C 165,30 175,30 180,40 L 185,39.8 L 190,40.2 L 195,39.5 L 200,40 L 205,39.5 L 210,40.5 C 213,35 222,35 225,40 L 230,39.8 L 235,40.2 L 237,44 L 242,6 L 247,74 L 250,40 L 255,39.5 L 260,39 C 265,30 275,30 280,40 L 285,39.8 L 290,40.2 L 295,39.5 L 300,40 L 305,39.5 L 310,40.5 C 313,35 322,35 325,40 L 330,39.8 L 335,40.2 L 337,44 L 342,6 L 347,74 L 350,40 L 355,39.5 L 360,39 C 365,30 375,30 380,40 L 385,39.8 L 390,40.2 L 395,39.5 L 400,40 L 405,39.5 L 410,40.5 C 413,35 422,35 425,40 L 430,39.8 L 435,40.2 L 437,44 L 442,6 L 447,74 L 450,40 L 455,39.5 L 460,39 C 465,30 475,30 480,40 L 485,39.8 L 490,40.2 L 495,39.5 L 500,40 L 505,39.5 L 510,40.5 C 513,35 522,35 525,40 L 530,39.8 L 535,40.2 L 537,44 L 542,6 L 547,74 L 550,40 L 555,39.5 L 560,39 C 565,30 575,30 580,40 L 585,39.8 L 590,40.2 L 595,39.5 L 600,40"
                          fill="none"
                          stroke="url(#rainbow-grad-mob)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#ecg-glow-mob)"
                        />
                      </g>
                    </svg>
                  </div>
                  {/* Heart Rate Display */}
                  <div className={`w-[25%] flex flex-col items-center justify-center border-l border-neutral-900 h-full pl-1 text-center ${shareTechMono.className}`}>
                    <span className="text-[8px] text-neutral-500 uppercase tracking-tight">PULSE</span>
                    <span className="text-xs font-bold text-white tracking-tighter animate-[pulse_1.0s_infinite]">
                      {bpm}
                    </span>
                    <span className="text-[8px] text-neutral-500">BPM</span>
                  </div>
                </div>
              </div>

              {/* Graphic Display frame */}
              <div
                className="relative h-[300px] md:h-[400px] w-full overflow-hidden border border-neutral-900 bg-black cursor-crosshair group rounded-lg"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Crosshairs & Scanning lines */}
                <div className="absolute inset-0 border border-orange-500/10 pointer-events-none z-10" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-orange-500/10 pointer-events-none z-10" />
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-orange-500/10 pointer-events-none z-10" />

                {/* Cyber Scanner Line */}
                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent top-0 opacity-40 shadow-[0_0_10px_#ff5722] pointer-events-none z-10 animate-[scan_3s_linear_infinite]" />

                <style dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes scan {
                      0% { top: 0%; }
                      50% { top: 100%; }
                      100% { top: 0%; }
                    }
                    @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-300px); }
                    }
                  `
                }} />

                {/* Corner crosshairs indicator */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-white/30 z-10 bg-black/40 px-1 rounded">
                  POS: {mousePosition.x.toFixed(2)} / {mousePosition.y.toFixed(2)}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRecord}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <motion.div
                      animate={{
                        x: mousePosition.x * 24,
                        y: mousePosition.y * 24,
                        scale: 1.04,
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={ARTIST_RECORDS[activeRecord].bgImage}
                        alt={ARTIST_RECORDS[activeRecord].title}
                        fill
                        className="object-cover contrast-[1.05] transition-all duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Console Data Readout */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-4 text-xs font-mono py-2 border-b border-neutral-900">
                  <div>
                    <span className="text-neutral-500">CLASSIFICATION:</span>{" "}
                    <span className="text-orange-400 font-bold">{ARTIST_RECORDS[activeRecord].medium}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">DIM:</span>{" "}
                    <span className="text-neutral-300">{ARTIST_RECORDS[activeRecord].dimensions}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">LOC:</span>{" "}
                    <span className="text-neutral-300">{ARTIST_RECORDS[activeRecord].location}</span>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed min-h-[64px]">
                  {ARTIST_RECORDS[activeRecord].description}
                </p>
              </div>
            </div>

            {/* Interactive File Index Selectors */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto scrollbar-hide py-1">
              {ARTIST_RECORDS.map((record, index) => (
                <button
                  key={record.id}
                  onClick={() => setActiveRecord(index)}
                  className={`px-4 py-2 rounded border text-xs font-mono uppercase tracking-wider transition-all duration-300 flex-shrink-0 flex items-center gap-2 ${activeRecord === index
                    ? "border-orange-500 bg-orange-950/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                    : "border-neutral-900 bg-neutral-900/40 text-neutral-500 hover:border-neutral-800 hover:text-neutral-300"
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeRecord === index ? "bg-orange-500 animate-pulse" : "bg-neutral-600"}`} />
                  <span>{record.id}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Stats Grid */}
        <div className="about-stats-trigger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-24 md:mt-32">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="about-stat-card relative p-6 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-orange-500 transition-all duration-300 flex flex-col items-start gap-4 overflow-hidden group shadow-2xl"
            >
              {/* Interactive Dot Matrix Canvas on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(#ff572205_1px,transparent_1px)] bg-[size:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Background preview image */}
              {stat.bgImage && (
                <div className="absolute inset-0 z-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 select-none pointer-events-none">
                  <Image
                    src={stat.bgImage}
                    alt={stat.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
              )}

              {/* Tech Details Decor */}
              <div className={`absolute top-3 right-3 text-[9px] uppercase tracking-widest text-neutral-500 ${shareTechMono.className}`}>
                [{stat.status}]
              </div>

              <div className="relative z-10 w-full flex flex-col items-start gap-4">
                <div className={`p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-orange-500 group-hover:border-orange-500/30 group-hover:bg-orange-950/20 transition-all duration-300 flex items-center justify-center`}>
                  {stat.icon}
                </div>

                <div className="space-y-1 w-full">
                  <span className={`text-[10px] tracking-widest text-neutral-500 uppercase block ${shareTechMono.className}`}>
                    VAL // {stat.unit}
                  </span>

                  <h3 className={`text-4xl sm:text-5xl font-black tracking-tight text-white flex items-center gap-1 ${spaceGrotesk.className}`}>
                    <StatCounter value={stat.number} />
                  </h3>

                  <p className={`text-xs text-neutral-400 font-bold uppercase tracking-widest pt-1 border-t border-neutral-900/80 mt-1 ${shareTechMono.className}`}>
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}