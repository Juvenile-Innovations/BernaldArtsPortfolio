"use client";

import Container from "../components/Container";
import ScrollReveal from "../components/ScrollReveal";
import { stats } from "../data/stats";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievement"
      className="
        relative
        overflow-hidden

        py-28
        md:py-40

        bg-gradient-to-br
        from-black
        via-slate-950
        to-[#12091f]

        text-white
      "
    >
      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          mix-blend-soft-light

          pointer-events-none
        "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* BIG GLASS ORB 1 */}
      <motion.div
        className="
          absolute
          top-[-12%]
          left-[-8%]

          w-[700px]
          h-[700px]

          rounded-full

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-3xl

          blur-[120px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* BIG GLASS ORB 2 */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]

          w-[800px]
          h-[800px]

          rounded-full

          border
          border-indigo-300/10

          bg-indigo-300/[0.04]

          backdrop-blur-3xl

          blur-[140px]
        "
        animate={{
          x: [0, -90, 0],
          y: [0, -70, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING MASSIVE GLASS BUBBLES */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute

            rounded-full

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-2xl
          "
          style={{
            width: `${90 + i * 22}px`,
            height: `${90 + i * 22}px`,
            left: `${(i * 11) % 100}%`,
            top: `${(i * 9) % 100}%`,
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, 35, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8 + i,
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

                tracking-[0.4em]

                text-white/35

                mb-6
              "
            >
              ACHIEVEMENTS
            </p>

            <h2
              className="
                text-[16vw]
                md:text-[7vw]

                leading-[0.8]

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

                text-white/50

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

            gap-7
          "
        >
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.12}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: -140,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                  relative

                  overflow-hidden

                  rounded-[34px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  backdrop-blur-2xl

                  p-8
                  md:p-10

                  min-h-[300px]

                  shadow-[0_0_80px_rgba(255,255,255,0.03)]

                  group
                "
              >
                {/* INNER PREMIUM LIGHT */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-700

                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]
                  "
                />

                {/* MASSIVE GLASS BUBBLE */}
                <motion.div
                  className="
                    absolute
                    top-[-10%]
                    right-[-10%]

                    w-36
                    h-36

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.05]

                    backdrop-blur-2xl
                  "
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 12, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
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

                    mb-5
                  "
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
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
                    md:text-[15px]

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

                      text-white/45

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