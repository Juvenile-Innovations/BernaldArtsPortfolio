"use client";

import { useEffect, useState } from "react";

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
    "CINEMATIC ART DIRECTION",
    "SURFACE DESIGN",
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
        bg-[#f5f1eb]
        overflow-hidden
      "
    >
      {/* Grain */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          mix-blend-multiply
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* Grid Lines */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-black/10" />
      <div className="absolute top-0 left-1/2 h-full w-px bg-black/10" />
      <div className="absolute top-0 left-3/4 h-full w-px bg-black/10" />

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-black/10" />

      <div
        className="
          relative
          z-10
          px-6
          md:px-12
          py-32
        "
      >
        {/* Small Label */}
        <div
          className="
            flex
            items-center
            gap-6
            mb-20
          "
        >
          <div className="w-16 h-px bg-black/30" />

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-black/50
            "
          >
            ABOUT THE ARTIST
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-24
            items-end
          "
        >
          {/* LEFT */}
          <div>
            {/* Huge Title */}
            <h2
              className="
                text-[18vw]
                md:text-[10vw]
                leading-[0.85]
                font-black
                tracking-[-0.08em]
                uppercase
                text-black
              "
            >
              About
            </h2>

            {/* Animated Spec */}
            <div
              className="
                mt-10
                h-20
                overflow-hidden
                flex
                items-center
              "
            >
              <div
                key={currentSpec}
                className="
                  animate-[fadeRole_2.5s_ease-in-out]
                "
              >
                <p
                  className="
                    text-[14px]
                    md:text-[26px]
                    uppercase
                    tracking-[0.32em]
                    text-black/80
                    font-semibold
                  "
                >
                  {specializations[currentSpec]}
                </p>

                <div className="mt-4 w-40 h-px bg-black/20" />
              </div>
            </div>

            {/* Description */}
            <div className="mt-20 max-w-2xl space-y-10">
              <p
                className="
                  text-[20px]
                  md:text-[32px]
                  leading-[1.4]
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
                  text-lg
                  leading-relaxed
                  max-w-xl
                "
              >
                Blending physical textures, spatial narratives, mural work,
                and contemporary visual language, each project is designed
                to feel atmospheric, timeless, and deeply human.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              relative
              h-[700px]
              overflow-hidden
            "
          >
            {/* Image */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
              "
            >
              <img
                src="/images/about.jpg"
                alt="Bernald"
                className="
                  w-full
                  h-full
                  object-cover
                  grayscale
                  contrast-[0.95]
                  brightness-[0.92]
                "
              />
            </div>

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                to-transparent
              "
            />

            {/* Bottom Text */}
            <div
              className="
                absolute
                bottom-10
                left-10
                z-10
              "
            >
              <p
                className="
                  text-white
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                "
              >
                CINEMATIC VISUAL STORYTELLING
              </p>

              <div className="mt-4 w-32 h-px bg-white/30" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-12
            mt-32
            pt-16
            border-t
            border-black/10
          "
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3
                className="
                  text-[12vw]
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
                  mt-4
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-black/50
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}