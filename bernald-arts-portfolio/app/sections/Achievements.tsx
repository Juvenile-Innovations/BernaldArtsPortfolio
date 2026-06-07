"use client";

import Container from "../components/Container";
import VantaBackground from "../components/VantaBackground";
import { stats } from "../data/stats";

export default function Achievements() {
  return (
    <VantaBackground
      type="halo"
      color={0xd4af37}
      backgroundColor={0x12091f}
    >
      <section
        id="achievement"
        className="
          relative
          min-h-screen

          flex
          items-center

          md:py-32

          text-white
        "
      >
        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-black/40
            via-black/50
            to-black/70
          "
        />

        <Container>
          <div className="relative z-10">
            {/* HEADER */}

            <div className="text-center mb-20">
              <p
                className="
                  text-[#d4af37]

                  uppercase

                  tracking-[0.45em]

                  text-xs

                  mb-4
                "
              >
                ACHIEVEMENTS
              </p>

              <h2
                className="
                  text-5xl
                  md:text-7xl
                  lg:text-8xl

                  font-black

                  uppercase

                  leading-none

                  mb-6
                "
              >
                Creative
                <br />
                Milestones
              </h2>

              <p
                className="
                  max-w-3xl
                  mx-auto

                  text-white/70

                  text-sm
                  md:text-lg

                  leading-relaxed
                "
              >
                Every artwork tells a story.
                Every milestone reflects years of
                dedication, creativity, and artistic
                excellence.
              </p>
            </div>

            {/* STATS GRID */}

            <div
              className="
                grid

                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4

                gap-8
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    relative

                    overflow-hidden

                    rounded-3xl

                    border
                    border-[#d4af37]/20

                    bg-black/40

                    backdrop-blur-md

                    p-8

                    transition-all
                    duration-300

                    hover:border-[#d4af37]/50
                    hover:bg-black/50
                  "
                >
                  {/* Gold Accent Line */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0

                      w-full
                      h-[2px]

                      bg-[#d4af37]
                    "
                  />

                  {/* Value */}

                  <div
                    className="
                      text-[#d4af37]

                      text-6xl
                      md:text-7xl

                      font-black

                      leading-none

                      mb-6
                    "
                  >
                    {stat.value}
                  </div>

                  {/* Label */}

                  <h3
                    className="
                      uppercase

                      tracking-[0.25em]

                      text-sm

                      font-semibold

                      mb-4
                    "
                  >
                    {stat.label}
                  </h3>

                  {/* Description */}

                  {stat.description && (
                    <p
                      className="
                        text-white/65

                        text-sm

                        leading-relaxed
                      "
                    >
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </VantaBackground>
  );
}