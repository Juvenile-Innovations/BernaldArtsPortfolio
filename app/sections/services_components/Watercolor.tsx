"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { spaceGrotesk, shareTechMono, elsie } from "@/app/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FluidIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10,50 Q25,30 40,50 T70,50 T100,50" />
    <path d="M10,65 Q25,45 40,65 T70,65 T100,65" strokeDasharray="3 3" />
    <path d="M10,35 Q25,15 40,35 T70,35 T100,35" strokeOpacity="0.5" />
    <circle cx="40" cy="50" r="3" fill="#06b6d4" />
    <circle cx="70" cy="50" r="2" fill="#06b6d4" />
  </svg>
);

export default function Watercolor() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCollageFast = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yCollageSlow = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yWatermark = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yImageParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Left side specimen block reveal
      gsap.fromTo(
        ".service-panel-left",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );

      // 2. Right side text block reveal
      gsap.fromTo(
        ".service-panel-right",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );

      // 3. Collage elements stagger reveal (using the container .cursor-pointer children)
      gsap.fromTo(
        ".service-collage-trigger-watercolor .cursor-pointer",
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".service-collage-trigger-watercolor",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.08, ease: "easeOut" as const }
    })
  };

  const images = [
    "/images/gallery/image03.jpg",
    "/images/gallery/image04.jpg",
    "/images/gallery/image02.jpg",
    "/images/gallery/image01.jpg",
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 border-b-2 border-white/30 last:border-0 z-10 scroll-mt-24 md:scroll-mt-28 pl-6 sm:pl-10 md:pl-16 overflow-hidden"
    >
      {/* Background Watermark Parallax */}
      <motion.div
        style={{ y: yWatermark }}
        className={`absolute left-0 top-1/4 text-[8vw] font-black uppercase text-white/[0.045] select-none pointer-events-none tracking-widest ${spaceGrotesk.className}`}
      >
        Watercolor // 06
      </motion.div>

      {/* 0. VERTICAL TEXT LABEL ON LEFT MARGIN */}
      <div className="absolute -left-4 sm:-left-6 md:-left-10 top-24 w-4 flex justify-center pointer-events-none select-none">
        <span className={`text-[8px] uppercase tracking-[0.25em] text-neutral-600 font-mono origin-top-left rotate-90 whitespace-nowrap ${shareTechMono.className}`}>
          [ SOURCE: ART_DOSSIER // 06 ]
        </span>
      </div>

      {/* 1. TOP HEADER DOSSIER BLOCK */}
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 relative z-10 w-full">

        {/* Specimen Header Block (Left columns) */}
        <div className="service-panel-left lg:col-span-4 flex flex-col gap-4">
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-neutral-900 bg-neutral-950/60">
            {/* Tag overlay */}
            <div className="absolute top-0 left-0 bg-[#06b6d4] text-black px-2.5 py-1 font-bold text-xs z-20">
              06
            </div>

            <motion.div
              style={{ y: yImageParallax }}
              className="absolute -inset-y-8 left-0 right-0"
            >
              <Image
                src={images[0]}
                alt="Watercolor Thumbnail"
                fill
                className="object-cover"
                sizes="320px"
                priority
              />
            </motion.div>

            {/* Bottom label */}
            <div className={`absolute bottom-0 left-0 right-0 bg-black/85 text-[8px] text-[#06b6d4] font-mono px-3 py-1 flex items-center justify-between border-t border-neutral-900 z-10 ${shareTechMono.className}`}>
              <span>&lt; FLUID_ACTIVE &gt;</span>
              <span>SYS_OK</span>
            </div>
          </div>

          {/* Metadata rows */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 text-[8px] font-bold text-black bg-[#06b6d4] uppercase tracking-wider rounded ${shareTechMono.className}`}>
                  SUBSTRATE
                </span>
                <span className={`text-[10px] text-neutral-400 font-mono tracking-wider ${shareTechMono.className}`}>
                  300G COTTON PRESS SUBSTRATE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 text-[8px] font-bold text-black bg-[#06b6d4] uppercase tracking-wider rounded ${shareTechMono.className}`}>
                  METHODOLOGY
                </span>
                <span className={`text-[10px] text-neutral-400 font-mono tracking-wider ${shareTechMono.className}`}>
                  ORGANIC PIGMENT WET-ON-WET WASH
                </span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <FluidIcon />
            </div>
          </div>
        </div>

        {/* Title, description & Call Button (Right columns) */}
        <motion.div
          style={{ y: yText }}
          className="service-panel-right lg:col-span-8 flex flex-col justify-start w-full min-w-0"
        >
          <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tight text-white ${spaceGrotesk.className}`}>
            Water<span className={`${elsie.className} text-[#06b6d4] lowercase tracking-normal font-normal px-1`}>COLOUR</span>
          </h3>

          <div className={`text-xs md:text-sm font-bold text-[#06b6d4] uppercase tracking-widest mt-1 ${shareTechMono.className}`}>
            FLUID PIGMENT DYNAMICS & ATMOSPHERIC WASHES
          </div>

          <div className={`flex items-center gap-2 text-[10px] text-neutral-800 tracking-wider font-mono select-none my-4 w-full overflow-hidden ${shareTechMono.className}`}>
            <span className="flex-1 min-w-0 overflow-hidden whitespace-nowrap">//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</span>
            <span className="text-[#06b6d4] flex-shrink-0">+</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <p className={`text-neutral-400 text-sm md:text-base leading-relaxed ${spaceGrotesk.className}`}>
                Translucent wash fluid dynamics executed on 100% cotton press substrate, controlling organic pigment bleeds and granulation for delicate landscape atmospheric depth.
              </p>
            </div>

            <div className="md:col-span-4 flex w-full justify-center md:justify-end">
              <a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("select-art-type", { detail: "Watercolor" }));
                }}
                className={`group w-full md:max-w-[200px] py-4 rounded-full border-2 border-[#06b6d4] text-center text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#06b6d4]/10 text-[#06b6d4] hover:text-white ${shareTechMono.className}`}
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 2. SPECIMEN ASSEMBLY COLLAGE - DESKTOP ONLY */}
      <div className="service-collage-trigger-watercolor hidden lg:block relative w-full h-[950px] mt-10 rounded-2xl border border-neutral-900 bg-neutral-950/40 overflow-hidden">

        {/* Subtle grid backdrop inside collage workspace */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

        {/* Circle Target Indicator */}
        <div className="absolute left-[3%] top-[4%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#06b6d4]/30 flex items-center justify-center pointer-events-none z-20">
          <div className="w-5 h-5 rounded-full border border-[#06b6d4]/50 flex items-center justify-center animate-pulse">
            <span className="text-[10px] text-[#06b6d4] font-mono leading-none">+</span>
          </div>
        </div>

        {/* Vertical line inside the collage container on the left */}
        <div className="absolute top-0 bottom-0 left-[3%] w-[1px] bg-neutral-900 pointer-events-none z-10" />

        {/* Vertical text label */}
        <div className="absolute left-[0.5%] top-24 w-4 flex justify-center pointer-events-none select-none z-20">
          <span className={`text-[8px] uppercase tracking-[0.25em] text-neutral-600 font-mono origin-top-left rotate-90 whitespace-nowrap border border-neutral-900 bg-neutral-950 px-2 py-0.5 ${shareTechMono.className}`}>
            [ DOSSIER: WATERCOLOR_SPECIMEN // 06 ]
          </span>
        </div>

        {/* The 6 Collage Elements (Fluid Layout Dispersed) */}

        {/* ELEMENT 1 (Large Square, bottom-left) */}
        <motion.div
          style={{ y: yCollageSlow }}
          whileHover={{ scale: 1.03, zIndex: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-[8%] left-[8%] w-[36%] aspect-[4/5] rounded-xl border border-neutral-900 overflow-hidden shadow-2xl bg-neutral-950 z-10 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-2 sm:p-4 md:p-6 z-20">
            <h4 className={`text-[10px] sm:text-lg md:text-2xl font-black text-[#06b6d4] leading-none uppercase ${spaceGrotesk.className}`}>
              ORGANIC PIGMENT<br />
              WASH DYNAMICS ON<br />
              ABSORBING FIBERS.
            </h4>
            <span className={`text-[6px] sm:text-[9px] uppercase tracking-widest text-neutral-400 mt-1 sm:mt-2 font-mono ${shareTechMono.className}`}>
              colossal / fluid_06
            </span>
          </div>
          <Image
            src={images[0]}
            alt="Watercolor Specimen 1"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 40vw, 30vw"
          />
        </motion.div>

        {/* ELEMENT 2 (Medium Square, top-right) */}
        <motion.div
          style={{ y: yCollageFast }}
          whileHover={{ scale: 1.03, zIndex: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-[4%] left-[62%] w-[28%] aspect-square rounded-xl border-2 border-[#06b6d4] overflow-hidden shadow-2xl bg-neutral-950 z-10 cursor-pointer"
        >
          <div className="absolute top-2 left-2 z-20 text-[6px] sm:text-[8px] font-mono text-[#06b6d4] bg-black/85 px-1 sm:px-1.5 py-0.5 rounded border border-[#06b6d4]/30">
            [ FLOW_VELOCITY // SPECIMEN_06 ]
          </div>
          <Image
            src={images[1]}
            alt="Watercolor Specimen 2"
            fill
            className="object-cover grayscale contrast-125 brightness-95"
            sizes="(max-width: 1024px) 30vw, 20vw"
          />
        </motion.div>

        {/* ELEMENT 3 (Small Scope, top-left) */}
        <motion.div
          style={{ y: yCollageFast }}
          whileHover={{ scale: 1.03, zIndex: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-[6%] left-[10%] w-[16%] aspect-square rounded-xl border border-neutral-900 overflow-hidden shadow-2xl bg-neutral-950 z-10 cursor-pointer"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-[80%] h-[80%] rounded-full border border-[#06b6d4]/30 border-dashed flex items-center justify-center">
              <div className="w-[60%] h-[60%] rounded-full border border-[#06b6d4]/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
              </div>
            </div>
          </div>
          <div className="absolute top-2 left-2 z-20 text-[5px] sm:text-[6px] font-mono text-neutral-500 bg-black/60 px-1 py-0.5 rounded">
            [ REFRACT_ZOOM ]
          </div>
          <Image
            src={images[2]}
            alt="Watercolor Specimen 3"
            fill
            className="object-cover rounded-full p-2 scale-90"
            sizes="150px"
          />
        </motion.div>

        {/* ELEMENT 4 (Small Bright Colored, top-middle) */}
        <motion.div
          style={{ y: yCollageSlow }}
          whileHover={{ scale: 1.03, zIndex: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-[12%] left-[34%] w-[22%] aspect-square rounded-xl border-2 border-[#06b6d4] overflow-hidden shadow-2xl bg-neutral-950 z-10 cursor-pointer"
        >
          {/* Ocean Blue/Teal duotone overlays */}
          <div className="absolute inset-0 bg-blue-500 mix-blend-color z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-cyan-700 mix-blend-multiply z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-between p-2 sm:p-4 z-25">
            <span className={`text-[6px] sm:text-[8px] uppercase tracking-widest text-white/50 font-mono ${shareTechMono.className}`}>
              // LIQUID_MAPPED
            </span>
            <h4 className={`text-[8px] sm:text-xs md:text-sm font-black text-white leading-tight uppercase ${spaceGrotesk.className}`}>
              CONTROL<br />
              THE ORGANIC<br />
              BLEED.
            </h4>
          </div>
          <Image
            src={images[3]}
            alt="Watercolor Specimen 4"
            fill
            className="object-cover"
            sizes="200px"
          />
        </motion.div>

        {/* ELEMENT 5 (Small Detail, bottom-right) */}
        <motion.div
          style={{ y: yCollageSlow }}
          whileHover={{ scale: 1.03, zIndex: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-[8%] left-[74%] w-[20%] aspect-square rounded-xl border border-neutral-900 overflow-hidden shadow-2xl bg-neutral-950 z-10 cursor-pointer"
        >
          {/* Sine wave grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] opacity-70 z-10 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none">
            <svg className="w-[80%] h-[80%] text-[#06b6d4]/40" viewBox="0 0 100 100" fill="none">
              <path d="M 0,20 Q 25,0 50,20 T 100,20" stroke="currentColor" strokeWidth="1" />
              <path d="M 0,50 Q 25,30 50,50 T 100,50" stroke="currentColor" strokeWidth="1" />
              <path d="M 0,80 Q 25,60 50,80 T 100,80" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <Image
            src={images[1]}
            alt="Watercolor Specimen 5"
            fill
            className="object-cover contrast-150 grayscale"
            sizes="200px"
          />
        </motion.div>

        {/* ELEMENT 6 (Large Rectangular, bottom-middle) */}
        <motion.div
          style={{ y: yCollageFast }}
          whileHover={{ scale: 1.03, zIndex: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-[4%] left-[42%] w-[36%] aspect-[1.1/1] rounded-xl border border-neutral-900 overflow-hidden shadow-2xl bg-neutral-950 z-10 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent flex items-center p-4 sm:p-8 z-20">
            <p className={`text-neutral-300 text-[8px] sm:text-xs md:text-sm max-w-[120px] sm:max-w-[220px] leading-relaxed font-mono ${shareTechMono.className}`}>
              Organic granulational pigments diffusing on press substrates.
            </p>
          </div>
          <div className={`absolute bottom-3 right-4 z-20 text-[6px] sm:text-[8px] font-mono text-neutral-500 uppercase tracking-widest ${shareTechMono.className}`}>
            FLUIDITY METRIC // bernald
          </div>
          <Image
            src={images[2]}
            alt="Watercolor Specimen 6"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 40vw, 30vw"
          />
        </motion.div>

      </div>

      {/* 2. SPECIMEN ASSEMBLY COLLAGE - MOBILE ONLY (2-Column Grid Dossier, matches Image 1) */}
      <div className="lg:hidden block relative w-full mt-10 rounded-2xl border border-neutral-900 bg-neutral-950/40 p-4">
        {/* Subtle grid backdrop inside collage workspace */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

        <div className="grid grid-cols-2 gap-4 relative z-10">

          {/* CARD 1 (Row 1 Left) - Organic pigment */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            className="relative aspect-square rounded-xl border border-neutral-900 overflow-hidden bg-neutral-950"
          >
            {/* Cyan dot indicator top-left */}
            <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#06b6d4] z-20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3 z-20">
              <h4 className={`text-[8px] sm:text-xs font-black text-[#06b6d4] leading-none uppercase ${spaceGrotesk.className}`}>
                ORGANIC PIGMENT<br />
                WASH DYNAMICS ON<br />
                ABSORBING FIBERS.
              </h4>
              <span className={`text-[5px] sm:text-[7px] uppercase tracking-widest text-neutral-400 mt-1 font-mono ${shareTechMono.className}`}>
                colossal / fluid_06
              </span>
            </div>
            <Image
              src={images[0]}
              alt="Watercolor Specimen 1"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw"
            />
          </motion.div>

          {/* CARD 2 (Row 1 Right) - Flow Velocity (with cyan border) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
            className="relative aspect-square rounded-xl border-2 border-[#06b6d4] overflow-hidden bg-neutral-950"
          >
            <div className="absolute top-2 left-2 z-20 text-[6px] sm:text-[8px] font-mono text-[#06b6d4] bg-black/85 px-1.5 py-0.5 rounded border border-[#06b6d4]/30">
              [ FLOW_VELOCITY // SPECIMEN_06 ]
            </div>
            <Image
              src={images[1]}
              alt="Watercolor Specimen 2"
              fill
              className="object-cover grayscale contrast-125 brightness-95"
              sizes="(max-width: 1024px) 50vw"
            />
          </motion.div>

          {/* CARD 3 (Row 2 Left) - Detail Refract Zoom (with circle overlay) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={2}
            className="relative aspect-square rounded-xl border border-neutral-900 overflow-hidden bg-neutral-950"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="w-[80%] h-[80%] rounded-full border border-[#06b6d4]/30 border-dashed flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-[#06b6d4]/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                </div>
              </div>
            </div>
            <div className="absolute top-2 left-2 z-20 text-[5px] sm:text-[6px] font-mono text-neutral-500 bg-black/60 px-1 py-0.5 rounded">
              [ REFRACT_ZOOM ]
            </div>
            <Image
              src={images[2]}
              alt="Watercolor Specimen 3"
              fill
              className="object-cover rounded-full p-2 scale-90"
              sizes="150px"
            />
          </motion.div>

          {/* CARD 4 (Row 2 Right) - Liquid Mapped (with cyan border) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={3}
            className="relative aspect-square rounded-xl border-2 border-[#06b6d4] overflow-hidden bg-neutral-950"
          >
            <div className="absolute inset-0 bg-blue-500 mix-blend-color z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-cyan-700 mix-blend-multiply z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-between p-3 z-20">
              <span className={`text-[6px] sm:text-[8px] uppercase tracking-widest text-white/50 font-mono ${shareTechMono.className}`}>
                // LIQUID_MAPPED
              </span>
              <h4 className={`text-[8px] sm:text-xs font-black text-white leading-tight uppercase ${spaceGrotesk.className}`}>
                CONTROL<br />
                THE ORGANIC<br />
                BLEED.
              </h4>
            </div>
            <Image
              src={images[3]}
              alt="Watercolor Specimen 4"
              fill
              className="object-cover"
              sizes="200px"
            />
          </motion.div>

          {/* CARD 5 (Row 3 Left) - Sine Wave Grid Overlay */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={4}
            className="relative aspect-square rounded-xl border border-neutral-900 overflow-hidden bg-neutral-950"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] opacity-70 z-10 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none">
              <svg className="w-[80%] h-[80%] text-[#06b6d4]/40" viewBox="0 0 100 100" fill="none">
                <path d="M 0,20 Q 25,0 50,20 T 100,20" stroke="currentColor" strokeWidth="1" />
                <path d="M 0,50 Q 25,30 50,50 T 100,50" stroke="currentColor" strokeWidth="1" />
                <path d="M 0,80 Q 25,60 50,80 T 100,80" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <Image
              src={images[1]}
              alt="Watercolor Specimen 5"
              fill
              className="object-cover contrast-150 grayscale"
              sizes="200px"
            />
          </motion.div>

          {/* CARD 6 (Row 3 Right) - Fluidity metric details */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={5}
            className="relative aspect-square rounded-xl border border-neutral-900 overflow-hidden bg-neutral-950"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent flex items-center p-3 z-20">
              <p className={`text-neutral-300 text-[7px] sm:text-[10px] leading-relaxed font-mono ${shareTechMono.className}`}>
                Organic granulational pigments diffusing on press substrates.
              </p>
            </div>
            <div className={`absolute bottom-2 right-2 z-20 text-[5px] sm:text-[6px] font-mono text-neutral-500 uppercase tracking-widest ${shareTechMono.className}`}>
              FLUIDITY // bernald
            </div>
            <Image
              src={images[2]}
              alt="Watercolor Specimen 6"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
