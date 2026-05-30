"use client";

import { useRef } from "react";

import Container from "../components/Container";
import ScrollReveal from "../components/ScrollReveal";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const galleryImages = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/14.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/16.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/18.jpg",
];

export default function Gallery() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -300]
  );

  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 250]
  );

  const x3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -220]
  );

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="
        relative
        overflow-hidden

        bg-[radial-gradient(circle_at_top_left,#3a0d18_0%,#1a0710_22%,#090909_52%,#000000_100%)]

        py-24
        md:py-36
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
          backgroundImage:
            "url('/noise.png')",
        }}
      />

      {/* PINK GLOW ORB 1 */}
      <motion.div
        className="
          absolute
          top-[-18%]
          left-[-12%]

          w-[850px]
          h-[850px]

          rounded-full

          bg-[#ff4d8d]/[0.10]

          blur-[220px]
        "
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* PINK GLOW ORB 2 */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]

          w-[950px]
          h-[950px]

          rounded-full

          bg-[#ff6fa8]/[0.07]

          blur-[260px]
        "
        animate={{
          x: [0, -90, 0],
          y: [0, 60, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CENTER LIGHT */}
      <motion.div
        className="
          absolute
          top-[40%]
          left-[30%]

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#ff8ab8]/[0.05]

          blur-[180px]
        "
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING PARTICLES */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute

            w-[2px]
            h-[2px]

            rounded-full

            bg-[#ff9cc2]

            blur-[1px]
          "
          style={{
            left: `${(i * 8) % 100}%`,
            top: `${(i * 9) % 100}%`,
          }}
          animate={{
            opacity: [0, 0.9, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* HEADER */}
      <Container>
        <ScrollReveal direction="up">
          <div className="text-center mb-24">
            <p
              className="
                text-[10px]
                md:text-[11px]

                uppercase

                tracking-[0.42em]

                text-[#ff9cc2]

                mb-6
              "
            >
              CINEMATIC GALLERY
            </p>

            <h2
              className="
                text-white

                text-[16vw]
                md:text-[7vw]

                leading-[0.82]

                font-black

                tracking-[-0.08em]

                uppercase
              "
            >
              Visual
              <br />
              Experience
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
              A floating cinematic showcase
              crafted with motion, textures,
              atmosphere, and visual rhythm.
            </p>
          </div>
        </ScrollReveal>
      </Container>

      {/* MOVING LANES */}
      <div
        className="
          relative

          flex
          flex-col

          gap-4
          md:gap-6
        "
      >
        {[
          galleryImages.slice(0, 6),
          galleryImages.slice(6, 12),
          galleryImages.slice(12, 18),
        ].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="
              relative

              overflow-x-auto
              overflow-y-hidden

              scrollbar-hide
            "
          >
            <motion.div
              animate={{
                x:
                  rowIndex % 2 === 0
                    ? [0, -180, 0]
                    : [0, 180, 0],
              }}
              transition={{
                duration: 30 + rowIndex * 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex

                gap-4
                md:gap-6

                w-max

                px-4
                md:px-6
              "
            >
              {[...row, ...row].map(
                (image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      relative

                      overflow-hidden

                      min-w-[72vw]
                      sm:min-w-[58vw]
                      md:min-w-[420px]

                      h-[220px]
                      sm:h-[240px]
                      md:h-[300px]

                      border
                      border-[#ff8ab8]/10

                      bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]

                      backdrop-blur-2xl

                      shadow-[0_20px_100px_rgba(255,90,150,0.08)]

                      group

                      shrink-0
                    "
                  >
                    {/* IMAGE */}
                    <motion.img
                      src={image}
                      alt="Artwork"
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 1.4,
                      }}
                      className="
                        absolute
                        inset-0

                        w-full
                        h-full

                        object-cover

                        brightness-[0.78]
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* TOP LIGHT */}
                    <div
                      className="
                        absolute
                        top-0
                        left-0

                        w-full
                        h-px

                        bg-gradient-to-r
                        from-transparent
                        via-[#ff9cc2]/60
                        to-transparent
                      "
                    />

                    {/* PINK GLOW */}
                    <div
                      className="
                        absolute
                        inset-0

                        opacity-0
                        group-hover:opacity-100

                        transition-opacity
                        duration-700

                        bg-[radial-gradient(circle_at_center,rgba(255,140,180,0.16),transparent_70%)]
                      "
                    />

                    {/* VIEW BUTTON */}
                    <div
                      className="
                        absolute
                        bottom-5
                        left-5

                        opacity-0
                        group-hover:opacity-100

                        translate-y-4
                        group-hover:translate-y-0

                        transition-all
                        duration-500
                      "
                    >
                      <button
                        className="
                          px-5
                          py-3

                          border
                          border-[#ff9cc2]/20

                          bg-black/40

                          backdrop-blur-xl

                          text-white

                          text-[10px]

                          uppercase

                          tracking-[0.28em]
                        "
                      >
                        View Artwork
                      </button>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* CINEMATIC OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(255,120,170,0.02)_0%,transparent_20%,transparent_80%,rgba(255,120,170,0.03)_100%)]

          pointer-events-none
        "
      />

      {/* BOTTOM SHADE */}
      <div
        className="
          absolute
          bottom-0
          left-0

          w-full
          h-40

          bg-gradient-to-t
          from-[#220710]
          to-transparent

          pointer-events-none
        "
      />
    </section>
  );
}