"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const stats = [
    { number: "08+", label: "Years Experience" },
    { number: "150+", label: "Projects Crafted" },
    { number: "100+", label: "Creative Clients" },
  ];

  const specializations = [
    "MIXED MEDIA ART",
    "WALL MURALS",
    "VISUAL STORYTELLING",
    "STENCIL TYPOGRAPHY",
    "CINEMATIC ART",
    "SURFACE DESIGN",
  ];

 const artistImages = [
  "/images/about/1.jpg",
  "/images/about/2.jpg",
  "/images/about/3.jpg",
];

  const [currentSpec, setCurrentSpec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpec((prev) => (prev + 1) % specializations.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [specializations.length]);

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        bg-white
        overflow-hidden
        scroll-mb-0
      "
    >
      {/* Grain */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-multiply
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* Grid Lines */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-black/5" />
      <div className="absolute top-0 left-1/2 h-full w-px bg-black/5" />
      <div className="absolute top-0 left-3/4 h-full w-px bg-black/5" />

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-black/5" />

      <div
        className="
          relative
          z-10
          px-6
          md:px-12
          py-20
          md:py-32
        "
      >
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            flex
            items-center
            gap-4
            md:gap-6
            mb-12
            md:mb-20
          "
        >
          <div className="w-12 md:w-16 h-px bg-black/30" />
          <p
            className="
              text-[10px]
              md:text-[11px]
              uppercase
              tracking-[0.2em]
              md:tracking-[0.3em]
              text-black/50
            "
          >
            ABOUT THE ARTIST
          </p>
        </motion.div>

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-12
            md:gap-24
            items-end
          "
        >
          {/* LEFT */}
          <div>
            {/* Huge Title */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                text-[22vw]
                md:text-[10vw]
                leading-[0.85]
                font-black
                tracking-[-0.08em]
                uppercase
                text-black
              "
            >
              About
            </motion.h2>

            {/* Animated Spec with Framer Motion */}
            <div
              className="
                mt-6
                md:mt-10
                h-16
                md:h-20
                overflow-hidden
                flex
                items-center
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpec}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p
                    className="
                      text-[12px]
                      md:text-[26px]
                      uppercase
                      tracking-[0.2em]
                      md:tracking-[0.32em]
                      text-black/80
                      font-semibold
                    "
                  >
                    {specializations[currentSpec]}
                  </p>
                  <div className="mt-3 md:mt-4 w-24 md:w-40 h-px bg-black/20" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-10 md:mt-20 max-w-2xl space-y-6 md:space-y-10"
            >
              <p
                className="
                  text-[18px]
                  md:text-[32px]
                  leading-[1.5]
                  text-black/85
                  font-light
                "
              >
                Bernald creates emotionally immersive visual experiences
                through cinematic composition, mixed media experimentation,
                and large-scale artistic storytelling.
              </p>

              <p
                className="
                  text-black/60
                  text-base
                  md:text-lg
                  leading-relaxed
                  max-w-xl
                "
              >
                Blending physical textures, spatial narratives, mural work,
                and contemporary visual language, each project is designed
                to feel atmospheric, timeless, and deeply human.
              </p>
            </motion.div>
          </div>

          {/* RIGHT - Infinite 3D Sliding Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              relative
              mt-8
              md:mt-0
              h-[400px]
              md:h-[700px]
              overflow-hidden
              bg-black/5
            "
          >
            {/* Infinite Slider */}
            <motion.div
              className="flex h-full w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25, // Slightly slower for smoother mobile viewing
              }}
            >
              {/* Duplicate array for seamless loop */}
              {[...artistImages, ...artistImages].map((src, index) => (
                <div
                  key={index}
                  className="
                    h-full 
                    w-[260px] 
                    md:w-[450px] 
                    flex-shrink-0 
                    border-r 
                    border-white/10
                  "
                >
                  <img
                    src={src}
                    alt={`3D Art ${index}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      grayscale
                      contrast-[1.1]
                      brightness-[0.95]
                    "
                  />
                </div>
              ))}
            </motion.div>

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

            {/* Bottom Text */}
            <div
              className="
                absolute
                bottom-6
                md:bottom-10
                left-6
                md:left-10
                z-10
              "
            >
              <p
                className="
                  text-white
                  text-[9px]
                  md:text-[11px]
                  uppercase
                  tracking-[0.2em]
                  md:tracking-[0.28em]
                "
              > 
                BERNALD GEORGE RAJ J
              </p>

              <div className="mt-3 md:mt-4 w-20 md:w-32 h-px bg-white/30" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            gap-10
            md:gap-12
            mt-20
            md:mt-32
            pt-10
            md:pt-16
            border-t
            border-black/10
          "
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              // Make the third stat span full width on mobile to avoid orphaned columns
              className={i === 2 ? "col-span-2 md:col-span-1" : ""}
            >
              <h3
                className="
                  text-[14vw]
                  sm:text-[10vw]
                  md:text-[6vw]
                  leading-none
                  font-black
                  tracking-[-0.06em]
                  text-black
                "
              >
                {stat.number}
              </h3>

              <p
                className="
                  mt-2
                  md:mt-4
                  text-[9px]
                  md:text-[11px]
                  uppercase
                  tracking-[0.15em]
                  md:tracking-[0.28em]
                  text-black/50
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}