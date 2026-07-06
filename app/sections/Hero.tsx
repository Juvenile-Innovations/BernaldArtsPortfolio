"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Protest_Guerrilla } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { spaceGrotesk } from "@/app/lib/fonts";

import { FallingPetals } from "@/app/components/ui/FallingPetals";

const protestGuerrilla = Protest_Guerrilla({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-protest-guerrilla",
});

const ROLES = [
  "MULTIDISCIPLINARY ARTIST",
  "MIXED MEDIA ARTIST",
  "SURFACE POLYMATH",
  "WALL ARTIST",
  "MURAL DESIGNER",
  "STENCIL WORD ARTIST",
  "ACRYLIC PAINTER",
  "VISUAL STORYTELLER",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const ballTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Rotate role text every 3 s
  useEffect(() => {
    const id = setInterval(
      () => setCurrentRole((p) => (p + 1) % ROLES.length),
      3000,
    );
    return () => clearInterval(id);
  }, []);

  // Scroll-driven collapse:
  // Hero is pinned → video box shrinks into a white ball
  // Video fades out, Logo fades in, Text beneath fades in
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    const createHeroAnimation = (isMobile: boolean) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-pin",
          pin: true,
          scrub: isMobile ? 0.5 : 1.2, // Faster, tighter scrub on mobile
          start: "top top",
          end: isMobile ? "+=500px" : "+=800px", // Less scroll distance required on mobile
        },
      });

      // Video box collapses into a white circle
      tl.to(videoWrapRef.current, {
        width: isMobile ? "140px" : "180px", // Slightly smaller ball on mobile
        height: isMobile ? "140px" : "180px",
        borderRadius: "50%",
        ease: "power2.inOut",
        duration: 1,
      }, 0);

      // Video fades out near the end of the shrink
      tl.to(videoRef.current, {
        opacity: 0,
        ease: "power2.inOut",
        duration: 0.4,
      }, 0.6);

      // Logo fades in near the end of the shrink
      tl.to(logoRef.current, {
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.4,
      }, 0.6);

      // Petals fade in along with logo
      tl.to(petalsRef.current, {
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.4,
      }, 0.6);

      // Text beneath ball fades in and slides up slightly
      tl.fromTo(ballTextRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.4,
        },
        0.6
      );

      // All original hero content fades out at the same time
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          ease: "power2.in",
          duration: 0.6,
        },
        0,
      );
    };

    // Apply different animation configurations based on screen size
    mm.add("(min-width: 768px)", () => createHeroAnimation(false));
    mm.add("(max-width: 767px)", () => createHeroAnimation(true));

    return () => mm.revert();
  }, []);

  return (
    <section
      id="hero-pin"
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Falling Petals Background (Fades in across the entire background) */}
      <div ref={petalsRef} className="absolute inset-0 z-[5] opacity-0 overflow-hidden pointer-events-none">
        <FallingPetals />
      </div>

      {/* Video Box — GSAP shrinks this into a white ball */}
      <div
        ref={videoWrapRef}
        className="absolute w-[100vw] h-[100vh] overflow-hidden bg-white flex items-center justify-center z-10"
        style={{ borderRadius: "0%" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Flaticon Logo inside the ball, initially hidden */}
        <img
          ref={logoRef}
          src="/images/BernaldArtsLogo.png"
          alt="Hero Icon"
          className="absolute w-30 h-30 object-contain z-20 opacity-0"
        />
      </div>

      {/* Text beneath the ball (revealed after shrink) */}
      <div
        ref={ballTextRef}
        className="absolute z-10 flex flex-col items-center justify-center pointer-events-auto opacity-0"
        style={{ top: "calc(50% + 120px)" }}
      >
        <p className="text-white text-xl md:text-2xl font-black uppercase tracking-[0.3em] mb-3">
          BERNALD ARTS
        </p>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-400/10 blur-[140px] pointer-events-none z-[1]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light pointer-events-none z-[2]"
        style={{ backgroundImage: "url('/noise.png')" }}
      />

      {/* All visible content — fades out in sync with collapse */}
      <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col">
        {/* Centre — rotating role + CTA */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 md:px-6">
          <div className="h-[40px] md:h-[70px] flex items-center justify-center mb-8 md:mb-12">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-center text-[10px] sm:text-[12px] md:text-[26px] uppercase tracking-[0.2em] md:tracking-[0.42em] font-semibold whitespace-nowrap"
              >
                {ROLES[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 md:px-12 py-3 md:py-4 text-white text-xs md:text-base font-semibold uppercase tracking-[0.1em] md:tracking-[0.15em] rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
          >
            Book an ART
          </motion.a>
        </div>

        {/* Large heading — bottom edge */}
        <motion.div
          className="absolute bottom-0 left-0 w-full z-10 pointer-events-none px-4 md:px-0"
          initial={{ opacity: 0, y: 120, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className={`w-full text-center text-[12.5vw] md:text-[13.5vw] lg:text-[14.2vw] xl:text-[14.5vw] leading-[0.8] select-none whitespace-nowrap pb-[8vw] md:pb-[4vw] lg:pb-2 font-black uppercase ${spaceGrotesk.className}`}
          >
            <span
              className="block bg-clip-text text-transparent tracking-[-0.02em]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #ffffff, rgba(241,230,234,.8), rgba(192,127,143,.6))",
              }}
            >
              BERNALD ARTS
            </span>
          </h1>
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[15vh] md:h-[10vh] bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
