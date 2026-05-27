"use client";

import Container from "../components/Container";
import ScrollReveal from "../components/ScrollReveal";
import { stats } from "../data/stats";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-24
        md:py-36

        bg-black

        text-white
      "
    >
      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          mix-blend-soft-light

          pointer-events-none
        "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* LARGE GLOW ORBS */}
      <motion.div
        className="
          absolute
          top-[-10%]
          left-[-10%]

          w-[420px]
          h-[420px]

          rounded-full

          bg-[#7c3aed]/20

          blur-[140px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          bottom-[-10%]
          right-[-10%]

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#2563eb]/20

          blur-[160px]
        "
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING BUBBLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute

            rounded-full

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-md
          "
          style={{
            width: `${40 + i * 6}px`,
            height: `${40 + i * 6}px`,
            left: `${(i * 8) % 100}%`,
            top: `${(i * 13) % 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container>
        {/* HEADER */}
        <ScrollReveal direction="up">
          <div className="relative z-10 text-center mb-24">
            <p
              className="
                text-[11px]

                uppercase

                tracking-[0.38em]

                text-white/40

                mb-6
              "
            >
              ACHIEVEMENTS
            </p>

            <h2
              className="
                text-[16vw]
                md:text-[7vw]

                leading-[0.82]

                font-black

                tracking-[-0.08em]

                uppercase

                text-white
              "
            >
              Creative
              <br />
              Milestones
            </h2>

            <p
              className="
                mt-8

                max-w-2xl

                mx-auto

                text-white/55

                text-sm
                md:text-lg

                leading-relaxed
              "
            >
              A journey shaped through artistic excellence,
              immersive storytelling, and years of visual craftsmanship.
            </p>
          </div>
        </ScrollReveal>

        {/* STATS */}
        <div
          className="
            relative
            z-10

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4

            gap-6
          "
        >
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  relative

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  backdrop-blur-xl

                  p-8
                  md:p-10

                  min-h-[280px]

                  group
                "
              >
                {/* INNER GLOW */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-700

                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]
                  "
                />

                {/* FLOATING MINI ORB */}
                <motion.div
                  className="
                    absolute
                    top-5
                    right-5

                    w-16
                    h-16

                    rounded-full

                    bg-white/[0.05]

                    border
                    border-white/10

                    backdrop-blur-md
                  "
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />

                {/* VALUE */}
                <motion.div
                  className="
                    relative
                    z-10

                    text-[16vw]
                    md:text-[5vw]

                    leading-none

                    font-black

                    tracking-[-0.08em]

                    text-white

                    mb-4
                  "
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {stat.value}
                </motion.div>

                {/* LABEL */}
                <h3
                  className="
                    relative
                    z-10

                    text-[13px]
                    md:text-[16px]

                    uppercase

                    tracking-[0.24em]

                    font-semibold

                    text-white/90

                    mb-5
                  "
                >
                  {stat.label}
                </h3>

                {/* DESCRIPTION */}
                {stat.description && (
                  <p
                    className="
                      relative
                      z-10

                      text-white/50

                      text-sm

                      leading-relaxed
                    "
                  >
                    {stat.description}
                  </p>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* BOTTOM SHADE */}
      <div
        className="
          absolute
          bottom-0
          left-0

          w-full
          h-40

          bg-gradient-to-t
          from-black
          to-transparent

          pointer-events-none
        "
      />
    </section>
  );
}