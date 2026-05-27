"use client";

import { useEffect, useState, useRef } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

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

  /* PARALLAX */

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        w-full
        h-[100svh]
        overflow-hidden
        bg-black
      "
    >
      {/* VIDEO */}
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
          brightness-[0.88]
          contrast-[0.92]
          saturate-[0.72]
        "
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/35
          z-[1]
        "
      />

      {/* FILM GRAIN */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
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
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -40,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                items-center
                justify-center
              "
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
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.98,
          }}
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

       
        {/* MASSIVE PREMIUM TEXT */}
<motion.div
  style={{
    y: textY,
    opacity,
  }}
  className="
    absolute
    bottom-[10vw]
    md:bottom-[8px]
    left-0
    w-full
    z-10
    pointer-events-none
    overflow-hidden
    px-[10px]
  "
>
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

      text-[22vw]
      md:text-[18.2vw]

      leading-[0.82]

      font-black

      tracking-[-0.11em]

      uppercase
      select-none
      whitespace-nowrap
    "
  >
    <span
      className="
        block
        w-full

        bg-gradient-to-b
        from-[#ffffff]
        via-[#f4e8ec]
        to-[#7d5a63]

        bg-clip-text
        text-transparent

        opacity-90

      "
    >
      Bernald
    </span>
  </motion.h1>
</motion.div>

      {/* LOWER SHADE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[42vh]

          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent

          z-20
          pointer-events-none
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          z-[3]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 42%, rgba(0,0,0,0.52) 100%)",
        }}
      />
    </section>
  );
}