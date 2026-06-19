"use client";

import { useEffect, useState, useRef } from "react";
import { Protest_Guerrilla } from "next/font/google";
import { elsie } from "../lib/fonts";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const protestGuerrilla = Protest_Guerrilla({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-protest-guerrilla",
});

export default function Hero() {
  const roles = [
    "MULTIDISCIPLINARY ARTIST",
    "MIXED MEDIA ARTIST",
    "SURFACE POLYMATH",
    "WALL ARTIST",
    "MURAL DESIGNER",
    "STENCIL WORD ARTIST",
    "ACRYLIC PAINTER",
    "VISUAL STORYTELLER",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* PARALLAX & EFFECTS */
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={heroRef}
      id="home"
      className={`
        relative
        w-full
        h-[100svh]
        overflow-hidden
        bg-black
        ${protestGuerrilla.variable}
      `}
    >
      {/* CLEAN VIDEO LAYERING */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{
          y: videoY,
          scale,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          z-0
        "
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* AMBIENT GLOW BACKGROUNDS */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-[140px] pointer-events-none z-[1]" 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-400/10 blur-[140px] pointer-events-none z-[1]" 
      />

      {/* FILM GRAIN */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-soft-light
          pointer-events-none
          z-[2]
        "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* CENTER CONTENT */}
      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="
          absolute
          inset-0
          z-30
          flex
          flex-col
          items-center
          justify-center
          px-6
        "
      >
        {/* ROLES */}
        <div
          className="
            h-[50px]
            md:h-[70px]
            overflow-hidden
            flex
            items-center
            justify-center
            mb-10
            md:mb-12
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <p
                className="
                  text-white
                  text-center
                  text-[10px]
                  sm:text-[12px]
                  md:text-[26px]
                  uppercase
                  tracking-[0.24em]
                  md:tracking-[0.42em]
                  font-semibold
                  whitespace-nowrap
                "
              >
                {roles[currentRole]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTACT BUTTON */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex
            items-center
            justify-center
            px-8
            md:px-12
            py-3
            md:py-4
            text-white
            text-sm
            md:text-base
            font-semibold
            uppercase
            tracking-[0.15em]
            rounded-full
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            hover:bg-white/20
            hover:border-white/30
            transition-all
            duration-300
            shadow-lg
            hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]
          "
        >
          Book an ART
        </motion.a>
      </motion.div>
       
      {/* BOTTOM CONTAINER AREA */}
      <motion.div
        style={{
          y: textY,
          opacity,
        }}
        className="
          absolute
          bottom-[4vw]
          md:bottom-[8px]
          left-0
          w-full
          z-10
          flex
          flex-col
          pointer-events-none
          overflow-hidden
        "
      >
        {/* RIGHT ALIGNED OVER-TEXT DOCK */}
        <div className="flex flex-col gap-3.5 self-end mr-6 mb-4 pointer-events-auto">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-green-400 hover:border-green-500/30 transition-colors duration-300 shadow-md"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.481 8.417-.004 6.618-5.34 11.965-11.91 11.965-2.001-.001-3.973-.504-5.731-1.463L0 24zm6.59-4.846c1.657.982 3.311 1.532 5.315 1.533 5.515 0 10.004-4.5 10.008-10.022.002-2.674-1.036-5.188-2.925-7.077C17.157 1.7 14.653.659 11.97.66 6.456.66 1.967 5.16 1.965 10.681c-.001 2.036.544 3.734 1.545 5.362l-.994 3.63 3.731-.978zM18.004 14.9c-.327-.164-1.938-.957-2.239-1.067-.301-.11-.522-.164-.741.164-.219.329-.85.164-1.042.383-.192.219-.384.246-.711.082-.327-.164-1.38-.508-2.63-1.623-.972-.867-1.628-1.939-1.819-2.266-.192-.328-.02-.505.144-.668.148-.146.328-.383.493-.574.165-.192.22-.328.33-.547.11-.219.055-.411-.028-.574-.082-.164-.741-1.785-1.015-2.441-.267-.641-.539-.553-.741-.564-.192-.01-.411-.012-.63-.012-.218 0-.575.082-.876.411-.301.328-1.15 1.121-1.15 2.736 0 1.614 1.177 3.172 1.341 3.391.164.219 2.316 3.537 5.61 4.961.783.339 1.395.541 1.872.692.787.25 1.503.215 2.069.13.631-.094 1.938-.793 2.21-1.559.272-.766.272-1.422.192-1.559-.08-.137-.294-.22-.62-.383z"/>
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-pink-400 hover:border-pink-500/30 transition-colors duration-300 shadow-md"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-300 shadow-md"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </motion.a>
        </div>

        {/* MASSIVE EDGE-TO-EDGE HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 120,
            scale: 0.94,
            filter: "blur(14px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            w-full
            text-center
            text-[14.8vw]
            leading-[0.8]
            select-none
            whitespace-nowrap
          "
          style={{ fontFamily: "var(--font-protest-guerrilla), sans-serif" }}
        >
          <span
            className="
              block
              w-full
              bg-clip-text
              text-transparent
              tracking-[0.01em]
            "
            style={{
              backgroundImage: "linear-gradient(to bottom, rgb(255, 255, 255), rgba(241, 230, 234, 0.45), rgba(192, 127, 143, 0.25))"
            }}
          >
            BERNALD ARTS
          </span>
        </motion.h1>
      </motion.div>

      {/* LOWER GRADIENT BLEND */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[10vh]
          bg-gradient-to-t
          from-black
          to-transparent
          z-20
          pointer-events-none
        "
      />
    </section>
  );
}